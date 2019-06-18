// Hackerrank Arrays: Left Rotation

const a = [1,2,3,4,5];
const b = 4;

function rotLeft(a, d) {
    for (let i = 0; i < d; i++) {
        a.push(...a.splice(0,1));
        console.log
    }
    console.log(a);

}

rotLeft(a, b);