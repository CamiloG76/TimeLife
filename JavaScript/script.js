function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let destino = document.getElementById("destino").value;
    let personas = document.getElementById("personas").value;
    let paquete = document.getElementById("paquete").value;

    if (nombre == "" || correo == "" || destino == "" || personas == "" || paquete == "") {
        alert("Completa todos los campos");
        return false;
    }

    return true;
}
///////////////////////////////////////////////////////////////////////////////////////////////
function calcularPrecio() {
    let personas = document.getElementById("personas").value;
    let paquete = document.getElementById("paquete").value;
    let precio = 0;

    if (paquete == "basico") {
        precio = 100;
    }

    if (paquete == "premium") {
        precio = 200;
    }

    if (paquete == "temporal") {
        precio = 300;
    }

    let total = personas * precio;

    alert("El precio total es: $" + total);
}
////////////////////////////////////////////////////////////////////////////////
function mostrarMensaje() {
    alert("Reserva realizada correctamente");
}

function procesarReserva() {
    if (validarFormulario()) {
        calcularPrecio();
        mostrarMensaje();
    }
}


