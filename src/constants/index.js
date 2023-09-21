import {
  EKNA,
  NSY2S,
  backend,
  carrent,
  cr7,
  creator,
  css,
  docker,
  ekna_page,
  figma,
  git,
  html,
  jackson,
  javascript,
  jobit,
  kylianMbappe,
  lebron,
  luffy,
  meta,
  mobile,
  mongodb,
  nodejs,
  porfolio_1,
  porfolio_2,
  reactjs,
  redux,
  sherlockHolmes,
  shopify,
  starbucks,
  superman,
  tailwind,
  tesla,
  therock,
  threejs,
  tripguide,
  typescript,
  usainBolt,
  web,
} from "../assets";

export const navLinks = [
 
 {
   id: "cards",
   title: "Stars",
 },
 {
   id: "contact",
   title: "Planet Animé",
 },
 {
   id: "about",
   title: "A propos du jeu",
 },
];

const services = [
 {
   title: "Musiciens",
   icon: web,
 },
 {
   title: "Footballistes",
   icon: mobile,
 },
 {
   title: "Acteurs",
   icon: backend,
 },
 {
   title: "Divers",
   icon: creator,
 },
];

const technologies = [
 {
   name: "HTML 5",
   icon: html,
 },
 {
   name: "CSS 3",
   icon: css,
 },
 {
   name: "JavaScript",
   icon: javascript,
 },
 {
   name: "TypeScript",
   icon: typescript,
 },
 {
   name: "React JS",
   icon: reactjs,
 },
 {
   name: "Redux Toolkit",
   icon: redux,
 },
 {
   name: "Tailwind CSS",
   icon: tailwind,
 },
 {
   name: "Node JS",
   icon: nodejs,
 },
 {
   name: "MongoDB",
   icon: mongodb,
 },
 {
   name: "Three JS",
   icon: threejs,
 },
 {
   name: "git",
   icon: git,
 },
 {
   name: "figma",
   icon: figma,
 },
 {
   name: "docker",
   icon: docker,
 },
];

const experiences = [
 {
   title: "React.js Developer - stage",
   company_name: "INSY2S",
   icon: NSY2S,
   iconBg: "#383E56",
   date: "Janvier 2023 - Juin 2023",
   points: [
    "Développer des applications web en utilisant React.js, Node.js et d'autres technologies connexes",
    "Collaborer avec des équipes interfonctionnelles comprenant des concepteurs, des gestionnaires de produits et d'autres développeurs pour créer un produit de haute qualité", "Collaborer avec des équipes interfonctionnelles comprenant des concepteurs, des gestionnaires de produits et d'autres développeurs pour créer un produit de haute qualité",
    "Implementing responsive design and ensuring cross-browser compatibility", "Implementing responsive design and ensuring cross-browser compatibility",
    "Participer à des revues de code et fournir un retour d'information constructif aux autres développeurs",
   ],
 },
 {
   title: "Web Developer JS | Php - stage",
   company_name: "Ekna",
   icon: EKNA,
   iconBg: "#E6DEDD",
   date: "Nov 2022 - Dec 2022",
   points: [
    "Collaborer au développement d'applications web en utilisant Laravel, JavaScript, JQuery et d'autres technologies",
    "Collaborer et travailler main dans la main avec les concepteurs, les chefs de produit et les autres développeurs",,
    "Mettre en œuvre une carte Google par le biais d'une API",,
    "Réaliser différentes vues pour l'application web",
   ],
 },


];

const testimonials = [
 {
   testimonial:
     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
   name: "Sara Lee",
   designation: "CFO",
   company: "Acme Co",
   image: "https://randomuser.me/api/portraits/women/4.jpg",
 },
 {
   testimonial:
     "I've never met a web developer who truly cares about their clients' success like Rick does.",
   name: "Chris Brown",
   designation: "COO",
   company: "DEF Corp",
   image: "https://randomuser.me/api/portraits/men/5.jpg",
 },
 {
   testimonial:
     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
   name: "Lisa Wang",
   designation: "CTO",
   company: "456 Enterprises",
   image: "https://randomuser.me/api/portraits/women/6.jpg",
 },
];

