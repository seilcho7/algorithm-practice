// Vowel Count

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, and u as vowels for this Kata.
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowelsCount = 0;
    let freq = {};
    for (let val of str) {
        if (freq[val]) {
        freq[val] += 1;
        } else {
        freq[val] = 1;
        }
    }
    console.log(freq);
    
    for (let key in freq) {
        console.log(key);
        if (key === 'a' || key === 'e' || key === 'o' || key === 'i' || key === 'u') {
            vowelsCount += freq[key];
        }
    }
    return vowelsCount;
}