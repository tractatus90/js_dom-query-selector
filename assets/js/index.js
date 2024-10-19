const precioBase = 400000;
let precioTotal = document.querySelector(".valor-total");
let contador = 0;
let contadorTotal = document.querySelector(".cantidad");

function clickMas() {
  contador++;
  contadorTotal.innerHTML = contador;
  precioTotal.innerHTML = precioBase * contador;
}

function clickMenos() {
  contador--;
  if (contador < 0) {
    contador = 0;
  }
  contadorTotal.innerHTML = contador;
  precioTotal.innerHTML = precioBase * contador;
}
