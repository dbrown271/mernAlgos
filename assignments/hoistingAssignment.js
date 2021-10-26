// 1.
// console.log(hello);
// var hello = 'world';
var hello;
console.log(hello);
hello =  "world";

// 2.
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
var needle;
function test() {
    var needle;
    needle = "magnet";
    console.log(needle);
}
needle = "haystack";
test();

// 3.
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.="support method from-rainbow">log(brendan);
var brendan;
brendan = "super cool";
function print() {
    brendan = "only okay";
    console.log(brendan);
}
console.log(brendan);

// 4.
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

var food;
function eat() {
    var food;
    food = 'gone';
    console.log(food);
    food = 'half chicken';
    console.log(food)
}

food = 'chicken';
console.log(food)
eat()

// 5.
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

var mean
function mean() {
    var food;
    food = "fish";
    console.log(food);
    food = "chicken";
    console.log(food)
}

mean()

// 6.
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log
var genre;
function rewind() {
    var genre;
    var x;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
}
console.log(genre);
genre = "disco"
rewind();
console.log(genre)

// 7.
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
function learn() {
    var dojo;
    dojo = "burbank";
    console.log(dojo);
    dojo = "seattle";
    console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn()