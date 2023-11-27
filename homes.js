function printHi()
    {
        document.write("Hello from homes.js");
    }

// Path: homes.js

function maths(){
    var a = 10;
    var b = 20;
    var c = a + b;
    document.write("The sum of a and b is: " + c);
}

function getName(){
    let firstName, lastName, fullName;

    firstName = prompt("Enter your first name: ");
    lastName = prompt("Enter your last name: ");

    fullName = firstName + " " + lastName;
    
    document.write("Hello " + fullName);
}

function buildingAlert(){
    alert("This website is under construction.");
}

