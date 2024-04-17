const form = document.querySelector(".empleados-form");
const nombre = document.querySelector("#nombre");
const apellidos = document.querySelector("#apellidos");
const cargo = document.querySelector("#cargo");
const salario = document.querySelector("#salario");
const empleadosContenedor = document.querySelector("#tbody");
const inputs = document.querySelectorAll(".form-control");
const pagoInfo = document.querySelector(".pago-total");

class Empleado {
  constructor(nombre, apellidos, cargo, salario) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.cargo = cargo;
    this.salario = salario;
  }
}

class Empresa {
  constructor() {
    this.lista = [];
  }
  mostrarEmpleados() {
    empleadosContenedor.innerHTML = "";

    this.lista.forEach((empleado, index) => {
      let empleadoRow = document.createElement("tr");

      empleadoRow.innerHTML = `
        <td class="text-capitalize">${empleado.nombre}</td>
        <td class="text-capitalize">${empleado.apellidos}</td>
        <td class="text-capitalize">${empleado.cargo}</td>
        <td class="text-capitalize">RD$${empleado.salario}</td>
        <td><button class="btn btn-danger btn-sm" onclick="eliminarEmpleado(${index})">Eliminar</button></td>
      `;

      empleadosContenedor.appendChild(empleadoRow);
    });
  }
  agregarEmpleado(empleado) {
    this.lista.push(empleado);
  }
  eliminarEmpleado(index) {
    this.lista.splice(index, 1);
  }
  totalPago() {
    let total = 0;
    this.lista.forEach((empleado) => {
      total += parseInt(empleado.salario);
    });
    return total;
  }
}

let empresa = new Empresa();
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let error = false;
  inputs.forEach((inp) => {
    if (inp.value.trim() === "") {
      inp.classList.add("is-invalid");

      error = true;
    } else {
      inp.classList.remove("is-invalid");
    }
  });

  if (error) {
    return;
  }

  let empleado = new Empleado(
    nombre.value.trim(),
    apellidos.value.trim(),
    cargo.value.trim(),
    salario.value.trim()
  );
  empresa.agregarEmpleado(empleado);
  empresa.mostrarEmpleados();

  pagoInfo.textContent = `Total a pagar de sueldo: RD$${empresa.totalPago()}`;
});

function eliminarEmpleado(index) {
  empresa.eliminarEmpleado(index);
  empresa.mostrarEmpleados();
  pagoInfo.textContent = `Total a pagar de sueldo: RD$${empresa.totalPago()}`;
}
