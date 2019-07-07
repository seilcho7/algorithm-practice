// Hackerrank Arrays: Left Rotation

const a = [1,2,3,4,5];
const b = 4;

function rotLeft(a, d) {
    let numb = "1,2,3,4,5".split(',').map(Number);
    console.log(numb);
    for (let i = 0; i < d; i++) {
        a.push(...a.splice(0,1));
        // console.log(a);
    }
    console.log(a);

}

rotLeft(a, b);