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
     const ulMensagens1 = document.querySelector('.mensagens1');
     ulMensagens1.innerHTML = "";
     const ulMensagens = document.querySelector('.mensagens1');
     ulMensagens.innerHTML = "";
     
     for (let i = 0; i < mensagens.length; i++){
        if(mensagens[i].type === "status"){
        ulMensagens1.innerHTML += `
        <div class="caixa-1">
        <a>(${mensagens[i].time})</a><b>${mensagens[i].from}</b><p>${ mensagens[i].text}</p>
        </div>
        `;
     }
     else if(mensagens[i].type === "message"){
      ulMensagens.innerHTML += `
      <div class="caixa">
      <a>(${mensagens[i].time})</a><b>${mensagens[i].from }</b>  para <b>${mensagens[i].to}</b> <p>${ mensagens[i].text}</p>
      </div>
      `;
   }
    }
   
    
 }