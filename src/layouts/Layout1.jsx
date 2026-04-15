/*  LAYOUT 1 — GLASSMORPHISM
    Deep purple/violet bg, frosted glass panels, blur everywhere,
    translucent cards, soft white text, neon violet accents.      */

import { useState } from 'react';
import { regions, days, months, years, profiles, features, testimonials } from '../data';

const BRAND = 'DejtingParadiset';

/* ── Stars ── */
function Stars({ count }) {
  return (
    <div className="flex gap-1">{[...Array(5)].map((_, i) => (
      <span key={i} className={`text-sm ${i < count ? 'text-yellow-300' : 'text-white/20'}`}>&#9733;</span>
    ))}</div>
  );
}

/* ── Nav ── */
function Nav({ open, setOpen }) {
  const links = ['Hem', 'Profiler', 'Fördelar', 'Röster'];
  return (
    <nav className="fixed top-4 left-4 right-4 z-50">
      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl px-6">
        <div className="flex items-center justify-between h-14">
          <a href="#" className="font-extrabold text-white text-lg tracking-tight">dejting<span className="text-violet-300">paradiset</span></a>
          <div className="hidden md:flex items-center gap-6">
            {links.map(l => <a key={l} href={`#g-${l.toLowerCase()}`} className="text-white/70 hover:text-white text-[13px] font-medium transition-colors">{l}</a>)}
            <a href="#g-form" className="bg-violet-500 text-white text-[13px] font-bold px-5 py-2 rounded-xl hover:bg-violet-400 transition-colors">Logga in / Gå med</a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden text-white/80" aria-label="Meny">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 8h16M4 16h16'} /></svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 pt-2 border-t border-white/10 flex flex-col gap-2">
            {links.map(l => <a key={l} href={`#g-${l.toLowerCase()}`} onClick={() => setOpen(false)} className="text-white/70 text-sm py-1">{l}</a>)}
          </div>
        )}
      </div>
    </nav>
  );
}

