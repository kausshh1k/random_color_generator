let randColor = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

let addColorDiv = (color) => {
  const div = document.createElement("div");
  div.classList.add("colorsChild");
  // div.appendChild(color);
  div.style.backgroundColor = color;
  div.innerText = color;

  let parentDiv = document.querySelector("#colors");
  parentDiv.insertAdjacentElement("afterbegin", div);
};

let addColorBtn = (color) => {
  const btn = document.createElement("button");
  btn.classList.add("colorsChild");
  // div.appendChild(color);
  btn.style.backgroundColor = color;
  btn.innerText = color;

  let parentDiv = document.querySelector("#colors");
  parentDiv.insertAdjacentElement("afterbegin", btn);
};

const genBtn = document.querySelector("#genBtn");
genBtn.addEventListener("click", function () {
  const headline = document.querySelector("#headline");
  const body = document.querySelector("body");
  const newColor = randColor();
  headline.innerText = newColor;
  body.style.backgroundColor = newColor;
  genBtn.style.backgroundColor = newColor;
  addColorBtn(newColor);
});

const colBtns = document.querySelectorAll(".colorsChild");
for (let colBtn of colBtns) {
  colBtn.addEventListener("click", function () {
    let copyText = colBtn.innerText;
    // copyText.select();
    navigator.clipboard.write(copyText);
    // document.execCommand("copy");
  });
}
