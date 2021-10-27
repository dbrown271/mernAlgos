const animals = ['horse', 'french bulldog', 'fish', 'cat', 'bird'];

let [, frenchie, , ...restofpets] = animals

console.log(frenchie)
console.log(restofpets)

copyOfanimals = animals //do not make a copy of an array this way, use the rest operator (...) instead
let [...therealcopy] = animals
console.log(animals)
console.log(copyOfanimals)
console.log(therealcopy)

therealcopy[0] = "Epona"

console.log("********* update the copy")
console.log(animals)
console.log(copyOfanimals)
console.log(therealcopy)


const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};

let attemptedpersonCopy = person
let {...theRealPersonCopy} = person


// attemptedpersonCopy.firstName = "Damian" // DO NOT MAKE A "COPY of AN OBJECT LIKE THIS, THIS WILL NOT MAKE A COPY!!!"
theRealPersonCopy.firstName = "Damian"
console.log(person)
console.log(theRealPersonCopy)