/* ── Hero ── */
function Hero() {
  const [isLogin, setIsLogin] = useState(false);
  const [f, sf] = useState({ name:'', username:'', email:'', region:'', day:'', month:'', year:'', password:'', confirm:'', terms:false });
  const c = e => { const {name,value,type,checked}=e.target; sf(p=>({...p,[name]:type==='checkbox'?checked:value})); };
  const i = 'w-full px-4 py-2.5 bg-white/10 backdrop-blur border border-white/20 rounded-xl text-white placeholder-white/40 text-sm focus:outline-none focus:border-violet-400 focus:bg-white/15 transition-all';
  const s = 'flex-1 px-3 py-2.5 bg-white/10 backdrop-blur border border-white/20 rounded-xl text-white/60 text-sm focus:outline-none focus:border-violet-400 appearance-none';

  return (
    <section id="g-hem" className="relative min-h-screen flex items-center overflow-hidden bg-[#1a0a3e]">
      {/* Colored blobs */}
      <div className="absolute w-[500px] h-[500px] bg-violet-600/30 rounded-full blur-[120px] -top-40 -left-40" />
      <div className="absolute w-[400px] h-[400px] bg-fuchsia-500/20 rounded-full blur-[100px] bottom-0 right-0" />
      <div className="absolute w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[80px] top-1/3 right-1/4" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-violet-300 text-sm font-semibold tracking-widest uppercase mb-4">Välkommen till {BRAND}</p>
            <h1 className="text-[clamp(2.2rem,5vw,3.8rem)] font-black text-white leading-[1.1] mb-5">
              Hitta kärleken,<br/>inte krångel.
            </h1>
            <p className="text-white/50 text-lg leading-relaxed mb-6 max-w-md">
              Bli en del av Sveriges snabbast växande dejtingcommunity. Riktiga människor, riktiga träffar.
            </p>
            <div className="relative mb-8 rounded-[24px] overflow-hidden h-60 w-full max-w-md border border-white/10 shadow-lg">
               <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Smiling girl" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-violet-900/20" />
            </div>
            <div className="flex gap-8">
              {[['54K', 'medlemmar'],['12K', 'par'],['4.9', 'betyg']].map(([n,l])=>(
                <div key={l}>
                  <div className="text-2xl font-black text-white">{n}</div>
                  <div className="text-white/40 text-xs uppercase tracking-wider">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div id="g-form" className="bg-white/[0.07] backdrop-blur-2xl border border-white/[0.15] rounded-[28px] p-7 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            <div className="flex bg-white/5 rounded-xl p-1 mb-6 border border-white/10">
              <button onClick={()=>setIsLogin(false)} className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${!isLogin?'bg-violet-500 text-white shadow-md':'text-white/50 hover:text-white'}`}>Skapa konto</button>
              <button onClick={()=>setIsLogin(true)} className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${isLogin?'bg-violet-500 text-white shadow-md':'text-white/50 hover:text-white'}`}>Logga in</button>
            </div>
            
            {!isLogin ? (
              <form onSubmit={e=>{e.preventDefault();alert('Tack!');}} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" name="name" placeholder="Namn" required value={f.name} onChange={c} className={i} />
                  <input type="text" name="username" placeholder="Användarnamn" required value={f.username} onChange={c} className={i} />
                </div>
                <input type="email" name="email" placeholder="E-post" required value={f.email} onChange={c} className={i} />
                <select name="region" value={f.region} onChange={c} required className={s+' w-full'}>
                  <option value="" disabled>Välj region</option>
                  {regions.map(r=><option key={r} value={r} className="text-gray-900">{r}</option>)}
                </select>
                <div>
                  <span className="text-white/40 text-xs block mb-1">Födelsedatum</span>
                  <div className="flex gap-2">
                    <select name="day" value={f.day} onChange={c} required className={s}><option value="" disabled>Dag</option>{days.map(d=><option key={d} value={d} className="text-gray-900">{d}</option>)}</select>
                    <select name="month" value={f.month} onChange={c} required className={s}><option value="" disabled>Mån</option>{months.map((m,idx)=><option key={m} value={idx+1} className="text-gray-900">{m}</option>)}</select>
                    <select name="year" value={f.year} onChange={c} required className={s}><option value="" disabled>År</option>{years.map(y=><option key={y} value={y} className="text-gray-900">{y}</option>)}</select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input type="password" name="password" placeholder="Lösenord" required value={f.password} onChange={c} className={i} />
                  <input type="password" name="confirm" placeholder="Bekräfta" required value={f.confirm} onChange={c} className={i} />
                </div>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" name="terms" checked={f.terms} onChange={c} required className="mt-0.5 w-4 h-4 accent-violet-500 rounded" />
                  <span className="text-white/40 text-xs leading-relaxed">Jag godkänner <a href="#" className="text-violet-300 hover:underline">villkor</a> & <a href="#" className="text-violet-300 hover:underline">integritetspolicy</a></span>
                </label>
                <button type="submit" className="w-full py-3 bg-violet-500 hover:bg-violet-400 text-white font-bold rounded-xl text-sm transition-colors mt-1">Registrera mig</button>
              </form>
            ) : (
              <form onSubmit={e=>{e.preventDefault();alert('Välkommen tillbaka!');}} className="space-y-4">
                <input type="email" name="email" placeholder="E-post" required value={f.email} onChange={c} className={i} />
                <input type="password" name="password" placeholder="Lösenord" required value={f.password} onChange={c} className={i} />
                <div className="text-right">
                  <a href="#" className="text-violet-300 hover:underline text-xs">Glömt lösenord?</a>
                </div>
                <button type="submit" className="w-full py-3 bg-violet-500 hover:bg-violet-400 text-white font-bold rounded-xl text-sm transition-colors mt-2">Logga in</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Profiles ── */
function Profiles() {
  return (
    <section id="g-profiler" className="py-24 bg-[#150835] relative overflow-hidden">
      <div className="absolute w-[400px] h-[400px] bg-violet-700/10 rounded-full blur-[100px] -top-20 right-0" />
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-black text-white mb-2">Nya medlemmar</h2>
        <p className="text-white/40 mb-10">Kolla vilka som precis gått med.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {profiles.map((p,idx)=>(
            <div key={idx} className="group relative rounded-[20px] overflow-hidden bg-white/[0.05] backdrop-blur-lg border border-white/[0.1] hover:border-violet-400/40 transition-all">
              <div className="aspect-[3/4] relative">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a3e] via-transparent to-transparent" />
                {p.online && <div className="absolute top-3 left-3 bg-white/15 backdrop-blur-xl border border-white/20 text-green-300 text-[11px] font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-green-400 rounded-full" />Online</div>}
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white font-semibold text-[15px]">{p.name}, {p.age}</p>
                  <p className="text-white/50 text-xs">{p.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Features ── */
function Features() {
  return (
    <section id="g-fördelar" className="py-24 bg-[#1a0a3e] relative">
      <div className="absolute w-[500px] h-[300px] bg-fuchsia-600/10 rounded-full blur-[120px] bottom-0 left-1/4" />
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black text-white">Varför {BRAND}?</h2>
          <p className="text-white/40 mt-2 max-w-md mx-auto">Allt du behöver för att hitta rätt person, samlat på ett ställe.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {features.map((ft,idx)=>(
            <div key={idx} className="bg-white/[0.06] backdrop-blur-2xl border border-white/[0.12] rounded-[22px] p-7 hover:bg-white/[0.1] hover:border-violet-400/30 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center mb-5 group-hover:bg-violet-500 group-hover:border-violet-500 transition-all">
                <svg className="w-6 h-6 text-violet-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ft.iconPath}/></svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{ft.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{ft.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials ── */
function Testimonials() {
  return (
    <section id="g-röster" className="py-24 bg-[#150835]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-black text-white mb-2">Medlemmarna älskar oss</h2>
        <p className="text-white/40 mb-10">Riktiga berättelser från riktiga par.</p>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t,idx)=>(
            <div key={idx} className="bg-white/[0.06] backdrop-blur-2xl border border-white/[0.12] rounded-[22px] p-6 hover:bg-white/[0.1] transition-all">
              <Stars count={t.rating}/>
              <p className="text-white/60 text-sm leading-relaxed mt-4 mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <img src={t.img} alt={t.name} className="w-9 h-9 rounded-full ring-2 ring-violet-500/30"/>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-white/30 text-xs">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Footer ── */
function Footer() {
  return (
    <footer className="bg-[#0f0525] py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/25 text-xs">&copy; {new Date().getFullYear()} {BRAND}</p>
        <div className="flex gap-5">{['Villkor','Integritet','Kontakt'].map(l=><a key={l} href="#" className="text-white/25 hover:text-violet-300 text-xs transition-colors">{l}</a>)}</div>
        <p className="text-white/15 text-[10px]">Made by Pranshu</p>
      </div>
    </footer>
  );
}

export default function Layout1() {
  const [open, setOpen] = useState(false);
  return (<><Nav open={open} setOpen={setOpen}/><Hero/><Profiles/><Features/><Testimonials/><Footer/></>);
}