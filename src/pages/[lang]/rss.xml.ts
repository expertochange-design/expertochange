import type { APIRoute } from 'astro';
import { getEntries, slugOf, type Section } from '../../lib/content';
import { href } from '../../lib/url';
import { langs, t, type Lang } from '../../i18n/ui';

// One RSS feed per language with the newest posts from all three sections, so
// readers (and Telegram bots or feed readers) are told when something new is out.
// "Coming soon" teasers are left out until their full version is released.
export const getStaticPaths = () => langs.map((lang) => ({ params: { lang } }));

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = async ({ params, site }) => {
  const lang = params.lang as Lang;
  const sections: Section[] = ['portfolio', 'books', 'memories'];
  const items = (
    await Promise.all(
      sections.map(async (section) =>
        (await getEntries(section, lang))
          .filter((e) => !('comingSoon' in e.data && e.data.comingSoon))
          .map((e) => ({
            title: e.data.title,
            summary: e.data.summary,
            date: e.data.date,
            category: t(lang, `nav.${section}`),
            url: new URL(href(`/${lang}/${section}/${slugOf(e.id)}/`), site).href,
          })),
      ),
    )
  )
    .flat()
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, 50);

  const home = new URL(href(`/${lang}/`), site).href;
  const self = new URL(href(`/${lang}/rss.xml`), site).href;
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${escape(t(lang, 'site.name'))}</title>
<link>${home}</link>
<description>${escape(t(lang, 'site.tagline'))}</description>
<language>${lang}</language>
<atom:link href="${self}" rel="self" type="application/rss+xml"/>
${items
  .map(
    (i) => `<item>
<title>${escape(i.title)}</title>
<link>${i.url}</link>
<guid isPermaLink="true">${i.url}</guid>
<pubDate>${i.date.toUTCString()}</pubDate>
<category>${escape(i.category)}</category>
<description>${escape(i.summary)}</description>
</item>`,
  )
  .join('\n')}
</channel>
</rss>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
