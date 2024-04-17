const tasas = {
    dolar: { tasa: 0.1, valor: 58 },
    euro: { tasa: 0.05, valor: 63 },
    libra: { tasa: 0.05, valor: 73 },
    yen: { tasa: 0.1, valor: 2.55 }
  };
  
  let moneda;
  do {
    moneda = parseInt(
      prompt(
        "Ingresa un número del 1 al 4:\n" +
          "1- Dólar\n" +
          "2- Euro\n" +
          "3- Libra Esterlina\n" +
          "4- Yen"
      )
    );
  } while (moneda < 1 || moneda > 4);
  
  const money = parseInt(prompt("Ingrese la cantidad a cambiar"));
  
  switch (moneda) {
    case 1:
      calcularCambio("dolar", tasas.dolar.valor, money);
      break;
    case 2:
      calcularCambio("euro", tasas.euro.valor, money);
      break;
    case 3:
      calcularCambio("libra", tasas.libra.valor, money);
      break;
    case 4:
      calcularCambio("yen", tasas.yen.valor, money);
      break;
    default:
      alert("Moneda desconocida");
  }
  
  function calcularCambio(monedaNombre, valorMoneda, cantidad) {
    const cambio = valorMoneda * cantidad;
    const tasa = tasas[monedaNombre].tasa;
    let mensaje =
      "El total de " + monedaNombre + " ingresado cambiado a peso es " + cambio;
    if (cambio >= 10000 && cambio < 20000) {
      mensaje += " con una tasa de 10%";
    } else if (cambio >= 20000) {
      mensaje += " con una tasa de 15%";
    } else {
      mensaje += " con una tasa de " + (tasa * 100) + "%";
    }
    alert(mensaje);
  }
  