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
      company: 'Company name',
      summary: 'Two or three sentences: what you did, what you learned, and why you moved on.',
    },
    fa: {
      title: 'مشاور SAP PP',
      company: 'نام شرکت',
      summary: 'دو یا سه جمله: چه کاری انجام دادید، چه آموختید و چرا به نقش بعدی رفتید.',
    },
  },
  {
    stage: 'consulting',
    from: 4,
    to: 6,
    en: {
      title: 'SAP PS/QM and pre-sales consultant',
      company: 'Company name',
      summary: 'Two or three sentences: what you did, what you learned, and why you moved on.',
    },
    fa: {
      title: 'مشاور SAP PS/QM و پیش‌فروش',
      company: 'نام شرکت',
      summary: 'دو یا سه جمله: چه کاری انجام دادید، چه آموختید و چرا به نقش بعدی رفتید.',
    },
  },
  {
    stage: 'consulting',
    from: 6,
    to: 8,
    en: {
      title: 'SAP logistics team lead',
      company: 'Company name',
      summary: 'Two or three sentences: what you did, what you learned, and why you moved on.',
    },
    fa: {
      title: 'سرپرست تیم لجستیک SAP',
      company: 'نام شرکت',
      summary: 'دو یا سه جمله: چه کاری انجام دادید، چه آموختید و چرا به نقش بعدی رفتید.',
    },
  },
  {
    stage: 'corporate',
    from: 8,
    to: 9,
    en: {
      title: 'Head of SAP',
      company: 'Company name',
      summary: 'Two or three sentences: what you did, what you learned, and why you moved on.',
    },
    fa: {
      title: 'مدیر SAP',
      company: 'نام شرکت',
      summary: 'دو یا سه جمله: چه کاری انجام دادید، چه آموختید و چرا به نقش بعدی رفتید.',
    },
  },
  {
    stage: 'corporate',
    from: 9,
    to: 10,
    en: {
      title: 'Head of Applications',
      company: 'Company name',
      summary: 'Two or three sentences: what you did, what you learned, and why you moved on.',
    },
    fa: {
      title: 'مدیر نرم‌افزارهای سازمانی',
      company: 'نام شرکت',
      summary: 'دو یا سه جمله: چه کاری انجام دادید، چه آموختید و چرا به نقش بعدی رفتید.',
    },
  },
  {
    stage: 'corporate',
    from: 10,
    to: 11,
    en: {
      title: 'Global project manager',
      company: 'Company name',
      summary: 'Two or three sentences: what you did, what you learned, and why you moved on.',
    },
    fa: {
      title: 'مدیر پروژه جهانی',
      company: 'نام شرکت',
      summary: 'دو یا سه جمله: چه کاری انجام دادید، چه آموختید و چرا به نقش بعدی رفتید.',
    },
  },
  {
    stage: 'corporate',
    from: 11,
    to: 14,
    en: {
      title: 'Global SAP procurement consultant',
      company: 'Company name',
      summary: 'Two or three sentences: what you did, what you learned, and why you moved on.',
    },
    fa: {
      title: 'مشاور جهانی SAP در حوزه تدارکات',
      company: 'نام شرکت',
      summary: 'دو یا سه جمله: چه کاری انجام دادید، چه آموختید و چرا به نقش بعدی رفتید.',
    },
  },
  {
    stage: 'corporate',
    from: 14,
    en: {
      title: 'Global team lead: FI/CO, procurement and HR',
      company: 'Company name',
      summary: 'Two or three sentences: what you do now and what you are learning.',
    },
    fa: {
      title: 'سرپرست تیم جهانی: مالی و کنترلینگ، تدارکات و منابع انسانی',
      company: 'نام شرکت',
      summary: 'دو یا سه جمله: اکنون چه کاری انجام می‌دهید و چه می‌آموزید.',
    },
  },
];

export const currentRole = career[career.length - 1];
