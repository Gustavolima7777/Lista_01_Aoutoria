function verificarPalindromo() {
    
    const input = document.getElementById('palavraInput');
    const resultadoP = document.getElementById('resultado');
    const palavraOriginal = input.value;

    if (palavraOriginal.trim() === '') {
        resultadoP.textContent = "Por favor, digite uma palavra.";
        resultadoP.style.color = 'orange';
        return;
    }

    const palavraTratada = palavraOriginal.toLowerCase();

    const palavraInvertida = palavraTratada.split('').reverse().join('');

    
    if (palavraTratada === palavraInvertida) {
        
        resultadoP.textContent = `A palavra "${palavraOriginal}" é um palíndromo!`;
        resultadoP.style.color = 'green';
    } else {
       
        resultadoP.textContent = `A palavra "${palavraOriginal}" não é um palíndromo.`;
        resultadoP.style.color = 'red';
    }
}