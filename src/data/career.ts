// The roles on the "My career path" timeline, oldest first.
// When you change position, add one more entry at the end of this list:
// the timeline post and the portfolio list update on the next deploy.
//
// from / to: years into my career (0 = the year I started). Leave `to` out
// for the current role. `stage` groups roles under a heading on the page.

export type Stage = 'consulting' | 'corporate';

export interface Role {
  stage: Stage;
  from: number;
  to?: number;
  en: { title: string; company: string; summary: string };
  fa: { title: string; company: string; summary: string };
}

export const career: Role[] = [
  {
    stage: 'consulting',
    from: 0,
    to: 4,
    en: {
      title: 'SAP PP consultant',
      company: 'Consulting firms in Iran',
      summary: 'I started as an SAP production planning (PP) consultant with no prior experience, on a project at a well-known car-parts maker. Sanctions meant almost no training in Iran, so I learned from whatever I could find online and from the Turkish consultants on the project; when they left Iran midway, our own team had to finish it. Over four years and three companies I took projects from preparation to go-live and hypercare, learning PP end to end: configuration, blueprint workshops, testing and data migration.',
    },
    fa: {
      title: 'مشاور SAP PP',
      company: 'شرکت‌های مشاوره در ایران',
      summary: 'بدون هیچ سابقه کاری، به‌عنوان مشاور پیاده‌سازی ماژول برنامه‌ریزی تولید (SAP PP) در پروژه یک شرکت معروف قطعه‌سازی خودرو شروع کردم. به‌خاطر تحریم‌ها تقریباً هیچ منبع و دوره آموزشی در ایران نبود؛ از هر محتوایی که در اینترنت پیدا می‌شد و از مشاوران ترک پروژه یاد گرفتم و وقتی آن‌ها در میانه کار از ایران رفتند، ادامه پروژه با تیم خودمان بود. در چهار سال و سه شرکت، پروژه‌ها را از فاز آماده‌سازی تا راه‌اندازی و پشتیبانی پس از آن پیش بردیم و ماژول تولید را در همه ابعادش آموختم: پیکربندی، کارگاه‌های بلوپرینت، تست و انتقال داده.',
    },
  },
  {
    stage: 'consulting',
    from: 4,
    to: 6,
    en: {
      title: 'SAP PS/QM and pre-sales consultant',
      company: 'An SAP consulting firm in Iran',
      summary: 'At a new consulting firm with no active manufacturing clients, I learned SAP Project System (PS) and Quality Management (QM) and supported pre-sales: running demos for prospects and setting up systems for proofs of concept. After four years deep in one module, I became T-shaped: broad knowledge of several SAP modules and how they connect, while my production planning expertise kept deepening.',
    },
    fa: {
      title: 'مشاور SAP PS/QM و پیش‌فروش',
      company: 'یک شرکت مشاوره SAP در ایران',
      summary: 'در شرکت مشاوره تازه‌ای که در آن زمان مشتری تولیدی فعال نداشت، ماژول‌های سیستم پروژه (SAP PS) و مدیریت کیفیت (QM) را یاد گرفتم و در پیش‌فروش کمک می‌کردم: برگزاری دمو برای مشتریان بالقوه و آماده‌کردن سیستم برای اثبات مفهوم (POC). پس از چهار سال تمرکز عمیق بر یک ماژول، دانشی T-شکل پیدا کردم: شناخت کلی چند ماژول SAP و ارتباط میان آن‌ها، در حالی که دانش برنامه‌ریزی تولیدم عمیق‌تر هم می‌شد.',
    },
  },
  {
    stage: 'consulting',
    from: 6,
    to: 8,
    en: {
      title: 'SAP logistics team lead',
      company: 'Consulting projects at a large food company and a large home-appliance maker in Iran',
      summary: 'After my first daughter was born, I changed company. I worked as production and project system consultant and led all consultants in logistics: MM, SD, PP, warehouse management and PS. It was my first people-management role; in a small, flat consulting firm it taught me hiring, finding talent and helping junior consultants grow faster.',
    },
    fa: {
      title: 'سرپرست تیم لجستیک SAP',
      company: 'پروژه‌های مشاوره در یک شرکت بزرگ غذایی و یک شرکت بزرگ لوازم خانگی در ایران',
      summary: 'پس از تولد دختر اولم شرکتم را عوض کردم. مشاور تولید و سیستم پروژه بودم و سرپرستی همه مشاوران حوزه لجستیک را بر عهده داشتم: MM، SD، تولید، انبار و PS. این اولین مسئولیت مدیریت افراد من بود؛ در یک شرکت مشاوره کوچک با ساختار تخت، استخدام، پیدا کردن استعدادها و کمک به مشاوران تازه‌کار برای رشد سریع‌تر را یاد گرفتم.',
    },
  },
  {
    stage: 'corporate',
    from: 8,
    to: 9,
    en: {
      title: 'Head of SAP',
      company: 'The largest hygiene-products manufacturer in Iran',
      summary: 'After my second daughter was born, I moved from consulting to the client side for the first time, as head of ERP with a small in-house SAP team. The implementation partner had left Iran because of sanctions and the SAP project was half done. With my team and a few hand-picked consultants, and no large implementation contract, we took the group’s largest manufacturing company live on all core modules in under five months.',
    },
    fa: {
      title: 'مدیر SAP',
      company: 'بزرگ‌ترین تولیدکننده محصولات بهداشتی در ایران',
      summary: 'پس از تولد دختر دومم، برای اولین بار از شرکت‌های مشاوره به سمت کارفرما رفتم و با یک تیم چندنفره از مشاوران داخلی SAP، مدیر ERP شدم. شرکت پیاده‌ساز به‌خاطر تحریم‌ها از ایران رفته بود و پروژه نیمه‌کاره مانده بود. با تیمم و چند مشاور دست‌چین‌شده، بدون قرارداد بزرگ با یک شرکت پیاده‌ساز، بزرگ‌ترین شرکت تولیدی مجموعه را در کمتر از پنج ماه در همه ماژول‌های اصلی راه‌اندازی کردیم.',
    },
  },
  {
    stage: 'corporate',
    from: 9,
    to: 10,
    en: {
      title: 'Head of Applications',
      company: 'The largest hygiene-products manufacturer in Iran',
      summary: 'I also took on the BI and data analytics team and led enterprise applications for another year. The corporate world was very different from consulting: wider and more complex people management, IT supplier relationships, contracts and renewals, budgeting, and stakeholder management across several layers of management.',
    },
    fa: {
      title: 'مدیر نرم‌افزارهای سازمانی',
      company: 'بزرگ‌ترین تولیدکننده محصولات بهداشتی در ایران',
      summary: 'مسئولیت تیم هوش تجاری و تحلیل داده را هم پذیرفتم و یک سال دیگر مدیر ارشد نرم‌افزارهای سازمانی بودم. دنیای کارفرما با شرکت‌های مشاوره بسیار متفاوت بود: مدیریت افراد گسترده‌تر و پیچیده‌تر، رابطه با تأمین‌کنندگان فناوری اطلاعات، قراردادها و تمدیدها، بودجه‌ریزی و مدیریت ذی‌نفعان در سازمانی با چندین لایه مدیریتی.',
    },
  },
  {
    stage: 'corporate',
    from: 10,
    to: 11,
    en: {
      title: 'Global project manager',
      company: 'A well-known international sportswear brand, Germany',
      summary: 'After moving to Germany, I worked at an international brand that most of us know for its shoes and sportswear, as project manager for a third-party logistics (3PL) e-commerce warehouse in a global programme. I learned to work in international teams and with a logistics partner, to plan IT coordination and interfaces in a project like this and to separate roles clearly; settling into a new country and culture was one of the biggest lessons of that year.',
    },
    fa: {
      title: 'مدیر پروژه جهانی',
      company: 'یک برند بین‌المللی شناخته‌شده پوشاک و لوازم ورزشی، آلمان',
      summary: 'پس از مهاجرت به آلمان، در برندی بین‌المللی که بیشتر ما آن را با کفش‌ها و لوازم ورزشی‌اش می‌شناسیم، مدیر پروژه انبار تجارت الکترونیک با یک شرکت لجستیک طرف سوم (3PL) در یک برنامه جهانی بودم. همکاری در تیم‌های بین‌المللی و با شریک لجستیک، برنامه‌ریزی هماهنگی‌های فناوری اطلاعات و رابط‌ها در چنین پروژه‌ای و تفکیک روشن نقش‌ها را یاد گرفتم؛ جاافتادن در فضای تازه هم از بزرگ‌ترین درس‌های آن سال بود.',
    },
  },
  {
    stage: 'corporate',
    from: 11,
    to: 14,
    en: {
      title: 'Global SAP procurement consultant',
      company: 'A luxury-goods manufacturer, Germany',
      summary: 'After so many changes, I chose to return to functional work for a while, which has always fascinated me. I deepened my expertise in procurement: SAP MM, or procure-to-pay (P2P) as it is called today, and got to know SAP Ariba.',
    },
    fa: {
      title: 'مشاور جهانی SAP در حوزه تدارکات',
      company: 'یک تولیدکننده محصولات لوکس، آلمان',
      summary: 'پس از آن همه تغییر، دوست داشتم مدتی در حوزه امن خودم باشم و به نقش فانکشنال برگشتم که همیشه برایم جذاب بوده است. تخصصم را در حوزه خرید و تدارکات عمیق‌تر کردم: ماژول SAP MM یا به تعبیر امروز فرایند خرید تا پرداخت (P2P)، و با SAP Ariba آشنا شدم.',
    },
  },
  {
    stage: 'corporate',
    from: 14,
    en: {
      title: 'Global team lead: FI/CO, procurement and HR',
      company: 'An international company, Germany',
      summary: 'I lead the SAP team for the CFO and HR areas: consultants and product managers in finance, controlling, procurement and HR. I also own a portfolio of about a hundred applications in these areas, including managing their suppliers and maintaining and growing our digital portfolio.',
    },
    fa: {
      title: 'سرپرست تیم جهانی: مالی و کنترلینگ، تدارکات و منابع انسانی',
      company: 'یک شرکت بین‌المللی، آلمان',
      summary: 'سرپرست تیم SAP برای حوزه‌های مالی (CFO) و منابع انسانی هستم و تیم مشاوران و مدیران محصول در حوزه‌های مالی، کنترلینگ، تدارکات و منابع انسانی را مدیریت می‌کنم. پورتفولیویی از حدود صد نرم‌افزار در این حوزه‌ها هم با من است، از مدیریت تأمین‌کنندگان تا نگهداری و توسعه پورتفولیوی دیجیتال‌مان.',
    },
  },
];

export const currentRole = career[career.length - 1];
