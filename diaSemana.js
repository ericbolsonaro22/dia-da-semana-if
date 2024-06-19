let resposta = document.getElementById('resposta')

function verificar(){
    let dia = Number (document.getElementById('dia').value)
    console.log(dia)
    
    if(dia == 1){
        resposta.innerHTML = "O dia da semana selecionado é Domingo!"
    }
    else if(dia == 2){
        resposta.innerHTML = "O dia da semana selecionado é Segunda!"
    }
    else if(dia == 3){
        resposta.innerHTML = "O dia da semana selecionado é Terça!"
    }
    else if(dia == 4){
        resposta.innerHTML = "O dia da semana selecionado é Quarta!"
    }
    else if(dia == 5){
        resposta.innerHTML = "O dia da semana selecionado é Quinta!"
    }
    else if(dia == 6){
        resposta.innerHTML = "O dia da semana selecionado é Sexta!"
    }
    else if(dia == 7){
        resposta.innerHTML = "O dia da semana selecionado é Sábado!"
    }
    else{
        resposta.innerHTML = "O valor digitado é inválido! Não corresponde à um dia da semana!"
    }

    // Estilo da Resposta
    resposta.style.fontSize = "5rem"
    resposta.style.color= "black"
    resposta.style.fontFamily = "System UI"
    resposta.style.transition = "10s"
}