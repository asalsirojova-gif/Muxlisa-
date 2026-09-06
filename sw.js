const CACHE='bolajonlar-yarn-v1';
const CORE=['./','./index.html','./style.css','./app.js','./manifest.json','./assets/illustrations/body-poster.png','./assets/illustrations/time-poster.png','./assets/illustrations/nature-poster.png','./assets/illustrations/transport-poster.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(res=>{if(!res||res.status!==200)return res;const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return res}).catch(()=>caches.match('./index.html'))))});
