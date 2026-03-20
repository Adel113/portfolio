import Footer from '../components/Footer';
import Hero from '../components/Hero';
import RecruiterFocus from '../components/RecruiterFocus';
import type { Profile } from '../lib/portfolio';

interface HomePageProps {
  readonly profile: Profile | null;
  readonly projectCount: number;
  readonly skillCount: number;
  readonly experienceCount: number;
}

export default function HomePage({ profile, projectCount, skillCount, experienceCount }: HomePageProps) {
  return (
    <main className="page-shell">
      <Hero
        profile={profile}
        projectCount={projectCount}
        skillCount={skillCount}
        experienceCount={experienceCount}
      />
      <RecruiterFocus />
      <Footer />
    </main>
  );
}
