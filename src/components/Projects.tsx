import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../lib/supabase';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return a.order_index - b.order_index;
  });

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          Projets Mis en Avant
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              {project.image_url ? (
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">
                    {project.title.substring(0, 2).toUpperCase()}
                  </span>
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col">
                {project.featured && (
                  <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full mb-3 w-fit">
                    Mis en Avant
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-3 text-slate-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.demo_url && (
                    <a
                      href={project.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Démo Live
                    </a>
                  )}
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-700 font-medium transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code Source
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
