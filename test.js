const leftBtn = document.querySelector(".button .left");
const rightBtn = document.querySelector(".button .right");
const imgBoxList = document.querySelector(".slider .imgBoxList");
// const imgBox = document.querySelectorAll(".slider .imgBox");
let currentIdx = 1;

function moveSlide(num) {
  imgBoxList.style.transform = `translate(${num * -280}px)`;
  currentIdx = num;
}

leftBtn.addEventListener("click", function () {
  if (currentIdx > 1) {
    moveSlide(currentIdx - 2);
    currentIdx++;
  }
});

rightBtn.addEventListener("click", function () {
  if (currentIdx < 3) {
    moveSlide(currentIdx);
    currentIdx++;
  }
});
