/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import * as THREE from 'three';
import { MS_GEOJSON } from '../../data/msGeoJson.ts';
import { MunicipioMS, MUNICIPIOS_DATA } from '../../data/municipiosData.ts';
import { formatNumber } from '../../utils/formatters.ts';
import { VisitorStats } from '../../VisitorStats.tsx';
import { SponsorsTicker } from '../layout/SponsorsTicker.tsx';
import { GiroMsWidget } from '../widgets/GiroMsWidget.tsx';
import { NoticiasLicitacoesWidget } from '../widgets/NoticiasLicitacoesWidget.tsx';
import { MsSearchActions, TabType } from '../../utils/msSearchEngine.ts';
import { 
  Rotate3d, 
  Layers, 
  Compass, 
  Search, 
  X,
  Instagram,
  ChevronRight,
  Scale,
  Building2,
  Landmark,
  Vote,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Eye,
  Menu
} from 'lucide-react';

export type MetricMode = 'regioes' | 'divida' | 'legislativo' | 'transparencia';
export type ViewPreset = 'perspective' | 'top' | 'isometric';

interface InteractiveMSMapProps {
  selectedMunicipio: MunicipioMS | null;
  onSelectMunicipio: (municipio: MunicipioMS | null) => void;
  onSelectMunicipioWithTab?: (municipio: MunicipioMS | null, tab: TabType) => void;
  onOpenTce?: () => void;
  onOpenGoverno?: () => void;
  onOpenLegislativo?: () => void;
  onOpenEleicoes?: () => void;
}

const CENTER_LNG = -54.55;
const CENTER_LAT = -20.62;
const SCALE = 16.0;

const NEIGHBORS = [
  { name: "MATO GROSSO", x: 0, z: -64 },
  { name: "GOIÁS", x: 48, z: -52 },
  { name: "MINAS GERAIS", x: 74, z: -20 },
  { name: "SÃO PAULO", x: 68, z: 22 },
  { name: "PARANÁ", x: 10, z: 70 },
  { name: "PARAGUAI", x: -62, z: 36 },
  { name: "BOLÍVIA", x: -72, z: -22 }
];

export const REGIOES_OFICIAIS = [
  { nome: "Pantanal", cor: "#EAB308", border: "#CA8A04", text: "text-amber-300" },
  { nome: "Rota Norte", cor: "#84CC16", border: "#65A30D", text: "text-lime-300" },
  { nome: "Vale do Aporé", cor: "#C084FC", border: "#A855F7", text: "text-purple-300" },
  { nome: "Costa Leste", cor: "#DC2626", border: "#B91C1C", text: "text-red-400" },
  { nome: "Caminho dos Ipês", cor: "#EA580C", border: "#C2410C", text: "text-orange-400" },
  { nome: "Bonito / Serra da Bodoquena", cor: "#38BDF8", border: "#0284C7", text: "text-sky-300" },
  { nome: "Caminhos da Fronteira", cor: "#16A34A", border: "#15803D", text: "text-emerald-400" },
  { nome: "Grande Dourados", cor: "#93C5FD", border: "#60A5FA", text: "text-blue-300" },
  { nome: "Vale das Águas", cor: "#0284C7", border: "#0369A1", text: "text-cyan-400" },
  { nome: "7 Caminhos - Cone Sul", cor: "#7E22CE", border: "#6B21A8", text: "text-purple-400" }
];

const HUB_CITY_IBGES = new Set([
  5002704, 5003702, 5008305, 5003207, 5006606, 
  5005707, 5002209, 5003306, 5006200, 5005400, 
  5007901, 5001102, 5006309, 5007109, 5006903
]);

interface MeshItem {
  ibge: number;
  mesh: THREE.Mesh;
  baseElevation: number;
  defaultColor: number;
  center: THREE.Vector3;
}

function createTextSprite(text: string, color: string = '#64748b') {
  const canvas = document.createElement('canvas');
  canvas.width = 340;
  canvas.height = 80;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.font = `bold 28px 'Plus Jakarta Sans', system-ui, sans-serif`;
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 170, 40);
  }
  const texture = new THREE.CanvasTexture(canvas);
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true, opacity: 0.75 });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(16, 4, 1);
  return sprite;
}

