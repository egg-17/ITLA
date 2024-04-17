let btn = document.querySelector(".btn-generar");
let form = document.querySelector(".form");
let codeContainer = document.querySelector(".list-code");
let codigos = [];
let questionLabel = document.querySelector(".code-question");
let question;
console.log(question);

btn.addEventListener("click", Generar);
function Generar() {
  codigos = [];
  question = Math.floor(Math.random() * 40) + 1;
  for (let i = 0; i < 40; i++) {
    const code = Math.floor(Math.random() * 9999)
      .toString()
      .padStart(4, "0");
    if (!codigos.includes(code)) {
      codigos.push(code);
    }
  }
  codeContainer.innerHTML = codigos
    .map((code) => `<li> = ${code}</li>`)
    .join("");
  questionLabel.textContent = `Ingresa el codigo: ${question}`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let inp = document.querySelector(".inp");
  console.log(codigos[question - 1]);
  if (codigos[question - 1] === inp.value) {
    alert("Codigo correcto 😊😊");
    inp = "";
  } else if (inp.value === "") {
  } else {
    alert("codigo incorrecto 😵😵😵");
    inp = "";
  }
});
