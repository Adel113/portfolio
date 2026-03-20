import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import data from './data';
import type {
  Education as EducationType,
  Experience as ExperienceType,
  FutureProjects,
  Motivation,
  Profile,
  Project,
  Skill,
} from './lib/portfolio';
import ContactPage from './pages/ContactPage';
import ExperiencePage from './pages/ExperiencePage';
import FutureProjectsMotivationPage from './pages/FutureProjectsMotivationPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function App() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [experience, setExperience] = useState<ExperienceType[]>([]);
  const [education, setEducation] = useState<EducationType[]>([]);
  const [motivations, setMotivations] = useState<Motivation[]>([]);
  const [futureProjects, setFutureProjects] = useState<FutureProjects[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const personal = data.personal;
      const fullName = `${personal.firstname} ${personal.lastname}`
        .split(' ')
        .filter(Boolean)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ');

      setProfile({
        id: 'local',
        full_name: fullName,
        title: personal.title,
        bio: 'bio' in personal ? String(personal.bio ?? '') : '',
        email: personal.email,
        phone: personal.phone,
        location: personal.location,
        avatar_url: 'avatar_url' in personal ? String(personal.avatar_url ?? '') : '',
        resume_url: 'resume_url' in personal ? String(personal.resume_url ?? '') : '',
        github_url: personal.github,
        linkedin_url: personal.linkedin,
        twitter_url: '',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });

      const categoryMap: Record<string, string> = {
        data: 'Data',
        development: 'Development',
        mobile: 'Mobile',
        systems: 'Systems / Networks',
        design: 'Design',
      };

      let orderIndex = 1;
      const skillsList: Skill[] = [];
      Object.entries(data.skills).forEach(([key, entries]) => {
        entries.forEach((entry, index) => {
          skillsList.push({
            id: `${key}-${index}`,
            name: entry,
            category: categoryMap[key] || key,
            level: 70,
            icon: '',
            order_index: orderIndex++,
            created_at: new Date().toISOString(),
          });
        });
      });
      setSkills(skillsList);

      setProjects(
        data.projects.map((project, index) => ({
          id: `proj-${index}`,
          title: project.name,
          category: project.category,
          description: project.description,
          objective: project.objective,
          long_description: '',
          image_url: '',
          demo_url: '',
          github_url: '',
          technologies: project.stack || [],
          featured: false,
          order_index: index,
          created_at: new Date().toISOString(),
        }))
      );

      function parsePeriod(period: string) {
        const lower = period.toLowerCase();
        const parts = period.split('-').map((value) => value.trim());
        const isCurrent = lower.includes("aujourd'hui") || lower.includes('aujour');
        let start: string | null = null;
        let end: string | null = null;

        if (parts.length >= 1) {
          const normalized = parts[0].replace(/\s/g, '');
          const [month, year] = normalized.split('/');
          if (year && month) {
            start = `${year.length === 2 ? `20${year}` : year}-${month.padStart(2, '0')}-01`;
          }
        }

        if (!isCurrent && parts.length >= 2) {
          const normalized = parts[1].replace(/\s/g, '');
          const [month, year] = normalized.split('/');
          if (year && month) {
            end = `${year.length === 2 ? `20${year}` : year}-${month.padStart(2, '0')}-01`;
          }
        }

        return { start, end, isCurrent };
      }

      setExperience(
        data.experience.map((item, index) => {
          const { start, end, isCurrent } = parsePeriod(item.period);
          return {
            id: `exp-${index}`,
            company: item.company,
            position: item.role,
            description: (item.tasks || []).join('\n'),
            location: '',
            start_date: start || new Date().toISOString(),
            end_date: end,
            is_current: isCurrent,
            order_index: index,
            created_at: new Date().toISOString(),
          };
        })
      );

      setEducation(
        data.education.map((item, index) => {
          const years = (item.year || '').split('-').map((value) => value.trim());
          return {
            id: `edu-${index}`,
            institution: item.school,
            degree: item.degree,
            field: '',
            location: '',
            start_date: years[0] ? `${years[0]}-09-01` : new Date().toISOString(),
            end_date: years[1] ? `${years[1]}-06-30` : null,
            is_current: false,
            description: '',
            order_index: index,
            created_at: new Date().toISOString(),
          };
        })
      );

      setMotivations(
        (data.motivations || []).map((item, index) => ({
          id: item.id ?? `mot-${index}`,
          content: item.content ?? '',
          created_at: item.created_at ?? new Date().toISOString(),
          updated_at: item.updated_at ?? new Date().toISOString(),
        }))
      );

      setFutureProjects(
        (data.futureProjects || []).map((item, index) => ({
          id: item.id ?? `fproj-${index}`,
          title: item.title ?? `Projet ${index + 1}`,
          description: item.description ?? '',
          long_description: item.long_description ?? '',
          image_url: item.image_url ?? '',
          demo_url: item.demo_url ?? '',
          github_url: item.github_url ?? '',
          technologies: item.technologies || [],
          featured: item.featured ?? false,
          order_index: item.order_index ?? index,
          created_at: item.created_at ?? new Date().toISOString(),
        }))
      );
    } catch (error) {
      console.error('Error loading local data:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="page-shell flex min-h-screen items-center justify-center px-6">
        <div className="glass-card max-w-md rounded-[2rem] p-8 text-center">
          <div className="mx-auto mb-6 h-14 w-14 animate-spin rounded-full border-4 border-[#d88257] border-t-transparent" />
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Chargement</p>
          <p className="mt-3 text-2xl font-semibold text-ink">Preparation du portfolio...</p>
          <p className="mt-3 text-sm leading-7 text-muted">
            Mise en place des sections, des projets et de la nouvelle direction visuelle.
          </p>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              profile={profile}
              projectCount={projects.length}
              skillCount={skills.length}
              experienceCount={experience.length}
            />
          }
        />
        <Route
          path="/about"
          element={<FutureProjectsMotivationPage motivations={motivations} futureProjects={futureProjects} />}
        />
        <Route path="/skills" element={<SkillsPage skills={skills} />} />
        <Route path="/projects" element={<ProjectsPage projects={projects} />} />
        <Route path="/experience" element={<ExperiencePage experience={experience} education={education} />} />
        <Route path="/contact" element={<ContactPage profile={profile} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
