import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { Experience as ExperienceType, Education } from '../lib/supabase';

interface ExperienceProps {
  readonly experience: readonly ExperienceType[];
  readonly education: readonly Education[];
}

export default function Experience({ experience, education }: ExperienceProps) {
  const sortedExperience = [...experience].sort((a, b) => {
    if (a.is_current !== b.is_current) return a.is_current ? -1 : 1;
    return new Date(b.start_date).getTime() - new Date(a.start_date).getTime();
  });

  const sortedEducation = [...education].sort((a, b) => {
    if (a.is_current !== b.is_current) return a.is_current ? -1 : 1;
    return new Date(b.start_date).getTime() - new Date(a.start_date).getTime();
  });

  const formatDate = (date: string | null) => {
    if (!date) return 'Présent';
    return new Date(date).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'short'
    });
  };

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          Expérience & Éducation
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Expérience Professionnelle</h3>
              </div>
            <div className="space-y-6">
              {sortedExperience.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl font-bold text-slate-900">{exp.position}</h4>
                    {exp.is_current && (
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                        Actuel
                      </span>
                    )}
                  </div>
                  <p className="text-blue-600 font-semibold mb-2">{exp.company}</p>
                  {exp.location && (
                    <p className="text-gray-500 text-sm mb-3">{exp.location}</p>
                  )}
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {formatDate(exp.start_date)} - {formatDate(exp.end_date)}
                    </span>
                  </div>
                  {exp.description && (
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-purple-100 rounded-lg">
                <GraduationCap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">Éducation</h3>
            </div>
            <div className="space-y-6">
              {sortedEducation.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl font-bold text-slate-900">{edu.degree}</h4>
                  {edu.is_current && (
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      Actuel
                    </span>
                  )}
                  </div>
                  <p className="text-purple-600 font-semibold mb-2">{edu.institution}</p>
                  <p className="text-gray-600 mb-2">{edu.field}</p>
                  {edu.location && (
                    <p className="text-gray-500 text-sm mb-3">{edu.location}</p>
                  )}
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {formatDate(edu.start_date)} - {formatDate(edu.end_date)}
                    </span>
                  </div>
                  {edu.description && (
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
