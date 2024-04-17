document.addEventListener("DOMContentLoaded", () => {
  let nombre = localStorage.getItem("nombre");
  if (nombre === null) {
    return;
  } else {
    userContent.innerHTML = `hola ${nombre} <button onclick="Delete()" class="btn btn-danger" >Log out</button> `;
    form.classList.add("d-none");
  }
});

let userRegister = "estarlin";
let contraRegiser = "1234";
let user = document.querySelector(".user");
let contra = document.querySelector(".contra");
let form = document.querySelector(".form");
let userContent = document.querySelector(".usuario");
console.log(userRegister);

form.addEventListener("submit", () => {
  if (user.value.trim() === "" || contra.value.trim() === "") {
    alert("Dejaste algun campos vacios 😵😵😵");
    return;
  }

  if (user.value.trim() != userRegister || contra.value.trim() != contraRegiser) {
    alert("usuario o contrasena incorrecto 🥲🥲🥲🥲");
    return;
  }

  if (user.value.trim() === userRegister || contra.value.trim() === contraRegiser) {
    localStorage.setItem("nombre", user.value);
    alert("logueado con exito 🤭🤭 😁😁💕💕");
  }
});

function Delete() {
  localStorage.clear();
  form.classList.remove("d-none");
  userContent.innerHTML = "";
}
