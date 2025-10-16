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

// Search Functionality
const searchIcon = document.getElementById('search-icon');
const searchModal = document.getElementById('search-modal');
const searchClose = document.querySelector('.search-close');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

// Anime database for search
const animeDatabase = [
  { title: 'DAN DA DAN', desc: 'Together, they must challenge the paranormal forces threatening their world.', img: 'img/1.jpg' },
  { title: 'Blue Box', desc: 'Taiki Inomata loves badminton, but he has a long way to go before he can reach nationals', img: 'img/2.jpg' },
  { title: 'Tying the Knot with an Amagami Sister', desc: 'Uryu Kamihate is a high school student hoping to enroll in Kyoto University\'s medical school.', img: 'img/3.jpg' },
  { title: '365 Days to the Wedding', desc: 'Takuya and Rika work at the same travel agency in Tokyo and are both happily introverted and single', img: 'img/4.jpg' },
  { title: 'Blue Lock', desc: 'Japan\'s desire for World Cup glory leads the Japanese Football Association to launch a new rigorous training program.', img: 'img/5.jpg' },
  { title: 'Your Name.', desc: 'Mitsuha and Taki are total strangers living completely different lives.', img: 'img/6.jpg' },
  { title: 'I Want to Eat Your Pancreas', desc: 'Spring time in April and the last of the cherry blossoms are still in bloom.', img: 'img/7.jpg' },
  { title: 'A Silent Voice', desc: 'After transferring into a new school, a deaf girl, Shouko Nishimiya, is bullied by the popular Shouya Ishida.', img: 'img/8.jpg' },
  { title: 'Re:ZERO', desc: 'The third season of Re:Zero kara Hajimeru Isekai Seikatsu.', img: 'img/9.jpg' },
  { title: 'You are Ms. Servant', desc: 'Hitoyoshi, a high school kid who lives alone, hears a knock on his door.', img: 'img/10.jpg' },
  { title: 'Solo Leveling', desc: 'They say whatever doesn\'t kill you makes you stronger, but that\'s not the case for the world\'s weakest hunter Sung Jinwoo.', img: 'img/11.jpg' },
  { title: 'Black Clover', desc: 'In a world where magic is everything, Asta and Yuno are both found abandoned at a church on the same day.', img: 'img/12.jpg' },
  { title: 'NieR:Automata Ver1.1a', desc: 'The sudden aerial invasion of Earth by (Aliens) and their creations (Machine Lifeforms) led mankind to the brink of extinction.', img: 'img/13.jpg' },
  { title: 'Chainsaw Man', desc: 'Denji is a young boy who works as a Devil Hunter with the "Chainsaw Devil" Pochita.', img: 'img/15.jpg' },
  { title: 'takt op.Destiny', desc: 'Music and fate intertwine in a post-apocalyptic world.', img: 'img/16.jpg' },
  { title: 'One Piece', desc: 'Embark on a voyage of a lifetime with One Piece.', img: 'img/17.jpg' },
  { title: 'Tower of God', desc: 'Reach the top, and everything will be yours.', img: 'img/18.jpg' },
  { title: 'Demon Slayer: Kimetsu no Yaiba', desc: 'It is the Taisho Period in Japan.', img: 'img/19.jpg' }
];

// Open search modal
if (searchIcon) {
  searchIcon.addEventListener('click', () => {
    searchModal.classList.add('active');
    searchInput.focus();
  });
}

// Close search modal
if (searchClose) {
  searchClose.addEventListener('click', () => {
    searchModal.classList.remove('active');
    searchInput.value = '';
    searchResults.innerHTML = '';
  });
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === searchModal) {
    searchModal.classList.remove('active');
    searchInput.value = '';
    searchResults.innerHTML = '';
  }
});

// Search functionality
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();
    
    if (searchTerm === '') {
      searchResults.innerHTML = '';
      return;
    }
    
    const filteredAnime = animeDatabase.filter(anime => 
      anime.title.toLowerCase().includes(searchTerm) || 
      anime.desc.toLowerCase().includes(searchTerm)
    );
    
    if (filteredAnime.length === 0) {
      searchResults.innerHTML = '<div class="no-results">No anime found. Try a different search term.</div>';
      return;
    }
    
    searchResults.innerHTML = filteredAnime.map(anime => `
      <div class="search-result-item">
        <img src="${anime.img}" alt="${anime.title}" class="search-result-img">
        <div class="search-result-info">
          <div class="search-result-title">${anime.title}</div>
          <div class="search-result-desc">${anime.desc}</div>
        </div>
      </div>
    `).join('');
  });
}

// Close search with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && searchModal.classList.contains('active')) {
    searchModal.classList.remove('active');
    searchInput.value = '';
    searchResults.innerHTML = '';
  }
});

// Profile Dropdown Functionality
const profileTrigger = document.getElementById('profile-trigger');
const profileDropdown = document.getElementById('profile-dropdown');
const profilePicture = document.querySelector('.profile-picture');

// Toggle dropdown
function toggleProfileDropdown(e) {
  e.stopPropagation();
  profileDropdown.classList.toggle('active');
}

if (profileTrigger) {
  profileTrigger.addEventListener('click', toggleProfileDropdown);
}

if (profilePicture) {
  profilePicture.addEventListener('click', toggleProfileDropdown);
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (profileDropdown && !profileDropdown.contains(e.target) && 
      e.target !== profileTrigger && e.target !== profilePicture) {
    profileDropdown.classList.remove('active');
  }
});

// Profile dropdown item actions
const profileItems = document.querySelectorAll('.profile-dropdown-item');
profileItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const text = item.textContent.trim();
    
    if (text === 'Logout') {
      alert('Logout functionality - You will be logged out');
      profileDropdown.classList.remove('active');
    } else if (text === 'My Profile') {
      alert('Redirecting to profile page...');
      profileDropdown.classList.remove('active');
    } else if (text === 'My Favorites') {
      alert('Showing your favorite anime...');
      profileDropdown.classList.remove('active');
    } else if (text === 'Watch History') {
      alert('Loading your watch history...');
      profileDropdown.classList.remove('active');
    } else if (text === 'Settings') {
      alert('Opening settings...');
      profileDropdown.classList.remove('active');
    }
  });
});


