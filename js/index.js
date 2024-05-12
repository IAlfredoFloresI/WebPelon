document.addEventListener('DOMContentLoaded', () => {
    let slides = document.querySelectorAll('.slider-box li');
    let currentSlide = 0;
    let slideInterval = setInterval(nextSlide, 5000);
    
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    function goToSlide(n) {
        slides[currentSlide].className = '';
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].className = 'visible';
        updateDots();
    }

    function updateDots() {
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.className = index === currentSlide ? 'dot active' : 'dot';
        });
    }

    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    // Crear puntos indicadores
    const dotsContainer = document.querySelector('.dots-container');
    for (let i = 0; i < slides.length; i++) {
        let dot = document.createElement('span');
        dot.className = 'dot';
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
    updateDots();
});
