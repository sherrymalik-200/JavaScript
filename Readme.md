
#### Q. 1 what is variable?
- A variable is a like label container used to store value or data in memory.
- const name = "sheraz"
- const dob = 23-03----
#### how many stages of variable and funcion?

variable have 3 stages 
  - Decleration phase: let a;
  - initilization phase: a=10;
  - usage phase: console.log(a);
but function have 2 stages?
- definatin phase: function add(){}
- calling phase: add()
- so in hoisitng calling phase at top for function and variable decleration phase at top.
#### Q.2 why do we need variable?
if we dont store value, we cant reuse them.

#### Q.3 What is the difference b/w var, let and const.
- var is function-scoped, let and const are block-scoped.
#### explain this,
- var: function scoped, can be redeclared and reassign.
- let: block-scoped,  can be reassigned but not redeclared in the same scope.
- const: block-scoped,cannot be reassigned and redeclared.

example.
```js
function test() {
  if (true) {
    var x = 10;
    let y = 20;
    const z = 30;
  }
  console.log(x); works fine print
  console.log(y); // ❌ Error (block-scoped)
  console.log(z); // ❌ Error
}
test();
```

#### Q.4 how many types of block or explain global scope, fucnction, and block-scope or differnce?
scope mean visibility
- global scope.  variable declared outside any function/ block. Accessible everywhere.
- function scope.  varialb declared inside a function, Accessible only inside that function.
- block-scope: variable declared inside of block {}, Acessible only inside that block.

#### Q.5 What is hoisting  in Javascript? </br>
hoisting  means javascript moves variable and function decleration to the top of their scope before execution.
```js
console.log(a); // undefined (confusing behavior)
var a = 10;

console.log(b); // ReferenceError
let b = 20;
```

#### Q.6 Does hoisitng work same for let and const?

All three var, let and const are hoisted, but there's a differnce.
- var hoisted with undefined value.
- let, and const hoisted but kept in Temporal  Dead Zone untill initilized.
#### Q: Is hoisting a good or bad thing in JavaScript?<br>
**✅ Good part (Functions):**
- You can call a function before its declaration.
- Makes code flexible and organized.

```js
greet("Sheraz"); // Works because of hoisting

function greet(name) {
  console.log("Hello " + name);
}
```
not good for variable becuase confusing behaviour. undefined value assign to var. not catch error

#### Q.7 what is TDZ?
unsafe zone b/w hoisting and initilization. and cant use let and const throw refrence error.
use first then initialized, so throw refrence error. accesing before initilization is in the tdz.

console.log(x);
let x = 10;

#### Q.8 if var, let and const all hoisted, then why not undefined  value assign  to const or let?

Javascript creator wanted to avoid bugs tht happend with var, if let and const are also auto-assigned undefined, developer might accidentally use them before initilization. TDZ forces us to declare first, then use.

#### Q.10 .   What is a primitive data type?
A primitive data type is a basic data type that stores the actual value directly.

Example.  Number → let age = 28;

String → let name = "Sheraz";

Boolean → let isActive = true;

Undefined → let x; // no value assigned

Null → let y = null;

Symbol → let id = Symbol("unique");

BigInt → let big = 12345678901234567890n;

#### Q.11 What is a refrence data type?

A refrence data type stores a refrence (memory address) to the value, not the actual value.
Example.
- Object,  Array,  Function,  Date etc.

#### Q.12 Difference b/w primitive data type and refrence data type?
Primitive = copied by value, independent.
Refrence = copied by refrence, linked to same object.

in primitive data type when copy the first value, chaning in second valued not affect the fist one.
but in refrence data type when copy the value, then changing the copied value affect.

#### Q.13 Difference b/w null and undefined?

undefined = a variable tht is declared but not assigned any value. (undefined means "not yet assigned")
null = A variable that is intentionally assigned empty value. (null means "assigned nothing")

#### Q.14 Type Coercion?
Js auto converts types in some operation.
5+"1" = 51  becuase + add and concatenate both.

Local vs Strict Equality.
==   compare value with type conversion
=== compare vale +type (no conversion)

5 =="5"   True
5 ==="5" False
Always prefer ===  for accuarte comparisions.

NaN (not a number)

#### typeof(NaN) = number //

Even though it means not a number, NaN is actually of type number, this is because operation like 0/0  or parseInt still produce a numeric result just an invalid one.

#### Truthy and False Values.

except falsy value all value is truthy.
falsy values.
false, 0, "", null, undefined, NaN

common confusion. 
type of null is "Object"  this is a bug
undefined means the variable was never assigned.
null means you intentionally set to nothing.
"5"+1 =51 but '5'-4 =1

#### Q. 15.  Operators

