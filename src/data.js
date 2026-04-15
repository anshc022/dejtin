export const regions = [
  'Stockholm', 'Göteborg', 'Malmö', 'Uppsala', 'Västerås',
  'Örebro', 'Linköping', 'Helsingborg', 'Jönköping', 'Norrköping',
  'Lund', 'Umeå', 'Gävle', 'Borås', 'Sundsvall',
];

export const days = Array.from({ length: 31 }, (_, i) => i + 1);
export const months = [
  'Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni',
  'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December',
];
const currentYear = new Date().getFullYear();
export const years = Array.from({ length: 80 }, (_, i) => currentYear - 18 - i);

export const profiles = [
  { name: 'Emma', age: 26, city: 'Stockholm', img: 'https://i.pravatar.cc/300?img=1', online: true },
  { name: 'Sofia', age: 24, city: 'Göteborg', img: 'https://i.pravatar.cc/300?img=5', online: true },
  { name: 'Linnéa', age: 28, city: 'Malmö', img: 'https://i.pravatar.cc/300?img=9', online: false },
  { name: 'Maja', age: 23, city: 'Uppsala', img: 'https://i.pravatar.cc/300?img=16', online: true },
  { name: 'Ella', age: 27, city: 'Lund', img: 'https://i.pravatar.cc/300?img=20', online: false },
  { name: 'Wilma', age: 25, city: 'Västerås', img: 'https://i.pravatar.cc/300?img=23', online: true },
  { name: 'Saga', age: 29, city: 'Örebro', img: 'https://i.pravatar.cc/300?img=25', online: true },
  { name: 'Freja', age: 22, city: 'Helsingborg', img: 'https://i.pravatar.cc/300?img=32', online: false },
];

export const testimonials = [
  {
    name: 'Anna K.', age: 28, city: 'Stockholm',
    text: 'Jag hittade min pojkvän här efter bara två veckor! Bästa dejtingsidan jag testat.',
    rating: 5, img: 'https://i.pravatar.cc/100?img=44',
  },
  {
    name: 'Marcus L.', age: 32, city: 'Göteborg',
    text: 'Enkel att använda och massor av riktiga profiler. Rekommenderar starkt!',
    rating: 5, img: 'https://i.pravatar.cc/100?img=53',
  },
  {
    name: 'Johanna S.', age: 25, city: 'Malmö',
    text: 'Äntligen en svensk dejtingsida som faktiskt fungerar. Träffade min sambo här!',
    rating: 5, img: 'https://i.pravatar.cc/100?img=47',
  },
  {
    name: 'Erik B.', age: 30, city: 'Uppsala',
    text: 'Super bra matchning! Fick kontakt med fantastiska människor direkt.',
    rating: 4, img: 'https://i.pravatar.cc/100?img=60',
  },
  {
    name: 'Lisa M.', age: 27, city: 'Lund',
    text: 'Trygg och säker sida. Älskar att den är fokuserad på svenska singlar.',
    rating: 5, img: 'https://i.pravatar.cc/100?img=39',
  },
  {
    name: 'Oscar T.', age: 34, city: 'Västerås',
    text: 'Hittade min flickvän här. Vi har nu varit tillsammans i 6 månader!',
    rating: 5, img: 'https://i.pravatar.cc/100?img=57',
  },
];

export const features = [
  {
    title: 'Chatta direkt',
    desc: 'Skicka meddelanden och börja en konversation med dina matchningar direkt.',
    iconPath: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
  },
  {
    title: 'Smart Matchning',
    desc: 'Vår algoritm hittar personer som matchar dina intressen och personlighet.',
    iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    title: 'Säkert & Tryggt',
    desc: 'Din integritet är viktig för oss. Alla profiler verifieras noga.',
    iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    title: 'Nära Dig',
    desc: 'Hitta singlar i din stad eller region. Avstånd ska inte vara ett hinder.',
    iconPath: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
  },
];
