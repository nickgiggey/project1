const toTopButton = document.querySelector("#top-button");
toTopButton.addEventListener("click", toTop);

function toTop() {
    window.scrollTo(0, 0);
}