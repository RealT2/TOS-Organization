function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const options = { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true };
    clock.textContent = now.toLocaleString('en-US', options).replace(',', '');
}
setInterval(updateClock, 1000);
updateClock();

// Parallax/Lively Movement
document.addEventListener('mousemove', (e) => {
    const bg = document.getElementById('parallax-bg');
    const title = document.querySelector('.tos-bg-text');
    const cards = document.querySelectorAll('.glass-card');
    
    const x = (window.innerWidth / 2 - e.pageX) / 45;
    const y = (window.innerHeight / 2 - e.pageY) / 45;

    bg.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
    title.style.transform = `translate(${-x * 1.5}px, ${-y * 1.5}px)`;
    
    cards.forEach(card => {
        card.style.transform = `perspective(1000px) rotateY(${x/2}deg) rotateX(${-y/2}deg)`;
    });
});
