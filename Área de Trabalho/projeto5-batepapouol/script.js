// ENTRAR NA SALA
let nome = "";
 nome = prompt ("qual seu lindo nome?")
function participantes(participante){
   participante = {
      name: nome,
   }
   if(participante.name === ""){
      participante = {
         name: prompt ("Qual seu lindo Nome?")
      }
      
   } else{
   
    
  const promise = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants",
  participante);
   promise.then(alertarSucesso);
   promise.catch(alertarErro);
}
}

participantes();



// VERIFICA SE HOUVE SUCESSO NO CADASTRO
function alertarSucesso(resposta){
   console.log(resposta);

}
// VERIFICA SE  HOUVE FALHA NO CADASTRO
function alertarErro(error){
   console.log(error);
}


setInterval (participantes, 3000);

// BUSCAR MENSAGENS DA SALA   

let mensagens=[];


function buscarDados(){
    let promessa = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages")
         promessa.then(popularDados);
 
}
buscarDados();

function popularDados(resposta){
   mensagens = resposta.data || [];  
   renderizarMensagens();
}






 function renderizarMensagens(){
   console.log(mensagens)
      const ulMensagens2 = document.querySelector('.mensagens1');
      ulMensagens2.innerHTML = "";  
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
      else if(mensagens[i].type === "private_message"){
         ulMensagens2.innerHTML += `
         <div class="caixa-2">
         <a>(${mensagens[i].time})</a><b>${mensagens[i].from }</b>  Reservadamente para <b>${mensagens[i].to}</b> <p>${ mensagens[i].text}</p>
         </div>
         `;
         }
      }   
   window.scrollTo(0, 6000);
     
   
}

let enviar = undefined;

function perguntar(pergunta) {
pergunta = document.querySelector(".caixa-texto").value;
enviar =
   {
      from: nome,
      to: "Todos",
      text: pergunta,
      type: "message"
   }
   const promise = axios.post("https://mock-api.driven.com.br/api/v6/uol/messages",
   enviar);
   promise.then(alertarSucesso);
   promise.catch(alertarErro);


   console.log(enviar)
}



perguntar();






   // ATUALIZAR MENSAGENS DA SALA
   setInterval(buscarDados, 3000);
  
 
    
 
      

    

  

 