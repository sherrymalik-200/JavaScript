### Q. 1 what is variable?
- A variable is a like container used to store value or data in memory.
- let name = "sheraz"
## Q.2 why do we need variable?
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
Javascript creator wanted to avoid bugs tht happend with var, if let and const are also auto-assigned undefined, developer might accidentally use them before initilization. TDZ forces us to declare first, then use.

q.9 what is Temporal dead zone? (TDZ)
temporal dead zone is the period where let and const exist but cannot be accessed until initilized.like,
console.log(x);
let x =10;
Q.10 .   What is a primitive data type?
A primitive data type is a basic data type that stores the actual value directly.

Example.  
string, number, boolean, null, undefined, symbol, bigint.

Q.11 What is a refrence data type?
A refrence data type stores a refrence (memory address) to the value, not the actual value.
Example.
Object,  Array,  Function,  Date etc.

Q.12 Difference b/w primitive data type and refrene data type?
Primitive = copied by value, independent.
Refrence = copied by refrence, linked to same object.

in primitive data type when copy the first value, chaning in second valued not affect the fist one.
but in refrence data type when copy the value, then changing the copied value affect.

Q.13 Difference b/w null and undefined?

undefined = a variable tht is declared but not assigned any value. (undefined means "not yet assigned")
null = A variable that is intentionally assigned empty value. (null means "assigned nothing)

Q.14 Type Coercion?
Js auto converts types in some operation.
5+"1" = 51  becuase + add and concatenate both.

Local vs Strict Equality.
==   compare value with type conversion
=== compare vale +type (no conversion)

5 =="5"   True
5 ==="5" False
Always prefer ===  for accuarte comparisions.

NaN (not a number)

typeof(NaN) = number //
Even though it means not a number, NaN is actually of type number, this is because operation like 0/0  or parseInt still produce a numeric result just an invalid one.

Truthy and False Values.

falsy values.
false, 0, "", null, undefined, NaN

common confusion. 
type of null is "Object"  this is a bug
undefined means the variable was never assigned.
null means you intentionally set to nothing.
"5"+1 =51 but '5'-4 =1

Q. 15.  Operators
Operators are special symbols or keywords used to perform operations on values.(operands)
used operator in calculations, comparisions,  logic, assignment and even type checks.

Q.16 Control flow statement?
Control flow decides which code runs, when it runs, and how many times it run. its like a decision-making + direcion,
if operators are the verbs mean action or work then control flow is the traffic signal which control the work flow.
if else,   if else if else,  switch case,  early return patterns, 

if else.  (used when one condition checks like yes or no).

if ,else if,  else (used when two or more then two condition checks)
switch case.
used for checking  one variable against many values.

Early return pattern(used in function to exit early if some condition fails.)
early return pattern avoid deep nesting and makes logic cleaner.

Q. 17..  Loops.
used to perform repeatitive task.
for, while, do while, for of, for each, for in,

for. (used when number of iteration is known).
while. (used when number of iteration is unknown)
do-while(used when number of iteration is unknown and run at least once even if condition is false)
for-of(used for arrays and strings.)
forEach(used for arrays but cant break or return and continue)
for in (used for objects)

Q.18.. Function.
function are blocks of reuseable logic,
instead of repeating the task again and again. wrap it in a function and reuse it with differenct inputs. Function keep code clean, DRY, and reuseable.

Q.19  Difference b/w parameter vs arguments?
parameter:  variable in function defination.
argument: actual value given when a function called. 

Q.20  What is function decleration?
function declaration is defining a function, with the function keyword, and it is hoisted.
Q.21 What is function expression?
defining a function inside a variable. and its not hoisted.

Q.21 What is First-class function?
Js function are first class citizen, meaning they can be stored in variable. passed as argument, and returned from other function just like anyother value.

Note: This property is the foundation of callbacks, High Order function, promises, async/await, and functional programming.

Q.22 What is High order function?
A high order function is a function that either takes another function as input, returns a function or both. They allow powerfull abstractins like callbacks and functional programming.

Q.23 Lexical scope, closures 
Lixical scope, Decide karta hai ke inner function ko outer function ke variable ki access hai(sirf likhne ki jaga dekh kar).

Lexical Scope → Scope decided by where function is defined (code placement).

Dynamic Scope → Scope decided by where function is called (call site).
function outer() {
  let x = 10;

  function inner() {
    console.log(x);  // inner ko outer ke variable ki access hai
  }

  return inner;
}

let fn = outer();
fn(); // 10

Q.24 Closures. Wo mechanism  hai, jo ensure karta hai ke jab outer function chal kar khatam bhe ho jaye. inner function ke pass outer ke variable ki access phir bhe ho.
function outer() {
  let counter = 0;   // outer ka variable

  function inner() {
    counter++;       // inner ko outer ka variable yaad hai
    console.log(counter);
  }

  return inner;      // outer return kar raha hai inner
}

let fn = outer();   // outer execute hua
fn(); // 1
fn(); // 2
fn(); // 3


Q.25  What is IIFE(immediately invoked function expression)
An IIFE is a function in Js that runs immediately after its created.
Q.26 Why used IIFE?
to avoid polluting global scope.
to initilize code once.(setup tasks, configs)
often used in modules & Js pattern.

Q.27  Array.

An array is a collection of items or values, stored in single variable, and each value can be accessed using its index. (starting from 0).

Iteration Method,
map();
Return a new array with modified values.


Q.28.   DOM (Document Object Model)

Document object model i mean dom ek tree like structure hai jo ke browerser bnata hai HTML page ka.
js ke through hum is tree ko read, change, add ya delete kar sagte hain.

Document
 └── html
     └── body
         ├── h1 ("Hello Sheraz!")
         └── button ("Click Me")

sab sy pahle hum kisi bhe way sey html ko select karte hain phir isko manipulate karte hain. 4 option hain selec tarike hain. 
1. document.getElementById();
2. document.getElementsByClassName();
3. document.querySelector();
4. document.querySelectorAll();

getElementById("a") → only works with id, returns one element.

getElementsByClassName("fc") → only works with class, returns a live HTMLCollection.

querySelector / querySelectorAll → works with any CSS selector (id, class, tag, nested, attributes, etc).

q. 29 Event and Event listening
An event is something that happens in the browser.
e.g
A user clicks a button. click button event
a key is pressed => keypress event

Event Listening.
we tell the browser "when this event happens on this element, run this function."
this is done using addEventListener.

Q. 30 Forms and forms validation.
A form in html is used to collect user input.
forms validation
checking user input is correct and acceptable.

Q.31 Difference b/w client side validation and server side validation?
validation happens in the browser.(before sending data to the server).
server side validation.
validation happens on the server. (backend after data is submitted)

Q. 32. setTimeout() = runs a function once after a delay(in milliseconds)
setInterval() = runs a function repeatedly after every dealy (loop-like)
clearTimeout() = cancels a setTimeout before its runs
clearInterval() = stops a running interval.

Q.33 localStorage, sessionStorage, cookies
localStorage = Permanent data store in the browser, even broswer closed or system restart. (~5MB to 10MB)
sessionStorage = Temporary data store in the browser, when tab or browser closed data remove.(~5MB)
cookies = cookies store small of piece of data apprismately (~4kb) in the browser. sent to the server with every request. 

Q.34 JSON.stringify(),  JSON.parse().
JSON.stringify() = Converts a JS object/array into JSON string. Usefull when sending data to server or saving in localstorage. 
JSON.parse() = convert a json string back into js object/array. usefull when receiving data from a server or reading from storage. 

Q.35 this keyword in JS.
this means the current execution context. in global scope its window(or undefined in strict), in an object method, its the object. in the class its instance, in an event handlers its the element. Arrow function dont have their own this. they use the outer scope.

Q.36. Execution Context.  means the environment in which code is running right now. -- who is running it, and what variable/objects are avaiable at that moment.

Q. 37 call(), apply(), bind() = call, apply, and bind are used to set this explicitly.
call. -> invoke function immediately with arguments listed.
apply -> invoke function immediately with arguments array
bind -> doesn't call immediately, return a new function with fixed "this".
⚡ Easy trick to remember:

call = comma (args given separately)

apply = array

bind = back later (creates function to use later)

Q. 38 Prototype 
prototype is the mechanisam in js that allows objects to share methods and properties. its how inheritance works. objects can acess properties from their prototype chain.
classical inheritace vs prototype.  
in classical inhertance class inherits from class. but in prototype objects inherit from object.

Q.39 What sync and async?
sync = code runs line by line, one task at a time, Next line wont execute until the current one finishes.
async = tasks can start now but finish later, without blocking the rest of the code.
used for time consuming operations(Api calls, DB queries, file reading)
JS is sync by default(single threaded, one line at a time). async programming lets Js handle long tasks without blocking, using callbacks, promises, or async/await.

Q. 40 what is callback pattern and callback hell?
The callback pattern means passing a function as an argument to be executed later, often for async task. callback hell happens when many callback are nested, creating unreadable and unmaintainable code.
## Q.41 – Promises, and async/await<br>
Promises = A promises is an object that represents a value that will be available now, later, or never.
**Async/Await**  
- `async` makes a function return a promise.  
- `await` makes JavaScript wait until the promise settles.  
- Cleaner alternative to `.then()` and `.catch()`.











