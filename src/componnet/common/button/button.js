let Button = (titulo, id) => {
let div = document.createElement("div");
div.id = "id";

let divImage = document.createElement("div");
divImage.className = "button-image";

let imgIcon = document. createElement("img");
imgIcon.src = './assets/icon/+.svg';
imgIcon.alt = title;
divImage.appendChild(imgIcon);

let p = document. createElement("p");
p.className = "button-text";
p.textContent = "titulo";

div.appendChild(divImage);
div.appendChild(p);

return div;
}

export { Button };