function gridDivs() {
    const grid = document.querySelector('.container-grid');
    const rows = 12;
    const cols = 12;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const div = document.createElement('div');
            div.classList.add('grid-item');
            div.style.width = `${100 / cols}%`;
            div.style.height = `${100 / rows}%`;
            grid.appendChild(div);
        }
    }
}

const button = document.querySelector('#reset');
button.addEventListener('click', () => {
    const input = prompt("Enter the number of rows and columns (max 100):", "12")
    const size = parseInt(input);
    if (size > 0 && size <= 100) {
        const grid = document.querySelector('.container-grid');
        grid.innerHTML = ''; // Clear existing grid
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const div = document.createElement('div');
                div.classList.add('grid-item');
                div.style.width = `${100 / size}%`;
                div.style.height = `${100 / size}%`;
                grid.appendChild(div);
            }
        }
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
});
gridDivs();