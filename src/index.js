import "../src/styles.css";
import img1 from "../src/img/battleship400.png";
import img2 from "../src/img/battleship800.png";
import img3 from "../src/img/Screenshot400w.png";
import img4 from "../src/img/Screenshot800w.png";

const elementIsIn = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= window.innerHeight - window.innerHeight / 6 ||
    rect.bottom <= window.innerHeight / 6
  );
};

const slideUlDown = () => {
  const Ul = document.querySelector("header ul");
  const stackGrid = document.querySelector(".stackGrid");
  const projectImgs = document.querySelectorAll(".projectImg");
  const scrollHandler = () => {
    if (window.scrollY === 0) {
      Ul.classList.add("expand");
    } else {
      Ul.classList.remove("expand");
    }
    if (!elementIsIn(stackGrid)) {
      stackGrid.classList.add("slideIn");
    } else {
      stackGrid.classList.remove("slideIn");
    }
    projectImgs.forEach((img) => {
      if (!elementIsIn(img)) {
        img.classList.add("slideIn");
      } else {
        img.classList.remove("slideIn");
      }
    });
  };
  window.addEventListener("scroll", scrollHandler);
};

slideUlDown();
