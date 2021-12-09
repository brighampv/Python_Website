document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    document.querySelector(".modal").classList.add("show");
  });
});

document.querySelector(".modal .content").addEventListener("click", () => {
  document.querySelector(".modal").classList.remove("show");
});
