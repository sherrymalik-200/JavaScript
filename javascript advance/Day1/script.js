console.log(this);
function abcd(){
    console.log(this);
};

abcd();

let a = function(){
    console.log(this);
}
a();

let obj = {
    age :29,
    x :function(){
        console.log(this);
    }
}
console.log(obj);