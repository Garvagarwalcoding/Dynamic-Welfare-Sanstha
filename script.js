// Scroll reveal
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    });

    // Show back-to-top button
    const btn = document.getElementById('topBtn');
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
});

// Back to top
document.getElementById('topBtn').onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