Operators are special symbols or keywords used to perform operations on values.(operands)
used operator in calculations, comparisions,  logic, assignment and even type checks.

#### Q.16 Control flow statement?
Control flow decides which code runs, when it runs, and how many times it run. its like a decision-making + direcion,
#### control flow statment have 3 category. 
1.  conditional statment(if, if else, if..else if..else, switch)
2.  loops(repetative)(for, while, do while,for of, for each, for in)
3. (jumping statments)(break, continue, return, throw)

1. Conditional statment
if, if else,   if.. else if.. else,  switch case,  early return patterns, 

- if else.  (used when one condition checks like yes or no).

- if ,else if,  else (used when two or more then two condition checks)
- switch case.(alternative of if..else if.. else)
used for checking  one variable against many values.
#### what is differnce b/w if elseif else and switch?
if, elseif, else - in if elseif else, condition check one by one from top to bottom.
switch. - program does not check case one by one, directly jump to the matching case.

✅ Use if...else if...else when:

You need to check ranges (e.g., age, prices, dates).

You need complex conditions (&&, ||, multiple variables).

Example: if (age > 18 && age<30 ) {...}

✅ Use switch when:

You’re checking one variable against fixed values.

Options are like menu selections, enums, roles, commands, or status codes.

- Early return pattern(used in function to exit early if some condition fails.)
early return pattern avoid deep nesting and makes logic cleaner.

#### Q. 17..  Loops.
used to perform repeatitive task.
for, while, do while, for of, for each, for in,

- for. (used when number of iteration is known).
```js
for (initialization; condition; increment/decrement) {
  // code block
}

for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}
```

- while. (used when number of iteration is unknown, but repeat until a condition is true.)
```js
let money = 0;
while (money < 100) {
  money += 20; // add 20 each time
  console.log("Money:", money);
}
```
- do-while(used when number of iteration is unknown and run at least once even  condition is false)
```js
pin = "1122"
do{
    console.log("welcome to BANK ATM")
    console.log("enter your card please");
    console.log("enter your pin please")
}while(pin!="1122");

console.log("sorry your pin is incorrect!!!")
```

- for in (used for objects)
```js
let person = { name: "Sheraz", age: 28, city: "Karachi" };

for (let key in person) {
  console.log(key, ":", person[key]);
}
```
- for-of(used for arrays, strings, maps, sets, etc)
```js
let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
  console.log("Fruit:", fruit);
}
```
- forEach(used for arrays but cant break or return and continue)(recommend not used)

### Array.

An array is a collection of items or values, stored in single variable, and each value can be accessed using its index. (starting from 0).
```js
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Apple
console.log(fruits[2]); // Mango
```
 Why Use Arrays?

Arrays are useful when you want to store and manage a collection of data instead of creating multiple separate variables.
Without an array ❌:

let fruit1 = "Apple";
let fruit2 = "Banana";
let fruit3 = "Mango";

Easier to loop through values.

Easier to add/remove/update items.

Saves time and makes code cleaner.

#### Array Methods in JavaScript.

Adding / Removing Elements.

push(item);    add element to the end.</br>
pop();         remove element from the end.</br>
unshift(item);     add element to the start. </br>
shift();       remove element from the start. </br>
splice(start, deletecount, items); 

Used for custom adding, removing, or replacing elements, and it changes the original array

add/remove at specific index. `fruits.splice(1, 1, "Peach"); // removes 1 item at index 1, adds "Peach"`

slice(start, end); 

Used to make a copy or subset of an array without changing the original.
return part of array (does not change original)  `let citrus = fruits.slice(1, 3); // ["Peach", "Mango"]`

#### 🔹 Searching / Finding.

indexOf(item);   first index of item (or -1 if not found).

lastIndexOf(item)    last index of item.

includes(item);    check if array contain item.  `fruits.includes("Apple"); // true`

find(callback);     Returns first element that matches condition.   
`let num = [1, 5, 10, 15];
num.find(n => n > 9); // 10 `

#### 🔹 Iteration / Transformation.

forEach(callback) => Runs function for each element.
`fruits.forEach(f => console.log(f));`

map(callback);
Return a new array with modified values.
`let upper = fruits.map(f => f.toUpperCase());`

fitler(callback);
create new array with matching condition.   
`let longNames = fruits.filter(f => f.length > 5);`

reduce(callback, initialValue);
Reduce array in single value.

`let numbers = [10, 20, 30];
let sum = numbers.reduce((a, b) => a + b, 0); // 60 `

#### 🔹 Sorting / Reversing

sort();
sort array alphabatically by default. 
`fruits.sort(); // ["Apple", "Banana", "Mango"]`
reverse();
reverse order.

#### 🔹 Conversion.

join(seperator);
convert array to string. 
`fruits.join(" - "); // "Apple - Banana - Mango"`

