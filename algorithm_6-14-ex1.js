// John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
// For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

const n = 9;
const ar = [10,20,20,10,10,30,50,10,20];

function sockMerchant(n, ar) {
    let freq = {};
    let pair = 0;
    for (let val of ar) {
        if (freq[val]) {
            freq[val] += 1;
        } else {
            freq[val] = 1;
        }
    }
    for (let key in freq) {
        pair += Math.floor(freq[key] / 2);
    }
}

sockMerchant(n, ar);
