const data = {
  personal: {
    firstname: 'Adel',
    lastname: 'Sidi Ahmed',
    title:
      'Assistant Chef de Projet SI en alternance • Data • IA • Automatisation | M2 Conduite de Projets Informatiques',
    bio:
      "Étudiant en Master 2 Conduite de Projets Informatiques, j’oriente aujourd’hui mon parcours vers la gestion de projets SI tout en conservant une forte dimension technique. Grâce à mes expériences en développement web, data et intelligence artificielle, je peux comprendre les enjeux techniques d’un projet, travailler sur les besoins métier et proposer des solutions concrètes. Je m’intéresse particulièrement à l’automatisation des processus et à l’utilisation de l’IA pour améliorer l’efficacité et réduire les tâches répétitives.",
    email: 'adelsidiahmed2020@gmail.com',
    phone: '0761535757',
    location: 'Colombes 92700',
    avatar_url: '/avatar.jpg',
    resume_url: '/adel-sidi-ahmed-cv.pdf',
    drivinglicense: true,
    portfolio: 'https://adevtech.netlify.app/',
    github: 'https://github.com/Adel113',
    linkedin: 'https://www.linkedin.com/in/adel-sidi-ahmed/',
  },

  education: [
    {
      degree: 'Master 2 Conduite de Projets Informatiques',
      school: 'Université Paris 8',
      year: '2026-2027',
    },
    {
      degree: 'Master 1 Informatique & Big Data',
      school: 'Université Paris 8',
      year: '2025-2026',
    },
    {
      degree: 'Licence 3 Informatique des Systèmes Embarqués',
      school: 'Université Paris 8',
      year: '2024-2025',
    },
    {
      degree: 'Licence 2 Informatique',
      school: 'Enigma School Lille',
      year: '2022-2024',
    },
  ],

  experience: [
    {
      role: 'Technicien Data Scientist - Stage',
      company: 'TREALIS',
      period: '04/2026 - 07/2026',
      tasks: [
        "Traitement et labellisation de données d'accélérométrie et d'images issues de capteurs ferroviaires.",
        'Développement de pipelines de traitement de données en Python.',
        "Conception d'algorithmes de détection automatique de défauts.",
        "Participation au développement de solutions d'intelligence artificielle appliquées au domaine ferroviaire.",
      ],
    },
    {
      role: 'Développeur Web Freelance',
      company: 'Freelance',
      period: "12/2024 - Aujourd'hui",
      tasks: [
        'Conception de sites web sur mesure.',
        'Développement front-end et back-end.',
        'Personnalisation de sites WordPress.',
        'Maintenance, optimisation et déploiement.',
      ],
    },
    {
      role: 'Développeur Web - Stage',
      company: "Sister's Lille",
      period: '05/2025 - 07/2025',
      tasks: [
        'Optimisation et évolution de sites web.',
        'Maintenance corrective et évolutive.',
        'Support technique.',
      ],
    },
    {
      role: 'Développeur Front-End - Stage',
      company: 'LOU',
      period: '05/2024 - 07/2024',
      tasks: [
        'Développement de sites vitrines.',
        'Intégration WordPress.',
        'Optimisation des interfaces utilisateurs.',
      ],
    },
    {
      role: 'Développeur Web - Stage',
      company: 'Arshman Paris',
      period: '06/2023 - 08/2023',
      tasks: [
        'Création et refonte de sites web.',
        'Développement front-end et back-end.',
      ],
    },
  ],

  projects: [
    {
      name: 'Agent IA Workflow Automatisé',
      category: 'IA & Automatisation',
      stack: ['Node.js', 'IA', 'Gmail API', 'PDF'],
      description:
        "Application d'automatisation documentaire intégrant l'extraction intelligente d'informations, la validation métier et la génération automatique de documents.",
      objective:
        'Créer un agent IA capable de traiter automatiquement des documents et de réduire les tâches répétitives.',
    },

    {
      name: 'Générateur de Factures PDF',
      category: 'Full Stack',
      stack: ['TypeScript', 'Vite', 'TailwindCSS', 'Supabase'],
      description:
        'Application web permettant de créer, gérer et exporter des factures professionnelles.',
      objective:
        'Développer une application métier robuste avec une architecture moderne.',
    },

    {
      name: "Application de Description d'Images",
      category: 'Vision par ordinateur',
      stack: ['Python', 'CNN', 'BLIP', 'Streamlit'],
      description:
        "Application capable d'analyser une image et de générer automatiquement une description textuelle grâce à l'intelligence artificielle.",
      objective:
        'Explorer les modèles de vision par ordinateur et leur intégration dans une application.',
    },

    {
      name: 'FormationV2Pro',
      category: 'Application Web',
      stack: ['React', 'Firebase', 'TailwindCSS'],
      description:
        "Plateforme d'apprentissage en ligne moderne avec authentification et gestion de contenu.",
      objective:
        "Créer une plateforme performante orientée expérience utilisateur.",
    },

    {
      name: 'FitnessApp',
      category: 'Application Mobile',
      stack: ['Kotlin', 'Firebase'],
      description:
        "Application mobile permettant le suivi d'activités sportives et de données en temps réel.",
      objective:
        'Concevoir une application mobile intuitive pour les sportifs.',
    },

    {
      name: 'Application de Prédiction Crypto',
      category: 'Machine Learning',
      stack: ['Python', 'Machine Learning'],
      description:
        'Analyse de données financières et prédiction de tendances du marché des cryptomonnaies.',
      objective:
        "Comparer différents modèles de prédiction sur des données réelles.",
    },

    {
      name: 'Simulation de Système Automatisé',
      category: 'Robotique',
      stack: ['Python', 'ROS', 'Gazebo'],
      description:
        "Simulation d'un système automatisé dans un environnement ROS/Gazebo.",
      objective:
        "Tester le comportement d'un système complexe dans un environnement simulé.",
    },
  ],

  skills: {
    data: [
      'python',
      'sql',
      'mysql',
      'machine learning',
      'analyse de donnees',
      'cnn',
      'blip',
      'streamlit',
    ],
    development: [
      'javascript',
      'typescript',
      'react',
      'nextjs',
      'tailwindcss',
      'wordpress',
      'java',
      'c',
      'c++',
    ],
    mobile: [
      'kotlin',
      'swift',
    ],
    systems: [
      'linux',
      'tcp ip',
      'ccna 1 2 3',
      'firebase',
      'supabase',
    ],
    design: [
      'figma',
      'photoshop',
      'illustrator',
      'canva',
    ],
  },

  motivations: [
    {
      id: 'mot-1',
      content:
        "Je souhaite évoluer vers la conduite de projets SI en m’appuyant sur mon profil technique. J’apprécie comprendre les besoins métier, participer au suivi des projets et proposer des solutions concrètes. Je m’intéresse particulièrement à l’automatisation, à l’intelligence artificielle et à l’amélioration des processus afin de réduire les tâches répétitives et gagner en efficacité.",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ],

  futureProjects: [
    {
      id: 'fp-1',
      title: 'Gestionnaire de Stock Intelligent',
      description:
        "Application Full Stack permettant de gérer les stocks d'un restaurant.",
      long_description:
        "Gestion des ingrédients, alertes automatiques, suivi des dates de péremption, tableaux de bord et recommandations grâce à l'IA.",
      image_url: '',
      demo_url: '',
      github_url: '',
      technologies: ['React', 'TypeScript', 'Node.js', 'Supabase'],
      featured: false,
      order_index: 0,
      created_at: new Date().toISOString(),
    },
    {
      id: 'fp-2',
      title: 'Plateforme SaaS pour Coachs Sportifs',
      description:
        'Application de gestion complète destinée aux coachs sportifs.',
      long_description:
        'Gestion des clients, programmes, paiements, statistiques, messagerie et intégration de fonctionnalités IA.',
      image_url: '',
      demo_url: '',
      github_url: '',
      technologies: ['React', 'Node.js', 'Stripe', 'IA'],
      featured: false,
      order_index: 1,
      created_at: new Date().toISOString(),
    },
  ],

  interests: [
    'Gestion de Projet SI',
    'Intelligence Artificielle',
    'Automatisation',
    'Data',
    'Développement Full Stack',
    'Veille technologique',
    "Vo Vietnam (Triple champion d'Algérie)",
  ],
};

export default data;
