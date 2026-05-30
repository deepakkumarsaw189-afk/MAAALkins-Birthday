const pages = document.querySelectorAll(".page");
const pageCounter = document.getElementById("pageCounter");

let currentPage = 0;

updateCounter();

function nextPage() {

    if (currentPage >= pages.length - 1) {

        if (typeof showFinale === "function") {
            showFinale();
        }

        return;
    }

    pages[currentPage].classList.add("flipped");

    currentPage++;

    updateCounter();

}

function prevPage() {

    if (currentPage <= 0) return;

    currentPage--;

    pages[currentPage].classList.remove("flipped");

    updateCounter();

}

function updateCounter() {

    if (!pageCounter) return;

    pageCounter.innerText =
        `Page ${currentPage} / ${pages.length - 1}`;

}

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

if (nextBtn) {
    nextBtn.addEventListener("click", nextPage);
}

if (prevBtn) {
    prevBtn.addEventListener("click", prevPage);
}

/* Swipe Support For Mobile */

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (e) => {

    touchStartX = e.changedTouches[0].screenX;

});

document.addEventListener("touchend", (e) => {

    touchEndX = e.changedTouches[0].screenX;

    handleSwipe();

});

function handleSwipe() {

    const diff = touchStartX - touchEndX;

    if (diff > 60) {

        nextPage();

    } else if (diff < -60) {

        prevPage();

    }

}

/* Keyboard Support */

document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowRight") {

        nextPage();

    }

    if (e.key === "ArrowLeft") {

        prevPage();

    }

});