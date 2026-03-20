import { Lightbulb, Rocket } from 'lucide-react';
import Footer from '../components/Footer';
import type { FutureProjects, Motivation } from '../lib/portfolio';

interface FutureProjectsMotivationPageProps {
  readonly motivations: Motivation[];
  readonly futureProjects: FutureProjects[];
}

export default function FutureProjectsMotivationPage({
  motivations,
  futureProjects,
}: FutureProjectsMotivationPageProps) {
  const defaultMotivations: Motivation[] = [
    {
      id: 'default-1',
      content:
        "Je suis motive par la creation d'applications utiles, accessibles et evolutives, avec une vraie envie de progresser sur le developpement web moderne et la collaboration en equipe.",
      created_at: '',
      updated_at: '',
    },
  ];

  const defaultFutureProjects: FutureProjects[] = [
    {
      id: 'default-p1',
      title: 'Gestionnaire de stock pour restaurant',
      description:
        "Application pour gerer les stocks d'un restaurant : suivi des ingredients, alertes, commandes fournisseurs et rapports de consommation.",
      long_description:
        "Le produit vise a reduire le gaspillage, securiser les niveaux de stock et centraliser les flux quotidiens dans une interface simple a utiliser.",
      image_url: '',
      demo_url: '',
      github_url: '',
      technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
      featured: false,
      order_index: 0,
      created_at: '',
    },
    {
      id: 'default-p2',
      title: 'Application pour coachs sportifs',
      description:
        "Outil dedie aux coachs sportifs pour gerer clients, programmes, suivis de performance, calendrier et paiements.",
      long_description:
        'Un projet pense comme une plateforme complete, au croisement de la planification, du suivi et de la relation client.',
      image_url: '',
      demo_url: '',
      github_url: '',
      technologies: ['React', 'TypeScript', 'Supabase', 'Stripe'],
      featured: false,
      order_index: 1,
      created_at: '',
    },
  ];

  const shownMotivations = motivations.length > 0 ? motivations : defaultMotivations;
  const shownFutureProjects = futureProjects.length > 0 ? futureProjects : defaultFutureProjects;

  return (
    <main className="page-shell pt-20">
      <section id="future-projects-motivation" className="section-shell">
        <div className="section-intro">
          <span className="section-eyebrow">Vision</span>
          <h2 className="section-title">Ce qui me motive aujourd'hui et ce que je veux construire demain</h2>
          <p className="section-copy">
            Au-dela des projets deja realises, cette section raconte l'intention : comprendre les usages, concevoir des
            outils utiles et faire grandir la qualite d'execution.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <section className="editorial-card bg-mesh">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-[1.5rem] bg-[#f4dfd3] text-accent">
                <Lightbulb className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-3xl font-semibold text-ink">Motivation</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-muted">Intentions, energie, direction</p>
              </div>
            </div>

            <div className="mt-8 space-y-5">
              {shownMotivations.map((motivation) => (
                <div key={motivation.id} className="rounded-[1.75rem] p-6 glass-card-soft">
                  <p className="text-base leading-8 text-muted">{motivation.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="editorial-card">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-[1.5rem] bg-[#dcebe8] text-[var(--sage)]">
                <Rocket className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-3xl font-semibold text-ink">Projets futurs</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-muted">Applications utiles a fort potentiel</p>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {shownFutureProjects.map((project) => (
                <article key={project.id} className="rounded-[1.75rem] p-6 glass-card-soft">
                  <span className="pill-muted">Concept</span>
                  <h4 className="mt-4 text-2xl font-semibold text-ink">{project.title}</h4>
                  <p className="mt-4 text-sm leading-7 text-muted">{project.description}</p>
                  {project.long_description && <p className="mt-4 text-sm leading-7 text-muted">{project.long_description}</p>}

                  {project.technologies.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span key={technology} className="pill">
                          {technology}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
