// Function for Real-time Clock
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    
    const options = { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: '2-digit', 
        hour12: true 
    };
    
    // Formatting to match "Mon Jun 10 9:41 AM"
    let formatted = now.toLocaleString('en-US', options).replace(',', '');
    clockElement.textContent = formatted;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock();

// Lively Movement: Parallax and Tilt Effect
document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const moveX = (clientX - centerX) / 50;
    const moveY = (clientY - centerY) / 50;

    // Background moves subtly
    const bg = document.querySelector('.parallax-bg');
    bg.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;

    // Hero Title moves in opposition
    const title = document.querySelector('.hero-title');
    title.style.transform = `translate(${-moveX * 1.5}px, ${-moveY * 1.5}px)`;

    // Glass cards tilt towards mouse
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach(card => {
        card.style.transform = `perspective(1000px) rotateY(${moveX / 2}deg) rotateX(${-moveY / 2}deg)`;
    });
});

// Reset tilt when mouse leaves
document.addEventListener('mouseleave', () => {
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach(card => {
        card.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`;
    });
});
