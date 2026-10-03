// The roles on the "My career path" timeline, oldest first.
// When you change position, add one more entry at the end of this list:
// the timeline post and the portfolio list update on the next deploy.
//
// from / to: 'YYYY-MM' (or just 'YYYY'). Leave `to` out for the current role.
// Leave `from` empty ('') until you have the date; the page says "dates to come".

export interface Role {
  from: string;
  to?: string;
  en: { title: string; company: string; summary: string };
  fa: { title: string; company: string; summary: string };
}

export const career: Role[] = [
  {
    from: '',
    to: '',
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
    from: '',
    to: '',
    en: {
      title: 'SAP T-shaped functional consultant',
      company: 'Company name',
      summary: 'Two or three sentences: what you did, what you learned, and why you moved on.',
    },
    fa: {
      title: 'مشاور فانکشنال T-شکل SAP',
      company: 'نام شرکت',
      summary: 'دو یا سه جمله: چه کاری انجام دادید، چه آموختید و چرا به نقش بعدی رفتید.',
    },
  },
  {
    from: '',
    to: '',
    en: {
      title: 'SAP team lead',
      company: 'Company name',
      summary: 'Two or three sentences: what you did, what you learned, and why you moved on.',
    },
    fa: {
      title: 'سرپرست تیم SAP',
      company: 'نام شرکت',
      summary: 'دو یا سه جمله: چه کاری انجام دادید، چه آموختید و چرا به نقش بعدی رفتید.',
    },
  },
  {
    from: '',
    to: '',
    en: {
      title: 'Head of ERP and BI (first in-house role)',
      company: 'Company name',
      summary: 'Two or three sentences: what you did, what you learned, and why you moved on.',
    },
    fa: {
      title: 'مدیر ERP و هوش تجاری (اولین نقش سازمانی)',
      company: 'نام شرکت',
      summary: 'دو یا سه جمله: چه کاری انجام دادید، چه آموختید و چرا به نقش بعدی رفتید.',
    },
  },
  {
    from: '',
    to: '',
    en: {
      title: 'Internal role: e-commerce project',
      company: 'Company name',
      summary: 'Two or three sentences: what you did, what you learned, and why you moved on.',
    },
    fa: {
      title: 'تجربه داخلی: پروژه تجارت الکترونیک',
      company: 'نام شرکت',
      summary: 'دو یا سه جمله: چه کاری انجام دادید، چه آموختید و چرا به نقش بعدی رفتید.',
    },
  },
  {
    from: '',
    to: '',
    en: {
      title: 'SAP procurement consultant',
      company: 'Company name',
      summary: 'Two or three sentences: what you did, what you learned, and why you moved on.',
    },
    fa: {
      title: 'مشاور تدارکات SAP',
      company: 'نام شرکت',
      summary: 'دو یا سه جمله: چه کاری انجام دادید، چه آموختید و چرا به نقش بعدی رفتید.',
    },
  },
  {
    from: '',
    en: {
      title: 'Finance, procurement and HR team lead',
      company: 'Company name',
      summary: 'Two or three sentences: what you do now and what you are learning.',
    },
    fa: {
      title: 'سرپرست تیم مالی، تدارکات و منابع انسانی',
      company: 'نام شرکت',
      summary: 'دو یا سه جمله: اکنون چه کاری انجام می‌دهید و چه می‌آموزید.',
    },
  },
];

export const currentRole = career[career.length - 1];
