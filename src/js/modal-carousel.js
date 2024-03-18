import { activeIndex, slides } from './carousel';

const body = document.querySelector('body');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalPrev = document.querySelector('.modal__button.prev');
const modalNext = document.querySelector('.modal__button.next');
const modalClose = document.querySelector('.modal__close');
const carouselSlideOpenn = document.querySelector('.carousel__slide-oppen');

let modalIndex = 0;

carouselSlideOpenn.addEventListener('click', () => {
  modal.classList.add('open');
  modalIndex = activeIndex;
  showImageInModal(modalIndex);
  body.classList.add('overflow-hidden');
});

function showImageInModal(index) {
  modalImage.src = slides[index].querySelector('img').src;

  // Вимикаємо кнопки навігації, якщо користувач долистав до кінця
  modalPrev.disabled = index === 0;
  modalNext.disabled = index === slides.length - 1;
}

modalClose.addEventListener('click', () => {
  modal.classList.remove('open');
  body.classList.remove('overflow-hidden');
});

modalPrev.addEventListener('click', () => {
  modalIndex = (modalIndex - 1 + slides.length) % slides.length;
  showImageInModal(modalIndex);
});

modalNext.addEventListener('click', () => {
  modalIndex = (modalIndex + 1) % slides.length;
  showImageInModal(modalIndex);
});

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    modal.classList.remove('open');
    body.classList.remove('overflow-hidden');
  }
});
