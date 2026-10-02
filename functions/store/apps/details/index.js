export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  
  // 1. Ambil mentah parameter id
  let rawId = url.searchParams.get('id') || 'application';
  
  const matchId = rawId.match(/id=([^&\s\]]+)/i);
  if (matchId && matchId[1]) {
    rawId = matchId[1];
  }
  rawId = rawId.split(']')[0].split('?')[0];

  // 2. Format nama aplikasi agar bersih dibaca
  const cleanName = rawId
    .replace(/^com\./i, '')          
    .replace(/[\/\-_.]/g, ' ')        
    .replace(/\bapk\b/gi, '')         
    .replace(/\s+/g, ' ')             
    .trim()
    .toUpperCase();

  const pageTitle = `Download ${cleanName} Versi Terbaru 2026 - Official AMP`;
  const pageDesc = `Unduh aplikasi ${cleanName} resmi dengan aman dan cepat. Halaman khusus versi mobile yang ringan dan optimal.`;
  const pageKeywords = `${cleanName}, download ${cleanName}, apk ${cleanName}, aplikasi android`;

  const canonicalUrl = `https://primestrategygh.com/store/apps/details/?id=${rawId}`;

  // 3. Render output AMP dengan Boilerplate Resmi yang Valid
  const ampHtml = `<!doctype html>
  <html ⚡ lang="id">
  <head>
    <meta charset="utf-8">
    <link rel="canonical" href="${canonicalUrl}">
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    
    <style amp-boilerplate>body{-webkit-animation:-n 0s 1k;animation:-n 0s 1k}@-webkit-keyframes -n{0%{opacity:1}}@keyframes -n{0%{opacity:1}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;animation:none}</style></noscript>

    <style amp-custom>
      body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 20px; background: #f9f9f9; color: #333; }
      .box { background: #fff; padding: 25px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); max-width: 600px; margin: 0 auto; }
      h1 { font-size: 20px; color: #1a73e8; margin-top: 0; }
      p { font-size: 14px; color: #555; line-height: 1.6; }
      .btn { display: block; text-align: center; background: #00c853; color: white; padding: 12px 20px; border-radius: 8px; text-decoration: none; margin-top: 20px; font-weight: bold; }
    </style>
    
    <title>${pageTitle}</title>
    <meta name="description" content="${pageDesc}">
    <meta name="keywords" content="${pageKeywords}">
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
