
const HEXNEY_PRODUCTS = [
  {
    id: 'luxury-dealership',
    title: 'Luxury Car Dealership',
    image: 'assets/img/thumb-dealership.jpg',
    badge: 'NEW',
    price: '€19.99',
    category: 'Vehicles',
    tags: ['ESX', 'ox_lib'],
    status: 'Stable',
    tebex: 'https://your-tebex-store.tebex.io',
    desc: {
      en: 'Advanced vehicle dealership with financing, test drives and management system.',
      hu: 'Fejlett autókereskedés finanszírozással, tesztvezetéssel és menedzsment rendszerrel.'
    }
  },
  {
    id: 'vehicle-registration',
    title: 'Vehicle Registration',
    image: 'assets/img/thumb-registration.jpg',
    price: '€14.99',
    category: 'Roleplay',
    tags: ['ESX', 'oxmysql'],
    status: 'Stable',
    tebex: 'https://your-tebex-store.tebex.io',
    desc: {
      en: 'Realistic vehicle registration, insurance and ownership system with database support.',
      hu: 'Realisztikus forgalmi, biztosítási és tulajdonosi rendszer adatbázis támogatással.'
    }
  },
  {
    id: 'advanced-inventory',
    title: 'Advanced Inventory',
    image: 'assets/img/thumb-inventory.jpg',
    price: '€16.99',
    category: 'Inventory',
    tags: ['ox_inventory', 'ox_lib'],
    status: 'Beta',
    tebex: 'https://your-tebex-store.tebex.io',
    desc: {
      en: 'Powerful ox_inventory based system with slots, weight, weapons and unique items.',
      hu: 'Erős ox_inventory alapú rendszer slotokkal, súllyal, fegyverekkel és egyedi itemekkel.'
    }
  },
  {
    id: 'job-center-pro',
    title: 'Job Center Pro',
    image: 'assets/img/thumb-jobcenter.jpg',
    price: '€17.99',
    category: 'Jobs',
    tags: ['ESX', 'ox_target'],
    status: 'Stable',
    tebex: 'https://your-tebex-store.tebex.io',
    desc: {
      en: 'Advanced job system with grades, custom salaries, duties and notifications.',
      hu: 'Fejlett munkarendszer rangokkal, egyedi fizetésekkel, duty kezeléssel és értesítésekkel.'
    }
  }
];

const HEXNEY_DISCORD = {
  invite: 'https://discord.gg/your-discord',
  label: 'Hexney Development Discord',
  channels: ['#announcements', '#customer-support', '#changelog', '#previews'],
  supportHours: '24/7 ticket support'
};

const HEXNEY_STANDARDS = [
  {
    key: 'architecture',
    icon: '⌬',
    en: { title: 'Architecture first', desc: 'Clean structure, reusable components, configurable product data and clear separation between content, style and logic.' },
    hu: { title: 'Architektúra először', desc: 'Tiszta struktúra, újrahasznosítható elemek, külön termékadatok és átlátható HTML/CSS/JS felépítés.' }
  },
  {
    key: 'ux',
    icon: '◈',
    en: { title: 'UX decisions', desc: 'Clear buying path, strong CTAs, searchable products, trust signals, bilingual content and fewer distractions.' },
    hu: { title: 'UX döntések', desc: 'Egyértelmű vásárlási útvonal, erős CTA-k, kereshető termékek, bizalmi elemek és két nyelvű tartalom.' }
  },
  {
    key: 'performance',
    icon: '↯',
    en: { title: 'Performance', desc: 'Optimized static delivery, local image assets, lazy loading, reduced motion support and lightweight JavaScript.' },
    hu: { title: 'Teljesítmény', desc: 'Optimalizált statikus működés, helyi képek, lazy loading, reduced motion támogatás és könnyű JavaScript.' }
  },
  {
    key: 'accessibility',
    icon: '◎',
    en: { title: 'Accessibility', desc: 'Semantic layout, skip link, aria labels, keyboard-friendly controls, readable contrast and focus states.' },
    hu: { title: 'Akadálymentesség', desc: 'Szemantikus felépítés, skip link, aria label-ek, billentyűzettel kezelhető elemek, kontraszt és fókusz állapotok.' }
  },
  {
    key: 'security',
    icon: '◆',
    en: { title: 'Security basics', desc: 'External links use safe rel attributes, no inline dependency on unknown scripts, and checkout/support links are isolated.' },
    hu: { title: 'Biztonsági alapok', desc: 'Biztonságos külső linkek, nincs ismeretlen scriptfüggőség, a checkout/support linkek jól elkülönítve vannak.' }
  },
  {
    key: 'seo',
    icon: '✦',
    en: { title: 'SEO & content', desc: 'Better metadata, content hierarchy, product copy, structured value proposition and multilingual landing sections.' },
    hu: { title: 'SEO és tartalom', desc: 'Jobb meta adatok, tartalmi hierarchia, termékszövegek, értékajánlat és többnyelvű szekciók.' }
  },
  {
    key: 'testing',
    icon: '✓',
    en: { title: 'Testing mindset', desc: 'Built so you can check product filters, language switch, responsive layout, link targets and visual regressions easily.' },
    hu: { title: 'Tesztelhető működés', desc: 'Könnyen ellenőrizhető termékfilter, nyelvváltó, reszponzív nézet, linkek és vizuális módosítások.' }
  },
  {
    key: 'maintenance',
    icon: '∞',
    en: { title: 'Scalable maintenance', desc: 'Products and Discord data live in products.js, so adding scripts does not require editing the whole homepage.' },
    hu: { title: 'Skálázható karbantartás', desc: 'A termékek és Discord adatok a products.js-ben vannak, így új script hozzáadásához nem kell az egész oldalt átírni.' }
  }
];
