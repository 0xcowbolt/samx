export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  
  // 1. Ambil parameter dinamis dari URL (contoh: ?id=com.win.a7da.apk&hl=id)
  const appId = url.searchParams.get('id') || 'application-package';
  const lang = url.searchParams.get('hl') || 'id';

  // 2. Format judul & deskripsi secara dinamis (menyesuaikan nama aplikasi)
  const cleanAppName = appId.replace(/_/g, ' ').replace(/\.apk/i, '').toUpperCase();
  const pageTitle = `Download ${cleanAppName} Terbaru 2026 - Official App`;
  const pageDesc = `Unduh aplikasi ${cleanAppName} versi terbaru dengan aman, cepat, dan ringan khusus untuk perangkat Android Anda.`;

  // 3. Tentukan URL Canonical utama (mengarah ke Server 2 / domain utama Anda)
  const mainDomain = "https://primestrategygh.com";
  const canonicalUrl = `${mainDomain}/store/apps/details/?id=${appId}&hl=${lang}`;

  // 4. Render Template AMPHTML yang valid, bersih, dan super cepat di Edge
  const ampHtml = `<!doctype html>
  <html ⚡ lang="${lang}">
  <head>
    <meta charset="utf-8">
    <title>${pageTitle}</title>
    <meta name="description" content="${pageDesc}">
    <link rel="canonical" href="${canonicalUrl}">
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    
    <!-- AMP Runtime Script -->
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    
    <!-- AMP Boilerplate CSS -->
    <style amp-boilerplate>body{-webkit-animation:-n 0s 1k;animation:-n 0s 1k}@-webkit-keyframes -n{0%{opacity:1}}@keyframes -n{0%{opacity:1}}</style>
    <noscript><style amp-boilerplate>body{-webkit-animation:none;animation:none}</style></noscript>
    
    <!-- Custom AMP CSS (Maksimal 75KB, sangat ringan) -->
    <style amp-custom>
      body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; margin: 0; padding: 15px; background: #f8f9fa; color: #333; }
      .container { max-width: 600px; margin: 0 auto; background: #ffffff; padding: 25px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
      h1 { font-size: 20px; color: #1a73e8; margin-top: 0; line-height: 1.4; }
      .meta { font-size: 13px; color: #666; margin-bottom: 15px; background: #f1f3f4; display: inline-block; padding: 4px 10px; border-radius: 4px; }
      p { line-height: 1.6; color: #444; }
      .btn-download { display: block; text-align: center; background: #00c853; color: white; padding: 14px 20px; border-radius: 8px; text-decoration: none; font-weight: bold; margin-top: 25px; box-shadow: 0 2px 6px rgba(0,200,83,0.3); }
      .btn-download:hover { background: #00b0ff; }
      .footer { margin-top: 20px; font-size: 11px; color: #888; text-align: center; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="meta">Kategori: Android Apps • Status: Verified</div>
      <h1>${pageTitle}</h1>
      <p>${pageDesc}</p>
      
      <hr style="border:0; border-top:1px solid #eee; margin:20px 0;">
      
      <a class="btn-download" href="${canonicalUrl}">Lanjutkan ke Halaman Unduh Resmi</a>
      
      <div class="footer">
        Halaman AMP ini dioptimalkan untuk kecepatan maksimum oleh Cloudflare Edge Network.
      </div>
    </div>
  </body>
  </html>`;

  // 5. Kembalikan respons HTTP ke browser/bot dengan header yang optimal
  return new Response(ampHtml, {
    headers: { 
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=1800" // Cache edge selama 30 menit
    }
  });
}
