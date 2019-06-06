// Write a function which accepts an array of integers and n as a number. The function should calculate the maximum sum of
// n of consecutive elements in the array

// ([1,2,5,2,8,1,5], 2) = 10

// ([1,2,5,2,8,1,5,], 4) = 17

// ([4,2,1,6,2], 4) = 13

// ([], 4) = null

const arr = [1,2,5,2,8,1,5];
const n = 4;

function maxSum(arr, n) {
    let sum = 0;
    let maxSum = 0;
    for (let j=0; j < arr.length; j++) {
        for (let i=j; i < n + j; i++) {
            sum += arr[i];
        }
        if (maxSum < sum) {
            maxSum = sum;
        }
        sum = 0;
    }
    if (maxSum === 0) {
        return null;
    }
    return maxSum;
}

console.log(maxSum(arr, n));