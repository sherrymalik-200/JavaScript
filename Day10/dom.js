//Dom = Document object model.
// dom manipulation.

// html ko select karna. like get element by id, getelement by class,
//query selector, query all selector.



let h1 = document.querySelector("title");
console.dir(h1);
let p = document.querySelector(".box");
console.dir(p);
let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    alert("Button was clicked");
})

