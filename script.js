document.quierySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', fungtion(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('herf')).srollInteView({
            behavior: 'smooth'
        });
    });
});