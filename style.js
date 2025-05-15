//let heading=document.getElementsByClassName("heading");
//console.dir(heading);

//let para=document.getElementsByTagName("p");
//console.dir(para);

//let elem=document.querySelectorAll("p");
//console.dir(elem);

//let elem=document.querySelector(".heading");
//console.dir(elem);

//console.dir(elem.tagName);

//let get=document.querySelector("body").children;
//console.dir(get);

//let div=document.querySelector("div");
//console.dir(div);

//let head=document.querySelector("h4");
//console.dir(head.innerText+" from Apna College Students.")

/*let divs=document.querySelectorAll(".box");
//console.dir(div[0].innerText="unique value1")
let idx=1;
for(let div of divs){
    div.innerText=`unique value ${idx}`;
    idx++;
}*/

//let res=document.getElementById("main");
//console.log(res.lastChild.nodeName);

/*const prag=document.createElement("para3");
const node=document.createTextNode("this is 3rd paragraph.");
prag.appendChild(node);
let divs=document.getElementById("div1");
divs.appendChild(prag);*/

/*let divs = document.querySelector("div");
console.log(divs);
let id = divs.getAttribute("id");
console.log(id);
let head = document.querySelector("h1");
console.log(head);
let res = head.getAttribute("class");
console.log(res);*/

/*let divs=document.querySelector("div");
console.log(divs);
console.log(divs.setAttribute("box","newbox"));
let klass=document.querySelector("h1");
console.log(klass);
console.log(klass.setAttribute("myclass","newclass"));*/

/*let divs=document.querySelector("div");
divs.style.backgroundColor="red";
divs.style.fontSize="25px";
divs.style.color="white";
divs.innerText="hello js"
divs.style.visibility="hidden";*/

/*let elm=document.createElement("div");
elm.innerText="this is div 2";
let body=document.querySelector("body");
body.prepend(elm);
let el=document.createElement("button");
el.innerText="click me";
let p=document.querySelector("p");
p.before(el);
p.after(el);

let para = document.querySelector("p");
para.remove();*/

/*const box1=document.getElementById("box");
const box2=document.getElementById("box1");
const deleted=box1.removeChild(box2);
console.log(deleted);*/

//let para = document.querySelector("p");
//console.log(para.getAttribute("class"));
//console.log(para.setAttribute("class","newpara"));
//but para class styling changes to newpara class styling but we want both hence we will use classlist
//console.log(para.classList);
//para.classList.add("newpara");
//para.classList.remove("newpara");

/*------------------------------------------------------------------------------------------------------

let btn1=document.querySelector("#btn1");
btn1.onclick=()=>{
    console.log("button1 was clicked");
    let a=25
    console.log(a--);
};
let div=document.querySelector("div");
div.onmouseover=(evt)=>{
    console.log("you are inside div");
    console.log(evt)
};

let btn1=document.querySelector("#btn1");
btn1.addEventListener("click",()=>{
    console.log("button 1 = Handler 1");
});
btn1=document.querySelector("#btn1");
btn1.addEventListener("click",()=>{
    console.log("button 2 = Handler 2");
});
btn1=document.querySelector("#btn1");
const handler3=()=>{
    console.log("button 3 = Handler 3");
};

btn1.removeEventListener("click",handler3);*/

let modebtn=document.querySelector("#mode");
let body=document.querySelector("body");
let currmode="light";
modebtn.addEventListener("click",()=>{
    if(currmode==="light"){
        currmode="dark";
        //document.querySelector("body").style.backgroundColor="black";
        body.classList.add("dark");
        body.classList.remove("light");}
    else{
        currmode="light";
        //document.querySelector("body").style.backgroundColor="white";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currmode);
});