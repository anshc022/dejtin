/*  LAYOUT 2 — NEUBRUTALISM
    Bright yellow/cream bg, thick black borders (3-4px),
    solid offset shadows, chunky rounded corners,
    bold black text, solid color fills, no gradients.         */

import { useState } from 'react';
import { regions, days, months, years, profiles, features, testimonials } from '../data';

const BRAND = 'DejtingParadiset';
const shadow = 'shadow-[4px_4px_0px_#000]';
const shadowHover = 'hover:shadow-[6px_6px_0px_#000] hover:-translate-x-[1px] hover:-translate-y-[1px]';
const border = 'border-[3px] border-black';

/* ── Stars ── */
function Stars({ count }) {
  return (
    <div className="flex gap-0.5">{[...Array(5)].map((_,i)=>(
      <span key={i} className={`text-base ${i < count ? 'text-black' : 'text-black/20'}`}>&#9733;</span>
    ))}</div>
  );
}

/* ── Nav ── */
function Nav({ open, setOpen }) {
  const links = ['Hem','Profiler','Varför','Omdömen'];
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-[#ffe156] border-b-[3px] border-black">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
        <a href="#" className="font-black text-black text-lg">dejting<span className="bg-black text-[#ffe156] px-1.5 py-0.5 rounded-md ml-0.5">paradiset</span></a>
        <div className="hidden md:flex items-center gap-5">
          {links.map(l=><a key={l} href={`#n-${l.toLowerCase()}`} className="text-black/70 hover:text-black text-sm font-bold transition-colors">{l}</a>)}
          <a href="#n-form" className={`bg-black text-[#ffe156] text-sm font-black px-5 py-2 rounded-xl ${shadow} hover:shadow-[6px_6px_0px_rgba(0,0,0,0.7)] transition-all`}>Logga in / Skapa</a>
        </div>
        <button onClick={()=>setOpen(!open)} className="md:hidden text-black" aria-label="Meny">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={open?'M6 18L18 6M6 6l12 12':'M4 8h16M4 16h16'}/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-3 flex flex-col gap-1 border-t-[3px] border-black pt-3">
          {links.map(l=><a key={l} href={`#n-${l.toLowerCase()}`} onClick={()=>setOpen(false)} className="text-black/70 font-bold text-sm py-1">{l}</a>)}
        </div>
      )}
    </nav>
  );
}

