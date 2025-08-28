Q. 1 what is variable?
A variable is a container used to store data in memory so, we can or update it later.
let name = "sheraz"
Q.2 why do we need variable?
if we dont store value, we cant reuse them.

Q.3 What is the difference b/w var, let and const.
var is function-scoped, let and const are block-scoped.
explain this,
var: function scoped, hoisted , can be redeclared and reassignment.
let: block-scoped, not hoisted, can be reassigned but not redeclared in the same scope.
const: block-scoped, not hoisted, cannot be reassigned and redeclared.

example.
if(true){
    var x = 10;
    let y = 10;
    const z = 10;
}

Q.4 how many types of block or explain global scope, fucnction, and block-scope or differnce?

scope mean visibility
global scope.  variable declared outside any function/ block. Accessible everywhere.
function scope.  varialb declared inside a function, Accessible only inside that function.
block-scope: variable declared inside of block {}, Acessible only inside that block.

Q.5 What is hoisting  in Javascript?
hoisting  means javascript moves variable and function decleration to the top of their scope before execution.

console.log(a);
var a = 10;

Here var is hoisted, so javascript treats like this..... 

var a;
console.log(a);
a = 10;

Q.6 Does hoisitng work same for let and const?
All three var, let and const are hoisted, but there's a differnce.
var hoisted with undefined value.
let, and const hoisted but kept in Temporal  Dead Zone untill initilized.
var: hoisted + initilized as undefined 
let/const: but not initilized(TZD).

Q.7 what is TDZ?
unsafe zone b/w hoisting and initilization.
use first then initialized, so throw refrence error. accesing before initilization is in the tdz.

console.log(x);
let x = 10;

Q.8 if var, let and const all hoisted, then why not undefined  value assign  to const or let?
Javascript creator wanted to avoid bugs tht happend with var



