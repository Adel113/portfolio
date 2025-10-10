import { Motivation, FutureProjects } from '../lib/supabase';

interface FutureProjectsMotivationProps {
  motivations: Motivation[];
  futureProjects: FutureProjects[];
}

export default function FutureProjectsMotivation({ motivations, futureProjects }: Readonly<FutureProjectsMotivationProps>) {
  return (
    <section id="future-projects-motivation" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          Motivation & Projets Futurs
        </h2>

        {/* Motivations Section */}
        {motivations.length > 0 && (
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-slate-900">Motivation</h3>
            <div className="space-y-6">
              {motivations.map((motivation) => (
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
        {futureProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-slate-900">Projets Futurs</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {futureProjects.map((project) => (
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
