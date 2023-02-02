list=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let g=Math.floor(Math.random(list)*20)
let score=10;
let guess=document.getElementById("inputBox")
let a=document.querySelector(".y")
let b=document.querySelector(".button")
let c=document.querySelector(".c")
let d=document.querySelector(".score")
function Guess(){
    if(parseInt(guess.value) >20 || parseInt(guess.value) <0){
        a.innerText="Invalid Input"
        a.style="background-color:orange;" 
        score-=2;
        d.innerText=score; 
    }

    else if(parseInt(guess.value) === g){
        a.style="width:100px;"
        a.innerText="You Won"
        a.style="background-color:green;"   
        c.innerText=g 
        guess.style="display:none"
        b.style="display:none;" 
    }
    else if(parseInt(guess.value) >g){
        a.style="width:1000px;"
        a.innerText="Enter a smaller number"
        a.style="background-color:grey;"
        score-=2;
        d.innerText=score;
    }
    else if(parseInt(guess.value) <g){
        a.style="width:1000px;"
        a.innerText="Enter a large number"
        a.style="background-color:grey;"
        score-=2;
        d.innerText=score;
    }
    if(score===0){
        a.style="width:150px;"
        d.innerText=score;
        c.innerText=g
        a.innerText="Game over"
        a.style="background-color:red;" 
        guess.style="display:none"
        b.style="display:none;"
    }
}
