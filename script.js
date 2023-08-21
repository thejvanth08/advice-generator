const generateBtn = document.getElementById("generate");
const adviceNum = document.getElementById("advice-num");
const adviceContent = document.getElementById("advice");
const container = document.getElementById("container");

generateBtn.addEventListener("click", () => {
  console.log("hi");
  generateAdvice();
});

const generateAdvice = async () => {
  // handling response promise
  const response = await fetch("https://api.adviceslip.com/advice");
  // handling parsed response promise
  const data = await response.json();
  //   console.log(data.slip);
  const adviceID = data.slip.id;
  const advice = data.slip.advice;

  adviceNum.innerText = adviceID;
  adviceContent.innerHTML = `<q>${advice}</q>`;
};

// when page first loads
window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  generateAdvice();
});

// hovering effect
generateBtn.addEventListener("mouseover", () => {
  container.classList.add("hovered");
});

generateBtn.addEventListener("mouseout", () => {
  container.classList.remove("hovered");
});
