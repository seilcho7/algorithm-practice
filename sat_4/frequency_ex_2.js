// Frequency Pattern Exercise 2
// Given two arrays write a function to determine if each value in our first array contains a corrsponding valueto the second power in the second array.

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let freqCounter1 = {};
    let freqCounter2 = {};

    for (let val of arr1) {
        if (freqCounter1[val]) {
            freqCounter1[val] += 1;
        } else {
            freqCounter1[val] = 1;
        }
    }

    for (let val of arr2) {
        if (freqCounter2[val]) {
            freqCounter2[val] += 1;
        } else {
            freqCounter2[val] = 1;
        }
    }

    console.log(freqCounter1);
    console.log(freqCounter2);

    for (let key in freqCounter1) {
        if (!(key**2 in freqCounter2)) {
            return false;
        }
        
        if (freqCounter1[key] !== freqCounter2[key**2]) {
            return false;
        }
    }

    return true;
}

console.log(same([1,2,3,4], [4,1,9,16]));
console.log(same([1,2,3,4], [1,4,5,6]));
console.log(same([1,2,3,4], [1,4,4,2]));
console.log(same([1,2,3,4], [1,16,9,4]));
console.log(same([1,2,3,4,5], [1,2,3,4]));