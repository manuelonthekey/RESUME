document.addEventListener('DOMContentLoaded', () => {
    const poster = document.getElementById('poster');

    // Intersection Observer to trigger animation on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the class that triggers all CSS animations
                entry.target.classList.add('is-visible');
                
                // Optional: Stop observing once it has animated
                // observer.unobserve(entry.target);
            } else {
                // If you want the animation to replay every time they scroll away and back:
                // entry.target.classList.remove('is-visible');
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the poster is visible
    });

    observer.observe(poster);
});
