const SQUARE_COUNT = 3;
const SPEED = 5;
const TIMER_SPEED = 16.6;

document.addEventListener('DOMContentLoaded', () => {
    let box = document.querySelector("#box");

    box.addEventListener("mouseover", () => {
    box.style.backgroundColor = NewColour();
});

box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "white";
});

    for (let i = 0; i < SQUARE_COUNT; i++) {
        let square = document.createElement('img');
         square.src = "laughing_man.jpg";
         square.alt = "Catch the Laughing Man!";
        square.className = "square";
        box.appendChild(square);
        square.addEventListener("mouseover", () => {
    square.src = "orochimaru_50x50.jpg";
});

square.addEventListener("mouseout", () => {
    square.src = "laughing_man.jpg";
});
    }

    Array.from(box.children).forEach((element) => {
        const parent = element.parentElement;
        const maxX = parent.clientWidth - element.clientWidth;
        const maxY = parent.clientHeight - element.clientHeight;

        let dx = SPEED * Math.random() * 2 - 1;
        let dy = SPEED * Math.random() * 2 - 1;

        let x = parseInt(element.style.left) || 225;
        let y = parseInt(element.style.top) || 175;

        setInterval(() => {
            if (x <= 0 || x >= maxX) {
    dx *= -1;
    element.style.borderColor = NewColour();
}

if (y <= 0 || y >= maxY) {
    dy *= -1;
    element.style.borderColor = NewColour();
}

            x += dx;
            y += dy;

            element.style.left = x + "px";
            element.style.top = y + "px";
        }, TIMER_SPEED);
    });
});

function NewColour() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}