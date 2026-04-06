// Dynamic Clock to match Image 4
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
    
    // Format: Mon Jun 10 9:41 AM
    let timeStr = now.toLocaleDateString('en-US', options).replace(',', '');
    clock.textContent = timeStr;
}

setInterval(updateClock, 1000);
updateClock();

// Lively Parallax Movement
document.addEventListener('mousemove', (e) => {
    const bg = document.querySelector('.bg-image');
    const title = document.querySelector('.main-title');
    const cards = document.querySelectorAll('.glass-card');
    
    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;

    // Background moves subtly in opposite direction
    bg.style.transform = `translate3d(${-x}px, ${-y}px, 0)`;
    
    // Title moves slightly
    title.style.transform = `translate3d(${x * 0.5}px, ${y * 0.5}px, 0)`;
    
    // Cards have a floating tilt
    cards.forEach(card => {
        card.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg)`;
    });
});
