import React from 'react';
import { Code, Database, Wrench, Palette } from 'lucide-react';
import { Skill } from '../lib/supabase';

interface SkillsProps {
  skills: Skill[];
}

const categoryIcons: Record<string, React.ElementType> = {
  Web: Code,
  Programming: Code,
  Mobile: Wrench,
  Databases: Database,
  Systems: Database,
  Design: Palette,
};

// Normalisation pour n'utiliser que les catégories demandées
function normalizeCategory(raw?: string) {
  if (!raw) return 'Web';
  const c = raw.toLowerCase();
  if (/\b(front|web|html|css|javascript|react|next|tailwind|wordpress)\b/.test(c)) return 'Web';
  if (/\b(c\+\+|c\b|python|java|typescript|node|php)\b/.test(c)) return 'Programming';
  if (/\b(kotlin|swift|mobile|android|ios)\b/.test(c)) return 'Mobile';
  if (/\b(sql|mysql|firebase|supabase|database|databases)\b/.test(c)) return 'Databases';
  if (/\b(linux|tcp|ip|ccna|network|reseau|syst(e|è)me)\b/.test(c)) return 'Systems';
  if (/\b(figma|photoshop|illustrator|design|canva)\b/.test(c)) return 'Design';
  return 'Web';
}

export default function Skills({ skills }: SkillsProps) {
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = normalizeCategory(skill.category || skill.name);
    if (!acc[category]) acc[category] = [];
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const preferredOrder = [
    'Web',
    'Programming',
    'Mobile',
    'Databases',
    'Systems',
    'Design',
  ];

  const orderedCategories = [
    ...preferredOrder.filter((c) => groupedSkills[c]),
    ...Object.keys(groupedSkills).filter(
      (c) => !preferredOrder.includes(c)
    ),
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          Compétences et expertise
        </h2>

        {/* categories */}
        <div className="space-y-16">
          {orderedCategories.map((category) => {
            const Icon = categoryIcons[category] || Code;

            return (
              <div
                key={category}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                {/* header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">
                    {category}
                  </h3>
                </div>

                {/* skills grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupedSkills[category].map((skill) => (
                    <div
                      key={skill.id}
                      className="border border-slate-100 rounded-xl p-4 bg-slate-50"
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-gray-800">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                        <div
                          className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-700"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
