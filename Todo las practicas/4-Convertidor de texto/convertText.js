const palabra = prompt("Ingresa una palabra: ");

class Convertidor {
  constructor(text) {
    this.text = text;
  }
  
  Cantidad() {
    return this.text.length;
  }

  Mayuscula() {
    return this.text.toUpperCase();
  }

  Minuscula() {
    return this.text.toLowerCase();
  }

  Palindroma() {
    let palabra = Array.from(this.text);
    let voltear = palabra.reverse();
    let juntar = voltear.join("");
    let validacion = juntar === this.text ? "es palíndroma" : "no es palíndroma";
    return validacion;
  }
}

let convertidor = new Convertidor(palabra);
let resultados = `
Cantidad de caracteres: ${convertidor.Cantidad()}
Palabra en mayúsculas: ${convertidor.Mayuscula()}
Palabra en minúsculas: ${convertidor.Minuscula()}
Palabra palíndroma: ${convertidor.Palindroma()}
`;

alert(resultados);
