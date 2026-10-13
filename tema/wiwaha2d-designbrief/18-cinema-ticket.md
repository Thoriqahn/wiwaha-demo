# Cinema Ticket — Brief Tema Undangan 2D

> Kategori: **2D Non-Photo**  
> Referensi: `00-panduan-umum-2d.md`

## 1. Konsep
**Mood:** cinematic, nostalgic, stylish, fun  
**Palet:** cream, burgundy, black, faded gold  
**Arah layout:** Vertikal; ticket strip horizontal; credits naik.  
**Key visual:** Movie ticket + opening credits + title typography

Tema ini **tidak bergantung pada foto pasangan** dan harus tetap terasa selesai tanpa foto.

## 2. Prinsip visual
Flat, graphic, jelas 2D. Gunakan shape datar, ornament SVG, typography sebagai elemen visual, mask/reveal/translate/rotate ringan. Hindari depth-parallax, perspective scene, dan camera zoom.

## 3. Sistem ornamen
### Primary ornament
**Movie ticket + opening credits + title typography**

### Ornament set
- ticket stub
- star shape
- film perforation
- credit line
- marquee dots
- clapper icon

### Arah ornament
- ornament besar mengikuti arah layout utama;
- micro ornament boleh masuk dari atas/bawah atau sisi;
- divider gunakan draw-line, wipe, atau scale-X;
- pattern boleh shift horizontal/vertical secara flat;
- cover maksimal 2 ornament dominan; RSVP harus paling bersih.

## 4. Signature interaction
**Ticket tear-line reveal; nama muncul seperti title card film.**

### Scroll direction
Vertikal; ticket strip horizontal; credits naik.

### Timing
`0–15 Hook → 15–35 Signature → 35–60 Names/Story → 60–78 Event → 78–92 RSVP → 92–100 Closing`

## 5. Navbar / Flying Navbar
**Posisi:** kanan bawah  
**Skin:** Floating mini-ticket kanan bawah; tap membuka nav.

**Item:** Home • Story • Event • RSVP • More

Behavior:
- muncul setelah 10–18% scroll;
- active state mengikuti section;
- auto-hide saat scroll down boleh;
- muncul lagi saat scroll up;
- tidak menutup CTA RSVP;
- icon SVG sederhana mengikuti tema.

## 6. Flow halaman
1. Ticket cover
2. Opening title
3. Story credits
4. Event screening
5. RSVP seat
6. End credits

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
flat classic cinema wedding, cream burgundy black faded gold, ticket stubs film-title graphics, flat 2D composition, mobile wedding invitation design, clean editable graphic elements,
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
- [ ] Desain tetap selesai tanpa foto pasangan.
