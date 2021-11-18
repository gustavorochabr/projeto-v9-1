




function Testes() {
   alert('Olá, seja bem vindo ao projeto v9!')
   document.getElementById('title').style.fontFamily='Arial';
   
   
}
var body = document.getElementsByClassName('body')


function criarPost(legenda, foto) {

    var localLegendaPost = document.getElementById('legenda-post')

    localLegendaPost.innerHTML('Slv ksks')
    
}

function darkMode() {
    var element = document.body;
    var content = document.getElementById("status-mode");
    element.className = "dark-mode";
    content.innerText = "Modo: Escuro";
}

function lightMode() {
    var element = document.body;
    var content = document.getElementById("status-mode");
    element.className = "light-mode";
    content.innerText = "Modo: Claro";
}

function mostrarValor() {
    alert(document.getElementById("uau").value);
}

const buttonPersonalizado = document.getElementById('aset')

function PersonalizarCor() {
    const buttonPersonalizado = document.getElementById('aset')

    buttonPersonalizado.style.backgroundColor='black';
}

