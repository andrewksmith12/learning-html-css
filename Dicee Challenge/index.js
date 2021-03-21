function rollDice() {
    var randomNumber1 = Math.floor(Math.random()*6)+1;
    var randomNumber2 = Math.floor(Math.random()*6)+1;
    var dice1 = document.getElementById('dice1');
    var dice2 = document.getElementById('dice2');
    
    dice1.setAttribute("src", "images/dice"+randomNumber1+".png");
    dice2.setAttribute("src", "images/dice"+randomNumber2+".png");
    
    var winnerText = document.getElementById("winner-text");
    if (randomNumber1 > randomNumber2) {
        winnerText.innerHTML = "🚩 Player 1 Wins!";
    }
    else if (randomNumber2 > randomNumber1){
        winnerText.innerHTML = "Player 2 Wins! 🚩";
    }
    else {
        winnerText.innerHTML = "It's a Draw!";
    }
}
rollDice();