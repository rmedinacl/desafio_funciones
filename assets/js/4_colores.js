const divs = document.querySelectorAll("#azul, #rojo, #verde, #amarillo");

divs.forEach((div) => {
  div.addEventListener("click", () => {
    div.style.backgroundColor = "black";
  });
});

let colorSeleccionado;

function cambiarColorKey() {
  if (colorSeleccionado) {
    document.getElementById("key").style.backgroundColor = colorSeleccionado;
  }
}

document.addEventListener("keydown", function (event) {
  const tecla = event.key.toLowerCase();

  switch (tecla) {
    case "a":
      colorSeleccionado = "pink";
      cambiarColorKey();
      break;
    case "s":
      colorSeleccionado = "orange";
      cambiarColorKey();
      break;
    case "d":
      colorSeleccionado = "cyan";
      cambiarColorKey();
      break;
    case "q":
      crearDiv("purple");
      break;
    case "w":
      crearDiv("gray");
      break;
    case "e":
      crearDiv("brown");
      break;
  }
});

// Función para crear un nuevo div con el color especificado
function crearDiv(color) {
  const nuevoDiv = document.createElement("div");
  nuevoDiv.style.backgroundColor = color;
  nuevoDiv.style.width = "200px";
  nuevoDiv.style.height = "200px";
  document.body.appendChild(nuevoDiv);
}
