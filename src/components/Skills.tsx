import type { ElementType } from 'react';
import { BrainCircuit, Code2, Palette, ServerCog, Smartphone } from 'lucide-react';
import type { Skill } from '../lib/portfolio';

interface SkillsProps {
  skills: Skill[];
}

const categoryIcons: Record<string, ElementType> = {
  Data: BrainCircuit,
  Development: Code2,
  Mobile: Smartphone,
  'Systems / Networks': ServerCog,
  Design: Palette,
};

function normalizeCategory(raw?: string) {
  if (!raw) return 'Development';
  const category = raw.toLowerCase();

  if (/\b(data|machine learning|analyse|sql|mysql|cnn|blip|streamlit|ia)\b/.test(category)) return 'Data';
  if (/\b(development|web|front|html|css|javascript|typescript|react|next|tailwind|wordpress|java|c\+\+|c\b)\b/.test(category)) return 'Development';
  if (/\b(kotlin|swift|mobile|android|ios)\b/.test(category)) return 'Mobile';
  if (/\b(system|systems|network|networks|linux|tcp|ip|ccna|firebase|supabase)\b/.test(category)) return 'Systems / Networks';
  if (/\b(figma|photoshop|illustrator|design|canva)\b/.test(category)) return 'Design';

  return 'Development';
}

export default function Skills({ skills }: SkillsProps) {
  const groupedSkills = skills.reduce<Record<string, Skill[]>>((accumulator, skill) => {
    const category = normalizeCategory(skill.category || skill.name);
    if (!accumulator[category]) accumulator[category] = [];
    accumulator[category].push(skill);
    return accumulator;
  }, {});

  const preferredOrder = ['Data', 'Development', 'Mobile', 'Systems / Networks', 'Design'];
  const orderedCategories = [
    ...preferredOrder.filter((category) => groupedSkills[category]),
    ...Object.keys(groupedSkills).filter((category) => !preferredOrder.includes(category)),
  ];

  return (
    <section id="skills" className="section-shell">
      <div className="section-intro">
        <span className="section-eyebrow">Competences</span>
        <h2 className="section-title">Des competences construites pour la Data Science et le developpement logiciel</h2>
        <p className="section-copy">
          Je developpe un socle solide en Python, SQL, analyse de donnees et machine learning, complete par des
          competences en developpement web, mobile et systemes pour concevoir des applications utiles de bout en bout.
        </p>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        {orderedCategories.map((category) => {
          const Icon = categoryIcons[category] || Code2;

          return (
            <article key={category} className="editorial-card">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[1.5rem] bg-[#f4dfd3] text-accent">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-semibold text-ink">{category}</h3>
                    <p className="mt-2 text-sm uppercase tracking-[0.18em] text-muted">
                      {groupedSkills[category].length} competences
                    </p>
                  </div>
                </div>
                {category === 'Data' ? <span className="pill-muted">Priorite</span> : <span className="pill-muted">Support</span>}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {groupedSkills[category].map((skill) => (
                  <div key={skill.id} className="rounded-[1.5rem] p-5 glass-card-soft">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-semibold text-ink">{skill.name}</span>
                      <span className="text-sm font-medium text-muted">{skill.level}%</span>
                    </div>
                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-900/10">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${skill.level}%`,
                          background: category === 'Data'
                            ? 'linear-gradient(90deg, #2f6b63 0%, #4da095 100%)'
                            : 'linear-gradient(90deg, var(--accent) 0%, var(--sage) 100%)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
