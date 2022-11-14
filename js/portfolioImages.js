const allSections = document.querySelectorAll('.section')
const allImages = document.querySelectorAll('.img')

const imageModal = document.querySelector('.image-modal')
const imageOverlay = document.querySelector('.image-overlay')
const btnImageModalClose = document.querySelector('.btn-image-modal-close')

const revealSection = function (entries, observer) {
    const [entry] = entries

    if (!entry.isIntersecting) return

    entry.target.classList.remove('blog-hidden')
    entry.target.classList.remove('blog-img-hidden')
    observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.1,
})

const imageObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.4,
})

allSections.forEach(function (section) {
    sectionObserver.observe(section)
    section.classList.add('blog-hidden')
})

allImages.forEach(function (image) {
    imageObserver.observe(image)
    image.classList.add('blog-img-hidden')
})

allImages.forEach((image) =>
    image.addEventListener('click', function () {
        imageModal.src = image.dataset.src
        if(image.dataset.height) {
            imageModal.classList.add("portrait-width")
        }

        if (image.src != undefined) {
            imageModal.classList.remove('hidden')
            imageOverlay.classList.remove('hidden')
        } 
    })
)

const closeModal = function(e) {
    e.preventDefault()
    imageModal.src = "./img/back-grey.jpg"
    imageModal.style.background = "grey"
    imageModal.classList.add('hidden')
    imageOverlay.classList.add('hidden')
    imageModal.classList.remove("portrait-width")
}

btnImageModalClose.addEventListener('click', closeModal)
imageOverlay.addEventListener('click', closeModal)