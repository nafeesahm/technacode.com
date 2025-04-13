let testimonialIndex = 0;

function showTestimonials() {
    const testimonials = document.querySelectorAll('.testimonial');
    const totalTestimonials = testimonials.length;
    let slidePosition = -testimonialIndex * (testimonials[0].offsetWidth + 20); // 20px for margin-right
    document.querySelector('.testimonial-container').style.transform = `translateX(${slidePosition}px)`;
}

function nextTestimonial() {
    const totalTestimonials = document.querySelectorAll('.testimonial').length;
    testimonialIndex = (testimonialIndex + 1) % totalTestimonials;
    showTestimonials();
}

// Auto-slide testimonials every 5 seconds
setInterval(nextTestimonial, 5000);

// Initial testimonial display
showTestimonials();