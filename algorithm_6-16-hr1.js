const n = 8;
const s = 'UDDDUDUU';

function countingValleys(n, s) {
    let level = 0;
    let valley = 0;
    for (let i=0; i < n; i++) {
        if (s[i] === 'U') {
            level += 1;
        } else {
            if (s[i] === 'D' && level === 0) {
                valley += 1;
            }
            level -= 1;
        }
    }
    return valley;

}

console.log(countingValleys(n, s));