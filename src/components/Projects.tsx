import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '../lib/portfolio';

interface ProjectsProps {
  projects: Project[];
}

const categoryOrder = ['Data / IA', 'Developpement logiciel / web / mobile'];

const categoryCopy: Record<string, string> = {
  'Data / IA': 'Projets axes analyse de donnees, machine learning, vision par ordinateur et experimentation.',
  'Developpement logiciel / web / mobile':
    'Applications et outils construits avec une logique produit, architecture claire et execution technique.',
};

export default function Projects({ projects }: ProjectsProps) {
  const groupedProjects = projects.reduce<Record<string, Project[]>>((accumulator, project) => {
    if (!accumulator[project.category]) accumulator[project.category] = [];
    accumulator[project.category].push(project);
    return accumulator;
  }, {});

  const orderedCategories = [
    ...categoryOrder.filter((category) => groupedProjects[category]?.length),
    ...Object.keys(groupedProjects).filter((category) => !categoryOrder.includes(category)),
  ];

  return (
    <section id="projects" className="section-shell">
      <div className="section-intro">
        <span className="section-eyebrow">Projets</span>
        <h2 className="section-title">Des projets qui prouvent ma capacite a travailler sur la Data et le logiciel</h2>
        <p className="section-copy">
          Je mets d abord en avant les projets Data / IA pour montrer mon interet pour l analyse de donnees, le machine
          learning et l experimentation, puis les projets logiciels pour illustrer ma capacite a concevoir des
          applications web, mobiles et des outils utiles.
        </p>
      </div>

      <div className="space-y-16">
        {orderedCategories.map((category) => (
          <section key={category}>
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="pill-muted">{category === 'Data / IA' ? 'Priorite recruteur' : 'Complement logiciel'}</span>
                <h3 className="mt-4 text-3xl font-semibold text-ink">{category}</h3>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-muted">{categoryCopy[category] ?? ''}</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {[...groupedProjects[category]].sort((a, b) => a.order_index - b.order_index).map((project) => (
                <article key={project.id} className="editorial-card flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="pill-muted">{project.category}</span>
                      <h4 className="mt-4 text-3xl font-semibold text-ink">{project.title}</h4>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-[#1f2430] text-lg font-semibold text-white">
                      {project.title.slice(0, 2).toUpperCase()}
                    </div>
                  </div>

                  <div className="mt-6 space-y-4 text-sm leading-7 text-muted">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Description</p>
                      <p className="mt-2">{project.description}</p>
                    </div>

                    <div className="rounded-[1.5rem] border border-slate-900/10 bg-white/60 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Objectif du projet</p>
                      <p className="mt-2">{project.objective}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span key={technology} className="pill">
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    {project.demo_url && (
                      <a
                        href={project.demo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-primary"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Demo live
                      </a>
                    )}

                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-secondary"
                      >
                        <Github className="h-4 w-4" />
                        Code source
                      </a>
                    )}

                    {!project.demo_url && !project.github_url && <span className="pill-muted">Code ou demo sur demande</span>}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
