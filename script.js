document.body.onload = () => {
  const h1 = document.getElementById("h1");
  h1.classList.add("show");
};

const height = 10;
const headerHolder = document.getElementsByTagName("header")[0];
const gridItems = document.getElementsByClassName("grid-item");

window.addEventListener("scroll", () => {
  setHeaderEffect();
  revealGridItems();
});

function setHeaderEffect() {
  if (window.scrollY > height) {
    if (!headerHolder.classList.contains("fixed")) {
      headerHolder.classList.add("fixed");
    }
  } else {
    if (headerHolder.classList.contains("fixed")) {
      headerHolder.classList.remove("fixed");
    }
  }
}

function revealGridItems() {
  const winTop = window.scrollY + window.innerHeight;
  for (let item of gridItems) {
    if (item.getBoundingClientRect().top + 200 < winTop) {
      if (!item.classList.contains("show")) {
        item.classList.add("show");
      }
    } else {
      if (item.classList.contains("show")) {
        item.classList.remove("show");
      }
    }
  }
}
