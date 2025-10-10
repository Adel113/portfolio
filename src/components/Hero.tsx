import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Profile } from '../lib/supabase';

interface HeroProps {
  readonly profile: Profile | null;
}

export default function Hero({ profile }: HeroProps) {
  if (!profile) return null;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-20">
      <div className="max-w-5xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
        {profile.avatar_url ? (
          <img
            src={profile.avatar_url}
            alt={profile.full_name}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-blue-500 shadow-2xl"
          />
        ) : (
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-6xl font-bold shadow-2xl">
            {profile.full_name.split(' ').map(n => n[0]).join('')}
          </div>
        )}
          </div>

          <div className="flex-1 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {profile.full_name}
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
          {profile.title}
        </h2>
        <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl">
          {profile.bio}
        </p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8 text-sm text-gray-400">
          {profile.location && (
            <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>{profile.location}</span>
            </div>
          )}
          {profile.email && (
            <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <span>{profile.email}</span>
            </div>
          )}
          {profile.phone && (
            <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <span>{profile.phone}</span>
            </div>
          )}
        </div>

        <div className="flex gap-4 justify-center md:justify-start">
          {profile.github_url && (
            <a
          href={profile.github_url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors duration-300 hover:scale-110 transform"
            >
          <Github className="w-6 h-6" />
            </a>
          )}
          {profile.linkedin_url && (
            <a
          href={profile.linkedin_url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors duration-300 hover:scale-110 transform"
            >
          <Linkedin className="w-6 h-6" />
            </a>
          )}
          {profile.twitter_url && (
            <a
          href={profile.twitter_url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors duration-300 hover:scale-110 transform"
            >
          <Twitter className="w-6 h-6" />
            </a>
          )}
        </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}
