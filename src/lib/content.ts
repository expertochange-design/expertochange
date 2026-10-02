import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Section = 'portfolio' | 'books' | 'memories';

// Entry ids look like "en/my-slug"; the slug is shared across languages.
export const slugOf = (id: string) => id.split('/').slice(1).join('/');
export const langOf = (id: string) => id.split('/')[0] as Lang;

export async function getEntries<S extends Section>(section: S, lang: Lang) {
  const entries = (await getCollection(section)) as CollectionEntry<S>[];
  return entries
    .filter((e) => langOf(e.id) === lang && !e.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

// Paths for every published entry, plus whether its translation exists.
export async function entryPaths<S extends Section>(section: S) {
  const all = ((await getCollection(section)) as CollectionEntry<S>[]).filter((e) => !e.data.draft);
  const ids = new Set(all.map((e) => e.id));
  return all.map((entry) => {
    const lang = langOf(entry.id);
    const slug = slugOf(entry.id);
    const other = lang === 'en' ? 'fa' : 'en';
    return {
      params: { lang, slug },
      props: { entry, hasTranslation: ids.has(`${other}/${slug}`) },
    };
  });
}
