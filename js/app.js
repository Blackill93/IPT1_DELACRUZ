//Header fixed
window.onscroll = function () {
  const docScrollTop = document.documentElement.scrollTop;
  if (window.innerWidth > 991) {
    if (docScrollTop > 100) {
      document.querySelector("header").classList.add("fixed");
    } else {
      document.querySelector("header").classList.remove("fixed");
    }
  }
}

//navbar links
const navbar = document.querySelector(".navbar");
a = navbar.querySelectorAll("a")
a.forEach(function (element) {
  element.addEventListener("click", function () {
    for (let i = 0; i < a.length; i++) {
      a[i].classList.remove("active")
    }
    this.classList.add("active");
    document.querySelector(".navbar").classList.toggle("show");
  })
})

//Hamburger
const hamBurger = document.querySelector(".hamburger");
hamBurger.addEventListener("click", function () {
  document.querySelector(".navbar").classList.toggle("show");
})

//Footer Year 
var year = document.getElementById("year");
year.innerHTML = new Date().getFullYear();


const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button--right');
const prevButton = document.querySelector('.carousel-button--left');
const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange the slides next to each other
slides.forEach((slide, index) => {
   slide.style.left = slideWidth * index + 'px';
});

const moveToSlide = (track, currentSlide, targetSlide) => {
   track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
   currentSlide.classList.remove('current-slide');
   targetSlide.classList.add('current-slide');
};

// Click right, move to the next slide
nextButton.addEventListener('click', () => {
   const currentSlide = track.querySelector('.current-slide');
   const nextSlide = currentSlide.nextElementSibling;
   if (nextSlide) moveToSlide(track, currentSlide, nextSlide);
});

// Click left, move to the previous slide
prevButton.addEventListener('click', () => {
   const currentSlide = track.querySelector('.current-slide');
   const prevSlide = currentSlide.previousElementSibling;
   if (prevSlide) moveToSlide(track, currentSlide, prevSlide);
});


