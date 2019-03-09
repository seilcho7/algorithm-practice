// Frequency Pattern Exercise 4
// Create a function that accepts two strings and checks if they are valid anagrams.


function same(str1, str2) {
    // If str1 and str2 have different length, return false.
    if (str1.length !== str2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    // Go through each letters in str.
    // If letter is in frequencyCounter, increment value by 1 and if not, set it to 1.
    for (let letter of str1) {
        if (frequencyCounter1[letter]) {
            frequencyCounter1[letter] += 1;
        } else {
            frequencyCounter1[letter] = 1;
        }
    }

    for (let letter of str2) {
        if (frequencyCounter2[letter]) {
            frequencyCounter2[letter] += 1;
        } else {
            frequencyCounter2[letter] = 1;
        }
    }

    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    // If each keys in frequencyCounter1 is not in frequencyCounter2, return false.
    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false;
        }
        // If values of each keys in counter1 and counter2 are different, return false.
        if (frequencyCounter1[key] != frequencyCounter2[key]) {
            return false;
        }
    }
    return true;
}

console.log(same("pie", "eip"));
console.log(same("pie", "pie"));
console.log(same("pie", "pies"));
console.log(same("pie", "pwe"));