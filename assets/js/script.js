/* ------------------------- Menu-Mobile ------------------------- */
const openMenu = document.querySelector('.open-menu-btn');
const closeMenu = document.querySelector('.close-menu-btn');
const menu = document.querySelector('header nav');

openMenu.addEventListener('click', () => {
    openMenu.style.display = 'none';

    menu.style.display = 'block';
    menu.style.position = 'absolute';

    setTimeout(() => {
        menu.style.top = '60px';
    }, 200);

    closeMenu.style.display = 'block';
})

closeMenu.addEventListener('click', () => {
    openMenu.style.display = 'block';

    menu.style.top = '-200px';

    setTimeout(() => {
        menu.style.position = 'unset';
        menu.style.display = 'none';
    }, 200);

    closeMenu.style.display = 'none';
})

/* ------------------------- Carousel ------------------------- */

const slides = document.querySelectorAll('[data-js="carousel__item"]');
const nextButton = document.querySelector('[data-js="carousel__button--next"]');
const prevButton = document.querySelector('[data-js="carousel__button--prev"]');

let currentSlideIndex = 0;

nextButton.addEventListener('click', () => {
    if (currentSlideIndex === slides.length - 1) {
        currentSlideIndex = 0
    } else {
        currentSlideIndex++;
    }

    slides.forEach(slide => {
        slide.classList.remove('carousel__item--visible');
    });

    slides[currentSlideIndex].classList.add('carousel__item--visible');
});


prevButton.addEventListener('click', () => {
    if (currentSlideIndex === 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex--;
    }

    slides.forEach(slide => {
        slide.classList.remove('carousel__item--visible');
    });

    slides[currentSlideIndex].classList.add('carousel__item--visible');
});

/* ------------------------- Modal ------------------------- */
const modal = document.querySelector('[data-js="modal"]');
const modalImage = document.querySelector('[data-js="modal__content"] img')
const closeModalButton = document.querySelector('[data-js="modal__button--close"]');
const images = document.querySelectorAll('.carousel__item img');


//-------------- Close Modal

modal.addEventListener('click', (e) => {
    if (e.target.id === modal.id) {
        modal.style.display = 'none';
    }
})

closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

//-------------- Open Modal

images.forEach(image => image.addEventListener('click', () => {
    modalImage.setAttribute('src', image.src);
    modal.style.display = 'flex';
})
);
