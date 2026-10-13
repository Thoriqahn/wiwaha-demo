/** Pasang tema tersimpan sebelum halaman ditampilkan. */
try {
  const tema = localStorage.getItem("wiwaha-tema");
  if (tema === "light" || tema === "dark") {
    document.documentElement.dataset.theme = tema;
  }
} catch {
  // Penyimpanan bisa dinonaktifkan browser; gunakan tema perangkat.
}
