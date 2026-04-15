import { useState } from 'react';

const regions = [
  'Stockholm', 'Göteborg', 'Malmö', 'Uppsala', 'Västerås',
  'Örebro', 'Linköping', 'Helsingborg', 'Jönköping', 'Norrköping',
  'Lund', 'Umeå', 'Gävle', 'Borås', 'Sundsvall',
];

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
  'Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni',
  'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December',
];
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 80 }, (_, i) => currentYear - 18 - i);

export default function Hero() {
  const [form, setForm] = useState({
    name: '', username: '', email: '', region: '',
    day: '', month: '', year: '', password: '', confirmPassword: '', terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Tack för din registrering!');
  };

  const inputClass =
    'w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm';
  const selectClass =
    'flex-1 px-3 py-3 bg-white/10 border border-white/20 rounded-xl text-white/70 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm appearance-none';

  return (
    <section id="hem" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-secondary/30" />
      {/* Floating circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-sm font-medium">Sveriges #1 AI-Matchning</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Hitta din{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                flirt
              </span>{' '}
              idag!
            </h1>
            <p className="text-white/70 text-lg sm:text-xl mb-8 max-w-lg mx-auto lg:mx-0">
              Tusentals singlar i Sverige väntar på att träffa dig. Skapa ett konto gratis och börja chatta direkt.
            </p>
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50K+</div>
                <div className="text-white/50 text-sm">Medlemmar</div>
              </div>
              <div className="w-px bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10K+</div>
                <div className="text-white/50 text-sm">Matchningar</div>
              </div>
              <div className="w-px bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">4.8★</div>
                <div className="text-white/50 text-sm">Betyg</div>
              </div>
            </div>
          </div>

          {/* Right - Registration Form */}
          <div id="register" className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-white text-center mb-6">Registrera</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text" name="name" placeholder="Namn *" required
                  value={form.name} onChange={handleChange} className={inputClass}
                />
                <input
                  type="text" name="username" placeholder="Användarnamn *" required
                  value={form.username} onChange={handleChange} className={inputClass}
                />
              </div>
              <input
                type="email" name="email" placeholder="E-post *" required
                value={form.email} onChange={handleChange} className={inputClass}
              />
              <select name="region" value={form.region} onChange={handleChange} required className={selectClass + ' w-full'}>
                <option value="" disabled>Välj region</option>
                {regions.map((r) => (
                  <option key={r} value={r} className="text-dark">{r}</option>
                ))}
              </select>

              <div>
                <label className="text-white/60 text-xs mb-1 block">Födelsedatum *</label>
                <div className="flex gap-3">
                  <select name="day" value={form.day} onChange={handleChange} required className={selectClass}>
                    <option value="" disabled>Dag</option>
                    {days.map((d) => (
                      <option key={d} value={d} className="text-dark">{d}</option>
                    ))}
                  </select>
                  <select name="month" value={form.month} onChange={handleChange} required className={selectClass}>
                    <option value="" disabled>Månad</option>
                    {months.map((m, i) => (
                      <option key={m} value={i + 1} className="text-dark">{m}</option>
                    ))}
                  </select>
                  <select name="year" value={form.year} onChange={handleChange} required className={selectClass}>
                    <option value="" disabled>År</option>
                    {years.map((y) => (
                      <option key={y} value={y} className="text-dark">{y}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="password" name="password" placeholder="Lösenord *" required
                  value={form.password} onChange={handleChange} className={inputClass}
                />
                <input
                  type="password" name="confirmPassword" placeholder="Bekräfta lösenord *" required
                  value={form.confirmPassword} onChange={handleChange} className={inputClass}
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox" name="terms" checked={form.terms} onChange={handleChange} required
                  className="mt-1 w-4 h-4 accent-primary"
                />
                <span className="text-white/60 text-xs leading-relaxed">
                  Jag har läst och godkänner{' '}
                  <a href="#" className="text-primary hover:underline">Villkor</a> och{' '}
                  <a href="#" className="text-primary hover:underline">Sekretesspolicy</a>
                </span>
              </label>

              <button
                type="submit"
                className="relative w-full py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl text-lg hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10">Skapa Konto GratiS</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
