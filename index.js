//Welcome to Lab 2. This line is a comment. The computer ignores comments,
//they serve as a note to yourself, your professor, your fellow students,
//or your coworkers. Your "future self" will appreciate them too!

//To start off, JavaScript programs start running from the first line of the
//file, and work their way down to the bottom one line at a time...

//We learned about the log function on the console yesterday.

//So... lets "call" the log function, and pass in a message to print as the parameter.
console.log("This is the FIRST line of code that will run!");

//If you remember in math class the idea of a function, like "f(x) = 2x+3"
//a function in programming is similar. It has a name, like "f" or "console.log",
//and it has parameters as input.

//In JavaScript we can DEFINE a function like this:
function functionName( parameterOne, parameterTwo ){
    //Here is code INSIDE the function
    return "Some value"
}

//Or like the example from math class, "f(x) = 2x+3" would look like this:
function f( x ){
    return 2 * x + 3; //We say we "return" the result from the function.
}

//When when the computer processed the last few lines it did not RUN the function.
//It only DEFINED a function named "f" for us to use later

//So...
console.log("This is the SECOND line of code that will run!");

//Lets define a new function named "g", it does the same as f but with more steps.
function g( x ){
    let twoX = x * 2;
    console.log(`We're running line 37 of the code. x = ${x} and two times x = ${twoX}`);
    return twoX + 3; //We say we "return" the result from the function.
}

//Remember, we only defined the function g, we have not ran it yet.
console.log("This is the THIRD line of code that will run");

//Lets run it!
console.log("Now we are about to 'call' the function named 'g' with the parameter 8");
let theResult = g(8); //Call the g function
console.log("The result we got from calling the function g(8) is " + theResult);

//Lets run it again!
console.log("Now we are about to 'call' the function named 'g' with the parameter 23");
let theSecondResult = g(23); //Call the g function
console.log("The result we got from calling the function g(23) is " + theSecondResult);

console.log("Now our program is done!")