// 2D Array

const arr = [
    [1,1,1,0,0,0],
    [0,1,0,0,0,0],
    [1,1,1,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0]
];

const hourglass = [];

function sumHourglass(arr) {
    for (let col = 0; col <= 3; col++ ) {
        for (let row = 0; row <= 3; row++) {
            let sum = 0;
            sum += arr[col][row];
            sum += arr[col][row+1];
            sum += arr[col][row+2];
            sum += arr[col+1][row+1];
            sum += arr[col+2][row];
            sum += arr[col+2][row+1];
            sum += arr[col+2][row+2];
            hourglass.push(sum);
        }
    }
    return Math.max(...hourglass);
}

sumHourglass(arr);

