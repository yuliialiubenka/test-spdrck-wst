export const slides = document.querySelectorAll('.carousel__slide');
const totalSlides = slides.length;
const indicator = document.querySelector('.carousel__indicator');
const thumbnails = document.querySelectorAll('.carousel__thumbnail');
const controlsPrev = document.querySelector('.carousel__controls-button.prev');
const controlsNext = document.querySelector('.carousel__controls-button.next');
const paginationPrev = document.querySelector(
  '.carousel__pagination-button.prev'
);
const paginationNext = document.querySelector(
  '.carousel__pagination-button.next'
);

export let activeIndex = 0;
let currentThumbnailGroupIndex = 0;
const thumbnailsPerPage = 5;
indicator.innerText = `1/${totalSlides}`;

function updateSlideIndicator(index) {
  indicator.innerText = `${index + 1}/${totalSlides}`;
}

function showThumbnailsForCurrentGroup() {
  thumbnails.forEach((thumbnail, index) => {
    const groupIndex = Math.floor(index / thumbnailsPerPage);
    if (groupIndex === currentThumbnailGroupIndex) {
      thumbnail.classList.remove('hidden');
    } else {
      thumbnail.classList.add('hidden');
    }
  });

  paginationPrev.disabled = currentThumbnailGroupIndex === 0;
  paginationNext.disabled =
    currentThumbnailGroupIndex ===
    Math.ceil(totalSlides / thumbnailsPerPage) - 1;
}

function moveThumbnailsRight() {
  if (
    currentThumbnailGroupIndex <
    Math.ceil(totalSlides / thumbnailsPerPage) - 1
  ) {
    currentThumbnailGroupIndex++;
    showThumbnailsForCurrentGroup();
  }
}

function moveThumbnailsLeft() {
  if (currentThumbnailGroupIndex > 0) {
    currentThumbnailGroupIndex--;
    showThumbnailsForCurrentGroup();
  }
}

paginationPrev.addEventListener('click', moveThumbnailsLeft);

paginationNext.addEventListener('click', moveThumbnailsRight);

showThumbnailsForCurrentGroup();

function showSlide(index) {
  activeIndex = index < 0 ? slides.length - 1 : index % slides.length;
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === activeIndex);
  });
  thumbnails.forEach((thumbnail, i) => {
    thumbnail.classList.toggle('active', i === activeIndex);
  });
  updateSlideIndicator(activeIndex);
  currentThumbnailGroupIndex = Math.floor(activeIndex / thumbnailsPerPage);
  showThumbnailsForCurrentGroup();

  if (activeIndex === 0) {
    controlsPrev.disabled = true;
  } else {
    controlsPrev.disabled = false;
  }

  if (activeIndex === slides.length - 1) {
    controlsNext.disabled = true;
  } else {
    controlsNext.disabled = false;
  }
}

controlsPrev.addEventListener('click', () => {
  showSlide(activeIndex - 1);
});

controlsNext.addEventListener('click', () => {
  showSlide(activeIndex + 1);
});

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    showSlide(index);
  });
});

showSlide(activeIndex);
