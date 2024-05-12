document.addEventListener('DOMContentLoaded', function() {
    let index = 0;
    const slides = document.querySelectorAll('.slider-box .slide');
    const totalSlides = slides.length;

    function nextSlide() {
        slides[index].classList.remove('active');
        index = (index + 1) % totalSlides;
        slides[index].classList.add('active');
    }

    setInterval(nextSlide, 4000); // Cambia de slide cada 4 segundos
});
