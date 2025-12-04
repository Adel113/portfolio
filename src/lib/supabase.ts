import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Profile {
  id: string;
  full_name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  avatar_url: string;
  github_url: string;
  linkedin_url: string;
  twitter_url: string;
  created_at: string;
  updated_at: string;
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

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Avatar upload helper
export async function uploadAvatar(file: File, profileId: string) {
  const fileName = `${profileId}-${Date.now()}`;
  const { error } = await supabase.storage
    .from('avatars')
    .upload(fileName, file, { upsert: true });

  if (error) throw error;

  // Get public URL
  const { data: { publicUrl } } = supabase.storage
    .from('avatars')
    .getPublicUrl(fileName);

  // Update profile with avatar URL
  const { error: updateError } = await supabase
    .from('profile')
    .update({ avatar_url: publicUrl })
    .eq('id', profileId);

  if (updateError) throw updateError;

  return publicUrl;
}

// Update avatar URL directly
export async function updateAvatarUrl(profileId: string, avatarUrl: string) {
  const { error } = await supabase
    .from('profile')
    .update({ avatar_url: avatarUrl })
    .eq('id', profileId);

  if (error) throw error;
  return avatarUrl;
}

