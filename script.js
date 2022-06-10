/* Trazendo os elementos do HTML para serem usados no Javascript, com variáveis 
do tipo constante.*/
const digitaTexto = document.querySelector(".digite");
const resposta = document.querySelector(".resposta");
const criptogra = document.querySelector(".criptografar");
const descripto = document.querySelector(".descriptografar");
const mostra = document.querySelector(".mostra-textos");
const mensagem = document.querySelector(".texto-mensagem");
const deseja = document.querySelector(".texto-deseja");
const btnApaga = document.querySelector(".apagar");

// Mostra ponto de inseção para o usuário digitar o seu texto.
digitaTexto.focus();

// Função para limpar a tela de respostas ao clicar nos Botões Criptografar e Descriptografar.
function limpaInicial(){
    mostra.style.background = "#FFFFFF";        
    deseja.remove(".texto-deseja"); 
    mensagem.remove(".texto-mensagem");     
}

// Função para o Botão Criptografar.
function criptografar() {
    if (digitaTexto.value != ""){
        const frase = digitaTexto.value.toLowerCase();
        const mostrar = frase.replaceAll("e", "enter");  
        const mostrar2 = mostrar.replaceAll("i", "imes");
        const mostrar3 = mostrar2.replaceAll("a", "ai");
        const mostrar4 = mostrar3.replaceAll("u", "ufat");
        const mostrar5 = mostrar4.replaceAll("o", "ober");

        resposta.value = mostrar5;        

        limpaInicial();        
    }else{
        alert("Favor digitar um texto e clique no botão Criptografar!");
        digitaTexto.focus();
    }
}

// Função para o Botão Descriptografar.
function desicriptografar() {
    if (digitaTexto.value != ""){
        const frase = digitaTexto.value.toLowerCase();
        const mostrar = frase.replaceAll("enter", "e");  
        const mostrar2 = mostrar.replaceAll("imes", "i");
        const mostrar3 = mostrar2.replaceAll("ai", "a");
        const mostrar4 = mostrar3.replaceAll("ufat", "u");
        const mostrar5 = mostrar4.replaceAll("ober", "o");
        
        resposta.value = mostrar5;
        
        limpaInicial();        
    }else{
        alert("Favor digitar um texto e clique no botão Descriptografar!");
        digitaTexto.focus();
    }
}

// Função para o Botão Apagar (Para substituir o Botão Copiar como um extra do desafio).
function apagar(){
    if (digitaTexto.value != ""){
        digitaTexto.value = "";
        resposta.value = "";
        digitaTexto.focus();
    }else{
        alert("Favor digitar um texto e clique no botão Criptografar ou Descriptografar!");
        digitaTexto.focus();
    }
}

// Evento Onclick para usar as funções do botão correspondente ao ser clicado.
criptogra.onclick = criptografar;
descripto.onclick = desicriptografar;
btnApaga.onclick = apagar;
