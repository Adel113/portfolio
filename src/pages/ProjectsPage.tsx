import Footer from '../components/Footer';
import Projects from '../components/Projects';
import type { Project } from '../lib/portfolio';

interface ProjectsPageProps {
  readonly projects: readonly Project[];
}

export default function ProjectsPage({ projects }: ProjectsPageProps) {
  return (
    <main className="page-shell pt-20">
      <Projects projects={[...projects]} />
      <Footer />
    </main>
  );
}
