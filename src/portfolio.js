/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Inteligência Estatística | Engenharia de Dados | Estratégia de Equity",
  logo_name: "Esther Camilo",
  nickname: "Esther Camilo",
  subTitle:
    "Ph.D. em Física e Desenvolvedora Backend Senior[cite: 1, 2]. Especialista em organizar o caos: transformo dados complexos em sistemas automatizados e APIs que resolvem problemas reais de negócio[cite: 1, 3].",
  resumeLink: "https://allmylinks.com/esthercamilo",
  portfolio_repository: "https://github.com/esthercamilo",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/esthercamilo",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/esthercamilo/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:esthercamilo@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Desenvolvimento Backend & APIs",
      fileName: "FullStackImg",
      skills: [
        "⚡ Construção de APIs robustas utilizando Python e Django Rest Framework[cite: 1, 2]",
        "⚡ Modelagem de bancos de dados relacionais (PostgreSQL) e integrações de sistemas[cite: 1, 2]",
        "⚡ Desenvolvimento focado em transformar regras de negócio complexas em código produtivo[cite: 1, 3]",
        "⚡ Experiência com arquitetura de software, CI/CD e Docker para ambientes de alta demanda[cite: 2]",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "logos:django-icon",
          style: { color: "#092E20" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
          style: { color: "#336791" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
          style: { color: "#2496ED" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { color: "#F7DF1E" },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
          style: { color: "#FF9900" },
        },
      ],
    },
    {
      title: "Dados e Automação Científica",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Engenharia de dados: criação de pipelines (ETL) para automação de processos manuais[cite: 1, 2]",
        "⚡ Análise de dados reais para apoio à decisão em setores de crédito, risco e saúde[cite: 1, 3]",
        "⚡ Implementação de algoritmos de Machine Learning e modelagem estatística rigorosa[cite: 1, 3]",
        "⚡ Experiência avançada em Palantir Foundry, PySpark e automação via LLMs[cite: 2, 3]",
      ],
      softwareSkills: [
        {
          skillName: "Pandas",
          fontAwesomeClassname: "logos:pandas-icon",
          style: { color: "#150458" },
        },
        {
          skillName: "PySpark",
          fontAwesomeClassname: "logos:pyspark",
          style: { color: "#E25A1C" },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "logos:r-lang",
          style: { color: "#276DC3" },
        },
        {
          skillName: "Palantir",
          fontAwesomeClassname: "simple-icons:palantir",
          style: { color: "#101113" },
        },
      ],
    },
  ],
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Backend (Python/Django)",
      progressPercentage: "95%",
    },
    {
      Stack: "Engenharia de Dados / SQL",
      progressPercentage: "90%",
    },
    {
      Stack: "Data Science / Modelagem",
      progressPercentage: "85%",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Unesp / EBI Cambridge (UK)",
      subtitle: "Ph.D. em Genética Computacional",
      logo_path: "unesp_logo.png",
      alt_name: "Unesp",
      duration: "2011 - 2015",
      descriptions: [
        "⚡ Pesquisa em predição de fenótipos através de redes biológicas e machine learning[cite: 1].",
        "⚡ Estágio no European Bioinformatics Institute em Cambridge, UK[cite: 1].",
        "⚡ Foco em processamento de dados de larga escala e bioinformática[cite: 1, 3].",
      ],
      website_link: "https://www.unesp.br/",
    },
    {
      title: "Unesp Bauru",
      subtitle: "Mestrado e Graduação em Física",
      logo_path: "unesp_logo.png",
      alt_name: "Unesp Bauru",
      duration: "2000 - 2008",
      descriptions: [
        "⚡ Base sólida em modelos matemáticos e resolução de problemas complexos[cite: 1, 3].",
        "⚡ Desenvolvimento de pensamento analítico e rigor estatístico[cite: 1, 3].",
      ],
      website_link: "https://www.fc.unesp.br/",
    },
  ],
};

const experience = {
  title: "Experiência Profissional",
  subtitle: "Sistemas e Dados na Prática",
  description:
    "Mais de 12 anos transformando lógica complexa em software produtivo. Do desenvolvimento de vacinas no Butantan à criação de motores de crédito em Fintechs, meu foco é sempre a eficiência e a automação[cite: 1, 2, 3].",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Trajetória Recente",
      experiences: [
        {
          title: "Senior Computational Scientist",
          company: "Instituto Butantan",
          duration: "2024 - Presente",
          location: "São Paulo, SP",
          description:
            "Automação de workflows científicos e pipelines de dados utilizando Palantir Foundry e LLMs para acelerar o desenvolvimento de vacinas[cite: 2, 3].",
          features: [],
          color: "#0879bf",
        },
        {
          title: "Senior Developer / Data Scientist",
          company: "Gntech Exames",
          duration: "2022 - 2025",
          location: "Florianópolis (Remoto)",
          description:
            "Implementação de pipelines de produção e algoritmos de predição farmacogenética, traduzindo DNA em relatórios médicos automáticos[cite: 1, 2, 3].",
          features: [],
          color: "#181717",
        },
        {
          title: "Data Scientist & Backend Lead",
          company: "Ali Crédito",
          duration: "2021 - 2022",
          location: "São Paulo (Remoto)",
          description:
            "Estruturação de dados do zero e construção de motores de decisão de crédito e análise de risco para fintech[cite: 1, 2, 3].",
          features: [],
          color: "#0077B5",
        },
      ],
    },
  ],
};

const projectsHeader = {
  title: "Projetos e Soluções",
  description:
    "Meus projetos focam em utilidade técnica: desde bots de trading em Python até integração de sistemas de saúde e finanças[cite: 1, 2].",
  avatar_image_path: "projects_image.svg",
};

const contactPageData = {
  contactSection: {
    title: "Contato e Mentoria",
    profile_image_path: "esther.png",
    description:
      "Precisa de ajuda para organizar seus dados ou construir um backend sólido? Estou disponível para mentorias técnicas e diagnósticos de projeto[cite: 1].",
  },
  addressSection: {
    title: "Localização",
    subtitle: "São Paulo - SP, Brasil",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/Yj8pG6S8S7W8Z8W8",
  },
  phoneSection: {
    title: "Telefone",
    subtitle: "+55 (14) 99794-2182",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  techStack,
  degrees,
  experience,
  projectsHeader,
  contactPageData,
};