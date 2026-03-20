import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Accueil', to: '/' },
  { label: 'Vision', to: '/about' },
  { label: 'Competences', to: '/skills' },
  { label: 'Projets', to: '/projects' },
  { label: 'Parcours', to: '/experience' },
  { label: 'Contact', to: '/contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <div className="mx-auto max-w-7xl rounded-full px-4 py-3 glass-card-soft md:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1f2430] text-sm font-bold uppercase tracking-[0.24em] text-white">
              AS
            </span>
            <span>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
                Portfolio
              </span>
              <span className="block text-sm font-medium text-ink">Adel Sidi Ahmed</span>
            </span>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    'rounded-full px-4 py-2 text-sm font-medium transition-all duration-300',
                    isActive
                      ? 'bg-[#1f2430] text-white shadow-lg'
                      : 'text-slate-600 hover:bg-white/70 hover:text-slate-900',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setIsOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1f2430] text-white transition-transform duration-300 hover:scale-105 md:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="mt-4 rounded-[2rem] p-4 glass-card-soft md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      'rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300',
                      isActive
                        ? 'bg-[#1f2430] text-white shadow-lg'
                        : 'text-slate-600 hover:bg-white/80 hover:text-slate-900',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
