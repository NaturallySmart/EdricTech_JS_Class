var numberOfdrum = document.querySelectorAll('.drumset').length;

console.log(numberOfdrum)

for (let index = 0; index < numberOfdrum; index++) {
//     const element =numberOfdrum[index];
// console.log(element)

document.querySelectorAll('.drumset')[index].addEventListener("click", function(){
console.log(index)
    var buttons = this.innerHTML;

    switch(buttons){
case "DRUM1":
    var tom1 = new Audio("sound/tom-1.mp3")
tom1.play();
break;

case "DRUM2":
    var tom2 = new Audio("sound/tom-2.mp3")
tom2.play();
break;

default:console.log(buttons)
    }
})
}