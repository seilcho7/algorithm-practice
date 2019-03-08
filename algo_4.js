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


// Write a function called sumZero which accepts a sorted array of integers. The function should find the 
// first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined 
// if a pair does not exsist.
// =================================================
// Solve with a runtime of O(N^2) Quadratic Solution
// =================================================
// [-3,-2,-1,0,3,4,4,5] = [-3, 3];

const list = [-3, -2, -1, 0, 3, 4, 4, 5];

function sumZero(list) {
    for (let i = 0; i < list.length; i++) {
        // console.log(pair);
        for (let j = i + 1; j < list.length; j++) {
            if (list[i] + list[j] == 0) {
                return [list[i], list[j]];
            }
        }
    }
}
sumZero(list);


function sumZero(sortedArray) {
    const array = []
    sortedArray.forEach(function(num) {
        if (sortedArray.includes(num * -1)) {
            array.push([num, num* -1]);
        };
    });
    return array[0];
}

console.log(sumZero([-7,-3,-2,-1,0,1,2,3,4,5,6]))



// Create a function which accepts a sorted array and counts the unique values in an array. There can be negative values in the array but the array will always be sorted.

const sortedArray = [-3, -3, -2, -1, -1, 0, 1, 1, 2, 2, 3];

// Quadratic
function uniqueCount(array) {
    let uniqueArray = [];
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (!uniqueArray.includes(array[i])) {
            uniqueArray.push(array[i]);
            counter += 1;
        }
    }
    return [uniqueArray, counter];
}

uniqueCount(sortedArray);

// Linear
function countUnique(array) {
    let uniqueArray = [];
    let prev;
    let counter = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] != prev) {
            uniqueArray.push(array[i]);
            counter += 1;
        }
        prev = array[i];
    }
    return [uniqueArray, counter];
}

countUnique(sortedArray);