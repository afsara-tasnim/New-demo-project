window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const content = document.getElementById('content');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
        content.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
        content.classList.remove('scrolled');
    }
});