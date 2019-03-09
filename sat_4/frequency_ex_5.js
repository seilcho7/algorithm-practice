// Frequency Pattern Exercise 5
// Using a helper function, create a function that accepts two strings as arguments and checks if they are valid anagrams.



// Go through each letters in str.
// If letter is in frequencyCounter, increment value by 1 and if not, set it to 1.
function incrementValue(str) {
    let frequencyCounter = {};
    for (let letter of str) {
        if (frequencyCounter[letter]) {
            frequencyCounter[letter] += 1;
        } else {
            frequencyCounter[letter] = 1;
        }
    }
    return frequencyCounter;
}

// If each keys in freq1 is not in freq2, return false.
function checkSame(str1, str2) {
    let obj1 = incrementValue(str1);
    let obj2 = incrementValue(str2);
    for (let key in obj1) {
        console.log(key);
        if (!(key in obj2)) {
            // console.log(key);
            return false;
        }
        // If values of each keys in freq1 and freq2 are different, return false.
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

function same(str1, str2) {
    // If str1 and str2 have different length, return false.
    if (str1.length !== str2.length) {
        return false;
    }

    return checkSame(str1, str2);
}

console.log(same("pie", "eip"));
console.log(same("pie", "pie"));
console.log(same("pie", "pies"));
console.log(same("pie", "pwe"));

// console.log(checkSame("pie", "pwe"));