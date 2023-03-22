// Write a switch statement that takes an animal and logs the sound that animal makes to the console. Include at least 3 animals. Invoke the function.

function getanimalsounds() {
    const animal = "cat"

    switch(animal) {
        case "dog":
            console.log("woof");
            break;
        case "cat":
            console.log("meow");
            break;
        case "cow":
            console.log("moo");
            break
    }
}
getanimalsounds()



// 2.   Write a function that takes the name of a fruit and logs the color of that fruit to the console. Use an if-else statement. Include at least 4 fruit options.  Invoke the function.

function chooseafruit() {
    const fruit = "lime";
    
    if (fruit === "banana") {
        console.log("yellow");
    } else if (fruit === "orange"){
        console.log("orange");
    } else if (fruit === "lime"){
        console.log("green");
    } else if (fruit === "blueberries") {
        console.log("purple");
    }
}
chooseafruit()


// 3.   Write a function that adds two numbers together.  Invoke the function.

function sumTotal(number1, number2) {
    let sum = number1 + number2;
    console.log(sum);
}

sumTotal(8,5)