// Function Declaration or Named fuction  → General reusable code.

// Function Expression → When you need functions as values.

// Arrow Function → Short syntax, especially in callbacks.

// Anonymous Function → One-time use (timers, events).

// IIFE → Run immediately, create private scope.

// Higher-Order Function → Functional programming.

// Constructor Function → Create objects.

// Generator Function → Pause & resume execution.

// Async Function → Async tasks (API calls).

function abc(){
    console.log("function statement or decleration")
}
abc();

// expression 

// if function store or assign to variabl then function expression.


let x = function(){
    console.log("expression")
}
x();

let y = ()=>{
    console.log("arrow function");
}

y();

// parameter and arguments

function dance(v1){
    console.log(`${v1} Nach raha hai`);
}

dance("ghoda");
dance("khotta");


function abc(v1 = 0 , v2 =0){
    console.log(v1 +v2);
}
abc();

// jab arguments bhaot sare hon to hamain itne hi parameter banae parain gein. so is cheez sey bachne keley hum rest ka use karte hain
function abcd(...v1){
    console.log(v1)
}
abcd(1,2,3,4,5,6,7,8,9,0)

// firstclass fucntion  if function are treading just like anyother variable.

// 1. assign a function  to a variable.
// 2. pass a function as an argument to another function
// 3. Return a function from another function

// in short function are treated as first-class citizen


//hof higher order wo function hota hai jo ke return kare function ya fir accept kare ek function apne parameter mein

// closure.. jab aik function return kare aik aur function ko. aur return hone wala func use kare parent function ka variable then this feature called closure. 
function outer() {
  let city = "Mianwali";

  function inner() {
    console.log("I live in " + city);
  }

  inner();
}
outer();

// Ek Line Difference

// Lexical Scope = Rule → inner function dekh sakta hai outer ke variables (scope chain).

// Closure = Behavior → inner function yaad rakhta hai outer ke variables, even after outer function khatam ho jaye.

// 🔹 Analogy (Super Simple)

// Lexical Scope → Tum ghar mein ho, aur tum fridge se khana le sakte ho kyunki tum us ghar ke andar ho.

// Closure → Tum safar par nikal gaye, lekin ammi ne tumhe ek tiffin pack karke de diya. Ghar band ho gaya, phir bhi khana tumhare paas hai.

// imediately invoked function

(function(){
    console.log("iife")
})();

// Hoisting = JavaScript execution se pehle function aur variable declarations upar move kar deta hai, values nahi.

// practice 
// convert this into arrow function.
let multiplty = (a,b)=>{return a*b};


//write a BMI calculator

function bmi(weight, height){
    return weight/(height*height);
}

console.log(bmi(72, 1.68).toFixed());
