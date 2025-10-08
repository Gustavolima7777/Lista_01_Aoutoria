document.addEventListener('DOMContentLoaded', function() {

    const botao = document.getElementById('botao-toggle');
    const texto = document.getElementById('texto-para-ocultar');

    if (botao && texto) {
        
        botao.addEventListener('click', function() {
            
            texto.classList.toggle('oculto');
        });

    } else {
      
        console.error("Erro: Não foi possível encontrar o botão ou o parágrafo.");
    }
});