export const InteractiveMSMap: React.FC<InteractiveMSMapProps> = ({
  selectedMunicipio,
  onSelectMunicipio,
  onSelectMunicipioWithTab,
  onOpenTce,
  onOpenGoverno,
  onOpenLegislativo,
  onOpenEleicoes
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [metricMode, setMetricMode] = useState<MetricMode>('regioes');
  const [viewPreset, setViewPreset] = useState<ViewPreset>(typeof window !== 'undefined' && window.innerWidth < 768 ? 'top' : 'perspective');
  const [hoveredMunicipio, setHoveredMunicipio] = useState<MunicipioMS | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegiao, setSelectedRegiao] = useState<string>('todas');
  const [showAllLabels, setShowAllLabels] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [screenLabels, setScreenLabels] = useState<Array<{
    ibge: number;
    nome: string;
    x: number;
    y: number;
    isHub: boolean;
    municipio: MunicipioMS;
    visible: boolean;
  }>>([]);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const meshesRef = useRef<MeshItem[]>([]);
  const hoveredMeshRef = useRef<THREE.Mesh | null>(null);
  const animFrameRef = useRef<number | null>(null);

  const selectedMunicipioRef = useRef(selectedMunicipio);
  selectedMunicipioRef.current = selectedMunicipio;
  const hoveredMunicipioRef = useRef(hoveredMunicipio);
  hoveredMunicipioRef.current = hoveredMunicipio;
  const showAllLabelsRef = useRef(showAllLabels);
  showAllLabelsRef.current = showAllLabels;

  const targetCameraPos = useRef<THREE.Vector3>(new THREE.Vector3(0, 85, 80));
  const targetLookAt = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));
  const currentLookAt = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));

  const isDraggingRef = useRef<boolean>(false);
  const dragButtonRef = useRef<number>(0);
  const previousMousePosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const sphericalRef = useRef<{ radius: number; theta: number; phi: number }>({
    radius: 120,
    theta: 0,
    phi: Math.PI / 3.8
  });

  const municipiosMap = useMemo(() => {
    const map = new Map<number, MunicipioMS>();
    MUNICIPIOS_DATA.forEach(m => map.set(m.ibge, m));
    return map;
  }, []);

  const filteredSearchList = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return MUNICIPIOS_DATA.filter(m => 
      m.nome.toLowerCase().includes(q) || 
      m.regiao.toLowerCase().includes(q) ||
      m.prefeito.nome.toLowerCase().includes(q)
    ).slice(0, 7);
  }, [searchQuery]);

  const getMetricAttributes = useCallback((m: MunicipioMS, mode: MetricMode) => {
    switch (mode) {
      case 'divida': {
        const maxDivida = 1850000000;
        const ratio = Math.min(1, Math.log10(m.financas.dividaConsolidada) / Math.log10(maxDivida));
        const height = 0.8 + ratio * 8.0;
        const color = new THREE.Color();
        if (ratio < 0.4) color.setHex(0x10b981);
        else if (ratio < 0.75) color.setHex(0xf59e0b);
        else color.setHex(0xef4444);
        return { height, color: color.getHex() };
      }
      case 'legislativo': {
        const gasto = m.financas.gastoLegislativoPorHabitante;
        const ratio = Math.min(1, Math.max(0, (gasto - 60) / 400));
        const height = 1.0 + ratio * 7.5;
        const color = new THREE.Color();
        if (gasto < 120) color.setHex(0x06b6d4);
        else if (gasto < 250) color.setHex(0x3b82f6);
        else color.setHex(0xec4899);
        return { height, color: color.getHex() };
      }
      case 'transparencia': {
        const nota = m.financas.indiceTransparenciaTCE;
        const ratio = (nota - 7.0) / 3.0;
        const height = 1.2 + ratio * 4.0;
        const color = new THREE.Color();
        if (nota >= 9.0) color.setHex(0x22c55e);
        else if (nota >= 8.0) color.setHex(0xeab308);
        else color.setHex(0xf97316);
        return { height, color: color.getHex() };
      }
      case 'regioes':
      default: {
        const hex = parseInt(m.regiaoCor.replace('#', '0x'), 16);
        const popRatio = Math.min(1, Math.log10(m.populacao) / 6.0);
        const height = 1.6 + popRatio * 3.8;
        return { height, color: hex };
      }
    }
  }, []);

  useEffect(() => {
    (meshesRef.current || []).forEach((val) => {
      const municipio = municipiosMap.get(val.ibge);
      if (!municipio) return;

      const { color, height } = getMetricAttributes(municipio, metricMode);
      val.defaultColor = color;
      val.baseElevation = height;

      const mat = val.mesh.material as THREE.MeshStandardMaterial;
      const matchesRegion = selectedRegiao === 'todas' || municipio.regiao === selectedRegiao;

      if (hoveredMunicipioRef.current?.ibge !== val.ibge && selectedMunicipioRef.current?.ibge !== val.ibge) {
        if (matchesRegion) {
          mat.color.setHex(color);
          mat.opacity = 1.0;
          mat.transparent = false;
        } else {
          mat.color.setHex(0x334155);
          mat.opacity = 0.35;
          mat.transparent = true;
        }
      }
      val.mesh.scale.set(1, 1, height);
    });
  }, [metricMode, selectedRegiao, municipiosMap, getMetricAttributes]);

  useEffect(() => {
    (meshesRef.current || []).forEach((val) => {
      const mat = val.mesh.material as THREE.MeshStandardMaterial;
      if (selectedMunicipio?.ibge === val.ibge) {
        mat.emissive.setHex(0x06b6d4);
        mat.emissiveIntensity = 0.55;
      } else if (hoveredMunicipio?.ibge === val.ibge) {
        mat.emissive.setHex(0x38bdf8);
        mat.emissiveIntensity = 0.35;
      } else {
        mat.emissive.setHex(0x000000);
        mat.emissiveIntensity = 0;
      }
    });
  }, [selectedMunicipio, hoveredMunicipio]);

  const applyViewPreset = useCallback((preset: ViewPreset) => {
    setViewPreset(preset);
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    if (preset === 'top' || isMobile) {
      const topRadius = isMobile ? 128 : 110;
      sphericalRef.current.radius = topRadius;
      sphericalRef.current.theta = 0;
      sphericalRef.current.phi = 0.05;
      targetLookAt.current.set(0, 0, 0);
      targetCameraPos.current.set(0, topRadius, 0.5);
    } else if (preset === 'isometric') {
      sphericalRef.current.radius = 125;
      sphericalRef.current.theta = Math.PI / 4;
      sphericalRef.current.phi = Math.PI / 3.2;
      targetLookAt.current.set(0, 0, 0);
      targetCameraPos.current.set(70, 75, 70);
    } else {
      sphericalRef.current.radius = 120;
      sphericalRef.current.theta = 0;
      sphericalRef.current.phi = Math.PI / 3.8;
      targetLookAt.current.set(0, 0, 0);
      targetCameraPos.current.set(0, 85, 80);
    }
  }, []);

  const focusOnMunicipio = useCallback((municipio: MunicipioMS) => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const rawX = (municipio.lng - CENTER_LNG) * SCALE;
    const rawZ = -(municipio.lat - CENTER_LAT) * SCALE;
    const targetX = rawX * 0.65;
    const targetZ = rawZ * 0.65;

    targetLookAt.current.set(targetX, 0.8, targetZ);
    if (isMobile) {
      // No mobile: foco na cidade mantendo visão superior calibrada para toque fácil
      sphericalRef.current.radius = 105;
      sphericalRef.current.theta = 0;
      sphericalRef.current.phi = 0.05;
      targetCameraPos.current.set(targetX, 105, targetZ + 0.5);
    } else {
      sphericalRef.current.radius = 95;
      const r = sphericalRef.current.radius;
      const theta = sphericalRef.current.theta;
      const phi = sphericalRef.current.phi;

      targetCameraPos.current.x = targetLookAt.current.x + r * Math.sin(phi) * Math.sin(theta);
      targetCameraPos.current.y = targetLookAt.current.y + r * Math.cos(phi);
      targetCameraPos.current.z = targetLookAt.current.z + r * Math.sin(phi) * Math.cos(theta);
    }
  }, []);

  const handleSelectCityWithTab = useCallback((municipio: MunicipioMS, tab?: TabType) => {
    if (onSelectMunicipioWithTab) {
      onSelectMunicipioWithTab(municipio, tab || 'noticias_municipais');
    } else {
      onSelectMunicipio(municipio);
    }
    focusOnMunicipio(municipio);
  }, [onSelectMunicipioWithTab, onSelectMunicipio, focusOnMunicipio]);

  const handleSelectCity = useCallback((municipio: MunicipioMS) => {
    handleSelectCityWithTab(municipio, 'noticias_municipais');
  }, [handleSelectCityWithTab]);

  const searchActions = useMemo<MsSearchActions>(() => ({
    selectMunicipio: (m, tab) => handleSelectCityWithTab(m, tab),
    openTce: onOpenTce,
    openGoverno: onOpenGoverno,
    openLegislativo: onOpenLegislativo,
    openEleicoes: onOpenEleicoes,
  }), [handleSelectCityWithTab, onOpenTce, onOpenGoverno, onOpenLegislativo, onOpenEleicoes]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    meshesRef.current = [];

    const width = container.clientWidth;
    const height = container.clientHeight;
    const isMobile = width < 768;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x020617);
    scene.fog = new THREE.FogExp2(0x020617, 0.0030);

    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    cameraRef.current = camera;
    if (isMobile) {
      // Mobile: carrega travado estritamente na visão superior calibrada (top view)
      sphericalRef.current.radius = 128;
      sphericalRef.current.theta = 0;
      sphericalRef.current.phi = 0.05;
      targetLookAt.current.set(0, 0, 0);
      targetCameraPos.current.set(0, 128, 0.5);
      camera.position.set(0, 128, 0.5);
      camera.lookAt(0, 0, 0);
    } else {
      camera.position.set(0, 85, 80);
      camera.lookAt(0, 0, 0);
    }

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    rendererRef.current = renderer;
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.25);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.4);
    dirLight.position.set(40, 110, 50);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.camera.near = 10;
    dirLight.shadow.camera.far = 250;
    dirLight.shadow.camera.left = -65;
    dirLight.shadow.camera.right = 65;
    dirLight.shadow.camera.top = 65;
    dirLight.shadow.camera.bottom = -65;
    dirLight.shadow.bias = -0.0005;
    scene.add(dirLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 0.45);
    rimLight.position.set(-60, 40, -40);
    scene.add(rimLight);

    const gridHelper = new THREE.GridHelper(220, 44, 0x1e293b, 0x0f172a);
    gridHelper.position.y = -0.2;
    scene.add(gridHelper);

    NEIGHBORS.forEach((n) => {
      const sprite = createTextSprite(n.name, '#64748b');
      sprite.position.set(n.x, 0.8, n.z);
      scene.add(sprite);
    });

    const group = new THREE.Group();
    scene.add(group);

    const newMeshes: MeshItem[] = [];

    MS_GEOJSON.features.forEach((feature) => {
      const ibge = feature.properties.id;
      const municipio = municipiosMap.get(ibge);
      if (!municipio) return;

      const polygonCoords = feature.geometry.coordinates[0];
      if (!polygonCoords || polygonCoords.length < 3) return;

      const shape = new THREE.Shape();
      polygonCoords.forEach((coord, i) => {
        const x = (coord[0] - CENTER_LNG) * SCALE;
        const y = (coord[1] - CENTER_LAT) * SCALE;
        if (i === 0) shape.moveTo(x, y);
        else shape.lineTo(x, y);
      });

      const { height: elevHeight, color: initialColor } = getMetricAttributes(municipio, metricMode);

      const geometry = new THREE.ExtrudeGeometry(shape, {
        depth: 1,
        bevelEnabled: true,
        bevelSegments: 2,
        steps: 1,
        bevelSize: 0.05,
        bevelThickness: 0.05
      });

      const material = new THREE.MeshStandardMaterial({
        color: initialColor,
        roughness: 0.35,
        metalness: 0.22,
        emissive: new THREE.Color(0x000000)
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.rotation.x = -Math.PI / 2;
      mesh.scale.set(1, 1, elevHeight);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.userData = { ibge, nome: municipio.nome, municipio };

      const centerX = (municipio.lng - CENTER_LNG) * SCALE;
      const centerZ = -(municipio.lat - CENTER_LAT) * SCALE;
      const centerVec = new THREE.Vector3(centerX, elevHeight + 0.6, centerZ);

      group.add(mesh);
      newMeshes.push({
        ibge,
        mesh,
        baseElevation: elevHeight,
        defaultColor: initialColor,
        center: centerVec
      });
    });

    meshesRef.current = newMeshes;

    MUNICIPIOS_DATA.filter(m => HUB_CITY_IBGES.has(m.ibge)).forEach((city) => {
      const pinX = (city.lng - CENTER_LNG) * SCALE;
      const pinZ = -(city.lat - CENTER_LAT) * SCALE;
      const isCapital = city.ibge === 5002704;

      const pinGroup = new THREE.Group();
      pinGroup.position.set(pinX, 7.8, pinZ);

      const needle = new THREE.Mesh(
        new THREE.CylinderGeometry(0.06, 0.03, 3.2, 8),
        new THREE.MeshBasicMaterial({ color: isCapital ? 0x38bdf8 : 0x94a3b8 })
      );
      needle.position.y = -1.6;
      pinGroup.add(needle);

      const orb = new THREE.Mesh(
        new THREE.SphereGeometry(isCapital ? 0.7 : 0.45, 16, 16),
        new THREE.MeshStandardMaterial({
          color: isCapital ? 0x38bdf8 : 0xf8fafc,
          emissive: isCapital ? 0x0284c7 : 0x64748b,
          roughness: 0.2,
          metalness: 0.8
        })
      );
      pinGroup.add(orb);

      scene.add(pinGroup);
    });

    let frameCount = 0;
    const animate = () => {
      animFrameRef.current = requestAnimationFrame(animate);

      camera.position.lerp(targetCameraPos.current, 0.06);
      currentLookAt.current.lerp(targetLookAt.current, 0.06);
      camera.lookAt(currentLookAt.current);

      renderer.render(scene, camera);

      frameCount++;
      if (frameCount % 2 === 0 && container) {
        const w = container.clientWidth;
        const h = container.clientHeight;
        const newLabels: Array<{
          ibge: number;
          nome: string;
          x: number;
          y: number;
          isHub: boolean;
          municipio: MunicipioMS;
          visible: boolean;
        }> = [];

        (meshesRef.current || []).forEach((val) => {
          const municipio = municipiosMap.get(val.ibge);
          if (!municipio) return;

          const isHub = HUB_CITY_IBGES.has(val.ibge);
          const isSelected = selectedMunicipioRef.current?.ibge === val.ibge;
          const isHovered = hoveredMunicipioRef.current?.ibge === val.ibge;

          if (!showAllLabelsRef.current && !isHub && !isSelected && !isHovered) return;

          const pos = val.center.clone();
          pos.project(camera);

          if (pos.z < 1) {
            const screenX = (pos.x * 0.5 + 0.5) * w;
            const screenY = (-(pos.y * 0.5) + 0.5) * h;

            if (screenX >= 20 && screenX <= w - 20 && screenY >= 20 && screenY <= h - 20) {
              newLabels.push({ ibge: val.ibge, nome: municipio.nome, x: screenX, y: screenY, isHub, municipio, visible: true });
            }
          }
        });

        setScreenLabels(newLabels);
      }
    };

    animate();

    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [municipiosMap, getMetricAttributes]);

  const raycast = useCallback((clientX: number, clientY: number) => {
    if (!rendererRef.current || !cameraRef.current || !sceneRef.current || !mountRef.current) return null;

    const rect = mountRef.current.getBoundingClientRect();
    const mouse = new THREE.Vector2(
      ((clientX - rect.left) / rect.width) * 2 - 1,
      -((clientY - rect.top) / rect.height) * 2 + 1
    );

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, cameraRef.current);

    const meshes: THREE.Mesh[] = [];
    (meshesRef.current || []).forEach(item => meshes.push(item.mesh));

    const intersects = raycaster.intersectObjects(meshes, false);
    if (intersects.length > 0) return intersects[0].object as THREE.Mesh;
    return null;
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    dragButtonRef.current = e.button; 
    previousMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDraggingRef.current) {
      const deltaX = e.clientX - previousMousePosRef.current.x;
      const deltaY = e.clientY - previousMousePosRef.current.y;
      previousMousePosRef.current = { x: e.clientX, y: e.clientY };

      if (dragButtonRef.current === 0) {
        const isMobile = window.innerWidth < 768;
        if (isMobile) {
          // No mobile: trava estritamente na visão superior 2D, permitindo apenas toque e pan sem rotação 3D
          const panSpeed = 0.16;
          targetLookAt.current.x -= deltaX * panSpeed;
          targetLookAt.current.z -= deltaY * panSpeed;
          targetCameraPos.current.x = targetLookAt.current.x;
          targetCameraPos.current.z = targetLookAt.current.z + 0.5;
          return;
        }

        sphericalRef.current.theta -= deltaX * 0.008;
        sphericalRef.current.phi = Math.max(0.08, Math.min(Math.PI / 2.1, sphericalRef.current.phi + deltaY * 0.008));

        const r = sphericalRef.current.radius;
        const theta = sphericalRef.current.theta;
        const phi = sphericalRef.current.phi;

        targetCameraPos.current.x = targetLookAt.current.x + r * Math.sin(phi) * Math.sin(theta);
        targetCameraPos.current.y = targetLookAt.current.y + r * Math.cos(phi);
        targetCameraPos.current.z = targetLookAt.current.z + r * Math.sin(phi) * Math.cos(theta);
      } else if (dragButtonRef.current === 2) {
        const panSpeed = 0.18;
        const theta = sphericalRef.current.theta;
        const cosT = Math.cos(theta);
        const sinT = Math.sin(theta);

        targetLookAt.current.x -= deltaX * panSpeed * cosT + deltaY * panSpeed * sinT;
        targetLookAt.current.z += deltaX * panSpeed * sinT - deltaY * panSpeed * cosT;

        const r = sphericalRef.current.radius;
        const phi = sphericalRef.current.phi;

        targetCameraPos.current.x = targetLookAt.current.x + r * Math.sin(phi) * Math.sin(theta);
        targetCameraPos.current.y = targetLookAt.current.y + r * Math.cos(phi);
        targetCameraPos.current.z = targetLookAt.current.z + r * Math.sin(phi) * Math.cos(theta);
      }
      return;
    }

    const hitMesh = raycast(e.clientX, e.clientY);
    if (hitMesh !== hoveredMeshRef.current) {
      if (hoveredMeshRef.current) {
        const prevIbge = hoveredMeshRef.current.userData.ibge;
        const prevMeta = (meshesRef.current || []).find(m => m.ibge === prevIbge);
        if (prevMeta && prevIbge !== selectedMunicipio?.ibge) {
          const mat = hoveredMeshRef.current.material as THREE.MeshStandardMaterial;
          mat.emissive.setHex(0x000000);
          mat.color.setHex(prevMeta.defaultColor);
        }
      }

      if (hitMesh) {
        const currentIbge = hitMesh.userData.ibge;
        const mat = hitMesh.material as THREE.MeshStandardMaterial;
        mat.emissive.setHex(0x38bdf8);
        mat.emissiveIntensity = 0.35;
        setHoveredMunicipio(municipiosMap.get(currentIbge) || null);
      } else {
        setHoveredMunicipio(null);
      }
      hoveredMeshRef.current = hitMesh;
    }
  };

  const handlePointerUp = () => { isDraggingRef.current = false; };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const hitMesh = raycast(e.clientX, e.clientY);
    if (hitMesh) {
      const mun = municipiosMap.get(hitMesh.userData.ibge);
      if (mun) handleSelectCity(mun);
    }
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const zoomFactor = e.deltaY > 0 ? 1.12 : 0.88;
    sphericalRef.current.radius = Math.max(25, Math.min(220, sphericalRef.current.radius * zoomFactor));

    const r = sphericalRef.current.radius;
    const theta = sphericalRef.current.theta;
    const phi = sphericalRef.current.phi;

    targetCameraPos.current.x = targetLookAt.current.x + r * Math.sin(phi) * Math.sin(theta);
    targetCameraPos.current.y = targetLookAt.current.y + r * Math.cos(phi);
    targetCameraPos.current.z = targetLookAt.current.z + r * Math.sin(phi) * Math.cos(theta);
  };

  const handleZoomBtn = (delta: number) => {
    const zoomFactor = delta < 0 ? 0.82 : 1.22;
    sphericalRef.current.radius = Math.max(25, Math.min(220, sphericalRef.current.radius * zoomFactor));

    const r = sphericalRef.current.radius;
    const theta = sphericalRef.current.theta;
    const phi = sphericalRef.current.phi;

    targetCameraPos.current.x = targetLookAt.current.x + r * Math.sin(phi) * Math.sin(theta);
    targetCameraPos.current.y = targetLookAt.current.y + r * Math.cos(phi);
    targetCameraPos.current.z = targetLookAt.current.z + r * Math.sin(phi) * Math.cos(theta);
  };

  const resetCamera = () => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    applyViewPreset(isMobile ? 'top' : 'perspective');
    setSelectedRegiao('todas');
    setSearchQuery('');
    onSelectMunicipio(null);
  };

  const handleGlobalSearchKeyword = useCallback((keyword: string): boolean => {
    const lower = keyword.toLowerCase().trim();

    // 1. Procurar se é nome de município no MS
    const foundCity = MUNICIPIOS_DATA.find(m => 
      m.nome.toLowerCase() === lower || 
      m.nome.toLowerCase().includes(lower) ||
      lower.includes(m.nome.toLowerCase())
    );
    if (foundCity) {
      handleSelectCity(foundCity);
      return true;
    }

    // 2. Termos fiscais / TCE
    if (lower.includes('dívida') || lower.includes('divida') || lower.includes('tce') || lower.includes('gasto')) {
      if (onOpenTce) {
        onOpenTce();
        return true;
      }
    }

    // 3. Governo / LRF / Orçamento
    if (lower.includes('governo') || lower.includes('lrf') || lower.includes('orçamento') || lower.includes('orcamento')) {
      if (onOpenGoverno) {
        onOpenGoverno();
        return true;
      }
    }

    // 4. Legislativo / ALEMS / Deputados
    if (lower.includes('deputad') || lower.includes('alems') || lower.includes('assembleia')) {
      if (onOpenLegislativo) {
        onOpenLegislativo();
        return true;
      }
    }

    // 5. Eleições 2026 / Senadores
    if (lower.includes('eleiç') || lower.includes('eleic') || lower.includes('2026') || lower.includes('senador')) {
      if (onOpenEleicoes) {
        onOpenEleicoes();
        return true;
      }
    }

    return false;
  }, [handleSelectCity, onOpenTce, onOpenGoverno, onOpenLegislativo, onOpenEleicoes]);

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden select-none bg-slate-950 font-sans">
      
      {/* BARRA SUPERIOR (Sem carrossel no PC, apenas busca e menu de regiões no mobile) */}
      <div className="w-full bg-slate-900/90 backdrop-blur-xl border-b border-slate-800 px-3 py-2 flex items-center justify-between gap-3 z-30 shadow-lg shrink-0">
        
        {/* Quick Search Bar */}
        <div className="relative flex-1 max-w-xs sm:w-80 shadow-xl">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar município..."
              className="w-full pl-8 pr-7 py-1.5 text-xs bg-slate-950/90 border border-slate-700/80 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-all shadow-inner"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white">
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {filteredSearchList.length > 0 && (
            <div className="absolute left-0 right-0 mt-1.5 bg-slate-900/98 backdrop-blur-xl border border-slate-700/80 rounded-xl overflow-hidden shadow-2xl z-50 divide-y divide-slate-800">
              {filteredSearchList.map(m => (
                <button
                  key={m.ibge}
                  onClick={() => { handleSelectCity(m); setSearchQuery(''); }}
                  className="w-full px-3 py-2 text-left hover:bg-slate-800/80 flex items-center justify-between transition-colors group"
                >
                  <div>
                    <div className="text-xs font-semibold text-slate-100 group-hover:text-cyan-400">{m.nome}</div>
                    <div className="text-[10px] text-slate-400">{m.regiao}</div>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">{formatNumber(m.populacao)} hab.</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Botão Menu Hambúrguer Mobile para Legenda das 10 Regiões */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="sm:hidden p-2 bg-slate-800 text-cyan-400 rounded-xl border border-slate-700 shadow-md flex items-center justify-center"
          title="Legenda das 10 Regiões"
        >
          <Menu className="w-4 h-4" />
        </button>

        {/* Camera View Presets & Labels Toggle (Desktop) */}
        <div className="hidden sm:flex items-center gap-2">
          <div className="flex items-center p-1 bg-slate-950/90 border border-slate-800 rounded-xl shadow-inner">
            <button
              onClick={() => applyViewPreset('perspective')}
              className={`flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                viewPreset === 'perspective' ? 'bg-cyan-500 text-slate-950 shadow-md font-bold' : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Rotate3d className="w-3.5 h-3.5" />
              <span>3D</span>
            </button>

            <button
              onClick={() => applyViewPreset('top')}
              className={`flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                viewPreset === 'top' ? 'bg-cyan-500 text-slate-950 shadow-md font-bold' : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Aérea</span>
            </button>

            <button
              onClick={() => applyViewPreset('isometric')}
              className={`flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                viewPreset === 'isometric' ? 'bg-cyan-500 text-slate-950 shadow-md font-bold' : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Isométrica</span>
            </button>
          </div>

          <button
            onClick={() => setShowAllLabels(!showAllLabels)}
            className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-xl border transition-all shadow-md ${
              showAllLabels ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' : 'bg-slate-950/90 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{showAllLabels ? 'Ocultar Nomes' : 'Todos os 79'}</span>
          </button>
        </div>

      </div>


      {/* MENU RETRÁTIL MOBILE (Legenda das 10 Regiões) */}
      {mobileMenuOpen && (
        <div className="sm:hidden absolute top-14 left-2 right-2 bg-slate-950/98 backdrop-blur-xl border border-slate-800 rounded-2xl p-3 shadow-2xl z-40 space-y-2.5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              <span className="text-xs font-bold text-white tracking-wide">10 Regiões Oficiais de MS</span>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="p-1 text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-1 max-h-48 overflow-y-auto pr-1">
            {REGIOES_OFICIAIS.map((reg) => {
              const isSelected = selectedRegiao === reg.nome;
              return (
                <button
                  key={reg.nome}
                  onClick={() => { setSelectedRegiao(isSelected ? 'todas' : reg.nome); setMobileMenuOpen(false); }}
                  className={`flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-[11px] text-left transition-all ${
                    isSelected ? 'bg-slate-800 text-white font-bold ring-1 ring-cyan-400' : 'text-slate-300 hover:text-white hover:bg-slate-900/80'
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: reg.cor }} />
                  <span className="truncate">{reg.nome}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* MAP VIEW CONTAINER */}
      <div className="relative w-full flex-1 overflow-hidden">
        
        {/* 3D WebGL Canvas Container */}
        <div
          ref={mountRef}
          className="w-full h-full cursor-grab active:cursor-grabbing"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onClick={handleClick}
          onWheel={handleWheel}
          onContextMenu={(e) => e.preventDefault()}
        />

        {/* Floating 2D HTML City Names */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {screenLabels.map((lbl) => {
            const isSelected = selectedMunicipio?.ibge === lbl.ibge;
            const isHovered = hoveredMunicipio?.ibge === lbl.ibge;

            return (
              <div
                key={lbl.ibge}
                style={{ left: `${lbl.x}px`, top: `${lbl.y}px`, transform: 'translate(-50%, -100%)' }}
                className="absolute pointer-events-auto transition-transform duration-75"
              >
                <button
                  onClick={(e) => { e.stopPropagation(); handleSelectCity(lbl.municipio); }}
                  onMouseEnter={() => setHoveredMunicipio(lbl.municipio)}
                  onMouseLeave={() => setHoveredMunicipio(null)}
                  className={`group flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] font-bold shadow-lg transition-all duration-150 backdrop-blur-md ${
                    isSelected
                      ? 'bg-cyan-500 text-slate-950 scale-110 ring-2 ring-white ring-offset-2 ring-offset-slate-950 z-30'
                      : isHovered
                      ? 'bg-white text-slate-950 scale-105 ring-2 ring-cyan-400 z-20'
                      : lbl.isHub
                      ? 'bg-slate-900/90 text-slate-100 border border-slate-700/80 hover:bg-slate-800 hover:border-cyan-400 z-10'
                      : 'bg-slate-950/80 text-slate-300 border border-slate-800/80 text-[10px] hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: lbl.municipio.regiaoCor }} />
                  <span className="whitespace-nowrap">{lbl.nome}</span>
                  {isSelected && <ChevronRight className="w-3 h-3 shrink-0" />}
                </button>
              </div>
            );
          })}
        </div>

        {/* QUICK CIVIC HUBS BAR */}
        <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5 pointer-events-none z-10">
          <div className="pointer-events-auto flex flex-col gap-1.5">
            {onOpenEleicoes && (
              <button
                onClick={onOpenEleicoes}
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-[11px] sm:text-xs font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl shadow-lg border border-cyan-400/40 transition-all"
              >
                <Vote className="w-3.5 h-3.5" />
                <span>Eleições 2026</span>
              </button>
            )}

            <div className="hidden sm:flex flex-col gap-1.5">
              {onOpenGoverno && (
                <button
                  onClick={onOpenGoverno}
                  className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-slate-900/90 hover:bg-slate-800 text-blue-300 rounded-xl shadow-md border border-slate-800"
                >
                  <Building2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Governo MS · Orçamento LRF</span>
                </button>
              )}

              {onOpenLegislativo && (
                <button
                  onClick={onOpenLegislativo}
                  className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-slate-900/90 hover:bg-slate-800 text-amber-300 rounded-xl shadow-md border border-slate-800"
                >
                  <Landmark className="w-3.5 h-3.5 text-amber-400" />
                  <span>ALEMS · Deputados Estaduais</span>
                </button>
              )}

              {onOpenTce && (
                <button
                  onClick={onOpenTce}
                  className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-slate-900/90 hover:bg-slate-800 text-purple-300 rounded-xl shadow-md border border-slate-800"
                >
                  <Scale className="w-3.5 h-3.5 text-purple-400" />
                  <span>TCE-MS · Gastos e Auditoria</span>
                </button>
              )}
            </div>

            {/* TAREFA 3: Novo Widget Flutuante Radar MS (Notícias Estaduais & Licitações Abertas) */}
            <div className="hidden md:block mt-1">
              <NoticiasLicitacoesWidget />
            </div>
          </div>
        </div>

        {/* BOTTOM LEFT: LATERAL ESQUERDA (EXCLUSIVO PARA PC - Giro MS + SponsorsTicker + Legenda 10 Regiões) */}
        <div className="hidden sm:flex absolute bottom-6 left-4 flex-col gap-2.5 pointer-events-none z-20">
          
          {/* TAREFA 2: Novo Widget Flutuante Giro MS (Hora Oficial MS UTC-4, Dólar, Diesel MS e Busca Global) */}
          <GiroMsWidget onSearchActions={searchActions} onSearchKeyword={handleGlobalSearchKeyword} />

          <div className="pointer-events-auto">
            <SponsorsTicker selectedMunicipio={selectedMunicipio} isMobile={false} />
          </div>

          <div className="pointer-events-auto bg-slate-950/92 backdrop-blur-xl border border-slate-800 rounded-2xl p-3 shadow-2xl space-y-2.5 max-w-xs">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                <span className="text-xs font-bold text-white tracking-wide">10 Regiões Oficiais de MS</span>
              </div>
              {selectedRegiao !== 'todas' && (
                <button onClick={() => setSelectedRegiao('todas')} className="text-[10px] text-cyan-400 hover:underline">
                  Limpar
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 gap-1 max-h-36 overflow-y-auto pr-1">
              {REGIOES_OFICIAIS.map((reg) => {
                const isSelected = selectedRegiao === reg.nome;
                return (
                  <button
                    key={reg.nome}
                    onClick={() => setSelectedRegiao(isSelected ? 'todas' : reg.nome)}
                    className={`flex items-center gap-1.5 px-2 py-1 rounded-lg text-[10px] text-left transition-all ${
                      isSelected ? 'bg-slate-800 text-white font-bold ring-1 ring-cyan-400' : 'text-slate-300 hover:text-white hover:bg-slate-900/80'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: reg.cor }} />
                    <span className="truncate">{reg.nome}</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-1.5 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
              <span className="text-slate-400 text-[10px]">Extrusão 3D:</span>
              <div className="flex gap-1">
                {(['regioes', 'divida', 'legislativo'] as MetricMode[]).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setMetricMode(mode)}
                    className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-colors capitalize ${
                      metricMode === mode ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:text-white'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM RIGHT: ZOOM CONTROLS, VISITOR STATS & AUTHOR CREDIT */}
        <div className="absolute bottom-4 right-3 sm:right-4 flex flex-col items-end gap-2 pointer-events-none z-20">
          
          <div className="pointer-events-auto flex flex-col bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
            <button onClick={() => handleZoomBtn(-1)} className="p-1.5 sm:p-2 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors border-b border-slate-800" title="Zoom In">
              <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
            <button onClick={() => handleZoomBtn(1)} className="p-1.5 sm:p-2 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors border-b border-slate-800" title="Zoom Out">
              <ZoomOut className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
            <button onClick={resetCamera} className="p-1.5 sm:p-2 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors" title="Reset View">
              <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>

          <div className="hidden sm:block">
            <VisitorStats />
          </div>

          <a
            href="https://www.instagram.com/eng_giovanegabriel/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram: @eng_giovanegabriel (Dev. Giovane Gabriel)"
            className="hidden sm:flex pointer-events-auto bg-slate-900/95 hover:bg-slate-850 backdrop-blur-xl border border-slate-700/80 hover:border-cyan-400/60 rounded-xl px-3 py-2 shadow-2xl transition-all duration-200 group items-center gap-2.5"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 via-teal-400 to-blue-500 flex items-center justify-center text-slate-950 shadow-md shadow-cyan-500/30 shrink-0 group-hover:scale-105 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.6)] transition-all">
              <Instagram className="w-4 h-4 text-slate-950 stroke-[2.2]" />
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="text-[11px] font-bold text-slate-100 group-hover:text-cyan-300 transition-colors whitespace-nowrap">
                Dev. Giovane Gabriel
              </span>
              <span className="text-[10px] text-cyan-400 font-mono font-medium">
                @eng_giovanegabriel
              </span>
            </div>
          </a>

        </div>

      </div>

    </div>
  );
};
