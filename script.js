// Smooth scrolling for nav links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetID = this.getAttribute('href');
        const targetSection = document.querySelector(targetID);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
