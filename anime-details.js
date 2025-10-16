// Anime Details Page JavaScript

// Comprehensive anime database mapping - ALL ANIME FROM HOMEPAGE
const animeDatabase = {
    'dan-da-dan': { title: 'DAN DA DAN', img: 'img/1.jpg', desc: 'Together, they must challenge the paranormal forces threatening their world.', genres: ['Action', 'Supernatural', 'Comedy', 'Romance', 'Sci-Fi'], year: '2024', trailerIds: ['vqJiV62M9ks'] },
    'blue-box': { title: 'Blue Box', img: 'img/2.jpg', desc: 'Taiki Inomata loves badminton, but he has a long way to go before he can reach nationals', genres: ['Sports', 'Romance', 'Shounen'], year: '2024', trailerIds: ['Bo736A-0GU0'] },
    'tying-the-knot-with-an-amagami-sister': { title: 'Tying the Knot with an Amagami Sister', img: 'img/3.jpg', desc: 'Uryu Kamihate is a high school student hoping to enroll in Kyoto University medical school.', genres: ['Romance', 'Comedy', 'Slice of Life'], year: '2024', trailerIds: [] },
    '365-days-to-the-wedding': { title: '365 Days to the Wedding', img: 'img/4.jpg', desc: 'Takuya and Rika work at the same travel agency in Tokyo and are both happily introverted and single', genres: ['Romance', 'Comedy', 'Slice of Life'], year: '2024', trailerIds: [] },
    'blue-lock': { title: 'Blue Lock', img: 'img/5.jpg', desc: 'Japans desire for World Cup glory leads the Japanese Football Association to launch a new rigorous training program to find the national teams next striker.', genres: ['Sports', 'Drama', 'Shounen'], year: '2022', trailerIds: ['Bo736A-0GU0'] },
    'your-name': { title: 'Your Name.', img: 'img/6.jpg', desc: 'Mitsuha and Taki are total strangers living completely different lives.', genres: ['Romance', 'Drama', 'Supernatural', 'Movie'], year: '2016', trailerIds: ['xU47nhruN-Q'] },
    'i-want-to-eat-your-pancreas': { title: 'I Want to Eat Your Pancreas', img: 'img/7.jpg', desc: 'Spring time in April and the last of the cherry blossoms are still in bloom.', genres: ['Drama', 'Romance', 'Movie'], year: '2018', trailerIds: ['3X5d4XxqJD4'] },
    'a-silent-voice': { title: 'A Silent Voice', img: 'img/8.jpg', desc: 'After transferring into a new school, a deaf girl, Shouko Nishimiya, is bullied by the popular Shouya Ishida.', genres: ['Drama', 'Romance', 'Movie'], year: '2016', trailerIds: ['nfK6UgLra7g'] },
    're-zero': { title: 'Re:ZERO', img: 'img/9.jpg', desc: 'The third season of Re:Zero kara Hajimeru Isekai Seikatsu.', genres: ['Fantasy', 'Thriller', 'Isekai'], year: '2024', trailerIds: ['ETxmCCsMoD0'] },
    'you-are-ms-servant': { title: 'You are Ms. Servant', img: 'img/10.jpg', desc: 'Hitoyoshi, a high school kid who lives alone, hears a knock on his door.', genres: ['Comedy', 'Slice of Life'], year: '2024', trailerIds: [] },
    'solo-leveling': { title: 'Solo Leveling', img: 'img/11.jpg', desc: 'They say whatever doesnt kill you makes you stronger, but thats not the case for the worlds weakest hunter Sung Jinwoo.', genres: ['Action', 'Fantasy', 'Adventure'], year: '2024', trailerIds: ['HxbJio56c3A'] },
    'black-clover': { title: 'Black Clover', img: 'img/12.jpg', desc: 'In a world where magic is everything, Asta and Yuno are both found abandoned at a church on the same day.', genres: ['Action', 'Fantasy', 'Shounen'], year: '2017', trailerIds: ['sj6vwHgsz2Y'] },
    'nier-automata-ver1-1a': { title: 'NieR:Automata Ver1.1a', img: 'img/13.jpg', desc: 'The sudden aerial invasion of Earth by Aliens and their creations Machine Lifeforms led mankind to the brink of extinction.', genres: ['Action', 'Sci-Fi', 'Drama'], year: '2023', trailerIds: [] },
    'chainsaw-man': { title: 'Chainsaw Man', img: 'img/15.jpg', desc: 'Denji is a young boy who works as a Devil Hunter with the Chainsaw Devil Pochita.', genres: ['Action', 'Horror', 'Supernatural'], year: '2022', trailerIds: ['v4yLeNt-kCU'] },
    'takt-op-destiny': { title: 'takt op.Destiny', img: 'img/16.jpg', desc: 'Music and fate intertwine in a post-apocalyptic world.', genres: ['Action', 'Fantasy', 'Music'], year: '2021', trailerIds: [] },
    'one-piece': { title: 'One Piece', img: 'img/17.jpg', desc: 'Embark on a voyage of a lifetime with One Piece.', genres: ['Action', 'Adventure', 'Fantasy', 'Shounen'], year: '1999', trailerIds: ['MCb13lbVGE0'] },
    'tower-of-god': { title: 'Tower of God', img: 'img/18.jpg', desc: 'Reach the top, and everything will be yours.', genres: ['Action', 'Adventure', 'Fantasy', 'Mystery'], year: '2020', trailerIds: ['RNyClKykWl0'] },
    'demon-slayer-kimetsu-no-yaiba': { title: 'Demon Slayer: Kimetsu no Yaiba', img: 'img/19.jpg', desc: 'It is the Taisho Period in Japan. Tanjiro must become a demon slayer to save his sister.', genres: ['Action', 'Supernatural', 'Historical', 'Shounen'], year: '2019', trailerIds: ['6vMuWuWlW4I', 'a9tq0aS5Zu8'] }
};