const projects = [
 {
   name: "Porfolio Modo Dark et lingth",
   description:
     "Vous trouverez ici des informations sur ma formation, ainsi qu'une brève présentation de moi.",
   tags: [
     {
       name: "react",
       color: "blue-text-gradient",
     },
     {
       name: "mongodb",
       color: "green-text-gradient",
     },
     {
       name: "tailwind",
       color: "pink-text-gradient",
     },
   ],
   image: porfolio_1,
   source_code_link: "https://www.davidbovin.com/",
 },
 {
   name: "Site web avec animations ",
   description:
     "Site web au design plus moderne et plus professionnel.",
   tags: [
     {
       name: "react",
       color: "blue-text-gradient",
     },
     {
       name: "tailwind",
       color: "green-text-gradient",
     },
     {
       name: "Vite Js",
       color: "pink-text-gradient",
     },
   ],
   image: porfolio_2,
   source_code_link: "https://www.cordobabonvin.com/",
 },
 
 {
  name: "Ekna  ",
  description:
    "Lors d'un stage chez ekna, j'ai travaillé sur la création de plusieurs vues pour cette application web.",
  tags: [
    {
      name: "Laravel 9.0",
      color: "blue-text-gradient",
    },
    {
      name: "Bootstrap",
      color: "green-text-gradient",
    },
    {
      name: "Php",
      color: "pink-text-gradient",
    },
  ],
  image: ekna_page,
  source_code_link: "https://www.ekna.fr/",
},
];

const stars1= [
  {
    name: "Cristiano Ronaldo",
    description:
      "Surnommé CR7, est un footbaleur international portugais qui joue au poste d'attaquant à Al-Nasser",
    tags: [
      {
        name: "Football 90",
        color: "blue-text-gradient",
      },
      {
        name: "Basketball 20 ",
        color: "green-text-gradient",
      },
      {
        name: "Danse 50",
        color: "pink-text-gradient",
      },
    ],
    image: cr7,
    source_code_link: "https://www.davidbovin.com/",
  },
  {
    name: "Michael Jackson ",
    description:
      "c'est un auteur-compositeur-interprète, danseur-chorégraphe et acteur américain",
    tags: [
      {
        name: "Football 70",
        color: "blue-text-gradient",
      },
      {
        name: "Basketball 10 ",
        color: "green-text-gradient",
      },
      {
        name: "Danse 99",
        color: "pink-text-gradient",
      },
    ],
    image: jackson,
    source_code_link: "https://www.davidbovin.com/",
  },

  {
    name: "Lebron James ",
    description:
      "c'est un joueur professionnel américain de basket-ball qui aux Lakers de Los Angeles en NBA",
    tags: [
      {
        name: "Football 30",
        color: "blue-text-gradient",
      },
      {
        name: "Basketball 99 ",
        color: "green-text-gradient",
      },
      {
        name: "Danse 70",
        color: "pink-text-gradient",
      },
    ],
    image: lebron,
    source_code_link: "https://www.davidbovin.com/",
  },

  {
    name: "Usain Bolt ",
    description:
      "c'est spécialiste des épreuves de sprint, généralement considéré comme le plus grand sprinter de tous les temps.",
    tags: [
      {
        name: "Football 70",
        color: "blue-text-gradient",
      },
      {
        name: "Basketball 50 ",
        color: "green-text-gradient",
      },
      {
        name: "Danse 40",
        color: "pink-text-gradient",
      },
    ],
    image: usainBolt,
    source_code_link: "https://www.davidbovin.com/",
  },
]

