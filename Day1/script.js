//var 
// var function scoped hota hai, blocked scope ki respect nia karta mean block mein bhe agr define kro pore funtion mein phir bhe access kar sagte ho
// window mein add hota hai
// jitni dafa define kar lo value assign kar loo aik hi name sey error nai show karta 
// Redecleration possible with var not with let like below

var a = 12
var a = 13

//scope (global, block, function)

{
    var a = 12
}
// not respect blocked scoped.

// hoisitng  all decleration or defined part read first on top.
// thats why when we use variable first and initilized later which declere with var keywords not show error just undefined show
// because due to hoisting variable diviede into two parts so when we use decleration parts acces and this is define
// but in let and const same hoisting happend but this show refrence error or show not initilized at this stage. this throw error initilized first then used.
// that called temporal dead zone or TDZ

{
    var a =17
}
console.log(a)
let b = 50
{
    let b = 100
    console.log(b)
}
console.log(b)

if(true){
    var x = 500
    let y = 100

}
console.log(x)
// console.log(y)   showing refrece error.


