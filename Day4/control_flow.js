//control flow statement decide which code will run and when it will run

// if else,  if else if else, switch, early return pattern

let age = 28
if(age === 12){
    console.log("bacha hai")
} 
else {
    console.log("bara hai")
}

// we used if else if else,  when many 2 or more condition checked

if(age === 12){
    console.log("bacha hai")
} else if(age ===25){
    console.log("age 25 hai")
}else if(age ===28){
    console.log("age is 28")
}else{
    console.log("else part")
}

//swith case

switch(age){
    case 18:
        console.log("You are 18, not an adult")
        break;
    case 21:
        console.log("you are 21")
        break
    case 28:
        console.log("you are 28")
        break;
}

//early return pattern.   check failure cases first -exist - keep code clean and exit
function rps(user, computer){
    if(user ==="rock" && computer ==="rock") return "game over"
    if(user ==="rock" && computer ==="scissor") return "user win";
    if(user === "paper" && computer ==="rock") return "user win";
    if(user === "scissor" && computer ==="paper") return "user win";

    return "computer win"
}
console.log(rps("rock", "paper"));
console.log(rps("rock", "rock"));
console.log(rps("scissor", "paper"));
console.log(rps("scissor", "rock"));