import Projects from '../components/Projects';
import Footer from '../components/Footer';
import { Project } from '../lib/supabase';

interface ProjectsPageProps {
  readonly projects: readonly Project[];
}

export default function ProjectsPage({ projects }: ProjectsPageProps) {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Projects projects={[...projects]} />
      <Footer />
    </div>
  );
}
