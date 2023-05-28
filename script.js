const quesElements = document.querySelectorAll(".sec-question-li-para");
const queIcons = document.querySelectorAll(".sec-question-icon");
const quesEl = document.querySelectorAll(".que-sec-ul");

for (let i = 0; i < quesElements.length; i++) {
  const queEl = quesElements[i];

  quesEl[i].addEventListener("click", function () {
    quesElements[i].classList.toggle("hidden");
    queIcons[i].classList.toggle("rotate");
  });
}