// Generate full anime data from database entry
function generateAnimeData(animeId) {
    const baseData = animeDatabase[animeId];
    if (!baseData) return null;

    const currentYear = 2024;
    const releaseYear = parseInt(baseData.year);
    let status = 'Completed';
    if (releaseYear === currentYear) status = 'Airing';
    else if (releaseYear > currentYear) status = 'Upcoming';

    const isMovie = baseData.genres.includes('Movie');
    const episodes = isMovie ? '1 Movie' : `${Math.floor(Math.random() * 13) + 12} Episodes`;
    const rating = (8.0 + Math.random() * 1.5).toFixed(1) + '/10';

    let synopsis = baseData.desc;
    if (synopsis.length < 200) {
        synopsis += '\n\nThis compelling anime series offers an engaging narrative that captivates viewers with its unique storytelling approach. The character development is exceptional, drawing audiences into the emotional journey of the protagonists. With stunning animation and a carefully crafted plot, this anime has become a fan favorite among viewers worldwide.';
    }
    if (synopsis.length < 400) {
        synopsis += '\n\nThe series explores deep themes and relationships, creating memorable moments that resonate long after viewing. Each episode builds upon the last, maintaining tension and excitement while developing the world and its inhabitants in meaningful ways.';
    }

    const trailers = baseData.trailerIds.map((videoId, index) => ({
        title: `${baseData.title} - ${index === 0 ? 'Official Trailer' : 'Trailer ' + (index + 1)}`,
        thumbnail: baseData.img,
        videoId: videoId,
        views: `${(Math.random() * 10 + 1).toFixed(1)}M views`
    }));

    if (trailers.length === 0) {
        trailers.push({
            title: `${baseData.title} - Trailer`,
            thumbnail: baseData.img,
            videoId: 'dQw4w9WgXcQ',
            views: '1.5M views'
        });
    }

    const voiceActorNames = ['Yuki Kaji', 'Kana Hanazawa', 'Hiroshi Kamiya', 'Miyuki Sawashiro', 'Tomokazu Sugita', 'Mamoru Miyano', 'Saori Hayami', 'Jun Fukuyama'];
    const cast = Array(4).fill(0).map((_, i) => ({
        name: voiceActorNames[Math.floor(Math.random() * voiceActorNames.length)],
        role: i < 3 ? 'Voice Actor' : 'Director',
        character: i < 3 ? `Main Character ${i + 1}` : '',
        avatar: 'img/profile.gif'
    }));

    const allAnimeIds = Object.keys(animeDatabase).filter(id => id !== animeId);
    const relatedAnime = Array(4).fill(0).map(() => {
        const randomId = allAnimeIds[Math.floor(Math.random() * allAnimeIds.length)];
        const related = animeDatabase[randomId];
        return {
            title: related.title,
            year: related.year,
            img: related.img,
            link: `?anime=${randomId}`
        };
    });

    const reviewerNames = ['Anime Enthusiast', 'OtakuReviewer', 'AnimeFan2024', 'SeriesWatcher', 'MangaReader'];
    const reviews = Array(2).fill(0).map((_, i) => ({
        name: reviewerNames[Math.floor(Math.random() * reviewerNames.length)],
        avatar: 'img/profile.gif',
        date: i === 0 ? '2 days ago' : '1 week ago',
        rating: Math.floor(Math.random() * 2) + 4,
        text: `${baseData.title} is an amazing anime! The story is engaging and the characters are well-developed. ${i === 0 ? 'The animation quality is top-notch and every episode keeps you wanting more.' : 'Highly recommended for fans of the genre. The pacing is perfect and the emotional moments hit hard.'}`
    }));

    const studios = ['MAPPA', 'Wit Studio', 'ufotable', 'Bones', 'A-1 Pictures', 'Madhouse', 'Kyoto Animation', 'Production I.G', 'Studio Pierrot', 'Toei Animation', 'Science SARU', 'Eight Bit'];
    const sources = ['Manga', 'Light Novel', 'Original', 'Visual Novel', 'Web Manga'];

    return {
        title: baseData.title,
        poster: baseData.img,
        background: baseData.img,
        releaseDate: `${['January', 'April', 'July', 'October'][Math.floor(Math.random() * 4)]} ${baseData.year}`,
        status: status,
        episodes: episodes,
        rating: rating,
        genres: baseData.genres,
        synopsis: synopsis,
        type: isMovie ? 'Movie' : 'TV Series',
        studios: studios[Math.floor(Math.random() * studios.length)],
        source: sources[Math.floor(Math.random() * sources.length)],
        duration: isMovie ? '1h 50min' : '24 min per ep',
        premiered: `${['Winter', 'Spring', 'Summer', 'Fall'][Math.floor(Math.random() * 4)]} ${baseData.year}`,
        producers: 'Multiple Studios',
        trailers: trailers,
        cast: cast,
        relatedAnime: relatedAnime,
        reviews: reviews
    };
}

