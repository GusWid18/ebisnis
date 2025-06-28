document.addEventListener("DOMContentLoaded", function() {

    // Opsi untuk Intersection Observer
    const options = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.2 // elemen dianggap terlihat jika 20% bagiannya masuk viewport
    };

    // Fungsi callback yang akan dijalankan saat elemen terlihat
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            // Jika elemen masuk ke viewport
            if (entry.isIntersecting) {
                // Tambahkan kelas 'visible' untuk memicu animasi CSS
                entry.target.classList.add('visible');
                // Hentikan pengamatan setelah animasi berjalan sekali
                observer.unobserve(entry.target);
            }
        });
    };

    // Buat observer baru
    const observer = new IntersectionObserver(callback, options);

    // Ambil semua elemen yang ingin dianimasikan
    const targets = document.querySelectorAll('.anim-target');

    // Mulai amati setiap elemen target
    targets.forEach(target => {
        observer.observe(target);
    });

});