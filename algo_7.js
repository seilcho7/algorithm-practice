// let input = [2, 3, 5, 6, 7, 10, 20];
// // output = [1, 2, 3, 4, 5, 6, 7 ,8];

// function increment(input) {
//     let output = [];
//     let min = input[0];
//     let max = input[input.length - 1];
//     for (i = min; i <= max; i++) {
//         output.push(i);
//     }
//     console.log(output);
// }

// increment(input);

// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10

// p0, percent, aug(inhabitant coming or leaving each year), p (population to surpass)

// function years(p0, percent, aug, p) {
//     let year = 0;
//     while (p0 < p) {
//         p0 = p0 + (p0 * percent * (1/100)) + aug;
//         year += 1;
//     }
//     console.log(year);
// }

// years(1500, 5, 100, 5000);


// write a function which accepts an array of integers and n as a number. the function should calculate the maximum sum of n of consecutive elements in the array
// ([1,2,5,2,8,1,5], 2) = 10
// ([1,2,5,2,8,1,5], 4) = 17
// ([4,2,1,6,2], 4) = 13
// ([], 4) = null

// function highSum(array, numb) {
//    let result = 0;
//    for (let i = 0; i < array.length; i++) {
//        let sum = 0;

//        for (let n = i; n < i + numb; n++ ) {
//            sum += array[n];
//        }

//        if (sum > result) {
//            result = sum;
//        }

//    }
//    if (result) {
//        return result;
//    }
//    return null;
// }

// console.log(highSum([-1,-2,-5,-2,-8,1,5], 3));


// write a function that accepts an array and a number and checks if the integer resides inside the array and return the index value
// If the number is never found return -1

// function checkNumber(array, numb) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === numb) {
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(checkNumber([1,2,3,4,5], 5));

function binarySearch(array, numb) {
    let mid = Math.floor(array.length / 2);
    // console.log(mid);

    for (let i = 0; i < mid; i++) {
        if (array[i] === numb) {
            return i;
        }
    }

    for (let i = mid + 1; i < array.length; i ++) {
        if (array[i] === numb) {
            return i;
        }
    }
    return -1;
    
}

console.log(binarySearch([1,2,3,4,5,6,7], 7));

function binarySearch(arr, num) {
    let start = 0;
    let end = arr.length - 1;
    

}