import { Motivation, FutureProjects } from '../lib/supabase';

interface FutureProjectsMotivationProps {
  motivations: Motivation[];
  futureProjects: FutureProjects[];
}

export default function FutureProjectsMotivation({ motivations, futureProjects }: Readonly<FutureProjectsMotivationProps>) {
  const defaultMotivations: Motivation[] = [
    {
      id: 'default-1',
      content:
        "Je suis motivé par la création d'applications utiles et accessibles, l'apprentissage continu des technologies web modernes et la collaboration au sein d'équipes pluridisciplinaires.",
      created_at: '',
      updated_at: '',
    },
  ];

  const defaultFutureProjects: FutureProjects[] = [
    {
      id: 'default-p1',
      title: 'Gestionnaire de stock pour restaurant',
      description: "Application pour gérer les stocks d'un restaurant : suivi des ingrédients, alertes de rupture, génération automatique de commandes fournisseurs et rapports de consommation.",
      long_description:
        "Le gestionnaire permettra d'entrer les recettes, définir des niveaux de stock minimal, suivre les dates de péremption et centraliser les commandes fournisseurs. Objectif : réduire le gaspillage et optimiser les coûts.",
      image_url: '',
      demo_url: '',
      github_url: '',
      technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind'],
      featured: false,
      order_index: 0,
      created_at: '',
    },
    {
      id: 'default-p2',
      title: 'Application pour coachs sportifs',
      description: "Outil dédié aux coachs sportifs pour gérer clients, plans d'entraînement, suivis de performance et paiements.",
      long_description:
        "Fonctionnalités prévues : profils clients, création et partage de programmes, suivi des progrès avec graphiques, calendrier de séances, messagerie et intégration paiement (Stripe). Conçue pour faciliter la relation coach-client.",
      image_url: '',
      demo_url: '',
      github_url: '',
      technologies: ['React', 'TypeScript', 'Supabase', 'Stripe'],
      featured: false,
      order_index: 1,
      created_at: '',
    },
  ];

  const shownMotivations = motivations && motivations.length > 0 ? motivations : defaultMotivations;
  const shownFutureProjects = futureProjects && futureProjects.length > 0 ? futureProjects : defaultFutureProjects;
  return (
    <section id="future-projects-motivation" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          Motivation et projets futurs
        </h2>

        {/* Motivations Section */}
        {shownMotivations.length > 0 && (
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-slate-900">Mes motivations</h3>
            <div className="space-y-6">
              {shownMotivations.map((motivation) => (
                <div key={motivation.id} className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                    {motivation.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Future Projects Section */}
        {shownFutureProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-slate-900">Projets futurs</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {shownFutureProjects.map((project) => (
                <div key={project.id} className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {project.image_url && (
                    <img src={project.image_url} alt={project.title} className="rounded-md mb-4 object-cover h-40 w-full" />
                  )}
                  <h4 className="text-xl font-bold mb-4 text-slate-900">{project.title}</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex gap-4">
                    {project.demo_url && (
                      <a href={project.demo_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Démo Live
                      </a>
                    )}
                    {project.github_url && (
                      <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
