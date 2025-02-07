// Ensure this import matches your project structure
import { getProducts, singleProductUrl, BASE_URL } from '@routes/Config';  // Import your product APIs

// Fetch all products from the API or database
export async function getAllProducts() {
  const response = await fetch(getProducts.url);
  const products = await response.json();
  
  return products;
}


const formatDate = (date) => {
  const d = new Date(date);
  const isoString = d.toISOString();
  
  // Slice off the milliseconds and adjust for timezone to match the desired format
  return isoString.slice(0, 19) + '+00:00';  // "2021-03-30T21:52:02+00:00"
};
// Helper function to generate URLs for the sitemap
const generateSitemapUrls = (products) => {
  return products.map((product) => ({
    url: `${BASE_URL}tienda/detalle/${product.link}`,  // Build the product URL using the `link` field
    lastModified: product.update_date.date ? formatDate(product.update_date.date) : formatDate(new Date()),  // Assuming the product date is the last modified date
    priority: product.price === '' ? 0.05 : 0.77,
  }));
};

// API handler to generate the sitemap
export default async function handler(req, res) {
  try {
    // Fetch all products from the API
    const products = await getAllProducts();
    
    // Generate URLs for the sitemap
    const urls = generateSitemapUrls(products);

    // Static URLs to include in the sitemap
    const staticUrls = [
      {
        url: 'https://www.lavatrastosprymium.com/',
        lastModified: '2021-03-30T21:52:02+00:00',
        priority: 0.85,
      },
      {
        url: 'https://www.lavatrastosprymium.com/preguntas',
        lastModified: '2021-03-30T21:52:02+00:00',
        priority: 0.50,
      },
      {
        url: 'https://www.lavatrastosprymium.com/contacto',
        lastModified: '2021-03-30T21:52:02+00:00',
        priority: 0.90,
      },
      {
        url: 'https://www.lavatrastosprymium.com/tienda',
        lastModified: '2021-03-30T21:52:02+00:00',
        priority: 0.51,
      },
      {
        url: 'https://www.lavatrastosprymium.com/tienda/lavatrastos',
        lastModified: '2021-03-30T21:52:02+00:00',
        priority: 0.51,
      },
      {
        url: 'https://www.lavatrastosprymium.com/tienda/mezcladoras',
        lastModified: '2021-03-30T21:52:02+00:00',
        priority: 0.51,
      },
      {
        url: 'https://www.lavatrastosprymium.com/tienda/accesorios',
        lastModified: '2021-03-30T21:52:02+00:00',
        priority: 0.51,
      },
      {
        url: 'https://www.lavatrastosprymium.com/tienda/bidets',
        lastModified: '2021-03-30T21:52:02+00:00',
        priority: 0.51,
      },
      {
        url: 'https://www.lavatrastosprymium.com/tienda/bath',
        lastModified: '2021-03-30T21:52:02+00:00',
        priority: 0.51,
      },
      {
        url: 'https://www.lavatrastosprymium.com/tienda/duchas',
        lastModified: '2021-03-30T21:52:02+00:00',
        priority: 0.51,
      },
      {
        url: 'https://www.lavatrastosprymium.com/tienda/extractores',
        lastModified: '2021-03-30T21:52:02+00:00',
        priority: 0.51,
      },

      
    ];

    // Combine static URLs with dynamic product URLs
    const allUrls = [...staticUrls, ...urls];

    // Create the XML structure for the sitemap
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allUrls
        .map((url) => {
          return `
            <url>
              <loc>${url.url}</loc>
              <lastmod>${url.lastModified}</lastmod>
              <priority>${url.priority}</priority>
            </url>`;
        })
        .join('')}
    </urlset>`;

    // Set the correct response headers for XML
    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(xml);  // Return the generated XML content
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).send('Error generating sitemap');
  }
}
