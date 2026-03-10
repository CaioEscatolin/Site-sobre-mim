const imagens = [
    "atualidade-1.jpg",
    "atualidade-2.jpg",
    "atualidade-3.jpg",
    "atualidade-4.jpg",
    "atualidade-5.jpg",
    "atualidade-6.jpg",
    "atualidade-7.jpg",
    "atualidade-8.jpg",
    "atualidade-9.jpg",
    "atualidade-10.jpg"
];

let index = 0;
const img = document.getElementById("troca-de-fotos-atualidade");

function trocarImagem() {
    index++;

    if (index >= imagens.length) {
        index = 0;
    }

    img.src = imagens[index];
}

setInterval(trocarImagem, 3000); 