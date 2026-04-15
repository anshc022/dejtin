/*  LAYOUT 3 — WARM CLAY / ORGANIC
    Earthy warm palette (terracotta, cream, sage, clay brown),
    soft pill shapes, large rounded corners, organic feel,
    warm shadows, handcrafted vibe, no sharp edges.             */

import { useState } from 'react';
import { regions, days, months, years, profiles, features, testimonials } from '../data';

const BRAND = 'DejtingParadiset';

/* ── Stars ── */
function Stars({ count }) {
  return (
    <div className="flex gap-0.5">{[...Array(5)].map((_,i)=>(
      <span key={i} className={`text-sm ${i < count ? 'text-amber-600' : 'text-[#d4c5a9]'}`}>&#9733;</span>
    ))}</div>
  );
}

/* ── Nav ── */
function Nav({ open, setOpen }) {
  const links = ['Hem','Medlemmar','Om oss','Recensioner'];
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-[#f4e8d1]/95 backdrop-blur-sm border-b border-[#d4c5a9]/60">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
        <a href="#" className="font-extrabold text-[#5c3d2e] text-lg tracking-tight">dejting<span className="text-[#c75c2e]">paradiset</span></a>
        <div className="hidden md:flex items-center gap-6">
          {links.map(l=><a key={l} href={`#w-${l.toLowerCase().replace(' ','-')}`} className="text-[#5c3d2e]/60 hover:text-[#5c3d2e] text-[13px] font-semibold transition-colors">{l}</a>)}
          <a href="#w-form" className="bg-[#c75c2e] text-white text-[13px] font-bold px-5 py-2 rounded-full hover:bg-[#a94b24] transition-colors shadow-sm">Logga in / Skapa</a>
        </div>
        <button onClick={()=>setOpen(!open)} className="md:hidden text-[#5c3d2e]" aria-label="Meny">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={open?'M6 18L18 6M6 6l12 12':'M4 8h16M4 16h16'}/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-3 flex flex-col gap-1 border-t border-[#d4c5a9]/60 pt-3 bg-[#f4e8d1]">
          {links.map(l=><a key={l} href={`#w-${l.toLowerCase().replace(' ','-')}`} onClick={()=>setOpen(false)} className="text-[#5c3d2e]/60 text-sm font-semibold py-1">{l}</a>)}
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
  const inp = 'w-full px-4 py-2.5 bg-white border border-[#d4c5a9] rounded-2xl text-[#3d2519] placeholder-[#5c3d2e]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#c75c2e] focus:border-transparent';
  const sel = 'flex-1 px-3 py-2.5 bg-white border border-[#d4c5a9] rounded-2xl text-[#5c3d2e]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#c75c2e] appearance-none';

  return (
    <section id="w-hem" className="min-h-screen flex items-center bg-[#f4e8d1] pt-14 relative overflow-hidden">
      {/* Organic deco */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#e8d5b7] rounded-full opacity-60" />
      <div className="absolute bottom-10 -left-10 w-60 h-60 bg-[#c75c2e]/10 rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#c75c2e]/10 text-[#c75c2e] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-[#c75c2e] rounded-full" />
              Över 54 000 medlemmar i Sverige
            </div>
            <h1 className="text-[clamp(2.2rem,5vw,4.2rem)] font-black text-[#3d2519] leading-[1.08] mb-5">
              Kärleken börjar med ett enkelt hej.
            </h1>
            <p className="text-[#5c3d2e]/60 text-lg leading-relaxed max-w-md mb-6">
              {BRAND} kopplar ihop singlar som faktiskt passar ihop. Anmäl dig gratis och se vem som väntar.
            </p>
            <div className="relative mb-8 rounded-[32px] overflow-hidden h-60 w-full max-w-md shadow-lg shadow-[#c75c2e]/10 border-4 border-white">
               <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Girl portrait" className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-8">
              {[['54K','Medlemmar'],['12K','Matchade par'],['4.9/5','Snittbetyg']].map(([n,l])=>(
                <div key={l}>
                  <div className="text-2xl font-black text-[#3d2519]">{n}</div>
                  <div className="text-[#5c3d2e]/40 text-xs font-semibold">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div id="w-form" className="bg-white rounded-[28px] p-7 shadow-xl shadow-[#d4c5a9]/30 border border-[#ebe3d3]">
            <div className="flex bg-[#f9f3ea] rounded-2xl p-1 mb-6 border border-[#ebe3d3]">
              <button onClick={()=>setIsLogin(false)} className={`flex-1 py-2 text-sm font-bold rounded-xl transition-all ${!isLogin?'bg-white text-[#c75c2e] shadow-sm':'text-[#5c3d2e]/50 hover:text-[#c75c2e]'}`}>Skapa konto</button>
              <button onClick={()=>setIsLogin(true)} className={`flex-1 py-2 text-sm font-bold rounded-xl transition-all ${isLogin?'bg-white text-[#c75c2e] shadow-sm':'text-[#5c3d2e]/50 hover:text-[#c75c2e]'}`}>Logga in</button>
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
                  <span className="text-[#5c3d2e]/40 text-xs font-semibold block mb-1">Födelsedatum</span>
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
                  <input type="checkbox" name="terms" checked={f.terms} onChange={c} required className="mt-0.5 w-4 h-4 accent-[#c75c2e] rounded" />
                  <span className="text-[#5c3d2e]/40 text-xs">Jag godkänner <a href="#" className="text-[#c75c2e] font-semibold hover:underline">villkor</a> & <a href="#" className="text-[#c75c2e] font-semibold hover:underline">policy</a></span>
                </label>
                <button type="submit" className="w-full py-3 bg-[#c75c2e] hover:bg-[#a94b24] text-white font-bold rounded-2xl text-sm transition-colors shadow-md shadow-[#c75c2e]/20 mt-2">Registrera mig</button>
              </form>
            ) : (
              <form onSubmit={e=>{e.preventDefault();alert('Välkommen tillbaka!');}} className="space-y-4">
                <input type="email" name="email" placeholder="E-post" required value={f.email} onChange={c} className={inp} />
                <input type="password" name="password" placeholder="Lösenord" required value={f.password} onChange={c} className={inp} />
                <div className="text-right">
                  <a href="#" className="text-[#c75c2e] font-semibold hover:underline text-xs">Glömt lösenord?</a>
                </div>
                <button type="submit" className="w-full py-3 bg-[#c75c2e] hover:bg-[#a94b24] text-white font-bold rounded-2xl text-sm transition-colors shadow-md shadow-[#c75c2e]/20 mt-2">Logga in</button>
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
    <section id="w-medlemmar" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-black text-[#3d2519] mb-1">Nya ansikten</h2>
        <p className="text-[#5c3d2e]/50 font-medium mb-10">Senast registrerade medlemmar</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {profiles.map((p,idx)=>(
            <div key={idx} className="group rounded-[24px] overflow-hidden bg-[#f9f3ea] hover:shadow-lg hover:shadow-[#c75c2e]/10 transition-all">
              <div className="aspect-square relative overflow-hidden rounded-t-[24px]">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                {p.online && <div className="absolute top-3 left-3 bg-[#7cb342] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">Online</div>}
              </div>
              <div className="p-3">
                <p className="text-[#3d2519] font-bold text-[15px]">{p.name}, {p.age}</p>
                <p className="text-[#5c3d2e]/40 text-xs font-medium">{p.city}</p>
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
  const icons_bg = ['bg-[#c75c2e]/10','bg-[#7cb342]/10','bg-[#d4a053]/10','bg-[#6d8b74]/10'];
  const icons_txt = ['text-[#c75c2e]','text-[#7cb342]','text-[#d4a053]','text-[#6d8b74]'];
  return (
    <section id="w-om-oss" className="py-24 bg-[#f9f3ea]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-2xl font-black text-[#3d2519]">Så fungerar det</h2>
          <p className="text-[#5c3d2e]/50 font-medium mt-2">Fyra steg till din nästa dejt.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {features.map((ft,idx)=>(
            <div key={idx} className="bg-white rounded-[22px] p-6 hover:shadow-lg hover:shadow-[#d4c5a9]/30 transition-all border border-[#ebe3d3]">
              <div className={`w-12 h-12 ${icons_bg[idx]} rounded-2xl flex items-center justify-center mb-4`}>
                <svg className={`w-6 h-6 ${icons_txt[idx]}`} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={ft.iconPath}/></svg>
              </div>
              <h3 className="text-[#3d2519] font-bold text-lg mb-2">{ft.title}</h3>
              <p className="text-[#5c3d2e]/50 text-sm leading-relaxed">{ft.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-[#c75c2e] rounded-[28px] p-10 sm:p-14 text-center relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"/>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full"/>
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 relative">Redo att prova?</h3>
          <p className="text-white/70 mb-7 max-w-md mx-auto relative">Gå med {BRAND} idag och se hur enkelt det kan vara.</p>
          <a href="#w-register" className="inline-block bg-white text-[#c75c2e] px-8 py-3.5 rounded-full font-black hover:bg-[#f4e8d1] transition-colors relative">Kom igång nu</a>
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials ── */
function Testimonials() {
  return (
    <section id="w-recensioner" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-black text-[#3d2519] text-center mb-10">Vad folk tycker</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t,idx)=>(
            <div key={idx} className="bg-[#f9f3ea] rounded-[22px] p-5 hover:shadow-md hover:shadow-[#d4c5a9]/20 transition-all border border-[#ebe3d3]">
              <div className="flex items-center gap-3 mb-4">
                <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-[#d4c5a9]"/>
                <div>
                  <p className="text-[#3d2519] font-bold text-sm">{t.name}</p>
                  <p className="text-[#5c3d2e]/40 text-xs">{t.city}</p>
                </div>
              </div>
              <Stars count={t.rating}/>
              <p className="text-[#5c3d2e]/60 text-sm leading-relaxed mt-3">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA ── */
function CTA() {
  return (
    <section className="py-24 bg-[#f4e8d1]">
      <div className="max-w-5xl mx-auto px-4 text-center">
         <h2 className="text-2xl font-black text-[#3d2519]">Börja din resa här</h2>
         <p className="text-[#5c3d2e]/50 font-medium mt-1">Hitta någon som verkligen förstår dig.</p>
         <a href="#w-form" className="inline-block mt-8 bg-[#c75c2e] hover:bg-[#a94b24] text-white font-bold py-3 px-8 rounded-full transition-colors shadow-md shadow-[#c75c2e]/20">Skapa konto / Logga in</a>
      </div>
    </section>
  );
}

/* ── Footer ── */
function Footer() {
  return (
    <footer className="bg-[#3d2519] py-7">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[#c7a882]/50 text-xs font-medium">&copy; {new Date().getFullYear()} {BRAND}</p>
        <div className="flex gap-5">{['Villkor','Integritet','Kontakt'].map(l=><a key={l} href="#" className="text-[#c7a882]/40 hover:text-[#c7a882] text-xs font-medium transition-colors">{l}</a>)}</div>
        <p className="text-[#c7a882]/20 text-[10px]">Made by Pranshu</p>
      </div>
    </footer>
  );
}

export default function Layout3() {
  const [open, setOpen] = useState(false);
  return (<><Nav open={open} setOpen={setOpen}/><Hero/><Profiles/><Features/><Testimonials/><CTA/><Footer/></>);
}