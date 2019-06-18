// Hackerrank Jumping on the Clouds

const c = [0,0,1,0,0,1,0];

function jumpingOnClouds(c) {
    let jumpCount = 0;
    for (let i = 0; i < c.length; i++) {
        if (c[i+2] === 0) {
            jumpCount += 1;
            i++;
        } else if (c[i+1] === 0) {
            jumpCount += 1;
        }
    }
    return jumpCount;
}

jumpingOnClouds(c);