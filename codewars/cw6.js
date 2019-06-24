// Reverse a Number

/*
Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)
Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.
Examples
123 ->  321
-456 -> -654
1000 ->    1
*/
const n = -123;

function reverseNumber(n) {
    const stringNumb = n.toString();
    console.log(stringNumb);

    let newNumb = "";

    if (stringNumb[0] === "-") {
        console.log("negative");
        newNumb = "-";
        for (let i = stringNumb.length - 1; i > 0; i--) {
            console.log(stringNumb[i]);
            newNumb += stringNumb[i];
        }
    } else {
        for (let i = stringNumb.length - 1; i >= 0; i--) {
        console.log(stringNumb[i]);
        newNumb += stringNumb[i];
        }
    }
    return parseInt(newNumb);
}

console.log(reverseNumber(n));