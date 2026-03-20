import Footer from '../components/Footer';
import Skills from '../components/Skills';
import type { Skill } from '../lib/portfolio';

interface SkillsPageProps {
  readonly skills: readonly Skill[];
}

export default function SkillsPage({ skills }: SkillsPageProps) {
  return (
    <main className="page-shell pt-20">
      <Skills skills={[...skills]} />
      <Footer />
    </main>
  );
}
