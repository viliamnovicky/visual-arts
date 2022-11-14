const allSections = document.querySelectorAll('.section')
const section = document.querySelector('.section')
const allImages = document.querySelectorAll('.img')

imageModal = document.querySelector('.image-modal')
imageOverlay = document.querySelector('.image-overlay')
btnImageModalClose = document.querySelector('.btn-image-modal-close')

const openImage = function (e) {
    e.preventDefault()
    imageModal.classList.remove('hidden')
    imageOverlay.classList.remove('hidden')
}

const revealSection = function (entries, observer) {
    const [entry] = entries

    if (!entry.isIntersecting) return

    entry.target.classList.remove('blog-hidden')
    entry.target.classList.remove('blog-img-hidden')
    observer.unobserve(entry.target)
}

// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.1,
// });

const imageObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.4,
})

// allSections.forEach(function (section) {
//   sectionObserver.observe(section);
//   section.classList.add('blog-hidden');
// });

allImages.forEach(function (image) {
    imageObserver.observe(image)
    image.classList.add('blog-img-hidden')
})

allImages.forEach((image) =>
    image.addEventListener('click', function () {
        imageModal.src = image.src
        if (image.src != undefined) {
            imageModal.classList.remove('hidden')
            imageOverlay.classList.remove('hidden')
        }
    })
)

const closeModal = function (e) {
    e.preventDefault()
    imageModal.src = '../img/back-grey.jpg'
    imageModal.classList.add('hidden')
    imageOverlay.classList.add('hidden')
}

btnImageModalClose.addEventListener('click', closeModal)
imageOverlay.addEventListener('click', closeModal)

// NAVBAR
const islandNavbarDaysFull = document.querySelector('.island-days')
const islandNavbarDays = document.querySelector('.island-days-list')
const islandHamburgerDays = document.querySelector('.island-days-hamburger')
const islandHamburgerClose = document.querySelector('.hamburger-close')
const islandNavbarDay = document.querySelectorAll('.nav-li')

islandHamburgerDays.addEventListener('click', function (e) {
    e.preventDefault()
    islandNavbarDays.classList.remove('hidden-tab-port-to-mobile')
    islandNavbarDaysFull.style.paddingTop = '10vh'
    islandHamburgerDays.style.marginTop = '2rem'
    islandHamburgerDays.classList.add('hidden')
    islandHamburgerClose.classList.remove('hidden')
    allSections.forEach((s) => (s.style.filter = 'blur(5px)'))
})

islandHamburgerClose.addEventListener('click', function () {
    islandNavbarDays.classList.add('hidden-tab-port-to-mobile')
    islandNavbarDaysFull.style.paddingTop = '0'
    islandHamburgerDays.style.marginTop = '-38rem'
    islandHamburgerDays.classList.remove('hidden')
    islandHamburgerClose.classList.add('hidden')
    allSections.forEach((s) => (s.style.filter = 'blur(0)'))
})

islandNavbarDay.forEach((day) =>
    day.addEventListener('click', function () {
        console.log('picitam')
        console.log(day.dataset.href);
        location.href = `${day.dataset.href}`
        islandNavbarDays.classList.add('hidden-tab-port-to-mobile')
        islandNavbarDaysFull.style.paddingTop = '0'
        islandHamburgerDays.classList.remove('hidden')
        islandHamburgerClose.classList.add('hidden')
        allSections.forEach((s) => (s.style.filter = 'blur(0)'))
        islandHamburgerDays.style.marginTop = '-38rem'
    })
)

// // SLIDER
// const slider = function () {
//   const slides = document.querySelectorAll('.slide');
//   const btnLeft = document.querySelector('.slider__btn--left');
//   const btnRight = document.querySelector('.slider__btn--right');
//   const dotContainer = document.querySelector('.dots');

//   let currentSlide = 0;
//   const maxSlide = slides.length;

//   // Fucntions
//   const createDots = function () {
//     slides.forEach(function (s, i) {
//       dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`);
//     });
//   };

//   const activateDot = function (slide) {
//     document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
//     document.querySelector(`.dots__dot[data-slide = "${slide}"]`).classList.add('dots__dot--active');
//   };

//   const goToSlide = function (slide) {
//     slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));
//   };

//   const nextSlide = function () {
//     if (currentSlide === maxSlide - 1) {
//       currentSlide = 0;
//     } else currentSlide++;

//     goToSlide(currentSlide);
//     activateDot(currentSlide);
//   };

//   const prevSlide = function () {
//     if (currentSlide === 0) {
//       currentSlide = maxSlide - 1;
//     } else currentSlide--;
//     goToSlide(currentSlide);
//     activateDot(currentSlide);
//   };

//   const init = function () {
//     goToSlide(0);
//     createDots();
//     activateDot(0);
//   };

//   init();

//   btnRight.addEventListener('click', nextSlide);
//   btnLeft.addEventListener('click', prevSlide);

//   document.addEventListener('keydown', function (e) {
//     console.log(e);
//     if (e.key === 'ArrowLeft') prevSlide();
//     e.key === 'ArrowRight' && nextSlide(); // iná možnosť zápisu
//   });

//   dotContainer.addEventListener('click', function (e) {
//     if (e.target.classList.contains('.dots__dot')) {
//       const slide = e.target.dataset.slide;
//       goToSlide(slide);
//       activateDot(slide);
//     }
//   });
// };

// slider();
