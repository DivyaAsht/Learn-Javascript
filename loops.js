/*for(let i=0;i<5;i++){
    console.log(i);
}

let str = "helloworld";
let count=0;
for(let i of str){
    console.log(i);
    count++;
}
console.log(count);

let obj={
    name:"Divya",
    age:19,
    cgpa:8.05,
    ispass:true
};
for(let key in obj){
    console.log("key =",key,"value =",obj[key]);
}

for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log("even no. =",i);
    }
}*/

let number=prompt("enter any random game number : ");
let i=5;
while(i!=number){
 number=prompt("keep guessing....");
}

    console.log("congratulations!!! your guess is right");