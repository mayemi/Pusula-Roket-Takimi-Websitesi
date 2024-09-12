const slides = document.querySelectorAll(".photos img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initGallery);

function initGallery(){
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displayPhoto");
        intervalId = setInterval(nextPhoto, 5000);
    }
}

function showPhoto(index){
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    slides.forEach(slide => {
        slide.classList.remove("displayPhoto");
    });
    slides[slideIndex].classList.add("displayPhoto");
}

function prevPhoto(){
    slideIndex--;
    showPhoto(slideIndex);
    resetInterval();
}

function nextPhoto(){
    slideIndex++;
    showPhoto(slideIndex);
    resetInterval();
}

function resetInterval(){
    clearInterval(intervalId);
    intervalId = setInterval(nextPhoto, 5000);
}
