// Reverse list in array without using .reverse()

const arr = [1,2,3,4,5,6,7];

function reverseArr(arr) {
    let newArr = [];
    for (i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(reverseArr(arr));