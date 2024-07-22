document.getElementById('myForm').addEventListener('submit', function(event) {
    // Previene el envío del formulario por defecto
    event.preventDefault();

    // Variables de validación
    let nombres = document.getElementById('inputNombres').value.trim();
    let apellidos = document.getElementById('inputApellidos').value.trim();
    let correo = document.getElementById('inputCorreo').value.trim();
    let celular = document.getElementById('inputCelular').value.trim();
    let ciudad = document.getElementById('inputCity').value.trim();
    let carrera = document.getElementById('inputState').value;
    let edad = document.getElementById('inputEdad').value.trim();

    // Validación de cada campo
    if (nombres === "") {
        alert("Por favor, ingrese sus nombres.");
        return;
    }

    if (apellidos === "") {
        alert("Por favor, ingrese sus apellidos.");
        return;
    }

    if (correo === "") {
        alert("Por favor, ingrese su correo electrónico.");
        return;
    } else if (!validateEmail(correo)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return;
    }

    if (celular === "") {
        alert("Por favor, ingrese su número celular.");
        return;
    } else if (!/^\d{10}$/.test(celular)) {
        alert("Por favor, ingrese un número de celular válido con exactamente 10 dígitos.");
        return;
    }

    if (ciudad === "") {
        alert("Por favor, ingrese su ciudad.");
        return;
    }

    if (carrera === "Choose...") {
        alert("Por favor, seleccione su carrera.");
        return;
    }

    if (edad === "" || isNaN(edad) || edad <= 17 || edad >= 38) {
        alert("Por favor, la edad debe estar entre 18 a 38 años");
        return;
    } 

    alert("Formulario enviado con éxito!");
    this.submit();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
