// Real-time Clock logic
function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const options = { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: '2-digit', 
        hour12: true 
    };
    clock.textContent = now.toLocaleString('en-US', options).replace(',', '');
}

setInterval(updateClock, 1000);
updateClock();

// Lively Parallax & Scaling fit
document.addEventListener('mousemove', (e) => {
    const bg = document.getElementById('parallax-bg');
    const hero = document.querySelector('.hero-text');
    const cards = document.querySelectorAll('.glass-card');
    
    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;

    // Move background
    bg.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
    
    // Parallax hero text
    hero.style.transform = `translate(calc(-50% + ${-x * 1.5}px), calc(-50% + ${-y * 1.5}px))`;
    
    // Smooth Tilt for cards
    cards.forEach(card => {
        card.style.transform = `perspective(1000px) rotateY(${x/2}deg) rotateX(${-y/2}deg)`;
    });
});
