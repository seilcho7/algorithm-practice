// Exes and Ohs

/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/
const str = "";

function XO(str) {
    //code here
    let lowStr = str.toLowerCase();
    let freq = {};

    if (str === "") {
        return true;
    }

    for (let val of lowStr) {
        if (freq[val]) {
            freq[val] += 1;
        } else {
            freq[val] = 1;
        }
    }

    if (!("x" in freq || "o" in freq)) {
        console.log("false");
        return false;
    }

    for (let key in freq) {
        if (freq["o"] !== freq["x"]) {
            console.log("false");
            return false;
        }
    }
    console.log("true");
    return true;
}

XO(str);