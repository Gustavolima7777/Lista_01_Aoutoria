document.addEventListener('DOMContentLoaded', function() {

    const elementoParaColorir = document.getElementById('paragrafo');

    if (elementoParaColorir) {
        
        const botoes = document.querySelectorAll('button[data-color]');

        botoes.forEach(function(botao) {
            botao.addEventListener('click', function() {
                const cor = botao.dataset.color;
                elementoParaColorir.style.color = cor;
            });
        });

    } else {
        console.error('Erro: Elemento com o id "paragrafo" não foi encontrado.');
    }

});