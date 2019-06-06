// Given an array of non sorted numbers, write a function that returns an array 
// that has all duplicate elements removed and is sorted from least to greatest value.

// Examples

// uniqueSort([1, 2, 4, 3]) ➞ [1, 2, 3, 4]

// uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]) ➞ [1, 2, 3, 4]

// uniqueSort([6, 7, 3, 2, 1]) ➞ [1, 2, 3, 6, 7]

const arr = [1,4,4,4,4,3,2,1,2];

function sort(arr) {
    let newArr = [];
    const sortedArr = arr.sort(function(a,b) {return a-b});
    let j=0;
    for (let i=j+1; i <= sortedArr.length; i++) {
        if (sortedArr[j] !== sortedArr[i]) {
            newArr.push(sortedArr[j]);
        }
        j++;
    }
    return newArr;
}

console.log(sort(arr));