// progress
const progress = document.getElementById("Progress");

const PrevBtn = document.getElementById("prev");

const NextBtn = document.getElementById("next");

const circle = document.querySelectorAll(".circle");

let activeIndex = 1;
NextBtn.addEventListener("click", () => {
  activeIndex++;
  if (activeIndex > circle.length) {
    activeIndex = circle.length;
  }
  updateUI();
});

PrevBtn.addEventListener("click", () => {
  activeIndex--;
  if (activeIndex < 1) {
    activeIndex = 1;
  }
  updateUI();
});

function updateUI() {
  circle.forEach((circle, index) => {
    if (index < activeIndex) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circle.length - 1)) * 100 + "%";
  if (activeIndex === 1) {
    PrevBtn.disabled = true;
  } else if (activeIndex === circle.length) {
    NextBtn.disabled = true;
  } else {
    PrevBtn.disabled = false;
    NextBtn.disabled = false;
  }
}
