let idNumber = document.querySelector("span");
let adviceText = document.querySelector("h2");
let btn = document.querySelector("button");
const url = "https://api.adviceslip.com/advice";

btn.addEventListener("click", async () => {
  const result = await fetch(url);
  const {
    slip: { id, advice },
  } = await result.json();
  idNumber.innerText = id;
  adviceText.innerText = `“${advice}”`;
});
