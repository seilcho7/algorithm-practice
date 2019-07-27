const arr = [1,1,2,3,3,3,3,5];

function removeDuplicate(arr) {
    let newArr = [];
    let counter = {};
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        if (!counter[temp]) {
            newArr.push(temp);
            counter[temp] = true;    
        }
    }
}

removeDuplicate(arr);