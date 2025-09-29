/**
 * Função para alterar a cor do parágrafo.
 * @param {string} cor - A cor para a qual o texto deve ser alterado (ex: 'red', 'blue').
 */
function mudarCor(cor) {
    // 1. Seleciona o elemento do parágrafo pelo seu ID 'texto-colorido'.
    const paragrafo = document.getElementById('texto-colorido');

    // 2. Altera a propriedade 'color' do estilo do parágrafo para a cor recebida.
    paragrafo.style.color = cor;
}