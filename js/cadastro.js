const login = document.getElementById('login')

const cadastrar = document.getElementById('cadastrar')
    
const nomeUsuario = document.querySelector('#nome-usuario')
const email = document.querySelector('#email')
const idade = document.querySelector('#idd')

login.addEventListener('click', function() {
    const email = document.querySelector('#email')
    const idade = document.querySelector('#idd')
    var confirmacao = confirm(`
    Suas informações:
    Nome de usuário: ${nomeUsuario.value.toLowerCase()}
    Idade: ${idade.value}
    E-mail: ${email.value}`)
    if(confirmacao === false) {
        alert('Então, por favor, corrija os dados!')
    } else {
        alert('Ok, os dados foram enviados para o nosso Banco de dados!')
    }
    

})

function saveData() {
  const userName = document.querySelector('#nome-usuario');
  const email = document.querySelector('#email');
  const age = document.querySelector('#idd');
}