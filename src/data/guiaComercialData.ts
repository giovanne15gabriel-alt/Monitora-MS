/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * GUIA COMERCIAL OFICIAL DE MATO GROSSO DO SUL
 * Empresas e parceiros cadastrados por município
 * Contato Comercial / Cadastramento: WhatsApp (67) 9 3300-1147
 */

const BASE_URL = import.meta.env.BASE_URL || './';

export const CONTATO_COMERCIAL_WHATSAPP = "5567933001147";
export const CONTATO_COMERCIAL_WHATSAPP_DISPLAY = "(67) 9 3300-1147";

export interface EmpresaGuia {
  id: string;
  nome: string;
  categoria: string;
  categoriaCor: string;
  descricao: string;
  cidadeIbge: number;
  cidadeNome: string;
  imagemUrl: string;
  instagramHandle?: string;
  instagramUrl?: string;
  whatsapp?: string;
  verificado: boolean;
}

export const EMPRESAS_GUIA_COMERCIAL: EmpresaGuia[] = [
  // 1. Renatinho Válvulas Industriais (Naviraí - IBGE: 5005707)
  {
    id: 'emp-nav-1',
    nome: 'Renatinho Válvulas Industriais',
    categoria: 'Comércio & Manutenção',
    categoriaCor: 'amber',
    descricao: 'Especialista em válvulas industriais, conexões, manutenção e peças para usinas e agroindústrias.',
    cidadeIbge: 5005707,
    cidadeNome: 'Naviraí',
    imagemUrl: `${BASE_URL}sponsors/renatinho-valvulas.png`,
    whatsapp: CONTATO_COMERCIAL_WHATSAPP,
    verificado: true
  },

  // 2. GG Engenharia & Projetos (Naviraí - IBGE: 5005707)
  {
    id: 'emp-nav-2',
    nome: 'GG Engenharia & Projetos',
    categoria: 'Engenharia Civil & Projetos',
    categoriaCor: 'cyan',
    descricao: 'Projetos estruturais, arquitetônicos, regularização fundiária, laudos e fiscalização técnica de obras.',
    cidadeIbge: 5005707,
    cidadeNome: 'Naviraí',
    imagemUrl: `${BASE_URL}sponsors/gg-engenharia.png`,
    instagramHandle: '@eng_giovanegabriel',
    instagramUrl: 'https://www.instagram.com/eng_giovanegabriel/',
    whatsapp: CONTATO_COMERCIAL_WHATSAPP,
    verificado: true
  },

  // 3. LA Advogados Associados (Naviraí - IBGE: 5005707)
  {
    id: 'emp-nav-3',
    nome: 'LA Advogados Associados',
    categoria: 'Jurídico & Compliance',
    categoriaCor: 'purple',
    descricao: 'Assessoria jurídica corporativa, contratos, agronegócio, direito tributário e empresarial no Conesul.',
    cidadeIbge: 5005707,
    cidadeNome: 'Naviraí',
    imagemUrl: `${BASE_URL}sponsors/la-advocacia.png`,
    instagramHandle: '@la_advogadosassociados',
    instagramUrl: 'https://www.instagram.com/la_advogadosassociados/',
    whatsapp: CONTATO_COMERCIAL_WHATSAPP,
    verificado: true
  },

  // 4. Agência Valete (Naviraí - IBGE: 5005707)
  {
    id: 'emp-nav-4',
    nome: 'Agência Valete',
    categoria: 'Marketing & Automação',
    categoriaCor: 'emerald',
    descricao: 'Marketing digital, tráfego pago, desenvolvimento web e automação comercial de alto impacto.',
    cidadeIbge: 5005707,
    cidadeNome: 'Naviraí',
    imagemUrl: `${BASE_URL}sponsors/agencia-valete.png`,
    instagramHandle: '@agenciavalete6',
    instagramUrl: 'https://www.instagram.com/agenciavalete6/',
    whatsapp: CONTATO_COMERCIAL_WHATSAPP,
    verificado: true
  }
];

export function getEmpresasByIbge(ibge: number): EmpresaGuia[] {
  return EMPRESAS_GUIA_COMERCIAL.filter(e => e.cidadeIbge === ibge);
}
