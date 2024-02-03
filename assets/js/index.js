const precio = 400000;
let total = document.querySelector(".valor-total");
total.innerHTML = precio;

function clicksMas() {
  click = document.querySelector(".cantidad");
  contador = parseInt(click.innerHTML);
  contador = contador + 1;
  click.innerHTML = contador;
  total.innerHTML = precio * contador;
}

function clicksMenos() {
  click = document.querySelector(".cantidad");
  contador = parseInt(click.innerHTML);
  contador = contador - 1;
  click.innerHTML = contador;
  total.innerHTML = precio * contador;
  if (contador < 0) {
    click.innerHTML = 0;
    total.innerHTML = 0;
  }
}

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;
