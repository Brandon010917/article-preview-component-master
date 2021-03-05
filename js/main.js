const d = document,
  $btnIcon = d.querySelector(".card__icon");

d.addEventListener("click", (e) => {
  if (e.target === $btnIcon) {
    $btnIcon.classList.toggle("card__icon--active");
    d.querySelector(".footer-active").classList.toggle("footer-active--show");
  }
});
