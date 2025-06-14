//login 
document.getElementById('formLogin').addEventListener('submit', function(event) {
    event.preventDefault(); // impede o recarregamento da página
  
    const user = document.getElementById('user').value;
    const senha = document.getElementById('senha').value;
  
    // Exemplo simples de autenticação
    const userCorreto = "Minha Vida";
    const senhaCorreta = "04/05/2024";
  
    if (user === userCorreto && senha === senhaCorreta) {
        document.getElementById('mensagem').textContent = "Bem-vinda ao nosso cantinho...";
      // Aqui você poderia redirecionar pra outra página, tipo:
      // window.location.href = "pagina-principal.html";
      setTimeout(() => {
        window.location.href = "PagInicial.html"; // troque pelo nome correto do seu arquivo
    }, 2000);
    } else {
      document.getElementById('mensagem').textContent = "Usuário ou senha incorretos. \n\nDica... \n Usuário: Oque você é para mim \n Senha: Data do nosso aniversário";
    }
  });
  
