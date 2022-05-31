let toTopButton = document.querySelector("#top-button");
toTopButton.addEventListener("click", toTop);
let previousButton = document.querySelector('.previous-button');
let nextButton = document.querySelector('.next-button');
let pictureList = document.querySelector('.picture-list');
let pictures = document.querySelectorAll('.pictures');
let slider = pictures[0].offsetWidth;
let picture = 0;
let introPhrase = "Welcome";
let splitPhrase = introPhrase.split("");
let clear;
// -------------------------------------------------To the top button
function toTop() {
    window.scrollTo(0, 0);
}
// -----------------------------------------------------Carousel
window.addEventListener('resize', () => {
    slider = pictures[0].offsetWidth;
});
function buttons(picture) {
    if (picture === 0) {
        previousButton.classList.add('hide');
        nextButton.classList.remove('hide');
    }
    else if (picture === pictures.length - 1) {
        previousButton.classList.remove('hide');
        nextButton.classList.add('hide');
    }
    else {
        previousButton.classList.remove('hide');
        nextButton.classList.remove('hide');
    }
}
nextButton.addEventListener('click', function () {
    if (picture >= pictures.length - 1)
        return; picture++;
    let pictureContainer = pictures[picture].firstElementChild;
    if (pictureContainer.getAttribute('src') === "") {
        pictureContainer.setAttribute('src', pictureContainer.dataset.src);
    }
    pictureList.style.transition = "transform 0.35s ease-in-out";
    pictureList.style.transform = 'translateX(-' + slider * picture + 'px)';
    buttons(picture);
});
previousButton.addEventListener('click', function () {
    if (picture === 0)
        return; picture--;
    pictureList.style.transition = "transform 0.35s ease-in-out";
    pictureList.style.transform = 'translateX(-' + slider * picture + 'px)';
    buttons(picture);
});
// ----------------------------------------------------Typewriter
function typeWriter() {
    if (splitPhrase.length > 0) {
        document.getElementById("text").innerHTML += splitPhrase.shift();
    } else {
        clearTimeout(clear);
    }
    loopIt = setTimeout("typeWriter()", 250);
}
typeWriter();
// -------------------------------------------------------Lazy
[].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function () {
        img.removeAttribute('data-src');
    };
});