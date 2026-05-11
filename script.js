// =========================
// VARIABLES
// =========================

const squareCount = 10;

const container = document.getElementById("container");

const laughingMan = "laughingman_50x50.jpg";
const orochimaru = "orochimaru_50x50.jpg";

const squares = [];

// =========================
// HELPER FUNCTION
// =========================

function getColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

// =========================
// CREATE SQUARES WITH LOOP
// =========================

for (let i = 0; i < squareCount; i++) {

  const square = document.createElement("div");
  square.classList.add("square");

  const img = document.createElement("img");

  img.src = laughingMan;

  square.appendChild(img);

  square.style.left =
    Math.random() * (window.innerWidth - 60) + "px";

  square.style.top =
    Math.random() * (window.innerHeight - 60) + "px";

  container.appendChild(square);

  // Mouseover image
  img.addEventListener("mouseover", function () {
    img.src = orochimaru;
  });

  // Mouseout image
  img.addEventListener("mouseout", function () {
    img.src = laughingMan;
  });

  // Mouseover square background change
  square.addEventListener("mouseover", function () {
    square.style.backgroundColor = getColor();
  });

  squares.push({
    element: square,
    x: parseFloat(square.style.left),
    y: parseFloat(square.style.top),
    dx: Math.random() * 4 + 1,
    dy: Math.random() * 4 + 1
  });
}

// =========================
// ANIMATION
// =========================

function animate() {

  squares.forEach(function (squareObj) {

    squareObj.x += squareObj.dx;
    squareObj.y += squareObj.dy;

    const square = squareObj.element;

    // Wall collision X
    if (
      squareObj.x + 50 >= window.innerWidth ||
      squareObj.x <= 0
    ) {

      squareObj.dx *= -1;

      square.style.borderColor = getColor();
      square.style.backgroundColor = getColor();
    }

    // Wall collision Y
    if (
      squareObj.y + 50 >= window.innerHeight ||
      squareObj.y <= 0
    ) {

      squareObj.dy *= -1;

      square.style.borderColor = getColor();
      square.style.backgroundColor = getColor();
    }

    square.style.left = squareObj.x + "px";
    square.style.top = squareObj.y + "px";

  });

  requestAnimationFrame(animate);
}

animate();