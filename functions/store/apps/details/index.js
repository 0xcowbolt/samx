export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  
  let rawId = url.searchParams.get('id') || 'application';
  const matchId = rawId.match(/id=([^&\s\]]+)/i);
  if (matchId && matchId[1]) rawId = matchId[1];
  rawId = rawId.split(']')[0].split('?')[0];

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

  const bpHead = '<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>';
  
  const bpNoscript = '<noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;-o-animation:none;animation:none}</style></noscript>';

  const ampHtml = '<!doctype html>\n' +
    '<html ⚡>\n' +
    '<head>\n' +
    '<meta charset="utf-8">\n' +
    '<script async src="https://cdn.ampproject.org/v0.js"></script>\n' +
    '<link rel="canonical" href="' + canonicalUrl + '">\n' +
    '<meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">\n' +
    bpHead + bpNoscript + '\n' +
    '<style amp-custom>\n' +
    'body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 20px; background: #f9f9f9; color: #333; }\n' +
    '.box { background: #fff; padding: 25px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); max-width: 600px; margin: 0 auto; }\n' +
    'h1 { font-size: 20px; color: #1a73e8; margin-top: 0; }\n' +
    'p { font-size: 14px; color: #555; line-height: 1.6; }\n' +
    '.btn { display: block; text-align: center; background: #00c853; color: white; padding: 12px 20px; border-radius: 8px; text-decoration: none; margin-top: 20px; font-weight: bold; }\n' +
    '</style>\n' +
    '<title>' + pageTitle + '</title>\n' +
    '<meta name="description" content="' + pageDesc + '">\n' +
    '<meta name="keywords" content="' + pageKeywords + '">\n' +
    '</head>\n' +
    '<body>\n' +
    '<div class="box">\n' +
    '<h1>' + pageTitle + '</h1>\n' +
    '<p>' + pageDesc + '</p>\n' +
    '<a class="btn" href="' + canonicalUrl + '">Buka di Situs Utama</a>\n' +
    '</div>\n' +
    '</body>\n' +
    '</html>';

  return new Response(ampHtml, {
    headers: { 
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=1800"
    }
  });
}
