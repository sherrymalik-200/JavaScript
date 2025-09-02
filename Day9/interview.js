// code example practice
// variable.
if(true){
    var x = 10;
    let y = 10;
    console.log(y);
    const z = 10;
}
console.log(x);
x = 20;
console.log(x);

function test(){
    var a = 100;
    console.log(a);
}
test();

console.log(null +1);
console.log(true + false);
console.log(typeof[]);
console.log(typeof null);
console.log(typeof 123n);


// Reverse String

function reverseString(str){
    let reversed = "";
    for(let i =str.length - 1; i >= 0; i--){
        reversed += str[i];

    }
    return reversed;
}
console.log(reverseString("Sheraz"));

//Lexical Scope
let out = "sheraz";
function outer(){
    function inner(){
        console.log(out);
    }
    inner();
}
outer();
//closures.
function Outer(){
    let counter = 0;
    function Inner(){
        counter++;
        console.log(counter);
    }
    return Inner;
};
let fn = Outer();
fn();
fn();


// Array.
let prices = [100, 200,300];
let taxed = prices.map(p=>p*1.18)
for(value in taxed){
    console.log(taxed[value])
}