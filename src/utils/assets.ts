export function resolveAssetPath(src?: string) {
  const cleanSrc = src?.trim();

  if (!cleanSrc) return '';
  if (/^(https?:)?\/\//.test(cleanSrc) || cleanSrc.startsWith('data:')) return cleanSrc;

  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  return `${base}${cleanSrc.replace(/^\/+/, '')}`;
}
