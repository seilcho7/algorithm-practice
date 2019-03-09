//// Frequency Pattern Exercise 1
//// Given two arrays write a function to find out if two arrays have the same frequency of digits.

// function compare(one, two) {
//     let result = [];
//     let counter = 0;
//     if (one.length === two.length) {
//         one.forEach(function (num) {
//             while (counter < two.length) {
//                 if (num === two[counter]) {
//                     result.push(two.slice(counter));
//                     counter += 1;
//                     break;
//                 } else {
//                     counter += 1;
//                 }
//             }
//             counter = 0;
//         });
//     } else {
//         return false;
//     }
//     if (result.length === one.length) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(compare([1, 2, 3, 4], [1, 2, 3, 4]));
// console.log(compare([1, 2, 3, 4], [1, 4, 5, 6]));
// console.log(compare([1, 2, 3, 4], [1, 4, 4, 2]));
// console.log(compare([1, 2, 3, 4], [1, 4, 3, 2]));
// console.log(compare([1, 2, 3, 4, 5], [1, 2, 3, 4]));


// ===========================================
// Refactored Code O(N) Linear Time Complexity
// ===========================================
// Given two arrays write a function to find out if two arrays have the 
// same frequency of digits
// Must be solved with an O(N) Time Complexity or Better

function same(arr1, arr2) {

    // We check to see if the length of the arrays are equal to one another
    if (arr1.length !== arr2.length) {
        // If they are not return false
        return false;
    }

    // Create an empty object to hold the values in the first array
    let frequencyCounter1 = {};
    // Create a second empty object to hold the values in the second array
    let frequencyCounter2 = {};

    // We loop through the values in the first array
    for (let val of arr1) {
        // If we can find it the value inside our object we will increment it by 1 otherwise set it equal to 0, then increment by 1
        // frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
        // console.log(val);
        if (frequencyCounter1[val]) {
            frequencyCounter1[val] += 1;
        } else {
            frequencyCounter1[val] = 1;
        }  
    }
    // console.log(frequencyCounter1);
    // We loop through the values in the second array
    for (let val of arr2) {
        // If we can find it the value inside our object we will increment it by 1 otherwise set it equal to 0, then increment by 1
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    // Finally we loop through the keys inside our first object
    for (let key in frequencyCounter1) {
        // If the key cannot be found in our second object we will return false
        if (!(key in frequencyCounter2)) {
            return false;
        }
        // If the keys value isn't equal to first object we will return false
        if (frequencyCounter2[key] !== frequencyCounter1[key]) {
            return false;
        }
    }

    // If everything went ok return true
    return true;

}

console.log(same([2,2,2,1],[2,2,2,4]));