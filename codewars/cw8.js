// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number
const num = 39;

function persistence(num) {
    let numString = num.toString();
    let number = '1';
    let counter = 0;
    if (numString.length > 1) {
        for (let val of numString) {
            number *= val;
        }
        counter++;
    } else {
        return counter;
    }

    numString = number;
    console.log(numString);
    console.log(typeof numString);
    console.log(numString.toString().length);
    while (numString.toString().length > 1) {
        counter++;
        number = '1';
        for (let val of numString.toString()) {
            number *= val;
        }
        numString = number;
    }
    return counter;
}

persistence(num);