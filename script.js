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


// FECHA O MENU APÓS CLICAR

linksMenu.forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("ativo");
        botaoMenu.textContent = "☰";
    });
});


// ANO AUTOMÁTICO

if (ano) {
    ano.textContent = new Date().getFullYear();
}


// ELEMENTOS ANIMADOS

const elementosAnimados = document.querySelectorAll(
    ".titulo-secao, " +
    ".texto-sobre, " +
    ".informacoes, " +
    ".card-habilidade, " +
    ".card-projeto, " +
    ".texto-contato, " +
    ".formas-contato"
);

elementosAnimados.forEach(function (elemento, indice) {
    elemento.classList.add("revelar");

    const atraso = (indice % 3) * 100;

    elemento.style.transitionDelay = `${atraso}ms`;
});


// ANIMAÇÕES AO ROLAR

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

elementosAnimados.forEach(function (elemento) {
    observador.observe(elemento);
});


// LINK ATIVO DO MENU

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