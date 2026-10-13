# Folder Musik Wiwaha (`public/musik/`)

Taruh berkas musik instrumen atau lagu Anda langsung di folder ini (`.mp3`, `.ogg`, `.m4a`, `.wav`).

Setelah menaruh berkas, jalankan `pnpm musik:sinkron` dari root proyek. Perintah ini:
1. Membaca berkas audio di folder ini.
2. Mengurai judul dan nama artis dari nama berkas secara otomatis.
3. Mendaftarkannya ke database dan menampilkannya di editor pilihan musik undangan.

Berkas audio lokal di folder ini tidak ikut Git; pastikan berkas tersedia saat membangun atau
menyajikan aplikasi agar URL musik dapat diputar.

### Contoh Format Penamaan Berkas:
- `Harmoni Senja.mp3` ➔ Judul: **Harmoni Senja**, Artis: **Wiwaha**
- `Payung Teduh - Akad.mp3` ➔ Judul: **Akad**, Artis: **Payung Teduh**
- `01. Canon in D - Pachelbel.mp3` ➔ Judul: **Canon in D**, Artis: **Pachelbel**
