import { type FormEvent, useState } from 'react';
import { CheckCircle, Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import type { ContactMessage, Profile } from '../lib/portfolio';

interface ContactProps {
  readonly profile: Profile | null;
}

export default function Contact({ profile }: ContactProps) {
  const [formData, setFormData] = useState<ContactMessage>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactLinks = [
    profile?.email
      ? { href: `mailto:${profile.email}`, label: profile.email, icon: Mail, helper: 'Email' }
      : null,
    profile?.phone
      ? { href: `tel:${profile.phone}`, label: profile.phone, icon: Phone, helper: 'Telephone' }
      : null,
    profile?.location
      ? { href: '', label: profile.location, icon: MapPin, helper: 'Localisation' }
      : null,
  ].filter(Boolean);

  const socials = [
    profile?.github_url ? { href: profile.github_url, label: 'GitHub', icon: Github } : null,
    profile?.linkedin_url ? { href: profile.linkedin_url, label: 'LinkedIn', icon: Linkedin } : null,
  ].filter(Boolean);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'service_xuchj4m',
        'template_svh2y9r',
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'RptMKNj-nGcrxqIXO'
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-shell">
      <div className="section-intro">
        <span className="section-eyebrow">Contact</span>
        <h2 className="section-title">Disponible pour echanger autour d'une alternance, d'un projet data ou d'un besoin logiciel</h2>
        <p className="section-copy">
          Recruteurs, entreprises ou porteurs de projet peuvent me contacter pour discuter d'une alternance en Data
          Science / Developpement logiciel, d'une collaboration technique ou d'un projet a construire.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <aside className="editorial-card bg-mesh">
          <span className="pill-muted">Ouvert aux echanges</span>
          <h3 className="mt-6 text-3xl font-semibold text-ink">Parlons de ce que nous pouvons construire ensemble.</h3>
          <p className="mt-4 text-base leading-8 text-muted">
            Je suis disponible pour discuter d'une alternance, d'une collaboration ponctuelle ou d'un projet web a
            structurer.
          </p>

          <div className="mt-8 space-y-4">
            {contactLinks.map((item) => {
              if (!item) return null;
              const Icon = item.icon;

              return item.href ? (
                <a key={item.helper} href={item.href} className="flex items-center gap-4 rounded-[1.5rem] p-4 glass-card-soft">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-[#1f2430] text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">{item.helper}</p>
                    <p className="mt-1 text-base font-medium text-ink">{item.label}</p>
                  </div>
                </a>
              ) : (
                <div key={item.helper} className="flex items-center gap-4 rounded-[1.5rem] p-4 glass-card-soft">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-[#1f2430] text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">{item.helper}</p>
                    <p className="mt-1 text-base font-medium text-ink">{item.label}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {socials.map((item) => {
              if (!item) return null;
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill hover:-translate-y-0.5 hover:bg-white/85"
                >
                  <Icon className="h-4 w-4 text-accent" />
                  {item.label}
                </a>
              );
            })}
          </div>
        </aside>

        <div className="editorial-card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="field-label">
                  Nom
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                  className="field-input"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="field-label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                  className="field-input"
                  placeholder="vous@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="field-label">
                Sujet
              </label>
              <input
                id="subject"
                type="text"
                required
                value={formData.subject}
                onChange={(event) => setFormData({ ...formData, subject: event.target.value })}
                className="field-input"
                placeholder="Mission, alternance, projet..."
              />
            </div>

            <div>
              <label htmlFor="message" className="field-label">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={7}
                value={formData.message}
                onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                className="field-input resize-none"
                placeholder="Expliquez votre besoin, votre contexte ou votre idee."
              />
            </div>

            {submitStatus === 'success' && (
              <div className="rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-4 text-emerald-700">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">Message envoye avec succes.</span>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="rounded-[1.5rem] border border-rose-200 bg-rose-50 p-4 text-rose-700">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <span className="font-medium">Une erreur est survenue. Merci de reessayer.</span>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="button-primary w-full disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
            >
              {isSubmitting ? (
                <>
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Envoi en cours
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Envoyer le message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
