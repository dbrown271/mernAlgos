// Scope is the visibility, or accessibility of information, such as variables and functions, to a particular section of code. JavaScript is function scoped and traditionally has two types of scope: global and local. New scopes are created by defining functions.

// Global Scope

// Every JavaScript application has a global scope. By definition that makes it omnipresent, which means that any variables or functions defined within are always available to every aspect of your application.

// Local Scope

// Local scope, in contrast, has much narrower program visibility. It is localized to the particular function in which that information is defined.

// Identifying Scope

// Consider the following, can you identify the different scopes in the provided sample?


//  var, const, let --> 3 ways to declare variables

var name = 'Lebron James'
var numChampionships = 4
var teammates = ['AD', 'Rondo', 'Westbrook']
var willLakersWin = false

var sayHi = function() {
    // console.log("hi")
    return "Hi"
}

function customHello(name) {
    // console.log("Hello ", name)
    // console.log("Num Championships is ", numChampionships)
    var secretword = "wazzzaaap"
}

customHello("Lebron")

// console.log(secretword)

var student1 = {
    name: "Chris LaMee",
    numBelts: 2,
    homeTeam: "Seahawks"
}

// console.log(student1.numBelts)

// Scooping --> something (variables and functions)
function countToNum(num) {  //functions create their own scope for varibles declared with var
    for(var i = 0; i < num; i++) {
        console.log(i)
    }
    console.log('var i outside the loop is:', i)
}    

countToNum(10)

//  all of those above ways to declare variables are globally scoped 
// functions create a new scope for "var" declarations
// for loop and condtionals create a new scope for 'let' and 'const' declarations