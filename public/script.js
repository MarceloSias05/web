document.addEventListener("DOMContentLoaded", function () {
    // Seleccionamos el formulario de login por su ID
    const loginForm = document.getElementById("loginForm");

    // Capturamos el evento submit del formulario
    loginForm.addEventListener("submit", function (event) {
        // Evitar el comportamiento por defecto del formulario
        event.preventDefault();

        // Obtenemos el valor ingresado en el campo de usuario y contraseña
        const username = document.getElementById("Username").value;
        const password = document.getElementById("Password").value;

        // Seleccionamos el elemento donde se mostrará el mensaje de error
        const loginError = document.getElementById("loginError");

        // Validación de credenciales (ejemplo: usuario "admin" y contraseña "1234")
        if (username === "admin" && password === "1234") {
            // Si son correctas, redirige a la página de inicio
            window.location.href = "pages/home.html";
        } else {
            // Si no son correctas, se muestra un mensaje de error
            loginError.textContent = "Usuario o contraseña incorrectos. Inténtalo de nuevo.";
        }
    });
});