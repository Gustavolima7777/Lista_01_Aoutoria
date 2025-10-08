const areaTexto = document.getElementById('texto-original');
const textoOriginal = areaTexto.innerHTML;

function pesquisarPalavra(event) {
    event.preventDefault();

    
    areaTexto.innerHTML = textoOriginal;

    const busca = document.getElementById('buscaInput').value;
    const infoResultado = document.getElementById('info-resultado');

    if (busca.trim() === '') {
        infoResultado.innerHTML = "Por favor, digite uma palavra para pesquisar.";
        infoResultado.className = 'mensagem-erro';
        return;
    }

    const regex = new RegExp(busca, 'gi');

    const ocorrencias = textoOriginal.match(regex);
    const contagem = ocorrencias ? ocorrencias.length : 0;
:
    if (contagem > 0) {
        infoResultado.innerHTML = `Foram encontradas <strong>${contagem}</strong> ocorrências da palavra "<strong>${busca}</strong>".`;
        infoResultado.className = 'mensagem-sucesso';

        const textoDestacado = textoOriginal.replace(regex, (match) => `<mark>${match}</mark>`);
        areaTexto.innerHTML = textoDestacado;

    } else {
        infoResultado.innerHTML = `A busca pela palavra "<strong>${busca}</strong>" não retornou nenhum resultado.`;
        infoResultado.className = 'mensagem-erro';
    }
}