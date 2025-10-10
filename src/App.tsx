import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  supabase,
  Profile,
  Skill,
  Project,
  Experience as ExperienceType,
  Education as EducationType,
  Motivation,
  FutureProjects
} from './lib/supabase';
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
      const [profileRes, skillsRes, projectsRes, experienceRes, educationRes, motivationsRes, futureProjectsRes] = await Promise.all([
        supabase.from('profile').select('*').maybeSingle(),
        supabase.from('skills').select('*').order('order_index'),
        supabase.from('projects').select('*').order('order_index'),
        supabase.from('experience').select('*').order('order_index'),
        supabase.from('education').select('*').order('order_index'),
        supabase.from('motivations').select('*').order('created_at'),
        supabase.from('future_projects').select('*').order('created_at'),
      ]);

      if (profileRes.data) setProfile(profileRes.data);
      if (skillsRes.data) setSkills(skillsRes.data);
      if (projectsRes.data) setProjects(projectsRes.data);
      if (experienceRes.data) setExperience(experienceRes.data);
      if (educationRes.data) setEducation(educationRes.data);
      if (motivationsRes.data) setMotivations(motivationsRes.data);
      if (futureProjectsRes.data) setFutureProjects(futureProjectsRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
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
