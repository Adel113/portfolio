import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Profile,
  Skill,
  Project,
  Experience as ExperienceType,
  Education as EducationType,
  Motivation,
  FutureProjects
} from './lib/supabase';
import data from './data';

interface LocalData {
  personal: {
    firstname: string;
    lastname: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
  };
  skills: Record<string, string[]>;
  projects: Array<{
    name: string;
    description: string;
    stack?: string[];
  }>;
  experience: Array<{
    company: string;
    role: string;
    period: string;
    tasks?: string[];
  }>;
  education: Array<{
    school: string;
    degree: string;
    year?: string;
  }>;
}
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import FutureProjectsMotivationPage from './pages/FutureProjectsMotivationPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';

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
      // map profile
      const p = (data as any).personal;
      const profileObj: Profile = {
        id: 'local',
        full_name: `${p.firstname} ${p.lastname}`,
        title: p.title,
        bio: '',
        email: p.email,
        phone: p.phone,
        location: p.location,
        avatar_url: '',
        github_url: p.github,
        linkedin_url: p.linkedin,
        twitter_url: '',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };
      setProfile(profileObj);

      // map skills
      const skillsArr: Skill[] = [];
      let order = 1;
      const catmap: Record<string, string> = {
        web: 'Web',
        programming: 'Programming',
        mobile: 'Mobile',
        databases: 'Databases',
        systems: 'Systems',
        design: 'Design',
      };
      Object.entries((data as any).skills).forEach(([k, arr]: any) => {
        const category = catmap[k] || k;
        (arr as string[]).forEach((name: string, idx: number) => {
          skillsArr.push({
            id: `${k}-${idx}`,
            name,
            category,
            level: 70,
            icon: '',
            order_index: order++,
            created_at: new Date().toISOString(),
          });
        });
      });
      setSkills(skillsArr);

      // map projects
      const projectsArr: Project[] = (data as any).projects.map((p: any, idx: number) => ({
        id: `proj-${idx}`,
        title: p.name,
        description: p.description,
        long_description: '',
        image_url: '',
        demo_url: '',
        github_url: '',
        technologies: p.stack || [],
        featured: false,
        order_index: idx,
        created_at: new Date().toISOString(),
      }));
      setProjects(projectsArr);

      // map experience
      function parsePeriod(period: string) {
        const lower = period.toLowerCase();
        const parts = period.split('-').map((s) => s.trim());
        const isCurrent = lower.includes("aujourd") || lower.includes('aujour');
        let start = null;
        let end = null;
        if (parts.length >= 1) {
          const m = parts[0].replace(/\s/g, '');
          const [mm, yy] = m.split('/');
          if (yy && mm) start = `${yy.length === 2 ? '20' + yy : yy}-${mm.padStart(2, '0')}-01`;
        }
        if (isCurrent) end = null;
        else if (parts.length >= 2) {
          const m = parts[1].replace(/\s/g, '');
          const [mm, yy] = m.split('/');
          if (yy && mm) end = `${yy.length === 2 ? '20' + yy : yy}-${mm.padStart(2, '0')}-01`;
        }
        return { start, end, isCurrent };
      }

      const expArr: ExperienceType[] = (data as any).experience.map((e: any, idx: number) => {
        const { start, end, isCurrent } = parsePeriod(e.period);
        return {
          id: `exp-${idx}`,
          company: e.company,
          position: e.role,
          description: (e.tasks || []).join('\n'),
          location: '',
          start_date: start || new Date().toISOString(),
          end_date: end,
          is_current: !!isCurrent,
          order_index: idx,
          created_at: new Date().toISOString(),
        } as ExperienceType;
      });
      setExperience(expArr);

      // map education
      const eduArr: EducationType[] = (data as any).education.map((ed: any, idx: number) => {
        const years = (ed.year || '').split('-').map((s: string) => s.trim());
        const start = years[0] ? `${years[0]}-09-01` : new Date().toISOString();
        const end = years[1] ? `${years[1]}-06-30` : null;
        return {
          id: `edu-${idx}`,
          institution: ed.school,
          degree: ed.degree,
          field: '',
          location: '',
          start_date: start,
          end_date: end,
          is_current: false,
          description: '',
          order_index: idx,
          created_at: new Date().toISOString(),
        } as EducationType;
      });
      setEducation(eduArr);

      // map motivations from local data
      const motivationsArr: Motivation[] = ((data as any).motivations || []).map((m: any, idx: number) => ({
        id: m.id ?? `mot-${idx}`,
        content: m.content ?? '',
        created_at: m.created_at ?? new Date().toISOString(),
        updated_at: m.updated_at ?? new Date().toISOString(),
      }));
      setMotivations(motivationsArr);

      // map future projects from local data
      const futureProjectsArr: FutureProjects[] = ((data as any).futureProjects || []).map((p: any, idx: number) => ({
        id: p.id ?? `fproj-${idx}`,
        title: p.title ?? p.name ?? `Project ${idx}`,
        description: p.description ?? '',
        long_description: p.long_description ?? '',
        image_url: p.image_url ?? '',
        demo_url: p.demo_url ?? '',
        github_url: p.github_url ?? '',
        technologies: p.technologies || p.stack || [],
        featured: p.featured ?? false,
        order_index: p.order_index ?? idx,
        created_at: p.created_at ?? new Date().toISOString(),
      }));
      setFutureProjects(futureProjectsArr);
    } catch (error) {
      console.error('error loading local data:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-xl">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage profile={profile} />} />
        <Route path="/about" element={<FutureProjectsMotivationPage motivations={motivations} futureProjects={futureProjects} />} />
        <Route path="/skills" element={<SkillsPage skills={skills} />} />
        <Route path="/projects" element={<ProjectsPage projects={projects} />} />
        <Route path="/experience" element={<ExperiencePage experience={experience} education={education} />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
