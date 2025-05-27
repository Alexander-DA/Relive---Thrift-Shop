document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.getElementById('main-nav');
    if(hamburger && navUl) {
        hamburger.addEventListener('click', function() {
            navUl.classList.toggle('active');
            this.setAttribute('aria-expanded', navUl.classList.contains('active'));
        });
    }
});