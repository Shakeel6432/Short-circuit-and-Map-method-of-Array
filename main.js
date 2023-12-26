// Short Circuit
// First Example
// let fullName = 'Muhammad Shakeel';
// let userName = 'Shakeel6432';
// let userDetail = fullName || userName;
// let login = userDetail = false ? `Welcome ${fullName}` : "Please log in."
// console.log(login);
// Second Example
// let trueValue = 4;
// let func = () => {
//     console.log('Hello Dear Shakeel ');
// }
// trueValue == 4 && func();
// Map of Array method
// First Example
// let num = [1, 2, 3, 4, 5, 6];
// // map method get arguments
// let returnNum = num.map((value, index, refernce) => {
//     return refernce
// })
// console.log(returnNum);
// Second Example
let names = ["Muhammad Shakeel", "Farhan Mustafa", "Muhammad Saqib"];
let formattedNames = names.map((name) => ` Hello, ${name}!`);
console.log(formattedNames);
export {};
