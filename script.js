const pages = document.querySelectorAll(".page");
const flipSound = document.getElementById("flipSound");
let currentPage = 0;

flipSound.volume = 0.3;

// Flip only the top page when tapped
pages.forEach((page, index) => {
    page.addEventListener("click", () => {
        if (index === currentPage) {
            page.style.transform = "rotateY(-180deg)";
            flipSound.currentTime = 0;
            flipSound.play();
            currentPage++;
        }
    });
});