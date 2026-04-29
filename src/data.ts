const data = {
  personal: {
    firstname: 'Adel',
    lastname: 'Sidi Ahmed',
    title:
      "Data Engineer / ML en formation | Python · Data · Détection de défauts | Alternance sept. 2026",
    bio:
      "Étudiant en informatique spécialisé en data et machine learning, je développe des compétences en analyse de données et en conception de solutions techniques, avec un fort intérêt pour l’intelligence artificielle. Mon objectif est de rejoindre une équipe pour contribuer à des projets concrets à fort impact.",
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
      degree: 'Master 1 Informatique et Big Data',
      school: 'Universite Paris 8',
      year: '2025-2026',
    },
    {
      degree: 'Licence 3 Informatique des Systemes Embarques',
      school: 'Universite Paris 8',
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
        'Traitement et labellisation de données d’accélérométrie et d’images issues de capteurs ferroviaires, avec extraction et préparation des données',
        'Conception et mise en place d’un pipeline de traitement de données en Python pour la détection de défauts',
      ],
    },
    {
      role: 'Developpeur Web Freelance',
      company: 'Freelance',
      period: '12/2024 - aujourd hui',
      tasks: [
        'traduction des besoins clients en solutions web sur mesure',
        'developpement et personnalisation de sites web et wordpress',
        'mise en ligne, maintenance et amelioration continue',
      ],
    },
    {
      role: 'Developpeur Web - Stage',
      company: "Sister's Lille",
      period: '05/2025 - 07/2025',
      tasks: [
        'optimisation et mise a jour de sites web',
        'support technique et propositions d amelioration',
        'maintenance corrective et evolutive',
      ],
    },
    {
      role: 'Developpeur Front-End - Stage',
      company: 'LOU',
      period: '05/2024 - 07/2024',
      tasks: [
        'developpement de sites vitrines',
        'integration wordpress et respect des bonnes pratiques web',
      ],
    },
    {
      role: 'Developpeur Web - Stage',
      company: 'Arshman Paris',
      period: '06/2023 - 08/2023',
      tasks: [
        'creation et refonte de sites web',
        'travail sur le front end et le back end',
      ],
    },
  ],

  projects: [
    {
      name: 'Agent IA Workflow Automatise',
      category: 'Data / IA',
      stack: ['node.js', 'extraction IA', 'gmail', 'generation PDF'],
      description:
        "application d'automatisation documentaire avec extraction intelligente d'informations, validation metier, integration Gmail et generation de PDF.",
      objective:
        "concevoir un workflow automatise capable de traiter des documents, fiabiliser les etapes de validation et accelerer la production de livrables metier.",
    },
    {
      name: "Application de description d'images",
      category: 'Data / IA',
      stack: ['python', 'cnn', 'blip', 'streamlit'],
      description:
        "application de vision par ordinateur capable d'analyser une image et de generer automatiquement une description textuelle.",
      objective:
        "tester un pipeline d'IA applique a l'analyse d'image et comprendre l'integration d'un modele de deep learning dans une interface exploitable.",
    },
    {
      name: 'Generateur de factures PDF',
      category: 'Developpement logiciel / web / mobile',
      stack: ['typescript', 'vite', 'tailwindcss', 'supabase'],
      description:
        'application web permettant de creer, structurer et exporter des factures PDF avec une interface claire et maintenable.',
      objective:
        'concevoir un outil metier fiable, avec une logique de generation de documents et une architecture front-end propre.',
    },
    {
      name: 'FormationV2Pro',
      category: 'Developpement logiciel / web / mobile',
      stack: ['react', 'vite', 'tailwindcss', 'firebase'],
      description:
        'plateforme de formation en ligne dynamique, responsive et connectee a Firebase.',
      objective:
        "developper une application web orientee utilisateur, avec gestion de contenu, navigation fluide et architecture reactive.",
    },
    {
      name: 'FitnessApp',
      category: 'Developpement logiciel / web / mobile',
      stack: ['kotlin', 'firebase', 'api temps reel'],
      description:
        'application mobile destinee aux sportifs pour suivre leurs activites et exploiter des donnees en temps reel.',
      objective:
        'creer une experience mobile utile, connectee a des services temps reel et orientee suivi de performance.',
    },
    {
      name: 'Simulation de systeme automatise',
      category: 'Developpement logiciel / web / mobile',
      stack: ['python', 'ros', 'gazebo'],
      description:
        "simulation sous ROS et Gazebo d'un systeme automatise developpe en Python.",
      objective:
        'modeliser et tester le comportement d un systeme complexe dans un environnement de simulation technique.',
    },
    {
      name: 'Application de prediction crypto',
      category: 'Data / IA',
      stack: ['python', 'machine learning', 'api crypto'],
      description:
        'application de collecte et d analyse de donnees crypto avec prediction de tendance via machine learning.',
      objective:
        "explorer l'utilisation de donnees de marche pour construire et comparer des modeles de prediction applicables.",
    },
  ],

  skills: {
    data: ['python', 'sql', 'mysql', 'machine learning', 'analyse de donnees', 'cnn', 'blip', 'streamlit'],
    development: ['javascript', 'typescript', 'react', 'nextjs', 'tailwindcss', 'wordpress', 'java', 'c', 'c++'],
    mobile: ['kotlin', 'swift'],
    systems: ['linux', 'tcp ip', 'ccna 1 2 3', 'firebase', 'supabase'],
    design: ['figma', 'photoshop', 'illustrator', 'canva'],
  },

  motivations: [
    {
      id: 'mot-1',
      content:
        'je suis motive par la creation d applications utiles, l exploitation intelligente des donnees, l apprentissage continu et la collaboration au sein d equipes pluridisciplinaires.',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ],

  futureProjects: [
    {
      id: 'fp-1',
      title: 'gestionnaire de stock pour restaurant',
      description:
        'application pour gerer les stocks d un restaurant avec suivi des ingredients, alertes de rupture et generation de commandes fournisseurs.',
      long_description:
        'ce projet permettra de suivre les niveaux de stock, les dates de peremption, les recettes et les commandes fournisseurs afin de reduire le gaspillage et d optimiser les couts.',
      image_url: '',
      demo_url: '',
      github_url: '',
      technologies: ['react', 'typescript', 'tailwind'],
      featured: false,
      order_index: 0,
      created_at: new Date().toISOString(),
    },
    {
      id: 'fp-2',
      title: 'application pour coachs sportifs',
      description:
        'outil pour aider les coachs sportifs a gerer leurs clients, programmes, suivis de performance et paiements.',
      long_description:
        'l application integrera des profils clients, la creation de programmes, le suivi des progres, un calendrier de seances, une messagerie et un module de paiement pour simplifier la gestion quotidienne.',
      image_url: '',
      demo_url: '',
      github_url: '',
      technologies: ['react', 'typescript', 'stripe'],
      featured: false,
      order_index: 1,
      created_at: new Date().toISOString(),
    },
  ],

  interests: [
    'veille technologique',
    'data et intelligence artificielle',
    'developpement web et logiciel',
    'vo vietnam triple champion d algerie',
  ],
};

export default data;
