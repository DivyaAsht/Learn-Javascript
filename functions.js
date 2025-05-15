/*function countvow(str){
    let count=0;
    for(const char of str){
        if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
            count++;
        }
    }
    console.log(count);
}
countvow("apnacollege");
------------------------------------------------------------------------------------
const countvow = (str) => {
    let count=0;
    for(const char of str){
        if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
            count++;
        }
    }
    console.log(count);
}
countvow("helloworld");
-------------------------------------------------------------------------------------
let arr=[1,2,3,4,5];
arr.forEach(function printval(val){
    console.log(val);
});
-------------------------------------------------------------------------------------
let arr1=[1,2,3,4,5];
arr1.forEach((val)=>{
    console.log(val);
});
-------------------------------------------------------------------------------------
let arr=[1,2,3,4,5];
let calsq=(num)=>{
    console.log(num*num);
};
arr.forEach(calsq);
-------------------------------------------------------------------------------------
let arr=[90,92,55,85,95,88,98];
let marks=arr.filter((val)=>{
    return val>90;
});
console.log(marks);
-------------------------------------------------------------------------------------
let n=5;
let ar=[];
for(let i=0;i<n;i++){
    let num=prompt("enter element of an array :");
    ar[i]=num;
}
console.log(ar);
-------------------------------------------------------------------------------------*/
let num=prompt("enter a number :");
let arr1=[];
for(let i=1;i<=num;i++){
    arr1[i-1]=i;
}
const op1=arr1.reduce((res,curr)=>{
    return res+curr;
});
const op2=arr1.reduce((res,curr)=>{
    return res*curr;
});
console.log(op1);
console.log(op2);