/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import * as THREE from 'three';
import { MS_GEOJSON } from '../../data/msGeoJson.ts';
import { MunicipioMS, MUNICIPIOS_DATA } from '../../data/municipiosData.ts';
import { formatCompactCurrency, formatNumber } from '../../utils/formatters.ts';
import { 
  Rotate3d, 
  Layers, 
  Compass, 
  Search, 
  X,
  Instagram,
  ChevronRight,
  Scale,
  Building2
} from 'lucide-react';

export type MetricMode = 'regioes' | 'divida' | 'legislativo' | 'transparencia';
export type ViewPreset = 'perspective' | 'top' | 'isometric';

interface Map3DProps {
  selectedMunicipio: MunicipioMS | null;
  onSelectMunicipio: (municipio: MunicipioMS | null) => void;
  metricMode: MetricMode;
  onChangeMetricMode: (mode: MetricMode) => void;
  onOpenTce?: () => void;
  onOpenGoverno?: () => void;
}

const CENTER_LNG = -54.62;
const CENTER_LAT = -20.47;
const SCALE = 16.0;

// Neighboring territories from reference map
const NEIGHBORS = [
  { name: "MATO GROSSO", x: 0, z: -58 },
  { name: "GOIÁS", x: 48, z: -45 },
  { name: "MINAS GERAIS", x: 68, z: -20 },
  { name: "SÃO PAULO", x: 62, z: 18 },
  { name: "PARANÁ", x: 12, z: 68 },
  { name: "PARAGUAI", x: -55, z: 38 },
  { name: "BOLÍVIA", x: -68, z: -15 }
];

// Major urban centers in MS with 3D pins
const PIN_CITIES = [
  { ibge: 5002704, nome: "Campo Grande", lat: -20.469, lng: -54.620, capital: true },
  { ibge: 5003702, nome: "Dourados", lat: -22.221, lng: -54.805 },
  { ibge: 5008305, nome: "Três Lagoas", lat: -20.785, lng: -51.706 },
  { ibge: 5003207, nome: "Corumbá", lat: -19.009, lng: -57.653 },
  { ibge: 5006606, nome: "Ponta Porã", lat: -22.536, lng: -55.725 },
  { ibge: 5002209, nome: "Bonito", lat: -21.126, lng: -56.481 },
  { ibge: 5005707, nome: "Naviraí", lat: -23.064, lng: -54.199 },
  { ibge: 5003306, nome: "Coxim", lat: -18.507, lng: -54.760 }
];

// 10 Official Regions matching user reference image
const REGIOES_LEGENDA = [
  { nome: "Pantanal", cor: "#EAB308" },
  { nome: "Rota Norte", cor: "#84CC16" },
  { nome: "Vale do Aporé", cor: "#C084FC" },
  { nome: "Costa Leste", cor: "#DC2626" },
  { nome: "Caminho dos Ipês", cor: "#EA580C" },
  { nome: "Bonito / Serra da Bodoquena", cor: "#38BDF8" },
  { nome: "Caminhos da Fronteira", cor: "#16A34A" },
  { nome: "Grande Dourados", cor: "#93C5FD" },
  { nome: "Vale das Águas", cor: "#0284C7" },
  { nome: "7 Caminhos - Cone Sul", cor: "#7E22CE" }
];

function createTextSprite(text: string, color: string = '#94a3b8') {
  const canvas = document.createElement('canvas');
  canvas.width = 320;
  canvas.height = 80;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.font = `bold 26px 'Plus Jakarta Sans', system-ui, sans-serif`;
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 160, 40);
  }
  const texture = new THREE.CanvasTexture(canvas);
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true, opacity: 0.8 });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(14, 3.5, 1);
  return sprite;
}