const stars = [
  {
    name: "Cristiano Ronaldo",
    description:
      "Surnommé CR7, est un footbaleur international portugais qui joue au poste d'attaquant à Al-Nasser",
    tags: [
      {
        name: "Force 95",
        color: "blue-text-gradient",
      },
      {
        name: "Vitesse 97",
        color: "green-text-gradient",
      },
      {
        name: "Technique 92",
        color: "pink-text-gradient",
      },
    ],
    image: cr7,
    source_code_link: "https://www.davidbovin.com/",
  },

  {
    name: "Michael Jackson ",
    description:
      "c'est un auteur-compositeur-interprète, danseur-chorégraphe et acteur américain",
    tags: [
      {
        name: "Agilité 95",
        color: "blue-text-gradient",
      },
      {
        name: "Rapidité 98",
        color: "green-text-gradient",
      },
      {
        name: "Présicion 90",
        color: "pink-text-gradient",
      },
    ],
    image: jackson,
    source_code_link: "https://www.davidbovin.com/",
  },

  {
    name: "Lebron James",
    description:
      "c'est un joueur professionnel américain de basket-ball qui aux Lakers de Los Angeles en NBA",
    tags: [
      {
        name: "Force 95",
        color: "blue-text-gradient",
      },
      {
        name: "Endurance 98",
        color: "green-text-gradient",
      },
      {
        name: "Agilité 92",
        color: "pink-text-gradient",
      },
    ],
    image: lebron,
    source_code_link: "https://www.davidbovin.com/",
  },

  {
    name: "Usain Bolt ",
    description:
      "c'est spécialiste des épreuves de sprint, généralement considéré comme le plus grand sprinter de tous les temps.",
    tags: [
      {
        name: "Vitesse 99",
        color: "blue-text-gradient",
      },
      {
        name: "Agilité 90",
        color: "green-text-gradient",
      },
      {
        name: "Endurance 80",
        color: "pink-text-gradient",
      },
    ],
    image: usainBolt,
    source_code_link: "https://www.davidbovin.com/",
  },

  {
    name: "The Rock ",
    description:
      "c'est est un acteur, producteur, catcheur américano-canadien",
    tags: [
      {
        name: "Force 95",
        color: "blue-text-gradient",
      },
      {
        name: "Endurance 90",
        color: "green-text-gradient",
      },
      {
        name: "Agilité 85",
        color: "pink-text-gradient",
      },
    ],
    image: therock,
    source_code_link: "https://www.davidbovin.com/",
  },

  {
    name: "Kylian Mbappé ",
    description:
      "c'est un footballeur international français qui joue au poste d'attaquant au Paris Saint-Germain.",
    tags: [
      {
        name: "Vitesse 97",
        color: "blue-text-gradient",
      },
      {
        name: "Agilité 92",
        color: "green-text-gradient",
      },
      {
        name: "Technique 90",
        color: "pink-text-gradient",
      },
    ],
    image: kylianMbappe,
    source_code_link: "https://www.davidbovin.com/",
  },

  {
    name: "Sherlock Holmes",
    description:
      "c'est un personnage de fiction britannique dans le roman policier",
    tags: [
      {
        name: "Intelligence tactique 98",
        color: "blue-text-gradient",
      },
      {
        name: "Precision de perception 95  ",
        color: "green-text-gradient",
      },
      {
        name: "Agilité 85",
        color: "pink-text-gradient",
      },
    ],
    image: sherlockHolmes,
    source_code_link: "https://www.davidbovin.com/",
  },

  {
    name: "Monkey D. Luffy",
    description:
      "surnommé de manière récurrente Luffy au chapeau de paille, un personnage de fiction et principal protagoniste de la franchise japonaise One Piece ",
    tags: [
      {
        name: "Force 95",
        color: "blue-text-gradient",
      },
      {
        name: "Elasticité 98",
        color: "green-text-gradient",
      },
      {
        name: "Endurance 90",
        color: "pink-text-gradient",
      },
    ],
    image: luffy,
    source_code_link: "https://www.davidbovin.com/",
  },

    {
      name: "Superman",
      description:
        "c'est un super-héros de bande dessinée américaine appartenant au monde imaginaire.",
      tags: [
        {
          name: "Force 100",
          color: "blue-text-gradient",
        },
        {
          name: "Vitesse 95 ",
          color: "green-text-gradient",
        },
        {
          name: "Résistance 98",
          color: "pink-text-gradient",
        },
      ],
      image: superman,
      source_code_link: "https://www.davidbovin.com/",
    },
    // {
    //   name: "Michael Jordan",
    //   description:
    //     "c'est est un joueur de basket-ball américain ayant évolué dans le championnat nord-américain professionnel de basket-ball",
    //   tags: [
    //     {
    //       name: "Agilité 95",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "Vitesse 90",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "Coordination 92",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: jordan,
    //   source_code_link: "https://www.davidbovin.com/",
    // },  

  
]


export { services, technologies, experiences, testimonials, projects , stars};