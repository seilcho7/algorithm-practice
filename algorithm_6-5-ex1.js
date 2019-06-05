// Given two arrays write a function to find out if two arrays have the same frequency of digits.
// [1,2,3,4], [1,2,3,4] = true
// [1,2,3,4], [1,4,5,6] = false
// [1,2,3,4], [1,4,4,2] = false

const array1 = [5,4,3,2,1,1];
const array2= [1,2,3,4,5,1,2];

function frequencyCheck(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let val of arr1) {
        if (frequencyCounter1[val]) {
            frequencyCounter1[val] += 1;
        } else {
            frequencyCounter1[val] = 1;
        }
    }
    for (let val of arr2) {
        if (frequencyCounter2[val]) {
            frequencyCounter2[val] += 1;
        } else {
            frequencyCounter2[val] = 1;
        }
    }
    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
    }
    return true;

}

console.log(frequencyCheck(array1, array2));