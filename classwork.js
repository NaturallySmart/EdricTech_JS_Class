const colors = ["green","red","yellow",];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");


btn.addEventListener('click', function(){

const randonNumber= getRandonNumber()
// console.log(randonNumber)

// to change  backgroundColor
document.body.style.backgroundColor =colors[randonNumber]

// to change text color
color.textContent = colors[randonNumber]

})


function getRandonNumber(){
return Math.floor(Math.random() * colors.length)

}

