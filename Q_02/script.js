/**
 * Altera a cor de fundo do corpo da página.
 * @param {string} cor - A cor de fundo a ser aplicada.
 */
function mudarFundo(cor) {
    // 1. Seleciona o elemento <body> pelo seu ID 'pagina'.
    const corpoDaPagina = document.getElementById('pagina');

    // 2. Altera o estilo do plano de fundo (background-color).
    // Em JavaScript, a propriedade vira 'backgroundColor' (camelCase).
    corpoDaPagina.style.backgroundColor = cor;
}