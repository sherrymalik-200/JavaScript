//localStorage, sessionStorage, cookies.

//localStorage:  Permanent data store in the browser, even browser closed or system restart.
localStorage.setItem("name","sheraz");
console.log(localStorage);
let lsname =localStorage.getItem("name");
console.log(lsname);
localStorage.setItem("name","azka");

let rname = localStorage.removeItem("uname");
console.log(rname);
console.log(localStorage.getItem("name"));


//sessionStorage: Temporary Data store in the browser, when tab or browser closed data remove.
sessionStorage.setItem("sname", "waqas");
let gsname = sessionStorage.getItem("sname");
console.log(gsname);
sessionStorage.clear();
console.log(gsname);
console.log(gsname);
console.log(gsname);
console.log(gsname);


//cookies.  store small piece of data and send to the server with every request. 

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.body.classList.add("dark");
} else {
  document.body.classList.remove("dark");
}



// true if system dark mode, false otherwise
