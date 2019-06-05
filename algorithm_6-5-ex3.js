// Given two positive integers write a function to find out if two numbers have the same frequency of digits

// 123, 123 = true
// 123, 221 = false
// 123, 231 = true

const numb1 = 123;
const numb2 = 231;

function frequencyCount(n1, n2) {
    const str1 = n1.toString();
    const str2 = n2.toString();
    const frequencyCount1 = {};
    const frequencyCount2 = {};

    if (str1.length !== str2.length) {
        return false;
    }

    for (let val of str1) {
        if (frequencyCount1[val]) {
            frequencyCount1[val] += 1;
        } else {
            frequencyCount1[val] = 1;
        }
    }

    for (let val of str2) {
        if (frequencyCount2[val]) {
            frequencyCount2[val] += 1;
        } else {
            frequencyCount2[val] = 1;
        }
    }

    for (let key in frequencyCount1) {
        if (!(key in frequencyCount2)) {
            return false;
        }
        if (frequencyCount1[key] !== frequencyCount2[key]) {
            return false;
        }
    }

    return true;
}

console.log(frequencyCount(numb1, numb2));