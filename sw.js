const CACHE='bolajonlar-v2';
const CORE=['./','./index.html','./style.css','./app.js','./manifest.json'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(caches.match(e.request).then(cached=>{
    const network=fetch(e.request).then(r=>{
      if(r&&r.ok&&new URL(e.request.url).origin===location.origin){
        const copy=r.clone(); caches.open(CACHE).then(c=>c.put(e.request,copy));
      } return r;
    }).catch(()=>cached||caches.match('./index.html'));
    return cached||network;
  }));
});
