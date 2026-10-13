# Editorial Scrapbook — Brief Tema Undangan 2D

> Kategori: **2D Photo Stories**  
> Referensi: `00-panduan-umum-2d.md`

## 1. Konsep
**Mood:** creative, fashionable, personal, energetic  
**Palet:** cream, black, cobalt, coral, kraft accent  
**Arah layout:** Mixed; foto slide dari samping; tape/doodle dari atas/bawah.  
**Key visual:** Editorial crop + tape + stickers + notes

Tema ini **photo-led**. Rekomendasi: 6–12 foto campuran untuk collage.

## 2. Prinsip visual
Flat, graphic, jelas 2D. Gunakan shape datar, ornament SVG, typography sebagai elemen visual, mask/reveal/translate/rotate ringan. Hindari depth-parallax, perspective scene, dan camera zoom.

## 3. Sistem ornamen
### Primary ornament
**Editorial crop + tape + stickers + notes**

### Ornament set
- paper tape
- marker circle
- arrow doodle
- date sticker
- torn edge
- small star

### Arah ornament
- ornament besar mengikuti arah layout utama;
- micro ornament boleh masuk dari atas/bawah atau sisi;
- divider gunakan draw-line, wipe, atau scale-X;
- pattern boleh shift horizontal/vertical secara flat;
- cover maksimal 2 ornament dominan; RSVP harus paling bersih.

## 4. Signature interaction
**Collage terbentuk bertahap dari kosong menjadi spread lengkap.**

### Scroll direction
Mixed; foto slide dari samping; tape/doodle dari atas/bawah.

### Timing
`0–15 Hook → 15–35 Signature → 35–60 Names/Story → 60–78 Event → 78–92 RSVP → 92–100 Closing`

## 5. Navbar / Flying Navbar
**Posisi:** bawah tengah  
**Skin:** Bottom floating pill seperti sticker label.

**Item:** Home • Gallery • Event • RSVP • More

Behavior:
- muncul setelah 10–18% scroll;
- active state mengikuti section;
- auto-hide saat scroll down boleh;
- muncul lagi saat scroll up;
- tidak menutup CTA RSVP;
- icon SVG sederhana mengikuti tema.

## 6. Flow halaman
1. Scrap cover
2. Photo collage 1
3. Names
4. Photo collage 2
5. Event cards
6. RSVP sticker
7. Closing note

## 7. Typography behavior
- maksimal 1 display + 1 body + 1 optional accent font;
- nama pasangan menggunakan signature reveal;
- body cukup fade + translateY kecil;
- tanggal tidak boleh lebih dominan daripada nama.

## 8. Asset list
### Mandatory
- cover field/background;
- primary ornament;
- secondary ornament set;
- micro ornament set;
- divider;
- navbar skin + nav icons;
- event card treatment;
- RSVP button treatment;
- closing ornament.

### Optional
- alternate pattern;
- alternate color preset;
- guest-name badge;
- monogram frame;
- reduced-motion cover.

## 9. Format aset
- Ornament/frame/icon/navbar: SVG
- Pattern: SVG/PNG tileable
- Texture/grain: PNG/WebP
- Foto user: raster upload
- Dynamic text: HTML

## 10. Prompt inti aset
```text
flat editorial scrapbook wedding, cream black cobalt coral, photo collage tape doodles torn edges, flat 2D composition, mobile wedding invitation design, clean editable graphic elements,
no 3D perspective, no depth parallax, no photorealistic scene, no text baked into artwork
```

## 11. Motion constraints
### Boleh
translate X/Y, rotate 2–8°, scale 0.96–1.04, clip-path, mask wipe, draw-line, flat card flip, color transition, scroll-linked horizontal shift.

### Jangan
z-depth parallax, camera dolly, perspective zoom, 3D tilt berlebihan, motion besar yang mengganggu baca teks.

## 12. Mobile rules
- baseline 390×844; QA 360×800 dan 430×932;
- navbar tidak menutup CTA;
- title tidak bertabrakan dengan ornament aktif;
- motion tetap enak dengan one-hand scroll.

## 13. Reduced motion
Semua ornament langsung posisi final; signature interaction jadi fade sederhana; navbar tetap penuh fungsi.

## 14. QA
- [ ] Identitas tema terbaca dari thumbnail.
- [ ] Signature interaction khas, bukan generik.
- [ ] Ornament tidak menutup teks.
- [ ] Navbar menyatu dengan tema.
- [ ] Tetap 2D, bukan 2.5D.
- [ ] RSVP mudah ditemukan.
- [ ] Aman di 360/390/430 px.
- [ ] Reduced-motion tetap menarik.
- [ ] Foto user menjadi pusat visual tanpa tertutup ornament.