/* ── Hero ── */
function Hero() {
  const [isLogin, setIsLogin] = useState(false);
  const [f, sf] = useState({ name:'', username:'', email:'', region:'', day:'', month:'', year:'', password:'', confirm:'', terms:false });
  const c = e => { const {name,value,type,checked}=e.target; sf(p=>({...p,[name]:type==='checkbox'?checked:value})); };
  const inp = `w-full px-4 py-2.5 ${border} rounded-xl bg-white text-black placeholder-black/40 text-sm focus:outline-none focus:ring-2 focus:ring-black`;
  const sel = `flex-1 px-3 py-2.5 ${border} rounded-xl bg-white text-black/60 text-sm focus:outline-none focus:ring-2 focus:ring-black appearance-none`;

  return (
    <section id="n-hem" className="min-h-screen flex items-center bg-[#ffe156] pt-14 relative overflow-hidden">
      {/* Deco shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-[#ff6b6b] rounded-full border-[3px] border-black opacity-60" />
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-[#51cf66] rounded-2xl border-[3px] border-black rotate-12 opacity-50" />
      <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-[#339af0] border-[3px] border-black rotate-45 opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className={`inline-block bg-[#51cf66] ${border} rounded-full px-4 py-1 text-sm font-black mb-6 ${shadow}`}>54 000+ medlemmar</div>
            <h1 className="text-[clamp(2.4rem,5vw,4rem)] font-black text-black leading-[1.05] mb-5">
              Sluta scrolla.<br/>Börja dejta.
            </h1>
            <p className="text-black/60 text-lg leading-relaxed mb-6 max-w-md">
              {BRAND} gör det enkelt att träffa riktiga människor i Sverige. Inga filter, inga fula tricks.
            </p>
            <div className={`mb-8 rounded-[24px] overflow-hidden h-60 w-full max-w-md ${border} ${shadow} bg-white`}>
               <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Beautiful girl" className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-6">
              {[['12K','matchningar'],['4.9','betyg'],['#1','i Sverige']].map(([n,l])=>(
                <div key={l} className={`bg-white ${border} rounded-2xl px-5 py-3 text-center ${shadow}`}>
                  <div className="text-xl font-black text-black">{n}</div>
                  <div className="text-black/50 text-xs font-bold uppercase">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div id="n-form" className={`bg-white ${border} rounded-[24px] p-7 ${shadow}`}>
            <div className={`flex border-[3px] border-black rounded-xl overflow-hidden mb-6 ${shadow}`}>
              <button onClick={()=>setIsLogin(false)} className={`flex-1 py-2 text-sm font-black transition-all ${!isLogin?'bg-black text-[#ffe156]':'bg-white text-black hover:bg-black/5'}`}>Skapa konto</button>
              <button onClick={()=>setIsLogin(true)} className={`flex-1 py-2 text-sm font-black transition-all border-l-[3px] border-black ${isLogin?'bg-black text-[#ffe156]':'bg-white text-black hover:bg-black/5'}`}>Logga in</button>
            </div>
            
            {!isLogin ? (
              <form onSubmit={e=>{e.preventDefault();alert('Tack!');}} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" name="name" placeholder="Namn" required value={f.name} onChange={c} className={inp} />
                  <input type="text" name="username" placeholder="Användarnamn" required value={f.username} onChange={c} className={inp} />
                </div>
                <input type="email" name="email" placeholder="E-post" required value={f.email} onChange={c} className={inp} />
                <select name="region" value={f.region} onChange={c} required className={sel+' w-full'}>
                  <option value="" disabled>Välj region</option>
                  {regions.map(r=><option key={r} value={r}>{r}</option>)}
                </select>
                <div>
                  <span className="text-black/40 text-xs font-bold block mb-1">FÖDELSEDATUM</span>
                  <div className="flex gap-2">
                    <select name="day" value={f.day} onChange={c} required className={sel}><option value="" disabled>Dag</option>{days.map(d=><option key={d} value={d}>{d}</option>)}</select>
                    <select name="month" value={f.month} onChange={c} required className={sel}><option value="" disabled>Mån</option>{months.map((m,i)=><option key={m} value={i+1}>{m}</option>)}</select>
                    <select name="year" value={f.year} onChange={c} required className={sel}><option value="" disabled>År</option>{years.map(y=><option key={y} value={y}>{y}</option>)}</select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input type="password" name="password" placeholder="Lösenord" required value={f.password} onChange={c} className={inp} />
                  <input type="password" name="confirm" placeholder="Bekräfta" required value={f.confirm} onChange={c} className={inp} />
                </div>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" name="terms" checked={f.terms} onChange={c} required className="mt-1 w-4 h-4 accent-black rounded" />
                  <span className="text-black/50 text-xs">Jag godkänner <a href="#" className="text-black font-bold hover:underline">villkor</a> & <a href="#" className="text-black font-bold hover:underline">policy</a></span>
                </label>
                <button type="submit" className={`w-full py-3 bg-black text-[#ffe156] font-black rounded-xl text-sm mt-2 ${shadow} hover:shadow-[6px_6px_0px_rgba(0,0,0,0.7)] transition-all`}>Skapa mitt konto</button>
              </form>
            ) : (
              <form onSubmit={e=>{e.preventDefault();alert('Välkommen tillbaka!');}} className="space-y-4">
                <input type="email" name="email" placeholder="E-post" required value={f.email} onChange={c} className={inp} />
                <input type="password" name="password" placeholder="Lösenord" required value={f.password} onChange={c} className={inp} />
                <div className="text-right">
                  <a href="#" className="text-black font-bold hover:underline text-xs">Glömt lösenord?</a>
                </div>
                <button type="submit" className={`w-full py-3 bg-black text-[#ffe156] font-black rounded-xl text-sm mt-2 ${shadow} hover:shadow-[6px_6px_0px_rgba(0,0,0,0.7)] transition-all`}>Logga in</button>
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
  const colors = ['bg-[#ff6b6b]','bg-[#339af0]','bg-[#51cf66]','bg-[#cc5de8]','bg-[#ff922b]','bg-[#20c997]','bg-[#f06595]','bg-[#845ef7]'];
  return (
    <section id="n-profiler" className="py-20 bg-[#faf3dd]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-black text-black mb-1">Nyregistrerade</h2>
        <p className="text-black/50 font-bold mb-10">Kolla in dom senaste.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {profiles.map((p,idx)=>(
            <div key={idx} className={`group ${border} rounded-[20px] overflow-hidden bg-white ${shadow} ${shadowHover} transition-all`}>
              <div className="aspect-[3/4] relative overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover"/>
                {p.online && <div className={`absolute top-2 left-2 ${colors[idx]} ${border} text-black text-[10px] font-black px-2 py-0.5 rounded-full`}>ONLINE</div>}
              </div>
              <div className={`p-3 ${colors[idx]}`}>
                <p className="text-black font-black text-sm">{p.name}, {p.age}</p>
                <p className="text-black/60 text-xs font-bold">{p.city}</p>
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
  const colors = ['bg-[#ff6b6b]','bg-[#339af0]','bg-[#51cf66]','bg-[#cc5de8]'];
  return (
    <section id="n-varför" className="py-24 bg-[#ffe156]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-black text-black mb-1 text-center">Varför {BRAND}?</h2>
        <p className="text-black/50 font-bold text-center mb-12">Fyra bra anledningar.</p>
        <div className="grid sm:grid-cols-2 gap-5">
          {features.map((ft,idx)=>(
            <div key={idx} className={`${border} rounded-[20px] p-6 bg-white ${shadow} ${shadowHover} transition-all`}>
              <div className={`w-14 h-14 ${colors[idx]} ${border} rounded-2xl flex items-center justify-center mb-4 ${shadow}`}>
                <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={ft.iconPath}/></svg>
              </div>
              <h3 className="text-black font-black text-lg mb-2">{ft.title}</h3>
              <p className="text-black/50 text-sm font-medium leading-relaxed">{ft.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials ── */
function Testimonials() {
  const colors = ['bg-[#ff6b6b]','bg-[#339af0]','bg-[#51cf66]','bg-[#cc5de8]','bg-[#ff922b]','bg-[#20c997]'];
  return (
    <section id="n-omdömen" className="py-24 bg-[#faf3dd]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-black text-black mb-10 text-center">Dom älskar oss</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t,idx)=>(
            <div key={idx} className={`${border} rounded-[20px] bg-white p-6 ${shadow} ${shadowHover} transition-all`}>
              <Stars count={t.rating}/>
              <p className="text-black/60 text-sm font-medium leading-relaxed mt-3 mb-5">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-3 border-t-[3px] border-black/10">
                <div className={`w-10 h-10 rounded-full overflow-hidden ${border}`}>
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover"/>
                </div>
                <div>
                  <p className="text-black font-black text-sm">{t.name}</p>
                  <p className="text-black/40 text-xs font-bold">{t.city}</p>
                </div>
                <div className={`ml-auto ${colors[idx]} ${border} rounded-full w-8 h-8 flex items-center justify-center text-xs font-black`}>{t.age}</div>
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
    <footer className="bg-black py-6 border-t-[3px] border-[#ffe156]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[#ffe156]/50 text-xs font-bold">&copy; {new Date().getFullYear()} {BRAND}</p>
        <div className="flex gap-5">{['Villkor','Integritet','Kontakt'].map(l=><a key={l} href="#" className="text-white/30 hover:text-[#ffe156] text-xs font-bold transition-colors">{l}</a>)}</div>
        <p className="text-white/15 text-[10px] font-bold">Made by Pranshu</p>
      </div>
    </footer>
  );
}

export default function Layout2() {
  const [open, setOpen] = useState(false);
  return (<><Nav open={open} setOpen={setOpen}/><Hero/><Profiles/><Features/><Testimonials/><Footer/></>);
}