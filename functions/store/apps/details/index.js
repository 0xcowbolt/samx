export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  
  // 1. Tangkap parameter id dari URL dan bersihkan jika ada format URL tercampur
  let rawId = url.searchParams.get('id') || 'application';
  
  // Ambil bagian nama package-nya saja jika tidak sengaja tercopy link
  if (rawId.includes('](') || rawId.includes('http')) {
    const match = rawId.match(/id=([^&\s]+)/i);
    if (match) rawId = match[1];
  }

  // 2. Format nama aplikasi agar bersih dan rapi dibaca (hilangkan koma, titik, apk, dll)
  const cleanName = rawId
    .replace(/^com\./i, '')          // Hilangkan awalan 'com.'
    .replace(/[\/\-_]/g, ' ')         // Ganti slash, dash, underscore jadi spasi
    .replace(/\.apk/i, '')            // Hilangkan ekstensi .apk
    .trim()
    .toUpperCase();

  const pageTitle = `Download ${cleanName} Versi Terbaru 2026 - Official AMP`;
  const pageDesc = `Unduh aplikasi ${cleanName} resmi dengan aman dan cepat. Halaman khusus versi mobile yang ringan dan optimal.`;
  const pageKeywords = `${cleanName}, download ${cleanName}, apk ${cleanName}, aplikasi android`;

  // 3. Tentukan URL Canonical yang bersih
  const canonicalUrl = `https://primestrategygh.com/store/apps/details/?id=${rawId}`;

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
      .box { background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); max-width: 600px; margin: 0 auto; }
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
