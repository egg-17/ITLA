let btn = document.querySelector(".btn");
let div = document.querySelector(".div");

btn.addEventListener("click", () => {
  let num = parseInt(document.querySelector(".inp").value);
  div.innerHTML = ""; // Limpiamos el contenido actual del div

  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }

  div.innerHTML = "El factorial de " + num + " es: " + fact;
});
