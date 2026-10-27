/* Epic Army Builder — service worker: l'app funziona anche senza internet.
   L'app (index.html) si prende dalla rete quando c'è, altrimenti dalla copia salvata.
   Caratteri e libreria per le immagini si salvano al primo uso. */
const CACHE='eab-v1.6-090474eb';
const CORE=['./','index.html','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','icons/maskable-512.png','icons/apple-touch-icon.png','icons/favicon-64.png'];
const EXT=/^https:\/\/(fonts\.googleapis\.com|fonts\.gstatic\.com|cdnjs\.cloudflare\.com)\//;
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('eab-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('message',e=>{if(e.data==='skipWaiting')self.skipWaiting()});
const timeout=(p,ms)=>new Promise((res,rej)=>{const t=setTimeout(()=>rej(new Error('timeout')),ms);p.then(v=>{clearTimeout(t);res(v)},e=>{clearTimeout(t);rej(e)})});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;
  const u=new URL(r.url);
  if(r.mode==='navigate'){ // pagina: rete (max 4 s), poi copia salvata
    e.respondWith(timeout(fetch(r),4000).then(res=>{if(res.ok){const c=res.clone();caches.open(CACHE).then(x=>x.put('index.html',c))}return res})
      .catch(()=>caches.match('index.html')));return}
  if(u.origin===location.origin||EXT.test(r.url)){ // file statici: copia salvata, aggiornata in background
    e.respondWith(caches.open(CACHE).then(c=>c.match(r).then(hit=>{
      const net=fetch(r).then(res=>{if(res.ok||res.type==='opaque')c.put(r,res.clone());return res}).catch(()=>hit);
      return hit||net})));
  }
});
