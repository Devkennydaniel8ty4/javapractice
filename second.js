// let paragraph =document.getElementById("para");
// let button = document.getElementById ("btn");
// button.addEventListener("click", ()=>{
//     paragraph.innerText="This is the second paragraph";
// })

// const btns =document.getElementById("btn2")
// const arrColor = [ "red", " blue", " yellow", " green", "blueviolet"]

// function  change (){
//     return document.body.style.background =arrColor[Math.floor(5*Math.random())];
// }
// btns.addEventListener("click", change);
// classlist
// let dell = document.getElementById('btn')
// let bone= document.getElementsByTagName('p')
// let para = document.querySelector('.new')
// document.querySelectorAll('p')
// let cally =document.getElementsByClassName('btn2')
// className
// console.log(document.querySelector('.new'))
// console.log(document.getElementsByTagName('p'))
// console.log(document.getElementById('btn'))
// console.log(document.getElementsByClassName('btn2'))
let para =document.querySelector('.new')
// para.classList.add('newcolor')
let removeClass = document.querySelector('.change2')

let newbtn = document.querySelector('.change')
newbtn.addEventListener("click", function(){
    para.classList.add('newcolor')
    // para.classList.remove('newcolor')

})
// function functionName(){}
removeClass.addEventListener("click", function(){
    para.classList.remove('newcolor')
})
