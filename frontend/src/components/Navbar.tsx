import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  // ✅ DARK MODE PERSISTENCE
  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const prefersDark = saved === 'true' || (!saved && isSystemDark);
    setDarkMode(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark);
  }, []);

  // ✅ MOBILE MENU SCROLL LOCK - FIXES BODY JUMP
  useEffect(() => {
    if (open) {
      // Save scroll position & lock body
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    // Cleanup on unmount
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [open]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/careers', label: 'Careers' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 glass-card shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl sm:text-3xl gradient-text tracking-tight font-black">
            TechNova
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-semibold px-4 lg:px-6 py-3 rounded-2xl transition-all duration-300 text-sm lg:text-base ${location.pathname === link.to
                  ? 'bg-gradient-to-r from-primary/20 to-yankees-500/20 text-primary shadow-lg'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-primary/10'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleDarkMode}
              className="ml-4 p-3 rounded-2xl glass-card hover:bg-primary/20 dark:hover:bg-yankees-500/30 transition-all"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} />
              )}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl glass-card hover:bg-primary/20 transition-all"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} />
              )}
            </button>
            <button
              className="p-2 rounded-xl glass-card hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-all"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Fullscreen */}
        {open && (
          <div className="lg:hidden pb-8 pt-4 border-t border-primary/20 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl">
            <div className="px-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`block w-full p-6 rounded-2xl font-bold text-lg text-left transition-all ${location.pathname === link.to
                    ? 'bg-gradient-to-r from-primary to-yankees-600 text-white shadow-xl'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-primary/20 dark:hover:bg-yankees-500/30'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
