let list = [];
let nombre = document.querySelector(".nombre");
let form = document.querySelector(".form");
let btn = document.querySelector(".btn");
let container = document.querySelector(".list");

if (localStorage.getItem("lista")) {
  list = JSON.parse(localStorage.getItem("lista"));
  iterar();
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let text = nombre.value.trim();
  let verificar = list.some((e) => e === text);
  if (text === "" || verificar) {
    return;
  }

  list.push(text);
  console.log(list);
  localStorage.setItem("lista", JSON.stringify(list));
  iterar();
  nombre.value = "";
});

function iterar() {
  container.innerHTML = "";
  list.forEach((e, index) => {
    let li = document.createElement("li");
    li.classList.add(
      "d-flex",
      "p-4",
      "justify-content-between",
      "align-items-center"
    );
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("form-check-input", "p-2");
    checkbox.addEventListener("change", (event) => {
      if (event.target.checked) {
        li.style.textDecoration = "line-through ";
        li.classList.add("text-success");
      } else {
        li.style.textDecoration = "none";
        li.classList.remove("text-success");
      }
    });
    let btnTask = document.createElement("button");
    btnTask.classList.add("btn", "btn-danger");
    btnTask.textContent = "eliminar";
    li.innerHTML = `<li class="fs-3">${e}</li>`;
    li.prepend(checkbox);
    li.appendChild(btnTask);
    container.appendChild(li);

    btnTask.addEventListener("click", (e) => {
      list = list.filter((item, i) => i !== index);
      localStorage.setItem("lista", JSON.stringify(list));
      console.log(list);
      iterar();
    });
  });
}

console.log(list);