function getAnimeId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('anime') || 'dan-da-dan';
}

function showLoadingState() {
    document.getElementById('loading-container').style.display = 'flex';
    document.getElementById('anime-details-content').style.display = 'none';
}

function hideLoadingState() {
    document.getElementById('loading-container').style.display = 'none';
    document.getElementById('anime-details-content').style.display = 'block';
}

function loadAnimeData() {
    showLoadingState();
    
    setTimeout(() => {
        const animeId = getAnimeId();
        const anime = generateAnimeData(animeId);
        
        if (!anime) {
            document.getElementById('loading-container').innerHTML = `
                <div class="loading-text" style="color: #ff5a00;">Anime not found. <a href="index.html" style="color: #ff8c42;">Return to home</a></div>
            `;
            return;
        }
        
        loadAnimeContent(anime);
    }, 1500);
}

function loadAnimeContent(anime) {
    document.getElementById('anime-title').textContent = anime.title;
    document.getElementById('release-date').innerHTML = `<i class="far fa-calendar"></i> ${anime.releaseDate}`;
    document.getElementById('status').innerHTML = `<i class="fas fa-signal"></i> ${anime.status}`;
    document.getElementById('episodes').innerHTML = `<i class="fas fa-film"></i> ${anime.episodes}`;
    document.getElementById('rating').innerHTML = `<i class="fas fa-star"></i> ${anime.rating}`;
    
    const posterImg = document.getElementById('anime-poster');
    posterImg.onload = function() {
        posterImg.classList.add('loaded');
        posterImg.parentElement.classList.add('loaded');
    };
    posterImg.src = anime.poster;
    posterImg.alt = anime.title;
    
    const heroBg = document.getElementById('hero-bg');
    heroBg.style.backgroundImage = `url('${anime.background}')`;
    
    const genresContainer = document.getElementById('anime-genres');
    genresContainer.innerHTML = anime.genres.map(genre => 
        `<span class="genre-tag">${genre}</span>`
    ).join('');
    
    document.getElementById('anime-synopsis').textContent = anime.synopsis;
    document.getElementById('info-type').textContent = anime.type;
    document.getElementById('info-studios').textContent = anime.studios;
    document.getElementById('info-source').textContent = anime.source;
    document.getElementById('info-duration').textContent = anime.duration;
    document.getElementById('info-premiered').textContent = anime.premiered;
    document.getElementById('info-producers').textContent = anime.producers;
    
    loadTrailers(anime.trailers);
    loadCast(anime.cast);
    loadRelatedAnime(anime.relatedAnime);
    loadReviews(anime.reviews);
    
    hideLoadingState();
    
    const sections = document.querySelectorAll('.content-section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.animation = 'fadeIn 0.6s ease-out';
        }, index * 100);
    });
}

