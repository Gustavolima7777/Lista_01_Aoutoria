function escreverPorExtenso(event) {
    event.preventDefault();

    const dataString = document.getElementById('dataInput').value;
    const resultadoP = document.getElementById('resultado');
    const meses = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];

    
    const partesData = dataString.split('/');

    
    if (partesData.length !== 3) {
        resultadoP.textContent = "Formato de data inválido. Use dd/mm/aaaa.";
        resultadoP.style.color = 'red';
        return;
    }

    const dia = partesData[0];
    const mesNumero = parseInt(partesData[1]); 
    const ano = partesData[2];

    if (mesNumero >= 1 && mesNumero <= 12) {
        const nomeMes = meses[mesNumero - 1];
        const dataFinal = `${dia} de ${nomeMes} de ${ano}`;
        
        resultadoP.textContent = dataFinal;
        resultadoP.style.color = 'green';
    } else {
        resultadoP.textContent = "Mês inválido. Digite um número de 01 a 12.";
        resultadoP.style.color = 'red';
    }
}