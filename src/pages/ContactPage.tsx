import Contact from '../components/Contact';
import Footer from '../components/Footer';
import type { Profile } from '../lib/portfolio';

interface ContactPageProps {
  readonly profile: Profile | null;
}

export default function ContactPage({ profile }: ContactPageProps) {
  return (
    <main className="page-shell pt-20">
      <Contact profile={profile} />
      <Footer />
    </main>
  );
}
