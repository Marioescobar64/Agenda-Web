let Button = (titulo, id) => {
let div = document.createElement("div");
div.id = "id";

let divImage = document.createElement("div");
divImage.className = "button-image";


let imgIcon = document.createElement("div");
divImage.className = "butto-image";

let p = document. createElement("p");
p.className = "button-text";
p.textContent = "titulo";

div.appendChild(divImage);
div.appendChild(p);

return div;
}

export { Button };