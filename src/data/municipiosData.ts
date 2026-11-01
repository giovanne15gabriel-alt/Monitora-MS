// Dataset Oficial Atualizado dos 79 municípios de Mato Grosso do Sul (MS)
// Gestão 2025-2028 com dados consolidados do TCE-MS, IBGE e Câmaras Municipais

export interface Vereador {
  id: string;
  nome: string;
  nomeUrna: string;
  partido: string;
  cargo: string;
  salarioBase: number;
  salarioLiquido: number;
  verbaIndenizatoriaMedia: number;
  gastosGabineteAno: number;
  instagram?: string;
  principaisGastos: { categoria: string; valor: number }[];
}

export interface MunicipioSebraeData {
  empresasAtivas: number;
  empregosFormais: number;
  tempoAberturaHoras: number;
  capag: 'A' | 'B' | 'C';
  pibPerCapita: number;
  taxaSobrevivenciaEmpresas: number;
  dataSebraeUrl: string;
}

export interface MunicipioMS {
  ibge: number;
  nome: string;
  regiao: string;
  regiaoCor: string;
  populacao: number;
  lat: number;
  lng: number;
  prefeito: {
    nome: string;
    partido: string;
    mandato: string;
    vice: string;
    instagram?: string;
  };
  financas: {
    dividaAtiva: number;
    dividaConsolidada: number;
    dividaPorHabitante: number;
    receitaPrevista: number;
    receitaRealizada: number;
    despesaExecutada: number;
    gastoLegislativoTotal: number;
    gastoLegislativoPorHabitante: number;
    indiceTransparenciaTCE: number;
    situacaoFiscal: 'Regular' | 'Alerta' | 'Crítica';
    dataUltimaAtualizacaoTCE: string;
  };
  camara: {
    totalCadeiras: number;
    gastoMedioMensalGabinete: number;
    portalUrl: string;
    prefeituraUrl: string;
    tceUrl: string;
    ibgeUrl: string;
    dataSebraeUrl?: string;
  };
  sebrae?: MunicipioSebraeData;
  vereadores: Vereador[];
}

export const getMunicipioSlug = (nome: string): string => {
  return nome
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-');
};

export const MUNICIPIOS_DATA: MunicipioMS[] = [
  {
    "ibge": 5003207,
    "nome": "Corumbá",
    "regiao": "Pantanal",
    "regiaoCor": "#EAB308",
    "populacao": 96261,
    "lat": -19.009,
    "lng": -57.653,
    "prefeito": {
      "nome": "Dr. Gabriel",
      "partido": "PSB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Bia Cavassa (PSDB)"
    },
    "financas": {
      "dividaAtiva": 165400000,
      "dividaConsolidada": 92100000,
      "dividaPorHabitante": 957,
      "receitaPrevista": 890000000,
      "receitaRealizada": 896576052,
      "despesaExecutada": 870083575,
      "gastoLegislativoTotal": 3569690,
      "gastoLegislativoPorHabitante": 37.08,
      "indiceTransparenciaTCE": 8.1,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 15,
      "gastoMedioMensalGabinete": 5314,
      "portalUrl": "https://corumba.ms.leg.br/",
      "prefeituraUrl": "https://corumba.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/corumba/panorama"
    },
    "vereadores": [
      {
        "id": "5003207-v1",
        "nome": "Luciana Campestrini Araújo",
        "nomeUrna": "Luciana Campestrini",
        "partido": "PL",
        "cargo": "Presidente da Câmara",
        "salarioBase": 16300,
        "salarioLiquido": 12062,
        "verbaIndenizatoriaMedia": 3800,
        "gastosGabineteAno": 45600,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17328
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12768
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9120
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6384
          }
        ]
      },
      {
        "id": "5003207-v2",
        "nome": "Ana Ferreira Gomes",
        "nomeUrna": "Ana do Corumbá",
        "partido": "REPUBLICANOS",
        "cargo": "1º Secretário",
        "salarioBase": 13200,
        "salarioLiquido": 9768,
        "verbaIndenizatoriaMedia": 6200,
        "gastosGabineteAno": 74400,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 28272
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 20832
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14880
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10416
          }
        ]
      },
      {
        "id": "5003207-v3",
        "nome": "Luciana Campestrini Ribeiro",
        "nomeUrna": "Luciana do Corumbá",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 13600,
        "salarioLiquido": 10064,
        "verbaIndenizatoriaMedia": 6110,
        "gastosGabineteAno": 73320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 27862
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 20530
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14664
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10265
          }
        ]
      },
      {
        "id": "5003207-v4",
        "nome": "Ana Freitas Araújo",
        "nomeUrna": "Ana Freitas",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 13500,
        "salarioLiquido": 9990,
        "verbaIndenizatoriaMedia": 4090,
        "gastosGabineteAno": 49080,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 18650
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13742
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9816
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6871
          }
        ]
      },
      {
        "id": "5003207-v5",
        "nome": "Rogério Freitas Barbosa",
        "nomeUrna": "Rogério do Corumbá",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 13400,
        "salarioLiquido": 9916,
        "verbaIndenizatoriaMedia": 5630,
        "gastosGabineteAno": 67560,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 25673
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18917
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13512
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9458
          }
        ]
      },
      {
        "id": "5003207-v6",
        "nome": "Antônio Lima Dias",
        "nomeUrna": "Antônio Lima",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 13200,
        "salarioLiquido": 9768,
        "verbaIndenizatoriaMedia": 4430,
        "gastosGabineteAno": 53160,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 20201
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14885
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10632
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7442
          }
        ]
      },
      {
        "id": "5003207-v7",
        "nome": "Carlos Guedes Souza",
        "nomeUrna": "Carlos Guedes",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 12900,
        "salarioLiquido": 9546,
        "verbaIndenizatoriaMedia": 5780,
        "gastosGabineteAno": 69360,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 26357
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19421
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13872
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9710
          }
        ]
      },
      {
        "id": "5003207-v8",
        "nome": "Sandra Ferreira Melo",
        "nomeUrna": "Sandra Ferreira",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 13300,
        "salarioLiquido": 9842,
        "verbaIndenizatoriaMedia": 4860,
        "gastosGabineteAno": 58320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 22162
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16330
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11664
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8165
          }
        ]
      },
      {
        "id": "5003207-v9",
        "nome": "Silvio Gomes Barbosa",
        "nomeUrna": "Silvio do Corumbá",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 13000,
        "salarioLiquido": 9620,
        "verbaIndenizatoriaMedia": 6490,
        "gastosGabineteAno": 77880,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 29594
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 21806
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 15576
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10903
          }
        ]
      },
      {
        "id": "5003207-v10",
        "nome": "Aline Santos Santos",
        "nomeUrna": "Aline do Corumbá",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 13200,
        "salarioLiquido": 9768,
        "verbaIndenizatoriaMedia": 4330,
        "gastosGabineteAno": 51960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19745
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14549
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10392
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7274
          }
        ]
      },
      {
        "id": "5003207-v11",
        "nome": "Fábio Freitas Guedes",
        "nomeUrna": "Fábio do Corumbá",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 12700,
        "salarioLiquido": 9398,
        "verbaIndenizatoriaMedia": 3910,
        "gastosGabineteAno": 46920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17830
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13138
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9384
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6569
          }
        ]
      },
      {
        "id": "5003207-v12",
        "nome": "Luciana Miranda Nogueira",
        "nomeUrna": "Luciana do Corumbá",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 13000,
        "salarioLiquido": 9620,
        "verbaIndenizatoriaMedia": 4420,
        "gastosGabineteAno": 53040,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 20155
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14851
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10608
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7426
          }
        ]
      },
      {
        "id": "5003207-v13",
        "nome": "Cláudio Albuquerque Barros",
        "nomeUrna": "Cláudio do Corumbá",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 13300,
        "salarioLiquido": 9842,
        "verbaIndenizatoriaMedia": 5400,
        "gastosGabineteAno": 64800,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24624
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18144
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12960
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9072
          }
        ]
      },
      {
        "id": "5003207-v14",
        "nome": "Lucas Rocha Barbosa",
        "nomeUrna": "Lucas Rocha",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 13200,
        "salarioLiquido": 9768,
        "verbaIndenizatoriaMedia": 5010,
        "gastosGabineteAno": 60120,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 22846
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16834
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12024
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8417
          }
        ]
      },
      {
        "id": "5003207-v15",
        "nome": "Cristiane Barros Campestrini",
        "nomeUrna": "Cristiane do Corumbá",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 13100,
        "salarioLiquido": 9694,
        "verbaIndenizatoriaMedia": 4350,
        "gastosGabineteAno": 52200,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19836
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14616
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10440
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7308
          }
        ]
      }
    ]
  },
  {
    "ibge": 5005202,
    "nome": "Ladário",
    "regiao": "Pantanal",
    "regiaoCor": "#EAB308",
    "populacao": 22216,
    "lat": -19.053,
    "lng": -57.601,
    "prefeito": {
      "nome": "Munir",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Dr. Juliano Silva (MDB)"
    },
    "financas": {
      "dividaAtiva": 18000000,
      "dividaConsolidada": 8500000,
      "dividaPorHabitante": 383,
      "receitaPrevista": 125000000,
      "receitaRealizada": 127035207,
      "despesaExecutada": 121015929,
      "gastoLegislativoTotal": 2513380,
      "gastoLegislativoPorHabitante": 113.13,
      "indiceTransparenciaTCE": 7.6,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 11,
      "gastoMedioMensalGabinete": 7345,
      "portalUrl": "https://www.camaraladario.ms.gov.br/",
      "prefeituraUrl": "https://ladario.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/ladario/panorama"
    },
    "vereadores": [
      {
        "id": "5005202-v1",
        "nome": "Paulo Barbosa Barros",
        "nomeUrna": "Paulo do Ladário",
        "partido": "PL",
        "cargo": "Presidente da Câmara",
        "salarioBase": 12500,
        "salarioLiquido": 9250,
        "verbaIndenizatoriaMedia": 7340,
        "gastosGabineteAno": 88080,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 33470
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 24662
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 17616
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 12331
          }
        ]
      },
      {
        "id": "5005202-v2",
        "nome": "Márcio Albuquerque Barros",
        "nomeUrna": "Márcio do Ladário",
        "partido": "PSB",
        "cargo": "1º Secretário",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 8330,
        "gastosGabineteAno": 99960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 37985
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 27989
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 19992
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 13994
          }
        ]
      },
      {
        "id": "5005202-v3",
        "nome": "Sandra Pereira Silva",
        "nomeUrna": "Sandra Pereira",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 10000,
        "salarioLiquido": 7400,
        "verbaIndenizatoriaMedia": 6950,
        "gastosGabineteAno": 83400,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 31692
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 23352
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 16680
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 11676
          }
        ]
      },
      {
        "id": "5005202-v4",
        "nome": "Roberto Sanches Santos",
        "nomeUrna": "Roberto do Ladário",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 9600,
        "salarioLiquido": 7104,
        "verbaIndenizatoriaMedia": 9330,
        "gastosGabineteAno": 111960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 42545
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 31349
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 22392
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 15674
          }
        ]
      },
      {
        "id": "5005202-v5",
        "nome": "Antônio Sanches Sanches",
        "nomeUrna": "Antônio do Ladário",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 9700,
        "salarioLiquido": 7178,
        "verbaIndenizatoriaMedia": 6070,
        "gastosGabineteAno": 72840,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 27679
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 20395
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14568
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10198
          }
        ]
      },
      {
        "id": "5005202-v6",
        "nome": "Roberto Silva Costa",
        "nomeUrna": "Roberto Silva",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 10200,
        "salarioLiquido": 7548,
        "verbaIndenizatoriaMedia": 9320,
        "gastosGabineteAno": 111840,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 42499
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 31315
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 22368
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 15658
          }
        ]
      },
      {
        "id": "5005202-v7",
        "nome": "Silvio Guedes Guedes",
        "nomeUrna": "Silvio do Ladário",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 9440,
        "gastosGabineteAno": 113280,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 43046
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 31718
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 22656
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 15859
          }
        ]
      },
      {
        "id": "5005202-v8",
        "nome": "Edson Silva Carvalho",
        "nomeUrna": "Edson Silva",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 9400,
        "salarioLiquido": 6956,
        "verbaIndenizatoriaMedia": 7890,
        "gastosGabineteAno": 94680,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 35978
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 26510
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 18936
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 13255
          }
        ]
      },
      {
        "id": "5005202-v9",
        "nome": "José Souza Santos",
        "nomeUrna": "José Souza",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 9600,
        "salarioLiquido": 7104,
        "verbaIndenizatoriaMedia": 6660,
        "gastosGabineteAno": 79920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 30370
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 22378
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 15984
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 11189
          }
        ]
      },
      {
        "id": "5005202-v10",
        "nome": "José Barbosa Alves",
        "nomeUrna": "José do Ladário",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 9700,
        "salarioLiquido": 7178,
        "verbaIndenizatoriaMedia": 9140,
        "gastosGabineteAno": 109680,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 41678
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 30710
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 21936
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 15355
          }
        ]
      },
      {
        "id": "5005202-v11",
        "nome": "José Miranda Santos",
        "nomeUrna": "José Miranda",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 10200,
        "salarioLiquido": 7548,
        "verbaIndenizatoriaMedia": 6840,
        "gastosGabineteAno": 82080,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 31190
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 22982
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 16416
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 11491
          }
        ]
      }
    ]
  },
  {
    "ibge": 5005608,
    "nome": "Miranda",
    "regiao": "Pantanal",
    "regiaoCor": "#EAB308",
    "populacao": 25536,
    "lat": -20.24,
    "lng": -56.379,
    "prefeito": {
      "nome": "Fábio Florença",
      "partido": "PDT",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Elange Ribeiro (PSD)"
    },
    "financas": {
      "dividaAtiva": 20100000,
      "dividaConsolidada": 9800000,
      "dividaPorHabitante": 384,
      "receitaPrevista": 140000000,
      "receitaRealizada": 138388454,
      "despesaExecutada": 131707424,
      "gastoLegislativoTotal": 2549750,
      "gastoLegislativoPorHabitante": 99.85,
      "indiceTransparenciaTCE": 9.6,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 11,
      "gastoMedioMensalGabinete": 7215,
      "portalUrl": "https://www.camaramiranda.ms.gov.br/",
      "prefeituraUrl": "https://miranda.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/miranda/panorama"
    },
    "vereadores": [
      {
        "id": "5005608-v1",
        "nome": "Márcio Barbosa Lima",
        "nomeUrna": "Márcio Barbosa",
        "partido": "PODE",
        "cargo": "Presidente da Câmara",
        "salarioBase": 13300,
        "salarioLiquido": 9842,
        "verbaIndenizatoriaMedia": 7900,
        "gastosGabineteAno": 94800,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 36024
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 26544
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 18960
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 13272
          }
        ]
      },
      {
        "id": "5005608-v2",
        "nome": "Eduardo Sanches Santos",
        "nomeUrna": "Eduardo do Miranda",
        "partido": "PSB",
        "cargo": "1º Secretário",
        "salarioBase": 10100,
        "salarioLiquido": 7474,
        "verbaIndenizatoriaMedia": 6160,
        "gastosGabineteAno": 73920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 28090
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 20698
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14784
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10349
          }
        ]
      },
      {
        "id": "5005608-v3",
        "nome": "Silvio Melo Pacheco",
        "nomeUrna": "Silvio do Miranda",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 10000,
        "salarioLiquido": 7400,
        "verbaIndenizatoriaMedia": 8480,
        "gastosGabineteAno": 101760,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 38669
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 28493
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 20352
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 14246
          }
        ]
      },
      {
        "id": "5005608-v4",
        "nome": "Renata Oliveira Gomes",
        "nomeUrna": "Renata Oliveira",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 10000,
        "salarioLiquido": 7400,
        "verbaIndenizatoriaMedia": 5490,
        "gastosGabineteAno": 65880,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 25034
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18446
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13176
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9223
          }
        ]
      },
      {
        "id": "5005608-v5",
        "nome": "Cláudio Ribeiro Silva",
        "nomeUrna": "Cláudio do Miranda",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 9400,
        "salarioLiquido": 6956,
        "verbaIndenizatoriaMedia": 9150,
        "gastosGabineteAno": 109800,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 41724
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 30744
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 21960
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 15372
          }
        ]
      },
      {
        "id": "5005608-v6",
        "nome": "Camila Guedes Carvalho",
        "nomeUrna": "Camila Guedes",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 9400,
        "salarioLiquido": 6956,
        "verbaIndenizatoriaMedia": 8020,
        "gastosGabineteAno": 96240,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 36571
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 26947
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 19248
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 13474
          }
        ]
      },
      {
        "id": "5005608-v7",
        "nome": "Carlos Carvalho Barros",
        "nomeUrna": "Carlos Carvalho",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 9900,
        "salarioLiquido": 7326,
        "verbaIndenizatoriaMedia": 8320,
        "gastosGabineteAno": 99840,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 37939
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 27955
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 19968
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 13978
          }
        ]
      },
      {
        "id": "5005608-v8",
        "nome": "Marcos Miranda Barros",
        "nomeUrna": "Marcos do Miranda",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 10100,
        "salarioLiquido": 7474,
        "verbaIndenizatoriaMedia": 6670,
        "gastosGabineteAno": 80040,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 30415
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 22411
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 16008
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 11206
          }
        ]
      },
      {
        "id": "5005608-v9",
        "nome": "Eduardo Guedes Ferreira",
        "nomeUrna": "Eduardo do Miranda",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 10200,
        "salarioLiquido": 7548,
        "verbaIndenizatoriaMedia": 9260,
        "gastosGabineteAno": 111120,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 42226
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 31114
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 22224
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 15557
          }
        ]
      },
      {
        "id": "5005608-v10",
        "nome": "Ana Dias Ferreira",
        "nomeUrna": "Ana Dias",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 10200,
        "salarioLiquido": 7548,
        "verbaIndenizatoriaMedia": 9130,
        "gastosGabineteAno": 109560,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 41633
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 30677
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 21912
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 15338
          }
        ]
      },
      {
        "id": "5005608-v11",
        "nome": "José Costa Alves",
        "nomeUrna": "José do Miranda",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 10100,
        "salarioLiquido": 7474,
        "verbaIndenizatoriaMedia": 8990,
        "gastosGabineteAno": 107880,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 40994
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 30206
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 21576
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 15103
          }
        ]
      }
    ]
  },
  {
    "ibge": 5001102,
    "nome": "Aquidauana",
    "regiao": "Pantanal",
    "regiaoCor": "#EAB308",
    "populacao": 46803,
    "lat": -20.471,
    "lng": -55.787,
    "prefeito": {
      "nome": "Mauro do Atlântico",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Dr. Murilo (MDB)"
    },
    "financas": {
      "dividaAtiva": 48700000,
      "dividaConsolidada": 22500000,
      "dividaPorHabitante": 481,
      "receitaPrevista": 260000000,
      "receitaRealizada": 252085268,
      "despesaExecutada": 243780382,
      "gastoLegislativoTotal": 2647170,
      "gastoLegislativoPorHabitante": 56.56,
      "indiceTransparenciaTCE": 8.6,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 13,
      "gastoMedioMensalGabinete": 5832,
      "portalUrl": "https://www.aquidauana.ms.leg.br/",
      "prefeituraUrl": "https://aquidauana.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/aquidauana/panorama"
    },
    "vereadores": [
      {
        "id": "5001102-v1",
        "nome": "Patrícia Martins Albuquerque",
        "nomeUrna": "Patrícia do Aquidauana",
        "partido": "PP",
        "cargo": "Presidente da Câmara",
        "salarioBase": 13000,
        "salarioLiquido": 9620,
        "verbaIndenizatoriaMedia": 4750,
        "gastosGabineteAno": 57000,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21660
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15960
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11400
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7980
          }
        ]
      },
      {
        "id": "5001102-v2",
        "nome": "Fernando Melo Ferreira",
        "nomeUrna": "Fernando Melo",
        "partido": "PODE",
        "cargo": "1º Secretário",
        "salarioBase": 10100,
        "salarioLiquido": 7474,
        "verbaIndenizatoriaMedia": 4690,
        "gastosGabineteAno": 56280,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21386
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15758
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11256
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7879
          }
        ]
      },
      {
        "id": "5001102-v3",
        "nome": "Camila Rocha Rocha",
        "nomeUrna": "Camila Rocha",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 7210,
        "gastosGabineteAno": 86520,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 32878
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 24226
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 17304
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 12113
          }
        ]
      },
      {
        "id": "5001102-v4",
        "nome": "Márcio Silva Santos",
        "nomeUrna": "Márcio Silva",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 10300,
        "salarioLiquido": 7622,
        "verbaIndenizatoriaMedia": 7330,
        "gastosGabineteAno": 87960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 33425
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 24629
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 17592
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 12314
          }
        ]
      },
      {
        "id": "5001102-v5",
        "nome": "Maria Ribeiro Dias",
        "nomeUrna": "Maria Ribeiro",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 5900,
        "gastosGabineteAno": 70800,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 26904
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19824
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14160
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9912
          }
        ]
      },
      {
        "id": "5001102-v6",
        "nome": "Juliana Costa Nogueira",
        "nomeUrna": "Juliana do Aquidauana",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 9600,
        "salarioLiquido": 7104,
        "verbaIndenizatoriaMedia": 5470,
        "gastosGabineteAno": 65640,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24943
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18379
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13128
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9190
          }
        ]
      },
      {
        "id": "5001102-v7",
        "nome": "Patrícia Oliveira Martins",
        "nomeUrna": "Patrícia Oliveira",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 10300,
        "salarioLiquido": 7622,
        "verbaIndenizatoriaMedia": 5230,
        "gastosGabineteAno": 62760,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 23849
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17573
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12552
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8786
          }
        ]
      },
      {
        "id": "5001102-v8",
        "nome": "Antônio Freitas Martins",
        "nomeUrna": "Antônio do Aquidauana",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 10000,
        "salarioLiquido": 7400,
        "verbaIndenizatoriaMedia": 7010,
        "gastosGabineteAno": 84120,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 31966
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 23554
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 16824
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 11777
          }
        ]
      },
      {
        "id": "5001102-v9",
        "nome": "Rogério Alves Silva",
        "nomeUrna": "Rogério do Aquidauana",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 4760,
        "gastosGabineteAno": 57120,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21706
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15994
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11424
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7997
          }
        ]
      },
      {
        "id": "5001102-v10",
        "nome": "Aline Carvalho Guedes",
        "nomeUrna": "Aline do Aquidauana",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 10200,
        "salarioLiquido": 7548,
        "verbaIndenizatoriaMedia": 4670,
        "gastosGabineteAno": 56040,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21295
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15691
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11208
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7846
          }
        ]
      },
      {
        "id": "5001102-v11",
        "nome": "Juliana Pereira Albuquerque",
        "nomeUrna": "Juliana do Aquidauana",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 6070,
        "gastosGabineteAno": 72840,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 27679
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 20395
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14568
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10198
          }
        ]
      },
      {
        "id": "5001102-v12",
        "nome": "Lucas Ferreira Ribeiro",
        "nomeUrna": "Lucas do Aquidauana",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 10000,
        "salarioLiquido": 7400,
        "verbaIndenizatoriaMedia": 6130,
        "gastosGabineteAno": 73560,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 27953
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 20597
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14712
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10298
          }
        ]
      },
      {
        "id": "5001102-v13",
        "nome": "Camila Rocha Guedes",
        "nomeUrna": "Camila do Aquidauana",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 9900,
        "salarioLiquido": 7326,
        "verbaIndenizatoriaMedia": 5410,
        "gastosGabineteAno": 64920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24670
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18178
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12984
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9089
          }
        ]
      }
    ]
  },
  {
    "ibge": 5000708,
    "nome": "Anastácio",
    "regiao": "Pantanal",
    "regiaoCor": "#EAB308",
    "populacao": 24151,
    "lat": -20.483,
    "lng": -55.806,
    "prefeito": {
      "nome": "Cido Hudari",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Maria Vital (PP)"
    },
    "financas": {
      "dividaAtiva": 21000000,
      "dividaConsolidada": 11400000,
      "dividaPorHabitante": 472,
      "receitaPrevista": 135000000,
      "receitaRealizada": 137550695,
      "despesaExecutada": 128265553,
      "gastoLegislativoTotal": 2043610,
      "gastoLegislativoPorHabitante": 84.62,
      "indiceTransparenciaTCE": 8.2,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 11,
      "gastoMedioMensalGabinete": 4657,
      "portalUrl": "https://www.camaraanastacio.ms.gov.br/",
      "prefeituraUrl": "https://anastacio.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/anastacio/panorama"
    },
    "vereadores": [
      {
        "id": "5000708-v1",
        "nome": "Marcos Barbosa Ribeiro",
        "nomeUrna": "Marcos do Anastácio",
        "partido": "PSDB",
        "cargo": "Presidente da Câmara",
        "salarioBase": 12600,
        "salarioLiquido": 9324,
        "verbaIndenizatoriaMedia": 3590,
        "gastosGabineteAno": 43080,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 16370
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12062
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8616
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6031
          }
        ]
      },
      {
        "id": "5000708-v2",
        "nome": "Camila Lima Souza",
        "nomeUrna": "Camila do Anastácio",
        "partido": "PL",
        "cargo": "1º Secretário",
        "salarioBase": 9700,
        "salarioLiquido": 7178,
        "verbaIndenizatoriaMedia": 4260,
        "gastosGabineteAno": 51120,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19426
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14314
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10224
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7157
          }
        ]
      },
      {
        "id": "5000708-v3",
        "nome": "Sandra Ribeiro Guedes",
        "nomeUrna": "Sandra do Anastácio",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 9600,
        "salarioLiquido": 7104,
        "verbaIndenizatoriaMedia": 3590,
        "gastosGabineteAno": 43080,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 16370
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12062
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8616
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6031
          }
        ]
      },
      {
        "id": "5000708-v4",
        "nome": "Silvio Sanches Alves",
        "nomeUrna": "Silvio Sanches",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 9600,
        "salarioLiquido": 7104,
        "verbaIndenizatoriaMedia": 5900,
        "gastosGabineteAno": 70800,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 26904
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19824
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14160
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9912
          }
        ]
      },
      {
        "id": "5000708-v5",
        "nome": "Paulo Alves Campestrini",
        "nomeUrna": "Paulo do Anastácio",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 9600,
        "salarioLiquido": 7104,
        "verbaIndenizatoriaMedia": 3770,
        "gastosGabineteAno": 45240,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17191
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12667
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9048
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6334
          }
        ]
      },
      {
        "id": "5000708-v6",
        "nome": "Sandra Campestrini Dias",
        "nomeUrna": "Sandra do Anastácio",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 9700,
        "salarioLiquido": 7178,
        "verbaIndenizatoriaMedia": 3380,
        "gastosGabineteAno": 40560,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15413
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11357
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8112
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5678
          }
        ]
      },
      {
        "id": "5000708-v7",
        "nome": "Roberto Santos Costa",
        "nomeUrna": "Roberto do Anastácio",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 5200,
        "gastosGabineteAno": 62400,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 23712
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17472
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12480
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8736
          }
        ]
      },
      {
        "id": "5000708-v8",
        "nome": "Paulo Moreira Martins",
        "nomeUrna": "Paulo do Anastácio",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 4810,
        "gastosGabineteAno": 57720,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21934
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16162
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11544
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8081
          }
        ]
      },
      {
        "id": "5000708-v9",
        "nome": "Marcos Rocha Araújo",
        "nomeUrna": "Marcos do Anastácio",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 10300,
        "salarioLiquido": 7622,
        "verbaIndenizatoriaMedia": 3900,
        "gastosGabineteAno": 46800,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17784
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13104
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9360
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6552
          }
        ]
      },
      {
        "id": "5000708-v10",
        "nome": "Carlos Guedes Nogueira",
        "nomeUrna": "Carlos do Anastácio",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 10300,
        "salarioLiquido": 7622,
        "verbaIndenizatoriaMedia": 5190,
        "gastosGabineteAno": 62280,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 23666
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17438
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12456
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8719
          }
        ]
      },
      {
        "id": "5000708-v11",
        "nome": "José Martins Lima",
        "nomeUrna": "José Martins",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 10100,
        "salarioLiquido": 7474,
        "verbaIndenizatoriaMedia": 4240,
        "gastosGabineteAno": 50880,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19334
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14246
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10176
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7123
          }
        ]
      }
    ]
  },
  {
    "ibge": 5007935,
    "nome": "Sonora",
    "regiao": "Rota Norte",
    "regiaoCor": "#84CC16",
    "populacao": 14516,
    "lat": -17.568,
    "lng": -54.755,
    "prefeito": {
      "nome": "Clarice Ewerling",
      "partido": "MDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Jansen Peixoto (PSDB)"
    },
    "financas": {
      "dividaAtiva": 15200000,
      "dividaConsolidada": 7100000,
      "dividaPorHabitante": 489,
      "receitaPrevista": 118000000,
      "receitaRealizada": 115338586,
      "despesaExecutada": 111369250,
      "gastoLegislativoTotal": 1253910,
      "gastoLegislativoPorHabitante": 86.38,
      "indiceTransparenciaTCE": 7.7,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 2651,
      "portalUrl": "https://www.camarasonora.ms.gov.br/",
      "prefeituraUrl": "https://sonora.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/sonora/panorama"
    },
    "vereadores": [
      {
        "id": "5007935-v1",
        "nome": "Cristiane Rocha Melo",
        "nomeUrna": "Cristiane do Sonora",
        "partido": "PSDB",
        "cargo": "Presidente da Câmara",
        "salarioBase": 10400,
        "salarioLiquido": 7696,
        "verbaIndenizatoriaMedia": 3390,
        "gastosGabineteAno": 40680,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15458
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11390
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8136
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5695
          }
        ]
      },
      {
        "id": "5007935-v2",
        "nome": "Lucas Ribeiro Miranda",
        "nomeUrna": "Lucas do Sonora",
        "partido": "UNIÃO",
        "cargo": "1º Secretário",
        "salarioBase": 7100,
        "salarioLiquido": 5254,
        "verbaIndenizatoriaMedia": 2530,
        "gastosGabineteAno": 30360,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 11537
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 8501
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6072
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4250
          }
        ]
      },
      {
        "id": "5007935-v3",
        "nome": "Maria Martins Gomes",
        "nomeUrna": "Maria do Sonora",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 7300,
        "salarioLiquido": 5402,
        "verbaIndenizatoriaMedia": 3110,
        "gastosGabineteAno": 37320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 14182
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10450
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7464
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5225
          }
        ]
      },
      {
        "id": "5007935-v4",
        "nome": "Renata Ferreira Dias",
        "nomeUrna": "Renata Ferreira",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 7600,
        "salarioLiquido": 5624,
        "verbaIndenizatoriaMedia": 2910,
        "gastosGabineteAno": 34920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 13270
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 9778
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6984
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4889
          }
        ]
      },
      {
        "id": "5007935-v5",
        "nome": "Marcos Sanches Barbosa",
        "nomeUrna": "Marcos do Sonora",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 7200,
        "salarioLiquido": 5328,
        "verbaIndenizatoriaMedia": 3080,
        "gastosGabineteAno": 36960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 14045
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10349
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7392
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5174
          }
        ]
      },
      {
        "id": "5007935-v6",
        "nome": "Ana Sanches Pacheco",
        "nomeUrna": "Ana do Sonora",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 8000,
        "salarioLiquido": 5920,
        "verbaIndenizatoriaMedia": 2950,
        "gastosGabineteAno": 35400,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 13452
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 9912
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7080
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4956
          }
        ]
      },
      {
        "id": "5007935-v7",
        "nome": "Fernando Rocha Rocha",
        "nomeUrna": "Fernando do Sonora",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 7900,
        "salarioLiquido": 5846,
        "verbaIndenizatoriaMedia": 2300,
        "gastosGabineteAno": 27600,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 10488
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 7728
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5520
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3864
          }
        ]
      },
      {
        "id": "5007935-v8",
        "nome": "Fernando Rezende Freitas",
        "nomeUrna": "Fernando do Sonora",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 8000,
        "salarioLiquido": 5920,
        "verbaIndenizatoriaMedia": 2110,
        "gastosGabineteAno": 25320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 9622
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 7090
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5064
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3545
          }
        ]
      },
      {
        "id": "5007935-v9",
        "nome": "José Nogueira Freitas",
        "nomeUrna": "José Nogueira",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 7600,
        "salarioLiquido": 5624,
        "verbaIndenizatoriaMedia": 3310,
        "gastosGabineteAno": 39720,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15094
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11122
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7944
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5561
          }
        ]
      }
    ]
  },
  {
    "ibge": 5006408,
    "nome": "Pedro Gomes",
    "regiao": "Rota Norte",
    "regiaoCor": "#84CC16",
    "populacao": 6940,
    "lat": -18.1,
    "lng": -54.551,
    "prefeito": {
      "nome": "Delegado Murilo",
      "partido": "PL",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Edy Rezende (PL)"
    },
    "financas": {
      "dividaAtiva": 7100000,
      "dividaConsolidada": 3200000,
      "dividaPorHabitante": 461,
      "receitaPrevista": 64000000,
      "receitaRealizada": 65127847,
      "despesaExecutada": 61397971,
      "gastoLegislativoTotal": 1085740,
      "gastoLegislativoPorHabitante": 156.45,
      "indiceTransparenciaTCE": 7.7,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 2377,
      "portalUrl": "https://www.camarapedrogomes.ms.gov.br/",
      "prefeituraUrl": "https://pedrogomes.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/pedro-gomes/panorama"
    },
    "vereadores": [
      {
        "id": "5006408-v1",
        "nome": "Sandra Lima Martins",
        "nomeUrna": "Sandra Lima",
        "partido": "UNIÃO",
        "cargo": "Presidente da Câmara",
        "salarioBase": 9400,
        "salarioLiquido": 6956,
        "verbaIndenizatoriaMedia": 2540,
        "gastosGabineteAno": 30480,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 11582
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 8534
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6096
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4267
          }
        ]
      },
      {
        "id": "5006408-v2",
        "nome": "Camila Miranda Melo",
        "nomeUrna": "Camila do Pedro",
        "partido": "PSB",
        "cargo": "1º Secretário",
        "salarioBase": 6900,
        "salarioLiquido": 5106,
        "verbaIndenizatoriaMedia": 1730,
        "gastosGabineteAno": 20760,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 7889
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 5813
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 4152
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 2906
          }
        ]
      },
      {
        "id": "5006408-v3",
        "nome": "Aline Ferreira Albuquerque",
        "nomeUrna": "Aline Ferreira",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 6600,
        "salarioLiquido": 4884,
        "verbaIndenizatoriaMedia": 2550,
        "gastosGabineteAno": 30600,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 11628
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 8568
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6120
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4284
          }
        ]
      },
      {
        "id": "5006408-v4",
        "nome": "João Moreira Souza",
        "nomeUrna": "João Moreira",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 6700,
        "salarioLiquido": 4958,
        "verbaIndenizatoriaMedia": 2960,
        "gastosGabineteAno": 35520,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 13498
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 9946
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7104
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4973
          }
        ]
      },
      {
        "id": "5006408-v5",
        "nome": "Luiz Ferreira Sanches",
        "nomeUrna": "Luiz Ferreira",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 6600,
        "salarioLiquido": 4884,
        "verbaIndenizatoriaMedia": 1760,
        "gastosGabineteAno": 21120,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 8026
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 5914
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 4224
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 2957
          }
        ]
      },
      {
        "id": "5006408-v6",
        "nome": "Patrícia Gomes Alves",
        "nomeUrna": "Patrícia do Pedro",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 6100,
        "salarioLiquido": 4514,
        "verbaIndenizatoriaMedia": 2440,
        "gastosGabineteAno": 29280,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 11126
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 8198
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5856
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4099
          }
        ]
      },
      {
        "id": "5006408-v7",
        "nome": "Juliana Sanches Freitas",
        "nomeUrna": "Juliana do Pedro",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 6200,
        "salarioLiquido": 4588,
        "verbaIndenizatoriaMedia": 2320,
        "gastosGabineteAno": 27840,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 10579
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 7795
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5568
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3898
          }
        ]
      },
      {
        "id": "5006408-v8",
        "nome": "Carlos Melo Martins",
        "nomeUrna": "Carlos Melo",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 6800,
        "salarioLiquido": 5032,
        "verbaIndenizatoriaMedia": 3020,
        "gastosGabineteAno": 36240,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 13771
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10147
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7248
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5074
          }
        ]
      },
      {
        "id": "5006408-v9",
        "nome": "Fábio Souza Dias",
        "nomeUrna": "Fábio do Pedro",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 6900,
        "salarioLiquido": 5106,
        "verbaIndenizatoriaMedia": 2220,
        "gastosGabineteAno": 26640,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 10123
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 7459
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5328
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3730
          }
        ]
      }
    ]
  },
  {
    "ibge": 5003306,
    "nome": "Coxim",
    "regiao": "Rota Norte",
    "regiaoCor": "#84CC16",
    "populacao": 32151,
    "lat": -18.507,
    "lng": -54.76,
    "prefeito": {
      "nome": "Edilson Magro",
      "partido": "PP",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Flávio Dias (PSDB)"
    },
    "financas": {
      "dividaAtiva": 28500000,
      "dividaConsolidada": 13900000,
      "dividaPorHabitante": 432,
      "receitaPrevista": 190000000,
      "receitaRealizada": 184073673,
      "despesaExecutada": 184637701,
      "gastoLegislativoTotal": 2885160,
      "gastoLegislativoPorHabitante": 89.74,
      "indiceTransparenciaTCE": 8.6,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 13,
      "gastoMedioMensalGabinete": 6739,
      "portalUrl": "https://www.camaracoxim.ms.gov.br/",
      "prefeituraUrl": "https://coxim.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/coxim/panorama"
    },
    "vereadores": [
      {
        "id": "5003306-v1",
        "nome": "Renata Campestrini Barbosa",
        "nomeUrna": "Renata Campestrini",
        "partido": "PSD",
        "cargo": "Presidente da Câmara",
        "salarioBase": 12500,
        "salarioLiquido": 9250,
        "verbaIndenizatoriaMedia": 5740,
        "gastosGabineteAno": 68880,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 26174
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19286
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13776
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9643
          }
        ]
      },
      {
        "id": "5003306-v2",
        "nome": "Ana Miranda Nogueira",
        "nomeUrna": "Ana do Coxim",
        "partido": "PSDB",
        "cargo": "1º Secretário",
        "salarioBase": 9900,
        "salarioLiquido": 7326,
        "verbaIndenizatoriaMedia": 8640,
        "gastosGabineteAno": 103680,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 39398
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 29030
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 20736
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 14515
          }
        ]
      },
      {
        "id": "5003306-v3",
        "nome": "Eduardo Miranda Sanches",
        "nomeUrna": "Eduardo do Coxim",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 10300,
        "salarioLiquido": 7622,
        "verbaIndenizatoriaMedia": 6340,
        "gastosGabineteAno": 76080,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 28910
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 21302
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 15216
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10651
          }
        ]
      },
      {
        "id": "5003306-v4",
        "nome": "Ana Melo Ribeiro",
        "nomeUrna": "Ana do Coxim",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 7280,
        "gastosGabineteAno": 87360,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 33197
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 24461
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 17472
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 12230
          }
        ]
      },
      {
        "id": "5003306-v5",
        "nome": "João Sanches Oliveira",
        "nomeUrna": "João do Coxim",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 10000,
        "salarioLiquido": 7400,
        "verbaIndenizatoriaMedia": 8580,
        "gastosGabineteAno": 102960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 39125
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 28829
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 20592
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 14414
          }
        ]
      },
      {
        "id": "5003306-v6",
        "nome": "Carlos Carvalho Pacheco",
        "nomeUrna": "Carlos do Coxim",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 9900,
        "salarioLiquido": 7326,
        "verbaIndenizatoriaMedia": 8450,
        "gastosGabineteAno": 101400,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 38532
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 28392
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 20280
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 14196
          }
        ]
      },
      {
        "id": "5003306-v7",
        "nome": "Fábio Alves Nogueira",
        "nomeUrna": "Fábio do Coxim",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 10000,
        "salarioLiquido": 7400,
        "verbaIndenizatoriaMedia": 8320,
        "gastosGabineteAno": 99840,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 37939
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 27955
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 19968
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 13978
          }
        ]
      },
      {
        "id": "5003306-v8",
        "nome": "Lucas Ribeiro Barros",
        "nomeUrna": "Lucas Ribeiro",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 9900,
        "salarioLiquido": 7326,
        "verbaIndenizatoriaMedia": 5670,
        "gastosGabineteAno": 68040,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 25855
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19051
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13608
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9526
          }
        ]
      },
      {
        "id": "5003306-v9",
        "nome": "Ana Lima Barros",
        "nomeUrna": "Ana do Coxim",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 9400,
        "salarioLiquido": 6956,
        "verbaIndenizatoriaMedia": 6460,
        "gastosGabineteAno": 77520,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 29458
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 21706
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 15504
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10853
          }
        ]
      },
      {
        "id": "5003306-v10",
        "nome": "Camila Albuquerque Carvalho",
        "nomeUrna": "Camila Albuquerque",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 8590,
        "gastosGabineteAno": 103080,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 39170
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 28862
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 20616
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 14431
          }
        ]
      },
      {
        "id": "5003306-v11",
        "nome": "Luiz Carvalho Alves",
        "nomeUrna": "Luiz do Coxim",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 9900,
        "salarioLiquido": 7326,
        "verbaIndenizatoriaMedia": 6840,
        "gastosGabineteAno": 82080,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 31190
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 22982
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 16416
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 11491
          }
        ]
      },
      {
        "id": "5003306-v12",
        "nome": "Carlos Barbosa Rocha",
        "nomeUrna": "Carlos do Coxim",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 10200,
        "salarioLiquido": 7548,
        "verbaIndenizatoriaMedia": 8350,
        "gastosGabineteAno": 100200,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 38076
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 28056
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 20040
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 14028
          }
        ]
      },
      {
        "id": "5003306-v13",
        "nome": "José Moreira Nogueira",
        "nomeUrna": "José do Coxim",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 6200,
        "gastosGabineteAno": 74400,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 28272
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 20832
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14880
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10416
          }
        ]
      }
    ]
  },
  {
    "ibge": 5000252,
    "nome": "Alcinópolis",
    "regiao": "Rota Norte",
    "regiaoCor": "#84CC16",
    "populacao": 4537,
    "lat": -18.324,
    "lng": -53.705,
    "prefeito": {
      "nome": "Weliton Guimarães",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Waldemar Barbosa (Pezão) (PP)"
    },
    "financas": {
      "dividaAtiva": 4800000,
      "dividaConsolidada": 2100000,
      "dividaPorHabitante": 463,
      "receitaPrevista": 54000000,
      "receitaRealizada": 54296634,
      "despesaExecutada": 50170127,
      "gastoLegislativoTotal": 1285490,
      "gastoLegislativoPorHabitante": 283.33,
      "indiceTransparenciaTCE": 9.6,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 4527,
      "portalUrl": "https://www.camaraalcinopolis.ms.gov.br/",
      "prefeituraUrl": "https://alcinopolis.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/alcinopolis/panorama"
    },
    "vereadores": [
      {
        "id": "5000252-v1",
        "nome": "Rafael Freitas Pereira",
        "nomeUrna": "Rafael Freitas",
        "partido": "PODE",
        "cargo": "Presidente da Câmara",
        "salarioBase": 9200,
        "salarioLiquido": 6808,
        "verbaIndenizatoriaMedia": 4220,
        "gastosGabineteAno": 50640,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19243
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14179
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10128
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7090
          }
        ]
      },
      {
        "id": "5000252-v2",
        "nome": "Marcelo Ribeiro Lima",
        "nomeUrna": "Marcelo do Alcinópolis",
        "partido": "MDB",
        "cargo": "1º Secretário",
        "salarioBase": 6600,
        "salarioLiquido": 4884,
        "verbaIndenizatoriaMedia": 4360,
        "gastosGabineteAno": 52320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19882
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14650
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10464
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7325
          }
        ]
      },
      {
        "id": "5000252-v3",
        "nome": "Paulo Alves Pereira",
        "nomeUrna": "Paulo Alves",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 6000,
        "salarioLiquido": 4440,
        "verbaIndenizatoriaMedia": 5070,
        "gastosGabineteAno": 60840,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 23119
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17035
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12168
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8518
          }
        ]
      },
      {
        "id": "5000252-v4",
        "nome": "Cristiane Nogueira Rocha",
        "nomeUrna": "Cristiane do Alcinópolis",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 6200,
        "salarioLiquido": 4588,
        "verbaIndenizatoriaMedia": 3790,
        "gastosGabineteAno": 45480,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17282
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12734
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9096
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6367
          }
        ]
      },
      {
        "id": "5000252-v5",
        "nome": "Camila Campestrini Sanches",
        "nomeUrna": "Camila do Alcinópolis",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 6100,
        "salarioLiquido": 4514,
        "verbaIndenizatoriaMedia": 4280,
        "gastosGabineteAno": 51360,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19517
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14381
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10272
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7190
          }
        ]
      },
      {
        "id": "5000252-v6",
        "nome": "Silvio Souza Alves",
        "nomeUrna": "Silvio do Alcinópolis",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 6500,
        "salarioLiquido": 4810,
        "verbaIndenizatoriaMedia": 4580,
        "gastosGabineteAno": 54960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 20885
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15389
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10992
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7694
          }
        ]
      },
      {
        "id": "5000252-v7",
        "nome": "Marcelo Pereira Ribeiro",
        "nomeUrna": "Marcelo do Alcinópolis",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 6500,
        "salarioLiquido": 4810,
        "verbaIndenizatoriaMedia": 4340,
        "gastosGabineteAno": 52080,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19790
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14582
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10416
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7291
          }
        ]
      },
      {
        "id": "5000252-v8",
        "nome": "Antônio Pereira Costa",
        "nomeUrna": "Antônio Pereira",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 6700,
        "salarioLiquido": 4958,
        "verbaIndenizatoriaMedia": 4010,
        "gastosGabineteAno": 48120,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 18286
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13474
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9624
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6737
          }
        ]
      },
      {
        "id": "5000252-v9",
        "nome": "Marcos Oliveira Sanches",
        "nomeUrna": "Marcos do Alcinópolis",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 6700,
        "salarioLiquido": 4958,
        "verbaIndenizatoriaMedia": 5420,
        "gastosGabineteAno": 65040,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24715
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18211
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13008
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9106
          }
        ]
      }
    ]
  },
  {
    "ibge": 5003256,
    "nome": "Costa Rica",
    "regiao": "Rota Norte",
    "regiaoCor": "#84CC16",
    "populacao": 26037,
    "lat": -18.543,
    "lng": -53.129,
    "prefeito": {
      "nome": "Delegado Cleverson",
      "partido": "PP",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Roni Cota (PSDB)"
    },
    "financas": {
      "dividaAtiva": 32100000,
      "dividaConsolidada": 15400000,
      "dividaPorHabitante": 591,
      "receitaPrevista": 240000000,
      "receitaRealizada": 232873249,
      "despesaExecutada": 232717844,
      "gastoLegislativoTotal": 2207330,
      "gastoLegislativoPorHabitante": 84.78,
      "indiceTransparenciaTCE": 9,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 11,
      "gastoMedioMensalGabinete": 5958,
      "portalUrl": "https://www.cmcostarica.ms.gov.br/",
      "prefeituraUrl": "https://costarica.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/costa-rica/panorama"
    },
    "vereadores": [
      {
        "id": "5003256-v1",
        "nome": "Sandra Ferreira Melo",
        "nomeUrna": "Sandra Ferreira",
        "partido": "MDB",
        "cargo": "Presidente da Câmara",
        "salarioBase": 12900,
        "salarioLiquido": 9546,
        "verbaIndenizatoriaMedia": 5450,
        "gastosGabineteAno": 65400,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24852
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18312
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13080
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9156
          }
        ]
      },
      {
        "id": "5003256-v2",
        "nome": "Silvio Gomes Barbosa",
        "nomeUrna": "Silvio do Costa",
        "partido": "PDT",
        "cargo": "1º Secretário",
        "salarioBase": 9600,
        "salarioLiquido": 7104,
        "verbaIndenizatoriaMedia": 7270,
        "gastosGabineteAno": 87240,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 33151
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 24427
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 17448
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 12214
          }
        ]
      },
      {
        "id": "5003256-v3",
        "nome": "Aline Santos Santos",
        "nomeUrna": "Aline do Costa",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 4850,
        "gastosGabineteAno": 58200,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 22116
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16296
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11640
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8148
          }
        ]
      },
      {
        "id": "5003256-v4",
        "nome": "Fábio Freitas Guedes",
        "nomeUrna": "Fábio do Costa",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 9300,
        "salarioLiquido": 6882,
        "verbaIndenizatoriaMedia": 4380,
        "gastosGabineteAno": 52560,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19973
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14717
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10512
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7358
          }
        ]
      },
      {
        "id": "5003256-v5",
        "nome": "Luciana Miranda Nogueira",
        "nomeUrna": "Luciana do Costa",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 9600,
        "salarioLiquido": 7104,
        "verbaIndenizatoriaMedia": 4950,
        "gastosGabineteAno": 59400,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 22572
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16632
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11880
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8316
          }
        ]
      },
      {
        "id": "5003256-v6",
        "nome": "Cláudio Albuquerque Barros",
        "nomeUrna": "Cláudio do Costa",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 9900,
        "salarioLiquido": 7326,
        "verbaIndenizatoriaMedia": 6050,
        "gastosGabineteAno": 72600,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 27588
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 20328
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14520
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10164
          }
        ]
      },
      {
        "id": "5003256-v7",
        "nome": "Lucas Rocha Barbosa",
        "nomeUrna": "Lucas Rocha",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 5620,
        "gastosGabineteAno": 67440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 25627
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18883
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13488
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9442
          }
        ]
      },
      {
        "id": "5003256-v8",
        "nome": "Cristiane Barros Campestrini",
        "nomeUrna": "Cristiane do Costa",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 9700,
        "salarioLiquido": 7178,
        "verbaIndenizatoriaMedia": 4870,
        "gastosGabineteAno": 58440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 22207
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16363
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11688
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8182
          }
        ]
      },
      {
        "id": "5003256-v9",
        "nome": "João Albuquerque Miranda",
        "nomeUrna": "João do Costa",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 9300,
        "salarioLiquido": 6882,
        "verbaIndenizatoriaMedia": 6400,
        "gastosGabineteAno": 76800,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 29184
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 21504
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 15360
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10752
          }
        ]
      },
      {
        "id": "5003256-v10",
        "nome": "Renata Moreira Miranda",
        "nomeUrna": "Renata do Costa",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 10000,
        "salarioLiquido": 7400,
        "verbaIndenizatoriaMedia": 7580,
        "gastosGabineteAno": 90960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 34565
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 25469
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 18192
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 12734
          }
        ]
      },
      {
        "id": "5003256-v11",
        "nome": "Cláudio Albuquerque Melo",
        "nomeUrna": "Cláudio Albuquerque",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 4940,
        "gastosGabineteAno": 59280,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 22526
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16598
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11856
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8299
          }
        ]
      }
    ]
  },
  {
    "ibge": 5007406,
    "nome": "Rio Verde de Mato Grosso",
    "regiao": "Rota Norte",
    "regiaoCor": "#84CC16",
    "populacao": 19827,
    "lat": -18.918,
    "lng": -54.844,
    "prefeito": {
      "nome": "Réus Fornari",
      "partido": "PP",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Jorge Luiz (Jorginho) (PSDB)"
    },
    "financas": {
      "dividaAtiva": 20300000,
      "dividaConsolidada": 9700000,
      "dividaPorHabitante": 489,
      "receitaPrevista": 142000000,
      "receitaRealizada": 136844313,
      "despesaExecutada": 135725880,
      "gastoLegislativoTotal": 1724510,
      "gastoLegislativoPorHabitante": 86.98,
      "indiceTransparenciaTCE": 7.5,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 11,
      "gastoMedioMensalGabinete": 4405,
      "portalUrl": "https://www.camararioverdedematogrosso.ms.gov.br/",
      "prefeituraUrl": "https://rioverdedematogrosso.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/rio-verde-de-mato-grosso/panorama"
    },
    "vereadores": [
      {
        "id": "5007406-v1",
        "nome": "Edson Rezende Nogueira",
        "nomeUrna": "Edson do Rio",
        "partido": "PP",
        "cargo": "Presidente da Câmara",
        "salarioBase": 10500,
        "salarioLiquido": 7770,
        "verbaIndenizatoriaMedia": 3780,
        "gastosGabineteAno": 45360,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17237
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12701
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9072
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6350
          }
        ]
      },
      {
        "id": "5007406-v2",
        "nome": "Márcio Martins Guedes",
        "nomeUrna": "Márcio do Rio",
        "partido": "MDB",
        "cargo": "1º Secretário",
        "salarioBase": 7600,
        "salarioLiquido": 5624,
        "verbaIndenizatoriaMedia": 3530,
        "gastosGabineteAno": 42360,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 16097
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11861
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8472
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5930
          }
        ]
      },
      {
        "id": "5007406-v3",
        "nome": "Rafael Lima Rezende",
        "nomeUrna": "Rafael do Rio",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 7700,
        "salarioLiquido": 5698,
        "verbaIndenizatoriaMedia": 5150,
        "gastosGabineteAno": 61800,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 23484
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17304
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12360
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8652
          }
        ]
      },
      {
        "id": "5007406-v4",
        "nome": "Edson Santos Silva",
        "nomeUrna": "Edson Santos",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 7600,
        "salarioLiquido": 5624,
        "verbaIndenizatoriaMedia": 3320,
        "gastosGabineteAno": 39840,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15139
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11155
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7968
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5578
          }
        ]
      },
      {
        "id": "5007406-v5",
        "nome": "Rogério Freitas Dias",
        "nomeUrna": "Rogério do Rio",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 7100,
        "salarioLiquido": 5254,
        "verbaIndenizatoriaMedia": 4630,
        "gastosGabineteAno": 55560,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21113
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15557
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11112
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7778
          }
        ]
      },
      {
        "id": "5007406-v6",
        "nome": "Ana Nogueira Ribeiro",
        "nomeUrna": "Ana Nogueira",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 7700,
        "salarioLiquido": 5698,
        "verbaIndenizatoriaMedia": 4690,
        "gastosGabineteAno": 56280,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21386
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15758
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11256
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7879
          }
        ]
      },
      {
        "id": "5007406-v7",
        "nome": "Ana Gomes Guedes",
        "nomeUrna": "Ana do Rio",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 7300,
        "salarioLiquido": 5402,
        "verbaIndenizatoriaMedia": 5160,
        "gastosGabineteAno": 61920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 23530
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17338
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12384
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8669
          }
        ]
      },
      {
        "id": "5007406-v8",
        "nome": "Ana Guedes Miranda",
        "nomeUrna": "Ana Guedes",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 7900,
        "salarioLiquido": 5846,
        "verbaIndenizatoriaMedia": 5190,
        "gastosGabineteAno": 62280,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 23666
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17438
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12456
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8719
          }
        ]
      },
      {
        "id": "5007406-v9",
        "nome": "Paulo Silva Guedes",
        "nomeUrna": "Paulo Silva",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 8000,
        "salarioLiquido": 5920,
        "verbaIndenizatoriaMedia": 4100,
        "gastosGabineteAno": 49200,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 18696
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13776
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9840
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6888
          }
        ]
      },
      {
        "id": "5007406-v10",
        "nome": "Rogério Dias Martins",
        "nomeUrna": "Rogério do Rio",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 7800,
        "salarioLiquido": 5772,
        "verbaIndenizatoriaMedia": 5200,
        "gastosGabineteAno": 62400,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 23712
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17472
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12480
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8736
          }
        ]
      },
      {
        "id": "5007406-v11",
        "nome": "Silvio Santos Costa",
        "nomeUrna": "Silvio do Rio",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 7100,
        "salarioLiquido": 5254,
        "verbaIndenizatoriaMedia": 3310,
        "gastosGabineteAno": 39720,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15094
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11122
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7944
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5561
          }
        ]
      }
    ]
  },
  {
    "ibge": 5003900,
    "nome": "Figueirão",
    "regiao": "Rota Norte",
    "regiaoCor": "#84CC16",
    "populacao": 3539,
    "lat": -18.679,
    "lng": -53.637,
    "prefeito": {
      "nome": "Juvenal Consolaro",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Jorge Roberto (Jorge Enfermeiro) (PSDB)"
    },
    "financas": {
      "dividaAtiva": 4200000,
      "dividaConsolidada": 1900000,
      "dividaPorHabitante": 537,
      "receitaPrevista": 48000000,
      "receitaRealizada": 46587584,
      "despesaExecutada": 44679179,
      "gastoLegislativoTotal": 1414670,
      "gastoLegislativoPorHabitante": 399.74,
      "indiceTransparenciaTCE": 8.7,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 4827,
      "portalUrl": "https://www.camarafigueirao.ms.gov.br/",
      "prefeituraUrl": "https://figueirao.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/figueirao/panorama"
    },
    "vereadores": [
      {
        "id": "5003900-v1",
        "nome": "Fábio Ferreira Sanches",
        "nomeUrna": "Fábio do Figueirão",
        "partido": "PL",
        "cargo": "Presidente da Câmara",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 5850,
        "gastosGabineteAno": 70200,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 26676
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19656
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14040
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9828
          }
        ]
      },
      {
        "id": "5003900-v2",
        "nome": "Carlos Carvalho Dias",
        "nomeUrna": "Carlos do Figueirão",
        "partido": "PP",
        "cargo": "1º Secretário",
        "salarioBase": 6200,
        "salarioLiquido": 4588,
        "verbaIndenizatoriaMedia": 5800,
        "gastosGabineteAno": 69600,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 26448
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19488
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13920
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9744
          }
        ]
      },
      {
        "id": "5003900-v3",
        "nome": "Cristiane Alves Rocha",
        "nomeUrna": "Cristiane do Figueirão",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 6900,
        "salarioLiquido": 5106,
        "verbaIndenizatoriaMedia": 4450,
        "gastosGabineteAno": 53400,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 20292
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14952
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10680
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7476
          }
        ]
      },
      {
        "id": "5003900-v4",
        "nome": "Ana Souza Santos",
        "nomeUrna": "Ana Souza",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 6200,
        "salarioLiquido": 4588,
        "verbaIndenizatoriaMedia": 5970,
        "gastosGabineteAno": 71640,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 27223
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 20059
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14328
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10030
          }
        ]
      },
      {
        "id": "5003900-v5",
        "nome": "Silvio Freitas Araújo",
        "nomeUrna": "Silvio Freitas",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 6500,
        "salarioLiquido": 4810,
        "verbaIndenizatoriaMedia": 3850,
        "gastosGabineteAno": 46200,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17556
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12936
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9240
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6468
          }
        ]
      },
      {
        "id": "5003900-v6",
        "nome": "Sandra Albuquerque Pereira",
        "nomeUrna": "Sandra Albuquerque",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 7000,
        "salarioLiquido": 5180,
        "verbaIndenizatoriaMedia": 4900,
        "gastosGabineteAno": 58800,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 22344
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16464
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11760
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8232
          }
        ]
      },
      {
        "id": "5003900-v7",
        "nome": "Fábio Ribeiro Dias",
        "nomeUrna": "Fábio do Figueirão",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 7000,
        "salarioLiquido": 5180,
        "verbaIndenizatoriaMedia": 5310,
        "gastosGabineteAno": 63720,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24214
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17842
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12744
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8921
          }
        ]
      },
      {
        "id": "5003900-v8",
        "nome": "Sandra Pereira Araújo",
        "nomeUrna": "Sandra do Figueirão",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 6900,
        "salarioLiquido": 5106,
        "verbaIndenizatoriaMedia": 6220,
        "gastosGabineteAno": 74640,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 28363
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 20899
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14928
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10450
          }
        ]
      },
      {
        "id": "5003900-v9",
        "nome": "Marcelo Pereira Barbosa",
        "nomeUrna": "Marcelo do Figueirão",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 7000,
        "salarioLiquido": 5180,
        "verbaIndenizatoriaMedia": 5160,
        "gastosGabineteAno": 61920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 23530
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17338
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12384
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8669
          }
        ]
      }
    ]
  },
  {
    "ibge": 5007695,
    "nome": "São Gabriel do Oeste",
    "regiao": "Rota Norte",
    "regiaoCor": "#84CC16",
    "populacao": 29579,
    "lat": -19.394,
    "lng": -54.572,
    "prefeito": {
      "nome": "Leocir Montagna",
      "partido": "PSD",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Rogério Rohr (PSD)"
    },
    "financas": {
      "dividaAtiva": 29500000,
      "dividaConsolidada": 14100000,
      "dividaPorHabitante": 477,
      "receitaPrevista": 220000000,
      "receitaRealizada": 220949608,
      "despesaExecutada": 202611623,
      "gastoLegislativoTotal": 2367250,
      "gastoLegislativoPorHabitante": 80.03,
      "indiceTransparenciaTCE": 9.4,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 11,
      "gastoMedioMensalGabinete": 6448,
      "portalUrl": "https://camarasgo.ms.gov.br/",
      "prefeituraUrl": "https://saogabriel.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/sao-gabriel-do-oeste/panorama"
    },
    "vereadores": [
      {
        "id": "5007695-v1",
        "nome": "Cláudio Rezende Silva",
        "nomeUrna": "Cláudio Rezende",
        "partido": "MDB",
        "cargo": "Presidente da Câmara",
        "salarioBase": 13200,
        "salarioLiquido": 9768,
        "verbaIndenizatoriaMedia": 4990,
        "gastosGabineteAno": 59880,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 22754
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16766
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11976
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8383
          }
        ]
      },
      {
        "id": "5007695-v2",
        "nome": "Carlos Ferreira Pacheco",
        "nomeUrna": "Carlos do São",
        "partido": "MDB",
        "cargo": "1º Secretário",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 5740,
        "gastosGabineteAno": 68880,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 26174
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19286
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13776
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9643
          }
        ]
      },
      {
        "id": "5007695-v3",
        "nome": "Sandra Silva Miranda",
        "nomeUrna": "Sandra do São",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 9600,
        "salarioLiquido": 7104,
        "verbaIndenizatoriaMedia": 8130,
        "gastosGabineteAno": 97560,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 37073
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 27317
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 19512
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 13658
          }
        ]
      },
      {
        "id": "5007695-v4",
        "nome": "Renata Santos Martins",
        "nomeUrna": "Renata do São",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 9600,
        "salarioLiquido": 7104,
        "verbaIndenizatoriaMedia": 4820,
        "gastosGabineteAno": 57840,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21979
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16195
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11568
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8098
          }
        ]
      },
      {
        "id": "5007695-v5",
        "nome": "José Ribeiro Freitas",
        "nomeUrna": "José do São",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 10300,
        "salarioLiquido": 7622,
        "verbaIndenizatoriaMedia": 6380,
        "gastosGabineteAno": 76560,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 29093
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 21437
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 15312
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10718
          }
        ]
      },
      {
        "id": "5007695-v6",
        "nome": "Cláudio Barbosa Ribeiro",
        "nomeUrna": "Cláudio Barbosa",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 10300,
        "salarioLiquido": 7622,
        "verbaIndenizatoriaMedia": 6100,
        "gastosGabineteAno": 73200,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 27816
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 20496
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14640
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10248
          }
        ]
      },
      {
        "id": "5007695-v7",
        "nome": "Camila Pacheco Sanches",
        "nomeUrna": "Camila Pacheco",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 9700,
        "salarioLiquido": 7178,
        "verbaIndenizatoriaMedia": 6090,
        "gastosGabineteAno": 73080,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 27770
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 20462
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14616
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10231
          }
        ]
      },
      {
        "id": "5007695-v8",
        "nome": "Márcio Pacheco Pereira",
        "nomeUrna": "Márcio Pacheco",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 10000,
        "salarioLiquido": 7400,
        "verbaIndenizatoriaMedia": 8220,
        "gastosGabineteAno": 98640,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 37483
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 27619
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 19728
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 13810
          }
        ]
      },
      {
        "id": "5007695-v9",
        "nome": "Marcelo Lima Oliveira",
        "nomeUrna": "Marcelo do São",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 10000,
        "salarioLiquido": 7400,
        "verbaIndenizatoriaMedia": 8270,
        "gastosGabineteAno": 99240,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 37711
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 27787
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 19848
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 13894
          }
        ]
      },
      {
        "id": "5007695-v10",
        "nome": "Edson Santos Freitas",
        "nomeUrna": "Edson do São",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 10300,
        "salarioLiquido": 7622,
        "verbaIndenizatoriaMedia": 8210,
        "gastosGabineteAno": 98520,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 37438
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 27586
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 19704
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 13793
          }
        ]
      },
      {
        "id": "5007695-v11",
        "nome": "Maria Freitas Silva",
        "nomeUrna": "Maria do São",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 10100,
        "salarioLiquido": 7474,
        "verbaIndenizatoriaMedia": 5190,
        "gastosGabineteAno": 62280,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 23666
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17438
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12456
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8719
          }
        ]
      }
    ]
  },
  {
    "ibge": 5002605,
    "nome": "Camapuã",
    "regiao": "Rota Norte",
    "regiaoCor": "#84CC16",
    "populacao": 13583,
    "lat": -19.531,
    "lng": -54.043,
    "prefeito": {
      "nome": "Manoel Nery",
      "partido": "PP",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Aloizio Targino (PSDB)"
    },
    "financas": {
      "dividaAtiva": 14200000,
      "dividaConsolidada": 6700000,
      "dividaPorHabitante": 493,
      "receitaPrevista": 95000000,
      "receitaRealizada": 91787198,
      "despesaExecutada": 87932533,
      "gastoLegislativoTotal": 1262470,
      "gastoLegislativoPorHabitante": 92.94,
      "indiceTransparenciaTCE": 9.5,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 3215,
      "portalUrl": "https://www.camaracamapua.ms.gov.br/",
      "prefeituraUrl": "https://camapua.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/camapua/panorama"
    },
    "vereadores": [
      {
        "id": "5002605-v1",
        "nome": "Cláudio Oliveira Pacheco",
        "nomeUrna": "Cláudio Oliveira",
        "partido": "PT",
        "cargo": "Presidente da Câmara",
        "salarioBase": 10700,
        "salarioLiquido": 7918,
        "verbaIndenizatoriaMedia": 3220,
        "gastosGabineteAno": 38640,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 14683
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10819
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7728
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5410
          }
        ]
      },
      {
        "id": "5002605-v2",
        "nome": "Roberto Barbosa Ribeiro",
        "nomeUrna": "Roberto do Camapuã",
        "partido": "MDB",
        "cargo": "1º Secretário",
        "salarioBase": 7200,
        "salarioLiquido": 5328,
        "verbaIndenizatoriaMedia": 2430,
        "gastosGabineteAno": 29160,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 11081
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 8165
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5832
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4082
          }
        ]
      },
      {
        "id": "5002605-v3",
        "nome": "Márcio Rocha Pacheco",
        "nomeUrna": "Márcio do Camapuã",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 7900,
        "salarioLiquido": 5846,
        "verbaIndenizatoriaMedia": 2560,
        "gastosGabineteAno": 30720,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 11674
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 8602
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6144
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4301
          }
        ]
      },
      {
        "id": "5002605-v4",
        "nome": "Cristiane Miranda Alves",
        "nomeUrna": "Cristiane do Camapuã",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 7500,
        "salarioLiquido": 5550,
        "verbaIndenizatoriaMedia": 2700,
        "gastosGabineteAno": 32400,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 12312
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 9072
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6480
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4536
          }
        ]
      },
      {
        "id": "5002605-v5",
        "nome": "Edson Miranda Souza",
        "nomeUrna": "Edson Miranda",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 7700,
        "salarioLiquido": 5698,
        "verbaIndenizatoriaMedia": 3760,
        "gastosGabineteAno": 45120,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17146
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12634
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9024
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6317
          }
        ]
      },
      {
        "id": "5002605-v6",
        "nome": "Rafael Nogueira Lima",
        "nomeUrna": "Rafael Nogueira",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 7900,
        "salarioLiquido": 5846,
        "verbaIndenizatoriaMedia": 3500,
        "gastosGabineteAno": 42000,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15960
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11760
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8400
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5880
          }
        ]
      },
      {
        "id": "5002605-v7",
        "nome": "Eduardo Araújo Dias",
        "nomeUrna": "Eduardo Araújo",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 7100,
        "salarioLiquido": 5254,
        "verbaIndenizatoriaMedia": 2250,
        "gastosGabineteAno": 27000,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 10260
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 7560
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5400
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3780
          }
        ]
      },
      {
        "id": "5002605-v8",
        "nome": "Marcos Costa Souza",
        "nomeUrna": "Marcos Costa",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 7300,
        "salarioLiquido": 5402,
        "verbaIndenizatoriaMedia": 3420,
        "gastosGabineteAno": 41040,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15595
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11491
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8208
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5746
          }
        ]
      },
      {
        "id": "5002605-v9",
        "nome": "Luciana Freitas Albuquerque",
        "nomeUrna": "Luciana Freitas",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 7000,
        "salarioLiquido": 5180,
        "verbaIndenizatoriaMedia": 3450,
        "gastosGabineteAno": 41400,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15732
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11592
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8280
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5796
          }
        ]
      }
    ]
  },
  {
    "ibge": 5006275,
    "nome": "Paraíso das Águas",
    "regiao": "Rota Norte",
    "regiaoCor": "#84CC16",
    "populacao": 5510,
    "lat": -19.016,
    "lng": -53.012,
    "prefeito": {
      "nome": "Ivan da Cruz",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Roberto Carlos da Silva (PP)"
    },
    "financas": {
      "dividaAtiva": 6900000,
      "dividaConsolidada": 3100000,
      "dividaPorHabitante": 563,
      "receitaPrevista": 65000000,
      "receitaRealizada": 61764904,
      "despesaExecutada": 62227834,
      "gastoLegislativoTotal": 1245310,
      "gastoLegislativoPorHabitante": 226.01,
      "indiceTransparenciaTCE": 8.2,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 4352,
      "portalUrl": "https://www.camaraparaisodasaguas.ms.gov.br/",
      "prefeituraUrl": "https://paraisodasaguas.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/paraiso-das-aguas/panorama"
    },
    "vereadores": [
      {
        "id": "5006275-v1",
        "nome": "Rogério Pacheco Oliveira",
        "nomeUrna": "Rogério Pacheco",
        "partido": "REPUBLICANOS",
        "cargo": "Presidente da Câmara",
        "salarioBase": 9700,
        "salarioLiquido": 7178,
        "verbaIndenizatoriaMedia": 3860,
        "gastosGabineteAno": 46320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17602
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12970
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9264
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6485
          }
        ]
      },
      {
        "id": "5006275-v2",
        "nome": "Rogério Melo Freitas",
        "nomeUrna": "Rogério do Paraíso",
        "partido": "PDT",
        "cargo": "1º Secretário",
        "salarioBase": 6700,
        "salarioLiquido": 4958,
        "verbaIndenizatoriaMedia": 3260,
        "gastosGabineteAno": 39120,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 14866
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10954
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7824
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5477
          }
        ]
      },
      {
        "id": "5006275-v3",
        "nome": "Márcio Sanches Santos",
        "nomeUrna": "Márcio do Paraíso",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 6300,
        "salarioLiquido": 4662,
        "verbaIndenizatoriaMedia": 5390,
        "gastosGabineteAno": 64680,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24578
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18110
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12936
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9055
          }
        ]
      },
      {
        "id": "5006275-v4",
        "nome": "Juliana Barros Alves",
        "nomeUrna": "Juliana do Paraíso",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 6600,
        "salarioLiquido": 4884,
        "verbaIndenizatoriaMedia": 3720,
        "gastosGabineteAno": 44640,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 16963
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12499
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8928
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6250
          }
        ]
      },
      {
        "id": "5006275-v5",
        "nome": "Camila Nogueira Martins",
        "nomeUrna": "Camila do Paraíso",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 6500,
        "salarioLiquido": 4810,
        "verbaIndenizatoriaMedia": 3790,
        "gastosGabineteAno": 45480,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17282
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12734
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9096
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6367
          }
        ]
      },
      {
        "id": "5006275-v6",
        "nome": "Eduardo Nogueira Barbosa",
        "nomeUrna": "Eduardo Nogueira",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 6900,
        "salarioLiquido": 5106,
        "verbaIndenizatoriaMedia": 4150,
        "gastosGabineteAno": 49800,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 18924
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13944
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9960
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6972
          }
        ]
      },
      {
        "id": "5006275-v7",
        "nome": "Juliana Guedes Guedes",
        "nomeUrna": "Juliana do Paraíso",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 6200,
        "salarioLiquido": 4588,
        "verbaIndenizatoriaMedia": 3350,
        "gastosGabineteAno": 40200,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15276
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11256
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8040
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5628
          }
        ]
      },
      {
        "id": "5006275-v8",
        "nome": "João Santos Moreira",
        "nomeUrna": "João do Paraíso",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 6100,
        "salarioLiquido": 4514,
        "verbaIndenizatoriaMedia": 4370,
        "gastosGabineteAno": 52440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19927
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14683
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10488
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7342
          }
        ]
      },
      {
        "id": "5006275-v9",
        "nome": "Maria Alves Freitas",
        "nomeUrna": "Maria do Paraíso",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 6900,
        "salarioLiquido": 5106,
        "verbaIndenizatoriaMedia": 3280,
        "gastosGabineteAno": 39360,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 14957
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11021
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7872
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5510
          }
        ]
      }
    ]
  },
  {
    "ibge": 5001508,
    "nome": "Bandeirantes",
    "regiao": "Rota Norte",
    "regiaoCor": "#84CC16",
    "populacao": 7254,
    "lat": -19.919,
    "lng": -54.364,
    "prefeito": {
      "nome": "Gustavo Sprotte",
      "partido": "PP",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Marinho Serpa (PL)"
    },
    "financas": {
      "dividaAtiva": 7900000,
      "dividaConsolidada": 3400000,
      "dividaPorHabitante": 469,
      "receitaPrevista": 68000000,
      "receitaRealizada": 68397187,
      "despesaExecutada": 63383390,
      "gastoLegislativoTotal": 1116300,
      "gastoLegislativoPorHabitante": 153.89,
      "indiceTransparenciaTCE": 7.8,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 2942,
      "portalUrl": "https://www.camarabandeirantes.ms.gov.br/",
      "prefeituraUrl": "https://bandeirantes.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/bandeirantes/panorama"
    },
    "vereadores": [
      {
        "id": "5001508-v1",
        "nome": "Cristiane Nogueira Rocha",
        "nomeUrna": "Cristiane Nogueira",
        "partido": "PDT",
        "cargo": "Presidente da Câmara",
        "salarioBase": 9400,
        "salarioLiquido": 6956,
        "verbaIndenizatoriaMedia": 3700,
        "gastosGabineteAno": 44400,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 16872
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12432
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8880
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6216
          }
        ]
      },
      {
        "id": "5001508-v2",
        "nome": "João Rezende Pacheco",
        "nomeUrna": "João do Bandeirantes",
        "partido": "UNIÃO",
        "cargo": "1º Secretário",
        "salarioBase": 6200,
        "salarioLiquido": 4588,
        "verbaIndenizatoriaMedia": 2070,
        "gastosGabineteAno": 24840,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 9439
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 6955
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 4968
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3478
          }
        ]
      },
      {
        "id": "5001508-v3",
        "nome": "Luiz Barros Campestrini",
        "nomeUrna": "Luiz do Bandeirantes",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 6300,
        "salarioLiquido": 4662,
        "verbaIndenizatoriaMedia": 2290,
        "gastosGabineteAno": 27480,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 10442
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 7694
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5496
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3847
          }
        ]
      },
      {
        "id": "5001508-v4",
        "nome": "Edson Ribeiro Melo",
        "nomeUrna": "Edson do Bandeirantes",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 6100,
        "salarioLiquido": 4514,
        "verbaIndenizatoriaMedia": 3740,
        "gastosGabineteAno": 44880,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17054
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12566
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8976
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6283
          }
        ]
      },
      {
        "id": "5001508-v5",
        "nome": "Fábio Ribeiro Souza",
        "nomeUrna": "Fábio do Bandeirantes",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 6300,
        "salarioLiquido": 4662,
        "verbaIndenizatoriaMedia": 2710,
        "gastosGabineteAno": 32520,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 12358
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 9106
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6504
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4553
          }
        ]
      },
      {
        "id": "5001508-v6",
        "nome": "Sandra Ferreira Ferreira",
        "nomeUrna": "Sandra do Bandeirantes",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 6500,
        "salarioLiquido": 4810,
        "verbaIndenizatoriaMedia": 2950,
        "gastosGabineteAno": 35400,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 13452
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 9912
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7080
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4956
          }
        ]
      },
      {
        "id": "5001508-v7",
        "nome": "Márcio Sanches Pereira",
        "nomeUrna": "Márcio Sanches",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 6000,
        "salarioLiquido": 4440,
        "verbaIndenizatoriaMedia": 2070,
        "gastosGabineteAno": 24840,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 9439
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 6955
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 4968
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3478
          }
        ]
      },
      {
        "id": "5001508-v8",
        "nome": "Márcio Rocha Alves",
        "nomeUrna": "Márcio Rocha",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 7000,
        "salarioLiquido": 5180,
        "verbaIndenizatoriaMedia": 2700,
        "gastosGabineteAno": 32400,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 12312
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 9072
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6480
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4536
          }
        ]
      },
      {
        "id": "5001508-v9",
        "nome": "Cristiane Dias Nogueira",
        "nomeUrna": "Cristiane do Bandeirantes",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 6800,
        "salarioLiquido": 5032,
        "verbaIndenizatoriaMedia": 3630,
        "gastosGabineteAno": 43560,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 16553
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12197
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8712
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6098
          }
        ]
      }
    ]
  },
  {
    "ibge": 5002951,
    "nome": "Chapadão do Sul",
    "regiao": "Vale do Aporé",
    "regiaoCor": "#C084FC",
    "populacao": 30993,
    "lat": -18.793,
    "lng": -52.619,
    "prefeito": {
      "nome": "Walter Schlatter",
      "partido": "PP",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Ernany Machado (Defensor Ernany) (PL)"
    },
    "financas": {
      "dividaAtiva": 38600000,
      "dividaConsolidada": 18200000,
      "dividaPorHabitante": 587,
      "receitaPrevista": 265000000,
      "receitaRealizada": 257911727,
      "despesaExecutada": 247232414,
      "gastoLegislativoTotal": 2169280,
      "gastoLegislativoPorHabitante": 69.99,
      "indiceTransparenciaTCE": 9.6,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 11,
      "gastoMedioMensalGabinete": 4911,
      "portalUrl": "https://www.camarachapadaodosul.ms.gov.br/",
      "prefeituraUrl": "https://chapadaodosul.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/chapadao-do-sul/panorama"
    },
    "vereadores": [
      {
        "id": "5002951-v1",
        "nome": "Edson Carvalho Araújo",
        "nomeUrna": "Edson Carvalho",
        "partido": "PT",
        "cargo": "Presidente da Câmara",
        "salarioBase": 13300,
        "salarioLiquido": 9842,
        "verbaIndenizatoriaMedia": 3580,
        "gastosGabineteAno": 42960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 16325
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12029
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8592
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6014
          }
        ]
      },
      {
        "id": "5002951-v2",
        "nome": "Marcelo Guedes Guedes",
        "nomeUrna": "Marcelo Guedes",
        "partido": "PSDB",
        "cargo": "1º Secretário",
        "salarioBase": 10000,
        "salarioLiquido": 7400,
        "verbaIndenizatoriaMedia": 4210,
        "gastosGabineteAno": 50520,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19198
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14146
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10104
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7073
          }
        ]
      },
      {
        "id": "5002951-v3",
        "nome": "Edson Campestrini Guedes",
        "nomeUrna": "Edson do Chapadão",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 9600,
        "salarioLiquido": 7104,
        "verbaIndenizatoriaMedia": 5350,
        "gastosGabineteAno": 64200,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24396
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17976
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12840
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8988
          }
        ]
      },
      {
        "id": "5002951-v4",
        "nome": "Marcos Ferreira Freitas",
        "nomeUrna": "Marcos Ferreira",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 10200,
        "salarioLiquido": 7548,
        "verbaIndenizatoriaMedia": 4050,
        "gastosGabineteAno": 48600,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 18468
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13608
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9720
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6804
          }
        ]
      },
      {
        "id": "5002951-v5",
        "nome": "Márcio Silva Silva",
        "nomeUrna": "Márcio do Chapadão",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 5670,
        "gastosGabineteAno": 68040,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 25855
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19051
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13608
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9526
          }
        ]
      },
      {
        "id": "5002951-v6",
        "nome": "Luciana Rezende Araújo",
        "nomeUrna": "Luciana do Chapadão",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 9400,
        "salarioLiquido": 6956,
        "verbaIndenizatoriaMedia": 5800,
        "gastosGabineteAno": 69600,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 26448
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19488
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13920
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9744
          }
        ]
      },
      {
        "id": "5002951-v7",
        "nome": "Cláudio Barros Melo",
        "nomeUrna": "Cláudio Barros",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 10300,
        "salarioLiquido": 7622,
        "verbaIndenizatoriaMedia": 6330,
        "gastosGabineteAno": 75960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 28865
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 21269
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 15192
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10634
          }
        ]
      },
      {
        "id": "5002951-v8",
        "nome": "Juliana Santos Ferreira",
        "nomeUrna": "Juliana do Chapadão",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 5930,
        "gastosGabineteAno": 71160,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 27041
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19925
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14232
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9962
          }
        ]
      },
      {
        "id": "5002951-v9",
        "nome": "Silvio Campestrini Barros",
        "nomeUrna": "Silvio do Chapadão",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 10200,
        "salarioLiquido": 7548,
        "verbaIndenizatoriaMedia": 5860,
        "gastosGabineteAno": 70320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 26722
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19690
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14064
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9845
          }
        ]
      },
      {
        "id": "5002951-v10",
        "nome": "Cláudio Martins Melo",
        "nomeUrna": "Cláudio do Chapadão",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 10000,
        "salarioLiquido": 7400,
        "verbaIndenizatoriaMedia": 4440,
        "gastosGabineteAno": 53280,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 20246
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14918
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10656
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7459
          }
        ]
      },
      {
        "id": "5002951-v11",
        "nome": "Cristiane Costa Lima",
        "nomeUrna": "Cristiane do Chapadão",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 10000,
        "salarioLiquido": 7400,
        "verbaIndenizatoriaMedia": 5420,
        "gastosGabineteAno": 65040,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24715
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18211
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13008
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9106
          }
        ]
      }
    ]
  },
  {
    "ibge": 5002902,
    "nome": "Cassilândia",
    "regiao": "Vale do Aporé",
    "regiaoCor": "#C084FC",
    "populacao": 20988,
    "lat": -19.113,
    "lng": -51.734,
    "prefeito": {
      "nome": "Valdecy Costa",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Sumara Leal (PP)"
    },
    "financas": {
      "dividaAtiva": 22400000,
      "dividaConsolidada": 10300000,
      "dividaPorHabitante": 491,
      "receitaPrevista": 145000000,
      "receitaRealizada": 137808603,
      "despesaExecutada": 133659533,
      "gastoLegislativoTotal": 2182490,
      "gastoLegislativoPorHabitante": 103.99,
      "indiceTransparenciaTCE": 8.6,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 11,
      "gastoMedioMensalGabinete": 5257,
      "portalUrl": "https://www.camaracassilandia.ms.gov.br/",
      "prefeituraUrl": "https://cassilandia.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/cassilandia/panorama"
    },
    "vereadores": [
      {
        "id": "5002902-v1",
        "nome": "Sandra Ribeiro Lima",
        "nomeUrna": "Sandra do Cassilândia",
        "partido": "PODE",
        "cargo": "Presidente da Câmara",
        "salarioBase": 13200,
        "salarioLiquido": 9768,
        "verbaIndenizatoriaMedia": 5240,
        "gastosGabineteAno": 62880,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 23894
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17606
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12576
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8803
          }
        ]
      },
      {
        "id": "5002902-v2",
        "nome": "Rogério Carvalho Pereira",
        "nomeUrna": "Rogério Carvalho",
        "partido": "REPUBLICANOS",
        "cargo": "1º Secretário",
        "salarioBase": 9600,
        "salarioLiquido": 7104,
        "verbaIndenizatoriaMedia": 6800,
        "gastosGabineteAno": 81600,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 31008
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 22848
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 16320
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 11424
          }
        ]
      },
      {
        "id": "5002902-v3",
        "nome": "Eduardo Rezende Alves",
        "nomeUrna": "Eduardo do Cassilândia",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 10100,
        "salarioLiquido": 7474,
        "verbaIndenizatoriaMedia": 4170,
        "gastosGabineteAno": 50040,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19015
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14011
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10008
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7006
          }
        ]
      },
      {
        "id": "5002902-v4",
        "nome": "Marcos Oliveira Barbosa",
        "nomeUrna": "Marcos do Cassilândia",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 10000,
        "salarioLiquido": 7400,
        "verbaIndenizatoriaMedia": 6740,
        "gastosGabineteAno": 80880,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 30734
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 22646
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 16176
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 11323
          }
        ]
      },
      {
        "id": "5002902-v5",
        "nome": "Renata Martins Freitas",
        "nomeUrna": "Renata do Cassilândia",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 5080,
        "gastosGabineteAno": 60960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 23165
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17069
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12192
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8534
          }
        ]
      },
      {
        "id": "5002902-v6",
        "nome": "Cláudio Carvalho Campestrini",
        "nomeUrna": "Cláudio do Cassilândia",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 6320,
        "gastosGabineteAno": 75840,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 28819
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 21235
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 15168
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10618
          }
        ]
      },
      {
        "id": "5002902-v7",
        "nome": "Ana Nogueira Campestrini",
        "nomeUrna": "Ana Nogueira",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 4870,
        "gastosGabineteAno": 58440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 22207
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16363
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11688
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8182
          }
        ]
      },
      {
        "id": "5002902-v8",
        "nome": "Edson Carvalho Araújo",
        "nomeUrna": "Edson Carvalho",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 10300,
        "salarioLiquido": 7622,
        "verbaIndenizatoriaMedia": 3830,
        "gastosGabineteAno": 45960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17465
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12869
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9192
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6434
          }
        ]
      },
      {
        "id": "5002902-v9",
        "nome": "Marcelo Guedes Guedes",
        "nomeUrna": "Marcelo Guedes",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 10000,
        "salarioLiquido": 7400,
        "verbaIndenizatoriaMedia": 4510,
        "gastosGabineteAno": 54120,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 20566
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15154
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10824
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7577
          }
        ]
      },
      {
        "id": "5002902-v10",
        "nome": "Edson Campestrini Guedes",
        "nomeUrna": "Edson do Cassilândia",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 9600,
        "salarioLiquido": 7104,
        "verbaIndenizatoriaMedia": 5730,
        "gastosGabineteAno": 68760,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 26129
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19253
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13752
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9626
          }
        ]
      },
      {
        "id": "5002902-v11",
        "nome": "Marcos Ferreira Freitas",
        "nomeUrna": "Marcos Ferreira",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 10200,
        "salarioLiquido": 7548,
        "verbaIndenizatoriaMedia": 4340,
        "gastosGabineteAno": 52080,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19790
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14582
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10416
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7291
          }
        ]
      }
    ]
  },
  {
    "ibge": 5004403,
    "nome": "Inocência",
    "regiao": "Vale do Aporé",
    "regiaoCor": "#C084FC",
    "populacao": 8404,
    "lat": -19.728,
    "lng": -51.931,
    "prefeito": {
      "nome": "Toninho da Cofapi",
      "partido": "PP",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Henrique Cesar (PSDB)"
    },
    "financas": {
      "dividaAtiva": 14800000,
      "dividaConsolidada": 6800000,
      "dividaPorHabitante": 809,
      "receitaPrevista": 115000000,
      "receitaRealizada": 117758498,
      "despesaExecutada": 106750221,
      "gastoLegislativoTotal": 1244440,
      "gastoLegislativoPorHabitante": 148.08,
      "indiceTransparenciaTCE": 9.7,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 3778,
      "portalUrl": "https://www.camarainocencia.ms.gov.br/",
      "prefeituraUrl": "https://inocencia.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/inocencia/panorama"
    },
    "vereadores": [
      {
        "id": "5004403-v1",
        "nome": "Luciana Melo Guedes",
        "nomeUrna": "Luciana do Inocência",
        "partido": "UNIÃO",
        "cargo": "Presidente da Câmara",
        "salarioBase": 9300,
        "salarioLiquido": 6882,
        "verbaIndenizatoriaMedia": 4360,
        "gastosGabineteAno": 52320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19882
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14650
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10464
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7325
          }
        ]
      },
      {
        "id": "5004403-v2",
        "nome": "Cristiane Souza Guedes",
        "nomeUrna": "Cristiane do Inocência",
        "partido": "PSDB",
        "cargo": "1º Secretário",
        "salarioBase": 6300,
        "salarioLiquido": 4662,
        "verbaIndenizatoriaMedia": 4350,
        "gastosGabineteAno": 52200,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19836
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14616
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10440
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7308
          }
        ]
      },
      {
        "id": "5004403-v3",
        "nome": "Rogério Ferreira Melo",
        "nomeUrna": "Rogério Ferreira",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 6500,
        "salarioLiquido": 4810,
        "verbaIndenizatoriaMedia": 3160,
        "gastosGabineteAno": 37920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 14410
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10618
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7584
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5309
          }
        ]
      },
      {
        "id": "5004403-v4",
        "nome": "Camila Barros Melo",
        "nomeUrna": "Camila do Inocência",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 6200,
        "salarioLiquido": 4588,
        "verbaIndenizatoriaMedia": 4560,
        "gastosGabineteAno": 54720,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 20794
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15322
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10944
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7661
          }
        ]
      },
      {
        "id": "5004403-v5",
        "nome": "Paulo Guedes Nogueira",
        "nomeUrna": "Paulo Guedes",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 6400,
        "salarioLiquido": 4736,
        "verbaIndenizatoriaMedia": 4360,
        "gastosGabineteAno": 52320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19882
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14650
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10464
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7325
          }
        ]
      },
      {
        "id": "5004403-v6",
        "nome": "Ana Miranda Pereira",
        "nomeUrna": "Ana Miranda",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 6700,
        "salarioLiquido": 4958,
        "verbaIndenizatoriaMedia": 4030,
        "gastosGabineteAno": 48360,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 18377
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13541
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9672
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6770
          }
        ]
      },
      {
        "id": "5004403-v7",
        "nome": "Luiz Costa Pacheco",
        "nomeUrna": "Luiz Costa",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 6100,
        "salarioLiquido": 4514,
        "verbaIndenizatoriaMedia": 3410,
        "gastosGabineteAno": 40920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15550
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11458
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8184
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5729
          }
        ]
      },
      {
        "id": "5004403-v8",
        "nome": "Maria Araújo Souza",
        "nomeUrna": "Maria do Inocência",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 6300,
        "salarioLiquido": 4662,
        "verbaIndenizatoriaMedia": 4030,
        "gastosGabineteAno": 48360,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 18377
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13541
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9672
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6770
          }
        ]
      },
      {
        "id": "5004403-v9",
        "nome": "Roberto Rocha Alves",
        "nomeUrna": "Roberto do Inocência",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 6600,
        "salarioLiquido": 4884,
        "verbaIndenizatoriaMedia": 4500,
        "gastosGabineteAno": 54000,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 20520
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15120
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10800
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7560
          }
        ]
      }
    ]
  },
  {
    "ibge": 5006309,
    "nome": "Paranaíba",
    "regiao": "Vale do Aporé",
    "regiaoCor": "#C084FC",
    "populacao": 40592,
    "lat": -19.677,
    "lng": -51.19,
    "prefeito": {
      "nome": "Maycol Queiroz",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "José Barbosa (Barbosinha) (PP)"
    },
    "financas": {
      "dividaAtiva": 39500000,
      "dividaConsolidada": 19300000,
      "dividaPorHabitante": 475,
      "receitaPrevista": 250000000,
      "receitaRealizada": 256594689,
      "despesaExecutada": 242602479,
      "gastoLegislativoTotal": 2614310,
      "gastoLegislativoPorHabitante": 64.4,
      "indiceTransparenciaTCE": 9.2,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 13,
      "gastoMedioMensalGabinete": 5223,
      "portalUrl": "https://www.camaraparanaiba.ms.gov.br/",
      "prefeituraUrl": "https://paranaiba.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/paranaiba/panorama"
    },
    "vereadores": [
      {
        "id": "5006309-v1",
        "nome": "Luiz Moreira Nogueira",
        "nomeUrna": "Luiz do Paranaíba",
        "partido": "PSDB",
        "cargo": "Presidente da Câmara",
        "salarioBase": 13000,
        "salarioLiquido": 9620,
        "verbaIndenizatoriaMedia": 6360,
        "gastosGabineteAno": 76320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 29002
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 21370
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 15264
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10685
          }
        ]
      },
      {
        "id": "5006309-v2",
        "nome": "Márcio Miranda Guedes",
        "nomeUrna": "Márcio do Paranaíba",
        "partido": "PSD",
        "cargo": "1º Secretário",
        "salarioBase": 9900,
        "salarioLiquido": 7326,
        "verbaIndenizatoriaMedia": 4380,
        "gastosGabineteAno": 52560,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19973
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14717
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10512
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7358
          }
        ]
      },
      {
        "id": "5006309-v3",
        "nome": "Antônio Ribeiro Santos",
        "nomeUrna": "Antônio do Paranaíba",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 9900,
        "salarioLiquido": 7326,
        "verbaIndenizatoriaMedia": 4000,
        "gastosGabineteAno": 48000,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 18240
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13440
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9600
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6720
          }
        ]
      },
      {
        "id": "5006309-v4",
        "nome": "Rogério Freitas Alves",
        "nomeUrna": "Rogério do Paranaíba",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 9600,
        "salarioLiquido": 7104,
        "verbaIndenizatoriaMedia": 6540,
        "gastosGabineteAno": 78480,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 29822
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 21974
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 15696
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10987
          }
        ]
      },
      {
        "id": "5006309-v5",
        "nome": "José Carvalho Silva",
        "nomeUrna": "José do Paranaíba",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 6480,
        "gastosGabineteAno": 77760,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 29549
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 21773
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 15552
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10886
          }
        ]
      },
      {
        "id": "5006309-v6",
        "nome": "José Miranda Nogueira",
        "nomeUrna": "José do Paranaíba",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 6760,
        "gastosGabineteAno": 81120,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 30826
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 22714
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 16224
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 11357
          }
        ]
      },
      {
        "id": "5006309-v7",
        "nome": "Patrícia Alves Lima",
        "nomeUrna": "Patrícia Alves",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 9700,
        "salarioLiquido": 7178,
        "verbaIndenizatoriaMedia": 6530,
        "gastosGabineteAno": 78360,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 29777
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 21941
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 15672
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10970
          }
        ]
      },
      {
        "id": "5006309-v8",
        "nome": "Rafael Ribeiro Costa",
        "nomeUrna": "Rafael Ribeiro",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 10000,
        "salarioLiquido": 7400,
        "verbaIndenizatoriaMedia": 3790,
        "gastosGabineteAno": 45480,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17282
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12734
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9096
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6367
          }
        ]
      },
      {
        "id": "5006309-v9",
        "nome": "José Gomes Ferreira",
        "nomeUrna": "José do Paranaíba",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 10000,
        "salarioLiquido": 7400,
        "verbaIndenizatoriaMedia": 6390,
        "gastosGabineteAno": 76680,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 29138
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 21470
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 15336
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10735
          }
        ]
      },
      {
        "id": "5006309-v10",
        "nome": "Roberto Freitas Martins",
        "nomeUrna": "Roberto Freitas",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 10200,
        "salarioLiquido": 7548,
        "verbaIndenizatoriaMedia": 6310,
        "gastosGabineteAno": 75720,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 28774
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 21202
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 15144
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10601
          }
        ]
      },
      {
        "id": "5006309-v11",
        "nome": "Edson Sanches Souza",
        "nomeUrna": "Edson Sanches",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 10200,
        "salarioLiquido": 7548,
        "verbaIndenizatoriaMedia": 4590,
        "gastosGabineteAno": 55080,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 20930
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15422
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11016
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7711
          }
        ]
      },
      {
        "id": "5006309-v12",
        "nome": "Renata Lima Costa",
        "nomeUrna": "Renata do Paranaíba",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 5960,
        "gastosGabineteAno": 71520,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 27178
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 20026
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14304
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10013
          }
        ]
      },
      {
        "id": "5006309-v13",
        "nome": "Márcio Carvalho Rocha",
        "nomeUrna": "Márcio do Paranaíba",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 9700,
        "salarioLiquido": 7178,
        "verbaIndenizatoriaMedia": 4910,
        "gastosGabineteAno": 58920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 22390
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16498
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11784
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8249
          }
        ]
      }
    ]
  },
  {
    "ibge": 5000203,
    "nome": "Água Clara",
    "regiao": "Costa Leste",
    "regiaoCor": "#DC2626",
    "populacao": 16741,
    "lat": -20.449,
    "lng": -52.876,
    "prefeito": {
      "nome": "Gerolina Alves",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Sebastião Ottoni (PSD)"
    },
    "financas": {
      "dividaAtiva": 18400000,
      "dividaConsolidada": 9200000,
      "dividaPorHabitante": 550,
      "receitaPrevista": 125000000,
      "receitaRealizada": 121023642,
      "despesaExecutada": 116206336,
      "gastoLegislativoTotal": 1489420,
      "gastoLegislativoPorHabitante": 88.97,
      "indiceTransparenciaTCE": 7.9,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 5165,
      "portalUrl": "https://www.camaraaguaclara.ms.gov.br/",
      "prefeituraUrl": "https://aguaclara.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/agua-clara/panorama"
    },
    "vereadores": [
      {
        "id": "5000203-v1",
        "nome": "Maria Moreira Barbosa",
        "nomeUrna": "Maria do Água",
        "partido": "PSD",
        "cargo": "Presidente da Câmara",
        "salarioBase": 10600,
        "salarioLiquido": 7844,
        "verbaIndenizatoriaMedia": 4620,
        "gastosGabineteAno": 55440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21067
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15523
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11088
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7762
          }
        ]
      },
      {
        "id": "5000203-v2",
        "nome": "Edson Miranda Souza",
        "nomeUrna": "Edson Miranda",
        "partido": "PDT",
        "cargo": "1º Secretário",
        "salarioBase": 7600,
        "salarioLiquido": 5624,
        "verbaIndenizatoriaMedia": 4060,
        "gastosGabineteAno": 48720,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 18514
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13642
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9744
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6821
          }
        ]
      },
      {
        "id": "5000203-v3",
        "nome": "Marcelo Miranda Lima",
        "nomeUrna": "Marcelo Miranda",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 7400,
        "salarioLiquido": 5476,
        "verbaIndenizatoriaMedia": 4950,
        "gastosGabineteAno": 59400,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 22572
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16632
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11880
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8316
          }
        ]
      },
      {
        "id": "5000203-v4",
        "nome": "Ana Rocha Pereira",
        "nomeUrna": "Ana Rocha",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 7700,
        "salarioLiquido": 5698,
        "verbaIndenizatoriaMedia": 5670,
        "gastosGabineteAno": 68040,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 25855
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19051
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13608
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9526
          }
        ]
      },
      {
        "id": "5000203-v5",
        "nome": "Ana Pacheco Martins",
        "nomeUrna": "Ana do Água",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 7000,
        "salarioLiquido": 5180,
        "verbaIndenizatoriaMedia": 5860,
        "gastosGabineteAno": 70320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 26722
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19690
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14064
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9845
          }
        ]
      },
      {
        "id": "5000203-v6",
        "nome": "Cláudio Sanches Pacheco",
        "nomeUrna": "Cláudio do Água",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 7700,
        "salarioLiquido": 5698,
        "verbaIndenizatoriaMedia": 4620,
        "gastosGabineteAno": 55440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21067
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15523
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11088
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7762
          }
        ]
      },
      {
        "id": "5000203-v7",
        "nome": "Camila Moreira Melo",
        "nomeUrna": "Camila Moreira",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 7800,
        "salarioLiquido": 5772,
        "verbaIndenizatoriaMedia": 6300,
        "gastosGabineteAno": 75600,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 28728
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 21168
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 15120
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10584
          }
        ]
      },
      {
        "id": "5000203-v8",
        "nome": "Rafael Freitas Pereira",
        "nomeUrna": "Rafael Freitas",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 7200,
        "salarioLiquido": 5328,
        "verbaIndenizatoriaMedia": 4820,
        "gastosGabineteAno": 57840,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21979
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16195
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11568
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8098
          }
        ]
      },
      {
        "id": "5000203-v9",
        "nome": "Marcelo Ribeiro Lima",
        "nomeUrna": "Marcelo do Água",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 7600,
        "salarioLiquido": 5624,
        "verbaIndenizatoriaMedia": 4970,
        "gastosGabineteAno": 59640,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 22663
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16699
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11928
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8350
          }
        ]
      }
    ]
  },
  {
    "ibge": 5001003,
    "nome": "Aparecida do Taboado",
    "regiao": "Costa Leste",
    "regiaoCor": "#DC2626",
    "populacao": 27674,
    "lat": -20.087,
    "lng": -51.093,
    "prefeito": {
      "nome": "José Natan",
      "partido": "PODE",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Tenente Ávila (PSDB)"
    },
    "financas": {
      "dividaAtiva": 29300000,
      "dividaConsolidada": 14800000,
      "dividaPorHabitante": 535,
      "receitaPrevista": 178000000,
      "receitaRealizada": 177367016,
      "despesaExecutada": 163785783,
      "gastoLegislativoTotal": 2012020,
      "gastoLegislativoPorHabitante": 72.7,
      "indiceTransparenciaTCE": 8,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 11,
      "gastoMedioMensalGabinete": 4221,
      "portalUrl": "https://www.camaraaparecidadotaboado.ms.gov.br/",
      "prefeituraUrl": "https://aparecidadotaboado.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/aparecida-do-taboado/panorama"
    },
    "vereadores": [
      {
        "id": "5001003-v1",
        "nome": "Aline Pereira Barbosa",
        "nomeUrna": "Aline do Aparecida",
        "partido": "REPUBLICANOS",
        "cargo": "Presidente da Câmara",
        "salarioBase": 13100,
        "salarioLiquido": 9694,
        "verbaIndenizatoriaMedia": 5290,
        "gastosGabineteAno": 63480,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24122
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17774
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12696
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8887
          }
        ]
      },
      {
        "id": "5001003-v2",
        "nome": "Renata Alves Albuquerque",
        "nomeUrna": "Renata Alves",
        "partido": "PP",
        "cargo": "1º Secretário",
        "salarioBase": 9600,
        "salarioLiquido": 7104,
        "verbaIndenizatoriaMedia": 3360,
        "gastosGabineteAno": 40320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15322
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11290
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8064
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5645
          }
        ]
      },
      {
        "id": "5001003-v3",
        "nome": "João Costa Moreira",
        "nomeUrna": "João do Aparecida",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 9900,
        "salarioLiquido": 7326,
        "verbaIndenizatoriaMedia": 4050,
        "gastosGabineteAno": 48600,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 18468
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13608
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9720
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6804
          }
        ]
      },
      {
        "id": "5001003-v4",
        "nome": "Lucas Melo Barros",
        "nomeUrna": "Lucas do Aparecida",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 3980,
        "gastosGabineteAno": 47760,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 18149
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13373
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9552
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6686
          }
        ]
      },
      {
        "id": "5001003-v5",
        "nome": "Paulo Sanches Freitas",
        "nomeUrna": "Paulo do Aparecida",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 4510,
        "gastosGabineteAno": 54120,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 20566
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15154
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10824
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7577
          }
        ]
      },
      {
        "id": "5001003-v6",
        "nome": "João Rocha Melo",
        "nomeUrna": "João do Aparecida",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 9600,
        "salarioLiquido": 7104,
        "verbaIndenizatoriaMedia": 3420,
        "gastosGabineteAno": 41040,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15595
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11491
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8208
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5746
          }
        ]
      },
      {
        "id": "5001003-v7",
        "nome": "Ana Nogueira Pereira",
        "nomeUrna": "Ana do Aparecida",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 4040,
        "gastosGabineteAno": 48480,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 18422
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13574
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9696
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6787
          }
        ]
      },
      {
        "id": "5001003-v8",
        "nome": "Maria Rocha Pacheco",
        "nomeUrna": "Maria Rocha",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 3110,
        "gastosGabineteAno": 37320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 14182
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10450
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7464
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5225
          }
        ]
      },
      {
        "id": "5001003-v9",
        "nome": "José Freitas Martins",
        "nomeUrna": "José do Aparecida",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 9900,
        "salarioLiquido": 7326,
        "verbaIndenizatoriaMedia": 4320,
        "gastosGabineteAno": 51840,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19699
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14515
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10368
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7258
          }
        ]
      },
      {
        "id": "5001003-v10",
        "nome": "Rafael Sanches Sanches",
        "nomeUrna": "Rafael Sanches",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 9700,
        "salarioLiquido": 7178,
        "verbaIndenizatoriaMedia": 4380,
        "gastosGabineteAno": 52560,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19973
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14717
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10512
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7358
          }
        ]
      },
      {
        "id": "5001003-v11",
        "nome": "Luiz Silva Pacheco",
        "nomeUrna": "Luiz do Aparecida",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 5070,
        "gastosGabineteAno": 60840,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 23119
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17035
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12168
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8518
          }
        ]
      }
    ]
  },
  {
    "ibge": 5007802,
    "nome": "Selvíria",
    "regiao": "Costa Leste",
    "regiaoCor": "#DC2626",
    "populacao": 8142,
    "lat": -20.367,
    "lng": -51.419,
    "prefeito": {
      "nome": "Jaime Soares Ferreira",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Antonio Francisco (Tonhão) (União)"
    },
    "financas": {
      "dividaAtiva": 11000000,
      "dividaConsolidada": 4900000,
      "dividaPorHabitante": 602,
      "receitaPrevista": 85000000,
      "receitaRealizada": 86114108,
      "despesaExecutada": 80821554,
      "gastoLegislativoTotal": 1016320,
      "gastoLegislativoPorHabitante": 124.82,
      "indiceTransparenciaTCE": 8.4,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 2285,
      "portalUrl": "https://www.camaraselviria.ms.gov.br/",
      "prefeituraUrl": "https://selviria.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/selviria/panorama"
    },
    "vereadores": [
      {
        "id": "5007802-v1",
        "nome": "Paulo Gomes Guedes",
        "nomeUrna": "Paulo Gomes",
        "partido": "PSDB",
        "cargo": "Presidente da Câmara",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 2140,
        "gastosGabineteAno": 25680,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 9758
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 7190
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5136
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3595
          }
        ]
      },
      {
        "id": "5007802-v2",
        "nome": "Paulo Melo Araújo",
        "nomeUrna": "Paulo Melo",
        "partido": "PODE",
        "cargo": "1º Secretário",
        "salarioBase": 6100,
        "salarioLiquido": 4514,
        "verbaIndenizatoriaMedia": 1600,
        "gastosGabineteAno": 19200,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 7296
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 5376
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 3840
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 2688
          }
        ]
      },
      {
        "id": "5007802-v3",
        "nome": "Roberto Pereira Pereira",
        "nomeUrna": "Roberto do Selvíria",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 6100,
        "salarioLiquido": 4514,
        "verbaIndenizatoriaMedia": 1740,
        "gastosGabineteAno": 20880,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 7934
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 5846
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 4176
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 2923
          }
        ]
      },
      {
        "id": "5007802-v4",
        "nome": "Aline Rezende Araújo",
        "nomeUrna": "Aline Rezende",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 6700,
        "salarioLiquido": 4958,
        "verbaIndenizatoriaMedia": 2200,
        "gastosGabineteAno": 26400,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 10032
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 7392
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5280
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3696
          }
        ]
      },
      {
        "id": "5007802-v5",
        "nome": "Marcelo Lima Rezende",
        "nomeUrna": "Marcelo Lima",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 6600,
        "salarioLiquido": 4884,
        "verbaIndenizatoriaMedia": 1810,
        "gastosGabineteAno": 21720,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 8254
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 6082
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 4344
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3041
          }
        ]
      },
      {
        "id": "5007802-v6",
        "nome": "Marcos Sanches Costa",
        "nomeUrna": "Marcos Sanches",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 6100,
        "salarioLiquido": 4514,
        "verbaIndenizatoriaMedia": 1650,
        "gastosGabineteAno": 19800,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 7524
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 5544
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 3960
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 2772
          }
        ]
      },
      {
        "id": "5007802-v7",
        "nome": "Márcio Guedes Sanches",
        "nomeUrna": "Márcio do Selvíria",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 6300,
        "salarioLiquido": 4662,
        "verbaIndenizatoriaMedia": 2590,
        "gastosGabineteAno": 31080,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 11810
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 8702
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6216
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4351
          }
        ]
      },
      {
        "id": "5007802-v8",
        "nome": "Paulo Guedes Freitas",
        "nomeUrna": "Paulo do Selvíria",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 6700,
        "salarioLiquido": 4958,
        "verbaIndenizatoriaMedia": 2230,
        "gastosGabineteAno": 26760,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 10169
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 7493
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5352
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3746
          }
        ]
      },
      {
        "id": "5007802-v9",
        "nome": "Eduardo Rocha Freitas",
        "nomeUrna": "Eduardo do Selvíria",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 6300,
        "salarioLiquido": 4662,
        "verbaIndenizatoriaMedia": 1790,
        "gastosGabineteAno": 21480,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 8162
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 6014
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 4296
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3007
          }
        ]
      }
    ]
  },
  {
    "ibge": 5008305,
    "nome": "Três Lagoas",
    "regiao": "Costa Leste",
    "regiaoCor": "#DC2626",
    "populacao": 132152,
    "lat": -20.785,
    "lng": -51.706,
    "prefeito": {
      "nome": "Dr. Cassiano Maia",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Vera Helena (PP)"
    },
    "financas": {
      "dividaAtiva": 220000000,
      "dividaConsolidada": 115400000,
      "dividaPorHabitante": 873,
      "receitaPrevista": 1250000000,
      "receitaRealizada": 1282909071,
      "despesaExecutada": 1186966250,
      "gastoLegislativoTotal": 4968460,
      "gastoLegislativoPorHabitante": 37.6,
      "indiceTransparenciaTCE": 9.5,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 17,
      "gastoMedioMensalGabinete": 6001,
      "portalUrl": "https://www.cmtls.ms.gov.br/",
      "prefeituraUrl": "https://www.treslagoas.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/tres-lagoas/panorama"
    },
    "vereadores": [
      {
        "id": "5008305-v1",
        "nome": "Rogério Campestrini Albuquerque",
        "nomeUrna": "Rogério do Três",
        "partido": "UNIÃO",
        "cargo": "Presidente da Câmara",
        "salarioBase": 19900,
        "salarioLiquido": 14726,
        "verbaIndenizatoriaMedia": 7090,
        "gastosGabineteAno": 85080,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 32330
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 23822
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 17016
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 11911
          }
        ]
      },
      {
        "id": "5008305-v2",
        "nome": "Cristiane Freitas Santos",
        "nomeUrna": "Cristiane Freitas",
        "partido": "PL",
        "cargo": "1º Secretário",
        "salarioBase": 16100,
        "salarioLiquido": 11914,
        "verbaIndenizatoriaMedia": 7500,
        "gastosGabineteAno": 90000,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 34200
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 25200
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 18000
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 12600
          }
        ]
      },
      {
        "id": "5008305-v3",
        "nome": "Cláudio Sanches Alves",
        "nomeUrna": "Cláudio Sanches",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 16100,
        "salarioLiquido": 11914,
        "verbaIndenizatoriaMedia": 5830,
        "gastosGabineteAno": 69960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 26585
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19589
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13992
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9794
          }
        ]
      },
      {
        "id": "5008305-v4",
        "nome": "Marcelo Carvalho Barbosa",
        "nomeUrna": "Marcelo do Três",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 16400,
        "salarioLiquido": 12136,
        "verbaIndenizatoriaMedia": 6870,
        "gastosGabineteAno": 82440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 31327
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 23083
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 16488
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 11542
          }
        ]
      },
      {
        "id": "5008305-v5",
        "nome": "Maria Araújo Pereira",
        "nomeUrna": "Maria Araújo",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 17000,
        "salarioLiquido": 12580,
        "verbaIndenizatoriaMedia": 6820,
        "gastosGabineteAno": 81840,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 31099
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 22915
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 16368
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 11458
          }
        ]
      },
      {
        "id": "5008305-v6",
        "nome": "Luiz Souza Santos",
        "nomeUrna": "Luiz Souza",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 16100,
        "salarioLiquido": 11914,
        "verbaIndenizatoriaMedia": 4370,
        "gastosGabineteAno": 52440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19927
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14683
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10488
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7342
          }
        ]
      },
      {
        "id": "5008305-v7",
        "nome": "Carlos Silva Dias",
        "nomeUrna": "Carlos Silva",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 16300,
        "salarioLiquido": 12062,
        "verbaIndenizatoriaMedia": 7180,
        "gastosGabineteAno": 86160,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 32741
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 24125
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 17232
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 12062
          }
        ]
      },
      {
        "id": "5008305-v8",
        "nome": "Roberto Martins Pereira",
        "nomeUrna": "Roberto Martins",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 16900,
        "salarioLiquido": 12506,
        "verbaIndenizatoriaMedia": 6080,
        "gastosGabineteAno": 72960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 27725
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 20429
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14592
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10214
          }
        ]
      },
      {
        "id": "5008305-v9",
        "nome": "Sandra Ribeiro Guedes",
        "nomeUrna": "Sandra do Três",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 16600,
        "salarioLiquido": 12284,
        "verbaIndenizatoriaMedia": 5280,
        "gastosGabineteAno": 63360,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24077
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17741
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12672
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8870
          }
        ]
      },
      {
        "id": "5008305-v10",
        "nome": "Rogério Ferreira Melo",
        "nomeUrna": "Rogério do Três",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 16600,
        "salarioLiquido": 12284,
        "verbaIndenizatoriaMedia": 4890,
        "gastosGabineteAno": 58680,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 22298
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16430
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11736
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8215
          }
        ]
      },
      {
        "id": "5008305-v11",
        "nome": "Ana Rezende Santos",
        "nomeUrna": "Ana do Três",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 16600,
        "salarioLiquido": 12284,
        "verbaIndenizatoriaMedia": 7620,
        "gastosGabineteAno": 91440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 34747
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 25603
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 18288
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 12802
          }
        ]
      },
      {
        "id": "5008305-v12",
        "nome": "Cláudio Gomes Barbosa",
        "nomeUrna": "Cláudio do Três",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 16700,
        "salarioLiquido": 12358,
        "verbaIndenizatoriaMedia": 4900,
        "gastosGabineteAno": 58800,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 22344
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16464
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11760
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8232
          }
        ]
      },
      {
        "id": "5008305-v13",
        "nome": "Paulo Alves Barros",
        "nomeUrna": "Paulo do Três",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 16300,
        "salarioLiquido": 12062,
        "verbaIndenizatoriaMedia": 4980,
        "gastosGabineteAno": 59760,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 22709
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16733
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11952
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8366
          }
        ]
      },
      {
        "id": "5008305-v14",
        "nome": "Luciana Silva Miranda",
        "nomeUrna": "Luciana Silva",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 16300,
        "salarioLiquido": 12062,
        "verbaIndenizatoriaMedia": 4290,
        "gastosGabineteAno": 51480,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19562
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14414
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10296
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7207
          }
        ]
      },
      {
        "id": "5008305-v15",
        "nome": "Márcio Ribeiro Pacheco",
        "nomeUrna": "Márcio do Três",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 16900,
        "salarioLiquido": 12506,
        "verbaIndenizatoriaMedia": 5870,
        "gastosGabineteAno": 70440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 26767
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19723
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14088
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9862
          }
        ]
      },
      {
        "id": "5008305-v16",
        "nome": "Márcio Costa Campestrini",
        "nomeUrna": "Márcio do Três",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 16800,
        "salarioLiquido": 12432,
        "verbaIndenizatoriaMedia": 4490,
        "gastosGabineteAno": 53880,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 20474
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15086
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10776
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7543
          }
        ]
      },
      {
        "id": "5008305-v17",
        "nome": "Camila Miranda Barros",
        "nomeUrna": "Camila do Três",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 16600,
        "salarioLiquido": 12284,
        "verbaIndenizatoriaMedia": 4990,
        "gastosGabineteAno": 59880,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 22754
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16766
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11976
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8383
          }
        ]
      }
    ]
  },
  {
    "ibge": 5002308,
    "nome": "Brasilândia",
    "regiao": "Costa Leste",
    "regiaoCor": "#DC2626",
    "populacao": 11579,
    "lat": -21.256,
    "lng": -52.034,
    "prefeito": {
      "nome": "Márcia Amaral",
      "partido": "MDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Fabio Toledo (PP)"
    },
    "financas": {
      "dividaAtiva": 13500000,
      "dividaConsolidada": 6200000,
      "dividaPorHabitante": 535,
      "receitaPrevista": 98000000,
      "receitaRealizada": 96918688,
      "despesaExecutada": 90312648,
      "gastoLegislativoTotal": 1231290,
      "gastoLegislativoPorHabitante": 106.34,
      "indiceTransparenciaTCE": 9.2,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 2690,
      "portalUrl": "https://www.camarabrasilandia.ms.gov.br/",
      "prefeituraUrl": "https://brasilandia.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/brasilandia/panorama"
    },
    "vereadores": [
      {
        "id": "5002308-v1",
        "nome": "Lucas Souza Miranda",
        "nomeUrna": "Lucas Souza",
        "partido": "PP",
        "cargo": "Presidente da Câmara",
        "salarioBase": 10900,
        "salarioLiquido": 8066,
        "verbaIndenizatoriaMedia": 2910,
        "gastosGabineteAno": 34920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 13270
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 9778
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6984
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4889
          }
        ]
      },
      {
        "id": "5002308-v2",
        "nome": "Carlos Gomes Santos",
        "nomeUrna": "Carlos do Brasilândia",
        "partido": "PODE",
        "cargo": "1º Secretário",
        "salarioBase": 7800,
        "salarioLiquido": 5772,
        "verbaIndenizatoriaMedia": 2860,
        "gastosGabineteAno": 34320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 13042
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 9610
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6864
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4805
          }
        ]
      },
      {
        "id": "5002308-v3",
        "nome": "Edson Guedes Oliveira",
        "nomeUrna": "Edson Guedes",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 7100,
        "salarioLiquido": 5254,
        "verbaIndenizatoriaMedia": 3470,
        "gastosGabineteAno": 41640,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15823
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11659
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8328
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5830
          }
        ]
      },
      {
        "id": "5002308-v4",
        "nome": "José Santos Santos",
        "nomeUrna": "José do Brasilândia",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 7600,
        "salarioLiquido": 5624,
        "verbaIndenizatoriaMedia": 2890,
        "gastosGabineteAno": 34680,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 13178
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 9710
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6936
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4855
          }
        ]
      },
      {
        "id": "5002308-v5",
        "nome": "Camila Pereira Martins",
        "nomeUrna": "Camila do Brasilândia",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 7200,
        "salarioLiquido": 5328,
        "verbaIndenizatoriaMedia": 3120,
        "gastosGabineteAno": 37440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 14227
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10483
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7488
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5242
          }
        ]
      },
      {
        "id": "5002308-v6",
        "nome": "Maria Melo Pereira",
        "nomeUrna": "Maria Melo",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 7300,
        "salarioLiquido": 5402,
        "verbaIndenizatoriaMedia": 2250,
        "gastosGabineteAno": 27000,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 10260
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 7560
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5400
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3780
          }
        ]
      },
      {
        "id": "5002308-v7",
        "nome": "Rogério Rocha Guedes",
        "nomeUrna": "Rogério Rocha",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 7800,
        "salarioLiquido": 5772,
        "verbaIndenizatoriaMedia": 2170,
        "gastosGabineteAno": 26040,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 9895
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 7291
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5208
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3646
          }
        ]
      },
      {
        "id": "5002308-v8",
        "nome": "Camila Miranda Miranda",
        "nomeUrna": "Camila do Brasilândia",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 7400,
        "salarioLiquido": 5476,
        "verbaIndenizatoriaMedia": 2070,
        "gastosGabineteAno": 24840,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 9439
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 6955
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 4968
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3478
          }
        ]
      },
      {
        "id": "5002308-v9",
        "nome": "Lucas Carvalho Martins",
        "nomeUrna": "Lucas Carvalho",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 7400,
        "salarioLiquido": 5476,
        "verbaIndenizatoriaMedia": 2730,
        "gastosGabineteAno": 32760,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 12449
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 9173
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6552
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4586
          }
        ]
      }
    ]
  },
  {
    "ibge": 5007554,
    "nome": "Santa Rita do Pardo",
    "regiao": "Costa Leste",
    "regiaoCor": "#DC2626",
    "populacao": 7475,
    "lat": -21.303,
    "lng": -52.832,
    "prefeito": {
      "nome": "Dr. Lúcio Costa",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Cleudenide (Nide) (Podemos)"
    },
    "financas": {
      "dividaAtiva": 8400000,
      "dividaConsolidada": 3700000,
      "dividaPorHabitante": 495,
      "receitaPrevista": 71000000,
      "receitaRealizada": 71216162,
      "despesaExecutada": 67188356,
      "gastoLegislativoTotal": 1247670,
      "gastoLegislativoPorHabitante": 166.91,
      "indiceTransparenciaTCE": 9.8,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 3727,
      "portalUrl": "https://www.camarasantaritadopardo.ms.gov.br/",
      "prefeituraUrl": "https://santaritadopardo.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/santa-rita-do-pardo/panorama"
    },
    "vereadores": [
      {
        "id": "5007554-v1",
        "nome": "Camila Costa Souza",
        "nomeUrna": "Camila do Santa",
        "partido": "UNIÃO",
        "cargo": "Presidente da Câmara",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 3820,
        "gastosGabineteAno": 45840,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17419
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12835
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9168
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6418
          }
        ]
      },
      {
        "id": "5007554-v2",
        "nome": "Edson Lima Pereira",
        "nomeUrna": "Edson do Santa",
        "partido": "PT",
        "cargo": "1º Secretário",
        "salarioBase": 6500,
        "salarioLiquido": 4810,
        "verbaIndenizatoriaMedia": 4620,
        "gastosGabineteAno": 55440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21067
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15523
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11088
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7762
          }
        ]
      },
      {
        "id": "5007554-v3",
        "nome": "Antônio Nogueira Nogueira",
        "nomeUrna": "Antônio Nogueira",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 6800,
        "salarioLiquido": 5032,
        "verbaIndenizatoriaMedia": 3820,
        "gastosGabineteAno": 45840,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17419
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12835
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9168
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6418
          }
        ]
      },
      {
        "id": "5007554-v4",
        "nome": "Rafael Ribeiro Miranda",
        "nomeUrna": "Rafael Ribeiro",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 6200,
        "salarioLiquido": 4588,
        "verbaIndenizatoriaMedia": 4180,
        "gastosGabineteAno": 50160,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19061
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14045
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10032
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7022
          }
        ]
      },
      {
        "id": "5007554-v5",
        "nome": "Luciana Martins Rezende",
        "nomeUrna": "Luciana Martins",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 6000,
        "salarioLiquido": 4440,
        "verbaIndenizatoriaMedia": 2660,
        "gastosGabineteAno": 31920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 12130
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 8938
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6384
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4469
          }
        ]
      },
      {
        "id": "5007554-v6",
        "nome": "Paulo Ribeiro Oliveira",
        "nomeUrna": "Paulo do Santa",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 6600,
        "salarioLiquido": 4884,
        "verbaIndenizatoriaMedia": 4440,
        "gastosGabineteAno": 53280,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 20246
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14918
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10656
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7459
          }
        ]
      },
      {
        "id": "5007554-v7",
        "nome": "Fernando Oliveira Santos",
        "nomeUrna": "Fernando do Santa",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 6300,
        "salarioLiquido": 4662,
        "verbaIndenizatoriaMedia": 4340,
        "gastosGabineteAno": 52080,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19790
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14582
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10416
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7291
          }
        ]
      },
      {
        "id": "5007554-v8",
        "nome": "Antônio Costa Ferreira",
        "nomeUrna": "Antônio do Santa",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 6000,
        "salarioLiquido": 4440,
        "verbaIndenizatoriaMedia": 4710,
        "gastosGabineteAno": 56520,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21478
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15826
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11304
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7913
          }
        ]
      },
      {
        "id": "5007554-v9",
        "nome": "Luiz Santos Rezende",
        "nomeUrna": "Luiz Santos",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 6100,
        "salarioLiquido": 4514,
        "verbaIndenizatoriaMedia": 4550,
        "gastosGabineteAno": 54600,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 20748
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15288
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10920
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7644
          }
        ]
      }
    ]
  },
  {
    "ibge": 5001904,
    "nome": "Bataguassu",
    "regiao": "Costa Leste",
    "regiaoCor": "#DC2626",
    "populacao": 23031,
    "lat": -21.714,
    "lng": -52.422,
    "prefeito": {
      "nome": "Wanderleia Caravina",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Cleyton Silva (PP)"
    },
    "financas": {
      "dividaAtiva": 26400000,
      "dividaConsolidada": 12800000,
      "dividaPorHabitante": 556,
      "receitaPrevista": 165000000,
      "receitaRealizada": 169558525,
      "despesaExecutada": 161243072,
      "gastoLegislativoTotal": 2116100,
      "gastoLegislativoPorHabitante": 91.88,
      "indiceTransparenciaTCE": 9.8,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 11,
      "gastoMedioMensalGabinete": 5225,
      "portalUrl": "https://www.camarabataguassu.ms.gov.br/",
      "prefeituraUrl": "https://bataguassu.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/bataguassu/panorama"
    },
    "vereadores": [
      {
        "id": "5001904-v1",
        "nome": "Luciana Sanches Ferreira",
        "nomeUrna": "Luciana do Bataguassu",
        "partido": "PODE",
        "cargo": "Presidente da Câmara",
        "salarioBase": 12900,
        "salarioLiquido": 9546,
        "verbaIndenizatoriaMedia": 4200,
        "gastosGabineteAno": 50400,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19152
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14112
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10080
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7056
          }
        ]
      },
      {
        "id": "5001904-v2",
        "nome": "Luiz Albuquerque Ribeiro",
        "nomeUrna": "Luiz do Bataguassu",
        "partido": "PT",
        "cargo": "1º Secretário",
        "salarioBase": 9900,
        "salarioLiquido": 7326,
        "verbaIndenizatoriaMedia": 4720,
        "gastosGabineteAno": 56640,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21523
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15859
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11328
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7930
          }
        ]
      },
      {
        "id": "5001904-v3",
        "nome": "Cristiane Oliveira Souza",
        "nomeUrna": "Cristiane do Bataguassu",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 10100,
        "salarioLiquido": 7474,
        "verbaIndenizatoriaMedia": 5080,
        "gastosGabineteAno": 60960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 23165
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17069
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12192
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8534
          }
        ]
      },
      {
        "id": "5001904-v4",
        "nome": "Antônio Moreira Silva",
        "nomeUrna": "Antônio do Bataguassu",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 9900,
        "salarioLiquido": 7326,
        "verbaIndenizatoriaMedia": 5640,
        "gastosGabineteAno": 67680,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 25718
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18950
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13536
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9475
          }
        ]
      },
      {
        "id": "5001904-v5",
        "nome": "Camila Guedes Araújo",
        "nomeUrna": "Camila do Bataguassu",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 9600,
        "salarioLiquido": 7104,
        "verbaIndenizatoriaMedia": 5640,
        "gastosGabineteAno": 67680,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 25718
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18950
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13536
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9475
          }
        ]
      },
      {
        "id": "5001904-v6",
        "nome": "Rafael Barbosa Guedes",
        "nomeUrna": "Rafael do Bataguassu",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 9400,
        "salarioLiquido": 6956,
        "verbaIndenizatoriaMedia": 3880,
        "gastosGabineteAno": 46560,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17693
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13037
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9312
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6518
          }
        ]
      },
      {
        "id": "5001904-v7",
        "nome": "Eduardo Oliveira Barbosa",
        "nomeUrna": "Eduardo do Bataguassu",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 4500,
        "gastosGabineteAno": 54000,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 20520
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15120
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10800
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7560
          }
        ]
      },
      {
        "id": "5001904-v8",
        "nome": "Camila Freitas Campestrini",
        "nomeUrna": "Camila do Bataguassu",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 9700,
        "salarioLiquido": 7178,
        "verbaIndenizatoriaMedia": 5310,
        "gastosGabineteAno": 63720,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24214
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17842
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12744
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8921
          }
        ]
      },
      {
        "id": "5001904-v9",
        "nome": "Cristiane Martins Rezende",
        "nomeUrna": "Cristiane Martins",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 4770,
        "gastosGabineteAno": 57240,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21751
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16027
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11448
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8014
          }
        ]
      },
      {
        "id": "5001904-v10",
        "nome": "Márcio Sanches Guedes",
        "nomeUrna": "Márcio Sanches",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 10300,
        "salarioLiquido": 7622,
        "verbaIndenizatoriaMedia": 6130,
        "gastosGabineteAno": 73560,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 27953
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 20597
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14712
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10298
          }
        ]
      },
      {
        "id": "5001904-v11",
        "nome": "Silvio Sanches Pereira",
        "nomeUrna": "Silvio do Bataguassu",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 3890,
        "gastosGabineteAno": 46680,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17738
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13070
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9336
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6535
          }
        ]
      }
    ]
  },
  {
    "ibge": 5000807,
    "nome": "Anaurilândia",
    "regiao": "Costa Leste",
    "regiaoCor": "#DC2626",
    "populacao": 7653,
    "lat": -22.185,
    "lng": -52.718,
    "prefeito": {
      "nome": "Professor Rafael",
      "partido": "PP",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Guilherme Gomes Zandonadi (Podemos)"
    },
    "financas": {
      "dividaAtiva": 8900000,
      "dividaConsolidada": 3800000,
      "dividaPorHabitante": 497,
      "receitaPrevista": 72000000,
      "receitaRealizada": 73339711,
      "despesaExecutada": 67018202,
      "gastoLegislativoTotal": 1176970,
      "gastoLegislativoPorHabitante": 153.79,
      "indiceTransparenciaTCE": 9.7,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 3347,
      "portalUrl": "https://www.camaraanaurilandia.ms.gov.br/",
      "prefeituraUrl": "https://anaurilandia.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/anaurilandia/panorama"
    },
    "vereadores": [
      {
        "id": "5000807-v1",
        "nome": "José Oliveira Silva",
        "nomeUrna": "José Oliveira",
        "partido": "PSD",
        "cargo": "Presidente da Câmara",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 2410,
        "gastosGabineteAno": 28920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 10990
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 8098
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5784
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4049
          }
        ]
      },
      {
        "id": "5000807-v2",
        "nome": "Edson Martins Sanches",
        "nomeUrna": "Edson do Anaurilândia",
        "partido": "UNIÃO",
        "cargo": "1º Secretário",
        "salarioBase": 6200,
        "salarioLiquido": 4588,
        "verbaIndenizatoriaMedia": 3770,
        "gastosGabineteAno": 45240,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17191
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12667
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9048
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6334
          }
        ]
      },
      {
        "id": "5000807-v3",
        "nome": "Marcos Pacheco Ribeiro",
        "nomeUrna": "Marcos do Anaurilândia",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 6900,
        "salarioLiquido": 5106,
        "verbaIndenizatoriaMedia": 4060,
        "gastosGabineteAno": 48720,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 18514
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13642
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9744
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6821
          }
        ]
      },
      {
        "id": "5000807-v4",
        "nome": "Marcelo Alves Souza",
        "nomeUrna": "Marcelo do Anaurilândia",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 6400,
        "salarioLiquido": 4736,
        "verbaIndenizatoriaMedia": 3660,
        "gastosGabineteAno": 43920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 16690
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12298
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8784
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6149
          }
        ]
      },
      {
        "id": "5000807-v5",
        "nome": "Antônio Pereira Martins",
        "nomeUrna": "Antônio do Anaurilândia",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 7000,
        "salarioLiquido": 5180,
        "verbaIndenizatoriaMedia": 4240,
        "gastosGabineteAno": 50880,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19334
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14246
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10176
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7123
          }
        ]
      },
      {
        "id": "5000807-v6",
        "nome": "Ana Lima Souza",
        "nomeUrna": "Ana do Anaurilândia",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 6700,
        "salarioLiquido": 4958,
        "verbaIndenizatoriaMedia": 2860,
        "gastosGabineteAno": 34320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 13042
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 9610
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6864
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4805
          }
        ]
      },
      {
        "id": "5000807-v7",
        "nome": "Eduardo Silva Rezende",
        "nomeUrna": "Eduardo do Anaurilândia",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 6700,
        "salarioLiquido": 4958,
        "verbaIndenizatoriaMedia": 2400,
        "gastosGabineteAno": 28800,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 10944
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 8064
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5760
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4032
          }
        ]
      },
      {
        "id": "5000807-v8",
        "nome": "Roberto Miranda Santos",
        "nomeUrna": "Roberto Miranda",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 6600,
        "salarioLiquido": 4884,
        "verbaIndenizatoriaMedia": 2640,
        "gastosGabineteAno": 31680,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 12038
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 8870
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6336
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4435
          }
        ]
      },
      {
        "id": "5000807-v9",
        "nome": "Antônio Gomes Alves",
        "nomeUrna": "Antônio do Anaurilândia",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 6200,
        "salarioLiquido": 4588,
        "verbaIndenizatoriaMedia": 2770,
        "gastosGabineteAno": 33240,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 12631
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 9307
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6648
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4654
          }
        ]
      }
    ]
  },
  {
    "ibge": 5007307,
    "nome": "Rio Negro",
    "regiao": "Caminho dos Ipês",
    "regiaoCor": "#EA580C",
    "populacao": 4840,
    "lat": -19.448,
    "lng": -54.991,
    "prefeito": {
      "nome": "Henrique",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Edson Muniz (Nenê) (PSD)"
    },
    "financas": {
      "dividaAtiva": 5600000,
      "dividaConsolidada": 2500000,
      "dividaPorHabitante": 517,
      "receitaPrevista": 53000000,
      "receitaRealizada": 50612346,
      "despesaExecutada": 51226395,
      "gastoLegislativoTotal": 1218580,
      "gastoLegislativoPorHabitante": 251.77,
      "indiceTransparenciaTCE": 7.9,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 3892,
      "portalUrl": "https://www.camararionegro.ms.gov.br/",
      "prefeituraUrl": "https://rionegro.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/rio-negro/panorama"
    },
    "vereadores": [
      {
        "id": "5007307-v1",
        "nome": "Juliana Costa Alves",
        "nomeUrna": "Juliana do Rio",
        "partido": "PL",
        "cargo": "Presidente da Câmara",
        "salarioBase": 9600,
        "salarioLiquido": 7104,
        "verbaIndenizatoriaMedia": 3460,
        "gastosGabineteAno": 41520,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15778
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11626
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8304
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5813
          }
        ]
      },
      {
        "id": "5007307-v2",
        "nome": "Roberto Freitas Santos",
        "nomeUrna": "Roberto Freitas",
        "partido": "PT",
        "cargo": "1º Secretário",
        "salarioBase": 6700,
        "salarioLiquido": 4958,
        "verbaIndenizatoriaMedia": 4460,
        "gastosGabineteAno": 53520,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 20338
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14986
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10704
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7493
          }
        ]
      },
      {
        "id": "5007307-v3",
        "nome": "Fábio Santos Araújo",
        "nomeUrna": "Fábio do Rio",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 6500,
        "salarioLiquido": 4810,
        "verbaIndenizatoriaMedia": 2960,
        "gastosGabineteAno": 35520,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 13498
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 9946
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7104
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4973
          }
        ]
      },
      {
        "id": "5007307-v4",
        "nome": "Lucas Souza Freitas",
        "nomeUrna": "Lucas do Rio",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 6200,
        "salarioLiquido": 4588,
        "verbaIndenizatoriaMedia": 3470,
        "gastosGabineteAno": 41640,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15823
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11659
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8328
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5830
          }
        ]
      },
      {
        "id": "5007307-v5",
        "nome": "Silvio Melo Rezende",
        "nomeUrna": "Silvio do Rio",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 6300,
        "salarioLiquido": 4662,
        "verbaIndenizatoriaMedia": 3220,
        "gastosGabineteAno": 38640,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 14683
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10819
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7728
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5410
          }
        ]
      },
      {
        "id": "5007307-v6",
        "nome": "Rafael Silva Campestrini",
        "nomeUrna": "Rafael do Rio",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 6900,
        "salarioLiquido": 5106,
        "verbaIndenizatoriaMedia": 5040,
        "gastosGabineteAno": 60480,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 22982
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16934
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12096
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8467
          }
        ]
      },
      {
        "id": "5007307-v7",
        "nome": "Cláudio Freitas Costa",
        "nomeUrna": "Cláudio Freitas",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 6300,
        "salarioLiquido": 4662,
        "verbaIndenizatoriaMedia": 3390,
        "gastosGabineteAno": 40680,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15458
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11390
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8136
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5695
          }
        ]
      },
      {
        "id": "5007307-v8",
        "nome": "Luiz Alves Miranda",
        "nomeUrna": "Luiz do Rio",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 6300,
        "salarioLiquido": 4662,
        "verbaIndenizatoriaMedia": 3230,
        "gastosGabineteAno": 38760,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 14729
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10853
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7752
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5426
          }
        ]
      },
      {
        "id": "5007307-v9",
        "nome": "Maria Carvalho Pereira",
        "nomeUrna": "Maria do Rio",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 6200,
        "salarioLiquido": 4588,
        "verbaIndenizatoriaMedia": 4710,
        "gastosGabineteAno": 56520,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21478
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15826
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11304
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7913
          }
        ]
      }
    ]
  },
  {
    "ibge": 5003108,
    "nome": "Corguinho",
    "regiao": "Caminho dos Ipês",
    "regiaoCor": "#EA580C",
    "populacao": 6054,
    "lat": -19.829,
    "lng": -54.829,
    "prefeito": {
      "nome": "Barrinha",
      "partido": "MDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Jeffer Aparecido (PP)"
    },
    "financas": {
      "dividaAtiva": 5800000,
      "dividaConsolidada": 2700000,
      "dividaPorHabitante": 446,
      "receitaPrevista": 56000000,
      "receitaRealizada": 55035405,
      "despesaExecutada": 53402413,
      "gastoLegislativoTotal": 1217930,
      "gastoLegislativoPorHabitante": 201.18,
      "indiceTransparenciaTCE": 8.1,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 3803,
      "portalUrl": "https://www.camaracorguinho.ms.gov.br/",
      "prefeituraUrl": "https://corguinho.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/corguinho/panorama"
    },
    "vereadores": [
      {
        "id": "5003108-v1",
        "nome": "Patrícia Alves Oliveira",
        "nomeUrna": "Patrícia do Corguinho",
        "partido": "REPUBLICANOS",
        "cargo": "Presidente da Câmara",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 3610,
        "gastosGabineteAno": 43320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 16462
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12130
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8664
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6065
          }
        ]
      },
      {
        "id": "5003108-v2",
        "nome": "Marcos Gomes Guedes",
        "nomeUrna": "Marcos do Corguinho",
        "partido": "PSB",
        "cargo": "1º Secretário",
        "salarioBase": 6600,
        "salarioLiquido": 4884,
        "verbaIndenizatoriaMedia": 4490,
        "gastosGabineteAno": 53880,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 20474
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15086
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10776
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7543
          }
        ]
      },
      {
        "id": "5003108-v3",
        "nome": "Juliana Rezende Freitas",
        "nomeUrna": "Juliana Rezende",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 6300,
        "salarioLiquido": 4662,
        "verbaIndenizatoriaMedia": 3880,
        "gastosGabineteAno": 46560,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17693
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13037
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9312
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6518
          }
        ]
      },
      {
        "id": "5003108-v4",
        "nome": "Camila Ribeiro Martins",
        "nomeUrna": "Camila Ribeiro",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 6300,
        "salarioLiquido": 4662,
        "verbaIndenizatoriaMedia": 3250,
        "gastosGabineteAno": 39000,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 14820
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10920
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7800
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5460
          }
        ]
      },
      {
        "id": "5003108-v5",
        "nome": "Eduardo Oliveira Ferreira",
        "nomeUrna": "Eduardo Oliveira",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 6600,
        "salarioLiquido": 4884,
        "verbaIndenizatoriaMedia": 3550,
        "gastosGabineteAno": 42600,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 16188
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11928
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8520
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5964
          }
        ]
      },
      {
        "id": "5003108-v6",
        "nome": "Rogério Souza Rezende",
        "nomeUrna": "Rogério do Corguinho",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 7000,
        "salarioLiquido": 5180,
        "verbaIndenizatoriaMedia": 3450,
        "gastosGabineteAno": 41400,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15732
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11592
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8280
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5796
          }
        ]
      },
      {
        "id": "5003108-v7",
        "nome": "Cláudio Santos Nogueira",
        "nomeUrna": "Cláudio do Corguinho",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 6300,
        "salarioLiquido": 4662,
        "verbaIndenizatoriaMedia": 4690,
        "gastosGabineteAno": 56280,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21386
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15758
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11256
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7879
          }
        ]
      },
      {
        "id": "5003108-v8",
        "nome": "Carlos Alves Araújo",
        "nomeUrna": "Carlos Alves",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 6100,
        "salarioLiquido": 4514,
        "verbaIndenizatoriaMedia": 3360,
        "gastosGabineteAno": 40320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15322
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11290
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8064
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5645
          }
        ]
      },
      {
        "id": "5003108-v9",
        "nome": "Luiz Freitas Rocha",
        "nomeUrna": "Luiz Freitas",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 6700,
        "salarioLiquido": 4958,
        "verbaIndenizatoriaMedia": 2830,
        "gastosGabineteAno": 33960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 12905
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 9509
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6792
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4754
          }
        ]
      }
    ]
  },
  {
    "ibge": 5007505,
    "nome": "Rochedo",
    "regiao": "Caminho dos Ipês",
    "regiaoCor": "#EA580C",
    "populacao": 5199,
    "lat": -19.953,
    "lng": -54.893,
    "prefeito": {
      "nome": "Juninho de Paula",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Thomaz Jonhson (PSD)"
    },
    "financas": {
      "dividaAtiva": 5500000,
      "dividaConsolidada": 2400000,
      "dividaPorHabitante": 462,
      "receitaPrevista": 54000000,
      "receitaRealizada": 54747636,
      "despesaExecutada": 52255679,
      "gastoLegislativoTotal": 1150320,
      "gastoLegislativoPorHabitante": 221.26,
      "indiceTransparenciaTCE": 7.8,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 3004,
      "portalUrl": "https://www.camararochedo.ms.gov.br/",
      "prefeituraUrl": "https://rochedo.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/rochedo/panorama"
    },
    "vereadores": [
      {
        "id": "5007505-v1",
        "nome": "Rogério Lima Araújo",
        "nomeUrna": "Rogério do Rochedo",
        "partido": "UNIÃO",
        "cargo": "Presidente da Câmara",
        "salarioBase": 9400,
        "salarioLiquido": 6956,
        "verbaIndenizatoriaMedia": 2610,
        "gastosGabineteAno": 31320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 11902
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 8770
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6264
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4385
          }
        ]
      },
      {
        "id": "5007505-v2",
        "nome": "Patrícia Pereira Costa",
        "nomeUrna": "Patrícia do Rochedo",
        "partido": "REPUBLICANOS",
        "cargo": "1º Secretário",
        "salarioBase": 6400,
        "salarioLiquido": 4736,
        "verbaIndenizatoriaMedia": 3080,
        "gastosGabineteAno": 36960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 14045
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10349
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7392
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5174
          }
        ]
      },
      {
        "id": "5007505-v3",
        "nome": "Camila Moreira Ferreira",
        "nomeUrna": "Camila do Rochedo",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 6100,
        "salarioLiquido": 4514,
        "verbaIndenizatoriaMedia": 3580,
        "gastosGabineteAno": 42960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 16325
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12029
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8592
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6014
          }
        ]
      },
      {
        "id": "5007505-v4",
        "nome": "Marcos Freitas Miranda",
        "nomeUrna": "Marcos do Rochedo",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 6500,
        "salarioLiquido": 4810,
        "verbaIndenizatoriaMedia": 3120,
        "gastosGabineteAno": 37440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 14227
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10483
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7488
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5242
          }
        ]
      },
      {
        "id": "5007505-v5",
        "nome": "Ana Guedes Gomes",
        "nomeUrna": "Ana do Rochedo",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 6600,
        "salarioLiquido": 4884,
        "verbaIndenizatoriaMedia": 3470,
        "gastosGabineteAno": 41640,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15823
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11659
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8328
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5830
          }
        ]
      },
      {
        "id": "5007505-v6",
        "nome": "Patrícia Souza Freitas",
        "nomeUrna": "Patrícia do Rochedo",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 6800,
        "salarioLiquido": 5032,
        "verbaIndenizatoriaMedia": 2260,
        "gastosGabineteAno": 27120,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 10306
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 7594
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5424
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3797
          }
        ]
      },
      {
        "id": "5007505-v7",
        "nome": "Rafael Guedes Lima",
        "nomeUrna": "Rafael do Rochedo",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 6100,
        "salarioLiquido": 4514,
        "verbaIndenizatoriaMedia": 3110,
        "gastosGabineteAno": 37320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 14182
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10450
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7464
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5225
          }
        ]
      },
      {
        "id": "5007505-v8",
        "nome": "Camila Costa Souza",
        "nomeUrna": "Camila do Rochedo",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 6800,
        "salarioLiquido": 5032,
        "verbaIndenizatoriaMedia": 3080,
        "gastosGabineteAno": 36960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 14045
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10349
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7392
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5174
          }
        ]
      },
      {
        "id": "5007505-v9",
        "nome": "Edson Lima Pereira",
        "nomeUrna": "Edson do Rochedo",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 6500,
        "salarioLiquido": 4810,
        "verbaIndenizatoriaMedia": 3720,
        "gastosGabineteAno": 44640,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 16963
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12499
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8928
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6250
          }
        ]
      }
    ]
  },
  {
    "ibge": 5004908,
    "nome": "Jaraguari",
    "regiao": "Caminho dos Ipês",
    "regiaoCor": "#EA580C",
    "populacao": 7139,
    "lat": -20.141,
    "lng": -54.397,
    "prefeito": {
      "nome": "Edson Rodrigues",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Davi Gomes Barbosa (PSD)"
    },
    "financas": {
      "dividaAtiva": 6800000,
      "dividaConsolidada": 3000000,
      "dividaPorHabitante": 420,
      "receitaPrevista": 62000000,
      "receitaRealizada": 60442769,
      "despesaExecutada": 57657470,
      "gastoLegislativoTotal": 1271510,
      "gastoLegislativoPorHabitante": 178.11,
      "indiceTransparenciaTCE": 7.6,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 4125,
      "portalUrl": "https://www.camarajaraguari.ms.gov.br/",
      "prefeituraUrl": "https://jaraguari.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/jaraguari/panorama"
    },
    "vereadores": [
      {
        "id": "5004908-v1",
        "nome": "Cláudio Melo Santos",
        "nomeUrna": "Cláudio do Jaraguari",
        "partido": "REPUBLICANOS",
        "cargo": "Presidente da Câmara",
        "salarioBase": 9300,
        "salarioLiquido": 6882,
        "verbaIndenizatoriaMedia": 3630,
        "gastosGabineteAno": 43560,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 16553
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12197
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8712
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6098
          }
        ]
      },
      {
        "id": "5004908-v2",
        "nome": "Cláudio Pereira Alves",
        "nomeUrna": "Cláudio Pereira",
        "partido": "REPUBLICANOS",
        "cargo": "1º Secretário",
        "salarioBase": 6600,
        "salarioLiquido": 4884,
        "verbaIndenizatoriaMedia": 4830,
        "gastosGabineteAno": 57960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 22025
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16229
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11592
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8114
          }
        ]
      },
      {
        "id": "5004908-v3",
        "nome": "Marcos Sanches Alves",
        "nomeUrna": "Marcos Sanches",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 6700,
        "salarioLiquido": 4958,
        "verbaIndenizatoriaMedia": 4830,
        "gastosGabineteAno": 57960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 22025
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16229
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11592
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8114
          }
        ]
      },
      {
        "id": "5004908-v4",
        "nome": "Camila Ferreira Martins",
        "nomeUrna": "Camila do Jaraguari",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 6500,
        "salarioLiquido": 4810,
        "verbaIndenizatoriaMedia": 4090,
        "gastosGabineteAno": 49080,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 18650
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13742
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9816
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6871
          }
        ]
      },
      {
        "id": "5004908-v5",
        "nome": "Silvio Campestrini Barros",
        "nomeUrna": "Silvio Campestrini",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 6300,
        "salarioLiquido": 4662,
        "verbaIndenizatoriaMedia": 4120,
        "gastosGabineteAno": 49440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 18787
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13843
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9888
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6922
          }
        ]
      },
      {
        "id": "5004908-v6",
        "nome": "Sandra Pereira Souza",
        "nomeUrna": "Sandra Pereira",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 6400,
        "salarioLiquido": 4736,
        "verbaIndenizatoriaMedia": 4300,
        "gastosGabineteAno": 51600,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19608
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14448
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10320
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7224
          }
        ]
      },
      {
        "id": "5004908-v7",
        "nome": "José Pereira Pereira",
        "nomeUrna": "José Pereira",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 6500,
        "salarioLiquido": 4810,
        "verbaIndenizatoriaMedia": 4290,
        "gastosGabineteAno": 51480,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19562
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14414
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10296
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7207
          }
        ]
      },
      {
        "id": "5004908-v8",
        "nome": "Marcelo Freitas Lima",
        "nomeUrna": "Marcelo Freitas",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 6100,
        "salarioLiquido": 4514,
        "verbaIndenizatoriaMedia": 3280,
        "gastosGabineteAno": 39360,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 14957
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11021
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7872
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5510
          }
        ]
      },
      {
        "id": "5004908-v9",
        "nome": "Sandra Alves Pacheco",
        "nomeUrna": "Sandra do Jaraguari",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 6700,
        "salarioLiquido": 4958,
        "verbaIndenizatoriaMedia": 4870,
        "gastosGabineteAno": 58440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 22207
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16363
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11688
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8182
          }
        ]
      }
    ]
  },
  {
    "ibge": 5008008,
    "nome": "Terenos",
    "regiao": "Caminho dos Ipês",
    "regiaoCor": "#EA580C",
    "populacao": 17638,
    "lat": -20.442,
    "lng": -54.86,
    "prefeito": {
      "nome": "Henrique Budke",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Dr. Arlindo Landolfi (Republicanos)"
    },
    "financas": {
      "dividaAtiva": 17500000,
      "dividaConsolidada": 8199999.999999999,
      "dividaPorHabitante": 465,
      "receitaPrevista": 130000000,
      "receitaRealizada": 130432283,
      "despesaExecutada": 119769053,
      "gastoLegislativoTotal": 1825100,
      "gastoLegislativoPorHabitante": 103.48,
      "indiceTransparenciaTCE": 8.5,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 11,
      "gastoMedioMensalGabinete": 4764,
      "portalUrl": "https://www.camaraterenos.ms.gov.br/",
      "prefeituraUrl": "https://terenos.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/terenos/panorama"
    },
    "vereadores": [
      {
        "id": "5008008-v1",
        "nome": "Edson Lima Rezende",
        "nomeUrna": "Edson Lima",
        "partido": "PSD",
        "cargo": "Presidente da Câmara",
        "salarioBase": 10400,
        "salarioLiquido": 7696,
        "verbaIndenizatoriaMedia": 6160,
        "gastosGabineteAno": 73920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 28090
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 20698
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14784
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10349
          }
        ]
      },
      {
        "id": "5008008-v2",
        "nome": "Sandra Carvalho Ferreira",
        "nomeUrna": "Sandra Carvalho",
        "partido": "UNIÃO",
        "cargo": "1º Secretário",
        "salarioBase": 7400,
        "salarioLiquido": 5476,
        "verbaIndenizatoriaMedia": 4900,
        "gastosGabineteAno": 58800,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 22344
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16464
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11760
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8232
          }
        ]
      },
      {
        "id": "5008008-v3",
        "nome": "Paulo Araújo Guedes",
        "nomeUrna": "Paulo Araújo",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 7900,
        "salarioLiquido": 5846,
        "verbaIndenizatoriaMedia": 6020,
        "gastosGabineteAno": 72240,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 27451
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 20227
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14448
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10114
          }
        ]
      },
      {
        "id": "5008008-v4",
        "nome": "Silvio Ferreira Pereira",
        "nomeUrna": "Silvio Ferreira",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 7100,
        "salarioLiquido": 5254,
        "verbaIndenizatoriaMedia": 5940,
        "gastosGabineteAno": 71280,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 27086
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19958
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14256
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9979
          }
        ]
      },
      {
        "id": "5008008-v5",
        "nome": "Cristiane Albuquerque Melo",
        "nomeUrna": "Cristiane do Terenos",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 7500,
        "salarioLiquido": 5550,
        "verbaIndenizatoriaMedia": 5860,
        "gastosGabineteAno": 70320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 26722
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19690
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14064
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9845
          }
        ]
      },
      {
        "id": "5008008-v6",
        "nome": "Patrícia Campestrini Melo",
        "nomeUrna": "Patrícia do Terenos",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 7600,
        "salarioLiquido": 5624,
        "verbaIndenizatoriaMedia": 4730,
        "gastosGabineteAno": 56760,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21569
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15893
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11352
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7946
          }
        ]
      },
      {
        "id": "5008008-v7",
        "nome": "Camila Carvalho Campestrini",
        "nomeUrna": "Camila do Terenos",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 7300,
        "salarioLiquido": 5402,
        "verbaIndenizatoriaMedia": 3840,
        "gastosGabineteAno": 46080,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17510
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12902
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9216
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6451
          }
        ]
      },
      {
        "id": "5008008-v8",
        "nome": "José Moreira Nogueira",
        "nomeUrna": "José Moreira",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 7800,
        "salarioLiquido": 5772,
        "verbaIndenizatoriaMedia": 5830,
        "gastosGabineteAno": 69960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 26585
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19589
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13992
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9794
          }
        ]
      },
      {
        "id": "5008008-v9",
        "nome": "José Albuquerque Sanches",
        "nomeUrna": "José Albuquerque",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 7900,
        "salarioLiquido": 5846,
        "verbaIndenizatoriaMedia": 3490,
        "gastosGabineteAno": 41880,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15914
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11726
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8376
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5863
          }
        ]
      },
      {
        "id": "5008008-v10",
        "nome": "Patrícia Freitas Dias",
        "nomeUrna": "Patrícia do Terenos",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 7800,
        "salarioLiquido": 5772,
        "verbaIndenizatoriaMedia": 5380,
        "gastosGabineteAno": 64560,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24533
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18077
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12912
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9038
          }
        ]
      },
      {
        "id": "5008008-v11",
        "nome": "Eduardo Dias Melo",
        "nomeUrna": "Eduardo do Terenos",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 7900,
        "salarioLiquido": 5846,
        "verbaIndenizatoriaMedia": 3960,
        "gastosGabineteAno": 47520,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 18058
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13306
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9504
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6653
          }
        ]
      }
    ]
  },
  {
    "ibge": 5003488,
    "nome": "Dois Irmãos do Buriti",
    "regiao": "Caminho dos Ipês",
    "regiaoCor": "#EA580C",
    "populacao": 11132,
    "lat": -20.681,
    "lng": -55.296,
    "prefeito": {
      "nome": "Japão",
      "partido": "MDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Esiel Tagliafero (Kalango) (PSDB)"
    },
    "financas": {
      "dividaAtiva": 10900000,
      "dividaConsolidada": 5000000,
      "dividaPorHabitante": 449,
      "receitaPrevista": 85000000,
      "receitaRealizada": 86790088,
      "despesaExecutada": 82727553,
      "gastoLegislativoTotal": 1236860,
      "gastoLegislativoPorHabitante": 111.11,
      "indiceTransparenciaTCE": 9.5,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 2672,
      "portalUrl": "https://www.camaradoisirmaosdoburiti.ms.gov.br/",
      "prefeituraUrl": "https://doisirmaosdoburiti.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/dois-irmaos-do-buriti/panorama"
    },
    "vereadores": [
      {
        "id": "5003488-v1",
        "nome": "Lucas Guedes Dias",
        "nomeUrna": "Lucas Guedes",
        "partido": "PODE",
        "cargo": "Presidente da Câmara",
        "salarioBase": 10900,
        "salarioLiquido": 8066,
        "verbaIndenizatoriaMedia": 2080,
        "gastosGabineteAno": 24960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 9485
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 6989
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 4992
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3494
          }
        ]
      },
      {
        "id": "5003488-v2",
        "nome": "Fernando Martins Gomes",
        "nomeUrna": "Fernando Martins",
        "partido": "PDT",
        "cargo": "1º Secretário",
        "salarioBase": 7500,
        "salarioLiquido": 5550,
        "verbaIndenizatoriaMedia": 3020,
        "gastosGabineteAno": 36240,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 13771
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10147
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7248
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5074
          }
        ]
      },
      {
        "id": "5003488-v3",
        "nome": "Juliana Nogueira Martins",
        "nomeUrna": "Juliana do Dois",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 7500,
        "salarioLiquido": 5550,
        "verbaIndenizatoriaMedia": 2420,
        "gastosGabineteAno": 29040,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 11035
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 8131
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5808
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4066
          }
        ]
      },
      {
        "id": "5003488-v4",
        "nome": "Silvio Araújo Miranda",
        "nomeUrna": "Silvio Araújo",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 7800,
        "salarioLiquido": 5772,
        "verbaIndenizatoriaMedia": 3300,
        "gastosGabineteAno": 39600,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15048
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11088
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7920
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5544
          }
        ]
      },
      {
        "id": "5003488-v5",
        "nome": "Patrícia Moreira Rezende",
        "nomeUrna": "Patrícia do Dois",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 7400,
        "salarioLiquido": 5476,
        "verbaIndenizatoriaMedia": 2750,
        "gastosGabineteAno": 33000,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 12540
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 9240
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6600
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4620
          }
        ]
      },
      {
        "id": "5003488-v6",
        "nome": "Camila Ribeiro Pereira",
        "nomeUrna": "Camila Ribeiro",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 7200,
        "salarioLiquido": 5328,
        "verbaIndenizatoriaMedia": 3080,
        "gastosGabineteAno": 36960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 14045
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10349
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7392
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5174
          }
        ]
      },
      {
        "id": "5003488-v7",
        "nome": "Fernando Barbosa Barros",
        "nomeUrna": "Fernando do Dois",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 7700,
        "salarioLiquido": 5698,
        "verbaIndenizatoriaMedia": 2340,
        "gastosGabineteAno": 28080,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 10670
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 7862
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5616
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3931
          }
        ]
      },
      {
        "id": "5003488-v8",
        "nome": "Marcos Melo Moreira",
        "nomeUrna": "Marcos Melo",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 7100,
        "salarioLiquido": 5254,
        "verbaIndenizatoriaMedia": 2000,
        "gastosGabineteAno": 24000,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 9120
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 6720
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 4800
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3360
          }
        ]
      },
      {
        "id": "5003488-v9",
        "nome": "Luciana Ferreira Campestrini",
        "nomeUrna": "Luciana Ferreira",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 7900,
        "salarioLiquido": 5846,
        "verbaIndenizatoriaMedia": 3390,
        "gastosGabineteAno": 40680,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15458
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11390
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8136
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5695
          }
        ]
      }
    ]
  },
  {
    "ibge": 5002704,
    "nome": "Campo Grande",
    "regiao": "Caminho dos Ipês",
    "regiaoCor": "#EA580C",
    "populacao": 897938,
    "lat": -20.469,
    "lng": -54.62,
    "prefeito": {
      "nome": "Adriane Lopes",
      "partido": "PP",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Dra. Camilla (Avante)"
    },
    "financas": {
      "dividaAtiva": 1850000000,
      "dividaConsolidada": 980500000,
      "dividaPorHabitante": 1092,
      "receitaPrevista": 6520000000,
      "receitaRealizada": 6452430750,
      "despesaExecutada": 6187603305,
      "gastoLegislativoTotal": 15711430,
      "gastoLegislativoPorHabitante": 17.5,
      "indiceTransparenciaTCE": 9.7,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 29,
      "gastoMedioMensalGabinete": 17600,
      "portalUrl": "https://camara.ms.gov.br/",
      "prefeituraUrl": "https://www.campogrande.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/campo-grande/panorama"
    },
    "vereadores": [
      {
        "id": "5002704-v1",
        "nome": "Sandra Ribeiro Pereira",
        "nomeUrna": "Sandra Ribeiro",
        "partido": "REPUBLICANOS",
        "cargo": "Presidente da Câmara",
        "salarioBase": 26700,
        "salarioLiquido": 19758,
        "verbaIndenizatoriaMedia": 15280,
        "gastosGabineteAno": 183360,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 69677
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 51341
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 36672
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 25670
          }
        ]
      },
      {
        "id": "5002704-v2",
        "nome": "Maria Nogueira Pacheco",
        "nomeUrna": "Maria Nogueira",
        "partido": "PSD",
        "cargo": "1º Secretário",
        "salarioBase": 24000,
        "salarioLiquido": 17760,
        "verbaIndenizatoriaMedia": 17360,
        "gastosGabineteAno": 208320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 79162
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 58330
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 41664
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 29165
          }
        ]
      },
      {
        "id": "5002704-v3",
        "nome": "Silvio Dias Rezende",
        "nomeUrna": "Silvio do Campo",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 23800,
        "salarioLiquido": 17612,
        "verbaIndenizatoriaMedia": 16240,
        "gastosGabineteAno": 194880,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 74054
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 54566
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 38976
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 27283
          }
        ]
      },
      {
        "id": "5002704-v4",
        "nome": "Lucas Ribeiro Rezende",
        "nomeUrna": "Lucas Ribeiro",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 24000,
        "salarioLiquido": 17760,
        "verbaIndenizatoriaMedia": 15300,
        "gastosGabineteAno": 183600,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 69768
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 51408
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 36720
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 25704
          }
        ]
      },
      {
        "id": "5002704-v5",
        "nome": "Maria Nogueira Freitas",
        "nomeUrna": "Maria Nogueira",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 24000,
        "salarioLiquido": 17760,
        "verbaIndenizatoriaMedia": 22780,
        "gastosGabineteAno": 273360,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 103877
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 76541
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 54672
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 38270
          }
        ]
      },
      {
        "id": "5002704-v6",
        "nome": "Rogério Guedes Sanches",
        "nomeUrna": "Rogério do Campo",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 24100,
        "salarioLiquido": 17834,
        "verbaIndenizatoriaMedia": 20800,
        "gastosGabineteAno": 249600,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 94848
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 69888
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 49920
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 34944
          }
        ]
      },
      {
        "id": "5002704-v7",
        "nome": "Roberto Ribeiro Guedes",
        "nomeUrna": "Roberto do Campo",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 23600,
        "salarioLiquido": 17464,
        "verbaIndenizatoriaMedia": 14510,
        "gastosGabineteAno": 174120,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 66166
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 48754
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 34824
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 24377
          }
        ]
      },
      {
        "id": "5002704-v8",
        "nome": "Aline Moreira Oliveira",
        "nomeUrna": "Aline do Campo",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 23400,
        "salarioLiquido": 17316,
        "verbaIndenizatoriaMedia": 15350,
        "gastosGabineteAno": 184200,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 69996
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 51576
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 36840
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 25788
          }
        ]
      },
      {
        "id": "5002704-v9",
        "nome": "Patrícia Campestrini Martins",
        "nomeUrna": "Patrícia Campestrini",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 23400,
        "salarioLiquido": 17316,
        "verbaIndenizatoriaMedia": 22370,
        "gastosGabineteAno": 268440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 102007
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 75163
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 53688
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 37582
          }
        ]
      },
      {
        "id": "5002704-v10",
        "nome": "Marcos Melo Dias",
        "nomeUrna": "Marcos do Campo",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 23700,
        "salarioLiquido": 17538,
        "verbaIndenizatoriaMedia": 16460,
        "gastosGabineteAno": 197520,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 75058
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 55306
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 39504
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 27653
          }
        ]
      },
      {
        "id": "5002704-v11",
        "nome": "Edson Silva Rezende",
        "nomeUrna": "Edson do Campo",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 23900,
        "salarioLiquido": 17686,
        "verbaIndenizatoriaMedia": 21630,
        "gastosGabineteAno": 259560,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 98633
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 72677
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 51912
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 36338
          }
        ]
      },
      {
        "id": "5002704-v12",
        "nome": "Maria Oliveira Albuquerque",
        "nomeUrna": "Maria do Campo",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 23800,
        "salarioLiquido": 17612,
        "verbaIndenizatoriaMedia": 21720,
        "gastosGabineteAno": 260640,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 99043
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 72979
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 52128
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 36490
          }
        ]
      },
      {
        "id": "5002704-v13",
        "nome": "Luciana Sanches Silva",
        "nomeUrna": "Luciana Sanches",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 23600,
        "salarioLiquido": 17464,
        "verbaIndenizatoriaMedia": 22230,
        "gastosGabineteAno": 266760,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 101369
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 74693
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 53352
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 37346
          }
        ]
      },
      {
        "id": "5002704-v14",
        "nome": "Maria Rezende Pacheco",
        "nomeUrna": "Maria Rezende",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 23300,
        "salarioLiquido": 17242,
        "verbaIndenizatoriaMedia": 15090,
        "gastosGabineteAno": 181080,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 68810
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 50702
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 36216
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 25351
          }
        ]
      },
      {
        "id": "5002704-v15",
        "nome": "Sandra Lima Barbosa",
        "nomeUrna": "Sandra Lima",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 23400,
        "salarioLiquido": 17316,
        "verbaIndenizatoriaMedia": 19030,
        "gastosGabineteAno": 228360,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 86777
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 63941
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 45672
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 31970
          }
        ]
      },
      {
        "id": "5002704-v16",
        "nome": "Márcio Oliveira Barbosa",
        "nomeUrna": "Márcio Oliveira",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 23600,
        "salarioLiquido": 17464,
        "verbaIndenizatoriaMedia": 19590,
        "gastosGabineteAno": 235080,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 89330
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 65822
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 47016
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 32911
          }
        ]
      },
      {
        "id": "5002704-v17",
        "nome": "Rogério Costa Moreira",
        "nomeUrna": "Rogério Costa",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 23400,
        "salarioLiquido": 17316,
        "verbaIndenizatoriaMedia": 16180,
        "gastosGabineteAno": 194160,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 73781
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 54365
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 38832
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 27182
          }
        ]
      },
      {
        "id": "5002704-v18",
        "nome": "Lucas Campestrini Gomes",
        "nomeUrna": "Lucas do Campo",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 24200,
        "salarioLiquido": 17908,
        "verbaIndenizatoriaMedia": 14360,
        "gastosGabineteAno": 172320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 65482
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 48250
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 34464
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 24125
          }
        ]
      },
      {
        "id": "5002704-v19",
        "nome": "Marcelo Miranda Costa",
        "nomeUrna": "Marcelo Miranda",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 23900,
        "salarioLiquido": 17686,
        "verbaIndenizatoriaMedia": 20190,
        "gastosGabineteAno": 242280,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 92066
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 67838
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 48456
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 33919
          }
        ]
      },
      {
        "id": "5002704-v20",
        "nome": "Camila Martins Santos",
        "nomeUrna": "Camila do Campo",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 24000,
        "salarioLiquido": 17760,
        "verbaIndenizatoriaMedia": 14940,
        "gastosGabineteAno": 179280,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 68126
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 50198
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 35856
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 25099
          }
        ]
      },
      {
        "id": "5002704-v21",
        "nome": "Edson Silva Gomes",
        "nomeUrna": "Edson do Campo",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 23800,
        "salarioLiquido": 17612,
        "verbaIndenizatoriaMedia": 19200,
        "gastosGabineteAno": 230400,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 87552
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 64512
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 46080
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 32256
          }
        ]
      },
      {
        "id": "5002704-v22",
        "nome": "José Ferreira Miranda",
        "nomeUrna": "José Ferreira",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 23400,
        "salarioLiquido": 17316,
        "verbaIndenizatoriaMedia": 19480,
        "gastosGabineteAno": 233760,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 88829
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 65453
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 46752
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 32726
          }
        ]
      },
      {
        "id": "5002704-v23",
        "nome": "Renata Santos Costa",
        "nomeUrna": "Renata do Campo",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 23600,
        "salarioLiquido": 17464,
        "verbaIndenizatoriaMedia": 19120,
        "gastosGabineteAno": 229440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 87187
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 64243
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 45888
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 32122
          }
        ]
      },
      {
        "id": "5002704-v24",
        "nome": "Marcos Miranda Santos",
        "nomeUrna": "Marcos do Campo",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 24000,
        "salarioLiquido": 17760,
        "verbaIndenizatoriaMedia": 22470,
        "gastosGabineteAno": 269640,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 102463
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 75499
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 53928
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 37750
          }
        ]
      },
      {
        "id": "5002704-v25",
        "nome": "Juliana Oliveira Araújo",
        "nomeUrna": "Juliana do Campo",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 23600,
        "salarioLiquido": 17464,
        "verbaIndenizatoriaMedia": 22440,
        "gastosGabineteAno": 269280,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 102326
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 75398
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 53856
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 37699
          }
        ]
      },
      {
        "id": "5002704-v26",
        "nome": "Silvio Lima Rocha",
        "nomeUrna": "Silvio do Campo",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 23800,
        "salarioLiquido": 17612,
        "verbaIndenizatoriaMedia": 22610,
        "gastosGabineteAno": 271320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 103102
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 75970
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 54264
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 37985
          }
        ]
      },
      {
        "id": "5002704-v27",
        "nome": "Luiz Santos Sanches",
        "nomeUrna": "Luiz do Campo",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 23900,
        "salarioLiquido": 17686,
        "verbaIndenizatoriaMedia": 15540,
        "gastosGabineteAno": 186480,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 70862
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 52214
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 37296
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 26107
          }
        ]
      },
      {
        "id": "5002704-v28",
        "nome": "Camila Carvalho Carvalho",
        "nomeUrna": "Camila do Campo",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 24100,
        "salarioLiquido": 17834,
        "verbaIndenizatoriaMedia": 21050,
        "gastosGabineteAno": 252600,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 95988
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 70728
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 50520
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 35364
          }
        ]
      },
      {
        "id": "5002704-v29",
        "nome": "Eduardo Lima Nogueira",
        "nomeUrna": "Eduardo Lima",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 23900,
        "salarioLiquido": 17686,
        "verbaIndenizatoriaMedia": 19110,
        "gastosGabineteAno": 229320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 87142
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 64210
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 45864
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 32105
          }
        ]
      }
    ]
  },
  {
    "ibge": 5007109,
    "nome": "Ribas do Rio Pardo",
    "regiao": "Caminho dos Ipês",
    "regiaoCor": "#EA580C",
    "populacao": 23150,
    "lat": -20.443,
    "lng": -53.759,
    "prefeito": {
      "nome": "Roberson Moureira",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Paulo Leocádio (Paulinho) (PP)"
    },
    "financas": {
      "dividaAtiva": 45200000,
      "dividaConsolidada": 21000000,
      "dividaPorHabitante": 907,
      "receitaPrevista": 390000000,
      "receitaRealizada": 382572836,
      "despesaExecutada": 367307703,
      "gastoLegislativoTotal": 2330360,
      "gastoLegislativoPorHabitante": 100.66,
      "indiceTransparenciaTCE": 7.9,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 11,
      "gastoMedioMensalGabinete": 6519,
      "portalUrl": "https://www.camararibasdoriopardo.ms.gov.br/",
      "prefeituraUrl": "https://ribasdoriopardo.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/ribas-do-rio-pardo/panorama"
    },
    "vereadores": [
      {
        "id": "5007109-v1",
        "nome": "Lucas Souza Costa",
        "nomeUrna": "Lucas do Ribas",
        "partido": "MDB",
        "cargo": "Presidente da Câmara",
        "salarioBase": 12600,
        "salarioLiquido": 9324,
        "verbaIndenizatoriaMedia": 6230,
        "gastosGabineteAno": 74760,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 28409
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 20933
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14952
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10466
          }
        ]
      },
      {
        "id": "5007109-v2",
        "nome": "Aline Melo Rezende",
        "nomeUrna": "Aline do Ribas",
        "partido": "REPUBLICANOS",
        "cargo": "1º Secretário",
        "salarioBase": 9600,
        "salarioLiquido": 7104,
        "verbaIndenizatoriaMedia": 5240,
        "gastosGabineteAno": 62880,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 23894
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17606
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12576
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8803
          }
        ]
      },
      {
        "id": "5007109-v3",
        "nome": "Patrícia Araújo Alves",
        "nomeUrna": "Patrícia do Ribas",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 9400,
        "salarioLiquido": 6956,
        "verbaIndenizatoriaMedia": 5070,
        "gastosGabineteAno": 60840,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 23119
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17035
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12168
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8518
          }
        ]
      },
      {
        "id": "5007109-v4",
        "nome": "Fábio Ribeiro Melo",
        "nomeUrna": "Fábio do Ribas",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 5830,
        "gastosGabineteAno": 69960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 26585
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19589
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13992
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9794
          }
        ]
      },
      {
        "id": "5007109-v5",
        "nome": "Eduardo Pereira Campestrini",
        "nomeUrna": "Eduardo do Ribas",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 7680,
        "gastosGabineteAno": 92160,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 35021
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 25805
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 18432
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 12902
          }
        ]
      },
      {
        "id": "5007109-v6",
        "nome": "Antônio Melo Melo",
        "nomeUrna": "Antônio do Ribas",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 10200,
        "salarioLiquido": 7548,
        "verbaIndenizatoriaMedia": 5980,
        "gastosGabineteAno": 71760,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 27269
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 20093
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14352
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10046
          }
        ]
      },
      {
        "id": "5007109-v7",
        "nome": "Rafael Barbosa Rocha",
        "nomeUrna": "Rafael do Ribas",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 9900,
        "salarioLiquido": 7326,
        "verbaIndenizatoriaMedia": 8260,
        "gastosGabineteAno": 99120,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 37666
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 27754
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 19824
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 13877
          }
        ]
      },
      {
        "id": "5007109-v8",
        "nome": "Silvio Melo Araújo",
        "nomeUrna": "Silvio Melo",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 7810,
        "gastosGabineteAno": 93720,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 35614
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 26242
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 18744
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 13121
          }
        ]
      },
      {
        "id": "5007109-v9",
        "nome": "Luiz Silva Barbosa",
        "nomeUrna": "Luiz Silva",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 10200,
        "salarioLiquido": 7548,
        "verbaIndenizatoriaMedia": 7760,
        "gastosGabineteAno": 93120,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 35386
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 26074
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 18624
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 13037
          }
        ]
      },
      {
        "id": "5007109-v10",
        "nome": "Marcelo Martins Alves",
        "nomeUrna": "Marcelo Martins",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 6000,
        "gastosGabineteAno": 72000,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 27360
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 20160
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14400
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10080
          }
        ]
      },
      {
        "id": "5007109-v11",
        "nome": "Roberto Guedes Pereira",
        "nomeUrna": "Roberto Guedes",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 6420,
        "gastosGabineteAno": 77040,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 29275
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 21571
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 15408
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10786
          }
        ]
      }
    ]
  },
  {
    "ibge": 5007901,
    "nome": "Sidrolândia",
    "regiao": "Caminho dos Ipês",
    "regiaoCor": "#EA580C",
    "populacao": 47118,
    "lat": -20.932,
    "lng": -54.961,
    "prefeito": {
      "nome": "Rodrigo Basso",
      "partido": "PL",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Chris Fiuza (MDB)"
    },
    "financas": {
      "dividaAtiva": 46200000,
      "dividaConsolidada": 23000000,
      "dividaPorHabitante": 488,
      "receitaPrevista": 345000000,
      "receitaRealizada": 347428556,
      "despesaExecutada": 324004664,
      "gastoLegislativoTotal": 2818870,
      "gastoLegislativoPorHabitante": 59.83,
      "indiceTransparenciaTCE": 9.7,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 15,
      "gastoMedioMensalGabinete": 4635,
      "portalUrl": "https://www.camarasidrolandia.ms.gov.br/",
      "prefeituraUrl": "https://sidrolandia.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/sidrolandia/panorama"
    },
    "vereadores": [
      {
        "id": "5007901-v1",
        "nome": "Luciana Lima Miranda",
        "nomeUrna": "Luciana do Sidrolândia",
        "partido": "PODE",
        "cargo": "Presidente da Câmara",
        "salarioBase": 13100,
        "salarioLiquido": 9694,
        "verbaIndenizatoriaMedia": 5430,
        "gastosGabineteAno": 65160,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24761
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18245
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13032
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9122
          }
        ]
      },
      {
        "id": "5007901-v2",
        "nome": "Paulo Guedes Costa",
        "nomeUrna": "Paulo Guedes",
        "partido": "PT",
        "cargo": "1º Secretário",
        "salarioBase": 9700,
        "salarioLiquido": 7178,
        "verbaIndenizatoriaMedia": 5830,
        "gastosGabineteAno": 69960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 26585
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19589
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13992
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9794
          }
        ]
      },
      {
        "id": "5007901-v3",
        "nome": "Lucas Moreira Campestrini",
        "nomeUrna": "Lucas Moreira",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 9600,
        "salarioLiquido": 7104,
        "verbaIndenizatoriaMedia": 3900,
        "gastosGabineteAno": 46800,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17784
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13104
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9360
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6552
          }
        ]
      },
      {
        "id": "5007901-v4",
        "nome": "Carlos Santos Melo",
        "nomeUrna": "Carlos Santos",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 10100,
        "salarioLiquido": 7474,
        "verbaIndenizatoriaMedia": 3470,
        "gastosGabineteAno": 41640,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15823
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11659
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8328
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5830
          }
        ]
      },
      {
        "id": "5007901-v5",
        "nome": "Fábio Santos Miranda",
        "nomeUrna": "Fábio do Sidrolândia",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 9300,
        "salarioLiquido": 6882,
        "verbaIndenizatoriaMedia": 5560,
        "gastosGabineteAno": 66720,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 25354
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18682
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13344
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9341
          }
        ]
      },
      {
        "id": "5007901-v6",
        "nome": "Fábio Melo Moreira",
        "nomeUrna": "Fábio Melo",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 10300,
        "salarioLiquido": 7622,
        "verbaIndenizatoriaMedia": 3760,
        "gastosGabineteAno": 45120,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17146
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12634
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9024
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6317
          }
        ]
      },
      {
        "id": "5007901-v7",
        "nome": "João Miranda Costa",
        "nomeUrna": "João do Sidrolândia",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 9700,
        "salarioLiquido": 7178,
        "verbaIndenizatoriaMedia": 5090,
        "gastosGabineteAno": 61080,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 23210
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17102
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12216
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8551
          }
        ]
      },
      {
        "id": "5007901-v8",
        "nome": "Roberto Gomes Dias",
        "nomeUrna": "Roberto do Sidrolândia",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 10100,
        "salarioLiquido": 7474,
        "verbaIndenizatoriaMedia": 5930,
        "gastosGabineteAno": 71160,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 27041
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19925
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14232
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9962
          }
        ]
      },
      {
        "id": "5007901-v9",
        "nome": "Lucas Dias Ferreira",
        "nomeUrna": "Lucas do Sidrolândia",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 10000,
        "salarioLiquido": 7400,
        "verbaIndenizatoriaMedia": 3350,
        "gastosGabineteAno": 40200,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15276
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11256
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8040
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5628
          }
        ]
      },
      {
        "id": "5007901-v10",
        "nome": "Cristiane Barbosa Pacheco",
        "nomeUrna": "Cristiane do Sidrolândia",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 10100,
        "salarioLiquido": 7474,
        "verbaIndenizatoriaMedia": 5210,
        "gastosGabineteAno": 62520,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 23758
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17506
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12504
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8753
          }
        ]
      },
      {
        "id": "5007901-v11",
        "nome": "Cristiane Pacheco Lima",
        "nomeUrna": "Cristiane do Sidrolândia",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 10000,
        "salarioLiquido": 7400,
        "verbaIndenizatoriaMedia": 4760,
        "gastosGabineteAno": 57120,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21706
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15994
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11424
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7997
          }
        ]
      },
      {
        "id": "5007901-v12",
        "nome": "Fábio Rocha Rocha",
        "nomeUrna": "Fábio do Sidrolândia",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 9600,
        "salarioLiquido": 7104,
        "verbaIndenizatoriaMedia": 4770,
        "gastosGabineteAno": 57240,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21751
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16027
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11448
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8014
          }
        ]
      },
      {
        "id": "5007901-v13",
        "nome": "Luciana Freitas Moreira",
        "nomeUrna": "Luciana do Sidrolândia",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 3460,
        "gastosGabineteAno": 41520,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15778
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11626
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8304
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5813
          }
        ]
      },
      {
        "id": "5007901-v14",
        "nome": "Sandra Freitas Alves",
        "nomeUrna": "Sandra Freitas",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 10200,
        "salarioLiquido": 7548,
        "verbaIndenizatoriaMedia": 3490,
        "gastosGabineteAno": 41880,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15914
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11726
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8376
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5863
          }
        ]
      },
      {
        "id": "5007901-v15",
        "nome": "Edson Araújo Guedes",
        "nomeUrna": "Edson do Sidrolândia",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 9400,
        "salarioLiquido": 6956,
        "verbaIndenizatoriaMedia": 3870,
        "gastosGabineteAno": 46440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17647
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13003
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9288
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6502
          }
        ]
      }
    ]
  },
  {
    "ibge": 5006002,
    "nome": "Nova Alvorada do Sul",
    "regiao": "Caminho dos Ipês",
    "regiaoCor": "#EA580C",
    "populacao": 21822,
    "lat": -21.465,
    "lng": -54.382,
    "prefeito": {
      "nome": "José Paulo Paleari",
      "partido": "PP",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Valdemar Rocha (PL)"
    },
    "financas": {
      "dividaAtiva": 24500000,
      "dividaConsolidada": 11900000,
      "dividaPorHabitante": 545,
      "receitaPrevista": 170000000,
      "receitaRealizada": 166724258,
      "despesaExecutada": 164501371,
      "gastoLegislativoTotal": 2077220,
      "gastoLegislativoPorHabitante": 95.19,
      "indiceTransparenciaTCE": 8.7,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 11,
      "gastoMedioMensalGabinete": 4517,
      "portalUrl": "https://www.camaranovaalvoradadosul.ms.gov.br/",
      "prefeituraUrl": "https://novaalvoradadosul.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/nova-alvorada-do-sul/panorama"
    },
    "vereadores": [
      {
        "id": "5006002-v1",
        "nome": "Camila Nogueira Silva",
        "nomeUrna": "Camila do Nova",
        "partido": "PODE",
        "cargo": "Presidente da Câmara",
        "salarioBase": 12600,
        "salarioLiquido": 9324,
        "verbaIndenizatoriaMedia": 5850,
        "gastosGabineteAno": 70200,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 26676
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19656
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14040
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9828
          }
        ]
      },
      {
        "id": "5006002-v2",
        "nome": "Juliana Pereira Miranda",
        "nomeUrna": "Juliana do Nova",
        "partido": "PP",
        "cargo": "1º Secretário",
        "salarioBase": 9600,
        "salarioLiquido": 7104,
        "verbaIndenizatoriaMedia": 3810,
        "gastosGabineteAno": 45720,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17374
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12802
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9144
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6401
          }
        ]
      },
      {
        "id": "5006002-v3",
        "nome": "Luiz Guedes Lima",
        "nomeUrna": "Luiz do Nova",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 10300,
        "salarioLiquido": 7622,
        "verbaIndenizatoriaMedia": 3740,
        "gastosGabineteAno": 44880,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17054
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12566
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8976
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6283
          }
        ]
      },
      {
        "id": "5006002-v4",
        "nome": "Márcio Pacheco Oliveira",
        "nomeUrna": "Márcio do Nova",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 10100,
        "salarioLiquido": 7474,
        "verbaIndenizatoriaMedia": 4240,
        "gastosGabineteAno": 50880,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19334
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14246
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10176
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7123
          }
        ]
      },
      {
        "id": "5006002-v5",
        "nome": "Renata Santos Carvalho",
        "nomeUrna": "Renata Santos",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 9900,
        "salarioLiquido": 7326,
        "verbaIndenizatoriaMedia": 3390,
        "gastosGabineteAno": 40680,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15458
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11390
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8136
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5695
          }
        ]
      },
      {
        "id": "5006002-v6",
        "nome": "Roberto Martins Araújo",
        "nomeUrna": "Roberto Martins",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 9700,
        "salarioLiquido": 7178,
        "verbaIndenizatoriaMedia": 5200,
        "gastosGabineteAno": 62400,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 23712
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17472
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12480
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8736
          }
        ]
      },
      {
        "id": "5006002-v7",
        "nome": "Rogério Silva Sanches",
        "nomeUrna": "Rogério Silva",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 4530,
        "gastosGabineteAno": 54360,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 20657
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15221
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10872
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7610
          }
        ]
      },
      {
        "id": "5006002-v8",
        "nome": "Luiz Albuquerque Ferreira",
        "nomeUrna": "Luiz do Nova",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 10100,
        "salarioLiquido": 7474,
        "verbaIndenizatoriaMedia": 3660,
        "gastosGabineteAno": 43920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 16690
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12298
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8784
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6149
          }
        ]
      },
      {
        "id": "5006002-v9",
        "nome": "Roberto Carvalho Gomes",
        "nomeUrna": "Roberto Carvalho",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 9700,
        "salarioLiquido": 7178,
        "verbaIndenizatoriaMedia": 5780,
        "gastosGabineteAno": 69360,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 26357
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19421
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13872
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9710
          }
        ]
      },
      {
        "id": "5006002-v10",
        "nome": "Camila Santos Araújo",
        "nomeUrna": "Camila Santos",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 10000,
        "salarioLiquido": 7400,
        "verbaIndenizatoriaMedia": 5760,
        "gastosGabineteAno": 69120,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 26266
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19354
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13824
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9677
          }
        ]
      },
      {
        "id": "5006002-v11",
        "nome": "Márcio Moreira Silva",
        "nomeUrna": "Márcio Moreira",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 10000,
        "salarioLiquido": 7400,
        "verbaIndenizatoriaMedia": 3230,
        "gastosGabineteAno": 38760,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 14729
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10853
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7752
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5426
          }
        ]
      }
    ]
  },
  {
    "ibge": 5002159,
    "nome": "Bodoquena",
    "regiao": "Bonito/Serra da Bodoquena",
    "regiaoCor": "#38BDF8",
    "populacao": 8567,
    "lat": -20.539,
    "lng": -56.717,
    "prefeito": {
      "nome": "Girleide",
      "partido": "MDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Ermeson Luna (Garrucha) (PSD)"
    },
    "financas": {
      "dividaAtiva": 8199999.999999999,
      "dividaConsolidada": 3700000,
      "dividaPorHabitante": 432,
      "receitaPrevista": 75000000,
      "receitaRealizada": 71823278,
      "despesaExecutada": 70058143,
      "gastoLegislativoTotal": 1120070,
      "gastoLegislativoPorHabitante": 130.74,
      "indiceTransparenciaTCE": 8.1,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 2762,
      "portalUrl": "https://www.camarabodoquena.ms.gov.br/",
      "prefeituraUrl": "https://bodoquena.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/bodoquena/panorama"
    },
    "vereadores": [
      {
        "id": "5002159-v1",
        "nome": "Edson Oliveira Rezende",
        "nomeUrna": "Edson Oliveira",
        "partido": "PODE",
        "cargo": "Presidente da Câmara",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 2700,
        "gastosGabineteAno": 32400,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 12312
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 9072
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6480
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4536
          }
        ]
      },
      {
        "id": "5002159-v2",
        "nome": "Maria Carvalho Barbosa",
        "nomeUrna": "Maria Carvalho",
        "partido": "PSD",
        "cargo": "1º Secretário",
        "salarioBase": 6100,
        "salarioLiquido": 4514,
        "verbaIndenizatoriaMedia": 2620,
        "gastosGabineteAno": 31440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 11947
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 8803
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6288
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4402
          }
        ]
      },
      {
        "id": "5002159-v3",
        "nome": "Eduardo Oliveira Araújo",
        "nomeUrna": "Eduardo Oliveira",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 6500,
        "salarioLiquido": 4810,
        "verbaIndenizatoriaMedia": 3290,
        "gastosGabineteAno": 39480,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15002
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11054
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7896
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5527
          }
        ]
      },
      {
        "id": "5002159-v4",
        "nome": "João Silva Miranda",
        "nomeUrna": "João Silva",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 6700,
        "salarioLiquido": 4958,
        "verbaIndenizatoriaMedia": 3040,
        "gastosGabineteAno": 36480,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 13862
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10214
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7296
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5107
          }
        ]
      },
      {
        "id": "5002159-v5",
        "nome": "Juliana Carvalho Pacheco",
        "nomeUrna": "Juliana Carvalho",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 6900,
        "salarioLiquido": 5106,
        "verbaIndenizatoriaMedia": 3220,
        "gastosGabineteAno": 38640,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 14683
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10819
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7728
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5410
          }
        ]
      },
      {
        "id": "5002159-v6",
        "nome": "Aline Melo Oliveira",
        "nomeUrna": "Aline do Bodoquena",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 6100,
        "salarioLiquido": 4514,
        "verbaIndenizatoriaMedia": 3060,
        "gastosGabineteAno": 36720,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 13954
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10282
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7344
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5141
          }
        ]
      },
      {
        "id": "5002159-v7",
        "nome": "Camila Rocha Rocha",
        "nomeUrna": "Camila do Bodoquena",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 6000,
        "salarioLiquido": 4440,
        "verbaIndenizatoriaMedia": 2480,
        "gastosGabineteAno": 29760,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 11309
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 8333
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5952
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4166
          }
        ]
      },
      {
        "id": "5002159-v8",
        "nome": "Cláudio Martins Alves",
        "nomeUrna": "Cláudio do Bodoquena",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 6500,
        "salarioLiquido": 4810,
        "verbaIndenizatoriaMedia": 2040,
        "gastosGabineteAno": 24480,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 9302
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 6854
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 4896
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3427
          }
        ]
      },
      {
        "id": "5002159-v9",
        "nome": "Juliana Santos Pereira",
        "nomeUrna": "Juliana Santos",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 6800,
        "salarioLiquido": 5032,
        "verbaIndenizatoriaMedia": 3170,
        "gastosGabineteAno": 38040,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 14455
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10651
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7608
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5326
          }
        ]
      }
    ]
  },
  {
    "ibge": 5002209,
    "nome": "Bonito",
    "regiao": "Bonito/Serra da Bodoquena",
    "regiaoCor": "#38BDF8",
    "populacao": 23659,
    "lat": -21.126,
    "lng": -56.481,
    "prefeito": {
      "nome": "Josmail Rodrigues",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Juliane Salvadori (PSDB)"
    },
    "financas": {
      "dividaAtiva": 31200000,
      "dividaConsolidada": 14100000,
      "dividaPorHabitante": 596,
      "receitaPrevista": 185000000,
      "receitaRealizada": 180570650,
      "despesaExecutada": 174417406,
      "gastoLegislativoTotal": 2102360,
      "gastoLegislativoPorHabitante": 88.86,
      "indiceTransparenciaTCE": 8.2,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 11,
      "gastoMedioMensalGabinete": 4944,
      "portalUrl": "https://www.camarabonito.ms.gov.br/",
      "prefeituraUrl": "https://bonito.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/bonito/panorama"
    },
    "vereadores": [
      {
        "id": "5002209-v1",
        "nome": "Roberto Alves Albuquerque",
        "nomeUrna": "Roberto do Bonito",
        "partido": "PT",
        "cargo": "Presidente da Câmara",
        "salarioBase": 12400,
        "salarioLiquido": 9176,
        "verbaIndenizatoriaMedia": 6230,
        "gastosGabineteAno": 74760,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 28409
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 20933
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14952
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10466
          }
        ]
      },
      {
        "id": "5002209-v2",
        "nome": "Marcos Pereira Carvalho",
        "nomeUrna": "Marcos Pereira",
        "partido": "PSB",
        "cargo": "1º Secretário",
        "salarioBase": 10000,
        "salarioLiquido": 7400,
        "verbaIndenizatoriaMedia": 4240,
        "gastosGabineteAno": 50880,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19334
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14246
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10176
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7123
          }
        ]
      },
      {
        "id": "5002209-v3",
        "nome": "José Alves Pacheco",
        "nomeUrna": "José Alves",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 10200,
        "salarioLiquido": 7548,
        "verbaIndenizatoriaMedia": 4030,
        "gastosGabineteAno": 48360,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 18377
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13541
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9672
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6770
          }
        ]
      },
      {
        "id": "5002209-v4",
        "nome": "Edson Rocha Campestrini",
        "nomeUrna": "Edson do Bonito",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 9600,
        "salarioLiquido": 7104,
        "verbaIndenizatoriaMedia": 5840,
        "gastosGabineteAno": 70080,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 26630
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19622
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14016
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9811
          }
        ]
      },
      {
        "id": "5002209-v5",
        "nome": "Sandra Freitas Barbosa",
        "nomeUrna": "Sandra do Bonito",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 3480,
        "gastosGabineteAno": 41760,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15869
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11693
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8352
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5846
          }
        ]
      },
      {
        "id": "5002209-v6",
        "nome": "Ana Alves Ribeiro",
        "nomeUrna": "Ana do Bonito",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 10000,
        "salarioLiquido": 7400,
        "verbaIndenizatoriaMedia": 4370,
        "gastosGabineteAno": 52440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19927
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14683
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10488
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7342
          }
        ]
      },
      {
        "id": "5002209-v7",
        "nome": "Ana Alves Alves",
        "nomeUrna": "Ana do Bonito",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 4620,
        "gastosGabineteAno": 55440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21067
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15523
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11088
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7762
          }
        ]
      },
      {
        "id": "5002209-v8",
        "nome": "Fernando Silva Pacheco",
        "nomeUrna": "Fernando do Bonito",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 9900,
        "salarioLiquido": 7326,
        "verbaIndenizatoriaMedia": 4900,
        "gastosGabineteAno": 58800,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 22344
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16464
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11760
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8232
          }
        ]
      },
      {
        "id": "5002209-v9",
        "nome": "Eduardo Araújo Ferreira",
        "nomeUrna": "Eduardo do Bonito",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 10000,
        "salarioLiquido": 7400,
        "verbaIndenizatoriaMedia": 4260,
        "gastosGabineteAno": 51120,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19426
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14314
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10224
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7157
          }
        ]
      },
      {
        "id": "5002209-v10",
        "nome": "Roberto Miranda Silva",
        "nomeUrna": "Roberto Miranda",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 10100,
        "salarioLiquido": 7474,
        "verbaIndenizatoriaMedia": 6290,
        "gastosGabineteAno": 75480,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 28682
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 21134
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 15096
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10567
          }
        ]
      },
      {
        "id": "5002209-v11",
        "nome": "Luiz Pacheco Dias",
        "nomeUrna": "Luiz Pacheco",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 9700,
        "salarioLiquido": 7178,
        "verbaIndenizatoriaMedia": 3690,
        "gastosGabineteAno": 44280,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 16826
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12398
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8856
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6199
          }
        ]
      }
    ]
  },
  {
    "ibge": 5005806,
    "nome": "Nioaque",
    "regiao": "Bonito/Serra da Bodoquena",
    "regiaoCor": "#38BDF8",
    "populacao": 13220,
    "lat": -21.141,
    "lng": -55.829,
    "prefeito": {
      "nome": "André Guimarães",
      "partido": "PP",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Bruno Vieira (PL)"
    },
    "financas": {
      "dividaAtiva": 12600000,
      "dividaConsolidada": 5800000,
      "dividaPorHabitante": 439,
      "receitaPrevista": 94000000,
      "receitaRealizada": 89553290,
      "despesaExecutada": 87402978,
      "gastoLegislativoTotal": 1436220,
      "gastoLegislativoPorHabitante": 108.64,
      "indiceTransparenciaTCE": 9,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 4475,
      "portalUrl": "https://www.camaranioaque.ms.gov.br/",
      "prefeituraUrl": "https://nioaque.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/nioaque/panorama"
    },
    "vereadores": [
      {
        "id": "5005806-v1",
        "nome": "Juliana Miranda Dias",
        "nomeUrna": "Juliana do Nioaque",
        "partido": "PL",
        "cargo": "Presidente da Câmara",
        "salarioBase": 10300,
        "salarioLiquido": 7622,
        "verbaIndenizatoriaMedia": 5400,
        "gastosGabineteAno": 64800,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24624
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18144
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12960
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9072
          }
        ]
      },
      {
        "id": "5005806-v2",
        "nome": "Fernando Araújo Albuquerque",
        "nomeUrna": "Fernando do Nioaque",
        "partido": "PDT",
        "cargo": "1º Secretário",
        "salarioBase": 7500,
        "salarioLiquido": 5550,
        "verbaIndenizatoriaMedia": 5430,
        "gastosGabineteAno": 65160,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24761
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18245
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13032
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9122
          }
        ]
      },
      {
        "id": "5005806-v3",
        "nome": "Edson Santos Araújo",
        "nomeUrna": "Edson do Nioaque",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 7100,
        "salarioLiquido": 5254,
        "verbaIndenizatoriaMedia": 4700,
        "gastosGabineteAno": 56400,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21432
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15792
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11280
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7896
          }
        ]
      },
      {
        "id": "5005806-v4",
        "nome": "Márcio Alves Rezende",
        "nomeUrna": "Márcio do Nioaque",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 7000,
        "salarioLiquido": 5180,
        "verbaIndenizatoriaMedia": 5170,
        "gastosGabineteAno": 62040,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 23575
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17371
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12408
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8686
          }
        ]
      },
      {
        "id": "5005806-v5",
        "nome": "Lucas Ferreira Araújo",
        "nomeUrna": "Lucas Ferreira",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 7000,
        "salarioLiquido": 5180,
        "verbaIndenizatoriaMedia": 4940,
        "gastosGabineteAno": 59280,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 22526
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16598
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11856
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8299
          }
        ]
      },
      {
        "id": "5005806-v6",
        "nome": "Eduardo Pacheco Albuquerque",
        "nomeUrna": "Eduardo Pacheco",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 7200,
        "salarioLiquido": 5328,
        "verbaIndenizatoriaMedia": 3880,
        "gastosGabineteAno": 46560,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17693
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13037
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9312
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6518
          }
        ]
      },
      {
        "id": "5005806-v7",
        "nome": "Juliana Gomes Miranda",
        "nomeUrna": "Juliana Gomes",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 7800,
        "salarioLiquido": 5772,
        "verbaIndenizatoriaMedia": 3660,
        "gastosGabineteAno": 43920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 16690
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12298
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8784
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6149
          }
        ]
      },
      {
        "id": "5005806-v8",
        "nome": "Renata Carvalho Guedes",
        "nomeUrna": "Renata Carvalho",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 8000,
        "salarioLiquido": 5920,
        "verbaIndenizatoriaMedia": 5360,
        "gastosGabineteAno": 64320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24442
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18010
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12864
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9005
          }
        ]
      },
      {
        "id": "5005806-v9",
        "nome": "Cristiane Pacheco Ribeiro",
        "nomeUrna": "Cristiane do Nioaque",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 7100,
        "salarioLiquido": 5254,
        "verbaIndenizatoriaMedia": 4670,
        "gastosGabineteAno": 56040,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21295
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15691
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11208
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7846
          }
        ]
      }
    ]
  },
  {
    "ibge": 5005004,
    "nome": "Jardim",
    "regiao": "Bonito/Serra da Bodoquena",
    "regiaoCor": "#38BDF8",
    "populacao": 25451,
    "lat": -21.48,
    "lng": -56.138,
    "prefeito": {
      "nome": "Juliano Miranda (Guga)",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Thiago Monteiro (PSD)"
    },
    "financas": {
      "dividaAtiva": 23400000,
      "dividaConsolidada": 11200000,
      "dividaPorHabitante": 440,
      "receitaPrevista": 160000000,
      "receitaRealizada": 161617594,
      "despesaExecutada": 152314641,
      "gastoLegislativoTotal": 2154550,
      "gastoLegislativoPorHabitante": 84.65,
      "indiceTransparenciaTCE": 8.9,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 11,
      "gastoMedioMensalGabinete": 4815,
      "portalUrl": "https://www.camaramunicipaldejardim.ms.gov.br/",
      "prefeituraUrl": "https://www.jardim.ms.gov.br/transparencia",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/jardim/panorama",
      "dataSebraeUrl": "http://datasebrae.com.br/ms-data-cidade/"
    },
    "sebrae": {
      "empresasAtivas": 2540,
      "empregosFormais": 5820,
      "tempoAberturaHoras": 2.4,
      "capag": "A",
      "pibPerCapita": 48950,
      "taxaSobrevivenciaEmpresas": 81.5,
      "dataSebraeUrl": "http://datasebrae.com.br/ms-data-cidade/"
    },
    "vereadores": [
      {
        "id": "5005004-v1",
        "nome": "Tereza Moreira",
        "nomeUrna": "Tereza Moreira",
        "partido": "PSDB",
        "cargo": "Presidente da Câmara",
        "salarioBase": 12500,
        "salarioLiquido": 9250,
        "verbaIndenizatoriaMedia": 5060,
        "gastosGabineteAno": 60720,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 23074 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 17002 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 12144 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 8501 }
        ]
      },
      {
        "id": "5005004-v2",
        "nome": "Jota Pereira",
        "nomeUrna": "Jota Pereira",
        "partido": "UNIÃO",
        "cargo": "1º Vice-Presidente",
        "salarioBase": 10500,
        "salarioLiquido": 7770,
        "verbaIndenizatoriaMedia": 5200,
        "gastosGabineteAno": 62400,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 23500 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 17500 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 12400 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 9000 }
        ]
      },
      {
        "id": "5005004-v3",
        "nome": "Marilsa Bambil",
        "nomeUrna": "Marilsa Bambil",
        "partido": "PP",
        "cargo": "2ª Vice-Presidente",
        "salarioBase": 10500,
        "salarioLiquido": 7770,
        "verbaIndenizatoriaMedia": 5100,
        "gastosGabineteAno": 61200,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 23200 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 17100 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 12200 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 8700 }
        ]
      },
      {
        "id": "5005004-v4",
        "nome": "Jaime Echeverria",
        "nomeUrna": "Jaime Echeverria",
        "partido": "PL",
        "cargo": "1º Secretário",
        "salarioBase": 10800,
        "salarioLiquido": 7992,
        "verbaIndenizatoriaMedia": 5300,
        "gastosGabineteAno": 63600,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 24100 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 17800 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 12700 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 9000 }
        ]
      },
      {
        "id": "5005004-v5",
        "nome": "Andrea Insfran",
        "nomeUrna": "Andrea Insfran",
        "partido": "REPUBLICANOS",
        "cargo": "2ª Secretária",
        "salarioBase": 10500,
        "salarioLiquido": 7770,
        "verbaIndenizatoriaMedia": 5000,
        "gastosGabineteAno": 60000,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 22800 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 16800 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 12000 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 8400 }
        ]
      },
      {
        "id": "5005004-v6",
        "nome": "Rosi Maciel",
        "nomeUrna": "Rosi Maciel",
        "partido": "PP",
        "cargo": "Vereadora",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 4900,
        "gastosGabineteAno": 58800,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 22300 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 16500 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 11800 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 8200 }
        ]
      },
      {
        "id": "5005004-v7",
        "nome": "Dr. Erney Barbosa",
        "nomeUrna": "Dr. Erney Barbosa",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 4850,
        "gastosGabineteAno": 58200,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 22100 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 16300 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 11600 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 8200 }
        ]
      },
      {
        "id": "5005004-v8",
        "nome": "Glaucio Cabreira",
        "nomeUrna": "Glaucio Cabreira",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 4900,
        "gastosGabineteAno": 58800,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 22300 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 16500 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 11800 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 8200 }
        ]
      },
      {
        "id": "5005004-v9",
        "nome": "Rudimar Cabeleireiro",
        "nomeUrna": "Rudimar Cabeleireiro",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 4800,
        "gastosGabineteAno": 57600,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 21800 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 16100 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 11500 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 8200 }
        ]
      },
      {
        "id": "5005004-v10",
        "nome": "Dr. Diego Olídio",
        "nomeUrna": "Dr. Diego Olídio",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 4850,
        "gastosGabineteAno": 58200,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 22100 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 16300 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 11600 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 8200 }
        ]
      },
      {
        "id": "5005004-v11",
        "nome": "Alexandre Barros Leite",
        "nomeUrna": "Alexandre Pitangueiras",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 4800,
        "gastosGabineteAno": 57600,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 21800 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 16100 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 11500 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 8200 }
        ]
      }
    ]
  },
  {
    "ibge": 5004106,
    "nome": "Guia Lopes da Laguna",
    "regiao": "Bonito/Serra da Bodoquena",
    "regiaoCor": "#38BDF8",
    "populacao": 9940,
    "lat": -21.458,
    "lng": -56.115,
    "prefeito": {
      "nome": "Dr. Max",
      "partido": "MDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Carlos Antônio (Carlão) (PSDB)"
    },
    "financas": {
      "dividaAtiva": 9100000,
      "dividaConsolidada": 4200000,
      "dividaPorHabitante": 423,
      "receitaPrevista": 76000000,
      "receitaRealizada": 74708764,
      "despesaExecutada": 69983833,
      "gastoLegislativoTotal": 1136470,
      "gastoLegislativoPorHabitante": 114.33,
      "indiceTransparenciaTCE": 9.5,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 3189,
      "portalUrl": "https://www.camaraguialopesdalaguna.ms.gov.br/",
      "prefeituraUrl": "https://guialopesdalaguna.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/guia-lopes-da-laguna/panorama"
    },
    "vereadores": [
      {
        "id": "5004106-v1",
        "nome": "Renata Pacheco Barros",
        "nomeUrna": "Renata Pacheco",
        "partido": "PDT",
        "cargo": "Presidente da Câmara",
        "salarioBase": 9900,
        "salarioLiquido": 7326,
        "verbaIndenizatoriaMedia": 2620,
        "gastosGabineteAno": 31440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 11947
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 8803
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6288
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4402
          }
        ]
      },
      {
        "id": "5004106-v2",
        "nome": "Paulo Costa Moreira",
        "nomeUrna": "Paulo Costa",
        "partido": "MDB",
        "cargo": "1º Secretário",
        "salarioBase": 6100,
        "salarioLiquido": 4514,
        "verbaIndenizatoriaMedia": 2470,
        "gastosGabineteAno": 29640,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 11263
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 8299
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5928
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4150
          }
        ]
      },
      {
        "id": "5004106-v3",
        "nome": "Silvio Guedes Gomes",
        "nomeUrna": "Silvio Guedes",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 6300,
        "salarioLiquido": 4662,
        "verbaIndenizatoriaMedia": 2250,
        "gastosGabineteAno": 27000,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 10260
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 7560
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5400
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3780
          }
        ]
      },
      {
        "id": "5004106-v4",
        "nome": "Maria Campestrini Rocha",
        "nomeUrna": "Maria do Guia",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 6600,
        "salarioLiquido": 4884,
        "verbaIndenizatoriaMedia": 2700,
        "gastosGabineteAno": 32400,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 12312
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 9072
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6480
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4536
          }
        ]
      },
      {
        "id": "5004106-v5",
        "nome": "Ana Moreira Barbosa",
        "nomeUrna": "Ana Moreira",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 6700,
        "salarioLiquido": 4958,
        "verbaIndenizatoriaMedia": 4040,
        "gastosGabineteAno": 48480,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 18422
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13574
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9696
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6787
          }
        ]
      },
      {
        "id": "5004106-v6",
        "nome": "Carlos Silva Costa",
        "nomeUrna": "Carlos Silva",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 6100,
        "salarioLiquido": 4514,
        "verbaIndenizatoriaMedia": 3520,
        "gastosGabineteAno": 42240,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 16051
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11827
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8448
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5914
          }
        ]
      },
      {
        "id": "5004106-v7",
        "nome": "Cláudio Costa Pacheco",
        "nomeUrna": "Cláudio Costa",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 6500,
        "salarioLiquido": 4810,
        "verbaIndenizatoriaMedia": 3910,
        "gastosGabineteAno": 46920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17830
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13138
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9384
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6569
          }
        ]
      },
      {
        "id": "5004106-v8",
        "nome": "Aline Freitas Melo",
        "nomeUrna": "Aline Freitas",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 6100,
        "salarioLiquido": 4514,
        "verbaIndenizatoriaMedia": 3620,
        "gastosGabineteAno": 43440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 16507
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12163
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8688
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6082
          }
        ]
      },
      {
        "id": "5004106-v9",
        "nome": "Rafael Rocha Nogueira",
        "nomeUrna": "Rafael do Guia",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 6400,
        "salarioLiquido": 4736,
        "verbaIndenizatoriaMedia": 2300,
        "gastosGabineteAno": 27600,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 10488
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 7728
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5520
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3864
          }
        ]
      }
    ]
  },
  {
    "ibge": 5006903,
    "nome": "Porto Murtinho",
    "regiao": "Bonito/Serra da Bodoquena",
    "regiaoCor": "#38BDF8",
    "populacao": 12859,
    "lat": -21.698,
    "lng": -57.878,
    "prefeito": {
      "nome": "Nelson Cintra",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Dra. Andreara Castro (PP)"
    },
    "financas": {
      "dividaAtiva": 15600000,
      "dividaConsolidada": 7400000,
      "dividaPorHabitante": 575,
      "receitaPrevista": 110000000,
      "receitaRealizada": 104842478,
      "despesaExecutada": 103773651,
      "gastoLegislativoTotal": 1246990,
      "gastoLegislativoPorHabitante": 96.97,
      "indiceTransparenciaTCE": 9.2,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 3041,
      "portalUrl": "https://www.camaraportomurtinho.ms.gov.br/",
      "prefeituraUrl": "https://portomurtinho.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/porto-murtinho/panorama"
    },
    "vereadores": [
      {
        "id": "5006903-v1",
        "nome": "Luciana Dias Nogueira",
        "nomeUrna": "Luciana Dias",
        "partido": "UNIÃO",
        "cargo": "Presidente da Câmara",
        "salarioBase": 10900,
        "salarioLiquido": 8066,
        "verbaIndenizatoriaMedia": 2190,
        "gastosGabineteAno": 26280,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 9986
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 7358
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5256
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3679
          }
        ]
      },
      {
        "id": "5006903-v2",
        "nome": "Eduardo Santos Dias",
        "nomeUrna": "Eduardo do Porto",
        "partido": "UNIÃO",
        "cargo": "1º Secretário",
        "salarioBase": 7200,
        "salarioLiquido": 5328,
        "verbaIndenizatoriaMedia": 2280,
        "gastosGabineteAno": 27360,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 10397
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 7661
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5472
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3830
          }
        ]
      },
      {
        "id": "5006903-v3",
        "nome": "José Miranda Moreira",
        "nomeUrna": "José Miranda",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 7200,
        "salarioLiquido": 5328,
        "verbaIndenizatoriaMedia": 3380,
        "gastosGabineteAno": 40560,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15413
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11357
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8112
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5678
          }
        ]
      },
      {
        "id": "5006903-v4",
        "nome": "Márcio Miranda Costa",
        "nomeUrna": "Márcio do Porto",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 7200,
        "salarioLiquido": 5328,
        "verbaIndenizatoriaMedia": 3220,
        "gastosGabineteAno": 38640,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 14683
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10819
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7728
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5410
          }
        ]
      },
      {
        "id": "5006903-v5",
        "nome": "Fernando Melo Pereira",
        "nomeUrna": "Fernando do Porto",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 8000,
        "salarioLiquido": 5920,
        "verbaIndenizatoriaMedia": 2600,
        "gastosGabineteAno": 31200,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 11856
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 8736
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6240
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4368
          }
        ]
      },
      {
        "id": "5006903-v6",
        "nome": "Cláudio Pacheco Costa",
        "nomeUrna": "Cláudio do Porto",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 8000,
        "salarioLiquido": 5920,
        "verbaIndenizatoriaMedia": 3320,
        "gastosGabineteAno": 39840,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15139
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11155
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7968
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5578
          }
        ]
      },
      {
        "id": "5006903-v7",
        "nome": "Carlos Martins Melo",
        "nomeUrna": "Carlos Martins",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 7300,
        "salarioLiquido": 5402,
        "verbaIndenizatoriaMedia": 2530,
        "gastosGabineteAno": 30360,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 11537
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 8501
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6072
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4250
          }
        ]
      },
      {
        "id": "5006903-v8",
        "nome": "Lucas Campestrini Barros",
        "nomeUrna": "Lucas Campestrini",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 7200,
        "salarioLiquido": 5328,
        "verbaIndenizatoriaMedia": 3460,
        "gastosGabineteAno": 41520,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15778
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11626
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8304
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5813
          }
        ]
      },
      {
        "id": "5006903-v9",
        "nome": "Aline Rocha Miranda",
        "nomeUrna": "Aline Rocha",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 7300,
        "salarioLiquido": 5402,
        "verbaIndenizatoriaMedia": 3020,
        "gastosGabineteAno": 36240,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 13771
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10147
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7248
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5074
          }
        ]
      }
    ]
  },
  {
    "ibge": 5002100,
    "nome": "Bela Vista",
    "regiao": "Bonito/Serra da Bodoquena",
    "regiaoCor": "#38BDF8",
    "populacao": 21613,
    "lat": -22.108,
    "lng": -56.521,
    "prefeito": {
      "nome": "Gabriel Bocalan",
      "partido": "PP",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Letizia Murano (Republicanos)"
    },
    "financas": {
      "dividaAtiva": 19500000,
      "dividaConsolidada": 8900000,
      "dividaPorHabitante": 412,
      "receitaPrevista": 120000000,
      "receitaRealizada": 118333164,
      "despesaExecutada": 116276670,
      "gastoLegislativoTotal": 2383280,
      "gastoLegislativoPorHabitante": 110.27,
      "indiceTransparenciaTCE": 8.5,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 11,
      "gastoMedioMensalGabinete": 6865,
      "portalUrl": "https://www.camarabelavista.ms.gov.br/",
      "prefeituraUrl": "https://belavista.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/bela-vista/panorama"
    },
    "vereadores": [
      {
        "id": "5002100-v1",
        "nome": "Silvio Lima Dias",
        "nomeUrna": "Silvio do Bela",
        "partido": "MDB",
        "cargo": "Presidente da Câmara",
        "salarioBase": 12500,
        "salarioLiquido": 9250,
        "verbaIndenizatoriaMedia": 8590,
        "gastosGabineteAno": 103080,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 39170
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 28862
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 20616
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 14431
          }
        ]
      },
      {
        "id": "5002100-v2",
        "nome": "Cláudio Oliveira Miranda",
        "nomeUrna": "Cláudio do Bela",
        "partido": "PSB",
        "cargo": "1º Secretário",
        "salarioBase": 10100,
        "salarioLiquido": 7474,
        "verbaIndenizatoriaMedia": 8530,
        "gastosGabineteAno": 102360,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 38897
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 28661
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 20472
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 14330
          }
        ]
      },
      {
        "id": "5002100-v3",
        "nome": "Marcos Guedes Silva",
        "nomeUrna": "Marcos do Bela",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 10100,
        "salarioLiquido": 7474,
        "verbaIndenizatoriaMedia": 7250,
        "gastosGabineteAno": 87000,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 33060
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 24360
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 17400
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 12180
          }
        ]
      },
      {
        "id": "5002100-v4",
        "nome": "Rogério Silva Barros",
        "nomeUrna": "Rogério do Bela",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 10000,
        "salarioLiquido": 7400,
        "verbaIndenizatoriaMedia": 6250,
        "gastosGabineteAno": 75000,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 28500
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 21000
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 15000
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10500
          }
        ]
      },
      {
        "id": "5002100-v5",
        "nome": "Aline Ferreira Oliveira",
        "nomeUrna": "Aline do Bela",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 9900,
        "salarioLiquido": 7326,
        "verbaIndenizatoriaMedia": 8580,
        "gastosGabineteAno": 102960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 39125
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 28829
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 20592
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 14414
          }
        ]
      },
      {
        "id": "5002100-v6",
        "nome": "Edson Santos Gomes",
        "nomeUrna": "Edson Santos",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 6890,
        "gastosGabineteAno": 82680,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 31418
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 23150
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 16536
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 11575
          }
        ]
      },
      {
        "id": "5002100-v7",
        "nome": "Marcos Martins Pacheco",
        "nomeUrna": "Marcos do Bela",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 4960,
        "gastosGabineteAno": 59520,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 22618
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16666
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11904
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8333
          }
        ]
      },
      {
        "id": "5002100-v8",
        "nome": "Fábio Barros Lima",
        "nomeUrna": "Fábio Barros",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 10200,
        "salarioLiquido": 7548,
        "verbaIndenizatoriaMedia": 7590,
        "gastosGabineteAno": 91080,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 34610
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 25502
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 18216
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 12751
          }
        ]
      },
      {
        "id": "5002100-v9",
        "nome": "Roberto Campestrini Ferreira",
        "nomeUrna": "Roberto Campestrini",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 10000,
        "salarioLiquido": 7400,
        "verbaIndenizatoriaMedia": 6310,
        "gastosGabineteAno": 75720,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 28774
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 21202
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 15144
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10601
          }
        ]
      },
      {
        "id": "5002100-v10",
        "nome": "Maria Costa Lima",
        "nomeUrna": "Maria do Bela",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 9700,
        "salarioLiquido": 7178,
        "verbaIndenizatoriaMedia": 5200,
        "gastosGabineteAno": 62400,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 23712
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17472
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12480
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8736
          }
        ]
      },
      {
        "id": "5002100-v11",
        "nome": "Márcio Santos Barbosa",
        "nomeUrna": "Márcio do Bela",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 9700,
        "salarioLiquido": 7178,
        "verbaIndenizatoriaMedia": 5210,
        "gastosGabineteAno": 62520,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 23758
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17506
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12504
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8753
          }
        ]
      }
    ]
  },
  {
    "ibge": 5002803,
    "nome": "Caracol",
    "regiao": "Bonito/Serra da Bodoquena",
    "regiaoCor": "#38BDF8",
    "populacao": 6112,
    "lat": -22.013,
    "lng": -57.023,
    "prefeito": {
      "nome": "Neco Pagliosa",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Oseias Ferreira (Preguinho) (MDB)"
    },
    "financas": {
      "dividaAtiva": 6100000,
      "dividaConsolidada": 2800000,
      "dividaPorHabitante": 458,
      "receitaPrevista": 58000000,
      "receitaRealizada": 55401962,
      "despesaExecutada": 56470149,
      "gastoLegislativoTotal": 1280700,
      "gastoLegislativoPorHabitante": 209.54,
      "indiceTransparenciaTCE": 9.8,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 4426,
      "portalUrl": "https://www.camaracaracol.ms.gov.br/",
      "prefeituraUrl": "https://caracol.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/caracol/panorama"
    },
    "vereadores": [
      {
        "id": "5002803-v1",
        "nome": "Marcelo Barbosa Oliveira",
        "nomeUrna": "Marcelo Barbosa",
        "partido": "PSDB",
        "cargo": "Presidente da Câmara",
        "salarioBase": 9600,
        "salarioLiquido": 7104,
        "verbaIndenizatoriaMedia": 4260,
        "gastosGabineteAno": 51120,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19426
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14314
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10224
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7157
          }
        ]
      },
      {
        "id": "5002803-v2",
        "nome": "José Barbosa Oliveira",
        "nomeUrna": "José do Caracol",
        "partido": "MDB",
        "cargo": "1º Secretário",
        "salarioBase": 6700,
        "salarioLiquido": 4958,
        "verbaIndenizatoriaMedia": 4390,
        "gastosGabineteAno": 52680,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 20018
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14750
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10536
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7375
          }
        ]
      },
      {
        "id": "5002803-v3",
        "nome": "Fernando Moreira Gomes",
        "nomeUrna": "Fernando do Caracol",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 6400,
        "salarioLiquido": 4736,
        "verbaIndenizatoriaMedia": 3630,
        "gastosGabineteAno": 43560,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 16553
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12197
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8712
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6098
          }
        ]
      },
      {
        "id": "5002803-v4",
        "nome": "Patrícia Gomes Freitas",
        "nomeUrna": "Patrícia do Caracol",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 6200,
        "salarioLiquido": 4588,
        "verbaIndenizatoriaMedia": 4350,
        "gastosGabineteAno": 52200,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19836
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14616
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10440
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7308
          }
        ]
      },
      {
        "id": "5002803-v5",
        "nome": "Juliana Costa Santos",
        "nomeUrna": "Juliana Costa",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 6700,
        "salarioLiquido": 4958,
        "verbaIndenizatoriaMedia": 5410,
        "gastosGabineteAno": 64920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24670
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18178
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12984
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9089
          }
        ]
      },
      {
        "id": "5002803-v6",
        "nome": "Roberto Santos Costa",
        "nomeUrna": "Roberto Santos",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 6200,
        "salarioLiquido": 4588,
        "verbaIndenizatoriaMedia": 3940,
        "gastosGabineteAno": 47280,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17966
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13238
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9456
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6619
          }
        ]
      },
      {
        "id": "5002803-v7",
        "nome": "Carlos Gomes Miranda",
        "nomeUrna": "Carlos do Caracol",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 6700,
        "salarioLiquido": 4958,
        "verbaIndenizatoriaMedia": 3310,
        "gastosGabineteAno": 39720,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15094
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11122
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7944
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5561
          }
        ]
      },
      {
        "id": "5002803-v8",
        "nome": "Lucas Miranda Martins",
        "nomeUrna": "Lucas do Caracol",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 6700,
        "salarioLiquido": 4958,
        "verbaIndenizatoriaMedia": 5740,
        "gastosGabineteAno": 68880,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 26174
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19286
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13776
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9643
          }
        ]
      },
      {
        "id": "5002803-v9",
        "nome": "Marcos Costa Dias",
        "nomeUrna": "Marcos do Caracol",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 6600,
        "salarioLiquido": 4884,
        "verbaIndenizatoriaMedia": 3200,
        "gastosGabineteAno": 38400,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 14592
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10752
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7680
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5376
          }
        ]
      }
    ]
  },
  {
    "ibge": 5000906,
    "nome": "Antônio João",
    "regiao": "Caminhos da Fronteira",
    "regiaoCor": "#16A34A",
    "populacao": 9303,
    "lat": -22.19,
    "lng": -55.946,
    "prefeito": {
      "nome": "Marcelo Pé",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Pr. Eliseu Benites (PP)"
    },
    "financas": {
      "dividaAtiva": 7400000,
      "dividaConsolidada": 3200000,
      "dividaPorHabitante": 344,
      "receitaPrevista": 69000000,
      "receitaRealizada": 66892149,
      "despesaExecutada": 67362790,
      "gastoLegislativoTotal": 1050960,
      "gastoLegislativoPorHabitante": 112.97,
      "indiceTransparenciaTCE": 9.8,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 2629,
      "portalUrl": "https://www.camaraantoniojoao.ms.gov.br/",
      "prefeituraUrl": "https://antoniojoao.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/antonio-joao/panorama"
    },
    "vereadores": [
      {
        "id": "5000906-v1",
        "nome": "Marcelo Pacheco Guedes",
        "nomeUrna": "Marcelo Pacheco",
        "partido": "PSD",
        "cargo": "Presidente da Câmara",
        "salarioBase": 9200,
        "salarioLiquido": 6808,
        "verbaIndenizatoriaMedia": 2540,
        "gastosGabineteAno": 30480,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 11582
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 8534
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6096
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4267
          }
        ]
      },
      {
        "id": "5000906-v2",
        "nome": "Aline Carvalho Sanches",
        "nomeUrna": "Aline do Antônio",
        "partido": "PODE",
        "cargo": "1º Secretário",
        "salarioBase": 6100,
        "salarioLiquido": 4514,
        "verbaIndenizatoriaMedia": 2970,
        "gastosGabineteAno": 35640,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 13543
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 9979
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7128
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4990
          }
        ]
      },
      {
        "id": "5000906-v3",
        "nome": "Paulo Martins Freitas",
        "nomeUrna": "Paulo do Antônio",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 6100,
        "salarioLiquido": 4514,
        "verbaIndenizatoriaMedia": 2060,
        "gastosGabineteAno": 24720,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 9394
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 6922
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 4944
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3461
          }
        ]
      },
      {
        "id": "5000906-v4",
        "nome": "Renata Araújo Araújo",
        "nomeUrna": "Renata do Antônio",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 6600,
        "salarioLiquido": 4884,
        "verbaIndenizatoriaMedia": 1890,
        "gastosGabineteAno": 22680,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 8618
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 6350
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 4536
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3175
          }
        ]
      },
      {
        "id": "5000906-v5",
        "nome": "José Gomes Melo",
        "nomeUrna": "José do Antônio",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 6500,
        "salarioLiquido": 4810,
        "verbaIndenizatoriaMedia": 1940,
        "gastosGabineteAno": 23280,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 8846
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 6518
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 4656
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3259
          }
        ]
      },
      {
        "id": "5000906-v6",
        "nome": "Edson Oliveira Miranda",
        "nomeUrna": "Edson Oliveira",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 6500,
        "salarioLiquido": 4810,
        "verbaIndenizatoriaMedia": 2190,
        "gastosGabineteAno": 26280,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 9986
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 7358
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5256
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3679
          }
        ]
      },
      {
        "id": "5000906-v7",
        "nome": "Márcio Gomes Barbosa",
        "nomeUrna": "Márcio do Antônio",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 6200,
        "salarioLiquido": 4588,
        "verbaIndenizatoriaMedia": 2110,
        "gastosGabineteAno": 25320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 9622
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 7090
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5064
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3545
          }
        ]
      },
      {
        "id": "5000906-v8",
        "nome": "Luiz Alves Rezende",
        "nomeUrna": "Luiz Alves",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 6500,
        "salarioLiquido": 4810,
        "verbaIndenizatoriaMedia": 2050,
        "gastosGabineteAno": 24600,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 9348
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 6888
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 4920
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3444
          }
        ]
      },
      {
        "id": "5000906-v9",
        "nome": "Sandra Santos Miranda",
        "nomeUrna": "Sandra do Antônio",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 6300,
        "salarioLiquido": 4662,
        "verbaIndenizatoriaMedia": 3330,
        "gastosGabineteAno": 39960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15185
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11189
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7992
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5594
          }
        ]
      }
    ]
  },
  {
    "ibge": 5006606,
    "nome": "Ponta Porã",
    "regiao": "Caminhos da Fronteira",
    "regiaoCor": "#16A34A",
    "populacao": 92017,
    "lat": -22.536,
    "lng": -55.725,
    "prefeito": {
      "nome": "Eduardo Campos",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Dr. Patrick Derzi (PP)"
    },
    "financas": {
      "dividaAtiva": 128000000,
      "dividaConsolidada": 68400000,
      "dividaPorHabitante": 743,
      "receitaPrevista": 680000000,
      "receitaRealizada": 697582762,
      "despesaExecutada": 638851544,
      "gastoLegislativoTotal": 4180830,
      "gastoLegislativoPorHabitante": 45.44,
      "indiceTransparenciaTCE": 8.6,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 17,
      "gastoMedioMensalGabinete": 5509,
      "portalUrl": "https://www.camarapontapora.ms.gov.br/",
      "prefeituraUrl": "https://pontapora.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/ponta-pora/panorama"
    },
    "vereadores": [
      {
        "id": "5006606-v1",
        "nome": "José Pacheco Silva",
        "nomeUrna": "José do Ponta",
        "partido": "MDB",
        "cargo": "Presidente da Câmara",
        "salarioBase": 15700,
        "salarioLiquido": 11618,
        "verbaIndenizatoriaMedia": 6770,
        "gastosGabineteAno": 81240,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 30871
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 22747
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 16248
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 11374
          }
        ]
      },
      {
        "id": "5006606-v2",
        "nome": "Sandra Gomes Araújo",
        "nomeUrna": "Sandra Gomes",
        "partido": "PT",
        "cargo": "1º Secretário",
        "salarioBase": 13600,
        "salarioLiquido": 10064,
        "verbaIndenizatoriaMedia": 5110,
        "gastosGabineteAno": 61320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 23302
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17170
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12264
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8585
          }
        ]
      },
      {
        "id": "5006606-v3",
        "nome": "Luiz Alves Costa",
        "nomeUrna": "Luiz do Ponta",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 13400,
        "salarioLiquido": 9916,
        "verbaIndenizatoriaMedia": 4040,
        "gastosGabineteAno": 48480,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 18422
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13574
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9696
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6787
          }
        ]
      },
      {
        "id": "5006606-v4",
        "nome": "Rafael Costa Lima",
        "nomeUrna": "Rafael do Ponta",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 13400,
        "salarioLiquido": 9916,
        "verbaIndenizatoriaMedia": 5780,
        "gastosGabineteAno": 69360,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 26357
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19421
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13872
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9710
          }
        ]
      },
      {
        "id": "5006606-v5",
        "nome": "Aline Costa Barros",
        "nomeUrna": "Aline do Ponta",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 12700,
        "salarioLiquido": 9398,
        "verbaIndenizatoriaMedia": 7160,
        "gastosGabineteAno": 85920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 32650
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 24058
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 17184
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 12029
          }
        ]
      },
      {
        "id": "5006606-v6",
        "nome": "João Dias Souza",
        "nomeUrna": "João do Ponta",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 13400,
        "salarioLiquido": 9916,
        "verbaIndenizatoriaMedia": 4300,
        "gastosGabineteAno": 51600,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19608
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14448
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10320
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7224
          }
        ]
      },
      {
        "id": "5006606-v7",
        "nome": "Cláudio Miranda Oliveira",
        "nomeUrna": "Cláudio do Ponta",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 13400,
        "salarioLiquido": 9916,
        "verbaIndenizatoriaMedia": 6570,
        "gastosGabineteAno": 78840,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 29959
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 22075
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 15768
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 11038
          }
        ]
      },
      {
        "id": "5006606-v8",
        "nome": "Silvio Melo Costa",
        "nomeUrna": "Silvio do Ponta",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 13500,
        "salarioLiquido": 9990,
        "verbaIndenizatoriaMedia": 5370,
        "gastosGabineteAno": 64440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24487
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18043
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12888
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9022
          }
        ]
      },
      {
        "id": "5006606-v9",
        "nome": "Marcelo Araújo Barbosa",
        "nomeUrna": "Marcelo Araújo",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 13600,
        "salarioLiquido": 10064,
        "verbaIndenizatoriaMedia": 4370,
        "gastosGabineteAno": 52440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19927
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14683
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10488
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7342
          }
        ]
      },
      {
        "id": "5006606-v10",
        "nome": "João Sanches Gomes",
        "nomeUrna": "João Sanches",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 13100,
        "salarioLiquido": 9694,
        "verbaIndenizatoriaMedia": 5910,
        "gastosGabineteAno": 70920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 26950
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19858
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14184
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9929
          }
        ]
      },
      {
        "id": "5006606-v11",
        "nome": "Paulo Lima Nogueira",
        "nomeUrna": "Paulo do Ponta",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 13200,
        "salarioLiquido": 9768,
        "verbaIndenizatoriaMedia": 5240,
        "gastosGabineteAno": 62880,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 23894
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17606
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12576
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8803
          }
        ]
      },
      {
        "id": "5006606-v12",
        "nome": "José Rezende Moreira",
        "nomeUrna": "José do Ponta",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 12900,
        "salarioLiquido": 9546,
        "verbaIndenizatoriaMedia": 4630,
        "gastosGabineteAno": 55560,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21113
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15557
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11112
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7778
          }
        ]
      },
      {
        "id": "5006606-v13",
        "nome": "Rogério Souza Ferreira",
        "nomeUrna": "Rogério do Ponta",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 12800,
        "salarioLiquido": 9472,
        "verbaIndenizatoriaMedia": 6750,
        "gastosGabineteAno": 81000,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 30780
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 22680
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 16200
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 11340
          }
        ]
      },
      {
        "id": "5006606-v14",
        "nome": "Sandra Gomes Ferreira",
        "nomeUrna": "Sandra Gomes",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 13600,
        "salarioLiquido": 10064,
        "verbaIndenizatoriaMedia": 6050,
        "gastosGabineteAno": 72600,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 27588
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 20328
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14520
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10164
          }
        ]
      },
      {
        "id": "5006606-v15",
        "nome": "Renata Carvalho Martins",
        "nomeUrna": "Renata do Ponta",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 13200,
        "salarioLiquido": 9768,
        "verbaIndenizatoriaMedia": 3920,
        "gastosGabineteAno": 47040,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17875
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13171
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9408
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6586
          }
        ]
      },
      {
        "id": "5006606-v16",
        "nome": "Camila Carvalho Albuquerque",
        "nomeUrna": "Camila do Ponta",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 13400,
        "salarioLiquido": 9916,
        "verbaIndenizatoriaMedia": 6550,
        "gastosGabineteAno": 78600,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 29868
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 22008
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 15720
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 11004
          }
        ]
      },
      {
        "id": "5006606-v17",
        "nome": "Fernando Barros Freitas",
        "nomeUrna": "Fernando Barros",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 13400,
        "salarioLiquido": 9916,
        "verbaIndenizatoriaMedia": 6850,
        "gastosGabineteAno": 82200,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 31236
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 23016
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 16440
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 11508
          }
        ]
      }
    ]
  },
  {
    "ibge": 5005251,
    "nome": "Laguna Carapã",
    "regiao": "Caminhos da Fronteira",
    "regiaoCor": "#16A34A",
    "populacao": 7407,
    "lat": -22.38,
    "lng": -55.151,
    "prefeito": {
      "nome": "Itamar Bilibio",
      "partido": "MDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Doreli Portella (PRD)"
    },
    "financas": {
      "dividaAtiva": 7200000,
      "dividaConsolidada": 3300000,
      "dividaPorHabitante": 446,
      "receitaPrevista": 66000000,
      "receitaRealizada": 67800649,
      "despesaExecutada": 60811673,
      "gastoLegislativoTotal": 1321380,
      "gastoLegislativoPorHabitante": 178.4,
      "indiceTransparenciaTCE": 8.2,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 4809,
      "portalUrl": "https://www.camaralagunacarapa.ms.gov.br/",
      "prefeituraUrl": "https://lagunacarapa.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/laguna-carapa/panorama"
    },
    "vereadores": [
      {
        "id": "5005251-v1",
        "nome": "Edson Silva Carvalho",
        "nomeUrna": "Edson Silva",
        "partido": "PT",
        "cargo": "Presidente da Câmara",
        "salarioBase": 9100,
        "salarioLiquido": 6734,
        "verbaIndenizatoriaMedia": 5170,
        "gastosGabineteAno": 62040,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 23575
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17371
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12408
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8686
          }
        ]
      },
      {
        "id": "5005251-v2",
        "nome": "José Souza Santos",
        "nomeUrna": "José Souza",
        "partido": "PL",
        "cargo": "1º Secretário",
        "salarioBase": 6300,
        "salarioLiquido": 4662,
        "verbaIndenizatoriaMedia": 4360,
        "gastosGabineteAno": 52320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19882
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14650
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10464
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7325
          }
        ]
      },
      {
        "id": "5005251-v3",
        "nome": "José Barbosa Alves",
        "nomeUrna": "José do Laguna",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 6400,
        "salarioLiquido": 4736,
        "verbaIndenizatoriaMedia": 5990,
        "gastosGabineteAno": 71880,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 27314
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 20126
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14376
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10063
          }
        ]
      },
      {
        "id": "5005251-v4",
        "nome": "José Miranda Santos",
        "nomeUrna": "José Miranda",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 6900,
        "salarioLiquido": 5106,
        "verbaIndenizatoriaMedia": 4480,
        "gastosGabineteAno": 53760,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 20429
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15053
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10752
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7526
          }
        ]
      },
      {
        "id": "5005251-v5",
        "nome": "Marcos Sanches Nogueira",
        "nomeUrna": "Marcos Sanches",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 6300,
        "salarioLiquido": 4662,
        "verbaIndenizatoriaMedia": 3670,
        "gastosGabineteAno": 44040,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 16735
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12331
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8808
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6166
          }
        ]
      },
      {
        "id": "5005251-v6",
        "nome": "Patrícia Ferreira Barbosa",
        "nomeUrna": "Patrícia Ferreira",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 6700,
        "salarioLiquido": 4958,
        "verbaIndenizatoriaMedia": 4620,
        "gastosGabineteAno": 55440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21067
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15523
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11088
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7762
          }
        ]
      },
      {
        "id": "5005251-v7",
        "nome": "Juliana Dias Alves",
        "nomeUrna": "Juliana do Laguna",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 6500,
        "salarioLiquido": 4810,
        "verbaIndenizatoriaMedia": 5910,
        "gastosGabineteAno": 70920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 26950
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19858
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14184
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9929
          }
        ]
      },
      {
        "id": "5005251-v8",
        "nome": "Eduardo Costa Silva",
        "nomeUrna": "Eduardo do Laguna",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 6000,
        "salarioLiquido": 4440,
        "verbaIndenizatoriaMedia": 5280,
        "gastosGabineteAno": 63360,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24077
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17741
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12672
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8870
          }
        ]
      },
      {
        "id": "5005251-v9",
        "nome": "Fernando Campestrini Alves",
        "nomeUrna": "Fernando do Laguna",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 6400,
        "salarioLiquido": 4736,
        "verbaIndenizatoriaMedia": 3470,
        "gastosGabineteAno": 41640,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15823
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11659
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8328
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5830
          }
        ]
      }
    ]
  },
  {
    "ibge": 5001243,
    "nome": "Aral Moreira",
    "regiao": "Caminhos da Fronteira",
    "regiaoCor": "#16A34A",
    "populacao": 12046,
    "lat": -23.383,
    "lng": -55.635,
    "prefeito": {
      "nome": "Dra. Elaine",
      "partido": "MDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Marinês de Oliveira (Republicanos)"
    },
    "financas": {
      "dividaAtiva": 9800000,
      "dividaConsolidada": 4500000,
      "dividaPorHabitante": 374,
      "receitaPrevista": 84000000,
      "receitaRealizada": 85281135,
      "despesaExecutada": 77848144,
      "gastoLegislativoTotal": 1511850,
      "gastoLegislativoPorHabitante": 125.51,
      "indiceTransparenciaTCE": 8.5,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 5165,
      "portalUrl": "https://www.camaraaralmoreira.ms.gov.br/",
      "prefeituraUrl": "https://aralmoreira.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/aral-moreira/panorama"
    },
    "vereadores": [
      {
        "id": "5001243-v1",
        "nome": "Marcos Carvalho Pereira",
        "nomeUrna": "Marcos do Aral",
        "partido": "MDB",
        "cargo": "Presidente da Câmara",
        "salarioBase": 10000,
        "salarioLiquido": 7400,
        "verbaIndenizatoriaMedia": 6260,
        "gastosGabineteAno": 75120,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 28546
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 21034
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 15024
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10517
          }
        ]
      },
      {
        "id": "5001243-v2",
        "nome": "Silvio Campestrini Gomes",
        "nomeUrna": "Silvio do Aral",
        "partido": "PL",
        "cargo": "1º Secretário",
        "salarioBase": 7900,
        "salarioLiquido": 5846,
        "verbaIndenizatoriaMedia": 4440,
        "gastosGabineteAno": 53280,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 20246
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14918
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10656
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7459
          }
        ]
      },
      {
        "id": "5001243-v3",
        "nome": "Camila Gomes Guedes",
        "nomeUrna": "Camila do Aral",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 7100,
        "salarioLiquido": 5254,
        "verbaIndenizatoriaMedia": 4640,
        "gastosGabineteAno": 55680,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21158
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15590
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11136
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7795
          }
        ]
      },
      {
        "id": "5001243-v4",
        "nome": "Carlos Freitas Rocha",
        "nomeUrna": "Carlos Freitas",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 7900,
        "salarioLiquido": 5846,
        "verbaIndenizatoriaMedia": 5070,
        "gastosGabineteAno": 60840,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 23119
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17035
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12168
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8518
          }
        ]
      },
      {
        "id": "5001243-v5",
        "nome": "Eduardo Alves Costa",
        "nomeUrna": "Eduardo Alves",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 7900,
        "salarioLiquido": 5846,
        "verbaIndenizatoriaMedia": 5350,
        "gastosGabineteAno": 64200,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24396
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17976
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12840
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8988
          }
        ]
      },
      {
        "id": "5001243-v6",
        "nome": "Marcelo Gomes Dias",
        "nomeUrna": "Marcelo do Aral",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 7900,
        "salarioLiquido": 5846,
        "verbaIndenizatoriaMedia": 5650,
        "gastosGabineteAno": 67800,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 25764
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18984
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13560
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9492
          }
        ]
      },
      {
        "id": "5001243-v7",
        "nome": "Lucas Gomes Gomes",
        "nomeUrna": "Lucas Gomes",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 7800,
        "salarioLiquido": 5772,
        "verbaIndenizatoriaMedia": 4630,
        "gastosGabineteAno": 55560,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21113
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15557
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11112
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7778
          }
        ]
      },
      {
        "id": "5001243-v8",
        "nome": "Carlos Melo Freitas",
        "nomeUrna": "Carlos Melo",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 7800,
        "salarioLiquido": 5772,
        "verbaIndenizatoriaMedia": 5960,
        "gastosGabineteAno": 71520,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 27178
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 20026
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14304
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10013
          }
        ]
      },
      {
        "id": "5001243-v9",
        "nome": "Marcelo Rocha Campestrini",
        "nomeUrna": "Marcelo Rocha",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 7400,
        "salarioLiquido": 5476,
        "verbaIndenizatoriaMedia": 4520,
        "gastosGabineteAno": 54240,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 20611
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15187
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10848
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7594
          }
        ]
      }
    ]
  },
  {
    "ibge": 5000609,
    "nome": "Amambai",
    "regiao": "Caminhos da Fronteira",
    "regiaoCor": "#16A34A",
    "populacao": 39325,
    "lat": -23.104,
    "lng": -55.225,
    "prefeito": {
      "nome": "Janete Córdoba",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Jaime Vizzotto (PP)"
    },
    "financas": {
      "dividaAtiva": 34500000,
      "dividaConsolidada": 16700000,
      "dividaPorHabitante": 425,
      "receitaPrevista": 198000000,
      "receitaRealizada": 198246308,
      "despesaExecutada": 193984271,
      "gastoLegislativoTotal": 2385910,
      "gastoLegislativoPorHabitante": 60.67,
      "indiceTransparenciaTCE": 9.5,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 13,
      "gastoMedioMensalGabinete": 3962,
      "portalUrl": "https://www.camaraamambai.ms.gov.br/",
      "prefeituraUrl": "https://amambai.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/amambai/panorama"
    },
    "vereadores": [
      {
        "id": "5000609-v1",
        "nome": "Juliana Ferreira Melo",
        "nomeUrna": "Juliana do Amambai",
        "partido": "MDB",
        "cargo": "Presidente da Câmara",
        "salarioBase": 12600,
        "salarioLiquido": 9324,
        "verbaIndenizatoriaMedia": 4550,
        "gastosGabineteAno": 54600,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 20748
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15288
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10920
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7644
          }
        ]
      },
      {
        "id": "5000609-v2",
        "nome": "Sandra Moreira Albuquerque",
        "nomeUrna": "Sandra Moreira",
        "partido": "MDB",
        "cargo": "1º Secretário",
        "salarioBase": 10100,
        "salarioLiquido": 7474,
        "verbaIndenizatoriaMedia": 5100,
        "gastosGabineteAno": 61200,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 23256
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17136
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12240
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8568
          }
        ]
      },
      {
        "id": "5000609-v3",
        "nome": "Antônio Miranda Souza",
        "nomeUrna": "Antônio do Amambai",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 9600,
        "salarioLiquido": 7104,
        "verbaIndenizatoriaMedia": 3930,
        "gastosGabineteAno": 47160,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17921
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13205
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9432
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6602
          }
        ]
      },
      {
        "id": "5000609-v4",
        "nome": "Eduardo Gomes Souza",
        "nomeUrna": "Eduardo do Amambai",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 9700,
        "salarioLiquido": 7178,
        "verbaIndenizatoriaMedia": 3890,
        "gastosGabineteAno": 46680,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17738
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13070
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9336
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6535
          }
        ]
      },
      {
        "id": "5000609-v5",
        "nome": "Antônio Oliveira Alves",
        "nomeUrna": "Antônio do Amambai",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 10000,
        "salarioLiquido": 7400,
        "verbaIndenizatoriaMedia": 5050,
        "gastosGabineteAno": 60600,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 23028
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16968
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12120
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8484
          }
        ]
      },
      {
        "id": "5000609-v6",
        "nome": "Fábio Nogueira Barbosa",
        "nomeUrna": "Fábio do Amambai",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 10000,
        "salarioLiquido": 7400,
        "verbaIndenizatoriaMedia": 4450,
        "gastosGabineteAno": 53400,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 20292
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14952
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10680
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7476
          }
        ]
      },
      {
        "id": "5000609-v7",
        "nome": "Marcelo Alves Souza",
        "nomeUrna": "Marcelo do Amambai",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 10100,
        "salarioLiquido": 7474,
        "verbaIndenizatoriaMedia": 4130,
        "gastosGabineteAno": 49560,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 18833
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13877
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9912
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6938
          }
        ]
      },
      {
        "id": "5000609-v8",
        "nome": "Rafael Campestrini Barbosa",
        "nomeUrna": "Rafael do Amambai",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 10000,
        "salarioLiquido": 7400,
        "verbaIndenizatoriaMedia": 4310,
        "gastosGabineteAno": 51720,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19654
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14482
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10344
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7241
          }
        ]
      },
      {
        "id": "5000609-v9",
        "nome": "José Lima Souza",
        "nomeUrna": "José do Amambai",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 10100,
        "salarioLiquido": 7474,
        "verbaIndenizatoriaMedia": 3150,
        "gastosGabineteAno": 37800,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 14364
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10584
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7560
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5292
          }
        ]
      },
      {
        "id": "5000609-v10",
        "nome": "Renata Freitas Gomes",
        "nomeUrna": "Renata do Amambai",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 9700,
        "salarioLiquido": 7178,
        "verbaIndenizatoriaMedia": 3430,
        "gastosGabineteAno": 41160,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15641
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11525
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8232
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5762
          }
        ]
      },
      {
        "id": "5000609-v11",
        "nome": "Luciana Dias Costa",
        "nomeUrna": "Luciana do Amambai",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 9700,
        "salarioLiquido": 7178,
        "verbaIndenizatoriaMedia": 3380,
        "gastosGabineteAno": 40560,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15413
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11357
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8112
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5678
          }
        ]
      },
      {
        "id": "5000609-v12",
        "nome": "Patrícia Souza Guedes",
        "nomeUrna": "Patrícia Souza",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 9300,
        "salarioLiquido": 6882,
        "verbaIndenizatoriaMedia": 4110,
        "gastosGabineteAno": 49320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 18742
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13810
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9864
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6905
          }
        ]
      },
      {
        "id": "5000609-v13",
        "nome": "Edson Moreira Souza",
        "nomeUrna": "Edson do Amambai",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 9400,
        "salarioLiquido": 6956,
        "verbaIndenizatoriaMedia": 4930,
        "gastosGabineteAno": 59160,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 22481
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16565
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11832
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8282
          }
        ]
      }
    ]
  },
  {
    "ibge": 5003157,
    "nome": "Coronel Sapucaia",
    "regiao": "Caminhos da Fronteira",
    "regiaoCor": "#16A34A",
    "populacao": 14289,
    "lat": -23.272,
    "lng": -55.529,
    "prefeito": {
      "nome": "Niágara Kraievski",
      "partido": "PP",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Carlos Magno (Carlão) (União)"
    },
    "financas": {
      "dividaAtiva": 12800000,
      "dividaConsolidada": 5900000,
      "dividaPorHabitante": 413,
      "receitaPrevista": 92000000,
      "receitaRealizada": 92930629,
      "despesaExecutada": 89016045,
      "gastoLegislativoTotal": 1494320,
      "gastoLegislativoPorHabitante": 104.58,
      "indiceTransparenciaTCE": 9.4,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 5287,
      "portalUrl": "https://www.camaracoronelsapucaia.ms.gov.br/",
      "prefeituraUrl": "https://coronelsapucaia.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/coronel-sapucaia/panorama"
    },
    "vereadores": [
      {
        "id": "5003157-v1",
        "nome": "Carlos Alves Araújo",
        "nomeUrna": "Carlos Alves",
        "partido": "REPUBLICANOS",
        "cargo": "Presidente da Câmara",
        "salarioBase": 10100,
        "salarioLiquido": 7474,
        "verbaIndenizatoriaMedia": 4670,
        "gastosGabineteAno": 56040,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21295
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15691
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11208
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7846
          }
        ]
      },
      {
        "id": "5003157-v2",
        "nome": "Luiz Freitas Rocha",
        "nomeUrna": "Luiz Freitas",
        "partido": "PDT",
        "cargo": "1º Secretário",
        "salarioBase": 7700,
        "salarioLiquido": 5698,
        "verbaIndenizatoriaMedia": 3930,
        "gastosGabineteAno": 47160,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17921
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13205
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9432
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6602
          }
        ]
      },
      {
        "id": "5003157-v3",
        "nome": "Rafael Araújo Rocha",
        "nomeUrna": "Rafael do Coronel",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 7700,
        "salarioLiquido": 5698,
        "verbaIndenizatoriaMedia": 4760,
        "gastosGabineteAno": 57120,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21706
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15994
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11424
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7997
          }
        ]
      },
      {
        "id": "5003157-v4",
        "nome": "Eduardo Martins Barros",
        "nomeUrna": "Eduardo do Coronel",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 7800,
        "salarioLiquido": 5772,
        "verbaIndenizatoriaMedia": 5580,
        "gastosGabineteAno": 66960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 25445
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18749
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13392
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9374
          }
        ]
      },
      {
        "id": "5003157-v5",
        "nome": "Silvio Gomes Albuquerque",
        "nomeUrna": "Silvio do Coronel",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 7100,
        "salarioLiquido": 5254,
        "verbaIndenizatoriaMedia": 4440,
        "gastosGabineteAno": 53280,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 20246
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14918
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10656
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7459
          }
        ]
      },
      {
        "id": "5003157-v6",
        "nome": "Roberto Guedes Silva",
        "nomeUrna": "Roberto Guedes",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 7200,
        "salarioLiquido": 5328,
        "verbaIndenizatoriaMedia": 6660,
        "gastosGabineteAno": 79920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 30370
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 22378
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 15984
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 11189
          }
        ]
      },
      {
        "id": "5003157-v7",
        "nome": "Renata Souza Costa",
        "nomeUrna": "Renata do Coronel",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 7600,
        "salarioLiquido": 5624,
        "verbaIndenizatoriaMedia": 5740,
        "gastosGabineteAno": 68880,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 26174
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19286
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13776
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9643
          }
        ]
      },
      {
        "id": "5003157-v8",
        "nome": "Antônio Rezende Campestrini",
        "nomeUrna": "Antônio Rezende",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 7200,
        "salarioLiquido": 5328,
        "verbaIndenizatoriaMedia": 5560,
        "gastosGabineteAno": 66720,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 25354
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18682
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13344
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9341
          }
        ]
      },
      {
        "id": "5003157-v9",
        "nome": "Carlos Albuquerque Ferreira",
        "nomeUrna": "Carlos Albuquerque",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 8000,
        "salarioLiquido": 5920,
        "verbaIndenizatoriaMedia": 5160,
        "gastosGabineteAno": 61920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 23530
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17338
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12384
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8669
          }
        ]
      }
    ]
  },
  {
    "ibge": 5006358,
    "nome": "Paranhos",
    "regiao": "Caminhos da Fronteira",
    "regiaoCor": "#16A34A",
    "populacao": 12975,
    "lat": -23.892,
    "lng": -55.431,
    "prefeito": {
      "nome": "Heliomar Klabunde",
      "partido": "MDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Alfredo Soares (MDB)"
    },
    "financas": {
      "dividaAtiva": 9700000,
      "dividaConsolidada": 4300000,
      "dividaPorHabitante": 331,
      "receitaPrevista": 82000000,
      "receitaRealizada": 83856738,
      "despesaExecutada": 76405504,
      "gastoLegislativoTotal": 1549520,
      "gastoLegislativoPorHabitante": 119.42,
      "indiceTransparenciaTCE": 7.6,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 5379,
      "portalUrl": "https://www.camaraparanhos.ms.gov.br/",
      "prefeituraUrl": "https://www.paranhos.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/paranhos/panorama"
    },
    "vereadores": [
      {
        "id": "5006358-v1",
        "nome": "Helio Acosta",
        "nomeUrna": "Helio Acosta",
        "partido": "PSDB",
        "cargo": "Presidente da Câmara",
        "salarioBase": 10700,
        "salarioLiquido": 7918,
        "verbaIndenizatoriaMedia": 3900,
        "gastosGabineteAno": 46800,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 17784 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 13104 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 9360 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 6552 }
        ]
      },
      {
        "id": "5006358-v2",
        "nome": "Alex Ramos da Silva",
        "nomeUrna": "Alex Enfermeiro",
        "partido": "PP",
        "cargo": "1º Secretário",
        "salarioBase": 7700,
        "salarioLiquido": 5698,
        "verbaIndenizatoriaMedia": 6580,
        "gastosGabineteAno": 78960,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 30005 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 22109 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 15792 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 11054 }
        ]
      },
      {
        "id": "5006358-v3",
        "nome": "Elizabeth Brites Benites",
        "nomeUrna": "Profª Beth",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 7900,
        "salarioLiquido": 5846,
        "verbaIndenizatoriaMedia": 6500,
        "gastosGabineteAno": 78000,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 29640 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 21840 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 15600 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 10920 }
        ]
      },
      {
        "id": "5006358-v4",
        "nome": "Milton Silva",
        "nomeUrna": "Milton Mecânico",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 7900,
        "salarioLiquido": 5846,
        "verbaIndenizatoriaMedia": 4720,
        "gastosGabineteAno": 56640,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 21523 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 15859 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 11328 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 7930 }
        ]
      },
      {
        "id": "5006358-v5",
        "nome": "Claudenir Costa de Oliveira",
        "nomeUrna": "Chacal",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 7200,
        "salarioLiquido": 5328,
        "verbaIndenizatoriaMedia": 6130,
        "gastosGabineteAno": 73560,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 27953 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 20597 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 14712 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 10298 }
        ]
      },
      {
        "id": "5006358-v6",
        "nome": "Ubaldo Arévalo",
        "nomeUrna": "Capitão Ubaldo",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 7400,
        "salarioLiquido": 5476,
        "verbaIndenizatoriaMedia": 5050,
        "gastosGabineteAno": 60600,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 23028 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 16968 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 12120 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 8484 }
        ]
      },
      {
        "id": "5006358-v7",
        "nome": "Cleber Valiente",
        "nomeUrna": "Cleber Valiente",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 7500,
        "salarioLiquido": 5550,
        "verbaIndenizatoriaMedia": 5190,
        "gastosGabineteAno": 62280,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 23666 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 17438 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 12456 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 8719 }
        ]
      },
      {
        "id": "5006358-v8",
        "nome": "Michel Fernandes",
        "nomeUrna": "Michel Fernandes",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 7600,
        "salarioLiquido": 5624,
        "verbaIndenizatoriaMedia": 4910,
        "gastosGabineteAno": 58920,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 22390 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 16498 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 11784 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 8249 }
        ]
      },
      {
        "id": "5006358-v9",
        "nome": "Robson Drews",
        "nomeUrna": "Robson Drews",
        "partido": "PRD",
        "cargo": "Vereador",
        "salarioBase": 7700,
        "salarioLiquido": 5698,
        "verbaIndenizatoriaMedia": 6790,
        "gastosGabineteAno": 81480,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 30962 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 22814 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 16296 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 11407 }
        ]
      }
    ]
  },
  {
    "ibge": 5007950,
    "nome": "Tacuru",
    "regiao": "Caminhos da Fronteira",
    "regiaoCor": "#16A34A",
    "populacao": 10798,
    "lat": -23.633,
    "lng": -55.016,
    "prefeito": {
      "nome": "Rogério Torquetti",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "José Antonio (PSDB)"
    },
    "financas": {
      "dividaAtiva": 9400000,
      "dividaConsolidada": 4200000,
      "dividaPorHabitante": 389,
      "receitaPrevista": 78000000,
      "receitaRealizada": 80275900,
      "despesaExecutada": 75517006,
      "gastoLegislativoTotal": 1409030,
      "gastoLegislativoPorHabitante": 130.49,
      "indiceTransparenciaTCE": 8.4,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 4618,
      "portalUrl": "https://www.camaratacuru.ms.gov.br/",
      "prefeituraUrl": "https://tacuru.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/tacuru/panorama"
    },
    "vereadores": [
      {
        "id": "5007950-v1",
        "nome": "Roberto Gomes Dias",
        "nomeUrna": "Roberto do Tacuru",
        "partido": "MDB",
        "cargo": "Presidente da Câmara",
        "salarioBase": 10800,
        "salarioLiquido": 7992,
        "verbaIndenizatoriaMedia": 5910,
        "gastosGabineteAno": 70920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 26950
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19858
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14184
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9929
          }
        ]
      },
      {
        "id": "5007950-v2",
        "nome": "Lucas Dias Ferreira",
        "nomeUrna": "Lucas do Tacuru",
        "partido": "PODE",
        "cargo": "1º Secretário",
        "salarioBase": 7700,
        "salarioLiquido": 5698,
        "verbaIndenizatoriaMedia": 3340,
        "gastosGabineteAno": 40080,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15230
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11222
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8016
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5611
          }
        ]
      },
      {
        "id": "5007950-v3",
        "nome": "Cristiane Barbosa Pacheco",
        "nomeUrna": "Cristiane do Tacuru",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 7800,
        "salarioLiquido": 5772,
        "verbaIndenizatoriaMedia": 5190,
        "gastosGabineteAno": 62280,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 23666
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17438
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12456
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8719
          }
        ]
      },
      {
        "id": "5007950-v4",
        "nome": "Cristiane Pacheco Lima",
        "nomeUrna": "Cristiane do Tacuru",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 7700,
        "salarioLiquido": 5698,
        "verbaIndenizatoriaMedia": 4750,
        "gastosGabineteAno": 57000,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21660
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15960
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11400
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7980
          }
        ]
      },
      {
        "id": "5007950-v5",
        "nome": "Fábio Rocha Rocha",
        "nomeUrna": "Fábio do Tacuru",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 7300,
        "salarioLiquido": 5402,
        "verbaIndenizatoriaMedia": 4750,
        "gastosGabineteAno": 57000,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21660
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15960
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11400
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7980
          }
        ]
      },
      {
        "id": "5007950-v6",
        "nome": "Luciana Freitas Moreira",
        "nomeUrna": "Luciana do Tacuru",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 7200,
        "salarioLiquido": 5328,
        "verbaIndenizatoriaMedia": 3450,
        "gastosGabineteAno": 41400,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15732
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11592
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8280
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5796
          }
        ]
      },
      {
        "id": "5007950-v7",
        "nome": "Sandra Freitas Alves",
        "nomeUrna": "Sandra Freitas",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 7900,
        "salarioLiquido": 5846,
        "verbaIndenizatoriaMedia": 3470,
        "gastosGabineteAno": 41640,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15823
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11659
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8328
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5830
          }
        ]
      },
      {
        "id": "5007950-v8",
        "nome": "Edson Araújo Guedes",
        "nomeUrna": "Edson do Tacuru",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 7100,
        "salarioLiquido": 5254,
        "verbaIndenizatoriaMedia": 3850,
        "gastosGabineteAno": 46200,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17556
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12936
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9240
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6468
          }
        ]
      },
      {
        "id": "5007950-v9",
        "nome": "Aline Albuquerque Gomes",
        "nomeUrna": "Aline do Tacuru",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 7200,
        "salarioLiquido": 5328,
        "verbaIndenizatoriaMedia": 4350,
        "gastosGabineteAno": 52200,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19836
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14616
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10440
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7308
          }
        ]
      }
    ]
  },
  {
    "ibge": 5007703,
    "nome": "Sete Quedas",
    "regiao": "Caminhos da Fronteira",
    "regiaoCor": "#16A34A",
    "populacao": 10994,
    "lat": -23.955,
    "lng": -55.035,
    "prefeito": {
      "nome": "Erlon Fernando Possa Daneluz",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Roani Tuneira (PL)"
    },
    "financas": {
      "dividaAtiva": 9900000,
      "dividaConsolidada": 4400000,
      "dividaPorHabitante": 400,
      "receitaPrevista": 80000000,
      "receitaRealizada": 76216320,
      "despesaExecutada": 76808327,
      "gastoLegislativoTotal": 1253360,
      "gastoLegislativoPorHabitante": 114,
      "indiceTransparenciaTCE": 9.1,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 2694,
      "portalUrl": "https://www.camarasetequedas.ms.gov.br/",
      "prefeituraUrl": "https://www.setequedas.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/sete-quedas/panorama"
    },
    "vereadores": [
      {
        "id": "5007703-v1",
        "nome": "Daiane Barolo",
        "nomeUrna": "Daiane Barolo",
        "partido": "PL",
        "cargo": "Presidente da Câmara",
        "salarioBase": 10300,
        "salarioLiquido": 7622,
        "verbaIndenizatoriaMedia": 3190,
        "gastosGabineteAno": 38280,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 14546 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 10718 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 7656 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 5359 }
        ]
      },
      {
        "id": "5007703-v2",
        "nome": "Donizete Santa Luzia",
        "nomeUrna": "Donizete Santa Luzia",
        "partido": "PRD",
        "cargo": "1º Secretário",
        "salarioBase": 7900,
        "salarioLiquido": 5846,
        "verbaIndenizatoriaMedia": 3460,
        "gastosGabineteAno": 41520,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 15778 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 11626 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 8304 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 5813 }
        ]
      },
      {
        "id": "5007703-v3",
        "nome": "Ronaldo Neves",
        "nomeUrna": "Ronaldo Neves",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 7100,
        "salarioLiquido": 5254,
        "verbaIndenizatoriaMedia": 2000,
        "gastosGabineteAno": 24000,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 9120 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 6720 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 4800 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 3360 }
        ]
      },
      {
        "id": "5007703-v4",
        "nome": "Saulo Fernandes da Silva",
        "nomeUrna": "Saulinho Moto Táxi",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 7500,
        "salarioLiquido": 5550,
        "verbaIndenizatoriaMedia": 2540,
        "gastosGabineteAno": 30480,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 11582 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 8534 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 6096 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 4267 }
        ]
      },
      {
        "id": "5007703-v5",
        "nome": "Welton Ferreira",
        "nomeUrna": "Professor Welton",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 7400,
        "salarioLiquido": 5476,
        "verbaIndenizatoriaMedia": 3330,
        "gastosGabineteAno": 39960,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 15185 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 11189 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 7992 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 5594 }
        ]
      },
      {
        "id": "5007703-v6",
        "nome": "Paulo Chagas",
        "nomeUrna": "Paulo Chagas",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 7400,
        "salarioLiquido": 5476,
        "verbaIndenizatoriaMedia": 2560,
        "gastosGabineteAno": 30720,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 11674 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 8602 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 6144 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 4301 }
        ]
      },
      {
        "id": "5007703-v7",
        "nome": "Valmir da Silva",
        "nomeUrna": "Miro do Carioca",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 8000,
        "salarioLiquido": 5920,
        "verbaIndenizatoriaMedia": 2620,
        "gastosGabineteAno": 31440,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 11947 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 8803 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 6288 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 4402 }
        ]
      },
      {
        "id": "5007703-v8",
        "nome": "Paolo Marcato",
        "nomeUrna": "Paolo Marcato",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 8000,
        "salarioLiquido": 5920,
        "verbaIndenizatoriaMedia": 2400,
        "gastosGabineteAno": 28800,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 10944 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 8064 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 5760 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 4032 }
        ]
      },
      {
        "id": "5007703-v9",
        "nome": "Jonhn Paulo",
        "nomeUrna": "Jonhn da Farmácia",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 8000,
        "salarioLiquido": 5920,
        "verbaIndenizatoriaMedia": 2990,
        "gastosGabineteAno": 35880,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 13634 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 10046 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 7176 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 5023 }
        ]
      }
    ]
  },
  {
    "ibge": 5005400,
    "nome": "Maracaju",
    "regiao": "Grande Dourados",
    "regiaoCor": "#93C5FD",
    "populacao": 45008,
    "lat": -21.614,
    "lng": -55.168,
    "prefeito": {
      "nome": "Marcos Calderan",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Mauro Christianini (Maurão) (PP)"
    },
    "financas": {
      "dividaAtiva": 52400000,
      "dividaConsolidada": 26100000,
      "dividaPorHabitante": 580,
      "receitaPrevista": 380000000,
      "receitaRealizada": 374137411,
      "despesaExecutada": 368610352,
      "gastoLegislativoTotal": 2766600,
      "gastoLegislativoPorHabitante": 61.47,
      "indiceTransparenciaTCE": 9.3,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 13,
      "gastoMedioMensalGabinete": 7002,
      "portalUrl": "https://www.camaramaracaju.ms.gov.br/",
      "prefeituraUrl": "https://maracaju.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/maracaju/panorama"
    },
    "vereadores": [
      {
        "id": "5005400-v1",
        "nome": "Rafael Carvalho Nogueira",
        "nomeUrna": "Rafael Carvalho",
        "partido": "PP",
        "cargo": "Presidente da Câmara",
        "salarioBase": 13200,
        "salarioLiquido": 9768,
        "verbaIndenizatoriaMedia": 4930,
        "gastosGabineteAno": 59160,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 22481
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16565
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11832
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8282
          }
        ]
      },
      {
        "id": "5005400-v2",
        "nome": "Juliana Souza Sanches",
        "nomeUrna": "Juliana Souza",
        "partido": "PT",
        "cargo": "1º Secretário",
        "salarioBase": 9600,
        "salarioLiquido": 7104,
        "verbaIndenizatoriaMedia": 8000,
        "gastosGabineteAno": 96000,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 36480
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 26880
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 19200
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 13440
          }
        ]
      },
      {
        "id": "5005400-v3",
        "nome": "Renata Martins Miranda",
        "nomeUrna": "Renata do Maracaju",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 9700,
        "salarioLiquido": 7178,
        "verbaIndenizatoriaMedia": 6630,
        "gastosGabineteAno": 79560,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 30233
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 22277
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 15912
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 11138
          }
        ]
      },
      {
        "id": "5005400-v4",
        "nome": "Roberto Araújo Campestrini",
        "nomeUrna": "Roberto do Maracaju",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 10100,
        "salarioLiquido": 7474,
        "verbaIndenizatoriaMedia": 5410,
        "gastosGabineteAno": 64920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24670
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18178
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12984
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9089
          }
        ]
      },
      {
        "id": "5005400-v5",
        "nome": "Cláudio Ferreira Barros",
        "nomeUrna": "Cláudio Ferreira",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 10100,
        "salarioLiquido": 7474,
        "verbaIndenizatoriaMedia": 5300,
        "gastosGabineteAno": 63600,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24168
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17808
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12720
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8904
          }
        ]
      },
      {
        "id": "5005400-v6",
        "nome": "Lucas Albuquerque Gomes",
        "nomeUrna": "Lucas Albuquerque",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 9900,
        "salarioLiquido": 7326,
        "verbaIndenizatoriaMedia": 5460,
        "gastosGabineteAno": 65520,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24898
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18346
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13104
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9173
          }
        ]
      },
      {
        "id": "5005400-v7",
        "nome": "Marcos Rezende Ribeiro",
        "nomeUrna": "Marcos Rezende",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 6350,
        "gastosGabineteAno": 76200,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 28956
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 21336
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 15240
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10668
          }
        ]
      },
      {
        "id": "5005400-v8",
        "nome": "Roberto Barbosa Gomes",
        "nomeUrna": "Roberto Barbosa",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 7490,
        "gastosGabineteAno": 89880,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 34154
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 25166
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 17976
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 12583
          }
        ]
      },
      {
        "id": "5005400-v9",
        "nome": "Ana Araújo Campestrini",
        "nomeUrna": "Ana do Maracaju",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 9600,
        "salarioLiquido": 7104,
        "verbaIndenizatoriaMedia": 9080,
        "gastosGabineteAno": 108960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 41405
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 30509
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 21792
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 15254
          }
        ]
      },
      {
        "id": "5005400-v10",
        "nome": "Maria Barbosa Nogueira",
        "nomeUrna": "Maria do Maracaju",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 10100,
        "salarioLiquido": 7474,
        "verbaIndenizatoriaMedia": 6020,
        "gastosGabineteAno": 72240,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 27451
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 20227
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14448
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10114
          }
        ]
      },
      {
        "id": "5005400-v11",
        "nome": "Rafael Moreira Costa",
        "nomeUrna": "Rafael do Maracaju",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 5400,
        "gastosGabineteAno": 64800,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24624
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18144
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12960
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9072
          }
        ]
      },
      {
        "id": "5005400-v12",
        "nome": "João Carvalho Dias",
        "nomeUrna": "João do Maracaju",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 10200,
        "salarioLiquido": 7548,
        "verbaIndenizatoriaMedia": 8810,
        "gastosGabineteAno": 105720,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 40174
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 29602
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 21144
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 14801
          }
        ]
      },
      {
        "id": "5005400-v13",
        "nome": "Antônio Pereira Santos",
        "nomeUrna": "Antônio do Maracaju",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 6700,
        "gastosGabineteAno": 80400,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 30552
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 22512
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 16080
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 11256
          }
        ]
      }
    ]
  },
  {
    "ibge": 5007208,
    "nome": "Rio Brilhante",
    "regiao": "Grande Dourados",
    "regiaoCor": "#93C5FD",
    "populacao": 37601,
    "lat": -21.801,
    "lng": -54.545,
    "prefeito": {
      "nome": "Lucas Foroni",
      "partido": "MDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Dr. Leonardo (PSDB)"
    },
    "financas": {
      "dividaAtiva": 36800000,
      "dividaConsolidada": 18000000,
      "dividaPorHabitante": 479,
      "receitaPrevista": 270000000,
      "receitaRealizada": 276000931,
      "despesaExecutada": 261735791,
      "gastoLegislativoTotal": 2458010,
      "gastoLegislativoPorHabitante": 65.37,
      "indiceTransparenciaTCE": 7.6,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 13,
      "gastoMedioMensalGabinete": 4561,
      "portalUrl": "https://www.camarariobrilhante.ms.gov.br/",
      "prefeituraUrl": "https://riobrilhante.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/rio-brilhante/panorama"
    },
    "vereadores": [
      {
        "id": "5007208-v1",
        "nome": "Fábio Pereira Albuquerque",
        "nomeUrna": "Fábio do Rio",
        "partido": "PP",
        "cargo": "Presidente da Câmara",
        "salarioBase": 13000,
        "salarioLiquido": 9620,
        "verbaIndenizatoriaMedia": 5660,
        "gastosGabineteAno": 67920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 25810
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19018
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13584
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9509
          }
        ]
      },
      {
        "id": "5007208-v2",
        "nome": "José Oliveira Barbosa",
        "nomeUrna": "José do Rio",
        "partido": "MDB",
        "cargo": "1º Secretário",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 4710,
        "gastosGabineteAno": 56520,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21478
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15826
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11304
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7913
          }
        ]
      },
      {
        "id": "5007208-v3",
        "nome": "Antônio Alves Lima",
        "nomeUrna": "Antônio do Rio",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 10300,
        "salarioLiquido": 7622,
        "verbaIndenizatoriaMedia": 4950,
        "gastosGabineteAno": 59400,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 22572
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16632
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11880
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8316
          }
        ]
      },
      {
        "id": "5007208-v4",
        "nome": "Rogério Silva Santos",
        "nomeUrna": "Rogério do Rio",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 10100,
        "salarioLiquido": 7474,
        "verbaIndenizatoriaMedia": 5750,
        "gastosGabineteAno": 69000,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 26220
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19320
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13800
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9660
          }
        ]
      },
      {
        "id": "5007208-v5",
        "nome": "Rafael Martins Souza",
        "nomeUrna": "Rafael Martins",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 9900,
        "salarioLiquido": 7326,
        "verbaIndenizatoriaMedia": 3730,
        "gastosGabineteAno": 44760,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17009
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12533
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8952
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6266
          }
        ]
      },
      {
        "id": "5007208-v6",
        "nome": "Paulo Souza Alves",
        "nomeUrna": "Paulo do Rio",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 9400,
        "salarioLiquido": 6956,
        "verbaIndenizatoriaMedia": 5140,
        "gastosGabineteAno": 61680,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 23438
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17270
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12336
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8635
          }
        ]
      },
      {
        "id": "5007208-v7",
        "nome": "Cristiane Pereira Souza",
        "nomeUrna": "Cristiane do Rio",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 9300,
        "salarioLiquido": 6882,
        "verbaIndenizatoriaMedia": 3330,
        "gastosGabineteAno": 39960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15185
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11189
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7992
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5594
          }
        ]
      },
      {
        "id": "5007208-v8",
        "nome": "Marcos Rocha Melo",
        "nomeUrna": "Marcos Rocha",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 3780,
        "gastosGabineteAno": 45360,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17237
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12701
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9072
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6350
          }
        ]
      },
      {
        "id": "5007208-v9",
        "nome": "João Rocha Sanches",
        "nomeUrna": "João Rocha",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 3280,
        "gastosGabineteAno": 39360,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 14957
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11021
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7872
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5510
          }
        ]
      },
      {
        "id": "5007208-v10",
        "nome": "Lucas Guedes Campestrini",
        "nomeUrna": "Lucas Guedes",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 3390,
        "gastosGabineteAno": 40680,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15458
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11390
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8136
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5695
          }
        ]
      },
      {
        "id": "5007208-v11",
        "nome": "Cláudio Martins Campestrini",
        "nomeUrna": "Cláudio Martins",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 9400,
        "salarioLiquido": 6956,
        "verbaIndenizatoriaMedia": 5700,
        "gastosGabineteAno": 68400,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 25992
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19152
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13680
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9576
          }
        ]
      },
      {
        "id": "5007208-v12",
        "nome": "João Pereira Carvalho",
        "nomeUrna": "João do Rio",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 10200,
        "salarioLiquido": 7548,
        "verbaIndenizatoriaMedia": 5900,
        "gastosGabineteAno": 70800,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 26904
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19824
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14160
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9912
          }
        ]
      },
      {
        "id": "5007208-v13",
        "nome": "Marcelo Martins Souza",
        "nomeUrna": "Marcelo do Rio",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 9900,
        "salarioLiquido": 7326,
        "verbaIndenizatoriaMedia": 5320,
        "gastosGabineteAno": 63840,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24259
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17875
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12768
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8938
          }
        ]
      }
    ]
  },
  {
    "ibge": 5004502,
    "nome": "Itaporã",
    "regiao": "Grande Dourados",
    "regiaoCor": "#93C5FD",
    "populacao": 24137,
    "lat": -22.08,
    "lng": -54.791,
    "prefeito": {
      "nome": "Tiago Carbonaro",
      "partido": "PP",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Edilson Bigatão (PL)"
    },
    "financas": {
      "dividaAtiva": 21300000,
      "dividaConsolidada": 10200000,
      "dividaPorHabitante": 423,
      "receitaPrevista": 152000000,
      "receitaRealizada": 149429424,
      "despesaExecutada": 140782274,
      "gastoLegislativoTotal": 2403010,
      "gastoLegislativoPorHabitante": 99.56,
      "indiceTransparenciaTCE": 9,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 11,
      "gastoMedioMensalGabinete": 7057,
      "portalUrl": "https://www.camaraitapora.ms.gov.br/",
      "prefeituraUrl": "https://itapora.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/itapora/panorama"
    },
    "vereadores": [
      {
        "id": "5004502-v1",
        "nome": "José Carvalho Araújo",
        "nomeUrna": "José Carvalho",
        "partido": "PP",
        "cargo": "Presidente da Câmara",
        "salarioBase": 13200,
        "salarioLiquido": 9768,
        "verbaIndenizatoriaMedia": 6410,
        "gastosGabineteAno": 76920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 29230
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 21538
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 15384
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10769
          }
        ]
      },
      {
        "id": "5004502-v2",
        "nome": "Sandra Miranda Lima",
        "nomeUrna": "Sandra do Itaporã",
        "partido": "REPUBLICANOS",
        "cargo": "1º Secretário",
        "salarioBase": 9300,
        "salarioLiquido": 6882,
        "verbaIndenizatoriaMedia": 7560,
        "gastosGabineteAno": 90720,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 34474
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 25402
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 18144
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 12701
          }
        ]
      },
      {
        "id": "5004502-v3",
        "nome": "Marcos Nogueira Albuquerque",
        "nomeUrna": "Marcos do Itaporã",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 9700,
        "salarioLiquido": 7178,
        "verbaIndenizatoriaMedia": 6540,
        "gastosGabineteAno": 78480,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 29822
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 21974
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 15696
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10987
          }
        ]
      },
      {
        "id": "5004502-v4",
        "nome": "Aline Barbosa Pacheco",
        "nomeUrna": "Aline Barbosa",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 9900,
        "salarioLiquido": 7326,
        "verbaIndenizatoriaMedia": 8220,
        "gastosGabineteAno": 98640,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 37483
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 27619
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 19728
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 13810
          }
        ]
      },
      {
        "id": "5004502-v5",
        "nome": "Patrícia Moreira Costa",
        "nomeUrna": "Patrícia Moreira",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 9600,
        "salarioLiquido": 7104,
        "verbaIndenizatoriaMedia": 7940,
        "gastosGabineteAno": 95280,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 36206
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 26678
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 19056
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 13339
          }
        ]
      },
      {
        "id": "5004502-v6",
        "nome": "José Sanches Rocha",
        "nomeUrna": "José do Itaporã",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 10300,
        "salarioLiquido": 7622,
        "verbaIndenizatoriaMedia": 8260,
        "gastosGabineteAno": 99120,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 37666
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 27754
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 19824
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 13877
          }
        ]
      },
      {
        "id": "5004502-v7",
        "nome": "Luciana Barbosa Rocha",
        "nomeUrna": "Luciana Barbosa",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 10000,
        "salarioLiquido": 7400,
        "verbaIndenizatoriaMedia": 6880,
        "gastosGabineteAno": 82560,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 31373
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 23117
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 16512
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 11558
          }
        ]
      },
      {
        "id": "5004502-v8",
        "nome": "Sandra Lima Guedes",
        "nomeUrna": "Sandra do Itaporã",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 10100,
        "salarioLiquido": 7474,
        "verbaIndenizatoriaMedia": 8490,
        "gastosGabineteAno": 101880,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 38714
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 28526
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 20376
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 14263
          }
        ]
      },
      {
        "id": "5004502-v9",
        "nome": "Sandra Barros Nogueira",
        "nomeUrna": "Sandra do Itaporã",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 5240,
        "gastosGabineteAno": 62880,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 23894
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17606
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12576
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8803
          }
        ]
      },
      {
        "id": "5004502-v10",
        "nome": "Maria Lima Barros",
        "nomeUrna": "Maria do Itaporã",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 10000,
        "salarioLiquido": 7400,
        "verbaIndenizatoriaMedia": 5870,
        "gastosGabineteAno": 70440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 26767
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19723
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14088
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9862
          }
        ]
      },
      {
        "id": "5004502-v11",
        "nome": "Eduardo Gomes Miranda",
        "nomeUrna": "Eduardo do Itaporã",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 5040,
        "gastosGabineteAno": 60480,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 22982
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16934
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12096
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8467
          }
        ]
      }
    ]
  },
  {
    "ibge": 5003702,
    "nome": "Dourados",
    "regiao": "Grande Dourados",
    "regiaoCor": "#93C5FD",
    "populacao": 243368,
    "lat": -22.221,
    "lng": -54.805,
    "prefeito": {
      "nome": "Marçal Filho",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Gianni Nogueira (PL)"
    },
    "financas": {
      "dividaAtiva": 340500000,
      "dividaConsolidada": 185000000,
      "dividaPorHabitante": 760,
      "receitaPrevista": 1580000000,
      "receitaRealizada": 1532349595,
      "despesaExecutada": 1518079770,
      "gastoLegislativoTotal": 7167180,
      "gastoLegislativoPorHabitante": 29.45,
      "indiceTransparenciaTCE": 8.9,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 21,
      "gastoMedioMensalGabinete": 9889,
      "portalUrl": "https://www.camaradourados.ms.gov.br/",
      "prefeituraUrl": "https://www.dourados.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/dourados/panorama"
    },
    "vereadores": [
      {
        "id": "5003702-v1",
        "nome": "Liandra Brambilla",
        "nomeUrna": "Vereadora Liandra",
        "partido": "PSDB",
        "cargo": "Presidente da Câmara",
        "salarioBase": 19100,
        "salarioLiquido": 14134,
        "verbaIndenizatoriaMedia": 10330,
        "gastosGabineteAno": 123960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 47105
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 34709
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 24792
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 17354
          }
        ]
      },
      {
        "id": "5003702-v2",
        "nome": "Mauricio Lemes",
        "nomeUrna": "Mauricio Lemes",
        "partido": "PSB",
        "cargo": "Vice-Presidente",
        "salarioBase": 16300,
        "salarioLiquido": 12062,
        "verbaIndenizatoriaMedia": 10350,
        "gastosGabineteAno": 124200,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 47196
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 34776
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 24840
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 17388
          }
        ]
      },
      {
        "id": "5003702-v3",
        "nome": "Maria Silva Gomes",
        "nomeUrna": "Maria Silva",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 16600,
        "salarioLiquido": 12284,
        "verbaIndenizatoriaMedia": 12300,
        "gastosGabineteAno": 147600,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 56088
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 41328
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 29520
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 20664
          }
        ]
      },
      {
        "id": "5003702-v4",
        "nome": "Edson Sanches Ribeiro",
        "nomeUrna": "Edson do Dourados",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 16500,
        "salarioLiquido": 12210,
        "verbaIndenizatoriaMedia": 8870,
        "gastosGabineteAno": 106440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 40447
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 29803
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 21288
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 14902
          }
        ]
      },
      {
        "id": "5003702-v5",
        "nome": "Luciana Rocha Pacheco",
        "nomeUrna": "Luciana Rocha",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 16500,
        "salarioLiquido": 12210,
        "verbaIndenizatoriaMedia": 7780,
        "gastosGabineteAno": 93360,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 35477
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 26141
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 18672
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 13070
          }
        ]
      },
      {
        "id": "5003702-v6",
        "nome": "Luiz Santos Pacheco",
        "nomeUrna": "Luiz do Dourados",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 16200,
        "salarioLiquido": 11988,
        "verbaIndenizatoriaMedia": 12220,
        "gastosGabineteAno": 146640,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 55723
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 41059
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 29328
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 20530
          }
        ]
      },
      {
        "id": "5003702-v7",
        "nome": "José Pereira Moreira",
        "nomeUrna": "José Pereira",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 16900,
        "salarioLiquido": 12506,
        "verbaIndenizatoriaMedia": 11260,
        "gastosGabineteAno": 135120,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 51346
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 37834
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 27024
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 18917
          }
        ]
      },
      {
        "id": "5003702-v8",
        "nome": "Cristiane Nogueira Pacheco",
        "nomeUrna": "Cristiane do Dourados",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 16200,
        "salarioLiquido": 11988,
        "verbaIndenizatoriaMedia": 10890,
        "gastosGabineteAno": 130680,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 49658
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 36590
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 26136
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 18295
          }
        ]
      },
      {
        "id": "5003702-v9",
        "nome": "Fernando Ribeiro Barbosa",
        "nomeUrna": "Fernando Ribeiro",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 16800,
        "salarioLiquido": 12432,
        "verbaIndenizatoriaMedia": 10480,
        "gastosGabineteAno": 125760,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 47789
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 35213
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 25152
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 17606
          }
        ]
      },
      {
        "id": "5003702-v10",
        "nome": "Paulo Souza Guedes",
        "nomeUrna": "Paulo Souza",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 16400,
        "salarioLiquido": 12136,
        "verbaIndenizatoriaMedia": 11100,
        "gastosGabineteAno": 133200,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 50616
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 37296
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 26640
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 18648
          }
        ]
      },
      {
        "id": "5003702-v11",
        "nome": "Rafael Barbosa Albuquerque",
        "nomeUrna": "Rafael Barbosa",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 16100,
        "salarioLiquido": 11914,
        "verbaIndenizatoriaMedia": 10460,
        "gastosGabineteAno": 125520,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 47698
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 35146
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 25104
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 17573
          }
        ]
      },
      {
        "id": "5003702-v12",
        "nome": "Márcio Freitas Campestrini",
        "nomeUrna": "Márcio do Dourados",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 16100,
        "salarioLiquido": 11914,
        "verbaIndenizatoriaMedia": 7530,
        "gastosGabineteAno": 90360,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 34337
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 25301
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 18072
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 12650
          }
        ]
      },
      {
        "id": "5003702-v13",
        "nome": "João Alves Lima",
        "nomeUrna": "João do Dourados",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 16900,
        "salarioLiquido": 12506,
        "verbaIndenizatoriaMedia": 10230,
        "gastosGabineteAno": 122760,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 46649
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 34373
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 24552
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 17186
          }
        ]
      },
      {
        "id": "5003702-v14",
        "nome": "Camila Costa Guedes",
        "nomeUrna": "Camila do Dourados",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 16700,
        "salarioLiquido": 12358,
        "verbaIndenizatoriaMedia": 9430,
        "gastosGabineteAno": 113160,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 43001
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 31685
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 22632
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 15842
          }
        ]
      },
      {
        "id": "5003702-v15",
        "nome": "João Ferreira Alves",
        "nomeUrna": "João do Dourados",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 16200,
        "salarioLiquido": 11988,
        "verbaIndenizatoriaMedia": 9860,
        "gastosGabineteAno": 118320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 44962
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 33130
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 23664
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 16565
          }
        ]
      },
      {
        "id": "5003702-v16",
        "nome": "Ana Pereira Miranda",
        "nomeUrna": "Ana Pereira",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 16900,
        "salarioLiquido": 12506,
        "verbaIndenizatoriaMedia": 12830,
        "gastosGabineteAno": 153960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 58505
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 43109
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 30792
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 21554
          }
        ]
      },
      {
        "id": "5003702-v17",
        "nome": "Juliana Carvalho Guedes",
        "nomeUrna": "Juliana Carvalho",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 16000,
        "salarioLiquido": 11840,
        "verbaIndenizatoriaMedia": 9470,
        "gastosGabineteAno": 113640,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 43183
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 31819
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 22728
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 15910
          }
        ]
      },
      {
        "id": "5003702-v18",
        "nome": "Marcos Alves Melo",
        "nomeUrna": "Marcos do Dourados",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 16500,
        "salarioLiquido": 12210,
        "verbaIndenizatoriaMedia": 9980,
        "gastosGabineteAno": 119760,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 45509
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 33533
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 23952
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 16766
          }
        ]
      },
      {
        "id": "5003702-v19",
        "nome": "Cláudio Freitas Oliveira",
        "nomeUrna": "Cláudio Freitas",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 16300,
        "salarioLiquido": 12062,
        "verbaIndenizatoriaMedia": 8170,
        "gastosGabineteAno": 98040,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 37255
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 27451
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 19608
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 13726
          }
        ]
      },
      {
        "id": "5003702-v20",
        "nome": "Roberto Santos Campestrini",
        "nomeUrna": "Roberto Santos",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 16900,
        "salarioLiquido": 12506,
        "verbaIndenizatoriaMedia": 10400,
        "gastosGabineteAno": 124800,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 47424
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 34944
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 24960
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 17472
          }
        ]
      },
      {
        "id": "5003702-v21",
        "nome": "Sandra Melo Miranda",
        "nomeUrna": "Sandra do Dourados",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 16500,
        "salarioLiquido": 12210,
        "verbaIndenizatoriaMedia": 6960,
        "gastosGabineteAno": 83520,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 31738
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 23386
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 16704
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 11693
          }
        ]
      }
    ]
  },
  {
    "ibge": 5003504,
    "nome": "Douradina",
    "regiao": "Grande Dourados",
    "regiaoCor": "#93C5FD",
    "populacao": 5578,
    "lat": -22.041,
    "lng": -54.614,
    "prefeito": {
      "nome": "Mário",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Alceu Marques (MDB)"
    },
    "financas": {
      "dividaAtiva": 5400000,
      "dividaConsolidada": 2300000,
      "dividaPorHabitante": 412,
      "receitaPrevista": 52000000,
      "receitaRealizada": 53378960,
      "despesaExecutada": 49493229,
      "gastoLegislativoTotal": 1300170,
      "gastoLegislativoPorHabitante": 233.09,
      "indiceTransparenciaTCE": 7.9,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 4359,
      "portalUrl": "https://www.camaradouradina.ms.gov.br/",
      "prefeituraUrl": "https://douradina.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/douradina/panorama"
    },
    "vereadores": [
      {
        "id": "5003504-v1",
        "nome": "Roberto Costa Pereira",
        "nomeUrna": "Roberto do Douradina",
        "partido": "MDB",
        "cargo": "Presidente da Câmara",
        "salarioBase": 9600,
        "salarioLiquido": 7104,
        "verbaIndenizatoriaMedia": 4100,
        "gastosGabineteAno": 49200,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 18696
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13776
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9840
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6888
          }
        ]
      },
      {
        "id": "5003504-v2",
        "nome": "Juliana Souza Oliveira",
        "nomeUrna": "Juliana do Douradina",
        "partido": "PDT",
        "cargo": "1º Secretário",
        "salarioBase": 6800,
        "salarioLiquido": 5032,
        "verbaIndenizatoriaMedia": 4750,
        "gastosGabineteAno": 57000,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21660
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15960
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11400
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7980
          }
        ]
      },
      {
        "id": "5003504-v3",
        "nome": "Luciana Barros Rocha",
        "nomeUrna": "Luciana do Douradina",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 6900,
        "salarioLiquido": 5106,
        "verbaIndenizatoriaMedia": 3690,
        "gastosGabineteAno": 44280,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 16826
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12398
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8856
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6199
          }
        ]
      },
      {
        "id": "5003504-v4",
        "nome": "Paulo Santos Freitas",
        "nomeUrna": "Paulo Santos",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 6500,
        "salarioLiquido": 4810,
        "verbaIndenizatoriaMedia": 4220,
        "gastosGabineteAno": 50640,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19243
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14179
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10128
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7090
          }
        ]
      },
      {
        "id": "5003504-v5",
        "nome": "Renata Melo Melo",
        "nomeUrna": "Renata do Douradina",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 6100,
        "salarioLiquido": 4514,
        "verbaIndenizatoriaMedia": 4340,
        "gastosGabineteAno": 52080,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19790
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14582
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10416
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7291
          }
        ]
      },
      {
        "id": "5003504-v6",
        "nome": "Eduardo Martins Araújo",
        "nomeUrna": "Eduardo Martins",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 6800,
        "salarioLiquido": 5032,
        "verbaIndenizatoriaMedia": 3510,
        "gastosGabineteAno": 42120,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 16006
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11794
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8424
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5897
          }
        ]
      },
      {
        "id": "5003504-v7",
        "nome": "Patrícia Araújo Campestrini",
        "nomeUrna": "Patrícia do Douradina",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 6900,
        "salarioLiquido": 5106,
        "verbaIndenizatoriaMedia": 5370,
        "gastosGabineteAno": 64440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24487
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18043
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12888
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9022
          }
        ]
      },
      {
        "id": "5003504-v8",
        "nome": "Camila Albuquerque Rezende",
        "nomeUrna": "Camila do Douradina",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 7000,
        "salarioLiquido": 5180,
        "verbaIndenizatoriaMedia": 3690,
        "gastosGabineteAno": 44280,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 16826
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12398
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8856
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6199
          }
        ]
      },
      {
        "id": "5003504-v9",
        "nome": "Marcos Freitas Gomes",
        "nomeUrna": "Marcos do Douradina",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 6700,
        "salarioLiquido": 4958,
        "verbaIndenizatoriaMedia": 4520,
        "gastosGabineteAno": 54240,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 20611
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15187
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10848
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7594
          }
        ]
      }
    ]
  },
  {
    "ibge": 5003801,
    "nome": "Fátima do Sul",
    "regiao": "Grande Dourados",
    "regiaoCor": "#93C5FD",
    "populacao": 19163,
    "lat": -22.378,
    "lng": -54.512,
    "prefeito": {
      "nome": "Wagner da Garagem",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Silvana Vasconcelos (Podemos)"
    },
    "financas": {
      "dividaAtiva": 18200000,
      "dividaConsolidada": 8700000,
      "dividaPorHabitante": 454,
      "receitaPrevista": 130000000,
      "receitaRealizada": 131625095,
      "despesaExecutada": 124232486,
      "gastoLegislativoTotal": 1561460,
      "gastoLegislativoPorHabitante": 81.48,
      "indiceTransparenciaTCE": 8.4,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 11,
      "gastoMedioMensalGabinete": 3368,
      "portalUrl": "https://www.camarafatimadosul.ms.gov.br/",
      "prefeituraUrl": "https://fatimadosul.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/fatima-do-sul/panorama"
    },
    "vereadores": [
      {
        "id": "5003801-v1",
        "nome": "Lucas Alves Rocha",
        "nomeUrna": "Lucas Alves",
        "partido": "PP",
        "cargo": "Presidente da Câmara",
        "salarioBase": 10500,
        "salarioLiquido": 7770,
        "verbaIndenizatoriaMedia": 3810,
        "gastosGabineteAno": 45720,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17374
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12802
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9144
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6401
          }
        ]
      },
      {
        "id": "5003801-v2",
        "nome": "Paulo Miranda Pereira",
        "nomeUrna": "Paulo do Fátima",
        "partido": "REPUBLICANOS",
        "cargo": "1º Secretário",
        "salarioBase": 8000,
        "salarioLiquido": 5920,
        "verbaIndenizatoriaMedia": 4280,
        "gastosGabineteAno": 51360,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19517
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14381
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10272
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7190
          }
        ]
      },
      {
        "id": "5003801-v3",
        "nome": "Luiz Guedes Ferreira",
        "nomeUrna": "Luiz Guedes",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 7400,
        "salarioLiquido": 5476,
        "verbaIndenizatoriaMedia": 2460,
        "gastosGabineteAno": 29520,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 11218
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 8266
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5904
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4133
          }
        ]
      },
      {
        "id": "5003801-v4",
        "nome": "Rafael Melo Nogueira",
        "nomeUrna": "Rafael do Fátima",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 7500,
        "salarioLiquido": 5550,
        "verbaIndenizatoriaMedia": 3160,
        "gastosGabineteAno": 37920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 14410
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10618
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7584
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5309
          }
        ]
      },
      {
        "id": "5003801-v5",
        "nome": "Maria Oliveira Carvalho",
        "nomeUrna": "Maria do Fátima",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 7200,
        "salarioLiquido": 5328,
        "verbaIndenizatoriaMedia": 3120,
        "gastosGabineteAno": 37440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 14227
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10483
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7488
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5242
          }
        ]
      },
      {
        "id": "5003801-v6",
        "nome": "Marcos Campestrini Araújo",
        "nomeUrna": "Marcos Campestrini",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 7600,
        "salarioLiquido": 5624,
        "verbaIndenizatoriaMedia": 4000,
        "gastosGabineteAno": 48000,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 18240
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13440
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9600
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6720
          }
        ]
      },
      {
        "id": "5003801-v7",
        "nome": "Rogério Miranda Costa",
        "nomeUrna": "Rogério Miranda",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 7000,
        "salarioLiquido": 5180,
        "verbaIndenizatoriaMedia": 3520,
        "gastosGabineteAno": 42240,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 16051
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11827
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8448
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5914
          }
        ]
      },
      {
        "id": "5003801-v8",
        "nome": "João Freitas Miranda",
        "nomeUrna": "João do Fátima",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 7200,
        "salarioLiquido": 5328,
        "verbaIndenizatoriaMedia": 2390,
        "gastosGabineteAno": 28680,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 10898
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 8030
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5736
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4015
          }
        ]
      },
      {
        "id": "5003801-v9",
        "nome": "Carlos Barbosa Guedes",
        "nomeUrna": "Carlos do Fátima",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 7200,
        "salarioLiquido": 5328,
        "verbaIndenizatoriaMedia": 3470,
        "gastosGabineteAno": 41640,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15823
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11659
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8328
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5830
          }
        ]
      },
      {
        "id": "5003801-v10",
        "nome": "Silvio Guedes Ferreira",
        "nomeUrna": "Silvio do Fátima",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 7000,
        "salarioLiquido": 5180,
        "verbaIndenizatoriaMedia": 2790,
        "gastosGabineteAno": 33480,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 12722
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 9374
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6696
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4687
          }
        ]
      },
      {
        "id": "5003801-v11",
        "nome": "Rogério Rocha Ferreira",
        "nomeUrna": "Rogério do Fátima",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 7600,
        "salarioLiquido": 5624,
        "verbaIndenizatoriaMedia": 3800,
        "gastosGabineteAno": 45600,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17328
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12768
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9120
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6384
          }
        ]
      }
    ]
  },
  {
    "ibge": 5008404,
    "nome": "Vicentina",
    "regiao": "Grande Dourados",
    "regiaoCor": "#93C5FD",
    "populacao": 6336,
    "lat": -22.408,
    "lng": -54.442,
    "prefeito": {
      "nome": "Cleber",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Eduardo Costa (Oncinha) (Republicanos)"
    },
    "financas": {
      "dividaAtiva": 6200000,
      "dividaConsolidada": 2700000,
      "dividaPorHabitante": 426,
      "receitaPrevista": 58000000,
      "receitaRealizada": 58949181,
      "despesaExecutada": 53678836,
      "gastoLegislativoTotal": 1177860,
      "gastoLegislativoPorHabitante": 185.9,
      "indiceTransparenciaTCE": 8.5,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 3419,
      "portalUrl": "https://www.camaravicentina.ms.gov.br/",
      "prefeituraUrl": "https://vicentina.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/vicentina/panorama"
    },
    "vereadores": [
      {
        "id": "5008404-v1",
        "nome": "João Pacheco Freitas",
        "nomeUrna": "João do Vicentina",
        "partido": "PDT",
        "cargo": "Presidente da Câmara",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 3310,
        "gastosGabineteAno": 39720,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15094
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11122
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7944
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5561
          }
        ]
      },
      {
        "id": "5008404-v2",
        "nome": "Fernando Campestrini Costa",
        "nomeUrna": "Fernando do Vicentina",
        "partido": "PSB",
        "cargo": "1º Secretário",
        "salarioBase": 6100,
        "salarioLiquido": 4514,
        "verbaIndenizatoriaMedia": 4230,
        "gastosGabineteAno": 50760,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19289
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14213
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10152
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7106
          }
        ]
      },
      {
        "id": "5008404-v3",
        "nome": "Juliana Barros Dias",
        "nomeUrna": "Juliana Barros",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 6200,
        "salarioLiquido": 4588,
        "verbaIndenizatoriaMedia": 4060,
        "gastosGabineteAno": 48720,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 18514
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13642
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9744
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6821
          }
        ]
      },
      {
        "id": "5008404-v4",
        "nome": "Juliana Melo Dias",
        "nomeUrna": "Juliana do Vicentina",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 7000,
        "salarioLiquido": 5180,
        "verbaIndenizatoriaMedia": 2620,
        "gastosGabineteAno": 31440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 11947
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 8803
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6288
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4402
          }
        ]
      },
      {
        "id": "5008404-v5",
        "nome": "Rogério Freitas Melo",
        "nomeUrna": "Rogério Freitas",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 6800,
        "salarioLiquido": 5032,
        "verbaIndenizatoriaMedia": 2940,
        "gastosGabineteAno": 35280,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 13406
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 9878
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7056
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4939
          }
        ]
      },
      {
        "id": "5008404-v6",
        "nome": "José Campestrini Alves",
        "nomeUrna": "José do Vicentina",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 6000,
        "salarioLiquido": 4440,
        "verbaIndenizatoriaMedia": 3490,
        "gastosGabineteAno": 41880,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15914
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11726
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8376
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5863
          }
        ]
      },
      {
        "id": "5008404-v7",
        "nome": "Aline Pacheco Martins",
        "nomeUrna": "Aline Pacheco",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 6000,
        "salarioLiquido": 4440,
        "verbaIndenizatoriaMedia": 4330,
        "gastosGabineteAno": 51960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19745
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14549
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10392
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7274
          }
        ]
      },
      {
        "id": "5008404-v8",
        "nome": "Fábio Silva Carvalho",
        "nomeUrna": "Fábio do Vicentina",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 6400,
        "salarioLiquido": 4736,
        "verbaIndenizatoriaMedia": 2430,
        "gastosGabineteAno": 29160,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 11081
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 8165
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5832
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4082
          }
        ]
      },
      {
        "id": "5008404-v9",
        "nome": "Maria Sanches Souza",
        "nomeUrna": "Maria Sanches",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 6600,
        "salarioLiquido": 4884,
        "verbaIndenizatoriaMedia": 3580,
        "gastosGabineteAno": 42960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 16325
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12029
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8592
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6014
          }
        ]
      }
    ]
  },
  {
    "ibge": 5002407,
    "nome": "Caarapó",
    "regiao": "Grande Dourados",
    "regiaoCor": "#93C5FD",
    "populacao": 30612,
    "lat": -22.634,
    "lng": -54.823,
    "prefeito": {
      "nome": "Professor Pontinha",
      "partido": "PP",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Jéssica Valério (PL)"
    },
    "financas": {
      "dividaAtiva": 27800000,
      "dividaConsolidada": 13600000,
      "dividaPorHabitante": 444,
      "receitaPrevista": 195000000,
      "receitaRealizada": 196003300,
      "despesaExecutada": 179754832,
      "gastoLegislativoTotal": 2000580,
      "gastoLegislativoPorHabitante": 65.35,
      "indiceTransparenciaTCE": 9.6,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 11,
      "gastoMedioMensalGabinete": 3957,
      "portalUrl": "https://www.camaracaarapo.ms.gov.br/",
      "prefeituraUrl": "https://caarapo.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/caarapo/panorama"
    },
    "vereadores": [
      {
        "id": "5002407-v1",
        "nome": "Roberto Melo Guedes",
        "nomeUrna": "Roberto Melo",
        "partido": "MDB",
        "cargo": "Presidente da Câmara",
        "salarioBase": 13200,
        "salarioLiquido": 9768,
        "verbaIndenizatoriaMedia": 3300,
        "gastosGabineteAno": 39600,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15048
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11088
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7920
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5544
          }
        ]
      },
      {
        "id": "5002407-v2",
        "nome": "Antônio Ribeiro Barros",
        "nomeUrna": "Antônio do Caarapó",
        "partido": "PODE",
        "cargo": "1º Secretário",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 4390,
        "gastosGabineteAno": 52680,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 20018
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14750
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10536
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7375
          }
        ]
      },
      {
        "id": "5002407-v3",
        "nome": "Antônio Melo Albuquerque",
        "nomeUrna": "Antônio do Caarapó",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 9300,
        "salarioLiquido": 6882,
        "verbaIndenizatoriaMedia": 4470,
        "gastosGabineteAno": 53640,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 20383
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15019
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10728
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7510
          }
        ]
      },
      {
        "id": "5002407-v4",
        "nome": "Cláudio Rezende Souza",
        "nomeUrna": "Cláudio do Caarapó",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 10300,
        "salarioLiquido": 7622,
        "verbaIndenizatoriaMedia": 3150,
        "gastosGabineteAno": 37800,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 14364
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10584
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7560
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5292
          }
        ]
      },
      {
        "id": "5002407-v5",
        "nome": "João Oliveira Pereira",
        "nomeUrna": "João do Caarapó",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 9600,
        "salarioLiquido": 7104,
        "verbaIndenizatoriaMedia": 3890,
        "gastosGabineteAno": 46680,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17738
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13070
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9336
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6535
          }
        ]
      },
      {
        "id": "5002407-v6",
        "nome": "Cláudio Barros Pacheco",
        "nomeUrna": "Cláudio do Caarapó",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 9600,
        "salarioLiquido": 7104,
        "verbaIndenizatoriaMedia": 4730,
        "gastosGabineteAno": 56760,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21569
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15893
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11352
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7946
          }
        ]
      },
      {
        "id": "5002407-v7",
        "nome": "Luciana Nogueira Gomes",
        "nomeUrna": "Luciana do Caarapó",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 10100,
        "salarioLiquido": 7474,
        "verbaIndenizatoriaMedia": 3160,
        "gastosGabineteAno": 37920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 14410
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10618
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7584
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5309
          }
        ]
      },
      {
        "id": "5002407-v8",
        "nome": "Fernando Freitas Gomes",
        "nomeUrna": "Fernando do Caarapó",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 10100,
        "salarioLiquido": 7474,
        "verbaIndenizatoriaMedia": 4060,
        "gastosGabineteAno": 48720,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 18514
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13642
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9744
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6821
          }
        ]
      },
      {
        "id": "5002407-v9",
        "nome": "Paulo Martins Pereira",
        "nomeUrna": "Paulo Martins",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 10200,
        "salarioLiquido": 7548,
        "verbaIndenizatoriaMedia": 2980,
        "gastosGabineteAno": 35760,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 13589
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10013
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7152
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5006
          }
        ]
      },
      {
        "id": "5002407-v10",
        "nome": "Roberto Pereira Ribeiro",
        "nomeUrna": "Roberto Pereira",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 4590,
        "gastosGabineteAno": 55080,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 20930
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15422
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11016
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7711
          }
        ]
      },
      {
        "id": "5002407-v11",
        "nome": "Rafael Barros Santos",
        "nomeUrna": "Rafael do Caarapó",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 10200,
        "salarioLiquido": 7548,
        "verbaIndenizatoriaMedia": 3640,
        "gastosGabineteAno": 43680,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 16598
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12230
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8736
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6115
          }
        ]
      }
    ]
  },
  {
    "ibge": 5004007,
    "nome": "Glória de Dourados",
    "regiao": "Grande Dourados",
    "regiaoCor": "#93C5FD",
    "populacao": 10444,
    "lat": -22.417,
    "lng": -54.233,
    "prefeito": {
      "nome": "Júlio Buguelo",
      "partido": "PSD",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Delma Ponciano (Podemos)"
    },
    "financas": {
      "dividaAtiva": 9600000,
      "dividaConsolidada": 4400000,
      "dividaPorHabitante": 421,
      "receitaPrevista": 78000000,
      "receitaRealizada": 76606711,
      "despesaExecutada": 73058055,
      "gastoLegislativoTotal": 1480330,
      "gastoLegislativoPorHabitante": 141.74,
      "indiceTransparenciaTCE": 8,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 5590,
      "portalUrl": "https://www.camaragloriadedourados.ms.gov.br/",
      "prefeituraUrl": "https://gloriadedourados.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/gloria-de-dourados/panorama"
    },
    "vereadores": [
      {
        "id": "5004007-v1",
        "nome": "Marcos Ribeiro Oliveira",
        "nomeUrna": "Marcos do Glória",
        "partido": "PP",
        "cargo": "Presidente da Câmara",
        "salarioBase": 10900,
        "salarioLiquido": 8066,
        "verbaIndenizatoriaMedia": 7010,
        "gastosGabineteAno": 84120,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 31966
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 23554
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 16824
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 11777
          }
        ]
      },
      {
        "id": "5004007-v2",
        "nome": "Luiz Carvalho Rocha",
        "nomeUrna": "Luiz do Glória",
        "partido": "PSDB",
        "cargo": "1º Secretário",
        "salarioBase": 7800,
        "salarioLiquido": 5772,
        "verbaIndenizatoriaMedia": 4320,
        "gastosGabineteAno": 51840,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19699
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14515
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10368
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7258
          }
        ]
      },
      {
        "id": "5004007-v3",
        "nome": "Rogério Sanches Santos",
        "nomeUrna": "Rogério do Glória",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 7300,
        "salarioLiquido": 5402,
        "verbaIndenizatoriaMedia": 4500,
        "gastosGabineteAno": 54000,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 20520
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15120
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10800
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7560
          }
        ]
      },
      {
        "id": "5004007-v4",
        "nome": "Lucas Barbosa Rocha",
        "nomeUrna": "Lucas do Glória",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 7400,
        "salarioLiquido": 5476,
        "verbaIndenizatoriaMedia": 4730,
        "gastosGabineteAno": 56760,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21569
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15893
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11352
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7946
          }
        ]
      },
      {
        "id": "5004007-v5",
        "nome": "Rogério Melo Carvalho",
        "nomeUrna": "Rogério do Glória",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 7300,
        "salarioLiquido": 5402,
        "verbaIndenizatoriaMedia": 4210,
        "gastosGabineteAno": 50520,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19198
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14146
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10104
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7073
          }
        ]
      },
      {
        "id": "5004007-v6",
        "nome": "Marcelo Gomes Moreira",
        "nomeUrna": "Marcelo do Glória",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 7100,
        "salarioLiquido": 5254,
        "verbaIndenizatoriaMedia": 4060,
        "gastosGabineteAno": 48720,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 18514
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13642
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9744
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6821
          }
        ]
      },
      {
        "id": "5004007-v7",
        "nome": "Silvio Martins Rocha",
        "nomeUrna": "Silvio Martins",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 8000,
        "salarioLiquido": 5920,
        "verbaIndenizatoriaMedia": 4370,
        "gastosGabineteAno": 52440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19927
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14683
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10488
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7342
          }
        ]
      },
      {
        "id": "5004007-v8",
        "nome": "Antônio Martins Lima",
        "nomeUrna": "Antônio do Glória",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 7200,
        "salarioLiquido": 5328,
        "verbaIndenizatoriaMedia": 6260,
        "gastosGabineteAno": 75120,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 28546
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 21034
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 15024
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10517
          }
        ]
      },
      {
        "id": "5004007-v9",
        "nome": "Antônio Moreira Costa",
        "nomeUrna": "Antônio do Glória",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 7900,
        "salarioLiquido": 5846,
        "verbaIndenizatoriaMedia": 5320,
        "gastosGabineteAno": 63840,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24259
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17875
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12768
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8938
          }
        ]
      }
    ]
  },
  {
    "ibge": 5003454,
    "nome": "Deodápolis",
    "regiao": "Grande Dourados",
    "regiaoCor": "#93C5FD",
    "populacao": 13663,
    "lat": -22.276,
    "lng": -54.166,
    "prefeito": {
      "nome": "Jean da Saúde",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Marcio de Paula (Marcinho) (PSDB)"
    },
    "financas": {
      "dividaAtiva": 13200000,
      "dividaConsolidada": 6100000,
      "dividaPorHabitante": 446,
      "receitaPrevista": 96000000,
      "receitaRealizada": 96997414,
      "despesaExecutada": 94077938,
      "gastoLegislativoTotal": 1281530,
      "gastoLegislativoPorHabitante": 93.8,
      "indiceTransparenciaTCE": 9.1,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 2957,
      "portalUrl": "https://www.camaradeodapolis.ms.gov.br/",
      "prefeituraUrl": "https://deodapolis.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/deodapolis/panorama"
    },
    "vereadores": [
      {
        "id": "5003454-v1",
        "nome": "Luiz Nogueira Pacheco",
        "nomeUrna": "Luiz do Deodápolis",
        "partido": "REPUBLICANOS",
        "cargo": "Presidente da Câmara",
        "salarioBase": 10300,
        "salarioLiquido": 7622,
        "verbaIndenizatoriaMedia": 3820,
        "gastosGabineteAno": 45840,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17419
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12835
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9168
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6418
          }
        ]
      },
      {
        "id": "5003454-v2",
        "nome": "Paulo Dias Melo",
        "nomeUrna": "Paulo do Deodápolis",
        "partido": "PSB",
        "cargo": "1º Secretário",
        "salarioBase": 7300,
        "salarioLiquido": 5402,
        "verbaIndenizatoriaMedia": 3690,
        "gastosGabineteAno": 44280,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 16826
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12398
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8856
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6199
          }
        ]
      },
      {
        "id": "5003454-v3",
        "nome": "Roberto Pacheco Pereira",
        "nomeUrna": "Roberto do Deodápolis",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 7800,
        "salarioLiquido": 5772,
        "verbaIndenizatoriaMedia": 2530,
        "gastosGabineteAno": 30360,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 11537
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 8501
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6072
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4250
          }
        ]
      },
      {
        "id": "5003454-v4",
        "nome": "Eduardo Barbosa Santos",
        "nomeUrna": "Eduardo do Deodápolis",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 7700,
        "salarioLiquido": 5698,
        "verbaIndenizatoriaMedia": 3330,
        "gastosGabineteAno": 39960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15185
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11189
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7992
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5594
          }
        ]
      },
      {
        "id": "5003454-v5",
        "nome": "Juliana Costa Guedes",
        "nomeUrna": "Juliana do Deodápolis",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 7000,
        "salarioLiquido": 5180,
        "verbaIndenizatoriaMedia": 2410,
        "gastosGabineteAno": 28920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 10990
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 8098
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5784
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4049
          }
        ]
      },
      {
        "id": "5003454-v6",
        "nome": "Aline Dias Santos",
        "nomeUrna": "Aline do Deodápolis",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 7100,
        "salarioLiquido": 5254,
        "verbaIndenizatoriaMedia": 3020,
        "gastosGabineteAno": 36240,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 13771
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10147
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7248
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5074
          }
        ]
      },
      {
        "id": "5003454-v7",
        "nome": "Roberto Gomes Ribeiro",
        "nomeUrna": "Roberto do Deodápolis",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 7700,
        "salarioLiquido": 5698,
        "verbaIndenizatoriaMedia": 3740,
        "gastosGabineteAno": 44880,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17054
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12566
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8976
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6283
          }
        ]
      },
      {
        "id": "5003454-v8",
        "nome": "Sandra Martins Costa",
        "nomeUrna": "Sandra Martins",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 7300,
        "salarioLiquido": 5402,
        "verbaIndenizatoriaMedia": 3110,
        "gastosGabineteAno": 37320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 14182
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10450
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7464
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5225
          }
        ]
      },
      {
        "id": "5003454-v9",
        "nome": "Cláudio Miranda Souza",
        "nomeUrna": "Cláudio Miranda",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 7900,
        "salarioLiquido": 5846,
        "verbaIndenizatoriaMedia": 3450,
        "gastosGabineteAno": 41400,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15732
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11592
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8280
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5796
          }
        ]
      }
    ]
  },
  {
    "ibge": 5000856,
    "nome": "Angélica",
    "regiao": "Vale das Águas",
    "regiaoCor": "#0284C7",
    "populacao": 11210,
    "lat": -22.153,
    "lng": -53.771,
    "prefeito": {
      "nome": "Edinho Cassuci",
      "partido": "PDT",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Paulo Conconi (PP)"
    },
    "financas": {
      "dividaAtiva": 12100000,
      "dividaConsolidada": 5600000,
      "dividaPorHabitante": 500,
      "receitaPrevista": 88000000,
      "receitaRealizada": 84670028,
      "despesaExecutada": 82819244,
      "gastoLegislativoTotal": 1211760,
      "gastoLegislativoPorHabitante": 108.1,
      "indiceTransparenciaTCE": 9.2,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 2715,
      "portalUrl": "https://www.camaraangelica.ms.gov.br/",
      "prefeituraUrl": "https://angelica.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/angelica/panorama"
    },
    "vereadores": [
      {
        "id": "5000856-v1",
        "nome": "Roberto Miranda Santos",
        "nomeUrna": "Roberto Miranda",
        "partido": "PDT",
        "cargo": "Presidente da Câmara",
        "salarioBase": 10600,
        "salarioLiquido": 7844,
        "verbaIndenizatoriaMedia": 2140,
        "gastosGabineteAno": 25680,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 9758
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 7190
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5136
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3595
          }
        ]
      },
      {
        "id": "5000856-v2",
        "nome": "Antônio Gomes Alves",
        "nomeUrna": "Antônio do Angélica",
        "partido": "UNIÃO",
        "cargo": "1º Secretário",
        "salarioBase": 7200,
        "salarioLiquido": 5328,
        "verbaIndenizatoriaMedia": 2250,
        "gastosGabineteAno": 27000,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 10260
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 7560
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5400
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3780
          }
        ]
      },
      {
        "id": "5000856-v3",
        "nome": "Aline Sanches Ferreira",
        "nomeUrna": "Aline do Angélica",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 8000,
        "salarioLiquido": 5920,
        "verbaIndenizatoriaMedia": 2460,
        "gastosGabineteAno": 29520,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 11218
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 8266
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5904
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4133
          }
        ]
      },
      {
        "id": "5000856-v4",
        "nome": "Edson Pereira Rezende",
        "nomeUrna": "Edson Pereira",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 7900,
        "salarioLiquido": 5846,
        "verbaIndenizatoriaMedia": 2450,
        "gastosGabineteAno": 29400,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 11172
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 8232
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5880
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4116
          }
        ]
      },
      {
        "id": "5000856-v5",
        "nome": "Marcos Dias Souza",
        "nomeUrna": "Marcos do Angélica",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 7900,
        "salarioLiquido": 5846,
        "verbaIndenizatoriaMedia": 2110,
        "gastosGabineteAno": 25320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 9622
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 7090
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5064
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3545
          }
        ]
      },
      {
        "id": "5000856-v6",
        "nome": "Fábio Rocha Freitas",
        "nomeUrna": "Fábio do Angélica",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 7500,
        "salarioLiquido": 5550,
        "verbaIndenizatoriaMedia": 3290,
        "gastosGabineteAno": 39480,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15002
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11054
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7896
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5527
          }
        ]
      },
      {
        "id": "5000856-v7",
        "nome": "Roberto Rocha Sanches",
        "nomeUrna": "Roberto do Angélica",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 7900,
        "salarioLiquido": 5846,
        "verbaIndenizatoriaMedia": 2050,
        "gastosGabineteAno": 24600,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 9348
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 6888
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 4920
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3444
          }
        ]
      },
      {
        "id": "5000856-v8",
        "nome": "Antônio Lima Pacheco",
        "nomeUrna": "Antônio do Angélica",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 7400,
        "salarioLiquido": 5476,
        "verbaIndenizatoriaMedia": 2290,
        "gastosGabineteAno": 27480,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 10442
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 7694
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5496
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3847
          }
        ]
      },
      {
        "id": "5000856-v9",
        "nome": "Márcio Guedes Carvalho",
        "nomeUrna": "Márcio do Angélica",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 7600,
        "salarioLiquido": 5624,
        "verbaIndenizatoriaMedia": 2140,
        "gastosGabineteAno": 25680,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 9758
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 7190
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5136
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3595
          }
        ]
      }
    ]
  },
  {
    "ibge": 5004700,
    "nome": "Ivinhema",
    "regiao": "Vale das Águas",
    "regiaoCor": "#0284C7",
    "populacao": 27821,
    "lat": -22.305,
    "lng": -53.818,
    "prefeito": {
      "nome": "Juliano Ferro",
      "partido": "PL",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Profª. Angela Casarotti (PP)"
    },
    "financas": {
      "dividaAtiva": 26500000,
      "dividaConsolidada": 12900000,
      "dividaPorHabitante": 464,
      "receitaPrevista": 185000000,
      "receitaRealizada": 185338412,
      "despesaExecutada": 179335354,
      "gastoLegislativoTotal": 2297100,
      "gastoLegislativoPorHabitante": 82.57,
      "indiceTransparenciaTCE": 9,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 11,
      "gastoMedioMensalGabinete": 6775,
      "portalUrl": "https://www.camaraivinhema.ms.gov.br/",
      "prefeituraUrl": "https://ivinhema.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/ivinhema/panorama"
    },
    "vereadores": [
      {
        "id": "5004700-v1",
        "nome": "Sandra Guedes Alves",
        "nomeUrna": "Sandra Guedes",
        "partido": "UNIÃO",
        "cargo": "Presidente da Câmara",
        "salarioBase": 12900,
        "salarioLiquido": 9546,
        "verbaIndenizatoriaMedia": 7080,
        "gastosGabineteAno": 84960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 32285
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 23789
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 16992
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 11894
          }
        ]
      },
      {
        "id": "5004700-v2",
        "nome": "Cristiane Sanches Freitas",
        "nomeUrna": "Cristiane Sanches",
        "partido": "PODE",
        "cargo": "1º Secretário",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 5490,
        "gastosGabineteAno": 65880,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 25034
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18446
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13176
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9223
          }
        ]
      },
      {
        "id": "5004700-v3",
        "nome": "João Pereira Barbosa",
        "nomeUrna": "João do Ivinhema",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 9900,
        "salarioLiquido": 7326,
        "verbaIndenizatoriaMedia": 6680,
        "gastosGabineteAno": 80160,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 30461
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 22445
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 16032
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 11222
          }
        ]
      },
      {
        "id": "5004700-v4",
        "nome": "João Lima Martins",
        "nomeUrna": "João Lima",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 9400,
        "salarioLiquido": 6956,
        "verbaIndenizatoriaMedia": 5370,
        "gastosGabineteAno": 64440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24487
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18043
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12888
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9022
          }
        ]
      },
      {
        "id": "5004700-v5",
        "nome": "Maria Ferreira Sanches",
        "nomeUrna": "Maria do Ivinhema",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 9700,
        "salarioLiquido": 7178,
        "verbaIndenizatoriaMedia": 6730,
        "gastosGabineteAno": 80760,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 30689
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 22613
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 16152
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 11306
          }
        ]
      },
      {
        "id": "5004700-v6",
        "nome": "Silvio Pacheco Gomes",
        "nomeUrna": "Silvio do Ivinhema",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 8290,
        "gastosGabineteAno": 99480,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 37802
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 27854
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 19896
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 13927
          }
        ]
      },
      {
        "id": "5004700-v7",
        "nome": "Sandra Araújo Rezende",
        "nomeUrna": "Sandra Araújo",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 10100,
        "salarioLiquido": 7474,
        "verbaIndenizatoriaMedia": 6160,
        "gastosGabineteAno": 73920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 28090
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 20698
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14784
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10349
          }
        ]
      },
      {
        "id": "5004700-v8",
        "nome": "Camila Albuquerque Freitas",
        "nomeUrna": "Camila do Ivinhema",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 9300,
        "salarioLiquido": 6882,
        "verbaIndenizatoriaMedia": 5390,
        "gastosGabineteAno": 64680,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24578
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18110
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12936
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9055
          }
        ]
      },
      {
        "id": "5004700-v9",
        "nome": "Fábio Albuquerque Barbosa",
        "nomeUrna": "Fábio do Ivinhema",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 9400,
        "salarioLiquido": 6956,
        "verbaIndenizatoriaMedia": 6630,
        "gastosGabineteAno": 79560,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 30233
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 22277
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 15912
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 11138
          }
        ]
      },
      {
        "id": "5004700-v10",
        "nome": "Juliana Melo Pereira",
        "nomeUrna": "Juliana do Ivinhema",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 9700,
        "salarioLiquido": 7178,
        "verbaIndenizatoriaMedia": 5300,
        "gastosGabineteAno": 63600,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24168
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17808
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12720
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8904
          }
        ]
      },
      {
        "id": "5004700-v11",
        "nome": "Juliana Gomes Carvalho",
        "nomeUrna": "Juliana do Ivinhema",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 10100,
        "salarioLiquido": 7474,
        "verbaIndenizatoriaMedia": 6610,
        "gastosGabineteAno": 79320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 30142
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 22210
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 15864
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 11105
          }
        ]
      }
    ]
  },
  {
    "ibge": 5006200,
    "nome": "Nova Andradina",
    "regiao": "Vale das Águas",
    "regiaoCor": "#0284C7",
    "populacao": 47871,
    "lat": -22.24,
    "lng": -53.343,
    "prefeito": {
      "nome": "Dr. Leandro",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Arion Aislan (PL)"
    },
    "financas": {
      "dividaAtiva": 54000000,
      "dividaConsolidada": 27200000,
      "dividaPorHabitante": 568,
      "receitaPrevista": 360000000,
      "receitaRealizada": 368396458,
      "despesaExecutada": 350373436,
      "gastoLegislativoTotal": 2770220,
      "gastoLegislativoPorHabitante": 57.87,
      "indiceTransparenciaTCE": 7.6,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 13,
      "gastoMedioMensalGabinete": 5903,
      "portalUrl": "https://www.cmnovaandradina.ms.gov.br/",
      "prefeituraUrl": "https://pmna.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/nova-andradina/panorama"
    },
    "vereadores": [
      {
        "id": "5006200-v1",
        "nome": "Carlos Guedes Silva",
        "nomeUrna": "Carlos Guedes",
        "partido": "PODE",
        "cargo": "Presidente da Câmara",
        "salarioBase": 13100,
        "salarioLiquido": 9694,
        "verbaIndenizatoriaMedia": 6220,
        "gastosGabineteAno": 74640,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 28363
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 20899
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14928
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10450
          }
        ]
      },
      {
        "id": "5006200-v2",
        "nome": "José Lima Oliveira",
        "nomeUrna": "José Lima",
        "partido": "PT",
        "cargo": "1º Secretário",
        "salarioBase": 10100,
        "salarioLiquido": 7474,
        "verbaIndenizatoriaMedia": 7170,
        "gastosGabineteAno": 86040,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 32695
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 24091
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 17208
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 12046
          }
        ]
      },
      {
        "id": "5006200-v3",
        "nome": "Marcos Martins Carvalho",
        "nomeUrna": "Marcos do Nova",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 9900,
        "salarioLiquido": 7326,
        "verbaIndenizatoriaMedia": 5370,
        "gastosGabineteAno": 64440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24487
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18043
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12888
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9022
          }
        ]
      },
      {
        "id": "5006200-v4",
        "nome": "Juliana Oliveira Gomes",
        "nomeUrna": "Juliana Oliveira",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 10200,
        "salarioLiquido": 7548,
        "verbaIndenizatoriaMedia": 6650,
        "gastosGabineteAno": 79800,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 30324
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 22344
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 15960
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 11172
          }
        ]
      },
      {
        "id": "5006200-v5",
        "nome": "Camila Pacheco Santos",
        "nomeUrna": "Camila do Nova",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 4400,
        "gastosGabineteAno": 52800,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 20064
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14784
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10560
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7392
          }
        ]
      },
      {
        "id": "5006200-v6",
        "nome": "Cristiane Campestrini Oliveira",
        "nomeUrna": "Cristiane Campestrini",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 10000,
        "salarioLiquido": 7400,
        "verbaIndenizatoriaMedia": 7310,
        "gastosGabineteAno": 87720,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 33334
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 24562
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 17544
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 12281
          }
        ]
      },
      {
        "id": "5006200-v7",
        "nome": "Márcio Martins Martins",
        "nomeUrna": "Márcio Martins",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 10000,
        "salarioLiquido": 7400,
        "verbaIndenizatoriaMedia": 7060,
        "gastosGabineteAno": 84720,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 32194
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 23722
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 16944
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 11861
          }
        ]
      },
      {
        "id": "5006200-v8",
        "nome": "Marcelo Oliveira Guedes",
        "nomeUrna": "Marcelo do Nova",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 7490,
        "gastosGabineteAno": 89880,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 34154
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 25166
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 17976
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 12583
          }
        ]
      },
      {
        "id": "5006200-v9",
        "nome": "Luiz Ferreira Barros",
        "nomeUrna": "Luiz Ferreira",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 10300,
        "salarioLiquido": 7622,
        "verbaIndenizatoriaMedia": 6980,
        "gastosGabineteAno": 83760,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 31829
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 23453
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 16752
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 11726
          }
        ]
      },
      {
        "id": "5006200-v10",
        "nome": "Luiz Melo Barbosa",
        "nomeUrna": "Luiz do Nova",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 10000,
        "salarioLiquido": 7400,
        "verbaIndenizatoriaMedia": 5370,
        "gastosGabineteAno": 64440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24487
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18043
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12888
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9022
          }
        ]
      },
      {
        "id": "5006200-v11",
        "nome": "João Freitas Costa",
        "nomeUrna": "João do Nova",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 7300,
        "gastosGabineteAno": 87600,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 33288
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 24528
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 17520
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 12264
          }
        ]
      },
      {
        "id": "5006200-v12",
        "nome": "José Souza Barros",
        "nomeUrna": "José do Nova",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 9800,
        "salarioLiquido": 7252,
        "verbaIndenizatoriaMedia": 5900,
        "gastosGabineteAno": 70800,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 26904
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19824
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14160
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9912
          }
        ]
      },
      {
        "id": "5006200-v13",
        "nome": "Maria Sanches Pacheco",
        "nomeUrna": "Maria do Nova",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 9700,
        "salarioLiquido": 7178,
        "verbaIndenizatoriaMedia": 7110,
        "gastosGabineteAno": 85320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 32422
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 23890
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 17064
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 11945
          }
        ]
      }
    ]
  },
  {
    "ibge": 5006259,
    "nome": "Novo Horizonte do Sul",
    "regiao": "Vale das Águas",
    "regiaoCor": "#0284C7",
    "populacao": 4721,
    "lat": -22.404,
    "lng": -53.856,
    "prefeito": {
      "nome": "Aldo",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Giovane Donato (Gil) (PSD)"
    },
    "financas": {
      "dividaAtiva": 5200000,
      "dividaConsolidada": 2300000,
      "dividaPorHabitante": 487,
      "receitaPrevista": 51000000,
      "receitaRealizada": 48931021,
      "despesaExecutada": 47665400,
      "gastoLegislativoTotal": 1409450,
      "gastoLegislativoPorHabitante": 298.55,
      "indiceTransparenciaTCE": 8.1,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 4843,
      "portalUrl": "https://www.camaranovohorizontedosul.ms.gov.br/",
      "prefeituraUrl": "https://novohorizontedosul.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/novo-horizonte-do-sul/panorama"
    },
    "vereadores": [
      {
        "id": "5006259-v1",
        "nome": "Roberto Melo Barros",
        "nomeUrna": "Roberto do Novo",
        "partido": "MDB",
        "cargo": "Presidente da Câmara",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 4620,
        "gastosGabineteAno": 55440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21067
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15523
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11088
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7762
          }
        ]
      },
      {
        "id": "5006259-v2",
        "nome": "Fábio Rocha Freitas",
        "nomeUrna": "Fábio Rocha",
        "partido": "PP",
        "cargo": "1º Secretário",
        "salarioBase": 6700,
        "salarioLiquido": 4958,
        "verbaIndenizatoriaMedia": 4920,
        "gastosGabineteAno": 59040,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 22435
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16531
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11808
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8266
          }
        ]
      },
      {
        "id": "5006259-v3",
        "nome": "Marcelo Nogueira Melo",
        "nomeUrna": "Marcelo do Novo",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 6100,
        "salarioLiquido": 4514,
        "verbaIndenizatoriaMedia": 6290,
        "gastosGabineteAno": 75480,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 28682
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 21134
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 15096
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10567
          }
        ]
      },
      {
        "id": "5006259-v4",
        "nome": "Maria Gomes Melo",
        "nomeUrna": "Maria do Novo",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 6800,
        "salarioLiquido": 5032,
        "verbaIndenizatoriaMedia": 5940,
        "gastosGabineteAno": 71280,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 27086
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19958
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14256
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9979
          }
        ]
      },
      {
        "id": "5006259-v5",
        "nome": "Ana Oliveira Barbosa",
        "nomeUrna": "Ana do Novo",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 6900,
        "salarioLiquido": 5106,
        "verbaIndenizatoriaMedia": 5970,
        "gastosGabineteAno": 71640,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 27223
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 20059
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14328
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10030
          }
        ]
      },
      {
        "id": "5006259-v6",
        "nome": "Luiz Guedes Miranda",
        "nomeUrna": "Luiz do Novo",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 6400,
        "salarioLiquido": 4736,
        "verbaIndenizatoriaMedia": 5410,
        "gastosGabineteAno": 64920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24670
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18178
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12984
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9089
          }
        ]
      },
      {
        "id": "5006259-v7",
        "nome": "Fábio Ribeiro Pacheco",
        "nomeUrna": "Fábio do Novo",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 6800,
        "salarioLiquido": 5032,
        "verbaIndenizatoriaMedia": 5380,
        "gastosGabineteAno": 64560,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24533
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18077
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12912
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9038
          }
        ]
      },
      {
        "id": "5006259-v8",
        "nome": "Marcelo Carvalho Moreira",
        "nomeUrna": "Marcelo do Novo",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 6100,
        "salarioLiquido": 4514,
        "verbaIndenizatoriaMedia": 5410,
        "gastosGabineteAno": 64920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24670
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18178
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12984
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9089
          }
        ]
      },
      {
        "id": "5006259-v9",
        "nome": "Camila Barbosa Miranda",
        "nomeUrna": "Camila do Novo",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 6400,
        "salarioLiquido": 4736,
        "verbaIndenizatoriaMedia": 5130,
        "gastosGabineteAno": 61560,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 23393
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17237
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12312
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8618
          }
        ]
      }
    ]
  },
  {
    "ibge": 5002001,
    "nome": "Batayporã",
    "regiao": "Vale das Águas",
    "regiaoCor": "#0284C7",
    "populacao": 10712,
    "lat": -22.295,
    "lng": -53.271,
    "prefeito": {
      "nome": "Germino Roz",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Cacildo Paião (PP)"
    },
    "financas": {
      "dividaAtiva": 11200000,
      "dividaConsolidada": 5100000,
      "dividaPorHabitante": 476,
      "receitaPrevista": 82000000,
      "receitaRealizada": 81935674,
      "despesaExecutada": 80262885,
      "gastoLegislativoTotal": 1254780,
      "gastoLegislativoPorHabitante": 117.14,
      "indiceTransparenciaTCE": 9.2,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 2743,
      "portalUrl": "https://www.camarabataypora.ms.gov.br/",
      "prefeituraUrl": "https://bataypora.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/bataypora/panorama"
    },
    "vereadores": [
      {
        "id": "5002001-v1",
        "nome": "Renata Barbosa Ferreira",
        "nomeUrna": "Renata do Batayporã",
        "partido": "PDT",
        "cargo": "Presidente da Câmara",
        "salarioBase": 10300,
        "salarioLiquido": 7622,
        "verbaIndenizatoriaMedia": 3000,
        "gastosGabineteAno": 36000,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 13680
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10080
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7200
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5040
          }
        ]
      },
      {
        "id": "5002001-v2",
        "nome": "Lucas Santos Moreira",
        "nomeUrna": "Lucas Santos",
        "partido": "PT",
        "cargo": "1º Secretário",
        "salarioBase": 7600,
        "salarioLiquido": 5624,
        "verbaIndenizatoriaMedia": 3380,
        "gastosGabineteAno": 40560,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15413
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11357
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8112
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5678
          }
        ]
      },
      {
        "id": "5002001-v3",
        "nome": "Luciana Gomes Carvalho",
        "nomeUrna": "Luciana do Batayporã",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 7100,
        "salarioLiquido": 5254,
        "verbaIndenizatoriaMedia": 3360,
        "gastosGabineteAno": 40320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15322
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11290
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8064
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5645
          }
        ]
      },
      {
        "id": "5002001-v4",
        "nome": "Aline Lima Oliveira",
        "nomeUrna": "Aline do Batayporã",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 7300,
        "salarioLiquido": 5402,
        "verbaIndenizatoriaMedia": 2530,
        "gastosGabineteAno": 30360,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 11537
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 8501
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6072
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4250
          }
        ]
      },
      {
        "id": "5002001-v5",
        "nome": "Edson Gomes Araújo",
        "nomeUrna": "Edson do Batayporã",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 7300,
        "salarioLiquido": 5402,
        "verbaIndenizatoriaMedia": 3210,
        "gastosGabineteAno": 38520,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 14638
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10786
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7704
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5393
          }
        ]
      },
      {
        "id": "5002001-v6",
        "nome": "Cristiane Rezende Sanches",
        "nomeUrna": "Cristiane Rezende",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 7500,
        "salarioLiquido": 5550,
        "verbaIndenizatoriaMedia": 3230,
        "gastosGabineteAno": 38760,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 14729
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10853
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7752
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5426
          }
        ]
      },
      {
        "id": "5002001-v7",
        "nome": "Edson Barbosa Barbosa",
        "nomeUrna": "Edson do Batayporã",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 7800,
        "salarioLiquido": 5772,
        "verbaIndenizatoriaMedia": 3050,
        "gastosGabineteAno": 36600,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 13908
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10248
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7320
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5124
          }
        ]
      },
      {
        "id": "5002001-v8",
        "nome": "Cláudio Miranda Miranda",
        "nomeUrna": "Cláudio do Batayporã",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 7500,
        "salarioLiquido": 5550,
        "verbaIndenizatoriaMedia": 2670,
        "gastosGabineteAno": 32040,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 12175
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 8971
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6408
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4486
          }
        ]
      },
      {
        "id": "5002001-v9",
        "nome": "José Santos Souza",
        "nomeUrna": "José do Batayporã",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 7800,
        "salarioLiquido": 5772,
        "verbaIndenizatoriaMedia": 2330,
        "gastosGabineteAno": 27960,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 10625
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 7829
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5592
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3914
          }
        ]
      }
    ]
  },
  {
    "ibge": 5007976,
    "nome": "Taquarussu",
    "regiao": "Vale das Águas",
    "regiaoCor": "#0284C7",
    "populacao": 3625,
    "lat": -22.489,
    "lng": -53.353,
    "prefeito": {
      "nome": "Clovis do Banco",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "João Clovis (João do Bruno) (PP)"
    },
    "financas": {
      "dividaAtiva": 4300000,
      "dividaConsolidada": 1900000,
      "dividaPorHabitante": 524,
      "receitaPrevista": 46000000,
      "receitaRealizada": 44004240,
      "despesaExecutada": 43577423,
      "gastoLegislativoTotal": 1376890,
      "gastoLegislativoPorHabitante": 379.83,
      "indiceTransparenciaTCE": 9.6,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 4783,
      "portalUrl": "https://www.camarataquarussu.ms.gov.br/",
      "prefeituraUrl": "https://taquarussu.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/taquarussu/panorama"
    },
    "vereadores": [
      {
        "id": "5007976-v1",
        "nome": "Maria Costa Rocha",
        "nomeUrna": "Maria do Taquarussu",
        "partido": "UNIÃO",
        "cargo": "Presidente da Câmara",
        "salarioBase": 9700,
        "salarioLiquido": 7178,
        "verbaIndenizatoriaMedia": 5990,
        "gastosGabineteAno": 71880,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 27314
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 20126
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14376
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10063
          }
        ]
      },
      {
        "id": "5007976-v2",
        "nome": "Luiz Costa Rezende",
        "nomeUrna": "Luiz do Taquarussu",
        "partido": "PODE",
        "cargo": "1º Secretário",
        "salarioBase": 6600,
        "salarioLiquido": 4884,
        "verbaIndenizatoriaMedia": 6110,
        "gastosGabineteAno": 73320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 27862
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 20530
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14664
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10265
          }
        ]
      },
      {
        "id": "5007976-v3",
        "nome": "Paulo Oliveira Nogueira",
        "nomeUrna": "Paulo do Taquarussu",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 6000,
        "salarioLiquido": 4440,
        "verbaIndenizatoriaMedia": 4960,
        "gastosGabineteAno": 59520,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 22618
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16666
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11904
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8333
          }
        ]
      },
      {
        "id": "5007976-v4",
        "nome": "Aline Oliveira Gomes",
        "nomeUrna": "Aline Oliveira",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 6900,
        "salarioLiquido": 5106,
        "verbaIndenizatoriaMedia": 5810,
        "gastosGabineteAno": 69720,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 26494
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19522
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13944
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9761
          }
        ]
      },
      {
        "id": "5007976-v5",
        "nome": "Antônio Alves Guedes",
        "nomeUrna": "Antônio do Taquarussu",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 6500,
        "salarioLiquido": 4810,
        "verbaIndenizatoriaMedia": 5460,
        "gastosGabineteAno": 65520,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24898
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18346
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13104
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9173
          }
        ]
      },
      {
        "id": "5007976-v6",
        "nome": "Rafael Araújo Martins",
        "nomeUrna": "Rafael do Taquarussu",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 6300,
        "salarioLiquido": 4662,
        "verbaIndenizatoriaMedia": 3930,
        "gastosGabineteAno": 47160,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17921
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13205
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9432
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6602
          }
        ]
      },
      {
        "id": "5007976-v7",
        "nome": "Antônio Dias Araújo",
        "nomeUrna": "Antônio do Taquarussu",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 6400,
        "salarioLiquido": 4736,
        "verbaIndenizatoriaMedia": 5960,
        "gastosGabineteAno": 71520,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 27178
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 20026
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 14304
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10013
          }
        ]
      },
      {
        "id": "5007976-v8",
        "nome": "Lucas Santos Sanches",
        "nomeUrna": "Lucas do Taquarussu",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 6200,
        "salarioLiquido": 4588,
        "verbaIndenizatoriaMedia": 3810,
        "gastosGabineteAno": 45720,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17374
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12802
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9144
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6401
          }
        ]
      },
      {
        "id": "5007976-v9",
        "nome": "Lucas Silva Pereira",
        "nomeUrna": "Lucas do Taquarussu",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 6700,
        "salarioLiquido": 4958,
        "verbaIndenizatoriaMedia": 4770,
        "gastosGabineteAno": 57240,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21751
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16027
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11448
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8014
          }
        ]
      }
    ]
  },
  {
    "ibge": 5005152,
    "nome": "Juti",
    "regiao": "7 Caminhos - Cone Sul",
    "regiaoCor": "#7E22CE",
    "populacao": 6729,
    "lat": -22.86,
    "lng": -54.603,
    "prefeito": {
      "nome": "Gilson Cruz",
      "partido": "PSD",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Elício Rocha (Mano) (PSD)"
    },
    "financas": {
      "dividaAtiva": 6400000,
      "dividaConsolidada": 2900000,
      "dividaPorHabitante": 431,
      "receitaPrevista": 59000000,
      "receitaRealizada": 59815045,
      "despesaExecutada": 54813644,
      "gastoLegislativoTotal": 1047030,
      "gastoLegislativoPorHabitante": 155.6,
      "indiceTransparenciaTCE": 9.2,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 2483,
      "portalUrl": "https://www.camarajuti.ms.gov.br/",
      "prefeituraUrl": "https://juti.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/juti/panorama"
    },
    "vereadores": [
      {
        "id": "5005152-v1",
        "nome": "Fernando Ribeiro Miranda",
        "nomeUrna": "Fernando Ribeiro",
        "partido": "REPUBLICANOS",
        "cargo": "Presidente da Câmara",
        "salarioBase": 9500,
        "salarioLiquido": 7030,
        "verbaIndenizatoriaMedia": 2340,
        "gastosGabineteAno": 28080,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 10670
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 7862
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5616
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3931
          }
        ]
      },
      {
        "id": "5005152-v2",
        "nome": "Carlos Rocha Ribeiro",
        "nomeUrna": "Carlos Rocha",
        "partido": "PDT",
        "cargo": "1º Secretário",
        "salarioBase": 6100,
        "salarioLiquido": 4514,
        "verbaIndenizatoriaMedia": 2020,
        "gastosGabineteAno": 24240,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 9211
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 6787
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 4848
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3394
          }
        ]
      },
      {
        "id": "5005152-v3",
        "nome": "Luciana Araújo Pereira",
        "nomeUrna": "Luciana do Juti",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 6600,
        "salarioLiquido": 4884,
        "verbaIndenizatoriaMedia": 1770,
        "gastosGabineteAno": 21240,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 8071
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 5947
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 4248
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 2974
          }
        ]
      },
      {
        "id": "5005152-v4",
        "nome": "Cláudio Gomes Alves",
        "nomeUrna": "Cláudio do Juti",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 6700,
        "salarioLiquido": 4958,
        "verbaIndenizatoriaMedia": 1820,
        "gastosGabineteAno": 21840,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 8299
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 6115
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 4368
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3058
          }
        ]
      },
      {
        "id": "5005152-v5",
        "nome": "José Pacheco Miranda",
        "nomeUrna": "José Pacheco",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 6200,
        "salarioLiquido": 4588,
        "verbaIndenizatoriaMedia": 1870,
        "gastosGabineteAno": 22440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 8527
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 6283
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 4488
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3142
          }
        ]
      },
      {
        "id": "5005152-v6",
        "nome": "Aline Souza Guedes",
        "nomeUrna": "Aline Souza",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 6600,
        "salarioLiquido": 4884,
        "verbaIndenizatoriaMedia": 2660,
        "gastosGabineteAno": 31920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 12130
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 8938
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6384
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4469
          }
        ]
      },
      {
        "id": "5005152-v7",
        "nome": "Fernando Pacheco Melo",
        "nomeUrna": "Fernando Pacheco",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 6900,
        "salarioLiquido": 5106,
        "verbaIndenizatoriaMedia": 2450,
        "gastosGabineteAno": 29400,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 11172
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 8232
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5880
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4116
          }
        ]
      },
      {
        "id": "5005152-v8",
        "nome": "Renata Pereira Barbosa",
        "nomeUrna": "Renata do Juti",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 6200,
        "salarioLiquido": 4588,
        "verbaIndenizatoriaMedia": 2070,
        "gastosGabineteAno": 24840,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 9439
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 6955
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 4968
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3478
          }
        ]
      },
      {
        "id": "5005152-v9",
        "nome": "Rogério Barbosa Albuquerque",
        "nomeUrna": "Rogério do Juti",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 6700,
        "salarioLiquido": 4958,
        "verbaIndenizatoriaMedia": 2090,
        "gastosGabineteAno": 25080,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 9530
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 7022
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5016
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3511
          }
        ]
      }
    ]
  },
  {
    "ibge": 5005707,
    "nome": "Naviraí",
    "regiao": "7 Caminhos - Cone Sul",
    "regiaoCor": "#7E22CE",
    "populacao": 50457,
    "lat": -23.064,
    "lng": -54.199,
    "prefeito": {
      "nome": "Rodrigo Sakuno",
      "partido": "PL",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Telma Minari (União)"
    },
    "financas": {
      "dividaAtiva": 49000000,
      "dividaConsolidada": 24300000,
      "dividaPorHabitante": 482,
      "receitaPrevista": 340000000,
      "receitaRealizada": 346578229,
      "despesaExecutada": 318474661,
      "gastoLegislativoTotal": 3404800,
      "gastoLegislativoPorHabitante": 67.48,
      "indiceTransparenciaTCE": 7.7,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
        "camara": {
      "totalCadeiras": 15,
      "gastoMedioMensalGabinete": 7250,
      "portalUrl": "https://www.camaranavirai.ms.gov.br/",
      "prefeituraUrl": "https://www.navirai.ms.gov.br/transparencia",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/navirai/panorama"
    },
    "vereadores": [
      {
        "id": "5005707-v1",
        "nome": "Daniel Moretto Cardozo Siqueira",
        "nomeUrna": "Daniel Moretto",
        "partido": "PL",
        "cargo": "Presidente da Câmara",
        "salarioBase": 16500,
        "salarioLiquido": 12210,
        "verbaIndenizatoriaMedia": 7800,
        "gastosGabineteAno": 93600,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 35500 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 26200 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 18700 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 13200 }
        ]
      },
      {
        "id": "5005707-v2",
        "nome": "Mario Francisco Nelvo",
        "nomeUrna": "Mario do Gesso",
        "partido": "PSDB",
        "cargo": "Vice-Presidente",
        "salarioBase": 14800,
        "salarioLiquido": 10952,
        "verbaIndenizatoriaMedia": 7200,
        "gastosGabineteAno": 86400,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 32800 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 24100 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 17200 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 12300 }
        ]
      },
      {
        "id": "5005707-v3",
        "nome": "Rosangela Farias Sofa",
        "nomeUrna": "Rosangela da Refrigeração",
        "partido": "PP",
        "cargo": "Primeira-Secretária",
        "salarioBase": 14200,
        "salarioLiquido": 10508,
        "verbaIndenizatoriaMedia": 7100,
        "gastosGabineteAno": 85200,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 32300 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 23800 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 17100 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 12000 }
        ]
      },
      {
        "id": "5005707-v4",
        "nome": "André Ricardo Biscaro",
        "nomeUrna": "Ricck",
        "partido": "REPUBLICANOS",
        "cargo": "Segundo-Secretário",
        "salarioBase": 13800,
        "salarioLiquido": 10212,
        "verbaIndenizatoriaMedia": 6900,
        "gastosGabineteAno": 82800,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 31400 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 23100 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 16500 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 11800 }
        ]
      },
      {
        "id": "5005707-v5",
        "nome": "Regivan Morozini",
        "nomeUrna": "Regivan Morozini",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 13000,
        "salarioLiquido": 9620,
        "verbaIndenizatoriaMedia": 6500,
        "gastosGabineteAno": 78000,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 29600 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 21800 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 15600 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 11000 }
        ]
      },
      {
        "id": "5005707-v6",
        "nome": "Ederson Dutra",
        "nomeUrna": "Neninha",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 13000,
        "salarioLiquido": 9620,
        "verbaIndenizatoriaMedia": 6500,
        "gastosGabineteAno": 78000,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 29600 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 21800 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 15600 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 11000 }
        ]
      },
      {
        "id": "5005707-v7",
        "nome": "Josias de Carvalho",
        "nomeUrna": "Josias de Carvalho",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 13000,
        "salarioLiquido": 9620,
        "verbaIndenizatoriaMedia": 6500,
        "gastosGabineteAno": 78000,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 29600 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 21800 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 15600 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 11000 }
        ]
      },
      {
        "id": "5005707-v8",
        "nome": "Milton Silveira",
        "nomeUrna": "Milton Silveira",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 13000,
        "salarioLiquido": 9620,
        "verbaIndenizatoriaMedia": 6500,
        "gastosGabineteAno": 78000,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 29600 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 21800 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 15600 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 11000 }
        ]
      },
      {
        "id": "5005707-v9",
        "nome": "José Roberto Alves",
        "nomeUrna": "Zé Roberto",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 13000,
        "salarioLiquido": 9620,
        "verbaIndenizatoriaMedia": 6500,
        "gastosGabineteAno": 78000,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 29600 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 21800 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 15600 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 11000 }
        ]
      },
      {
        "id": "5005707-v10",
        "nome": "Antonio Carlos Klein",
        "nomeUrna": "Antonio Carlos Klein",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 13000,
        "salarioLiquido": 9620,
        "verbaIndenizatoriaMedia": 6500,
        "gastosGabineteAno": 78000,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 29600 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 21800 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 15600 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 11000 }
        ]
      },
      {
        "id": "5005707-v11",
        "nome": "Fabiano Taquara",
        "nomeUrna": "Fabiano Taquara",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 13000,
        "salarioLiquido": 9620,
        "verbaIndenizatoriaMedia": 6500,
        "gastosGabineteAno": 78000,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 29600 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 21800 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 15600 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 11000 }
        ]
      },
      {
        "id": "5005707-v12",
        "nome": "Luiz Carlos Garcia",
        "nomeUrna": "Bolacha",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 13000,
        "salarioLiquido": 9620,
        "verbaIndenizatoriaMedia": 6500,
        "gastosGabineteAno": 78000,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 29600 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 21800 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 15600 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 11000 }
        ]
      },
      {
        "id": "5005707-v13",
        "nome": "Rafael Rosa",
        "nomeUrna": "Rafael Rosa",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 13000,
        "salarioLiquido": 9620,
        "verbaIndenizatoriaMedia": 6500,
        "gastosGabineteAno": 78000,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 29600 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 21800 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 15600 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 11000 }
        ]
      },
      {
        "id": "5005707-v14",
        "nome": "Milton Silveira",
        "nomeUrna": "Miltão",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 13000,
        "salarioLiquido": 9620,
        "verbaIndenizatoriaMedia": 6500,
        "gastosGabineteAno": 78000,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 29600 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 21800 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 15600 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 11000 }
        ]
      },
      {
        "id": "5005707-v15",
        "nome": "Simon Rogério Freitas",
        "nomeUrna": "Simon Rogério",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 13000,
        "salarioLiquido": 9620,
        "verbaIndenizatoriaMedia": 6500,
        "gastosGabineteAno": 78000,
        "principaisGastos": [
          { "categoria": "Combustíveis e Lubrificantes", "valor": 29600 },
          { "categoria": "Divulgação da Atividade Parlamentar", "valor": 21800 },
          { "categoria": "Consultoria e Assessoria Técnica", "valor": 15600 },
          { "categoria": "Telefonia, Correios e Locação", "valor": 11000 }
        ]
      }
    ]
  },
  {
    "ibge": 5005103,
    "nome": "Jateí",
    "regiao": "7 Caminhos - Cone Sul",
    "regiaoCor": "#7E22CE",
    "populacao": 3586,
    "lat": -22.511,
    "lng": -54.306,
    "prefeito": {
      "nome": "Cileide Cabral",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Francisco Alves (Tiquinho) (PSDB)"
    },
    "financas": {
      "dividaAtiva": 4500000,
      "dividaConsolidada": 2000000,
      "dividaPorHabitante": 558,
      "receitaPrevista": 49000000,
      "receitaRealizada": 48055569,
      "despesaExecutada": 45525808,
      "gastoLegislativoTotal": 1158060,
      "gastoLegislativoPorHabitante": 322.94,
      "indiceTransparenciaTCE": 9.3,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 3302,
      "portalUrl": "https://www.camarajatei.ms.gov.br/",
      "prefeituraUrl": "https://jatei.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/jatei/panorama"
    },
    "vereadores": [
      {
        "id": "5005103-v1",
        "nome": "Juliana Alves Oliveira",
        "nomeUrna": "Juliana Alves",
        "partido": "PL",
        "cargo": "Presidente da Câmara",
        "salarioBase": 9200,
        "salarioLiquido": 6808,
        "verbaIndenizatoriaMedia": 2810,
        "gastosGabineteAno": 33720,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 12814
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 9442
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6744
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4721
          }
        ]
      },
      {
        "id": "5005103-v2",
        "nome": "Carlos Carvalho Barros",
        "nomeUrna": "Carlos Carvalho",
        "partido": "PODE",
        "cargo": "1º Secretário",
        "salarioBase": 6500,
        "salarioLiquido": 4810,
        "verbaIndenizatoriaMedia": 2550,
        "gastosGabineteAno": 30600,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 11628
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 8568
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6120
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4284
          }
        ]
      },
      {
        "id": "5005103-v3",
        "nome": "Rogério Campestrini Ribeiro",
        "nomeUrna": "Rogério do Jateí",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 6500,
        "salarioLiquido": 4810,
        "verbaIndenizatoriaMedia": 3630,
        "gastosGabineteAno": 43560,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 16553
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12197
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8712
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6098
          }
        ]
      },
      {
        "id": "5005103-v4",
        "nome": "Eduardo Rezende Rocha",
        "nomeUrna": "Eduardo do Jateí",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 6700,
        "salarioLiquido": 4958,
        "verbaIndenizatoriaMedia": 4280,
        "gastosGabineteAno": 51360,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19517
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14381
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10272
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7190
          }
        ]
      },
      {
        "id": "5005103-v5",
        "nome": "Rafael Ferreira Lima",
        "nomeUrna": "Rafael do Jateí",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 6300,
        "salarioLiquido": 4662,
        "verbaIndenizatoriaMedia": 4010,
        "gastosGabineteAno": 48120,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 18286
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13474
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9624
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6737
          }
        ]
      },
      {
        "id": "5005103-v6",
        "nome": "Cláudio Alves Araújo",
        "nomeUrna": "Cláudio do Jateí",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 6300,
        "salarioLiquido": 4662,
        "verbaIndenizatoriaMedia": 3790,
        "gastosGabineteAno": 45480,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17282
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12734
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9096
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6367
          }
        ]
      },
      {
        "id": "5005103-v7",
        "nome": "José Sanches Gomes",
        "nomeUrna": "José do Jateí",
        "partido": "PT",
        "cargo": "Vereador",
        "salarioBase": 6500,
        "salarioLiquido": 4810,
        "verbaIndenizatoriaMedia": 2470,
        "gastosGabineteAno": 29640,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 11263
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 8299
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5928
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4150
          }
        ]
      },
      {
        "id": "5005103-v8",
        "nome": "Fernando Ribeiro Miranda",
        "nomeUrna": "Fernando Ribeiro",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 6500,
        "salarioLiquido": 4810,
        "verbaIndenizatoriaMedia": 3110,
        "gastosGabineteAno": 37320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 14182
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10450
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7464
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5225
          }
        ]
      },
      {
        "id": "5005103-v9",
        "nome": "Carlos Rocha Ribeiro",
        "nomeUrna": "Carlos Rocha",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 6100,
        "salarioLiquido": 4514,
        "verbaIndenizatoriaMedia": 2690,
        "gastosGabineteAno": 32280,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 12266
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 9038
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6456
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4519
          }
        ]
      }
    ]
  },
  {
    "ibge": 5004601,
    "nome": "Itaquiraí",
    "regiao": "7 Caminhos - Cone Sul",
    "regiaoCor": "#7E22CE",
    "populacao": 19413,
    "lat": -23.475,
    "lng": -54.184,
    "prefeito": {
      "nome": "Thalles Tomazelli",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Dr. Bruno (PP)"
    },
    "financas": {
      "dividaAtiva": 19800000,
      "dividaConsolidada": 9400000,
      "dividaPorHabitante": 484,
      "receitaPrevista": 140000000,
      "receitaRealizada": 134441830,
      "despesaExecutada": 129687577,
      "gastoLegislativoTotal": 1576540,
      "gastoLegislativoPorHabitante": 81.21,
      "indiceTransparenciaTCE": 8.7,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 11,
      "gastoMedioMensalGabinete": 3163,
      "portalUrl": "https://www.camaraitaquirai.ms.gov.br/",
      "prefeituraUrl": "https://itaquirai.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/itaquirai/panorama"
    },
    "vereadores": [
      {
        "id": "5004601-v1",
        "nome": "João Moreira Moreira",
        "nomeUrna": "João do Itaquiraí",
        "partido": "PDT",
        "cargo": "Presidente da Câmara",
        "salarioBase": 10500,
        "salarioLiquido": 7770,
        "verbaIndenizatoriaMedia": 3480,
        "gastosGabineteAno": 41760,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15869
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11693
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8352
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5846
          }
        ]
      },
      {
        "id": "5004601-v2",
        "nome": "Cristiane Lima Silva",
        "nomeUrna": "Cristiane Lima",
        "partido": "MDB",
        "cargo": "1º Secretário",
        "salarioBase": 7100,
        "salarioLiquido": 5254,
        "verbaIndenizatoriaMedia": 2720,
        "gastosGabineteAno": 32640,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 12403
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 9139
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6528
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4570
          }
        ]
      },
      {
        "id": "5004601-v3",
        "nome": "Cláudio Ribeiro Nogueira",
        "nomeUrna": "Cláudio do Itaquiraí",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 7700,
        "salarioLiquido": 5698,
        "verbaIndenizatoriaMedia": 4020,
        "gastosGabineteAno": 48240,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 18331
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13507
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9648
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6754
          }
        ]
      },
      {
        "id": "5004601-v4",
        "nome": "Fábio Lima Oliveira",
        "nomeUrna": "Fábio do Itaquiraí",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 7500,
        "salarioLiquido": 5550,
        "verbaIndenizatoriaMedia": 3440,
        "gastosGabineteAno": 41280,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15686
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11558
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8256
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5779
          }
        ]
      },
      {
        "id": "5004601-v5",
        "nome": "Márcio Barbosa Alves",
        "nomeUrna": "Márcio do Itaquiraí",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 7700,
        "salarioLiquido": 5698,
        "verbaIndenizatoriaMedia": 2320,
        "gastosGabineteAno": 27840,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 10579
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 7795
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 5568
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 3898
          }
        ]
      },
      {
        "id": "5004601-v6",
        "nome": "José Gomes Ferreira",
        "nomeUrna": "José do Itaquiraí",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 7500,
        "salarioLiquido": 5550,
        "verbaIndenizatoriaMedia": 2640,
        "gastosGabineteAno": 31680,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 12038
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 8870
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6336
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4435
          }
        ]
      },
      {
        "id": "5004601-v7",
        "nome": "Cristiane Campestrini Pereira",
        "nomeUrna": "Cristiane do Itaquiraí",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 7900,
        "salarioLiquido": 5846,
        "verbaIndenizatoriaMedia": 4030,
        "gastosGabineteAno": 48360,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 18377
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13541
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9672
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6770
          }
        ]
      },
      {
        "id": "5004601-v8",
        "nome": "Fernando Silva Costa",
        "nomeUrna": "Fernando do Itaquiraí",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 7400,
        "salarioLiquido": 5476,
        "verbaIndenizatoriaMedia": 3440,
        "gastosGabineteAno": 41280,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15686
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11558
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8256
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5779
          }
        ]
      },
      {
        "id": "5004601-v9",
        "nome": "Fernando Campestrini Araújo",
        "nomeUrna": "Fernando do Itaquiraí",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 7900,
        "salarioLiquido": 5846,
        "verbaIndenizatoriaMedia": 3450,
        "gastosGabineteAno": 41400,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15732
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11592
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8280
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5796
          }
        ]
      },
      {
        "id": "5004601-v10",
        "nome": "Paulo Freitas Pacheco",
        "nomeUrna": "Paulo do Itaquiraí",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 7200,
        "salarioLiquido": 5328,
        "verbaIndenizatoriaMedia": 3620,
        "gastosGabineteAno": 43440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 16507
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12163
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8688
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6082
          }
        ]
      },
      {
        "id": "5004601-v11",
        "nome": "Cristiane Santos Santos",
        "nomeUrna": "Cristiane Santos",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 7800,
        "salarioLiquido": 5772,
        "verbaIndenizatoriaMedia": 2680,
        "gastosGabineteAno": 32160,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 12221
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 9005
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6432
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4502
          }
        ]
      }
    ]
  },
  {
    "ibge": 5004304,
    "nome": "Iguatemi",
    "regiao": "7 Caminhos - Cone Sul",
    "regiaoCor": "#7E22CE",
    "populacao": 13735,
    "lat": -23.68,
    "lng": -54.561,
    "prefeito": {
      "nome": "Dr. Lidio",
      "partido": "PP",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Dra. Patricia (PP)"
    },
    "financas": {
      "dividaAtiva": 13000000,
      "dividaConsolidada": 6000000,
      "dividaPorHabitante": 437,
      "receitaPrevista": 95000000,
      "receitaRealizada": 92951949,
      "despesaExecutada": 91670530,
      "gastoLegislativoTotal": 1333120,
      "gastoLegislativoPorHabitante": 97.06,
      "indiceTransparenciaTCE": 8.2,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 3445,
      "portalUrl": "https://www.camaraiguatemi.ms.gov.br/",
      "prefeituraUrl": "https://iguatemi.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/iguatemi/panorama"
    },
    "vereadores": [
      {
        "id": "5004304-v1",
        "nome": "Cláudio Pereira Albuquerque",
        "nomeUrna": "Cláudio Pereira",
        "partido": "PODE",
        "cargo": "Presidente da Câmara",
        "salarioBase": 11000,
        "salarioLiquido": 8140,
        "verbaIndenizatoriaMedia": 2760,
        "gastosGabineteAno": 33120,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 12586
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 9274
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6624
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4637
          }
        ]
      },
      {
        "id": "5004304-v2",
        "nome": "Cristiane Silva Barbosa",
        "nomeUrna": "Cristiane Silva",
        "partido": "PT",
        "cargo": "1º Secretário",
        "salarioBase": 7100,
        "salarioLiquido": 5254,
        "verbaIndenizatoriaMedia": 3790,
        "gastosGabineteAno": 45480,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17282
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12734
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9096
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6367
          }
        ]
      },
      {
        "id": "5004304-v3",
        "nome": "Ana Albuquerque Rocha",
        "nomeUrna": "Ana do Iguatemi",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 7200,
        "salarioLiquido": 5328,
        "verbaIndenizatoriaMedia": 3630,
        "gastosGabineteAno": 43560,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 16553
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12197
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8712
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6098
          }
        ]
      },
      {
        "id": "5004304-v4",
        "nome": "Cristiane Campestrini Campestrini",
        "nomeUrna": "Cristiane Campestrini",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 7500,
        "salarioLiquido": 5550,
        "verbaIndenizatoriaMedia": 3890,
        "gastosGabineteAno": 46680,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17738
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13070
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9336
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6535
          }
        ]
      },
      {
        "id": "5004304-v5",
        "nome": "Maria Rezende Dias",
        "nomeUrna": "Maria do Iguatemi",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 7600,
        "salarioLiquido": 5624,
        "verbaIndenizatoriaMedia": 4380,
        "gastosGabineteAno": 52560,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19973
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14717
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10512
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7358
          }
        ]
      },
      {
        "id": "5004304-v6",
        "nome": "Eduardo Nogueira Guedes",
        "nomeUrna": "Eduardo Nogueira",
        "partido": "PL",
        "cargo": "Vereador",
        "salarioBase": 7100,
        "salarioLiquido": 5254,
        "verbaIndenizatoriaMedia": 3340,
        "gastosGabineteAno": 40080,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15230
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11222
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8016
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5611
          }
        ]
      },
      {
        "id": "5004304-v7",
        "nome": "Roberto Nogueira Dias",
        "nomeUrna": "Roberto Nogueira",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 7600,
        "salarioLiquido": 5624,
        "verbaIndenizatoriaMedia": 3370,
        "gastosGabineteAno": 40440,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15367
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11323
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8088
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5662
          }
        ]
      },
      {
        "id": "5004304-v8",
        "nome": "Luiz Pereira Freitas",
        "nomeUrna": "Luiz Pereira",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 7100,
        "salarioLiquido": 5254,
        "verbaIndenizatoriaMedia": 4400,
        "gastosGabineteAno": 52800,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 20064
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14784
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10560
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7392
          }
        ]
      },
      {
        "id": "5004304-v9",
        "nome": "Patrícia Carvalho Ferreira",
        "nomeUrna": "Patrícia do Iguatemi",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 7800,
        "salarioLiquido": 5772,
        "verbaIndenizatoriaMedia": 3950,
        "gastosGabineteAno": 47400,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 18012
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 13272
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 9480
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6636
          }
        ]
      }
    ]
  },
  {
    "ibge": 5003751,
    "nome": "Eldorado",
    "regiao": "7 Caminhos - Cone Sul",
    "regiaoCor": "#7E22CE",
    "populacao": 11386,
    "lat": -23.786,
    "lng": -54.283,
    "prefeito": {
      "nome": "Léo",
      "partido": "PL",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Simoni Palonis (PP)"
    },
    "financas": {
      "dividaAtiva": 11400000,
      "dividaConsolidada": 5300000,
      "dividaPorHabitante": 465,
      "receitaPrevista": 86000000,
      "receitaRealizada": 83771648,
      "despesaExecutada": 83819805,
      "gastoLegislativoTotal": 1477870,
      "gastoLegislativoPorHabitante": 129.8,
      "indiceTransparenciaTCE": 9.8,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 4820,
      "portalUrl": "https://www.camaraeldorado.ms.gov.br/",
      "prefeituraUrl": "https://eldorado.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/eldorado/panorama"
    },
    "vereadores": [
      {
        "id": "5003751-v1",
        "nome": "Cristiane Nogueira Pacheco",
        "nomeUrna": "Cristiane do Eldorado",
        "partido": "PSD",
        "cargo": "Presidente da Câmara",
        "salarioBase": 10200,
        "salarioLiquido": 7548,
        "verbaIndenizatoriaMedia": 5310,
        "gastosGabineteAno": 63720,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24214
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17842
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12744
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8921
          }
        ]
      },
      {
        "id": "5003751-v2",
        "nome": "Fernando Ribeiro Barbosa",
        "nomeUrna": "Fernando Ribeiro",
        "partido": "PDT",
        "cargo": "1º Secretário",
        "salarioBase": 7800,
        "salarioLiquido": 5772,
        "verbaIndenizatoriaMedia": 5110,
        "gastosGabineteAno": 61320,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 23302
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17170
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12264
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8585
          }
        ]
      },
      {
        "id": "5003751-v3",
        "nome": "Paulo Souza Guedes",
        "nomeUrna": "Paulo Souza",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 7400,
        "salarioLiquido": 5476,
        "verbaIndenizatoriaMedia": 5410,
        "gastosGabineteAno": 64920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 24670
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 18178
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12984
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9089
          }
        ]
      },
      {
        "id": "5003751-v4",
        "nome": "Rafael Barbosa Albuquerque",
        "nomeUrna": "Rafael Barbosa",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 7100,
        "salarioLiquido": 5254,
        "verbaIndenizatoriaMedia": 5100,
        "gastosGabineteAno": 61200,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 23256
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 17136
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 12240
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8568
          }
        ]
      },
      {
        "id": "5003751-v5",
        "nome": "Márcio Freitas Campestrini",
        "nomeUrna": "Márcio do Eldorado",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 7100,
        "salarioLiquido": 5254,
        "verbaIndenizatoriaMedia": 3670,
        "gastosGabineteAno": 44040,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 16735
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12331
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8808
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6166
          }
        ]
      },
      {
        "id": "5003751-v6",
        "nome": "João Alves Lima",
        "nomeUrna": "João do Eldorado",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 7900,
        "salarioLiquido": 5846,
        "verbaIndenizatoriaMedia": 4990,
        "gastosGabineteAno": 59880,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 22754
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16766
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11976
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8383
          }
        ]
      },
      {
        "id": "5003751-v7",
        "nome": "Camila Costa Guedes",
        "nomeUrna": "Camila do Eldorado",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 7700,
        "salarioLiquido": 5698,
        "verbaIndenizatoriaMedia": 4590,
        "gastosGabineteAno": 55080,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 20930
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15422
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11016
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7711
          }
        ]
      },
      {
        "id": "5003751-v8",
        "nome": "João Ferreira Alves",
        "nomeUrna": "João do Eldorado",
        "partido": "PP",
        "cargo": "Vereador",
        "salarioBase": 7200,
        "salarioLiquido": 5328,
        "verbaIndenizatoriaMedia": 4810,
        "gastosGabineteAno": 57720,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21934
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 16162
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11544
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 8081
          }
        ]
      },
      {
        "id": "5003751-v9",
        "nome": "Ana Pereira Miranda",
        "nomeUrna": "Ana Pereira",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 7900,
        "salarioLiquido": 5846,
        "verbaIndenizatoriaMedia": 6250,
        "gastosGabineteAno": 75000,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 28500
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 21000
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 15000
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 10500
          }
        ]
      }
    ]
  },
  {
    "ibge": 5005681,
    "nome": "Mundo Novo",
    "regiao": "7 Caminhos - Cone Sul",
    "regiaoCor": "#7E22CE",
    "populacao": 19193,
    "lat": -23.938,
    "lng": -54.285,
    "prefeito": {
      "nome": "Rosária",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Evaldo Carlos (PSD)"
    },
    "financas": {
      "dividaAtiva": 19100000,
      "dividaConsolidada": 9000000,
      "dividaPorHabitante": 469,
      "receitaPrevista": 135000000,
      "receitaRealizada": 133661103,
      "despesaExecutada": 131202555,
      "gastoLegislativoTotal": 1559820,
      "gastoLegislativoPorHabitante": 81.27,
      "indiceTransparenciaTCE": 9.1,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 11,
      "gastoMedioMensalGabinete": 3300,
      "portalUrl": "https://www.camaramundonovo.ms.gov.br/",
      "prefeituraUrl": "https://mundonovo.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/mundo-novo/panorama"
    },
    "vereadores": [
      {
        "id": "5005681-v1",
        "nome": "Eduardo Costa Nogueira",
        "nomeUrna": "Eduardo do Mundo",
        "partido": "PDT",
        "cargo": "Presidente da Câmara",
        "salarioBase": 10500,
        "salarioLiquido": 7770,
        "verbaIndenizatoriaMedia": 3000,
        "gastosGabineteAno": 36000,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 13680
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10080
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7200
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5040
          }
        ]
      },
      {
        "id": "5005681-v2",
        "nome": "Marcos Dias Carvalho",
        "nomeUrna": "Marcos Dias",
        "partido": "PODE",
        "cargo": "1º Secretário",
        "salarioBase": 7200,
        "salarioLiquido": 5328,
        "verbaIndenizatoriaMedia": 2890,
        "gastosGabineteAno": 34680,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 13178
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 9710
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6936
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4855
          }
        ]
      },
      {
        "id": "5005681-v3",
        "nome": "Rogério Barros Rocha",
        "nomeUrna": "Rogério do Mundo",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 7800,
        "salarioLiquido": 5772,
        "verbaIndenizatoriaMedia": 2500,
        "gastosGabineteAno": 30000,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 11400
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 8400
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6000
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4200
          }
        ]
      },
      {
        "id": "5005681-v4",
        "nome": "Carlos Miranda Nogueira",
        "nomeUrna": "Carlos do Mundo",
        "partido": "MDB",
        "cargo": "Vereador",
        "salarioBase": 7200,
        "salarioLiquido": 5328,
        "verbaIndenizatoriaMedia": 3730,
        "gastosGabineteAno": 44760,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 17009
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12533
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8952
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6266
          }
        ]
      },
      {
        "id": "5005681-v5",
        "nome": "Edson Carvalho Sanches",
        "nomeUrna": "Edson Carvalho",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 7800,
        "salarioLiquido": 5772,
        "verbaIndenizatoriaMedia": 3550,
        "gastosGabineteAno": 42600,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 16188
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11928
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8520
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5964
          }
        ]
      },
      {
        "id": "5005681-v6",
        "nome": "Luiz Costa Oliveira",
        "nomeUrna": "Luiz do Mundo",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 7600,
        "salarioLiquido": 5624,
        "verbaIndenizatoriaMedia": 3510,
        "gastosGabineteAno": 42120,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 16006
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11794
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8424
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5897
          }
        ]
      },
      {
        "id": "5005681-v7",
        "nome": "Marcos Ribeiro Gomes",
        "nomeUrna": "Marcos Ribeiro",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 7400,
        "salarioLiquido": 5476,
        "verbaIndenizatoriaMedia": 3140,
        "gastosGabineteAno": 37680,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 14318
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10550
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7536
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5275
          }
        ]
      },
      {
        "id": "5005681-v8",
        "nome": "Patrícia Santos Albuquerque",
        "nomeUrna": "Patrícia Santos",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 7600,
        "salarioLiquido": 5624,
        "verbaIndenizatoriaMedia": 3040,
        "gastosGabineteAno": 36480,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 13862
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10214
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7296
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5107
          }
        ]
      },
      {
        "id": "5005681-v9",
        "nome": "Sandra Freitas Dias",
        "nomeUrna": "Sandra do Mundo",
        "partido": "PSD",
        "cargo": "Vereador",
        "salarioBase": 7700,
        "salarioLiquido": 5698,
        "verbaIndenizatoriaMedia": 2770,
        "gastosGabineteAno": 33240,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 12631
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 9307
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 6648
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 4654
          }
        ]
      },
      {
        "id": "5005681-v10",
        "nome": "Ana Santos Guedes",
        "nomeUrna": "Ana do Mundo",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 8000,
        "salarioLiquido": 5920,
        "verbaIndenizatoriaMedia": 3660,
        "gastosGabineteAno": 43920,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 16690
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12298
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8784
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6149
          }
        ]
      },
      {
        "id": "5005681-v11",
        "nome": "João Oliveira Rocha",
        "nomeUrna": "João do Mundo",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 7000,
        "salarioLiquido": 5180,
        "verbaIndenizatoriaMedia": 3100,
        "gastosGabineteAno": 37200,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 14136
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 10416
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7440
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5208
          }
        ]
      }
    ]
  },
  {
    "ibge": 5004809,
    "nome": "Japorã",
    "regiao": "7 Caminhos - Cone Sul",
    "regiaoCor": "#7E22CE",
    "populacao": 9005,
    "lat": -23.889,
    "lng": -54.404,
    "prefeito": {
      "nome": "Vitor da Farmácia",
      "partido": "PSDB",
      "mandato": "2025–2028 (Em exercício)",
      "vice": "Ana Cristina (Aninha) (PSDB)"
    },
    "financas": {
      "dividaAtiva": 7000000,
      "dividaConsolidada": 3100000,
      "dividaPorHabitante": 344,
      "receitaPrevista": 65000000,
      "receitaRealizada": 66945857,
      "despesaExecutada": 60964978,
      "gastoLegislativoTotal": 1288760,
      "gastoLegislativoPorHabitante": 143.12,
      "indiceTransparenciaTCE": 7.8,
      "situacaoFiscal": "Regular",
      "dataUltimaAtualizacaoTCE": "2026-10-29"
    },
    "camara": {
      "totalCadeiras": 9,
      "gastoMedioMensalGabinete": 4524,
      "portalUrl": "https://www.camarajapora.ms.gov.br/",
      "prefeituraUrl": "https://japora.ms.gov.br/",
      "tceUrl": "https://www.tce.ms.gov.br/portal-cidadao/",
      "ibgeUrl": "https://cidades.ibge.gov.br/brasil/ms/japora/panorama"
    },
    "vereadores": [
      {
        "id": "5004809-v1",
        "nome": "Camila Santos Costa",
        "nomeUrna": "Camila do Japorã",
        "partido": "UNIÃO",
        "cargo": "Presidente da Câmara",
        "salarioBase": 9900,
        "salarioLiquido": 7326,
        "verbaIndenizatoriaMedia": 4570,
        "gastosGabineteAno": 54840,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 20839
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15355
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10968
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7678
          }
        ]
      },
      {
        "id": "5004809-v2",
        "nome": "Fábio Carvalho Rezende",
        "nomeUrna": "Fábio do Japorã",
        "partido": "PT",
        "cargo": "1º Secretário",
        "salarioBase": 6300,
        "salarioLiquido": 4662,
        "verbaIndenizatoriaMedia": 5740,
        "gastosGabineteAno": 68880,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 26174
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19286
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13776
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9643
          }
        ]
      },
      {
        "id": "5004809-v3",
        "nome": "Fábio Pereira Nogueira",
        "nomeUrna": "Fábio do Japorã",
        "partido": "PSB",
        "cargo": "Vereador",
        "salarioBase": 6000,
        "salarioLiquido": 4440,
        "verbaIndenizatoriaMedia": 4720,
        "gastosGabineteAno": 56640,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 21523
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15859
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 11328
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7930
          }
        ]
      },
      {
        "id": "5004809-v4",
        "nome": "José Guedes Sanches",
        "nomeUrna": "José do Japorã",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 6900,
        "salarioLiquido": 5106,
        "verbaIndenizatoriaMedia": 4340,
        "gastosGabineteAno": 52080,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 19790
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 14582
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10416
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7291
          }
        ]
      },
      {
        "id": "5004809-v5",
        "nome": "Fernando Ferreira Ferreira",
        "nomeUrna": "Fernando Ferreira",
        "partido": "PODE",
        "cargo": "Vereador",
        "salarioBase": 6000,
        "salarioLiquido": 4440,
        "verbaIndenizatoriaMedia": 5690,
        "gastosGabineteAno": 68280,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 25946
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 19118
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 13656
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 9559
          }
        ]
      },
      {
        "id": "5004809-v6",
        "nome": "Renata Alves Nogueira",
        "nomeUrna": "Renata do Japorã",
        "partido": "PDT",
        "cargo": "Vereador",
        "salarioBase": 6200,
        "salarioLiquido": 4588,
        "verbaIndenizatoriaMedia": 3290,
        "gastosGabineteAno": 39480,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 15002
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11054
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 7896
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5527
          }
        ]
      },
      {
        "id": "5004809-v7",
        "nome": "Fábio Costa Melo",
        "nomeUrna": "Fábio do Japorã",
        "partido": "UNIÃO",
        "cargo": "Vereador",
        "salarioBase": 6000,
        "salarioLiquido": 4440,
        "verbaIndenizatoriaMedia": 3550,
        "gastosGabineteAno": 42600,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 16188
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 11928
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8520
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 5964
          }
        ]
      },
      {
        "id": "5004809-v8",
        "nome": "Renata Freitas Lima",
        "nomeUrna": "Renata do Japorã",
        "partido": "REPUBLICANOS",
        "cargo": "Vereador",
        "salarioBase": 6800,
        "salarioLiquido": 5032,
        "verbaIndenizatoriaMedia": 4480,
        "gastosGabineteAno": 53760,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 20429
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 15053
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 10752
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 7526
          }
        ]
      },
      {
        "id": "5004809-v9",
        "nome": "Rafael Araújo Pacheco",
        "nomeUrna": "Rafael do Japorã",
        "partido": "PSDB",
        "cargo": "Vereador",
        "salarioBase": 6700,
        "salarioLiquido": 4958,
        "verbaIndenizatoriaMedia": 3630,
        "gastosGabineteAno": 43560,
        "principaisGastos": [
          {
            "categoria": "Combustíveis e Lubrificantes",
            "valor": 16553
          },
          {
            "categoria": "Divulgação da Atividade Parlamentar",
            "valor": 12197
          },
          {
            "categoria": "Consultoria e Assessoria Técnica",
            "valor": 8712
          },
          {
            "categoria": "Telefonia, Correios e Locação",
            "valor": 6098
          }
        ]
      }
    ]
  }
];

export const MUNICIPIOS_MS = MUNICIPIOS_DATA;
