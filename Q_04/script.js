const form = document.getElementById('form-cadastro');

form.addEventListener('submit', function(event) {
    
    event.preventDefault();

    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;
    const confirmaSenha = document.getElementById('confirmaSenha').value;

    
    if (!login || !senha || !confirmaSenha) {
        alert("Por favor, preencha todos os campos.");
        return; 

    // Regra 2: As senhas são iguais?
    if (senha !== confirmaSenha) {
        alert("As senhas não coincidem. Tente novamente.");
        return; 
    }

    
    if (senha.length < 6 || senha.length > 10) {
        alert("A senha deve ter entre 6 e 10 caracteres.");
        return; 
    }

    alert("Cadastro validado com sucesso!");

});