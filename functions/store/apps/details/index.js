export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  
  // 1. Tangkap parameter id dari URL (misal: ?id=com.whatsapp.apk)
  const appId = url.searchParams.get('id') || 'application';

  // 2. Buat logika title, description, & keywords dinamis secara otomatis
  const cleanName = appId.replace(/_/g, ' ').replace(/\.apk/i, '').toUpperCase();
  
  const pageTitle = `Download ${cleanName} Versi Terbaru 2026 - Official AMP`;
  const pageDesc = `Unduh aplikasi ${cleanName} resmi dengan aman dan cepat. Halaman khusus versi mobile yang ringan dan optimal.`;
  const pageKeywords = `${cleanName}, download ${cleanName}, apk ${cleanName}, aplikasi android`;

  // 3. Tentukan URL Canonical (wajib mengarah ke domain utama Server 2)
  const canonicalUrl = `https://primestrategygh.com/store/apps/details/?id=${appId}`;

  // 4. Render output AMP lengkap dengan tag SEO
  const ampHtml = `<!doctype html>
  <html ⚡ lang="id">
  <head>
    <meta charset="utf-8">
    <title>${pageTitle}</title>
    <meta name="description" content="${pageDesc}">
    <meta name="keywords" content="${pageKeywords}">
    <link rel="canonical" href="${canonicalUrl}">
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    
    <style amp-boilerplate>body{-webkit-animation:-n 0s 1k;animation:-n 0s 1k}@-webkit-keyframes -n{0%{opacity:1}}@keyframes -n{0%{opacity:1}}</style>
    <noscript><style amp-boilerplate>body{-webkit-animation:none;animation:none}</style></noscript>
    
    <style amp-custom>
      body { font-family: sans-serif; padding: 20px; background: #f9f9f9; color: #333; }
      .box { background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
      h1 { font-size: 18px; color: #1a73e8; }
      p { font-size: 14px; color: #555; line-height: 1.5; }
      .btn { display: inline-block; background: #00c853; color: white; padding: 10px 15px; border-radius: 5px; text-decoration: none; margin-top: 15px; font-weight: bold; }
    </style>
  </head>
  <body>
    <div class="box">
      <h1>${pageTitle}</h1>
      <p>${pageDesc}</p>
      <a class="btn" href="${canonicalUrl}">Buka di Situs Utama</a>
    </div>
  </body>
  </html>`;

  return new Response(ampHtml, {
    headers: { 
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=1800"
    }
  });
}
