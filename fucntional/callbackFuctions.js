// a callback fucntion is just a function that is given as an inout to another function

// setTimeout(function(){
//     console.log("wazzaaaa")
// }, 5000)

// setTimeout(()=>console.log("wazzaaaa"), 5000)

function doThis() {
    console.log("wazzzaaa")
}
setTimeout(doThis, 5000);