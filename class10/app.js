/*                                         ERRORS! */

// ReferenceError
// console.log(what);

// TypeError
// const someObj = {
//     a: 10,
//     b: 9
// };

// someObj.push(20);



/*                                         scope */

// let and const are block scoped, var was not (it was function scoped)!
// if (true) {
//     var theTruth = '47';
//     const theMeaningOfLife = '5';
// }

// console.log(theTruth);
// console.log(theMeaningOfLife);


// function scopyFunc(doggy) {

//     function privateFunc() {
//         const privateVar = 'woof!';
//         return doggy + ' says ' + privateVar;
//     }

//     console.log('doggy is only defined inside scopyFunc: ' + doggy);
//     console.log('privateVar is only defined inside privateFunc: ' + privateVar);
//     return privateFunc();
// }

// privateFunc();
// scopyFunc('Fido');



/*                                   The Call Stack */

// function add(x,y) {
//     console.log('now running add');
//     return x + y;
// }

// function multiply(x,y) {
//     console.log('now running multiply');
//     console.log(z);
//     return x * y;
// }

// function report(x,y) {
//     console.log('now running report');
//     const sum = add(x,y);
//     const product = multiply(x,y);
//     return 'The sum is ' + sum + '. The product is ' + product;
// }

// report(2,4);