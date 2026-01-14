let login = function () {

    // Sección principal del login
    let loginSection = document.createElement("section");
    loginSection.classList.add("login-section"); // Clase para CSS

    // Título
    let h3 = document.createElement("h3");
    h3.textContent = "Login";

    // Input usuario
    let user = document.createElement("input");
    user.type = "text";
    user.placeholder = "Usuario";
    user.classList.add("login-input");

    // Input password
    let password = document.createElement("input");
    password.type = "password";
    password.placeholder = "Password";
    password.classList.add("login-input");

    // Botón
    let button = document.createElement("button");
    button.textContent = "Iniciar Sesión";
    button.classList.add("login-button");

    // Agregar elementos a la sección
    loginSection.appendChild(h3);
    loginSection.appendChild(user);
    loginSection.appendChild(password);
    loginSection.appendChild(button);

    return loginSection;
}

// Export default para importar más fácilmente
export default login;
