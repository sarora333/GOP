const starField = document.querySelector('.stars');

// Create stars
function createStars() {
  for (let i = 0; i < 200; i++) {
    let star = document.createElement('div');
    star.classList.add('star');
    star.style.position = 'absolute';
    star.style.backgroundColor = 'white';
    star.style.borderRadius = '50%';
    star.style.opacity = Math.random() * 0.5 + 0.5; // random opacity
    star.style.width = `${Math.random() * 2 + 1}px`; // random size
    star.style.height = star.style.width;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;

    // Set random speed and movement for each star
    let speed = Math.random() * 0.5 + 0.1;
    let direction = Math.random() * 360; // random angle

    // Movement of stars
    function moveStar() {
      let currentLeft = parseFloat(star.style.left);
      let currentTop = parseFloat(star.style.top);
      
      // Move star
      star.style.left = `${(currentLeft + Math.cos(direction) * speed) % 100}%`;
      star.style.top = `${(currentTop + Math.sin(direction) * speed) % 100}%`;
    }

    // Animation loop
    setInterval(moveStar, 20);

    starField.appendChild(star);
  }
}

createStars();