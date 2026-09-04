const botaoMenu = document.querySelector("#botao-menu");
const menu = document.querySelector("#menu");
const linksMenu = document.querySelectorAll(".menu a");
const ano = document.querySelector("#ano");


// MENU DO CELULAR

if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", function () {
        menu.classList.toggle("ativo");

        if (menu.classList.contains("ativo")) {
            botaoMenu.textContent = "✕";
        } else {
            botaoMenu.textContent = "☰";
        }
    });
}


// FECHA O MENU DEPOIS DO CLIQUE

linksMenu.forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("ativo");
        botaoMenu.textContent = "☰";
    });
});


// ANO AUTOMÁTICO DO RODAPÉ

if (ano) {
    ano.textContent = new Date().getFullYear();
}


// ELEMENTOS QUE RECEBERÃO ANIMAÇÃO

const elementosAnimados = document.querySelectorAll(
    ".titulo-secao, " +
    ".texto-sobre, " +
    ".informacoes, " +
    ".card-habilidade, " +
    ".card-projeto, " +
    ".texto-contato, " +
    ".formas-contato"
);


// ADICIONA A CLASSE DE ANIMAÇÃO

elementosAnimados.forEach(function (elemento, indice) {
    elemento.classList.add("revelar");

    const atraso = (indice % 3) * 100;

    elemento.style.transitionDelay = `${atraso}ms`;
});


// OBSERVA QUANDO O ELEMENTO APARECE NA TELA

const observador = new IntersectionObserver(
    function (entradas) {
        entradas.forEach(function (entrada) {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visivel");
                observador.unobserve(entrada.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);


// ATIVA O OBSERVADOR

elementosAnimados.forEach(function (elemento) {
    observador.observe(elemento);
});


// DESTACA O LINK DA SEÇÃO ATUAL

const secoes = document.querySelectorAll("main section");

const observadorMenu = new IntersectionObserver(
    function (entradas) {
        entradas.forEach(function (entrada) {
            if (entrada.isIntersecting) {
                const idAtual = entrada.target.getAttribute("id");

                linksMenu.forEach(function (link) {
                    link.classList.remove("ativo");

                    if (link.getAttribute("href") === `#${idAtual}`) {
                        link.classList.add("ativo");
                    }
                });
            }
        });
    },
    {
        threshold: 0.35
    }
);

secoes.forEach(function (secao) {
    observadorMenu.observe(secao);
});