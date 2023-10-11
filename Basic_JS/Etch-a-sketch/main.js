const gridContainer = document.querySelector('#gridContainer');
const resizeButton = document.querySelector('#resizeButton');

// Function to create the grid
function createGrid(gridSize) {
    gridContainer.innerHTML = ''; // Clear the existing grid
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = getRandomColor();
        });
        gridContainer.appendChild(square);
    }
}

// Add click event listener to the resize button
resizeButton.addEventListener('click', () => {
    let newSize = prompt('Enter the number of squares per side (maximum 100):');
    
    // Ensure newSize is a valid number and limit it to a maximum of 100
    newSize = parseInt(newSize);
    if (isNaN(newSize) || newSize < 1) {
        alert('Please enter a valid positive number.');
        return;
    } else if (newSize > 100) {
        alert('The maximum allowed size is 100.');
        return;
    }

    createGrid(newSize);
});

// Initial grid creation
createGrid(16); // Default grid size

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
