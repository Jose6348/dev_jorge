/* ======= Icones Tecnologias =======*/
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiGo,
  SiBootstrap,
  SiStyledcomponents,
  SiNodedotjs,
  SiJquery,
  SiVuedotjs,
  SiMicrosoftazure,
  SiPostgresql,
  SiNuxtdotjs,
} from "react-icons/si";

/*======== Import das imagens =======*/
import imagem01 from "/coffepage.png";
import imagem02 from "/finances.png";
import imagem03 from "/GuessingGame.png";
import imagem04 from "/news (1).png";
import imagem05 from "/tattopage.png";
import imagem06 from "/TecPage.png";

export const links = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "Services",
    path: "services",
  },
  {
    name: "Skills",
    path: "skills",
  },
  {
    name: "Portfolio",
    path: "portfolio",
  },
  {
    name: "Resume",
    path: "resume",
  },
  {
    name: "Contact",
    path: "contact",
  },
];

export const services = [
  {
    id: 1,
    name: "Desenvolvimento Web",
    title: "Front-End",
    description:
      "Desenvolvimento de sites profissionais, blogs, portfólios, landing pages e e-commerce.",
  },
  {
    id: 2,
    name: "Designer",
    title: "UI Design",
    description:
      "Desenho interfaces que sejam claras, objetivas e que possam ser intuitivas para o usuário. ",
  },
  {
    id: 3,
    name: "Desenvolvimento GO",
    title: "Back-end",
    description: "Desenvolvo aplicações em GoLang.",
  },
];

export const skills = [
  { id: 1, name: "JavaScript", image: <SiJavascript id="js" /> },
  { id: 2, name: "TypeScript", image: <SiTypescript id="ts" /> },
  { id: 3, name: "React", image: <SiReact id="react" /> },
  { id: 4, name: "Go", image: <SiGo id="go" /> },
  { id: 5, name: "Bootstrap", image: <SiBootstrap id="bootstrap" /> },
  {
    id: 6,
    name: "Styled Components",
    image: <SiStyledcomponents id="styled" />,
  },
  { id: 7, name: "jQuery", image: <SiJquery id="jquery" /> },
  { id: 8, name: "Node.js", image: <SiNodedotjs id="node" /> },
  { id: 9, name: "Vue.js", image: <SiVuedotjs id="vue" /> },
  { id: 10, name: "Azure", image: <SiMicrosoftazure id="azure" /> }, // Microsoft Azure
  { id: 11, name: "PostgreSQL", image: <SiPostgresql id="postgresql" /> }, // Banco de dados PostgreSQL
  { id: 12, name: "Nuxt.js", image: <SiNuxtdotjs id="nuxt" /> }, // Nuxt.js
];

export const projects = [
  {
    id: 1,
    img: imagem01,
    category: "Vue.js",
    title: "Coffe Page",
    description:
      "Esta é uma Landing Page destinada a lojas de café com foco em mostrar um pouco da loja e fazer publicidade da loja em questão.",
    codigo: "https://github.com/Jose6348/Landing_page_loja2",
    demo: "https://coffeshoppage.netlify.app//",
  },
  {
    id: 2,
    img: imagem02,
    category: "Vue.js",
    title: "Finances App",
    description:
      "Aplicação Web destinada a gerenciar finanças pessoais e organizar os gastos do mês.",
    codigo: "https://github.com/Jose6348/Personal_finances",
  },
  {
    id: 3,
    img: imagem03,
    category: "Go",
    title: "Jogo de advinhação",
    description:
      "o App usa uma aplicação backend feito em GoLang e uma aplicação front-end feita em React Native.",
    codigo: "https://github.com/Jose6348/Guessing_Game",
  },
  {
    id: 4,
    img: imagem04,
    category: "Vue.js",
    title: "Site de notícias",
    description:
      "Site de notícias que consome uma API de notícias que mostra as principais reportagens do mundo todo.",
    codigo: "https://github.com/Jose6348/News_app",
    demo: "https://newsappze.netlify.app/",
  },
  {
    id: 5,
    img: imagem05,
    category: "Vue.js",
    title: "Site de tatuagem",
    description:
      "Um site que usa Vue.js para exibir um negócio de tatuagem e mostrar um pouco da história, das tattoos e de tudo que há de melhor da loja.",
    codigo: "https://github.com/Jose6348/Tatto_Page",
    demo: "https://ferracintattoo.netlify.app//",
  },
  {
    id: 6,
    img: imagem06,
    category: "Vue.js",
    title: "Página Tec",
    description:
      "Este é uma landing page que mostra um pouco de uma empresa de tecnologia e suas principais informações.",
    codigo: "https://github.com/Jose6348/Landing_page3",
    demo: "https://tecnologypage.netlify.app/",
  },
];

