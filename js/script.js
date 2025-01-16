const thumbnails = document.querySelectorAll('.thumbnail');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0; // Indeks gambar yang sedang ditampilkan

// Buka lightbox dengan gambar sesuai indeks
function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = thumbnails[currentIndex].dataset.full;
    lightbox.style.display = 'flex';
    document.body.classList.add('no-scroll'); // Disable scroll pada body
}

// Tutup lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    document.body.classList.remove('no-scroll'); // Enable scroll pada body
});

// Navigasi ke gambar sebelumnya
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    lightboxImg.src = thumbnails[currentIndex].dataset.full;
});

// Navigasi ke gambar berikutnya
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    lightboxImg.src = thumbnails[currentIndex].dataset.full;
});

// Event listener untuk thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => openLightbox(index));
});

// Tutup lightbox saat area luar gambar diklik
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
        document.body.classList.remove('no-scroll'); // Enable scroll pada body
    }
});
