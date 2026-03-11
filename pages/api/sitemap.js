import { getProducts, getQuestion, BASE_URL } from '@routes/Config';

const SITE_URL = BASE_URL.endsWith('/') ? BASE_URL.slice(0, -1) : BASE_URL;

const toIsoDate = (value) => {
  const fallback = new Date();
  const parsed = value ? new Date(value) : fallback;
  return Number.isNaN(parsed.getTime()) ? fallback.toISOString() : parsed.toISOString();
};

const escapeXml = (value = '') => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&apos;');

const buildUrl = (path) => `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

const uniqueByUrl = (entries) => {
  const map = new Map();
  entries.forEach((entry) => {
    map.set(entry.url, entry);
  });
  return [...map.values()];
};

export default async function handler(req, res) {
  try {
    const [productsResponse, questionsResponse] = await Promise.all([
      fetch(getProducts.url),
      fetch(getQuestion.url)
    ]);

    const products = await productsResponse.json();
    const questions = await questionsResponse.json();
    const nowIso = new Date().toISOString();

    const staticUrls = [
      { url: buildUrl('/'), lastModified: nowIso, priority: 1.0 },
      { url: buildUrl('/tienda'), lastModified: nowIso, priority: 0.9 },
      { url: buildUrl('/productos'), lastModified: nowIso, priority: 0.85 },
      { url: buildUrl('/preguntas'), lastModified: nowIso, priority: 0.85 },
      { url: buildUrl('/contacto'), lastModified: nowIso, priority: 0.8 },
      { url: buildUrl('/blog'), lastModified: nowIso, priority: 0.75 },
      { url: buildUrl('/duchas'), lastModified: nowIso, priority: 0.7 },
      { url: buildUrl('/extractores'), lastModified: nowIso, priority: 0.7 },
      { url: buildUrl('/sanitarios'), lastModified: nowIso, priority: 0.7 },
      { url: buildUrl('/tienda/lavatrastos'), lastModified: nowIso, priority: 0.8 },
      { url: buildUrl('/tienda/mezcladoras'), lastModified: nowIso, priority: 0.8 },
      { url: buildUrl('/tienda/accesorios'), lastModified: nowIso, priority: 0.75 },
      { url: buildUrl('/tienda/bidets'), lastModified: nowIso, priority: 0.75 },
      { url: buildUrl('/tienda/bath'), lastModified: nowIso, priority: 0.75 },
      { url: buildUrl('/tienda/duchas'), lastModified: nowIso, priority: 0.75 },
      { url: buildUrl('/tienda/extractores'), lastModified: nowIso, priority: 0.75 }
    ];

    const productUrls = (products || []).map((product) => ({
      url: buildUrl(`/tienda/detalle/${product.link}`),
      lastModified: toIsoDate(product?.update_date?.date),
      priority: product?.price ? 0.7 : 0.45
    }));

    const questionUrls = (questions || []).map((question) => ({
      url: buildUrl(`/preguntas/${question.id}`),
      lastModified: nowIso,
      priority: 0.6
    }));

    const allUrls = uniqueByUrl([...staticUrls, ...productUrls, ...questionUrls]);

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map((entry) => `  <url>
    <loc>${escapeXml(entry.url)}</loc>
    <lastmod>${entry.lastModified}</lastmod>
    <priority>${entry.priority.toFixed(2)}</priority>
  </url>`)
  .join('\n')}
</urlset>`;

    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(xml);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).send('Error generating sitemap');
  }
}
