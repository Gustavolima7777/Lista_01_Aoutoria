function gerarTabuada(event) {
    
    event.preventDefault();

    const numero = parseInt(document.getElementById('numero').value);
    const areaTabuada = document.getElementById('area-tabuada');

    let tabelaHTML = `
        <h3>Tabuada do ${numero}</h3>
        <table>
            <tr>
                <th>Operação</th>
                <th>Resultado</th>
            </tr>
    `;

   
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        
        tabelaHTML += `
            <tr>
                <td>${numero} x ${i}</td>
                <td>${resultado}</td>
            </tr>
        `;
    }

   
    tabelaHTML += `</table>`;

    
    areaTabuada.innerHTML = tabelaHTML;
}