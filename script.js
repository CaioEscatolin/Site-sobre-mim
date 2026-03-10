const imagens = [
    "crianca-1.jpeg",
    "crianca-2.jpg",
    "crianca-3.jpg",
    "crianca-4.jpg",
    "crianca-5.jpg",
    "crianca-6.jpg",
    "crianca-7.jpg",
    "crianca-7.jpg"
];

let index = 0;
const img = document.getElementById("troca-de-fotos-infancia");

function trocarImagem() {
    index++;

    if (index >= imagens.length) {
        index = 0;
    }

    img.src = imagens[index];
}

setInterval(trocarImagem, 3000); 