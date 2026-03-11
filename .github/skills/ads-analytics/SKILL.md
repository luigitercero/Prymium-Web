---
name: ads-analytics
description: "Configure Google Ads, Facebook Ads, Google Analytics, and GTM for Prymium-Web. Use when: setting up ad tracking, adding conversion pixels, configuring Google Tag Manager, moving analytics credentials to environment variables, adding Facebook Pixel, creating remarketing tags."
---

# Ads & Analytics Integration

## When to Use
- Connecting Google Ads or Facebook Ads conversion tracking
- Configuring Google Tag Manager (GTM) triggers and tags
- Moving hardcoded analytics IDs to environment variables
- Adding or debugging Facebook Pixel, Google Analytics events
- Setting up remarketing audiences

## Current Setup

### Google Tag Manager (GTM)
- **GTM ID:** `GTM-NKSQN8N`
- **Loaded in:** `pages/_app.jsx` via `react-gtm-module`
- **Also loaded as:** inline `<Script>` in `src/hooks/useSEO.jsx` (DUPLICATE — remove one)

GTM is the single container for ALL tracking tags. Google Ads, Facebook Pixel, and Google Analytics should be configured as **tags inside GTM**, not as separate scripts.

### HubSpot
- **HubSpot ID:** `8323542`
- **Loaded in:** `pages/_document.jsx` as `//js.hs-scripts.com/8323542.js`

### Environment Variables
Credentials are currently hardcoded. They should be moved to `.env.local`:

```env
# .env.local (DO NOT commit)
NEXT_PUBLIC_GTM_ID=GTM-NKSQN8N
NEXT_PUBLIC_HUBSPOT_ID=8323542
NEXT_PUBLIC_FB_PIXEL_ID=<your-pixel-id>
NEXT_PUBLIC_GA_MEASUREMENT_ID=<your-ga4-id>
```

The `NEXT_PUBLIC_` prefix makes them available in browser code (required for client-side analytics).

## Google Ads Integration

Google Ads conversion tracking is configured **inside GTM**, not in code. The coding steps are:

### 1. Push conversion events via dataLayer

In components where conversions happen (contact form, product views):

```jsx
// Push event to GTM dataLayer
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'form_submit',
  form_name: 'contacto',
});
```

### 2. Common events to track

| Event Name | Trigger | Where |
|-----------|---------|-------|
| `page_view` | Auto (GTM handles) | All pages |
| `view_item` | Product detail loaded | `pages/tienda/detalle/[modelo].jsx` |
| `view_item_list` | Category page loaded | `pages/tienda/[group].jsx` |
| `form_submit` | Contact form sent | `src/components/ContactForm.jsx` |
| `click_phone` | Phone number clicked | Contact page |
| `click_whatsapp` | WhatsApp link clicked | Contact page |

### 3. GTM Tag Configuration (in GTM web interface)

| Tag Type | Trigger | Notes |
|----------|---------|-------|
| Google Ads Conversion | `form_submit` event | Tracks contact form as conversion |
| Google Ads Remarketing | All Pages | Builds audience for remarketing |
| GA4 Configuration | All Pages | Sends pageviews to GA4 |
| GA4 Event — view_item | `view_item` event | Enhanced ecommerce |
| GA4 Event — view_item_list | `view_item_list` event | Enhanced ecommerce |

## Facebook Ads Integration

Facebook Pixel is also configured **inside GTM**:

### 1. Push Facebook-compatible events

```jsx
// Standard Facebook events via dataLayer
window.dataLayer.push({
  event: 'fb_view_content',
  content_name: product.title,
  content_category: product.category,
  content_ids: [product.id],
  content_type: 'product',
  value: product.price,
  currency: 'GTQ',
});
```

### 2. GTM Tags for Facebook

| Tag Type | Trigger | Facebook Event |
|----------|---------|---------------|
| FB Pixel — PageView | All Pages | PageView |
| FB Pixel — ViewContent | `fb_view_content` | ViewContent |
| FB Pixel — Lead | `form_submit` | Lead |

### 3. Facebook Pixel via GTM Custom HTML Tag

In GTM, create a Custom HTML tag:

```html
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '{{FB Pixel ID}}');
  fbq('track', 'PageView');
</script>
```

Trigger: All Pages. Replace `{{FB Pixel ID}}` with a GTM variable pointing to the Facebook Pixel ID.

## Social Media Profiles

| Platform | URL | Use for Ads |
|----------|-----|-------------|
| Facebook | https://www.facebook.com/lavatrastosprymium | Facebook & Instagram Ads |
| Instagram | https://www.instagram.com/lavatrastosprymium/ | Instagram Ads (via Facebook) |
| YouTube | https://www.youtube.com/@lavatrastosprymium6962 | YouTube Ads (via Google Ads) |
| Google Business | Search "Lavatrastos Prymium" on Google Maps | Local campaigns |

## Migration Steps to .env

### Step 1: Create `.env.local`
Copy `.env.example` and fill in real values. Never commit `.env.local`.

### Step 2: Update `_app.jsx`
```jsx
const tagManagerArgs = {
  id: process.env.NEXT_PUBLIC_GTM_ID
}
```

### Step 3: Update `useSEO.jsx`
Remove the duplicate GTM `<Script>` tag entirely — GTM is loaded once in `_app.jsx`.

### Step 4: Update `_document.jsx`
```jsx
<script type="text/javascript" id="hs-script-loader" async defer
  src={`//js.hs-scripts.com/${process.env.NEXT_PUBLIC_HUBSPOT_ID}.js`}>
</script>
```

## Files to Modify

| File | Change |
|------|--------|
| `pages/_app.jsx` | Use `process.env.NEXT_PUBLIC_GTM_ID` instead of hardcoded ID |
| `src/hooks/useSEO.jsx` | Remove duplicate GTM script |
| `pages/_document.jsx` | Use `process.env.NEXT_PUBLIC_HUBSPOT_ID` for HubSpot |
| `src/components/ContactForm.jsx` | Add dataLayer push for `form_submit` event |
| `.env.example` | Template with all required env vars |
| `.env.local` | Actual values (never committed) |
| `.gitignore` | Ensure `.env.local` is listed |
