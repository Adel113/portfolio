import Experience from '../components/Experience';
import Footer from '../components/Footer';
import type { Education as EducationType, Experience as ExperienceType } from '../lib/portfolio';

interface ExperiencePageProps {
  readonly experience: ExperienceType[];
  readonly education: EducationType[];
}

export default function ExperiencePage({ experience, education }: ExperiencePageProps) {
  return (
    <main className="page-shell pt-20">
      <Experience experience={experience} education={education} />
      <Footer />
    </main>
  );
}
