// Ambil semua elemen yang memiliki dropdown
const dropdowns = document.querySelectorAll('nav li');

// Tambahkan event listener untuk setiap dropdown
dropdowns.forEach(dropdown => {
  dropdown.addEventListener('mouseenter', () => {
    const subMenu = dropdown.querySelector('.dropdown');
    if (subMenu) {
      subMenu.style.display = 'block'; // Tampilkan submenu saat mouse masuk
    }
  });

  dropdown.addEventListener('mouseleave', () => {
    const subMenu = dropdown.querySelector('.dropdown');
    if (subMenu) {
      subMenu.style.display = 'none'; // Sembunyikan submenu saat mouse keluar
    }
  });
});
