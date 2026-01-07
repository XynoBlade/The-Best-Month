// Generate random stars
        const starsContainer = document.getElementById('stars');
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.width = Math.random() * 3 + 'px';
            star.style.height = star.style.width;
            star.style.animationDelay = Math.random() * 3 + 's';
            starsContainer.appendChild(star);
        }

        // Carousel functionality
        let currentSlide = 0;
        const carousel = document.getElementById('carousel');
        const slides = carousel.children;
        const totalSlides = slides.length;
        const indicatorsContainer = document.getElementById('indicators');

        // Create indicators
        for (let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'indicator';
            if (i === 0) indicator.classList.add('active');
            indicator.onclick = () => goToSlide(i);
            indicatorsContainer.appendChild(indicator);
        }

        function updateCarousel() {
            carousel.style.transform = `translateX(-${currentSlide * 100}%)`;

            // Update indicators
            const indicators = indicatorsContainer.children;
            for (let i = 0; i < indicators.length; i++) {
                indicators[i].classList.toggle('active', i === currentSlide);
            }
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarousel();
        }

        function goToSlide(index) {
            currentSlide = index;
            updateCarousel();
        }

        // Auto-advance carousel
        setInterval(nextSlide, 5000);

        // Smooth scroll for CTA button
        document.querySelector('.cta-button').addEventListener('click', () => {
            document.querySelector('.section').scrollIntoView({
                behavior: 'smooth'
            });
        });