function loadTrailers(trailers) {
    const trailersGrid = document.getElementById('trailers-grid');
    trailersGrid.innerHTML = trailers.map(trailer => `
        <div class="trailer-card" onclick="openYouTubeVideo('${trailer.videoId}')">
            <div style="position: relative;">
                <img src="${trailer.thumbnail}" alt="${trailer.title}" class="trailer-thumbnail img-loading">
                <div class="trailer-play-btn">
                    <i class="fab fa-youtube"></i>
                </div>
            </div>
            <div class="trailer-info">
                <h3 class="trailer-title">${trailer.title}</h3>
                <p class="trailer-views">${trailer.views}</p>
            </div>
        </div>
    `).join('');
    
    const images = trailersGrid.querySelectorAll('img');
    images.forEach(img => {
        img.onload = function() {
            img.classList.remove('img-loading');
        };
    });
}

function openYouTubeVideo(videoId) {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
}

function loadCast(cast) {
    const castList = document.getElementById('cast-list');
    castList.innerHTML = cast.map(person => `
        <div class="cast-card">
            <img src="${person.avatar}" alt="${person.name}" class="cast-avatar img-loading">
            <div class="cast-name">${person.name}</div>
            <div class="cast-role">${person.role}</div>
            ${person.character ? `<div class="cast-character">${person.character}</div>` : ''}
        </div>
    `).join('');
}

function loadRelatedAnime(relatedAnime) {
    const relatedGrid = document.getElementById('related-anime-grid');
    relatedGrid.innerHTML = relatedAnime.map(anime => `
        <div class="related-anime-card" onclick="window.location.href='anime-details.html${anime.link}'">
            <img src="${anime.img}" alt="${anime.title}" class="related-anime-img img-loading">
            <div class="related-anime-overlay">
                <h3 class="related-anime-title">${anime.title}</h3>
                <p class="related-anime-year">${anime.year}</p>
            </div>
        </div>
    `).join('');
}

