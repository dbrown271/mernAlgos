const arr = [1,2,3,4];


Object.freeze(arr)

let [...copyofarr] = arr

console.log(arr)

copyofarr.push(5)



console.log(copyofarr)