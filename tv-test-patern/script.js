// Timer functionality
function updateTimers() {
    const now = new Date();
    
    // Timer 1: HH:mm format with blinking colon
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timerElement = document.getElementById('timer1');
    timerElement.innerHTML = `${hours}<span class="blinking-colon">:</span>${minutes}`;
    
    // Timer 2: DD-MM-YY format
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = String(now.getFullYear()).slice(-2);
    document.getElementById('timer2').textContent = `${day}-${month}-${year}`;
}

// Initialize timers and update every second
updateTimers();
setInterval(updateTimers, 1000);

// Add some responsive adjustments for better display
function adjustLayout() {
    const container = document.querySelector('.container');
    const centralCircle = document.querySelector('.central-circle');
    
    // Ensure the central circle maintains aspect ratio
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    // Make it more circular by using the smaller dimension
    const size = Math.min(containerWidth, containerHeight) * 0.7;
    centralCircle.style.width = `${size}px`;
    centralCircle.style.height = `${size}px`;
}

// Adjust on load and resize
window.addEventListener('load', adjustLayout);
window.addEventListener('resize', adjustLayout);

