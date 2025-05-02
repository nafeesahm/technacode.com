document.addEventListener('DOMContentLoaded', () => {
  const testimonials = document.querySelectorAll('#testimonials .testimonial');
  const prevBtn = document.querySelector('#testimonials .prev-btn');
  const nextBtn = document.querySelector('#testimonials .next-btn');
  let index = 0;

  function updateSlider() {
    testimonials.forEach((t, i) => {
      if (i === index) {
        t.style.display = 'block';
        t.classList.add('active');
      } else {
        t.style.display = 'none';
        t.classList.remove('active');
      }
    });
  }

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + testimonials.length) % testimonials.length;
    updateSlider();
  });

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % testimonials.length;
    updateSlider();
  });

  // Auto slide every 5 seconds (adjust as needed)
  setInterval(() => {
    index = (index + 1) % testimonials.length;
    updateSlider();
  }, 5000);  // Adjust the time to change testimonials

  // Initialize the first testimonial
  updateSlider();
});