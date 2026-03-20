import { BrainCircuit, Briefcase, Code2 } from 'lucide-react';

const cards = [
  {
    icon: BrainCircuit,
    title: 'Data Science',
    copy: 'Preparation, analyse et valorisation de donnees avec Python, SQL et des projets appliques au machine learning.',
  },
  {
    icon: Code2,
    title: 'Developpement logiciel',
    copy: 'Conception d applications web et mobiles avec une attention a la structure, la lisibilite et la maintenabilite.',
  },
  {
    icon: Briefcase,
    title: 'Objectif alternance',
    copy: "Rejoindre une equipe ou je peux apprendre vite, contribuer sur des projets concrets et faire le lien entre data et logiciel.",
  },
];

export default function RecruiterFocus() {
  return (
    <section className="section-shell pt-0">
      <div className="section-intro">
        <span className="section-eyebrow">Positionnement</span>
        <h2 className="section-title">Ce que je peux apporter en alternance</h2>
        <p className="section-copy">
          J'avance avec un profil hybride : comprendre la donnee, experimenter des approches de machine learning et
          construire des applications utiles avec une base solide en developpement logiciel.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {cards.map(({ icon: Icon, title, copy }) => (
          <article key={title} className="editorial-card">
            <div className="flex h-14 w-14 items-center justify-center rounded-[1.5rem] bg-[#1f2430] text-white">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-ink">{title}</h3>
            <p className="mt-4 text-sm leading-7 text-muted">{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
