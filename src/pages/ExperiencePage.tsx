import Experience from '../components/Experience';
import Footer from '../components/Footer';
import { Experience as ExperienceType, Education as EducationType } from '../lib/supabase';

interface ExperiencePageProps {
  experience: ExperienceType[];
  education: EducationType[];
}

export default function ExperiencePage({ experience, education }: ExperiencePageProps) {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Experience experience={experience} education={education} />
      <Footer />
    </div>
  );
}
