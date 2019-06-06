// Write a function called sumZero which accepts a sorted array of integers. The 
// function should find the first pair where the sum is 0. Return an array that 
// includes both values that sum to zero or undefined if a pair does not exsist.

// [-3,-2,-1,0,3,4,4,5] = [-3, 3]

const arr = [-3,-2,-1,0,3,4,4,5];

function sumZero(arr) {
    let values = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                values = [arr[i], arr[j]];
                return values;
            }
        }
    }
    if (values.length === 0) {
        return undefined;
    }
}

console.log(sumZero(arr));