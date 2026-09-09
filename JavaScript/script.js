function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let destino = document.getElementById("destino").value;
    let personas = document.getElementById("personas").value;
    let paquete = document.getElementById("paquete").value;

    if (nombre == "" || correo == "" || destino == "" || personas == "" || paquete == "") {
    alert("Completa todos los campos");
    }
}
