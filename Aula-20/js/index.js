// Como selecionar elementos da página utilizando o document

// Selecionar elementos pelo nome da tag
const todosH1 = document.getElementsByTagName("h1");

const todosP = document.getElementsByTagName("p");

console.log(todosH1);
console.log(todosP);

// Selecionar elementos pelo nome da classe
const elementosComClasse = document.getElementsByClassName("paragrafo");

console.log(elementosComClasse);

// Selecionar pelo name da tag
const emailInput = document.getElementsByName("email");
console.log(emailInput);

// Selecionar elementos pelo id da tag
const jsLogo = document.getElementById("js-logo");
console.log(jsLogo);

// Query Selector | Query Selector All

const imagem = document.querySelector("body > img");
console.log(imagem);

const paragrafos = document.querySelectorAll("p");
console.log(paragrafos);

console.clear();

// Acessando/alterando o conteudo HTML das tags

const primeiroParagrafo = document.querySelector("p.paragrafo");
console.log(primeiroParagrafo);

console.log("TextContent:", primeiroParagrafo.textContent); //Pega o conteudo dentro do pragrafo, não considera o HTML
console.log("innerHTML:", primeiroParagrafo.innerHTML); //Obter conteúdo dentro da tag p, incluindo o HTML.

primeiroParagrafo.textContent = "A"; // Somente Texto
primeiroParagrafo.innerHTML = "<strong>Oláaaaaaaa</strong>"; // Texto e HTML

console.clear();

emailInput[0].value = "email@email.com";

// Criando elementos na página HTML

const listaUl = document.querySelector("ul#lista");
const listaLis = document.querySelectorAll("ul > li");
const novaTagLi = document.createElement("li"); // criando uma tag li vazia

novaTagLi.textContent = "Segundo Item"; // adicionando um texto na tag li

// listaUl.appendChild(novaTagLi);

listaUl.insertBefore(novaTagLi, listaLis[1]);

// Remover elementos

listaUl.removeChild(listaLis[0]);
