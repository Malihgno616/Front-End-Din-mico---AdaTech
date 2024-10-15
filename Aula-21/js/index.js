const btnAumentar = document.querySelector("#aumentar-btn");
const btnDiminuir = document.querySelector("#diminuir-btn");
const contadorElemento = document.querySelector("#contador");
const input = document.querySelector("#input");

btnAumentar.addEventListener("click", (event) => {
  const valorAtual = Number(contadorElemento.textContent);

  contadorElemento.textContent = valorAtual + 1;

  btnAumentar.classList.add("btn");
  btnDiminuir.classList.remove("btn");
});

btnDiminuir.addEventListener("click", (event) => {
  const valorAtual = Number(contadorElemento.textContent);

  contadorElemento.textContent = valorAtual - 1;

  btnDiminuir.classList.add("btn");
  btnAumentar.classList.remove("btn");
});
 
input.addEventListener("input", () => {
  console.log(input.value);
});

// Adicionando estilos inline no elemento contador

contadorElemento.style.color = "red";
contadorElemento.style.padding = "0 2rem";
contadorElemento.style.border = "1px solid #AAA";
contadorElemento.style.width = "200px";

// Manipular classes

console.log(btnDiminuir.classList);

const themeBtn = document.querySelector("#theme");

let darkTheme = false;

// Definindo uma função que será executada ao carregar o conteudo da página/tela
window.onload = () => {
  const isDarkThemeStorage = localStorage.getItem("isDarkTheme");

  darkTheme = isDarkThemeStorage === "true" ? true : false;

  const body = document.querySelector("body");
  localStorage.setItem("isDarkTheme", darkTheme);

  if (darkTheme) {
    body.style.backgroundColor = "#ccc";
    body.style.color = "#333";
  } else {
    body.style.backgroundColor = "#fff";
    body.style.color = "#000";
  }
};

themeBtn.addEventListener("click", () => {
  darkTheme = !darkTheme;

  const body = document.querySelector("body");
  localStorage.setItem("isDarkTheme", darkTheme);

  if (darkTheme) {
    body.style.backgroundColor = "#ccc";
    body.style.color = "#333";
  } else {
    body.style.backgroundColor = "#fff";
    body.style.color = "#000";
  }
});