toString();
converts array to comma seperated string.

concat();
combines array.
`let newArr = fruits.concat(["Pineapple", "Kiwi"]);`

👉 Difference memory trick:

includes → Yes/No

find → Value

findIndex → Location

2. 🎭 Transformation Methods

map() → returns new array (same length, transformed items).

filter() → returns new array (smaller, only items that pass).

reduce() → returns one single value.

👉 Trick:

map → all change

filter → some kept

reduce → all into one

3. 🌀 Iteration / Looping

forEach() → just runs code for each item, no return.

for...of → loop that you can break/continue.

👉 Trick:

forEach → action only

for...of → action with control

#### Object.
An object is a collection of key-value pair. keys are always string(or symbols) and value can be anything(number, string, array, function, another object etc)
```js
const person = {
name:"sheraz",
age:28;
isStudent:false,
greet:function(){}
};
```
#### when use object and when use array?
array: best for list of items.
Object: best for decribing a single item with multiple details.

Example:

A car → { brand: "Toyota", model: "Corolla", year: 2022 }

A student → { name: "Ali", age: 20, subjects: ["Math", "CS"] }

Array → Like a list (chorai / breadth).

You just know the items one by one.

Example: [ "Ali", "Ahmad", "Sara" ] → Just names, no details.

Object → Like a profile card (gehrai / depth).

You go into the details of one item.
`{ name: "Ali", age: 20, city: "Lahore" }`

#### Object methods.
A) Getting Keys / Values / Entries

Object.keys(obj) → Returns all keys in an array.

`const person = { name: "Ali", age: 20 };
console.log(Object.keys(person)); // ["name", "age"]`

Object.values(obj) → Returns all values in an array.

`console.log(Object.values(person)); // ["Ali", 20]`

Object.entries(obj) → Returns [key, value] pairs in an array.

`console.log(Object.entries(person));
// [["name", "Ali"], ["age", 20]]`
### I use Object.entries() with for...of because it’s more reliable (no unwanted inherited keys) and easier (I get both key and value at once).

B) Creating / Copying Objects

Object.assign(target, source) → Copies properties from source(s) into target.
```js
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const result = Object.assign({}, obj1, obj2);
console.log(result); // { a: 1, b: 2 }
```
Object.create(proto) → Creates a new object with a given prototype.
```js
const proto = { greet: () => console.log("Hello") };
const obj = Object.create(proto);
obj.greet(); // Hello
```

#### 📌 C) Property Control

Object.freeze(obj) → Makes object immutable (no add/remove/change).
```js
const car = { brand: "Honda" };
Object.freeze(car);
car.brand = "Toyota"; // ❌ no effect
console.log(car.brand); // "Honda"
```

Object.seal(obj) → Can’t add/remove properties, but can change existing values.
```js
const car = { brand: "Honda" };
Object.seal(car);
car.brand = "Toyota"; // ✅ works
car.model = "Civic";  // ❌ no effect
```
#### D) Checking Properties

Object.hasOwn(obj, key) (new ES2022) → Checks if key exists directly on object.
`const person = { name: "Ali" };
console.log(Object.hasOwn(person, "name")); // true
console.log(Object.hasOwn(person, "age"));  // false`

#### 🔹 3. Modern Useful Tricks

Destructuring 

“Destructuring is used to unpack values from arrays or objects into separate variables.”

`const person = { name: "Ali", age: 20 };
const { name, age } = person;
console.log(name, age); // Ali 20`

Spread Operator (...):

“The spread operator is used to copy or combine arrays and objects by expanding their elements.”
`const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }`






#### Q.18.. Function.
A function is a reuseable block of code that performs a specific task.
instead of repeating the task again and again. wrap it in a function and reuse it with differenct inputs. Function keep code clean, DRY, and reuseable.

#### Q.19  Difference b/w parameter vs arguments?
parameter:  variable in function defination.
argument: actual value given when a function called. 

#### Q.20 (1) What is function decleration?
function declaration is defining a function, with the function keyword, and it is hoisted.
```js
function sum(a,b){
return a+b;
}
sum(2,3);
```
used.  when want reuseability and hoisted , avoid when dont want hoisted.

#### Q.21 (2) What is function expression?
A function stored inside a variable, not hoisted.
```js
const sum = function(a,b){
  return a+b;
}
sum(2,3);
```
used. when need function assign to variable and do later something on this.

####  Arrow function(ES6).

A shorter syntax for function, doesn't have its own `this`

`const multiply = (a, b) => a * b;
console.log(multiply(4, 2)); // 8`

shorter syntax,  great for callbacks (map, filter, foeach). 
keep `this` from outer scope. (important in classes, object).
Not suitable when need function its own `this` (like object method or constructur)

#### Anonymous Function

