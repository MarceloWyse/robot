const braco = document.querySelector('#braco');
const bSoma = document.querySelector('#braco_soma');
const bSubtrai = document.querySelector('#braco_subtrai');

const controleArray = document.querySelectorAll(".controle-ajuste");

controleArray.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent);
    })    
})

function manipulaDados(operacao) {
    if(operacao === "-"){
        braco.value = parseInt(braco.value) - 1
    }
    else{
        braco.value = parseInt(braco.value) + 1;
    }
}
