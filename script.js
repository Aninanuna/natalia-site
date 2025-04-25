function showThankYou() {
    document.getElementById('overlay').style.display = 'flex';
}
function closeThankYou() {
    document.getElementById('overlay').style.display = 'none';
}
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });
    sections.forEach(section => {
        observer.observe(section);
    });
});