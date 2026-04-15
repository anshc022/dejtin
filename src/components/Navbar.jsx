import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-primary to-accent rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">
              Singel<span className="text-primary">Portalen</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#hem" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Hem</a>
            <a href="#features" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Om Oss</a>
            <a href="#profiles" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Medlemmar</a>
            <a href="#reviews" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Omdömen</a>
            <a
              href="#register"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-primary/30"
            >
              Registrera
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {open && (
          <div className="md:hidden pb-4 border-t border-white/10 mt-2 pt-4 flex flex-col gap-3">
            <a href="#hem" onClick={() => setOpen(false)} className="text-white/80 hover:text-white transition-colors text-sm font-medium px-2 py-1">Hem</a>
            <a href="#features" onClick={() => setOpen(false)} className="text-white/80 hover:text-white transition-colors text-sm font-medium px-2 py-1">Om Oss</a>
            <a href="#profiles" onClick={() => setOpen(false)} className="text-white/80 hover:text-white transition-colors text-sm font-medium px-2 py-1">Medlemmar</a>
            <a href="#reviews" onClick={() => setOpen(false)} className="text-white/80 hover:text-white transition-colors text-sm font-medium px-2 py-1">Omdömen</a>
            <a
              href="#register"
              onClick={() => setOpen(false)}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full text-sm font-semibold transition-all text-center"
            >
              Registrera
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
