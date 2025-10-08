function validarCPF(event) {
    
    event.preventDefault();

    
    const input = document.getElementById('cpfInput');
    const resultadoP = document.getElementById('resultado');
    const cpfString = input.value;

  
    const cpfLimpo = cpfString.replace(/[^\d]/g, '');

    if (cpfLimpo.length !== 11) {
        exibirResultado("CPF inválido. Deve conter 11 dígitos.", 'red');
        return; 
    }

    
    if (new Set(cpfLimpo).size === 1) {
        exibirResultado("CPF inválido. Não pode ter todos os dígitos iguais.", 'red');
        return; 
    }
    
    exibirResultado("CPF Válido!", 'green');
}


/**
 * Função auxiliar para mostrar a mensagem na tela.
 * Isso evita código repetido.
 * @param {string} mensagem - O texto a ser exibido.
 * @param {string} cor - A cor do texto ('red', 'green', etc).
 */
function exibirResultado(mensagem, cor) {
    const resultadoP = document.getElementById('resultado');
    resultadoP.textContent = mensagem;
    resultadoP.style.color = cor;
}