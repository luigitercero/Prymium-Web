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
  return products.map((product) => {
    let priority = 0.85;

    if (product.link === 'lavatrastos-7546b') {
      priority = 0.75;
    } else if 
    (product.price === '') {
      priority = 0.05;
    } else if
      (product.link === 'lavatrastos-modelo-3053r-black'){
        priority = 0.86
      } else if
      (product.link === 'lavatrastos-670'){
        priority = 0.87
      } else if
      (product.link === 'lavatrastos-7023f'){
        priority = 0.88
      }

    return {
      url: `${BASE_URL}tienda/detalle/${product.link}`,
      lastModified: product.update_date.date ? formatDate(product.update_date.date) : formatDate(new Date()),
      priority,
    };
  });
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
        priority: 0.60,
      },
      {
        url: 'https://www.lavatrastosprymium.com/preguntas',
        lastModified: '2021-03-30T21:52:02+00:00',
        priority: 0.50,
      },
      {
        url: 'https://www.lavatrastosprymium.com/contacto',
        lastModified: '2021-03-30T21:52:02+00:00',
        priority: 0.62,
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
