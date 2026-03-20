import { useEffect, useState } from 'react';
import { BrainCircuit, Code2, Download, Github, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Profile } from '../lib/portfolio';

interface HeroProps {
  readonly profile: Profile | null;
  readonly projectCount: number;
  readonly skillCount: number;
  readonly experienceCount: number;
}

export default function Hero({ profile, projectCount, skillCount, experienceCount }: HeroProps) {
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    if (profile?.avatar_url) {
      setImageFailed(false);
    }
  }, [profile?.avatar_url]);

  if (!profile) return null;

  const initials = profile.full_name
    .split(' ')
    .map((name) => name[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const quickFacts = [
    { icon: MapPin, label: profile.location },
    { icon: Mail, label: profile.email },
    { icon: BrainCircuit, label: 'Data Science + Developpement logiciel' },
  ];

  const focusAreas = [
    {
      icon: BrainCircuit,
      title: 'Data Science',
      copy: 'Analyse de donnees, experimentation, modelisation et projets orientes usage.',
    },
    {
      icon: Code2,
      title: 'Developpement logiciel',
      copy: 'Applications web, mobile et outils techniques construits avec une logique produit.',
    },
    {
      icon: Download,
      title: 'Alternance 2026-2027',
      copy: "Objectif : rejoindre une equipe ou la data et le logiciel se renforcent mutuellement.",
    },
  ];

  return (
    <section id="home" className="section-shell flex min-h-screen items-center pt-32">
      <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="relative z-10">
          <span className="section-eyebrow">{profile.full_name}</span>
          <h1 className="section-title max-w-4xl text-balance">{profile.title}</h1>
          <p className="section-copy max-w-3xl">{profile.bio}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {quickFacts.map(({ icon: Icon, label }) => (
              <span key={label} className="pill">
                <Icon className="h-4 w-4 text-accent" />
                {label}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={profile.resume_url}
              download="ADEL_SIDI_AHMED_CV_2026.pdf"
              className="button-primary"
            >
              <Download className="h-4 w-4" />
              Telecharger CV
            </a>
            <a
              href={profile.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary"
            >
              <Github className="h-4 w-4" />
              Voir GitHub
            </a>
            <Link to="/contact" className="button-secondary">
              <Mail className="h-4 w-4" />
              Me contacter
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium text-muted">
            <span>{projectCount} projets</span>
            <span>/</span>
            <span>{skillCount} competences</span>
            <span>/</span>
            <span>{experienceCount} experiences</span>
          </div>
        </div>

        <div className="relative z-10">
          <div className="editorial-card bg-mesh p-8 md:p-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              {profile.avatar_url && !imageFailed ? (
                <img
                  src={profile.avatar_url}
                  alt={profile.full_name}
                  loading="eager"
                  decoding="async"
                  onError={() => setImageFailed(true)}
                  className="h-32 w-32 rounded-[2rem] object-cover shadow-elevated"
                />
              ) : (
                <div className="flex h-32 w-32 items-center justify-center rounded-[2rem] bg-[#1f2430] text-3xl font-bold text-white shadow-elevated">
                  {initials}
                </div>
              )}

              <div>
                <span className="pill-muted">Positionnement recruteur</span>
                <h2 className="mt-4 text-3xl font-semibold text-ink">{profile.full_name}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Profil serieux, oriente data, machine learning et developpement logiciel, pret a contribuer sur des
                  projets concrets en alternance.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4">
              {focusAreas.map(({ icon: Icon, title, copy }) => (
                <div key={title} className="stat-card flex gap-4">
                  <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-[1rem] bg-[#1f2430] text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-ink">{title}</p>
                    <p className="mt-2 text-sm leading-7 text-muted">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
