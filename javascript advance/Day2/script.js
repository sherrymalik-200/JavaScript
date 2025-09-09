function CreatePencil(name, price, color, company){
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;
    this.write = function(){
        let h2 =document.createElement("h2");
        h2.textContent = "Hello, How are you";
        h2.style.color = color;
        document.body.append(h2);
    };
};
let obj1 = new CreatePencil("paki pencil", 25, "blue", "piano");
let obj2 = new CreatePencil("kachi pencil", 5, "red", "waqas");
