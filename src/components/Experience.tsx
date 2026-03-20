import { Briefcase, Calendar, GraduationCap } from 'lucide-react';
import type { Education, Experience as ExperienceType } from '../lib/portfolio';

interface ExperienceProps {
  readonly experience: readonly ExperienceType[];
  readonly education: readonly Education[];
}

function formatDate(date: string | null) {
  if (!date) return 'Present';
  return new Date(date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'short',
  });
}

function descriptionToItems(description: string) {
  return description
    .split('\n')
    .map((item) => item.trim())
    .filter(Boolean);
}

export default function Experience({ experience, education }: ExperienceProps) {
  const sortedExperience = [...experience].sort((a, b) => a.order_index - b.order_index);

  const sortedEducation = [...education].sort((a, b) => {
    if (a.is_current !== b.is_current) return a.is_current ? -1 : 1;
    return new Date(b.start_date).getTime() - new Date(a.start_date).getTime();
  });

  return (
    <section id="experience" className="section-shell">
      <div className="section-intro">
        <span className="section-eyebrow">Parcours</span>
        <h2 className="section-title">Experiences terrain et progression academique</h2>
        <p className="section-copy">
          Un parcours construit entre stages, projets et formation, avec une progression constante vers des
          environnements web plus complets et plus exigeants.
        </p>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <section className="editorial-card h-full">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-[1.5rem] bg-[#f4dfd3] text-accent">
              <Briefcase className="h-7 w-7" />
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-ink">Experience professionnelle</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-muted">Stages, missions, freelance</p>
            </div>
          </div>

          <div className="relative mt-10 space-y-8 before:absolute before:bottom-2 before:left-[0.55rem] before:top-2 before:w-px before:bg-slate-900/10">
            {sortedExperience.map((item) => (
              <article key={item.id} className="relative pl-8">
                <span className="absolute left-0 top-2 h-5 w-5 rounded-full border-4 border-[#f7efe7] bg-[var(--accent)]" />
                <div className="rounded-[1.5rem] p-6 glass-card-soft">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h4 className="text-2xl font-semibold text-ink">{item.position}</h4>
                      <p className="mt-2 text-base font-medium text-accent">{item.company}</p>
                    </div>
                    {item.is_current && <span className="pill-muted">Actuel</span>}
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-sm text-muted">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {formatDate(item.start_date)} - {formatDate(item.end_date)}
                    </span>
                  </div>

                  {item.description && (
                    <ul className="mt-5 space-y-3 text-sm leading-7 text-muted">
                      {descriptionToItems(item.description).map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="editorial-card h-full">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-[1.5rem] bg-[#dcebe8] text-[var(--sage)]">
              <GraduationCap className="h-7 w-7" />
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-ink">Formation</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-muted">Construire les bases et monter en niveau</p>
            </div>
          </div>

          <div className="relative mt-10 space-y-8 before:absolute before:bottom-2 before:left-[0.55rem] before:top-2 before:w-px before:bg-slate-900/10">
            {sortedEducation.map((item) => (
              <article key={item.id} className="relative pl-8">
                <span className="absolute left-0 top-2 h-5 w-5 rounded-full border-4 border-[#f7efe7] bg-[var(--sage)]" />
                <div className="rounded-[1.5rem] p-6 glass-card-soft">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h4 className="text-2xl font-semibold text-ink">{item.degree}</h4>
                      <p className="mt-2 text-base font-medium text-[var(--sage)]">{item.institution}</p>
                    </div>
                    {item.is_current && <span className="pill-muted">En cours</span>}
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-sm text-muted">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {formatDate(item.start_date)} - {formatDate(item.end_date)}
                    </span>
                  </div>

                  {item.description && <p className="mt-5 text-sm leading-7 text-muted">{item.description}</p>}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
