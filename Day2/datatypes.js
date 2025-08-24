// data bhaot sari type ka hota 
// string int, symbol, bigint, 
// but data ki main two types hain 1. Primitive 2. Refrence 
// Primitive data types (string, number, boolean, null, undefined, symbol, bigint)
// aesi sari value jnko copy karne par aik real copy mill jaye
/*Daily life analogy
Think of a photocopy.
If I give you a photocopy of my CNIC, and you write something on it, my original CNIC won’t change.
That’s how primitive values work — they are copied.*/

// Refrence Data type arrays.[] objects {} function ()
/* Inko copy karne par real copy nai mille ge refrecne mille ga parant ka */

// Now first explain one by one Primitive data types/
//string .  data inside of single quotes, double quotes, or in backticks or collection of character.
//undefined = JavaScript says “no value assigned yet” a vairable which is declered but not given any value yet and javascript by default set vlaue undefined 

//null = You say “this is empty on purpose”

//Why both are needed?

//undefined → System/JavaScript’s way of saying: “no value assigned yet.”

//null → Developer’s way of saying: “I want this to be empty.”

//Daily Life Analogy 🍽️

// → You keep a plate on the table but haven’t put food yet (system default).

//null → You put an empty plate on the table and say: “This is intentionally empty.”
// bigint.  when number greater then max_save_integer then we add n at last and can add number more like

let a = 9007199254740991n;
console.log(a)
let b  = a+2n;
console.log(b)

// dynamic typing js mein dynamic type hai means aik variable different type ka data assign kar sagte hain
//like
//Quirks in JavaScript = weird or unexpected behaviors that exist due to its rushed design and backward compatibility.

//type coercion -> type coercion convert the one datatype to another.  mean aik type automatically convert ho jaye ge dosi data type mein

x = "5" + 1 
console.log(x)
// answer wil be 51 because + operator do two things add and concatinate so here javascript think concatination task
//but
x = "5"-1
console.log(x)  //answer will be 4 because negative opator just do one thing  minus or subtract 
// thats called type coercion 

// truthy and falsy
//  0 , false "" , null, undefined, NaN, document.all = False  check by !! then value in console

// type of NaN = number   true  becuae when failed mathmaticall operation thats result NaN
// example "sheraz" * 2 = NaN so that opertion failed that result NaN due to this NaN is number
