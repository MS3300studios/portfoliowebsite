const canvas = document.getElementById('canvas');
const initialStrokeCount = 30; // Initial strokes count
const newStrokesCount = 20;
const addNewStrokeInterval = 5000; // Time interval for adding new strokes (3 seconds)
let totalStrokesInDOM = 0;

function createStroke(){
    totalStrokesInDOM+=1;
    const stroke = document.createElement('div');
    stroke.classList.add('stroke');

    // Randomized dimensions and positions
    const width = Math.random() * 15 + 5; // Width between 5px and 20px
    const height = Math.random() * 40 + 5; // Height between 5% and 25%
    const top = Math.random() * 100; // Top between 0% and 70%
    const left = Math.random() * 100; // Left between 0% and 70%
    const blur = Math.random() * 10;
    const moveSpeed = Math.random() * 10 + 20; // Random speed between 10s and 20s

    // Apply styles
    stroke.style.width = `${width}px`;
    stroke.style.height = `${height}%`;
    stroke.style.top = `${top}%`;
    stroke.style.left = `${left}%`;
    stroke.style.transform = `rotate(34deg)`;
    stroke.style.filter = `blur(${blur}px)`;
    stroke.style.animation = `moveStroke ${moveSpeed}s linear infinite`;    

    setTimeout(() => {
        stroke.style.opacity = 1;
    }, 50);

    const deletionTime = Math.random() * 10000 + 10000; // Random time between 10000ms (10s) and 20000ms (20s)
    setTimeout(() => {
        stroke.style.opacity = 0;
    }, deletionTime - 3000);
    setTimeout(() => {
        stroke.remove();
        totalStrokesInDOM-=1;
    }, deletionTime);

    canvas.appendChild(stroke);
}

// Create initial strokes
for (let i = 0; i < initialStrokeCount; i++) {
    createStroke();
}

// Add new strokes addNewStrokeInterval seconds
setInterval(() => {
    for (let i = 0; i < newStrokesCount; i++) {
        setTimeout(() => {
            createStroke();
        }, 500);
    }
}, addNewStrokeInterval);