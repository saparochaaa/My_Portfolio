let slideIndex = 0;
let fsIndex = 0;

// Get slides ONCE
const slides = document.querySelectorAll(".slide");
function showSlide(index) {
  slides.forEach(slide => slide.style.display = "none");

  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;

  slides[slideIndex].style.display = "block";
}
function changeSlide(n) {
  slideIndex += n;
  showSlide(slideIndex);
}
// Auto slideshow
setInterval(() => {
  slideIndex++;
  showSlide(slideIndex);
}, 3000);

// Show first slide
showSlide(slideIndex);


function openFullscreen(index) {
  fsIndex = index;
  document.getElementById("fullscreenImg").src = slides[fsIndex].src;
  document.getElementById("fullscreenOverlay").style.display = "flex";
}

function closeFullscreen() {
  document.getElementById("fullscreenOverlay").style.display = "none";
}

function fsChange(direction) {
  fsIndex += direction;

  if (fsIndex >= slides.length) fsIndex = 0;
  if (fsIndex < 0) fsIndex = slides.length - 1;

  document.getElementById("fullscreenImg").src = slides[fsIndex].src;
}

document.addEventListener("keydown", e => {
  const overlay = document.getElementById("fullscreenOverlay");
  if (overlay.style.display !== "flex") return;

  if (e.key === "Escape") closeFullscreen();
  if (e.key === "ArrowRight") fsChange(1);
  if (e.key === "ArrowLeft") fsChange(-1);
});
