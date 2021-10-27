// function sayHello(name) {
//     console.log('Hello ' + name)
// };

// const sayHello = function(name) {
//     console.log('Hello ' + name)
// };

const sayHello = (name, lang)=> {
    // console.log('Hello ' + name)
    console.log('Hello ${name}, here are some more ${lang} classes');
};

sayHello("Kwasi", "Javascript")

// var sayHello = function(name) {
//     console.log('Hello ' + name);
//   };
  
  

// longhand notation to return an object
// NOTE: first set of brackets are defining the function body
// and the second set of brackets are to create the object literal
const returnObjLonghand = () => {
        return { 
            firstName: 'John',
            lastName: 'Wick'
        }
    }
    /**
      * The example below wouldn't work because the 
      * brackets are interpreted as opening the body of the 
      * function rather than brackets to create an object literal 
      */
    const returnObj = () => { firstName: 'John', lastName: 'Wick' }
    // surrounding the implicit return with parenthesis solves the problem
    const returnObjFixed = () => ({ firstName: 'John', lastName: 'Wick' });