const data = {
  personal: {
    firstname: 'adel',
    lastname: 'sidi ahmed',
    title: 'etudiant en m1 informatique - alternance developpement logiciel et data',
    email: 'adelsidiahmed2020@gmail.com',
    phone: '0761535757',
    location: 'colombes 92700',
    drivinglicense: true,
    portfolio: 'https://adevtech.netlify.app/',
    github: 'https://github.com/adel113',
    linkedin: 'https://www.linkedin.com/in/adel-sidi-ahmed/'
  },

  education: [
    {
      degree: 'master 1 informatique et big data',
      school: 'universite paris 8',
      year: '2025-2026'
    },
    {
      degree: 'licence 3 informatique des systemes embarques',
      school: 'universite paris 8',
      year: '2024-2025'
    },
    {
      degree: 'licence 2 informatique',
      school: 'enigma school lille',
      year: '2022-2024'
    }
  ],

  experience: [
    {
      role: 'developpeur wordpress freelance',
      company: 'freelance',
      period: "12/2024 - aujourd'hui",
      tasks: [
        'traduction des besoins clients en solutions web sur mesure',
        'developpement et personnalisation de sites wordpress'
      ]
    },
    {
      role: 'developpeur web stage',
      company: "sister's lille",
      period: '05/2025 - 07/2025',
      tasks: [
        'optimisation et mise a jour de sites wordpress',
        "support technique et propositions d amelioration"
      ]
    },
    {
      role: 'developpeur front end stage',
      company: 'lou',
      period: '05/2024 - 07/2024',
      tasks: [
        'developpement de sites vitrines',
        'integration wordpress et bonnes pratiques web'
      ]
    },
    {
      role: 'developpeur web stage',
      company: 'arshman paris',
      period: '06/2023 - 08/2023',
      tasks: [
        'creation et refonte de sites web',
        'travail front end et back end'
      ]
    }
  ],

  projects: [
    {
      name: 'application de description d images',
      stack: ['python', 'cnn', 'blip', 'streamlit'],
      description: 'generation automatique de descriptions d images a partir de reseaux de neurones'
    },
    {
      name: 'generateur de factures pdf',
      stack: ['typescript', 'vite', 'tailwindcss', 'supabase'],
      description: 'application web permettant de creer des factures pdf avec une architecture maintenable'
    },
    {
      name: 'formationv2pro',
      stack: ['react', 'vite', 'tailwindcss', 'firebase'],
      description: 'plateforme de formation en ligne dynamique et responsive'
    },
    {
      name: 'fitnessapp',
      stack: ['kotlin', 'firebase', 'api temps reel'],
      description: 'application mobile pour les sportifs'
    },
    {
      name: "systeme d arme automatique simule",
      stack: ['python', 'ros', 'gazebo'],
      description: 'simulation d un systeme d arme automatique avec ros et gazebo developpe en python'
    },
    {
      name: 'application de prediction crypto',
      stack: ['python', 'machine learning', 'api crypto'],
      description: 'application de prediction des mouvements des cryptomonnaies'
    }
  ],

  skills: {
    web: ['html', 'css', 'javascript', 'react', 'nextjs', 'tailwindcss', 'wordpress'],
    programming: ['c', 'c++', 'python', 'java'],
    mobile: ['kotlin', 'swift'],
    databases: ['sql', 'firebase', 'mysql'],
    systems: ['linux', 'tcp ip', 'ccna 1 2 3'],
    design: ['figma', 'photoshop', 'illustrator', 'canva']
  },

  motivations: [
    {
      id: 'mot-1',
      content:
        "Je suis motivé par la création d'applications utiles et accessibles, l'apprentissage continu des technologies web modernes et la collaboration au sein d'équipes pluridisciplinaires.",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }
  ],

  futureProjects: [
    {
      id: 'fp-1',
      title: 'Gestionnaire de stock pour restaurant',
      description:
        "Application pour gérer les stocks d'un restaurant : suivi des ingrédients, alertes de rupture, génération automatique de commandes fournisseurs et rapports de consommation.",
      long_description:
        "Le gestionnaire permettra d'entrer les recettes, définir des niveaux de stock minimal, suivre les dates de péremption et centraliser les commandes fournisseurs. Objectif : réduire le gaspillage et optimiser les coûts.",
      image_url: '',
      demo_url: '',
      github_url: '',
      technologies: ['React', 'TypeScript', 'Tailwind'],
      featured: false,
      order_index: 0,
      created_at: new Date().toISOString(),
    },
    {
      id: 'fp-2',
      title: 'Application pour coachs sportifs',
      description: "Outil dédié aux coachs sportifs pour gérer clients, plans d'entraînement, suivis de performance et paiements.",
      long_description:
        "Fonctionnalités prévues : profils clients, création et partage de programmes, suivi des progrès avec graphiques, calendrier de séances, messagerie et intégration paiement (Stripe). Conçue pour faciliter la relation coach-client.",
      image_url: '',
      demo_url: '',
      github_url: '',
      technologies: ['React', 'TypeScript', 'Stripe'],
      featured: false,
      order_index: 1,
      created_at: new Date().toISOString(),
    }
  ],

  interests: [
    'veille technologique',
    'developpement web',
    'vo vietnam triple champion d algerie'
  ]
};

export default data;
