function calcular(event) {
    
    event.preventDefault();

    
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    
    const soma = num1 + num2 + num3;
    const media = soma / 3;
    const produto = num1 * num2 * num3;
    
    const maior = Math.max(num1, num2, num3);
    const menor = Math.min(num1, num2, num3);

    const tabelaHTML = `
        <h3>Resultados</h3>
        <table>
            <tr>
                <td>Números Digitados</td>
                <td>${num1}, ${num2}, ${num3}</td>
            </tr>
            <tr>
                <td>Soma</td>
                <td>${soma}</td>
            </tr>
            <tr>
                <td>Média</td>
                <td>${media.toFixed(2)}</td>
            </tr>
            <tr>
                <td>Produto</td>
                <td>${produto}</td>
            </tr>
            <tr>
                <td>Maior Número</td>
                <td>${maior}</td>
            </tr>
            <tr>
                <td>Menor Número</td>
                <td>${menor}</td>
            </tr>
        </table>
    `;
   
    document.getElementById('area-resultado').innerHTML = tabelaHTML;
}