// 1. Write a function that multiplies two numbers. Invoke the function.

function multTotal(number1, number2) {
    let mult = number1 * number2;
    console.log(mult);
}

multTotal(9, 3)


// 2. Write a function named assignGrade, that takes one argument, 
// a number score (example: 90).
// Return a grade for the score, either “A,” “B,” “C,” “D,” or “F.”
// Invoke that function for a few different scores and log the result 
// to make sure it works for each case.


function assignGrade(grade) {
    if (grade >= 90) {
        console.log("A");
    } else if (grade >= 80) {
        console.log("B")
    } else if (grade >= 70) {
        console.log("C")
    } else if (grade >= 60) {
        console.log("D")
    } else {
        console.log("F")
    }
}

assignGrade(67)
assignGrade(72)
assignGrade(93)
assignGrade(84)
assignGrade(42)





// 3. Write an array containing items of the same data type.

const flowers = [
    "rose",  //0  #1
    "daisy", //1  #2
    "tulip"  //2  #3
]

//same as,
// const flowers = ["rose", "daisy", "tulip"]



// 4. Write a function to get the first element in an array.
// Invoke the function. (edited) 

function firstElement(array) {
    console.log(array[0]) 
}
const dogBreeds = [
    "hound",   //0   #1
    "golden",  //1   #2
    "husky",   //2   #3
    "terrier"  //3   #4
]
firstElement(dogBreeds)

firstElement([10, 20, 30, 40])
