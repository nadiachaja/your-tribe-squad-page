let horizontal1 = document.querySelector(".grid-container.cards");
horizontal1.addEventListener("wheel", (e) => {
  e.preventDefault();
  horizontal1.scrollLeft += e.deltaY;
})

let horizontal2 = document.querySelector(".grid-container.campus");
horizontal2.addEventListener("wheel", (e) => {
  e.preventDefault();
  horizontal2.scrollLeft += e.deltaY;
})