const toTop = document.getElementById("toTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
});

toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});