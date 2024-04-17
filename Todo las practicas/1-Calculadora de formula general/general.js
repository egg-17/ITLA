const a = parseFloat(prompt("Ingresa el primer número: "));
const b = parseFloat(prompt("Ingresa el segundo número: "));
const c = parseFloat(prompt("Ingresa el tercer número: "));

const General = (a, b, c) => {
    let raizDentro = (b**2) - 4*(a*c);

    if (isNaN(raizDentro) || raizDentro < 0 || a === 0) {
        return "La ecuación no tiene solución real.";
    } else {
        let raiz1 = (-b + Math.sqrt(raizDentro)) / (2 * a);
        let raiz2 = (-b - Math.sqrt(raizDentro)) / (2 * a);
        return [raiz1, raiz2];
    }
};

let resultados = General(a, b, c);

if (typeof resultados === 'string') {
    alert(resultados);
} else {
    alert("Las soluciones son: " + resultados[0] + " y " + resultados[1]);
}