export const Map3D: React.FC<Map3DProps> = ({
  selectedMunicipio,
  onSelectMunicipio,
  metricMode,
  onChangeMetricMode,
  onOpenTce,
  onOpenGoverno
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hoveredMunicipio, setHoveredMunicipio] = useState<MunicipioMS | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [searchQuery, setSearchQuery] = useState('');
  const [viewPreset, setViewPreset] = useState<ViewPreset>('perspective');

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const meshesRef = useRef<Map<number, { mesh: THREE.Mesh; baseElevation: number; defaultColor: number }>>(new Map());
  const hoveredMeshRef = useRef<THREE.Mesh | null>(null);
  const animFrameRef = useRef<number | null>(null);
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

  const filteredMunicipios = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return MUNICIPIOS_DATA.filter(m => 
      m.nome.toLowerCase().includes(q) || 
      m.regiao.toLowerCase().includes(q) ||
      m.prefeito.nome.toLowerCase().includes(q)
    ).slice(0, 6);
  }, [searchQuery]);

  const getMetricAttributes = useCallback((m: MunicipioMS, mode: MetricMode) => {
    switch (mode) {
      case 'divida': {
        const maxDivida = 1850000000;
        const ratio = Math.min(1, Math.log10(m.financas.dividaConsolidada) / Math.log10(maxDivida));
        const height = 0.8 + ratio * 8.0;
        const color = new THREE.Color();
        if (ratio < 0.4) {
          color.setHex(0x10b981);
        } else if (ratio < 0.75) {
          color.setHex(0xf59e0b);
        } else {
          color.setHex(0xef4444);
        }
        return { height, color: color.getHex() };
      }
      case 'legislativo': {
        const gasto = m.financas.gastoLegislativoPorHabitante;
        const ratio = Math.min(1, Math.max(0, (gasto - 60) / 400));
        const height = 1.0 + ratio * 7.5;
        const color = new THREE.Color();
        if (gasto < 120) {
          color.setHex(0x06b6d4);
        } else if (gasto < 250) {
          color.setHex(0x3b82f6);
        } else {
          color.setHex(0xec4899);
        }
        return { height, color: color.getHex() };
      }
      case 'transparencia': {
        const nota = m.financas.indiceTransparenciaTCE;
        const ratio = (nota - 7.0) / 3.0;
        const height = 1.2 + ratio * 4.0;
        const color = new THREE.Color();
        if (nota >= 9.0) {
          color.setHex(0x22c55e);
        } else if (nota >= 8.0) {
          color.setHex(0xeab308);
        } else {
          color.setHex(0xf97316);
        }
        return { height, color: color.getHex() };
      }
      case 'regioes':
      default: {
        const hex = parseInt(m.regiaoCor.replace('#', '0x'), 16);
        const popRatio = Math.min(1, Math.log10(m.populacao) / 6.0);
        const height = 1.5 + popRatio * 4.0;
        return { height, color: hex };
      }
    }
  }, []);

  useEffect(() => {
    meshesRef.current.forEach((val, ibge) => {
      const municipio = municipiosMap.get(ibge);
      if (!municipio) return;
      const { color, height } = getMetricAttributes(municipio, metricMode);
      val.defaultColor = color;
      val.baseElevation = height;

      const mat = val.mesh.material as THREE.MeshStandardMaterial;
      if (hoveredMunicipio?.ibge !== ibge && selectedMunicipio?.ibge !== ibge) {
        mat.color.setHex(color);
      }
      val.mesh.scale.set(1, 1, height);
    });
  }, [metricMode, municipiosMap, getMetricAttributes, hoveredMunicipio, selectedMunicipio]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x020617);
    scene.fog = new THREE.FogExp2(0x020617, 0.0032);

    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    cameraRef.current = camera;
    camera.position.set(0, 85, 80);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    rendererRef.current = renderer;
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.15);
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

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 0.5);
    rimLight.position.set(-60, 40, -40);
    scene.add(rimLight);

    const gridHelper = new THREE.GridHelper(220, 44, 0x1e293b, 0x0f172a);
    gridHelper.position.y = -0.2;
    scene.add(gridHelper);

    // Add surrounding territory labels (Bolívia, Paraguai, MT, GO, MG, SP, PR)
    NEIGHBORS.forEach((n) => {
      const sprite = createTextSprite(n.name, '#64748b');
      sprite.position.set(n.x, 0.8, n.z);
      scene.add(sprite);
    });

    // Build 3D Extruded Meshes for 79 Municipalities (NO BLACK OVERLAPPING LINES)
    const group = new THREE.Group();
    scene.add(group);

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
        if (i === 0) {
          shape.moveTo(x, y);
        } else {
          shape.lineTo(x, y);
        }
      });

      const { height: elevHeight, color: initialColor } = getMetricAttributes(municipio, metricMode);

      // Clean bevel creates natural soft shadows and divisions between municipalities without black lines
      const extrudeSettings: THREE.ExtrudeGeometryOptions = {
        depth: 1,
        bevelEnabled: true,
        bevelSegments: 2,
        steps: 1,
        bevelSize: 0.06,
        bevelThickness: 0.06
      };

      const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
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

      group.add(mesh);
      meshesRef.current.set(ibge, {
        mesh,
        baseElevation: elevHeight,
        defaultColor: initialColor
      });
    });

    // Add 3D Pins for Key Municipalities
    PIN_CITIES.forEach((pin) => {
      const pinX = (pin.lng - CENTER_LNG) * SCALE;
      const pinZ = -(pin.lat - CENTER_LAT) * SCALE;

      const pinGroup = new THREE.Group();
      pinGroup.position.set(pinX, 8.5, pinZ);

      const needleGeo = new THREE.CylinderGeometry(0.08, 0.04, 3.5, 8);
      const needleMat = new THREE.MeshBasicMaterial({ color: pin.capital ? 0x38bdf8 : 0x94a3b8 });
      const needle = new THREE.Mesh(needleGeo, needleMat);
      needle.position.y = -1.75;
      pinGroup.add(needle);

      const orbGeo = new THREE.SphereGeometry(pin.capital ? 0.75 : 0.5, 16, 16);
      const orbMat = new THREE.MeshStandardMaterial({
        color: pin.capital ? 0x38bdf8 : 0xe2e8f0,
        emissive: pin.capital ? 0x0284c7 : 0x475569,
        roughness: 0.2,
        metalness: 0.8
      });
      const orb = new THREE.Mesh(orbGeo, orbMat);
      pinGroup.add(orb);

      scene.add(pinGroup);
    });

    const animate = () => {
      animFrameRef.current = requestAnimationFrame(animate);
      camera.position.lerp(targetCameraPos.current, 0.06);
      currentLookAt.current.lerp(targetLookAt.current, 0.06);
      camera.lookAt(currentLookAt.current);
      renderer.render(scene, camera);
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
  }, [municipiosMap, getMetricAttributes, metricMode]);

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
    meshesRef.current.forEach(item => meshes.push(item.mesh));

    const intersects = raycaster.intersectObjects(meshes, false);
    if (intersects.length > 0) {
      return intersects[0].object as THREE.Mesh;
    }
    return null;
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    setMousePos({ x: e.clientX, y: e.clientY });

    if (isDraggingRef.current) {
      const deltaX = e.clientX - previousMousePosRef.current.x;
      const deltaY = e.clientY - previousMousePosRef.current.y;
      previousMousePosRef.current = { x: e.clientX, y: e.clientY };

      if (dragButtonRef.current === 0) {
        sphericalRef.current.theta -= deltaX * 0.008;
        sphericalRef.current.phi = Math.max(0.15, Math.min(Math.PI / 2.1, sphericalRef.current.phi + deltaY * 0.008));

        const r = sphericalRef.current.radius;
        const theta = sphericalRef.current.theta;
        const phi = sphericalRef.current.phi;

        targetCameraPos.current.x = targetLookAt.current.x + r * Math.sin(phi) * Math.sin(theta);
        targetCameraPos.current.y = targetLookAt.current.y + r * Math.cos(phi);
        targetCameraPos.current.z = targetLookAt.current.z + r * Math.sin(phi) * Math.cos(theta);
      } else if (dragButtonRef.current === 2) {
        const panSpeed = 0.08;
        targetLookAt.current.x -= deltaX * panSpeed;
        targetLookAt.current.z -= deltaY * panSpeed;
        targetCameraPos.current.x -= deltaX * panSpeed;
        targetCameraPos.current.z -= deltaY * panSpeed;
      }
      return;
    }

    const hitMesh = raycast(e.clientX, e.clientY);

    if (hitMesh !== hoveredMeshRef.current) {
      if (hoveredMeshRef.current) {
        const prevIbge = hoveredMeshRef.current.userData.ibge;
        const prevMeta = meshesRef.current.get(prevIbge);
        if (prevMeta && prevIbge !== selectedMunicipio?.ibge) {
          const mat = hoveredMeshRef.current.material as THREE.MeshStandardMaterial;
          mat.emissive.setHex(0x000000);
          mat.color.setHex(prevMeta.defaultColor);
          hoveredMeshRef.current.position.y = 0;
        }
      }

      if (hitMesh) {
        const ibge = hitMesh.userData.ibge;
        const municipio = municipiosMap.get(ibge);
        if (municipio) {
          setHoveredMunicipio(municipio);
          hoveredMeshRef.current = hitMesh;

          const mat = hitMesh.material as THREE.MeshStandardMaterial;
          mat.emissive.setHex(0xffffff);
          mat.emissiveIntensity = 0.35;
          hitMesh.position.y = 0.8;
        }
      } else {
        setHoveredMunicipio(null);
        hoveredMeshRef.current = null;
      }
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    dragButtonRef.current = e.button;
    previousMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const movedDist = Math.hypot(
      e.clientX - previousMousePosRef.current.x,
      e.clientY - previousMousePosRef.current.y
    );

    isDraggingRef.current = false;

    if (movedDist < 5 && e.button === 0) {
      const hitMesh = raycast(e.clientX, e.clientY);
      if (hitMesh) {
        const ibge = hitMesh.userData.ibge;
        const municipio = municipiosMap.get(ibge);
        if (municipio) {
          selectAndFocusMunicipio(municipio);
        }
      }
    }
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const zoomDelta = e.deltaY * 0.08;
    sphericalRef.current.radius = Math.max(30, Math.min(180, sphericalRef.current.radius + zoomDelta));

    const r = sphericalRef.current.radius;
    const theta = sphericalRef.current.theta;
    const phi = sphericalRef.current.phi;

    targetCameraPos.current.x = targetLookAt.current.x + r * Math.sin(phi) * Math.sin(theta);
    targetCameraPos.current.y = targetLookAt.current.y + r * Math.cos(phi);
    targetCameraPos.current.z = targetLookAt.current.z + r * Math.sin(phi) * Math.cos(theta);
  };

  const selectAndFocusMunicipio = useCallback((municipio: MunicipioMS) => {
    onSelectMunicipio(municipio);

    const targetX = (municipio.lng - CENTER_LNG) * SCALE;
    const targetZ = -(municipio.lat - CENTER_LAT) * SCALE;

    targetLookAt.current.set(targetX, 2, targetZ);
    targetCameraPos.current.set(targetX + 12, 36, targetZ + 32);
    sphericalRef.current.radius = 42;
    sphericalRef.current.theta = 0.3;
    sphericalRef.current.phi = Math.PI / 3.4;

    meshesRef.current.forEach((val, ibge) => {
      const mat = val.mesh.material as THREE.MeshStandardMaterial;
      if (ibge === municipio.ibge) {
        mat.emissive.setHex(0x38bdf8);
        mat.emissiveIntensity = 0.8;
        val.mesh.position.y = 1.2;
      } else {
        mat.emissive.setHex(0x000000);
        mat.color.setHex(val.defaultColor);
        val.mesh.position.y = 0;
      }
    });
  }, [onSelectMunicipio]);

  const applyViewPreset = (preset: ViewPreset) => {
    setViewPreset(preset);
    if (preset === 'top') {
      targetLookAt.current.set(0, 0, 0);
      targetCameraPos.current.set(0, 140, 0.01);
      sphericalRef.current.radius = 140;
      sphericalRef.current.theta = 0;
      sphericalRef.current.phi = 0.001;
    } else if (preset === 'isometric') {
      targetLookAt.current.set(0, 0, 0);
      targetCameraPos.current.set(70, 75, 70);
      sphericalRef.current.radius = 120;
      sphericalRef.current.theta = Math.PI / 4;
      sphericalRef.current.phi = Math.PI / 3.5;
    } else {
      targetLookAt.current.set(0, 0, 0);
      targetCameraPos.current.set(0, 85, 80);
      sphericalRef.current.radius = 115;
      sphericalRef.current.theta = 0;
      sphericalRef.current.phi = Math.PI / 3.8;
    }
  };

  const resetView = () => {
    onSelectMunicipio(null);
    applyViewPreset('perspective');
    meshesRef.current.forEach((val) => {
      const mat = val.mesh.material as THREE.MeshStandardMaterial;
      mat.emissive.setHex(0x000000);
      mat.color.setHex(val.defaultColor);
      val.mesh.position.y = 0;
    });
  };

  return (
    <div 
      className="relative w-full h-full overflow-hidden select-none"
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Three.js Canvas Container */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        onPointerMove={handlePointerMove}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onWheel={handleWheel}
      />

      {/* Top Floating HUD: Search Bar & Fast Modals Bar */}
      <div className="absolute top-5 left-5 z-20 flex flex-col gap-2 max-w-sm w-full pointer-events-auto">
        <div className="relative">
          <div className="flex items-center gap-2 px-3.5 py-2.5 bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-xl shadow-xl">
            <Search className="w-4 h-4 text-cyan-400 shrink-0" />
            <input
              type="text"
              placeholder="Buscar município (Naviraí, Dourados, etc.)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-sm text-slate-100 placeholder-slate-400 focus:outline-none w-full"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="text-slate-400 hover:text-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Search Dropdown Results */}
          {searchQuery.trim() && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-slate-900/98 backdrop-blur-lg border border-slate-800 rounded-xl shadow-2xl overflow-hidden py-1 z-30">
              {filteredMunicipios.length > 0 ? (
                filteredMunicipios.map((m) => (
                  <button
                    key={m.ibge}
                    onClick={() => {
                      selectAndFocusMunicipio(m);
                      setSearchQuery('');
                    }}
                    className="w-full px-3.5 py-2 text-left hover:bg-slate-800/80 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-sm font-semibold text-slate-100 flex items-center gap-2">
                        <span 
                          className="w-2.5 h-2.5 rounded-full shrink-0" 
                          style={{ backgroundColor: m.regiaoCor }} 
                        />
                        {m.nome}
                      </div>
                      <div className="text-xs text-slate-400 ml-4">
                        Prefeito: {m.prefeito.nome} ({m.prefeito.partido}) · {formatNumber(m.populacao)} hab.
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-mono text-cyan-400">
                        {m.regiao}
                      </div>
                    </div>
                  </button>
                ))
              ) : (
                <div className="px-4 py-3 text-xs text-slate-400 text-center">
                  Nenhum município encontrado com "{searchQuery}".
                </div>
              )}
            </div>
          )}
        </div>

        {/* Quick Hub Badges (TCE-MS & Governo do Estado) */}
        <div className="flex items-center gap-2">
          {onOpenTce && (
            <button
              onClick={onOpenTce}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 bg-amber-950/70 hover:bg-amber-900/80 border border-amber-800/70 rounded-lg text-xs font-semibold text-amber-300 transition-colors shadow-md"
            >
              <Scale className="w-3.5 h-3.5 text-amber-400" />
              <span>Tribunal de Contas (TCE)</span>
            </button>
          )}

          {onOpenGoverno && (
            <button
              onClick={onOpenGoverno}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 bg-blue-950/70 hover:bg-blue-900/80 border border-blue-800/70 rounded-lg text-xs font-semibold text-blue-300 transition-colors shadow-md"
            >
              <Building2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Governo MS (Obras & Salários)</span>
            </button>
          )}
        </div>
      </div>

      {/* Floating Mode Switcher (Top Right) */}
      <div className="absolute top-5 right-5 z-20 flex flex-col gap-2 items-end pointer-events-auto">
        <div className="flex items-center p-1 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl shadow-xl">
          <button
            onClick={() => onChangeMetricMode('regioes')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              metricMode === 'regioes' 
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Regiões Oficiais (10)
          </button>
          <button
            onClick={() => onChangeMetricMode('divida')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              metricMode === 'divida' 
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Dívida Pública
          </button>
          <button
            onClick={() => onChangeMetricMode('legislativo')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              metricMode === 'legislativo' 
                ? 'bg-pink-500/20 text-pink-300 border border-pink-500/40 shadow-sm' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Gasto Câmara / Hab.
          </button>
          <button
            onClick={() => onChangeMetricMode('transparencia')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              metricMode === 'transparencia' 
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Nota TCE-MS
          </button>
        </div>

        {/* Legend for active mode */}
        {metricMode === 'regioes' ? (
          <div className="max-w-xs p-3 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl text-[11px] text-slate-300 shadow-xl max-h-48 overflow-y-auto">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              Regiões Turísticas de MS (Mapa Oficial):
            </div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
              {REGIOES_LEGENDA.map((reg) => (
                <div key={reg.nome} className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: reg.cor }} />
                  <span className="truncate">{reg.nome}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="px-3 py-2 bg-slate-900/85 backdrop-blur-md border border-slate-800 rounded-xl text-[11px] text-slate-300 shadow-md">
            {metricMode === 'divida' && (
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Baixa</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500" /> Média</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500" /> Alta Dívida</span>
              </div>
            )}
            {metricMode === 'legislativo' && (
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-cyan-500" /> &lt; R$ 120/hab</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500" /> R$ 120-250</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-pink-500" /> &gt; R$ 250/hab</span>
              </div>
            )}
            {metricMode === 'transparencia' && (
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500" /> 9.0 a 10.0</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-yellow-500" /> 8.0 a 8.9</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-orange-500" /> &lt; 8.0</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Camera View Controls (Bottom Left) */}
      <div className="absolute bottom-5 left-5 z-20 flex items-center gap-2 pointer-events-auto">
        <div className="flex items-center p-1 bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-xl shadow-xl">
          <button
            onClick={() => applyViewPreset('perspective')}
            title="Visão Perspectiva 3D"
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              viewPreset === 'perspective' ? 'bg-slate-800 text-cyan-300 shadow-sm border border-slate-700' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Perspectiva 3D
          </button>
          <button
            onClick={() => applyViewPreset('top')}
            title="Vista Superior 2D"
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              viewPreset === 'top' ? 'bg-slate-800 text-cyan-300 shadow-sm border border-slate-700' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Vista Aérea
          </button>
          <button
            onClick={() => applyViewPreset('isometric')}
            title="Visão Isométrica"
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              viewPreset === 'isometric' ? 'bg-slate-800 text-cyan-300 shadow-sm border border-slate-700' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Isométrica
          </button>
        </div>

        <button
          onClick={resetView}
          title="Resetar Câmera / Visão Global"
          className="p-2.5 bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors shadow-xl"
        >
          <Compass className="w-4 h-4" />
        </button>
      </div>

      {/* Creator Attribution Card (Requested by User) */}
      <div className="absolute bottom-5 right-5 z-20 flex flex-col items-end pointer-events-auto">
        <a
          href="https://www.instagram.com/eng_giovanegabriel/"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram: @eng_giovanegabriel (Dev, Giovane Gabriel Só)"
          className="flex items-center gap-2.5 px-3 py-2 bg-slate-900/95 hover:bg-slate-850 backdrop-blur-xl border border-slate-700/80 hover:border-cyan-400/60 rounded-xl shadow-2xl transition-all duration-200 group"
        >
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 via-teal-400 to-blue-500 flex items-center justify-center text-slate-950 shadow-md shadow-cyan-500/30 shrink-0 group-hover:scale-105 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.6)] transition-all">
            <Instagram className="w-4 h-4 text-slate-950 stroke-[2.2]" />
          </div>
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[11px] font-bold text-slate-100 group-hover:text-cyan-300 transition-colors whitespace-nowrap">
              Dev, Giovane Gabriel Só
            </span>
            <span className="text-[10px] text-cyan-400 font-mono font-medium">
              @eng_giovanegabriel
            </span>
          </div>
        </a>
      </div>

      {/* Hover Floating Tooltip */}
      {hoveredMunicipio && !selectedMunicipio && (
        <div
          className="fixed pointer-events-none z-40 transition-transform duration-75"
          style={{
            left: `${mousePos.x + 16}px`,
            top: `${mousePos.y + 16}px`
          }}
        >
          <div className="p-3.5 bg-slate-900/98 backdrop-blur-xl border border-slate-700/80 rounded-xl shadow-2xl text-slate-100 min-w-[260px] max-w-xs">
            <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2 mb-2">
              <div className="flex items-center gap-2">
                <span 
                  className="w-3 h-3 rounded-full shrink-0" 
                  style={{ backgroundColor: hoveredMunicipio.regiaoCor }} 
                />
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">{hoveredMunicipio.nome}</h4>
                  <div className="text-[11px] text-slate-400">
                    {hoveredMunicipio.regiao} · {formatNumber(hoveredMunicipio.populacao)} hab.
                  </div>
                </div>
              </div>
              <span className={`px-2 py-0.5 text-[10px] font-semibold rounded-md border ${
                hoveredMunicipio.financas.situacaoFiscal === 'Regular'
                  ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800/80'
                  : 'bg-amber-950/60 text-amber-400 border-amber-800/80'
              }`}>
                {hoveredMunicipio.financas.situacaoFiscal}
              </span>
            </div>

            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400">Prefeito(a) 2026:</span>
                <span className="font-semibold text-cyan-300">
                  {hoveredMunicipio.prefeito.nome} ({hoveredMunicipio.prefeito.partido})
                </span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400">Dívida Consolidada:</span>
                <span className="font-mono tabular-nums text-amber-300">
                  {formatCompactCurrency(hoveredMunicipio.financas.dividaConsolidada)}
                </span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400">Custo da Câmara:</span>
                <span className="font-mono tabular-nums text-pink-300">
                  R$ {hoveredMunicipio.financas.gastoLegislativoPorHabitante.toFixed(2)}/hab/ano
                </span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400">Nota TCE-MS:</span>
                <span className="font-mono tabular-nums text-emerald-400 font-bold">
                  {hoveredMunicipio.financas.indiceTransparenciaTCE.toFixed(1)} / 10
                </span>
              </div>
            </div>

            <div className="mt-2.5 pt-2 border-t border-slate-800/80 text-[11px] text-cyan-400 font-medium flex items-center justify-between">
              <span>Clique para abrir Raio-X completo</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
