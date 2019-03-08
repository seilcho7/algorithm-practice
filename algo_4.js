// Given two integer arrays, a and b, bothof length >= 1, create a function that returns true if the sum of the squares of each element in a is greater than the sum of the cubes of each element in b.

const a = [5, 5, 10]; // square
const b = [2, 4, 1]; // cube

function squareVsCube(a, b) {
    let aSum = 0;
    let bSum = 0;
    a.forEach(function (num) {
        aSum  += Math.pow(num, 2);
    });

    b.forEach(function (num) {
        bSum += Math.pow(num, 3);
    });
    console.log(aSum);
    console.log(bSum);
    if (aSum > bSum) {
        return true;
    }
    else {
        return false;
    }
}

squareVsCube(a, b);


// Create a function that will return a string that combines all of the letters of three inputted strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example.
// ex) Input: "aa", "bb", "cc", => Output: "abcabc"
// all inputs are same length

const inputA = "aa";
const inputB = "bb";
const inputC = "cc";

function combine(a, b, c) {
    let allInputs = "";
    for (let i = 0; i < a.length; i++) {
        allInputs += a[i] + b[i] + c[i];
    }
    return allInputs;
}

combine(inputA, inputB, inputC);