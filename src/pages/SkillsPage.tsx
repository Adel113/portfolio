import Skills from '../components/Skills';
import Footer from '../components/Footer';
import { Skill } from '../lib/supabase';

interface SkillsPageProps {
  readonly skills: readonly Skill[];
}

export default function SkillsPage({ skills }: SkillsPageProps) {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Skills skills={[...skills]} />
      <Footer />
    </div>
  );
}
