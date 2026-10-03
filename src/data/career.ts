// The roles on the "My career path" timeline, oldest first.
// When you change position, add one more entry at the end of this list:
// the timeline post and the portfolio list update on the next deploy.
//
// from / to: years into my career (0 = the year I started). Leave `to` out
// for the current role. `stage` groups roles under a heading on the page.
// `videos`: the long-form story videos for a role, as many as you like;
// each shows as a "Watch" link under the role once added.

export type Stage = 'consulting' | 'corporate';

export interface Role {
  stage: Stage;
  from: number;
  to?: number;
  en: { title: string; company: string; summary: string };
  fa: { title: string; company: string; summary: string };
  videos?: { url: string; en: string; fa: string }[];
}

export const career: Role[] = [
  {
    stage: 'consulting',
    from: 0,
    to: 4,
    en: {
      title: 'SAP PP consultant',
      company: 'Consulting firms in Iran',
      summary: 'No experience, no training under sanctions, and a factory waiting to go live. I learned SAP production planning from the internet and the people beside me, and when the foreign partner left mid-project, we finished it ourselves.',
    },
    fa: {
      title: 'مشاور SAP PP',
      company: 'شرکت‌های مشاوره در ایران',
      summary: 'بدون سابقه کار، بدون هیچ دوره آموزشی زیر سایه تحریم، و کارخانه‌ای که منتظر راه‌اندازی بود. برنامه‌ریزی تولید SAP را از اینترنت و از همکارانم آموختم، و وقتی شریک خارجی در میانه پروژه رفت، خودمان آن را به سرانجام رساندیم.',
    },
  },
  {
    stage: 'consulting',
    from: 4,
    to: 6,
    en: {
      title: 'SAP PS/QM and pre-sales consultant',
      company: 'An SAP consulting firm in Iran',
      summary: 'With no factory to serve, I chose breadth: project systems, quality management and pre-sales, where demos and proofs of concept earn trust before a project begins. Depth became a T-shape.',
    },
    fa: {
      title: 'مشاور SAP PS/QM و پیش‌فروش',
      company: 'یک شرکت مشاوره SAP در ایران',
      summary: 'وقتی کارخانه‌ای برای خدمت نبود، گستره را انتخاب کردم: سیستم پروژه، مدیریت کیفیت و پیش‌فروش، جایی که دموها و اثبات مفهوم پیش از آغاز هر پروژه اعتماد می‌سازند. عمق، شکل T به خود گرفت.',
    },
  },
  {
    stage: 'consulting',
    from: 6,
    to: 8,
    en: {
      title: 'SAP logistics team lead',
      company: 'Consulting projects at a large food company and a large home-appliance maker in Iran',
      summary: 'A new daughter, a new company and my first team. Leading the logistics consultants taught me that the best investment is helping others grow faster than I did.',
    },
    fa: {
      title: 'سرپرست تیم لجستیک SAP',
      company: 'پروژه‌های مشاوره در یک شرکت بزرگ غذایی و یک شرکت بزرگ لوازم خانگی در ایران',
      summary: 'دختری تازه، شرکتی تازه و اولین تیمم. سرپرستی مشاوران لجستیک به من آموخت که بهترین سرمایه‌گذاری، کمک به رشد سریع‌تر دیگران است.',
    },
  },
  {
    stage: 'corporate',
    from: 8,
    to: 9,
    en: {
      title: 'Head of SAP',
      company: 'The largest hygiene-products manufacturer in Iran',
      summary: 'I crossed to the client side to rescue an SAP project left half-done under sanctions. With a hand-picked team and no big implementation partner, we took the group’s largest factory live on every core module in under five months.',
    },
    fa: {
      title: 'مدیر SAP',
      company: 'بزرگ‌ترین تولیدکننده محصولات بهداشتی در ایران',
      summary: 'به سمت کارفرما رفتم تا پروژه‌ای را نجات دهم که زیر تحریم نیمه‌کاره مانده بود. با تیمی دست‌چین‌شده و بدون شریک پیاده‌سازی بزرگ، بزرگ‌ترین کارخانه مجموعه را در کمتر از پنج ماه در همه ماژول‌های اصلی راه‌اندازی کردیم.',
    },
  },
  {
    stage: 'corporate',
    from: 9,
    to: 10,
    en: {
      title: 'Head of Applications',
      company: 'The largest hygiene-products manufacturer in Iran',
      summary: 'Owning the whole application landscape, BI included, taught me the corporate game: suppliers, contracts, budgets and stakeholders across many layers. Technology was the easy part.',
    },
    fa: {
      title: 'مدیر نرم‌افزارهای سازمانی',
      company: 'بزرگ‌ترین تولیدکننده محصولات بهداشتی در ایران',
      summary: 'مسئولیت کل نرم‌افزارهای سازمان، از جمله هوش تجاری، بازی دنیای کارفرما را به من آموخت: تأمین‌کنندگان، قراردادها، بودجه و ذی‌نفعان در لایه‌های متعدد مدیریتی. فناوری بخش ساده ماجرا بود.',
    },
  },
  {
    stage: 'corporate',
    from: 10,
    to: 11,
    en: {
      title: 'Global project manager',
      company: 'A well-known international sportswear brand, Germany',
      summary: 'A new country, a global brand and an e-commerce warehouse run by a logistics partner. Coordinating partners, interfaces and roles across borders, I learned that integration starts with yourself.',
    },
    fa: {
      title: 'مدیر پروژه جهانی',
      company: 'یک برند بین‌المللی شناخته‌شده پوشاک و لوازم ورزشی، آلمان',
      summary: 'کشوری تازه، برندی جهانی و انبار تجارت الکترونیکی که شریکی لجستیکی اداره‌اش می‌کرد. در هماهنگی شرکا، رابط‌ها و نقش‌ها در آن سوی مرزها آموختم که یکپارچه‌سازی از خود آدم شروع می‌شود.',
    },
  },
  {
    stage: 'corporate',
    from: 11,
    to: 14,
    en: {
      title: 'Global SAP procurement consultant',
      company: 'A luxury-goods manufacturer, Germany',
      summary: 'After so much change, I returned to the craft I love. Three years deep in procurement, from SAP MM and procure-to-pay to SAP Ariba, turned breadth back into mastery.',
    },
    fa: {
      title: 'مشاور جهانی SAP در حوزه تدارکات',
      company: 'یک تولیدکننده محصولات لوکس، آلمان',
      summary: 'پس از آن همه تغییر، به حرفه‌ای که دوستش دارم برگشتم. سه سال غرق‌شدن در تدارکات، از SAP MM و فرایند خرید تا پرداخت تا SAP Ariba، گستره را دوباره به استادی تبدیل کرد.',
    },
  },
  {
    stage: 'corporate',
    from: 14,
    en: {
      title: 'Global team lead: FI/CO, procurement and HR',
      company: 'An international company, Germany',
      summary: 'Today I lead the SAP team for finance, controlling, procurement and HR, and a portfolio of about a hundred applications. The work now is shaping where that portfolio goes next, and growing the people who will take it there.',
    },
    fa: {
      title: 'سرپرست تیم جهانی: مالی و کنترلینگ، تدارکات و منابع انسانی',
      company: 'یک شرکت بین‌المللی، آلمان',
      summary: 'امروز تیم SAP حوزه‌های مالی، کنترلینگ، تدارکات و منابع انسانی و پورتفولیویی از حدود صد نرم‌افزار را رهبری می‌کنم. کار امروز من ترسیم آینده این پورتفولیو و پرورش آدم‌هایی است که آن را به مقصد می‌رسانند.',
    },
  },
];

export const currentRole = career[career.length - 1];
