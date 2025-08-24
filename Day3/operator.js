// operator.  Operator is a symbol which perform specific action on one or more values
// why used?  operator are used because they 1
//1. they do calculation
// 2. compare values
// 3. Assign values
// 4. Make decision

// Arithmatic opertor.
//12+2 = 14
// 12-2 = 10
// 12*2 = 24
// 12/2 = 6
// 12%2 = 0  baqia number
// 2**2 = 8   exponentional 

// BODMAS rule.  brackets, order mean exponential, squre root etc, Division, Multiplication,  Addition, Subtraction
// at left side high priority in multiplication and division and also in subtraction and addition

// Comparision
// 5 =="5" true  double equal check for equality but its check just value not type 
// 5===5  true   tripple equal check value and type both
// !== when both side left and right not equal like 12 != 13

// Assignmetent operator.  just one assignment operator = but its have more variation like
// +=, -=, *=, /=, 
let a = 12
a+=3
console.log(a)
a-=11
console.log(a)
a%=3
console.log(a)

// Logical operator
// && , || , !

// &&.  when both side true then output true.
//||  when one of two sides false then output will be false. 
// ! when true then output will be reverse, if true then output reverse false, when false output will be true

// Unery operator.  typeof jiske through type check kar sagte hain.   !,  iske through hum number ki type check kar sagte hain
// +, -, ++, --
// pre - increament like ++a mean first value increase then next task do, post increament a++ after value increase first next task perform


// Ternary operator.    condition? True Part : False Part
12>13? console.log("This is true part"): console.log("this is false part")

let x = 20
let y = 30

if(x<25 && y<40){
    console.log("if part execute")
}else{
    console.log("else part execute")
}

let isAdmin = true
let isLogedIn = false

if(isAdmin|| isLogedIn){
    console.log("access granted");

}else{
    console.log("access denied");
}

let temp = 35
if(!(temp<30)){
    console.log("if part of temp")
}else{
    console.log("else part of temp")
}

let s = 0
if(s){
    console.log("if part execute of truthy")
}else{
    console.log("else part execute of truthy")

}

let score = 70
score>90?console.log("A"):score>80? console.log("b"): score>70? console.log("B"):score>60? console.log("C"):console.log("fail")

let checkpre = 5
console.log(checkpre)
h =++checkpre
console.log(h)
console.log(checkpre)


let checkpost = 10
console.log(checkpost)
h = checkpost++
console.log(h)
console.log(checkpost)


let n = 5;
let result = n++ + ++n;
console.log(result)

//n++ → Return old, then update.

//++n → Update first, then return new.

let likes = 100

function likePost(){
    return ++likes;
}
console.log(likes);
console.log(likePost());
console.log(likes)