function loadReviews(reviews) {
    const reviewsContainer = document.getElementById('reviews-container');
    reviewsContainer.innerHTML = reviews.map(review => `
        <div class="review-card">
            <div class="review-header">
                <img src="${review.avatar}" alt="${review.name}" class="reviewer-avatar">
                <div class="reviewer-info">
                    <div class="reviewer-name">${review.name}</div>
                    <div class="review-date">${review.date}</div>
                </div>
                <div class="review-rating">
                    ${Array(review.rating).fill('<i class="fas fa-star"></i>').join('')}
                    ${Array(5 - review.rating).fill('<i class="far fa-star"></i>').join('')}
                </div>
            </div>
            <p class="review-text">${review.text}</p>
        </div>
    `).join('');
}

// Video Player Modal Function (for anime-details page)
function openVideoPlayer(animeTitle, animeImage = 'img/background.jpg') {
  const videoPlayerHTML = `
    <div class="video-player-modal" id="video-player-modal" onclick="closeOnOutsideClickDetails(event)">
      <div class="video-player-container" onclick="event.stopPropagation()">
        <div class="video-player-header">
          <h2><i class="fas fa-play-circle"></i> Now Playing: ${animeTitle}</h2>
          <span class="video-player-close" onclick="closeVideoPlayerDetails()" title="Close (Esc)">&times;</span>
        </div>
        <div class="video-player-wrapper">
          <div class="video-placeholder" style="background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('${animeImage}'); background-size: cover; background-position: center;">
            <i class="fas fa-play-circle play-icon"></i>
            <p class="video-message">Video player ready</p>
            <p class="video-submessage">Click play to start watching ${animeTitle}</p>
          </div>
          <div class="video-controls">
            <button class="control-btn" onclick="showNotification('Rewound 10 seconds')" title="Rewind">
              <i class="fas fa-backward"></i>
            </button>
            <button class="control-btn play-pause-btn" onclick="togglePlayPauseDetails()" title="Play/Pause">
              <i class="fas fa-play"></i>
            </button>
            <button class="control-btn" onclick="showNotification('Forwarded 10 seconds')" title="Forward">
              <i class="fas fa-forward"></i>
            </button>
            <div class="volume-control">
              <i class="fas fa-volume-up" id="volume-icon-details"></i>
              <input type="range" class="volume-slider" min="0" max="100" value="70" title="Volume" oninput="updateVolumeDetails(this.value)">
            </div>
            <button class="control-btn fullscreen-btn" onclick="toggleFullscreenDetails()" title="Fullscreen">
              <i class="fas fa-expand"></i>
            </button>
          </div>
        </div>
        <div class="video-info">
          <div class="episode-selector">
            <button class="episode-btn active" onclick="selectEpisodeDetails(this, 1)">Episode 1</button>
            <button class="episode-btn" onclick="selectEpisodeDetails(this, 2)">Episode 2</button>
            <button class="episode-btn" onclick="selectEpisodeDetails(this, 3)">Episode 3</button>
            <button class="episode-btn" onclick="selectEpisodeDetails(this, 4)">Episode 4</button>
            <button class="episode-btn" onclick="selectEpisodeDetails(this, 5)">Episode 5</button>
          </div>
          <div class="video-description">
            <h3>About this anime</h3>
            <p>Experience the best anime streaming with high-quality video and smooth playback. Enjoy ${animeTitle} with subtitles and multiple quality options.</p>
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', videoPlayerHTML);
  document.body.style.overflow = 'hidden';
}

function closeVideoPlayerDetails() {
  const modal = document.getElementById('video-player-modal');
  if (modal) {
    modal.remove();
    document.body.style.overflow = '';
  }
}

function closeOnOutsideClickDetails(event) {
  if (event.target.id === 'video-player-modal') {
    closeVideoPlayerDetails();
  }
}

function togglePlayPauseDetails() {
  const btn = document.querySelector('.play-pause-btn i');
  if (btn.classList.contains('fa-play')) {
    btn.classList.remove('fa-play');
    btn.classList.add('fa-pause');
    showNotification('Playing...');
  } else {
    btn.classList.remove('fa-pause');
    btn.classList.add('fa-play');
    showNotification('Paused');
  }
}

function selectEpisodeDetails(button, episodeNum) {
  document.querySelectorAll('.episode-btn').forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
  showNotification(`Now playing: Episode ${episodeNum}`);
}

function updateVolumeDetails(value) {
  const icon = document.getElementById('volume-icon-details');
  if (icon) {
    if (value == 0) {
      icon.className = 'fas fa-volume-mute';
    } else if (value < 50) {
      icon.className = 'fas fa-volume-down';
    } else {
      icon.className = 'fas fa-volume-up';
    }
  }
}

function toggleFullscreenDetails() {
  const modal = document.getElementById('video-player-modal');
  if (!document.fullscreenElement) {
    if (modal.requestFullscreen) {
      modal.requestFullscreen();
    } else if (modal.webkitRequestFullscreen) {
      modal.webkitRequestFullscreen();
    } else if (modal.msRequestFullscreen) {
      modal.msRequestFullscreen();
    }
    showNotification('Entered fullscreen mode');
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    showNotification('Exited fullscreen mode');
  }
}

document.addEventListener('DOMContentLoaded', () => {
    loadAnimeData();
    
    document.getElementById('watch-now-btn').addEventListener('click', () => {
        const animeTitle = document.getElementById('anime-title').textContent;
        const animePoster = document.getElementById('anime-poster').src;
        openVideoPlayer(animeTitle, animePoster);
    });
    
    document.getElementById('trailer-btn').addEventListener('click', () => {
        const animeId = getAnimeId();
        const anime = generateAnimeData(animeId);
        if (anime && anime.trailers && anime.trailers.length > 0) {
            openYouTubeVideo(anime.trailers[0].videoId);
        } else {
            showNotification('Trailer not available');
        }
    });
    
    document.getElementById('favorite-btn').addEventListener('click', function() {
        this.classList.toggle('active');
        const icon = this.querySelector('i');
        if (this.classList.contains('active')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            showNotification('Added to favorites!');
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
            showNotification('Removed from favorites');
        }
    });
    
    document.getElementById('share-btn').addEventListener('click', () => {
        const url = window.location.href;
        if (navigator.share) {
            navigator.share({
                title: document.getElementById('anime-title').textContent,
                url: url
            });
        } else {
            navigator.clipboard.writeText(url);
            showNotification('Link copied to clipboard!');
        }
    });
    
    document.getElementById('add-to-list-btn').addEventListener('click', function() {
        if (this.textContent.includes('Add to')) {
            this.innerHTML = '<i class="fas fa-check"></i> Added to List';
            this.style.background = '#4dbf00';
            this.style.borderColor = '#4dbf00';
            showNotification('Added to your list!');
        } else {
            this.innerHTML = '<i class="fas fa-plus"></i> Add to My List';
            this.style.background = 'rgba(255, 90, 0, 0.2)';
            this.style.borderColor = '#ff5a00';
            showNotification('Removed from your list');
        }
    });
    
    const synopsisContent = document.querySelector('.synopsis-content');
    const readMoreBtn = document.getElementById('read-more-btn');
    synopsisContent.classList.add('collapsed');
    
    readMoreBtn.addEventListener('click', () => {
        if (synopsisContent.classList.contains('collapsed')) {
            synopsisContent.classList.remove('collapsed');
            readMoreBtn.textContent = 'Read Less';
        } else {
            synopsisContent.classList.add('collapsed');
            readMoreBtn.textContent = 'Read More';
        }
    });
    
    document.getElementById('load-more-reviews').addEventListener('click', () => {
        showNotification('No more reviews available');
    });
    
    // Close video player with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const videoModal = document.getElementById('video-player-modal');
            if (videoModal) {
                closeVideoPlayerDetails();
            }
        }
    });
});

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, #ff5a00, #ff8c42);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 8px 25px rgba(255, 90, 0, 0.4);
        z-index: 9999;
        font-weight: 600;
        animation: slideUp 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(20px); }
    }
`;
document.head.appendChild(style);
