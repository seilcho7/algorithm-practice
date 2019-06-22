// Find the odd int

// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

const A = [1,1,2,2,2,3,3,4,4];

function findOdd(A) {
    const freq = {};
    
    for (let val of A) {
        if (freq[val]) {
        freq[val] += 1;
        } else {
        freq[val] = 1;
        }
    }
    
    for (let key in freq) {
        if (freq[key] % 2 !== 0) {
            const n = parseInt(key);
            return n;
        }
    }
}