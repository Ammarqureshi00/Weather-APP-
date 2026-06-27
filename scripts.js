console.log("Hellow World!");
const add = (a, b)=> a + b; //  arrow function 
function greet(name)
{
     return 'Hello ' + name + '!';
}
const arra1 = [1,2,3];
const array2 = [...arra1, 4, 5];
console.log(5 , 10);
console.log(add(5, 10));
console.log(greet("Alice"));
console.log(array2);


let numbers = [5, 5, 10, 10, 15]; //  removed the dublicate value in the  arrays
let uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);