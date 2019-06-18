// Frequency Pattern Exercise 3 
// Given two positive integers write a function to find out if two numbers have the same frequency of digits.

// Convert inters to String.
function same(int1, int2) {
    // Convert inters to String.
    stringInt1 = int1.toString();
    stringInt2 = int2.toString();

    // Check length of each String and return false if not equal.
    if (stringInt1.length !== stringInt2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    // Add each number in String to frequencyCounter.
    // If the number is already in the object, increment by 1 and if not, set it to 1.
    for (let num of stringInt1) {
       if (frequencyCounter1[num]) {
           frequencyCounter1[num] += 1;
       } else {
           frequencyCounter1[num] = 1
       }
    }

    for (let num of stringInt2) {
        if (frequencyCounter2[num]) {
            frequencyCounter2[num] += 1
        } else {
            frequencyCounter2[num] = 1;
        }
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    // Go throught each number in frequncyCounter1 and check if frequencyCounter2 have same number. If not, return false.
    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false;
        }
        // If value of each key in frequencyCounter1 and frequencyCounter2 is not equal, return false.
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
    }
    return true;

}

console.log(same(253, 532));