export const cv = [
  {
    id: 1,
    title: "Bacharel em Engenharia da Computação",
    subtitle: "FHO - Fundação Hermínio Ometto",
    date: "2020 - 2025",
    description:
      "Cursando Engenharia da Computação na FHO, com ênfase em desenvolvimento de software, análise de sistemas e arquitetura computacional. Trabalhos práticos envolvendo desenvolvimento full-stack, inteligência artificial e automação de processos.",
    category: "educacao",
  },
  {
    id: 2,
    title: "Desenvolvimento Full-Stack ",
    subtitle: "Gransys",
    date: "2024 - Now",
    description:
      "Atuo na construção e aprimoramento de sistemas e interfaces para a Gransys, entregando soluções que alinham inovação, usabilidade e eficiência. Experiência com Vue.js, Nuxt 3, Laravel, GoLang e PostgreSQL.",
    category: "experiencia",
  },
  {
    id: 3,
    title: "Desenvolvedor Front-End",
    subtitle: "Freelancer | Desenvolvedor Autônomo ",
    date: "12/2023 - Atualmente",
    description:
      "Atuo no desenvolvimento de soluções web e análise de dados, entregando interfaces modernas e de alta performance para empresas e clientes individuais. Desenvolvimento de aplicações utilizando HTML5, CSS3, JavaScript, PHP e frameworks modernos.",
    category: "experiencia",
  },
  {
    id: 4,
    title: "Desenvolvimento Full-Stack com Vue.js e Nuxt.js",
    subtitle: "Curso Avançado - Alura",
    date: "2024 - 2024",
    description:
      "Curso aprofundado sobre Vue.js 3 e Nuxt 3, incluindo composição de API, otimização de desempenho e desenvolvimento de aplicações dinâmicas e escaláveis.",
    category: "educacao",
  },
  {
    id: 5,
    title: "Curso de Golang",
    subtitle: "Curso Online - RocketSeat",
    date: "2025 (em formação)",
    description:
      "Curso sobre desenvolvimento backend utilizando Golang, abordando conceitos como concorrência, manipulação de banco de dados e criação de APIs RESTful.",
    category: "educacao",
  },
  {
    id: 6,
    title: "Curso de Desenvolvimento Web",
    subtitle: "Curso Online - Rocketseat",
    date: "2024",
    description:
      "Treinamento prático em desenvolvimento full-stack, cobrindo HTML5, CSS3, JavaScript.",
    category: "educacao",
  },
  {
    id: 7,
    title: "Curso de Azure Fundamentals",
    subtitle: "Microsoft Learning - Alura",
    date: "2024",
    description:
      "Fundamentos da computação em nuvem com Microsoft Azure, incluindo serviços como Azure Functions, armazenamento e gerenciamento de infraestrutura.",
    category: "educacao",
  },
  {
    id: 8,
    title: "Curso de C# e .NET",
    subtitle: "Curso Online - RocketSeat",
    date: "2025 (em formação)",
    description:
      "Aprendizado sobre desenvolvimento de aplicações em C# utilizando .NET, cobrindo fundamentos de POO, manipulação de dados e criação de APIs.",
    category: "educacao",
  },
 
];
