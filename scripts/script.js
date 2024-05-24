//barras de pag do header
function setActiveMenuItem() {
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/') + 1);
    var links = document.querySelectorAll('.nav-item');

    links.forEach(function(link) {
        link.classList.remove('active');
    });

    var currentLink = document.querySelector('.nav-link[href="' + filename + '"]');
    if (currentLink) {
        currentLink.classList.add('active');
    }
}

// gerar footer
// function adicionarRodape() {
//     var footer = document.createElement("footer");
//     footer.classList.add("rodape");

//     var imagem = document.createElement("img");
//     imagem.classList.add("rodape__imagem");
//     imagem.src = "./assets/logo_alura.svg";
//     imagem.alt = "Alura Include";
//     footer.appendChild(imagem);

//     var paragrafo = document.createElement("p");
//     paragrafo.textContent = "Desenvolvido por Gabriel Silva.";
//     footer.appendChild(paragrafo);

//     document.body.appendChild(footer);
// }


setActiveMenuItem();
//window.addEventListener("load", adicionarRodape);