/*objects
const stud={
    name:"divya",
    marks:92.2,
    printmarks:function(){
        console.log("marks=",this.marks);
    }
};

stud.printmarks();

const employee={
    caltax(){
        console.log("tax rate is 10%");
    }
};
const karan={
    salary:50000,
    caltax(){
        console.log("tax rate is 20%");
    }
};
karan.__proto__=employee;

class car{
    constructor(brand){
        console.log("creating new object");
        this.brand=brand;
    }
}
let lexus=new car("Lexus");

class person{
    constructor(name){
        this.species="homosapiens";
        this.name=name;
    }
    eat(){
        console.log("eating");
    }
}
class engineer extends person{
    constructor(name){
        super(name);
        //this.branch=branch;
    }
    Work(){
        console.log("working");
    }
}
let eng=new engineer("divya");

let data="secret information";
class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewdata(){
        console.log("viewing website data......",data);
    };
}
class admin extends user{
    constructor(name,email){
        super(name,email)
    }
    editdata(){
        data="new data";
        console.log(data);
    };
}
let admin1=new admin("admin","divya@gmail.com");

let a=10;
let b=20;
console.log(a+b);
try{
    console.log(a+c);
}
catch(err){
    console.log(err);
}
==================================================================================================
console.log("1");
console.log("2");
setTimeout(() => {
    console.log("hello");
}, 4000);
console.log("3");
console.log("4");

function sum(a,b){
    console.log(a+b);
}
function calculate(a,b,calcsum){
    calcsum(a,b);
}
calculate(1,2,sum);

function getdata(dataid,getnextdata){
    setTimeout(()=>{
        console.log("data",dataid);
        if(getnextdata){
            getnextdata();
        }
    },4000);
}
getdata(1,()=>{
    getdata(2,()=>{
        getdata(3,()=>{

        });
    });
});

let promise = new Promise((resolve,reject)=>{
    console.log("i am a promise");
    //resolve("success");
    //reject("failure");
});

function getdata(dataid,getnextdata){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data",dataid);
            resolve("success")
            if(getnextdata){
                getnextdata();
            }
        }, 4000);
    });
}

const getpromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("I am a promise");
        //resolve("success");
        reject("rejected");
    });
};
let promise=getpromise();
promise.then((res)=>{
    console.log("promise fulfilled",res);
});
promise.catch((err)=>{
    console.log("promise failed",err);
});

function asyncfunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data 1");
            resolve("success");
        },5000);
    });
}
function asyncfunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data 2");
            resolve("success");
        },5000);
    });
}
/*console.log("fetching data 1...");
let p1=asyncfunc1();
p1.then((res)=>{
    console.log(res);
    console.log("fetching data 2...")
    let p2=asyncfunc2();
    p2.then((res)=>{
        console.log(res);
    });
});
console.log("fetching data 1...");
asyncfunc1().then((res)=>{
    console.log(res);
    console.log("fetching data 2...")
    asyncfunc2().then((res)=>{
        console.log(res);
    });
});

function getdata(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data",dataid);
            resolve("success")
            }, 4000);
    });
}

/*getdata(1).then((res)=>{
    console.log(res);
    getdata(2).then((res)=>{
        console.log(res);
        getdata(3).then((res)=>{
            console.log(res);
        });
    });
});

getdata(1).then((res)=>{
    console.log(res);
    return getdata(2);
}).then((res)=>{
    console.log(res);
    return getdata(3);
}).then((res)=>{
    console.log(res);
    return getdata(4);
}).then((res)=>{
    console.log(res);
});

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        },2000);
    });
}
async function getweather(){
    await api();//1st call
    await api();//2nd call
    await api();//3rd call
}

function getdata(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data",dataid);
            resolve("success")
            }, 4000);
    });
}
async function getnextdata(){
    await getdata(1);
    await getdata(2);
    await getdata(3);
    await getdata(4);
}

(async function (){    //***IIFE(Immediately Invoked Function Expression)***\\
    await getdata(1);
    await getdata(2);
    await getdata(3);
    await getdata(4);
})();
============================================================================================*/

const para=document.querySelector("#spells");
const btn=document.querySelector("#btn");
const url="https://potterapi-fedeperin.vercel.app/es/characters?search=Weasley";
/*const getspells=async()=>{
    console.log("Getting data....");
    let response = await fetch(url);//fetching promise
    console.log(response);
    let data=await response.json();
    console.log(data);
    para.innerText=data[3].fullName;
};*/
function getspells(){
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        para.innerText=data[3].fullName;
    });
}
addEventListener("click",getspells);