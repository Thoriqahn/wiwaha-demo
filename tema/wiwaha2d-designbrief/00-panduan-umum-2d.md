# Panduan Umum Tema Undangan 2D — Wiwaha

## 1. Definisi
Tema 2D tetap interaktif, tetapi motion-nya **flat**: reveal, mask, translate X/Y, rotate ringan, color change, typography animation, card/page transition, dan scroll-linked horizontal shift. Hindari depth-parallax, camera zoom, dan perspective 3D.

## 2. Struktur baseline
`Cover → Story/Gallery → Event → Location/Detail → RSVP → Closing`

## 3. Navbar universal
Fungsi konsisten: **Home • Story/Gallery • Event • RSVP • More**. Skin menyesuaikan tema. Maksimal 5 item, mobile-first, active state jelas, boleh auto-hide saat scroll down dan muncul saat scroll up. Navbar boleh muncul setelah 10–18% scroll agar cover tetap bersih.

## 4. Motion timing
- 0–15%: hook/cover
- 15–35%: signature reveal
- 35–60%: names/story
- 60–78%: event
- 78–92%: RSVP
- 92–100%: closing

## 5. Ornament system
Setiap tema minimal punya primary ornament, secondary ornament, micro ornament, divider/frame bila perlu, serta UI skin. Ornament boleh masuk dari kiri/kanan/atas/bawah, tetapi tetap flat.

## 6. Format aset
- SVG: ornament, icon, frame, navbar skin
- PNG/WebP: texture/grain
- SVG/PNG: pattern tileable
- Foto user: raster upload
- Semua dynamic text harus HTML, bukan baked-in image

## 7. Token warna
`--bg --surface --text --muted --accent --accent-2 --line --nav-bg --nav-active`

## 8. Safe area
Sisakan area cover untuk nama pasangan/tanggal. Jika bottom nav, sisakan minimal 72px di bawah CTA. Jika side nav, jangan taruh konten penting dekat sisi tersebut.

## 9. Reduced motion
Saat `prefers-reduced-motion`, semua ornament langsung ke posisi final, signature motion menjadi fade sederhana, navbar tetap berfungsi penuh.

## 10. Definition of Done
- thumbnail langsung terbaca identitasnya
- motion khas, bukan sekadar fade semua
- navbar tidak menutup CTA
- tetap 2D, bukan 2.5D
- aman di 360×800, 390×844, 430×932
- theme tetap kuat saat motion dimatikan
