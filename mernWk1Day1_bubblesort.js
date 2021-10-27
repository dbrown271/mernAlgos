// Bubble Sort

// For each element moving through the list, compare elements
// Then Swap


function bubblesort(arr) {
    for(var j = 0; j < arr.length; j++){
        for (i = 0; i < arr.length; i++) {
            // console.log("Current value is -> ",arr[i])
            // console.log("Value at the next index is ->", arr[i + 1])
            if (arr[i] > arr[i + 1]) {
                var temp = arr[i] // temp = 6
                arr[i] = arr[i + 1]
                arr[i + 1] = temp // [4,6,5,2,9,3,8]
            }
            //console.log("after the swap", arr)
        }
    }
    console.log(arr)
}

bubblesort([6,4,5,2,9,3,8]) //output: [2,3,4,5,6,8,9]