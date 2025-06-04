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
gridDivs();