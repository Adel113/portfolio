export interface Profile {
  id: string;
  full_name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  avatar_url: string;
  resume_url: string;
  github_url: string;
  linkedin_url: string;
  twitter_url: string;
  created_at: string;
  updated_at: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  level: number;
  icon: string;
  order_index: number;
  created_at: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  objective: string;
  long_description: string;
  image_url: string;
  demo_url: string;
  github_url: string;
  technologies: string[];
  featured: boolean;
  order_index: number;
  created_at: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  description: string;
  location: string;
  start_date: string;
  end_date: string | null;
  is_current: boolean;
  order_index: number;
  created_at: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  start_date: string;
  end_date: string | null;
  is_current: boolean;
  description: string;
  order_index: number;
  created_at: string;
}

export interface Motivation {
  id: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export interface FutureProjects {
  id: string;
  title: string;
  description: string;
  long_description: string;
  image_url: string;
  demo_url: string;
  github_url: string;
  technologies: string[];
  featured: boolean;
  order_index: number;
  created_at: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}
