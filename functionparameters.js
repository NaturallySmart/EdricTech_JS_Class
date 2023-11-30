// function greet(name){

//     document.getElementById("demo").innerHTML="hello" + name + "Mark" ; 
// }

// let name = prompt("Enter You Name")

// greet(name);


// TO ADD TWO NUMBERS

// function add(a, b){
// console.log(a + b);
// }

// // CALLING FUNCTIONS

// add(3,4);
// add(2,9);


// TO SUBRACT TWO NUMBERS

// function add(a, b){
//     console.log(a - b);
//     }
    
//     // CALLING FUNCTIONS
    
//     add(3,4);
//     add(2,9);



// SUM OF TWO NUMBERS

function add(a, b){
    return a + b;
    }

    let number1 = parseFloat(prompt("Enter first number"));
    let number2 = parseFloat(prompt("Enter second number"));

    // CALLING THE FUNCTION

    let result = add (number1,number2);

    // DISPLAY THE RESULT

    document.getElementById("demo").innerHTML=number1+number2;