Function without a name, usually used inside other functions.

`setTimeout(function() {
  console.log("Hello after 2 seconds");
}, 2000);
`
Good for temporary, one time use,
Hard to debug since it has no name.


#### IIFE.(immediately invoked function expression).

A function that runs immediately, after its defined.
`(function() {
  console.log("I run immediately!");
})();
`
used for initilization and to avoid polluting global scope.  but but rarly needed in modern JS (module replace it)


#### Constructur function. 

A function used with `new` to create objects. (like a blueprint)
`
function Person(name) {
  this.name = name;
}
const p1 = new Person("Sheraz");
console.log(p1.name); // Sheraz
`
used  for creating objects  before es6 classes existed 
now replaced mostly by classes. 

#### Generator function.

A function that can pause and resume using yield.
```js
function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = generateNumbers();
console.log(gen.next().value); // 1
```
✅ Useful for iterators and handling async flow.
❌ Not for everyday coding—use only when needed.

#### Async function

A function that return a promise and use await for async code .
```js
async function fetchData() {
  return "Data received";
}
fetchData().then(console.log);
```
✅ Used when dealing with promises and async/await (APIs, DB calls).
❌ Don’t use if code is purely synchronous.

#### commonly used function in modern js. 
1. Function Declaration
Still used for reusable utility functions and when hoisting is helpful.

2. Function Expression (with const)
Useful when you want control over scope and don’t care about hoisting.

3. Arrow Function (Most Popular)
Modern default choice for short functions and callbacks.

4. Async Function (with await)
Standard for APIs, database calls, async tasks.

5. Class Methods (uses arrow functions for callbacks inside)
In OOP, modern JS prefers class + arrow for event handlers.

in async function we discuss asyn and await and promises becuase async function always return promises.

#### Q.41 – Promises, and async/await<br>
Promises = A promises is an object that represents a value that will be available now, later, or never.
**Async/Await**  
- `async` makes a function return a promise.  
- `await` makes JavaScript wait until the promise settles.  
- Cleaner alternative to `.then()` and `.catch()`.
- old way write `.then()` and `.catch()`. new version is await.

#### 3 stages of promises.
1. Pending.   operation or task not finished yet.
2. Fulfilled. operation or task sucessful, you got the value.
3. Rejected. operation or task failed, you got the an error.

#### 🔹 2. Why do we need Promises?

before promises async code was handled by callback.

Callbacks worked, but led to callback hell (nested functions, unreadable code).

then promises come 
1. to solve callback hell.
2. to make async code is eaiser.
3. to improve error handling with .catch().

#### 🔹 5. When to Use Promises

doing async work like.

- API call(fetch, axios)
- Database queries.
- file reading (node.js)
- timers, background tasks.

callback hell.
```js
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 2000);
}

fetchData((result) => {
    console.log(result);
});
```
Promise way (better):
```js
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

fetchData().then(result => console.log(result));
```
Promises + Async/Await
```js
async function getData() {
    const result = await fetchData();
    console.log(result);
}
getData();
```
How does await handle things?

When JS sees await promise, it pauses only that async function, not the whole program.

While paused, JS engine is free to run other tasks (non-blocking).

When the Promise resolves → it resumes from that point with the resolved value.

So:

.then() → chaining style

await → pause/resume style (looks like synchronous code, but is still async under the hood).

.then() and await both handle Promises.

.then() → callback chain.

await → makes async code look like synchronous, more readable.

But await only works inside an async function.


#### What is First-class function?
Js function are first class citizen, meaning they can be stored in variable. passed as argument, and returned from other function just like anyother value.
(Concept, not a special type.)

Note: This property is the foundation of callbacks, High Order function, promises, async/await, and functional programming.

#### What is High order function?
A function that accepts another function as an argument OR returns a function or both. like a parent function
(Example: map, filter, reduce, setTimeout.)

#### Callback Function
The function that is passed into another function is called a callback.
The function that receives it is the higher-order function.
```js
function greet(name, callback) {
  console.log("Hello " + name);
  callback();  // function called inside another function
}

function afterGreeting() {
  console.log("Welcome to JavaScript!");
}

greet("Sheraz", afterGreeting);
```

### Quick cheat-sheet (one-sentence definitions)

Function: reusable code block.

First-class: functions are values.

Higher-order: takes/returns functions.

Callback: function passed to another to be called later.

Callback hell: nested callbacks leading to unreadable code.

Promise: object representing a future value (pending/fulfilled/rejected).

.then() chaining: handle promise resolution sequentially.

async/await: syntactic sugar over promises making async code look synchronous.

#### Lexical scope, closures 

Lexical scope means inner function can access outer function variable.

#### Closure.

Closure mean inner function remember outer function variable. even outer function executed or done.


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












