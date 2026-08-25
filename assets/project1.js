let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const slideshow = document.getElementById('slideshow');
const indicators = document.querySelectorAll('.indicator');

function goToSlide(index) {
    if (!slides.length || !slideshow) return;
    currentIndex = (index + slides.length) % slides.length;
    slideshow.style.transform = `translateX(-${currentIndex * 100}%)`;
    indicators.forEach((ind, i) => {
        ind.classList.toggle('active', i === currentIndex);
    });
}

indicators.forEach((ind, i) => {
    ind.addEventListener('click', () => goToSlide(i));
});

if (slides.length > 1) {
    setInterval(() => goToSlide(currentIndex + 1), 4500);
}
