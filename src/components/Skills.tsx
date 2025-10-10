import { Code, Database, Wrench, Palette } from 'lucide-react';
import { Skill } from '../lib/supabase';

interface SkillsProps {
  skills: Skill[];
}

const categoryIcons: Record<string, React.ElementType> = {
  Frontend: Code,
  Backend: Database,
  Tools: Wrench,
  Design: Palette,
};

export default function Skills({ skills }: SkillsProps) {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          Compétences & Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => {
            const Icon = categoryIcons[category] || Code;
            return (
              <div
                key={category}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{category}</h3>
                </div>
                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.id}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
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
