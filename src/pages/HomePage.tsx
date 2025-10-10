import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { Profile } from '../lib/supabase';

interface HomePageProps {
  readonly profile: Profile | null;
}

export default function HomePage({ profile }: HomePageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Hero profile={profile} />
      <Footer />
    </div>
  );
}
