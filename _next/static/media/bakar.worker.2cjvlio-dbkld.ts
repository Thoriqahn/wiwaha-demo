/**
 * Worker pemanggang warna palet (lihat bakar.ts): menggambar gambar + bidang warna bermask dan
 * meng-encode hasilnya di luar thread utama supaya layar memuat tetap mulus di HP lambat.
 * Hanya OffscreenCanvas; tanpa impor dari aplikasi.
 */
type Pesan = {
  id: number;
  gambar: string;
  mask: string;
  campur: "color" | "hue";
  warna: string;
  maksPiksel: number;
};

const ruang = self as unknown as {
  onmessage: ((e: MessageEvent<Pesan>) => void) | null;
  postMessage(m: { id: number; blob: Blob | null }): void;
};

async function bitmap(url: string) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`gagal memuat ${url}`);
  return createImageBitmap(await r.blob());
}

ruang.onmessage = async (e) => {
  const { id, gambar, mask, campur, warna, maksPiksel } = e.data;
  try {
    const [img, m] = await Promise.all([bitmap(gambar), bitmap(mask)]);
    const w = img.width;
    const h = img.height;
    if (!w || !h || w * h > maksPiksel) return ruang.postMessage({ id, blob: null });
    const dasar = new OffscreenCanvas(w, h);
    const d = dasar.getContext("2d");
    const tint = new OffscreenCanvas(w, h);
    const t = tint.getContext("2d");
    if (!d || !t) return ruang.postMessage({ id, blob: null });
    d.drawImage(img, 0, 0);
    t.fillStyle = warna;
    t.fillRect(0, 0, w, h);
    t.globalCompositeOperation = "destination-in";
    // mask-size: cover, posisi 50% 100% (sama dengan overlay CSS).
    const s = Math.max(w / m.width, h / m.height);
    t.drawImage(m, (w - m.width * s) / 2, h - m.height * s, m.width * s, m.height * s);
    d.globalCompositeOperation = campur;
    d.drawImage(tint, 0, 0);
    ruang.postMessage({
      id,
      blob: await dasar.convertToBlob({ type: "image/webp", quality: 0.92 }),
    });
  } catch {
    ruang.postMessage({ id, blob: null });
  }
};
