/* Desenvolva seu código abaixo */
function playRockPaperScissor(player1, player2){
let resultado = `${player1, player2}`

if ((player1=="Pedra" && player2=="Pedra") || 
(player1 =="Papel" && player2 == "Papel") ||
(player1 =="Tesoura" && player2 == "Tesoura")){
    resultado = "Empate!";
}if(( player1 =="Papel" && player2 == "Pedra")||
 (player1 =="Tesoura" && player2 == "Papel")||
 (player1 =="Pedra" && player2 == "Tesoura")){
    resultado = "Jogador 1 venceu!";
}if(( player1 =="Papel" && player2 == "Tesoura")||
 (player1 =="Pedra" && player2 == "Papel")||
 (player1 =="Tesoura" && player2 == "Pedra")){
    resultado = "Jogador 2 venceu!";
} 

return resultado
}


