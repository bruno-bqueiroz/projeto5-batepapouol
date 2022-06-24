let mensagens=[];

function buscarDados(){
    let promessa = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages");
    promessa.then(buscarDados);
}

function buscarDados(resposta){
    mensagens = resposta;
    renderizarMensagens();
}


function renderizarMensagens(){
    const Receitas = document.querySelector('.mensagens');

    for (let i = 0; i < mensagens.length; i++){

        Receitas.innerHTML += `
        <li>
            ${mensagens}
        </li>
        `
    }   
}

buscarDados();  
renderizarMensagens();



/*

let elementoTempo = document.querySelector('.tempo');
let elementoEmitente = document.querySelector('.emitente');
let elementoPara = document.querySelector('.para');
let elementoTexto = document.querySelector('.texto');


elementoTempo.innerHTML = lista.data.time;
elementoEmitente.innerHTML = lista.data.from;
elementoPara.innerHTML = lista.data.to;
elementoTexto.innerHTML = lista.data.text;


*/