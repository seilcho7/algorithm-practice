// Frequency Pattern Hacker Rank Exercise 6
// Two words are anagrams of one another if their letters can be rearranged to form the other word.
// In this challenge, you will be given a string. You must split it into two contiguous substrings, then determine the minimum number of characters to change to make the two substrings into anagrams of one another.
// For example, given the string 'abccde', you would break it into two parts: 'abc' and 'cde'. Note that all letters have been used, the substrings are contiguous and their lengths are equal. Now you can change 'a' and 'b' in the first substring to 'd' and 'e' to have 'dec' and 'cde' which are anagrams. Two changes were necessary.

function anagram(s) {
    let s1;
    let s2;
    if (s.length % 2 === 0) {
        s1 = s.slice(0,s.length/2);
        console.log(s1);
        s2 = s.slice(s.length/2, s.length);
        console.log(s2);
    } else if (s.length % 2 !== 0 && isNaN(s)) {
        console.log("-1")
        return "-1"
    }

    frequencyCounter1 = {};
    frequencyCounter2= {};

    for (let val of s1) {
        if (frequencyCounter1[val]) {
            frequencyCounter1[val] += 1;
        } else {
            frequencyCounter1[val] = 1;
        } 
    }

    for (let val of s2) {
        if (frequencyCounter2[val]) {
            frequencyCounter2[val] += 1;
        } else {
            frequencyCounter2[val] = 1;
        }
    }

    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    for (let key in frequencyCounter1) {
    }
}

anagram("aaabbb");