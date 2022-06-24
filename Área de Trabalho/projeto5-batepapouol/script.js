let mensagens=[];

buscarDados(); 
function buscarDados(){
    let promessa = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages");
    promessa.then(popularDados);
}
 function popularDados(resposta){
    console.log(resposta);
    mensagens = resposta.data;  
    renderizarReceitas();
 }

 function renderizarReceitas(){
     const ulMensagens = document.querySelector('.mensagens');
     ulMensagens.innerHTML = "";
     
     for (let i = 0; i < mensagens.length; i++){
        if(mensagens[i].type === "status"){
        ulMensagens.innerHTML += `
        <div class="caixa-1">
        <a>(${mensagens[i].time})</a><b>${mensagens[i].from}</b><p>${ mensagens[i].text}</p>
        </div>
        `;
     }
     
    }
 }







/*

function renderizarMensagens(msg){
    console.log(msg.data);
    for (let i = 0; i < 100; i++){
    var receitas = document.querySelector('.mensagens');
    receitas.innerHTML += msg.data[msg.data.length-1].from;
    console.log(receitas);
    i++;
    }
}



let elementoTempo = document.querySelector('.tempo');
let elementoEmitente = document.querySelector('.emitente');
let elementoPara = document.querySelector('.para');
let elementoTexto = document.querySelector('.texto');


elementoTempo.innerHTML = lista.data.time;
elementoEmitente.innerHTML = lista.data.from;
elementoPara.innerHTML = lista.data.to;
elementoTexto.innerHTML = lista.data.text;


*/