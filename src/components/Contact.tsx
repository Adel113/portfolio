import { useState, FormEvent } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { supabase, ContactMessage } from '../lib/supabase';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState<ContactMessage>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Insert into Supabase
      const { error } = await supabase.from('contact_messages').insert([formData]);
      if (error) throw error;

      // Send email via EmailJS
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
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            Contactez-moi
          </h2>
          <p className="text-xl text-gray-600">
            Vous avez une question ou souhaitez collaborer ? N'hésitez pas à me contacter !
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none"
                  placeholder="votre.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none"
                placeholder="De quoi s'agit-il ?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none resize-none"
                placeholder="Votre message..."
              />
            </div>

            {submitStatus === 'success' && (
              <div className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Message envoyé avec succès !</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-lg">
                <Mail className="w-5 h-5" />
                <span className="font-medium">Échec de l'envoi du message. Veuillez réessayer.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
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
