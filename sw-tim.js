/*
 * Service worker HP among tamu (scope /tim): halaman meja tamu tetap terbuka tanpa sinyal.
 * - Navigasi /tim: jaringan dulu, simpan salinan; tanpa sinyal → salinan terakhir.
 * - Aset statis Next (/_next/static/…): cache dulu (nama berkas berisi hash, aman disimpan).
 * - API (/api/…) TIDAK di-cache: daftar tamu & antrean check-in ada di IndexedDB.
 * Pesan "hapus" dari halaman → semua cache dihapus (sesi tim berakhir / keluar).
 */
const HALAMAN = "wiwaha-tim-halaman-v1";
const ASET = "wiwaha-tim-aset-v1";

self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((ks) =>
        Promise.all(
          ks
            .filter((k) => k.startsWith("wiwaha-tim-") && k !== HALAMAN && k !== ASET)
            .map((k) => caches.delete(k)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

const offline = () =>
  new Response(
    '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Tanpa sinyal</title><body style="font-family:system-ui;padding:24px;max-width:420px;margin:auto"><h1 style="font-size:1.4rem">Tanpa sinyal</h1><p>Halaman meja tamu belum tersimpan di HP ini. Buka sekali saat ada sinyal agar bisa dipakai offline.</p></body>',
    { status: 503, headers: { "Content-Type": "text/html; charset=utf-8" } },
  );

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (req.mode === "navigate" && url.pathname.startsWith("/tim")) {
    e.respondWith(
      fetch(req)
        .then((res) => {
          if (res.ok) {
            const salin = res.clone();
            caches.open(HALAMAN).then((c) => c.put(url.pathname, salin));
          }
          return res;
        })
        .catch(() =>
          caches.open(HALAMAN).then((c) => c.match(url.pathname).then((r) => r || offline())),
        ),
    );
    return;
  }

  if (url.pathname.startsWith("/_next/static/")) {
    e.respondWith(
      caches.open(ASET).then((c) =>
        c.match(req).then(
          (r) =>
            r ||
            fetch(req).then((res) => {
              if (res.ok) c.put(req, res.clone());
              return res;
            }),
        ),
      ),
    );
  }
});

self.addEventListener("message", (e) => {
  if (e.data === "hapus")
    e.waitUntil(
      caches
        .keys()
        .then((ks) =>
          Promise.all(ks.filter((k) => k.startsWith("wiwaha-tim-")).map((k) => caches.delete(k))),
        ),
    );
});
