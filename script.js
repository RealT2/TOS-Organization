function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const options = { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true };
    clock.textContent = now.toLocaleString('en-US', options).replace(',', '');
}
setInterval(updateClock, 1000);
updateClock();

document.addEventListener('mousemove', (e) => {
    const bg = document.querySelector('.parallax-bg');
    const title = document.querySelector('.hero-title');
    const cards = document.querySelectorAll('.glass-card');
    
    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;

    bg.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
    title.style.transform = `translate(${-x * 1.2}px, ${-y * 1.2}px)`;
    
    cards.forEach(card => {
        card.style.transform = `perspective(1000px) rotateY(${x/2}deg) rotateX(${-y/2}deg)`;
    });
});
