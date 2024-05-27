playGame = (userChoice) => {
    console.log("User choice:", userChoice);
    let computer = comChoice();
    console.log("Computer choice:", computer);
    
    if (userChoice === computer) {
        console.log("Match Draw");
        msgBox.innerHTML = `You chose ${userChoice}. Computer chose ${computer}. Match Draw. Try Again.`;
        msgBox.style.backgroundColor = "blue";
    } else {
        let userWin;
        if (userChoice === "rock") {
        
            userWin=computer==="paper"?false:true;
        } else if (userChoice === "paper") {
         
            userWin=computer==="scissors"?false:true;
        } else  (userChoice === "scissors") 
            userWin=computer==="rock"?false:true;
        
          
           
        
        showWinner(userWin, userChoice, computer);
    }
}
let reset=document.getElementById('#reset');
const msgBox = document.querySelector('#msgBox');
let uScore = 0;
let cScore = 0;

showWinner = (userWin, userChoice, computer) => {
    if (userWin) {
        uScore++;
        console.log(uScore);
        msgBox.innerHTML = `You chose ${userChoice}. Computer chose ${computer}. You Win!`;
        msgBox.style.backgroundColor = "green";
        document.getElementById('user').innerHTML =`User Score :- ${uScore}`
    } else {
        cScore++;
        console.log(cScore);
        msgBox.innerHTML = `You chose ${userChoice}. Computer chose ${computer}. Computer Wins.`;
        msgBox.style.backgroundColor = "red";
       
        document.getElementById('comp').innerHTML =`User Score :- ${cScore}`
    }
}

const comChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let randIx = Math.floor(Math.random() * 3);
    return options[randIx];
}

let choices = document.querySelectorAll('.button_box > div');
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
const resetGame = () => {
    uScore = 0;
    cScore = 0;
    document.getElementById('user').innerHTML = `User Score: ${uScore}`;
    document.getElementById('comp').innerHTML = `Computer Score: ${cScore}`;
    msgBox.innerHTML = 'Play Your Move';
    msgBox.style.backgroundColor = '';
}

document.getElementById('reset').addEventListener("click", resetGame);

