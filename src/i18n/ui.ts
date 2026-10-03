export const languages = { en: 'English', fa: 'فارسی' } as const;
export type Lang = keyof typeof languages;
export const langs = Object.keys(languages) as Lang[];

export const dir = (lang: Lang) => (lang === 'fa' ? 'rtl' : 'ltr');

export const ui = {
  en: {
    'site.name': 'expertochange',
    'site.tagline': 'Career lessons, books, and stories from my life.',
    'nav.portfolio': 'Portfolio',
    'nav.books': 'Books',
    'nav.memories': 'Memories',
    'nav.contact': 'Contact me',
    'home.intro':
      'Welcome. This is where I share my professional journey, the books that shaped me, and the experiences that taught me the most.',
    'home.portfolio': 'My career path, the work behind it, and lessons for early-career builders.',
    'home.books': 'Notes and reviews of the books I have read.',
    'home.memories': 'Personal stories and what they taught me.',
    'portfolio.title': 'Job portfolio',
    'portfolio.lead': 'Case studies from my career: the situation, what I did, the result, and what I learned.',
    'portfolio.role': 'Role',
    'portfolio.organization': 'Organization',
    'portfolio.period': 'Period',
    'books.title': 'Books read',
    'books.lead': 'What I read, why it mattered, and who should read it next.',
    'books.author': 'Author',
    'books.rating': 'Rating',
    'books.takeaways': 'Three takeaways',
    'books.recommendedFor': 'Who should read it',
    'memories.title': 'Memories and experience',
    'memories.lead': 'Stories from my life and work, and what I see in them now.',
    'common.readMore': 'Read more',
    'common.back': 'Back to',
    'common.empty': 'New pieces are on the way.',
    'common.otherLang': 'خواندن به فارسی',
    'footer.rights': 'All rights reserved.',
    'sort.label': 'Sort by',
    'sort.newest': 'Newest first',
    'sort.oldest': 'Oldest first',
    'sort.popular': 'Most popular',
    'sort.rating': 'Highest rated',
    'sort.title': 'Title A to Z',
    'search.open': 'Search',
    'search.label': 'Search the site',
    'search.placeholder': 'Search by keyword',
    'search.none': 'Nothing found. Try another word.',
    'search.close': 'Close',
  },
  fa: {
    'site.name': 'expertochange',
    'site.tagline': 'درس‌های کاری، کتاب‌ها و داستان‌هایی از زندگی من.',
    'nav.portfolio': 'سوابق کاری',
    'nav.books': 'کتاب‌ها',
    'nav.memories': 'خاطرات',
    'nav.contact': 'تماس با من',
    'home.intro':
      'خوش آمدید. اینجا مسیر حرفه‌ای‌ام، کتاب‌هایی که مرا ساختند و تجربه‌هایی که بیشترین درس را به من دادند، به اشتراک می‌گذارم.',
    'home.portfolio': 'مسیر شغلی من، کارهایی که پشت آن است و درس‌هایی برای کسانی که تازه کارشان را شروع کرده‌اند.',
    'home.books': 'یادداشت‌ها و نقدهای کتاب‌هایی که خوانده‌ام.',
    'home.memories': 'داستان‌های شخصی و آنچه به من آموختند.',
    'portfolio.title': 'سوابق کاری',
    'portfolio.lead': 'نمونه‌هایی از مسیر کاری من: موقعیت، کاری که انجام دادم، نتیجه و آنچه آموختم.',
    'portfolio.role': 'نقش',
    'portfolio.organization': 'سازمان',
    'portfolio.period': 'دوره',
    'books.title': 'کتاب‌هایی که خوانده‌ام',
    'books.lead': 'چه خواندم، چرا برایم مهم بود و به چه کسی پیشنهادش می‌کنم.',
    'books.author': 'نویسنده',
    'books.rating': 'امتیاز',
    'books.takeaways': 'سه نکته کلیدی',
    'books.recommendedFor': 'پیشنهاد برای چه کسی',
    'memories.title': 'خاطرات و تجربه‌ها',
    'memories.lead': 'داستان‌هایی از زندگی و کارم و نگاه امروزم به آن‌ها.',
    'common.readMore': 'ادامه مطلب',
    'common.back': 'بازگشت به',
    'common.empty': 'مطالب تازه به‌زودی منتشر می‌شود.',
    'common.otherLang': 'Read in English',
    'footer.rights': 'همه حقوق محفوظ است.',
    'sort.label': 'مرتب‌سازی',
    'sort.newest': 'تازه‌ترین',
    'sort.oldest': 'قدیمی‌ترین',
    'sort.popular': 'پربازدیدترین',
    'sort.rating': 'بالاترین امتیاز',
    'sort.title': 'عنوان (الفبایی)',
    'search.open': 'جستجو',
    'search.label': 'جستجو در سایت',
    'search.placeholder': 'جستجو با کلمه کلیدی',
    'search.none': 'چیزی پیدا نشد. کلمه دیگری را امتحان کنید.',
    'search.close': 'بستن',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];
export const t = (lang: Lang, key: UIKey) => ui[lang][key];

export const formatDate = (lang: Lang, date: Date) =>
  new Intl.DateTimeFormat(lang === 'fa' ? 'fa-IR-u-ca-persian' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);

export const formatNumber = (lang: Lang, n: number) =>
  new Intl.NumberFormat(lang === 'fa' ? 'fa-IR' : 'en-US').format(n);

export const otherLang = (lang: Lang): Lang => (lang === 'en' ? 'fa' : 'en');
