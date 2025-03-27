let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#userscore");
const compscorepara = document.querySelector("#compscore");

const gencompchoice = () =>{
    const options = ["rock" , "paper" , "scissor"];
    const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];
}
const drawgame = () => {
    
    msg.innerText = "Game Draw play again"
    
}

choices.forEach((choice) =>{
    
    choice.addEventListener("click" , () =>{
        const userchoice = choice.getAttribute("id");
       playgame(userchoice);
    })
})

const showwinner=(userwin,userchoice,compchoice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        
        msg.innerText = `You Won! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compscorepara.innerText = compscore;
       
        msg.innerText = `you loose ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
        
    }
}

const playgame = (userchoice) =>{
    console.log("selected choice is " , userchoice);
    const compchoice = gencompchoice();
    console.log("computer choice is " , compchoice);

    if(userchoice == compchoice){
       drawgame();
    }
    else{
        let userwin = true;
        if(userchoice == "rock"){
            //scissor , paper
            userwin = compchoice=="paper"?false : true;
        }
        else if(userchoice == "paper"){
            //rock,scissor
            userwin = compchoice=="scissor"?false : true;
        }
        else {
            //rock paper
            userwin = compchoice=="rock"?false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
    
}




