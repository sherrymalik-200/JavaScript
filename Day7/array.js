let arr = [2,3,4,5,6];
console.log(arr);
arr.push(10);
console.log(arr);
arr.pop(10);
console.log(arr);
arr.shift(0)
console.log(arr);
arr.unshift(2);
console.log(arr)

let alp = ['a','b','c', 'd','e','f'];
console.log(alp);
alp.splice(1,2);
console.log(alp);
let b = alp.slice(0,2);
console.log(alp);
console.log(b);

// differnce b/w slice and splice
// slice mein  original array ki copy bnate hain bina orignal ko change keye.. aur ismein startIndex aur endIndex argument dete hain. Endindex ki value exclue hoti hai.
// splice mein item delete kar sagte hain, add kar sagte hain, replace kar sagte han orignal array mein.aur ismein argument startindex aur delete item pass karte hain

// aray sort karna

let orig = [11,65,3,78,1];
console.log(orig);
orig.sort(function(a,b ){
    return b - a;
})
console.log(orig);


//map sirf tab use karna hai jab aik new array banana ho pechle array ke data ki base par..
//map ka matlb jaise map karna matlb aik cheez ko dosri cheez ke sath map karna  => 
//filter main ham array ki copy bnate hain but new array mein hum koi na koi filter laga kar item send karte hain

let narr = orig.filter(function(val){
    if(val>10) return true;
});
console.log(narr);

// Destructring 

let arrr = [1,2,3,4,5,6,7];
let [a, c, , ,f] = arrr;
console.log(arrr);
console.log(a);
console.log(f);


let h = [5,10,100,4,1,8,101]
// // console.log(h)
// h.sort();
// // console.log(h);
// h.reverse();
// console.log(h);

