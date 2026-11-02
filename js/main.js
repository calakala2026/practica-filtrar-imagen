


const boton = document.querySelector('#boton');
boton.addEventListener('click', mensaje);


function mostrarMensaje() {
    console.log('este es el mens');
}



boton.addEventListener("click", () => {
  mostrarMensaje("mensaje desde el evento");
});


function mostrarMensaje(mensaje) {
  console.log(mensaje);
}

