const testimonials = [
  {
    name: 'Anna K.',
    age: 28,
    city: 'Stockholm',
    text: 'Jag hittade min pojkvän här efter bara två veckor! Bästa dejtingsidan jag testat.',
    rating: 5,
    img: 'https://i.pravatar.cc/100?img=44',
  },
  {
    name: 'Marcus L.',
    age: 32,
    city: 'Göteborg',
    text: 'Enkel att använda och massor av riktiga profiler. Rekommenderar starkt!',
    rating: 5,
    img: 'https://i.pravatar.cc/100?img=53',
  },
  {
    name: 'Johanna S.',
    age: 25,
    city: 'Malmö',
    text: 'Äntligen en svensk dejtingsida som faktiskt fungerar. Träffade min sambo här!',
    rating: 5,
    img: 'https://i.pravatar.cc/100?img=47',
  },
  {
    name: 'Erik B.',
    age: 30,
    city: 'Uppsala',
    text: 'Super bra matchning! Fick kontakt med fantastiska människor direkt.',
    rating: 4,
    img: 'https://i.pravatar.cc/100?img=60',
  },
  {
    name: 'Lisa M.',
    age: 27,
    city: 'Lund',
    text: 'Trygg och säker sida. Älskar att den är fokuserad på svenska singlar.',
    rating: 5,
    img: 'https://i.pravatar.cc/100?img=39',
  },
  {
    name: 'Oscar T.',
    age: 34,
    city: 'Västerås',
    text: 'Hittade min flickvän här. Vi har nu varit tillsammans i 6 månader!',
    rating: 5,
    img: 'https://i.pravatar.cc/100?img=57',
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? 'text-gold' : 'text-white/20'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-dark to-dark-light relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Folk Älskar SingelPortalen
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Omdömen
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Hör vad våra medlemmar säger om sin upplevelse.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all"
            >
              <Stars count={t.rating} />
              <p className="text-white/70 mt-4 mb-6 text-sm leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/30"
                />
                <div>
                  <div className="text-white font-medium text-sm">{t.name}, {t.age}</div>
                  <div className="text-white/40 text-xs">{t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
