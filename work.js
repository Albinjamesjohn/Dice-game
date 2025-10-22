var rand1=Math.random();
var num1=Math.floor((rand1*6)+1); //random number for dice1



var rand2=Math.random();
var num2=Math.floor((rand2*6)+1);  //random number for dice 2

function diceRoll1(number){
    var dice=document.querySelectorAll(".dicee1 div");
   
    if(number===1){
        dice[1].classList.add("hide");
        dice[2].classList.add("hide");
        dice[3].classList.add("hide");
    
        dice[4].classList.add("hide");
    
        dice[6].classList.add("hide");
    
        dice[7].classList.add("hide");
        dice[8].classList.add("hide");
        dice[9].classList.add("hide");
    
    }

    if(number===2){
        dice[2].classList.add("hide");
        dice[3].classList.add("hide");
        dice[4].classList.add("hide");
    
        dice[5].classList.add("hide");
    
        dice[6].classList.add("hide");
    
        dice[7].classList.add("hide");
        dice[8].classList.add("hide");
       
    
    }

    if(number===3){
        dice[2].classList.add("hide");
        dice[3].classList.add("hide");
        dice[4].classList.add("hide");
       
        dice[6].classList.add("hide");
    
        dice[7].classList.add("hide");
        dice[8].classList.add("hide");
       
    
    }

    if(number===4){
        dice[2].classList.add("hide");
        dice[4].classList.add("hide");
       
        dice[5].classList.add("hide");
    
        dice[6].classList.add("hide");
        dice[8].classList.add("hide");
       
    
    }

    if(number===5){
        dice[2].classList.add("hide");
        dice[4].classList.add("hide");
    
        dice[6].classList.add("hide");
        dice[8].classList.add("hide");
    
    }
    if(number===6){
        dice[1].classList.add("visible");
        dice[2].classList.add("visible");
        dice[3].classList.add("visible");
        dice[4].classList.add("visible");
        dice[5].classList.add("visible");
        dice[6].classList.add("visible");
        dice[7].classList.add("visible");
        dice[8].classList.add("visible");
        dice[9].classList.add("visible");

    }

}
function diceRoll2(number){
    var dice=document.querySelectorAll(".dicee2 div");
   
    if(number===1){
        dice[1].classList.add("hide");
        dice[2].classList.add("hide");
        dice[3].classList.add("hide");
    
        dice[4].classList.add("hide");
    
        dice[6].classList.add("hide");
    
        dice[7].classList.add("hide");
        dice[8].classList.add("hide");
        dice[9].classList.add("hide");
    
    }

    if(number===2){
        dice[2].classList.add("hide");
        dice[3].classList.add("hide");
        dice[4].classList.add("hide");
    
        dice[5].classList.add("hide");
    
        dice[6].classList.add("hide");
    
        dice[7].classList.add("hide");
        dice[8].classList.add("hide");
       
    
    }

    if(number===3){
        dice[2].classList.add("hide");
        dice[3].classList.add("hide");
        dice[4].classList.add("hide");
       
        dice[6].classList.add("hide");
    
        dice[7].classList.add("hide");
        dice[8].classList.add("hide");
       
    
    }

    if(number===4){
        dice[2].classList.add("hide");
        dice[4].classList.add("hide");
       
        dice[5].classList.add("hide");
    
        dice[6].classList.add("hide");
        dice[8].classList.add("hide");
       
    
    }

    if(number===5){
        dice[2].classList.add("hide");
        dice[4].classList.add("hide");
    
        dice[6].classList.add("hide");
        dice[8].classList.add("hide");
    
    }
    if(number===6){
        dice[1].classList.add("visible");
        dice[2].classList.add("visible");
        dice[3].classList.add("visible");
        dice[4].classList.add("visible");
        dice[5].classList.add("visible");
        dice[6].classList.add("visible");
        dice[7].classList.add("visible");
        dice[8].classList.add("visible");
        dice[9].classList.add("visible");

    }

}

diceRoll1(num1);
diceRoll2(num2);



if(num1>num2){
    document.querySelector("h1").innerHTML="Player 1 Wins 👑"
}
else if(num2>num1){
    document.querySelector("h1").innerHTML="Player 2 Wins 👑 "
}
else{
    document.querySelector("h1").innerHTML="Draw❕😉"
}

//Reset button
function reset(){
    diceRoll1(6);
    diceRoll2(6);
    document.querySelector("h1").innerHTML="Refresh to Roll 🎲"
}
