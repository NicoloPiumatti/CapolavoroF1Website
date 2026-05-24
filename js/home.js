document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".carousel-item");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    
    let currentIndex = 0;
    let slideInterval;

    const slideLinks = [
        "scuderie.html",
        "calendario.html",
        "campioni.html"
    ];

    function showSlide(index) {
        if (index >= slides.length) 
            currentIndex = 0;
            else if (index < 0) 
                currentIndex = slides.length - 1;
            else 
                currentIndex = index;

        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        slides[currentIndex].classList.add("active");
        dots[currentIndex].classList.add("active");
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    function startInterval() {
        slideInterval = setInterval(nextSlide, 3500);
    }

    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }

    slides.forEach((slide, index) => {
        slide.style.cursor = "pointer";
        
        slide.addEventListener("click", (event) => {
            window.location.href = slideLinks[index];
        });
    });

    nextBtn.addEventListener("click", () => {
        nextSlide();
        resetInterval();
    });

    prevBtn.addEventListener("click", () => {
        prevSlide();
        resetInterval();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showSlide(index);
            resetInterval();
        });
    });
    startInterval();
});
