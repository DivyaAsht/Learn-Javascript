let str=prompt("enter full name :");
let res=str.length;
let op=`@${str}${res}`;
console.log(op);

let arr=[250,645,300,900,50];
for(let i=0;i<arr.length;i++){
    let offer=arr[i]/10;
    arr[i]=arr[i]-offer;
}
console.log(arr);