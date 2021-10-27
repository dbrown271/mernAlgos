function selectionsort(arr) {
    // loop through the array, find the largest value and the index its in, then put it in the correctplace
    // hint: might need a nested loop
    for(let i = 0; i < arr.length; i++) {
        let temp = 0;
        let temp2 = arr[0]
        for(let j = 1; j < arr.length - i; j++){
            if(arr[j] > temp2) {
                temp2 = arr[j];
                temp = j
            }
        }
        let value = arr[temp];
        arr[temp] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = value
    } 
    console.log(arr)
}

selectionsort([6, 4, 5, 2, 9, 3, 8])


