export async function onRequest(context) {
  const { request, params } = context;
  
  // 1. Tangkap parameter dari dynamic path [[path]]
  const pathSegments = params.path;
  let rawId = '';

  if (Array.isArray(pathSegments) && pathSegments.length > 0) {
    rawId = pathSegments[pathSegments.length - 1];
  } else if (typeof pathSegments === 'string' && pathSegments.trim() !== '') {
    const parts = pathSegments.split('/').filter(Boolean);
    rawId = parts.length > 0 ? parts[parts.length - 1] : '';
  }

  // Fallback jika kosong, bernilai 'amp', atau berformat file PHP
  if (!rawId || rawId.toLowerCase() === 'amp' || rawId.endsWith('.php')) {
    rawId = 'default-app';
  }

  // 2. Format nama aplikasi agar bersih, rapi, dan uppercase
  const cleanName = rawId
    .replace(/^com\./i, '')          
    .replace(/[\/\-_.]/g, ' ')         
    .replace(/\bapk\b/gi, '')          
    .replace(/\s+/g, ' ')              
    .trim()
    .toUpperCase();

  // Buat slug bersih untuk URL canonical (huruf kecil, alphanumeric, tanpa spasi liar)
  const brandSlug = cleanName.toLowerCase().replace(/[^a-z0-9]/g, '').trim();

  const pageTitle = `Download ${cleanName} Versi Terbaru 2026 - Official AMP`;
  const pageDesc = `Unduh aplikasi ${cleanName} resmi dengan aman dan cepat. Halaman khusus versi mobile yang ringan dan optimal.`;
  const pageKeywords = `${cleanName}, download ${cleanName}, apk ${cleanName}, aplikasi android`;
  
  // === SILAHKAN UBAH DOMAIN UTAMA DI SINI JIKA DIPERLUKAN ===
  const mainDomain = 'https://spin8vip.top';
  const canonicalUrl = `${mainDomain}/store/apps/details/utilities/${brandSlug}`;

  // 3. Template AMP Brutalist
  const ampHtml = `<!DOCTYPE html>
<html amp lang="id">
<head>
  <meta charset="UTF-8">
  
  <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>

  <meta property="og:title" content="${pageTitle}">
  <meta property="og:description" content="${pageDesc}">
  <meta property="og:site_name" content="${cleanName}"> 
  <meta property="og:author" content="Official Store">
  
  <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
  
  <title>${pageTitle}</title>
  <link rel="canonical" href="${canonicalUrl}">
  <meta property="og:url" content="${canonicalUrl}" />
  <link rel="shortcut icon" href="https://s6.imgcdn.dev/YoWnND.webp">
  
  <script async src="https://cdn.ampproject.org/v0.js"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <script async custom-element="amp-audio" src="https://cdn.ampproject.org/v0/amp-audio-0.1.js"></script>
  <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
  
  <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1">
  <meta name="description" content="${pageDesc}">
  <meta name="keywords" content="${pageKeywords}">
  <meta name="robots" content="index, follow">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta content="id" name="language">
  <meta content="id" name="geo.country">
  <meta http-equiv="content-language" content="id-ID">
  <meta content="Indonesia" name="geo.placename">
  <meta property="og:type" content="website">

  <style amp-custom>
    :root {
      --brutal-pink: #FF1493;
      --brutal-white: #FFFFFF;
      --brutal-black: #000000;
    }
    * { box-sizing: border-box; }
    body {
      font-family: 'Space Mono', monospace;
      color: var(--brutal-black);
      margin: 0;
      padding: 20px;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      background-color: var(--brutal-black);
    }
    body::before {
      content: "";
      position: fixed;
      top: -10%; left: -10%; width: 120%; height: 120%;
      background-image: url('https://s6.imgcdn.dev/YoW6Lq.webp');
      background-size: cover; background-position: center;
      filter: blur(20px); z-index: -1; opacity: 0.7;
    }
    .container { width: 100%; max-width: 450px; z-index: 1; position: relative; }
    .dompleng {
      background-color: var(--brutal-pink);
      border: 6px solid var(--brutal-black);
      padding: 25px 20px;
      box-shadow: 12px 12px 0px var(--brutal-black);
      position: relative;
    }
    .badge-top {
      position: absolute; top: -15px; left: -15px;
      background-color: var(--brutal-white);
      border: 4px solid var(--brutal-black);
      padding: 5px 10px; font-weight: bold;
      transform: rotate(-5deg); box-shadow: 4px 4px 0px var(--brutal-black);
      z-index: 10;
    }
    .bingkai-brutal {
      border: 6px solid var(--brutal-black);
      background-color: var(--brutal-white);
      box-shadow: 8px 8px 0px var(--brutal-black);
      display: block; margin: 0 auto; max-width: 100%;
      line-height: 0; font-size: 0; overflow: hidden;
    }
    .bingkai-brutal amp-anim { width: 100%; height: 100%; }
    .btn {
      display: block; width: 100%; margin: 20px 0; padding: 15px;
      background-color: var(--brutal-white); color: var(--brutal-black);
      text-decoration: none; font-weight: 700; font-size: 18px;
      text-align: center; text-transform: uppercase;
      border: 5px solid var(--brutal-black);
      box-shadow: 8px 8px 0px var(--brutal-black);
    }
    .btn.daftar { background-color: #ffb3e6; }
    .btn.bonus { background-color: var(--brutal-black); color: var(--brutal-white); box-shadow: 8px 8px 0px var(--brutal-white); }
    .divider { height: 6px; background-color: var(--brutal-black); margin: 25px 0; width: 100%; }
    .welcome {
      background-color: var(--brutal-white); border: 5px solid var(--brutal-black);
      padding: 10px; box-shadow: 6px 6px 0px var(--brutal-black); transform: rotate(1deg);
    }
    .split-text { display: flex; justify-content: center; flex-wrap: wrap; gap: 4px; }
    .split-text p {
      margin: 0; padding: 5px 12px; background-color: var(--brutal-pink);
      color: var(--brutal-white); border: 3px solid var(--brutal-black);
      font-size: 20px; font-weight: 900; box-shadow: 3px 3px 0px var(--brutal-black);
      text-transform: uppercase;
    }
    .split-text p.space { background-color: transparent; border: none; box-shadow: none; width: 10px; padding: 0; }
    .footer {
      text-align: center; margin-top: 40px; font-size: 14px; font-weight: bold;
      color: var(--brutal-black); background-color: var(--brutal-pink);
      border: 4px solid var(--brutal-black); padding: 10px; box-shadow: 4px 4px 0px var(--brutal-black);
    }
    .footer span { display: block; }
    .marquee-container {
      overflow: hidden; white-space: nowrap; border-top: 4px solid var(--brutal-black);
      border-bottom: 4px solid var(--brutal-black); background: var(--brutal-black);
      color: var(--brutal-pink); padding: 5px 0; margin-top: 20px;
    }
    .marquee-text { display: inline-block; font-weight: bold; font-size: 16px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="dompleng">
      <div class="badge-top">AMP V2.0</div>
      <header>
        <a target="_blank" href="${canonicalUrl}" rel="noopener">
          <div class="bingkai-brutal">
            <amp-anim src="https://s6.imgcdn.dev/YoW6Lq.webp" width="1122" height="1398" layout="responsive" alt="${cleanName}"></amp-anim>
          </div>
        </a>
      </header>
      <main>
        <a class="btn login" href="${canonicalUrl}" target="_blank" rel="noopener">BUKA APLIKASI</a>
        <a class="btn daftar" href="${canonicalUrl}" target="_blank" rel="noopener">DOWNLOAD ${cleanName}</a>
        <a class="btn bonus" href="${canonicalUrl}" target="_blank" rel="noopener">SERVER UTAMA</a>
      </main>
      <div class="divider"></div>
      <div class="welcome">
        <div class="split-text">
          <p>O</p><p>F</p><p>F</p><p>I</p><p>C</p><p>I</p><p>A</p><p>L</p><p class="space"></p><p>A</p><p>M</p><p>P</p>
        </div>
      </div>
      <div class="marquee-container">
        <div class="marquee-text">/// OFFICIAL STORE /// FAST & SECURE /// MOBILE OPTIMIZED ///</div>
      </div>
    </div>
    <div class="footer">
      <span>&copy;2026. ${cleanName}. ✓ All Rights Reserved.</span>
    </div>
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
