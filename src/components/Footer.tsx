import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="flex items-center justify-center gap-2 text-gray-400">
          Fait avec <Heart className="w-4 h-4 text-red-500 fill-red-500" /> en utilisant React & Supabase
        </p>
        <p className="mt-2 text-gray-500 text-sm">
          {new Date().getFullYear()} Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
