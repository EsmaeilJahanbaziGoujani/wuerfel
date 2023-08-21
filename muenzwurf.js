const coinArray = ["Kopf", "Zahl"]
const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");
console.log(buttons);
let score = [0, 0];





for (let i = 0; i < buttons.length; i++) {
    console.log(buttons[i]);
    buttons[i].addEventListener("click", tossCoin);
    
}





function tossCoin(e) {
    console.log(e.target.innerText);
    console.log("player:" + e.target.innerText);
    
    let playerGuess = e.target.innerText;
    let computerToss = Math.floor(Math.random() * 2);
    let computerGuess = coinArray[computerToss];
    console.log("computer:" + coinArray[computerToss]);
    //console.log(coinArray[computerToss]);
    message.innerHTML = " Vom Computer ausgewählte Number ist: " + computerGuess;
    let output;
    if (playerGuess === computerGuess) {
        output = "=> Der spieler hat gewonnen. "; score[0]++;
        message.innerHTML+=output+"<br>+player:" + score[0] + "computer:" + score[1];
    } else {
        output = "=> Der Computer hat gewonnen.  "; score[1]++;
        message.innerHTML += output + "</br>player:" + score[0] + "computer:" + score[1];
    }
}






 
