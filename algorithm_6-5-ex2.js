// Given two arrays write a function to determine if each value in our first array contains a corresponding to the second power in the second array
const arr1 = [1,2,3,4];
const arr2 = [1,4,4,2];

function checkPowers(arr1, arr2) {
    const sortedArr1 = arr1.sort(function(a,b){return a-b});
    console.log(sortedArr1);
    const sortedArr2 = arr2.sort(function(a,b){return a-b});
    console.log(sortedArr2);
    if (sortedArr1.length !== sortedArr2.length) {
        return false;
    }
    for (let i = 0; i < sortedArr1.length; i++) {
        if ((sortedArr1[i] * sortedArr1[i]) !== sortedArr2[i]) {
            return false;
        }
    }
    return true;
}

console.log(checkPowers(arr1, arr2));