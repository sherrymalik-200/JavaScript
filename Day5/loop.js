//Loop → A loop is used to repeat a block of code until a certain condition is met.

//Function → A function is a reusable block of code that performs a specific task when called.

// for loop.  when we know how many times loop run then used for loop.   for fixed number of times

// while loop.  when loop runns and break on any condition then while loop.  

// for  = fixed times
// while = until condition

// for(Star; end; change){}
// 1-20  print number 1 to 20
for(let i = 1; i<11; i++){
    console.log(i)
}

// start 
// while(conditional end){
//     code 
//     change
// }

let i = 5;
while(i<=15){
    console.log(i);
    i++;
}

// do while loop kam sey kaam aik dafa code zaroor run hota hai chae condition true ho ya falses

// start  
// do{
//     code 
//     change 

// }
// while(end)

let j = 50;
do{
    console.log(j);
    j++;
}
while(j<30);


//break mea torna  and continue mean skip.  if conditon below on code at break. and above in continue.

// print number from 10 to 1 using while loop.
let z = 10;
while(z>0){
    console.log(z);
    z--;
}

for(k =2; k<=20; k++){
    if(k%2 ===0)
    console.log(k)
}



for(m =1; m<11; m++){
    console.log(m*5);
}
let total = 0
for(s=1; s<=100; s++){
    total += s
    
}
console.log(total)

for(d =1; d <=50; d++){
    if(i%3===0){
        console.log(d);
    }
}