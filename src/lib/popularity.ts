// Visits per piece, keyed by its path without the base path, e.g. "/en/books/my-book/".
// scripts/fetch-popularity.mjs refreshes this from GoatCounter before each build;
// pieces with no visits yet count as 0, so "most popular" falls back to newest first.
import counts from '../data/popularity.json';

export const visitsOf = (path: string): number => (counts as Record<string, number>)[path] ?? 0;
