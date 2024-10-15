const form = document.querySelector("#todo-form");
const taskTitleInput = document.querySelector("#task-title-input");
const todoListUl = document.querySelector("#todo-list");

let tasks = []; //array para as tarefas

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita o comportamento padrão de revarregar a página ao submeter o formulário

  const taskTitle = taskTitleInput.value;

  if (taskTitle.length < 3) {
    alert("Sua tarefa precisa ter, pelo menos,  caracteres");
    return;
  }

  // Adicionando a nova tarefa no array de tasks
  tasks.push({
    title: taskTitle,
    done: false,
  });

  console.log(tasks);

  // Adicionando a nova tarefa no HTML
  const li = document.createElement("li");

  const input = document.createElement("input"); // <input>
  input.setAttribute("type", "checkbox"); // <input type="checkbox"/>

  const span = document.createElement("span");
  span.textContent = taskTitle;

  const btn = document.createElement("button");
  btn.textContent = "Remover";
  btn.addEventListener("click", (event) => {
    console.log(event.target.parentElement);
    todoListUl.removeChild(event.target.parentElement);
  });

  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(btn);

  todoListUl.appendChild(li);

  taskTitleInput.value = "";
});
