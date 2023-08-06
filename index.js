
//! Funciones para la calculadora

// Función para agregar los valores a la pantalla
function agregar(valor) {
    document.getElementById("pantalla").value += valor;
}

// Función para calcular el resultado
function calcular() {
    const valorPantalla = document.getElementById("pantalla").value;
    const resultado = eval(valorPantalla);
    document.getElementById("pantalla").value = resultado;
}

// Función para borrar los valores de la pantalla
function borrar() {
    document.getElementById("pantalla").value = "";
}

// Funcion solo digitos
function solodigitos(event) {
    const tecla = event.key;
    const esPermitido = /[0-9_/*+><-]/.test(tecla);
    if (!esPermitido) {
      event.preventDefault();
    }
  }


