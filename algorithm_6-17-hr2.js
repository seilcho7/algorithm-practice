// Hackerrank Repeated String

const s = 'aba';
const n = 10;

function repeatedString(s, n) {
    let times = Math.floor(n / s.length);
    let aCount = 0;
    let totalA = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            aCount++;
        }
    }

    totalA = aCount * times;

    for (let i = 0; i < (n - s.length * times); i++) {
        if (s[i] === 'a') {
            totalA += 1;
        }
    }
    console.log(totalA);
    return totalA;
}

repeatedString(s,n);