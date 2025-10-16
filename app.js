// Movie carousel functionality
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});

// Dark/Light mode toggle
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

if (ball) {
  ball.addEventListener("click", () => {
    items.forEach((item) => {
      item.classList.toggle("active");
    });
    ball.classList.toggle("active");
  });
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Logo click to go home
const logo = document.querySelector('.logo');
if (logo) {
  logo.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
}

// Add keyboard navigation for carousel
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    const firstArrow = document.querySelector('.arrow');
    if (firstArrow) firstArrow.click();
  }
});

// Enhanced watch button functionality
const watchButtons = document.querySelectorAll('.movie-list-item-button, .featured-button');
watchButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    // Add your watch functionality here
    console.log('Watch button clicked');
    // You can redirect to a video player page or open a modal
  });
});
