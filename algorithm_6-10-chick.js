const s = 'ACCGGGTTT';

function comp(s) {
    let comp = '';
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === 'A') {
            comp += 'T';
        } else if (s[i] === 'T') {
            comp += 'A';
        } else if (s[i] === 'G') {
            comp += 'C';
        } else {
            comp += 'G';
        }
    }
    return comp;
}

console.log(comp(s));