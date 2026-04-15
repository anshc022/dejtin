const profiles = [
  { name: 'Emma', age: 26, city: 'Stockholm', img: 'https://i.pravatar.cc/300?img=1', online: true },
  { name: 'Sofia', age: 24, city: 'Göteborg', img: 'https://i.pravatar.cc/300?img=5', online: true },
  { name: 'Linnéa', age: 28, city: 'Malmö', img: 'https://i.pravatar.cc/300?img=9', online: false },
  { name: 'Maja', age: 23, city: 'Uppsala', img: 'https://i.pravatar.cc/300?img=16', online: true },
  { name: 'Ella', age: 27, city: 'Lund', img: 'https://i.pravatar.cc/300?img=20', online: false },
  { name: 'Wilma', age: 25, city: 'Västerås', img: 'https://i.pravatar.cc/300?img=23', online: true },
  { name: 'Saga', age: 29, city: 'Örebro', img: 'https://i.pravatar.cc/300?img=25', online: true },
  { name: 'Freja', age: 22, city: 'Helsingborg', img: 'https://i.pravatar.cc/300?img=32', online: false },
];

export default function Profiles() {
  return (
    <section id="profiles" className="py-24 bg-gradient-to-b from-dark-light to-dark relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Nyregistrerade
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Nyregistrerade <span className="text-primary">Kvinnor</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Se vilka som nyligen gått med. Kanske hittar du din match här?
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {profiles.map((p, i) => (
            <div
              key={i}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-primary/40 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent" />
                {p.online && (
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-green-500/20 backdrop-blur-sm px-2 py-1 rounded-full">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 text-xs font-medium">Online</span>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">{p.name}, {p.age}</h3>
                  <p className="text-white/60 text-sm flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {p.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#register"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-primary text-white px-8 py-3 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            Se alla medlemmar
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
