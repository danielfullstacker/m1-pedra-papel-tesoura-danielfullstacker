/* Desenvolva seu código abaixo */
function playRockPaperScissor(player1, player2){
let resultado = `${player1, player2}`

if(player1=="Pedra" && player2=="Pedra"){
    resultado = "Empate!";
} else if( player1 =="Papel" && player2 == "Papel"){
    resultado = "Empate!";
} else if( player1 =="Tesoura" && player2 == "Tesoura"){
    resultado = "Empate!";
} else if( player1 =="Papel" && player2 == "Pedra"){
    resultado = "Jogador 1 venceu!";
} else if( player1 =="Tesoura" && player2 == "Papel"){
    resultado = "Jogador 1 venceu!";
} else if( player1 =="Pedra" && player2 == "Tesoura"){
    resultado = "Jogador 1 venceu!";
} else if( player1 =="Papel" && player2 == "Tesoura"){
    resultado = "Jogador 2 venceu!";
} else if( player1 =="Pedra" && player2 == "Papel"){
    resultado = "Jogador 2 venceu!";
} else if( player1 =="Tesoura" && player2 == "Pedra"){
    resultado = "Jogador 2 venceu!";
} 

return resultado
}


