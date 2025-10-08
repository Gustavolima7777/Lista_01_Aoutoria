function intercalarPalavras() {
    
    const palavra1 = document.getElementById('palavra1').value;
    const palavra2 = document.getElementById('palavra2').value;
    const resultadoInput = document.getElementById('resultado');

    let resultadoFinal = '';
    const tamanhoMaximo = Math.max(palavra1.length, palavra2.length);

    for (let i = 0; i < tamanhoMaximo; i++) {

        
        if (i < palavra1.length) {
            resultadoFinal += palavra1[i]; 
        }

        
        if (i < palavra2.length) {
            resultadoFinal += palavra2[i]; // Pega a letra na posição 'i'
        }
    }

    

    
    resultadoInput.value = resultadoFinal;
}