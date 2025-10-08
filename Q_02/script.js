/**
 * Altera a cor de fundo do corpo da página.
 * @param {string} cor - A cor de fundo a ser aplicada.
 */
function mudarFundo(cor) {
    const corpoDaPagina = document.getElementById('pagina');

    corpoDaPagina.style.backgroundColor = cor;
}