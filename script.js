function updateDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    const now = new Date();
    
    const options = { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: '2-digit', 
        hour12: true 
    };
    
    const formatted = now.toLocaleString('en-US', options).replace(',', '');
    dateTimeElement.textContent = formatted;
}

// Update time every minute
setInterval(updateDateTime, 1000);
updateDateTime();

// Parallax movement for cards
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.card');
    const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
    
    cards.forEach(card => {
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateY(-5px)`;
    });
});

// Reset card position on mouse leave
document.addEventListener('mouseleave', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
});
