const person = { 
        firstName: 'Bob', 
        lastName: 'Marley', 
        email: 'bob@marley.com', 
        password: 'sekureP@ssw0rd9', 
        username: 'barley', 
        createdAt: 1543945177623
    };
    const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

console.log(person.firstName)

// The Old Way (es5)
// let fname = person.firstName
// let lname = person.lastName
// let email = person.email

//The New Way
let {firstName:fname, lastName:lname, email} = person //destructuruing properties firstName, lastName, email from the object person
console.log(fname, lname, email)



let [, dog, , cat, bird] = animals
let [,,,feline,] = animals

console.log(feline)
console.log(dog, cat, bird)