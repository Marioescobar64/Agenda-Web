let root = document.getElementById("root");

let form = document.createElement("form");
form.className = "login-form";

let titulo = document.createElement("h2");
titulo.textContent = "Login";

let inputUsuario = document.createElement("input");
inputUsuario.type = "text";
inputUsuario.placeholder = "Usuario = admin";

let inputPassword = document.createElement("input");
inputPassword.type = "password";
inputPassword.placeholder = "Contraseña = 1234";

let boton = document.createElement("button");
boton.textContent = "Entrar";

form.appendChild(titulo);
form.appendChild(inputUsuario);
form.appendChild(inputPassword);
form.appendChild(boton);
root.appendChild(form);

boton.addEventListener("click", function (e) {
    e.preventDefault();

    if (inputUsuario.value === "admin" && inputPassword.value === "1234") {
        window.location.href = "src/app.html";
    } else {
        alert("Datos incorrectos");
    }
});
