// JAVASCRIPT TUTORIAL 2021

// **** Section 3 👉 values and variables in javascript *****

// **** Section 6 👉 Control statement in javascript *****

// 1️⃣ If...Else
// The if statement execute a statement if a specified condition is truthy.
// If the condition is falsy, another statement can be executed.

// if remaining = raincoat
// else no raincoat

// var tomr = 'sunny';

// if (tomr='rain'){
//     console.log("Take a raincoat");
// }else{
//     console.log("No need to take a raincoat");
// }

// 🤩 Challenge time 🏁
// Write a program that works out whether if a given year is aleap year or not
// A normal year has 365 days, leap year have 366, with an extra day in February.

// var year = 2020;

// if (year % 4 === 0) {
//     if (year % 100 === 0) {
//         if (year & 400 === 0) {
//             console.log(`The year ${year} is a leap year`);
//         } else {
//             console.log(`The year ${year} is not a leap year`);
//         }
//     } else {
//         console.log(`The year ${year} is a leap year`);
//     }
// } else {
//     console.log(`The year ${year} is not a leap year`);
// }

// What is truthy and falsy values in Javascript?
// We have total 5 falsy values in Javascript
// 👉 0, "", undefined, null, NaN, flase** is false anyway

// if ((score = 0)) {
//   console.log("OMG, we loss the game 😭");
// } else {
//   console.log("Yay, we won the game 😃");
// }

// 2️⃣ Conditional( ternary ) operator

// The conditiona; ( ternary ) operator is the only Javascript operator takes three operands
// Short hand if..else statement

// let age = 17;
// console.log((age>=18) ? "You can vote" : "You can't vote");

// 3️⃣ Switch Statement
// Evaluated an expression, matching the expression's value to a case clause, and executes statements associated with that case.

// 1st without break statement
// Find the area of cicle, triangle and rectangle ?

// let area = "circle";
// const PI = 3.142, l = 5, b = 4, r = 3;

// if (area=="circle"){
//     console.log(`The area of the circle is : ${PI*r**2}`);
// }else if(area == "triangle"){
//     console.log(`The area of the circle is : ${(1*b)/2}`);
// }else if (area == "rectangle"){
//     console.log(`The area of the circle is : ${l*b}`);
// }else{
//     console.log("Please enter valid data");
// }

// let area = "circle";
// const PI = 3.142,
//   l = 5,
//   b = 4,
//   r = 3;

// switch (area) {
//   case "circle":
//     console.log(`The area of the circle is : ${PI * r ** 2}`);
//     break;
//   case "triangle":
//     console.log(`The area of the circle is : ${(1 * b) / 2}`);
//     break;
//   case "rectangle":
//     console.log(`The area of the circle is : ${l * b}`);
//     break;
//   default:
//     console.log("Please enter valid data");
// }

// 🤗 break
// Terminates the current loop, switch, or label statement and transfers
// Program control to statement following the terminated statement

// 4️⃣ While Loop statement
// The while statement creates a loop that executes a specified statement as a long as the test condition evaluates to true.

// var num = 0;

// while (num <= 10) {
//     console.log(num);
//     num++;
// }

// 5️⃣ Do-while Statement

// var num = 0;
// do {
//     console.log(num);
//     num++;
// } while (num <= 10);

// 6️⃣ For Loop

// for (let num = 0; num <= 10; num++) {
//     console.log(num);
// }

// 😀6: Challenge Time 🏁
// JavaScript program to print table for given number 8
// let number = 8;
// for (let num = 0; num <= 10; num++) {
//     console.log(`${number} * ${num} = ${number*num}`);
// }

// ******************************************************
// **** Section 5️⃣ 👉 Functions in Javascript *******
// A Javascript function is a block of code designed to perform a particular task.

// 1️⃣ Function definatiom

// Before we use a function, we need to define it.

//  A function defination ( also called a function declaration or function statement ) consists of the function keyword, followed by:

// The name of the function.
// A list of parameters to the function, enclosed in parentheses and separated by commas.
// The Javascript statements that define the function, enclosed in curly  brackets, {....}.

// function sum() {
//     var a = 10, b = 20;
//     var total = a + b;
//      console.log(total);
// }

// 2️⃣ Calling Function
// Defining a function does not execute it.
// A Javascript function is executed when "Something" invokes it ( calls it).
// function sum() {
//   var a = 10,
//     b = 20;
//   var total = a + b;
//   console.log(total);
// }
// sum();

// 3️⃣ Function Parameter vs Function Arguments
// Functgion parameters are the names listed in the function's defination.
// Function argument are the real values passed to the function.

// sum(20,30);
// function sum(a,b) {
//   let total = a + b;
//   console.log(total)
// }

// 🙋‍♂️ Interview Question 🙋‍♂️

// why Function?
// You can reuse code : Define the code once, and use it many times. You can use the same code many times with different arrguments, to produce different results.

// OR

// A function is a group of reusable code which can be called anywhere in your program. This eliminates the need of writthing the same code agin and agoin.
// DRY => Do Not Repeat Yourself

// 4️⃣ Function Expressions
// Function expression simply means create a function and put it into the variable

// function sum(a, b) {
//     var total = a + b;
//     console.log(total);
// }

// var funExp = sum (5, 10);
// funExp;

//5️⃣ Return keyword
// When Javascript reaches a return statement, the function will stop executing.
// Function often compute a return value.
// The return value is "returned" back to the "caller".

// function sum(a,b) {
//   return total = a+b;
// }
// var funExp = sum (5, 10);
// console.log(funExp);

// 6️⃣ Anonymous Function
// A function expression is similar to and has the same syntac as a function declaration one can define "named"
// Function expressions ( where the name of the expression might be used in the call stack for example) or "Anonymous" functuion expressions.

// var funExp = function(a,b){
//   return total = a+b;
// }

// var sum = funExp(5,15);
// console.log(`The sum of two number is ${sum}`);

// ****************************************************************

// 👻 Now It's time for Modern Javascript 😍😍

// 🙏🙏 Features of ECMAScript 2015 also known as ES6 🙏🙏

//  1️⃣ LET VS CONST VS VAR

// var => Function scope
// let and const => Block Scope

// 2️⃣ Templates literals ( Templates Strings)

// Javascript program to print table for given number (8)
// let number = 8;
// for (let num = 0; num <= 10; num++) {
//     console.log(`${number} * ${num} = ${number*num}`);
// }

// 3️⃣ Default parameters
// Default function parameters aloow named parameters to be initialized with default values if no value or undefined is passed.

// function mult(a, b=5) {
//     return a*b;
// }
//  console.log(mult(5));

// 4️⃣ Destructuring in ES6
// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, that makes it possible to unpack values from arrays, or properties from abjects, into distinct variables.

// ➡ Array Destructuring 🏁

// const myBioData = ["Lokesh", "Debnath", 21];

// let myFName = myBioData[0];
// let myLName = myBioData[1];
// let myAge = myBioData[2];


// let [myFName, myLName, myAge] = myBioData;
// console.log(myAge);

// We can add value too

// let [myFName, myLName, myAge, myDgree = "HS"] = myBioData;
// console.log(myDgree);

// ➡ Object destructuring 🏁

// const myBioData = {
//     myFName : "Lokesh",
//     myLName : "Debnath",
//     age : 21
// }

// let age = myBioData.age;
// let myFName = myBioData.myFName;
// console.log(myFName);

// let {myFName, myLName, myAge, myDgree = "HS"} = myBioData;
// console.log(myFName);

// 5️⃣ Object Properties

// ➡ We can now use Dynamic Properties

// let myName = "Lokesh";
// const myBio = {
//     [myName] : "Hello how are you?",
//     [20+1] : "is my age"
// }
// console.log(myBio);

// ➡ No need to write key and value, if both are same

// let myName = "Lokesh Debnath";
// let myAge = 21;

// const myBio = {
//     myName : myName,
//     myAge : myAge
// }
// OR
// const myBio = {myName, myAge};

// console.log(myBio);


// 6️⃣ Fat Arror Function

// 👻 Normal way to writing Function

// console.log(sum());
// function sum() {
//   let a = 5; b = 6;
//   let sum = a + b;
//   return `The sum of the two number is ${sum}`;
// }

// 👻 How to convert in into Fat Arror Function

// const sum = () => `The sum of the two number is ${(a=5)+(b=6)}`;
// console.log(sum());


// 7️⃣ Spread Operator

// const colors = ['red', 'green', 'blue', 'white'];

// const myColors = ['red', 'green', 'blue', 'white', 'yellow', 'black'];
// 2nd time add one more color on top and tell we need to write it again on mycolors array too

// const MyFavColors = ['yellow', 'black', ...colors];

// console.log(MyFavColors);

// Es2014

// "use strict";);

// Es7 features

// 1: Array include

// const myColors = ['red', 'green', 'blue', 'white', 'yellow', 'black'];
// const isPresent = myColors.includes('blue');
// console.log(isPresent);

// 2: ** Exponentiation operator

// console.log(2**3); // 2*2*2


// ES8 features

// String padding
// Object.values()
// Object.entries()

// let message = "My name is Lokesh"
// console.log(message);
// console.log(message.padStart(5));
// console.log(message.padEnd(10));

// const person = {name : "Lokesh", age : 21};

// console.log(Object.values(person));

// console.log(Object.entries(person));
// const arrObj = (Object.entries(person));
// console.log(Object.fromEntries(arrObj));


// Es2018

// const person = {name : "Lokesh", age : 21};

// const sPerson = { ...person };

// console.log(person);
// console.log(sPerson);

// Es 2019
// Array.prototype.flat,flatMap
// Object.fromEntries()

// Es 2020

// #1 : BigInt

// let oldNum = Number.MAX_SAFE_INTEGER;
// console.log(oldNum);
// console.log(9007199254740991n + 12n);
// let newNum = 9007199254740991n + 12n;
// console.log(newNum);
// console.log(typeof newNum);
 
//  const foo = null ?? 'default string';
//  console.log(foo);

// ***************************************************************


// ****** Section 7️⃣ 👉 Arrays in JavaScript  **** /
// When we use var, we can stured only one value at a time.
// When we feel like storing multiple values in one variable then instead of var, we will use an Array.
// In Javascript, we have an Array class, and arrays are the prototype of this class.

// Example🏁

// var myFriends = ['Ramesh', 22, 'Male', 'arjun', 20, 'Male']

// 1️⃣ Array Subsection 1 👉 Traversal in array ✌
// Navigate through an array

// If we want to get the single data at a time and also if we want to change the data

// var myFriends = ['Lokesh', 'Rakesh', 'Debabrata', 'Shivam'];
// console.log(myFriends[1]);

// If we wnat to check the length of element of an array
// console.log(myFriends.length);

// We use loop to navigate

// let myFriends = ['Lokesh', 'Rakesh', 'Debabrata', 'Shivam'];

// for (let i = 0; i < myFriends.length; i++) {
//   console.log(myFriends[i]);
// }

// After ES6 we have for..in and for..of loop too
// let myFriends = ['Lokesh', 'Rakesh', 'Debabrata', 'Shivam'];
// for (let elements in myFriends) {
//     console.log(elements);
//   }

// for (let elements of myFriends) {
//   console.log(elements);
// }

// Array.prototype.forEach()🙋‍♂️
// Calls a function for each element in the array

// let myFriends = ['Lokesh', 'Rakesh', 'Debabrata', 'Shivam'];

// myFriends.forEach(function(element,index,array){
//     console.log(`${element} index : ${index}  ${array}`)
// });

// // using Fat Array Function
// myFriends.forEach((element,index,array)=>{
//         console.log(`${element} index : ${index}  ${array}`)
//     });

// 2️⃣ Array Subsection 2 👉 Searching and Filter in an Array

// Array.protype.indexof()🙋‍♂️
// Returns the first (least) index of an element within the array equal to an element. or -1 if none is found. It search the element from the 0th index number

// let myFriendNames = ['Lokesh', 'Rakesh', 'Debabrata', 'Shivam','Rakesh', 'Debabrata', 'Shivam'];

// console.log(myFriendNames.indexOf("Rakesh"));

// Array.prototype.lastIndexof()🙋‍♂️
// Return the last (greatest)index of an element within the array equal to an element, or -1 if none is found. It search the last to first.

// console.log(myFriendNames.lastIndexOf('Rakesh',3));

// Array.Prototype.include()🙋‍♂️
// Determines whether the array contains a value, returning true or flase as appropriate

// let myFriendNames = ['Lokesh', 'Rakesh', 'Debabrata', 'Shivam','Rakesh', 'Debabrata', 'Shivam'];

// console.log(myFriendNames.includes('Rakesh'));

// Array.prototype.find()🙋‍♂️

// arr.find(callback(element[,index[,array]])[,thisarg])

// Returns the found element in the array, if some element in the array satisfies the testing function, or undefined if not found.
// Only problem is that it return only one element

// const prices = [200,300,350,400,450,500,600]
// price < 400

// const findElem = prices.find((curentval)=>curentval < 400);
// console.log(findElem);

// Array.prototype.findIndex()🙋‍♂️
// Returns the found index in the array, if an element in the array satisfies the testing function, or -1 if not found.

// console.log(prices.findIndex((curentval)=>curentval > 1400));

// Array.prototype.filter() 🙋‍♂️
// Returns a neew array containing all elements of the calling array for which the provided filtering function returns true.

// const prices = [200,300,350,400,450,500,600]
// // price < 400
// const newPriceTag = prices.filter((elem,index)=>{
//     return elem < 600;
// });

// console.log(newPriceTag);

// 3️⃣ Array Subsection 3 👉 How to sort an Array

// Array.prototype.sort()🙋‍♂️

// The sort() method sorts the element of an array in place and returns the sorted array. The default sort order is ascending, buit upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

// const months = ['March', 'Jan', 'Feb', 'April', 'Dec' ];
// console.log(months.sort());

// const array1 = [1, 30, 4, 21, 10000, 99];
// console.log(array1.sort());

// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than 1.

// Because of this, the sort() method will produce an incorrect result when sorting numbers.

//  4️⃣ Array SUbsection 4 👉 Perform CRUD

// Array.protype.push()🙋‍♂️
// The push() methof adds one or more elements to the end of an array and returns the new length of the array.

// const animals= ['pig', 'goat', 'sheep'];
// const count = animals.push('chicken');
// console.log(count);

// animals.push('chicken', 'cats', 'cow');
// console.log(animals);

// Array.prototype.unshift()🙋‍♂️
// The unshift() method adds one or more elements to the begining of an array and returns the new length of the array.

// const animals = ['pig', 'goat', 'sheep'];

// const count = animals.unshift('chicken');
// console.log(count);
// console.log(animals);

// animals.unshift('chicken', 'cats', 'cow');
// console.log(animals);

// 2nd example

// const myNumbers = [1,2,3,5];
// myNumbers.unshift(4,6);
// console.log(myNumbers);

// Array.prototype.pop() 🙋‍♂️
// The pop() method removes the last element form an array and returns the element. This method changes the length of the array.

// const plants = ['broccoli', 'cauliflower', 'kale', 'tomato', 'cabage'];
// console.log(plants);
// console.log(plants.pop());
// console.log(plants);

// Array.prototype.shift() 🙋‍♂️
// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

// const plants = ['broccoli', 'cauliflower', 'kale', 'tomato', 'cabage'];
// console.log(plants);
// console.log(plants.shift());
// console.log(plants);

// 😃 8: Challenge Time 🏁

// Array.prototype.splice()🙋‍♂️
// Adds and/or removes elements form an array.

// 1. Add Dec at the end of an array.
// 2. What is the return value of splice method?
// 3. Update march to March?
// 4. Delete June form an array?

// const months = ["Jan", "march", "April", "June", "July"];

// Sol 1

// const newMonth = months.splice(months.length,0,'Dec');
// console.log(months);

// SOl 2

// console.log(newMonth);

// Sol 3
// const indexOfMonth = months.indexOf('march');
// if (indexOfMonth != -1) {
//     const updateMonth = months.splice(1,2,'March');
// }else{
//     console.log('No such data found');
// }

// console.log(months);

// Sol 4

// const indexOfMonth = months.indexOf('April');
// if (indexOfMonth != -1) {
//     const updateMonth = months.splice(indexOfMonth,2);
//     console.log(months);
//     console.log(updateMonth);
// }else{
//     console.log('No such data found');
// }

// console.log(months);

// 5️⃣ Array Subsection 4 👉 Map and Reduce Method

//  Array. Prototype.map()🙋‍♂️

// let newArray = arr.map(callback(currentValue[.index[,array]])){
// return element for newarray. after executing something }[, thisArg]

// Return a new array containing the results of calling a finction on every element in this array.

// const array1 = [1, 4, 9, 16, 25];
// // num > 9
// let newArr = array1.map((curElem,index,arr) => {
//     return curElem > 9;
// })
// console.log(array1);
// console.log(newArr);

// let newArr = array1.map((curElm, index, arr) =>{
//     return `Index no = ${index} and the value is ${curElm} belog to ${arr}`
// })
// console.log(newArr);

// It return new array without mutating the original array

// 😃 9: Challenge time 🏁
// 1. Find the square root of each element in an array?
// 2: Multiply each element by 2 and return only those elememt which are greater than 10 ?

// Sol 1 :
// let arr = [25, 36, 49, 64, 81];
// let arrSqr = arr.map ((curElem)=>{
//     return Math.sqrt(curElem);
// })
// console.log(arrSqr);

// Sol 2 :
// let arr = [2, 3, 4, 6, 8];

// let arr2 = arr.map((curElm) => curElm * 2).filter((curElm)  => curElm > 10);
// console.log(arr2);

// 👉 Reduce Method

// Flatten an array means to convert the 3d or 2d array into a single dimensional array

// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.

// The reducer function takes four argument :
// Accumulator
// Current Value
// Current Index
// Source Array

// let arr = [5, 6, 2];
// let sum = arr.reduce((accumulator, curElm, index, arr)=>{
//     return accumulator *= curElm;
// })
// console.log(sum);

// How to fatten an array
// Converting 2d and 3d array into one dimensional array

// const arr = [
//     ['zone_1','zone_2' ],
//     ['zone_3','zone_4' ],
//     ['zone_5','zone_6' ],
//     ['zone_7',['zone_8', ['zone_9','zone_10']] ]
// ]

// let flatarr = arr.reduce((accum, currval)=>{
//     return accum.concat(currval);
// })
// console.log(arr.flat());
// console.log(arr.flat(Infinity));


// **** Section 7 👉 Strings in JavaScript *****/

// A Javascript string is zero or more characters written inside quotes.
// Javascript strings are used for stroring and manipulating text.
// You can use single or double quotes
// Strings can be created as primitives from string literals or as objects using the string() constructor

// let myName = "Lokesh Debnath";
// let myChallenName = "LokeshTheRacer";

// let ytName = new String("Developer Lokesh");

// console.log(myName);
// console.log(ytName);

// 👉 How to find the length of a string
// String.prototype.length 🙋‍♂️
// Reflects the length of the string.

// let myName = "Lokesh Debnath"
// console.log(myName.length);

// 👉Escape Character

// let anySentence = "We are the so-called \"Vikings\" from the north";
// console.log(anySentence);

// If you don't want to mess, simply use the alternate quotes

// 👉 Finding a String in a string

// String.protype.indexof(searchValue [,fromIndex])🙋‍♂️ he indexof() method returns the index of (the position of) the first occurrence of a specified ext in string

// const myBioData = "I am Lokesh Debnath";
// console.log(myBioData.indexOf('lokesh'));

// JavaScript counts positions form Zero.
// 0 is the first position in a string, 1 is the secomd, 2 is the third.

// String.prototype.lastIndexof(searchValue [,formIndex])🙋‍♂️
// Returns the index within the calling String object of the last occurrence of searchValue, or -1 if not found.

// const myBioData = "I am Lokesh Debnath";
// console.log(myBioData.lastIndexOf('Lokesh'));

// 👉 Searching for a String in a string

// String.protype.search(regexp)🙋‍♂️
// The Search() method searches a string for a specified value and returns the position of the match

// const myBioData = "I am Lokesh Debnath";
// let sData = myBioData.search("Lokesh");
// console.log(sData);

// The search() method can't take a second start position argument.

// 👉 Extracting String parts

// There are 3 methods for extracting a part of a string :

// slice (start, end);
// substring(start, end);
// substr(start, length);

// The slice() Method 🙋‍♂️
// Slice() extracts a part of a string and returns the extracted part in a new string.

// The method takes 2 parameters : The start position, and the end position ( end not included).

// let str = "Apple, Bananaa, kiwi";

// let res = str.slice(0,5);
// let res = str.slice(7,-2);
// console.log(res);

// The slice() method selects the elements starting at the given start argument, and ends at but does not include the given and argument.

// Note : The original array will not be changed.

// 😃 11 : Challenge Time 🏁

// Display only 280 characters of a string like the one used in Twitter?

// let myTweet = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas quaerat corporis excepturi pariatur aliquam nulla, nemo vitae nesciunt aliquid ducimus officiis quia reiciendis. Exercitationem incidunt, repellendus, illum iusto hic tempore vero commodi quisquam quo voluptate ea"

// let myActualTweet = myTweet.slice(0, 280);
// console.log(myActualTweet);
// console.log(myTweet.length);

// The SubString() Method 🙋‍♂️
// substring() is similar to slice().
// The difference is that substring() cannot accept negative indexes.

// let str = "Apple, Bananaa, kiwi";
// let res = str.substring(0, 5);
// console.log(res);

// If we give negative value then the characters are counted form the 0th pos

// The substr() Method 🙋‍♂️
// Substr() is similar to slide()

//  The difference is that the second parameter specifies the length of the extracted part.

// let str = "Apple, Bananaa, kiwi";

// let res = str.substr(0,5);
// let res = str.substr(-4);
// console.log(res);

// 👉 Replacing String Content ()

// String.protype.replace(searchFor, replceWith) 🙋‍♂️

// The replace() method replaces a specified value with another value in a string.

// let myBioData = `I am lokesh Debnath`;

// let replaceData = myBioData.replace('lokesh', 'Lokesh');
// console.log(replaceData);

// Points to remember
// 1: The replace() method does npt change the string it is called on. It returns a new string.

// 2: By default, the replace() method replaces only the frist match

// 👉 Extracting String Characters

// There are 3 methods for extracting string characters :

// charAt(position)
// charCodeAt(position)
// property access []

// The charAt() Method 🙋‍♂️
// The charAt() Method returns the character at a specified index(position) in a string

// let str = "HELLO WORLD"

// console.log(str.charAt(0));

// The charCodeAt() Method 🙋‍♂️
// The charCodeAt() method returns the unicode of the character at a specified index in a string:
// The method returns a UTF-16 code (an integer between 0 and 65535).

// The unicode standard provides a unique number for every character, no matter the platform, device, application, or launguage. UTF-8 is a popular unicode encoding which has 88-bit code units.

// let str = "HELLO WORLD";
// console.log(str.charCodeAt(0));

// 😃 11: Challenge time 🏁
// Returns the unice of the last character in a string
// let str = "HELLO WORLD"
// let lastChar = str.length -1;
// console.log(str.charCodeAt(lastChar));

// Property Access
// ECMAScript 5 (2009) allows property access [ ] on strings

// let str = "Hello World";
// console.log(str[0]);

// 👉 Other useful methods

// let myName = "Lokesh Debnath"
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());

// The concat() Method 🙋‍♂️
// concat() joins two or more strings

// let fName = "lokesh";
// let lName = "debnath"

// console.log(fName.concat(lName));
// console.log(fName.concat(" ", lName));

// String.trim()🙋‍♂️
// The trim() method removes whitespaces form sides of a string

// let str = "      Hello World!        ";
// console.log(str.trim());

// Converting a string to an Array
// A string can be converted to an array with the split() method

//let txt = "a,b,c,d,e"                   //string
//console.log(txt.split(","));            //SPlit on commas
//console.log(txt.split(" "));            // Split on spaces
//console.log(txt.split("|"));            //Split on pipe

// ***** Section 8 👉 Date and Time in JavaScript ***/

// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects contain a number thet represents miliseconds since 1 january 1970 UTC.

// 👉 Creating Date Objects
// There are 4 ways to create a new date objects :

// new Date()
// // It takes 7 arguments
// new Date(year, month, day, hours, minutes, seconds, miliseconds);
// // We can't avoid month section
// new Date(miliseconds)
// new Date(date string)

// new Date() 🙋‍♂️
// Date objects are created with the new Date() constructor.

// let currDate = new Date();
// console.log(currDate);

// console.log(new Date());;
// console.log(new Date().toLocaleString);      //27/09/2021 16:30:50 PM
// console.log(new Date().toString());          //Monday Sep 27 2021 16:30:50 GMT+0530

// Date.now() 🙋‍♂️
// Returns the numeric value corresponding to the current time-the number of miliseconds elapsed since January 1, 1970 00:00:00 UTC

// console.log(Date.now());

// new Date(year, month,....) 🙋‍♂️
// 7 numbers specify year, month, day, hour, minute, second and milisecond ( in atht order )
// Note : JavaScript counts months form 0 to 11.

// January is 0. December is 11.

// let d = new Date(2021, 8, 27, 18, 18, 30, 0);
// console.log(d.toLocaleString());

// new Date(datestring) 🙋‍♂️
// new Date(datestring) creates a new date object form a date string

// let d = new Date("September 27, 2021 16:22:00");
// console.log(d.toLocaleString());

// new Date(miliseconds) 🙋‍♂️
// new Date(miliseconds) creates a new date object as zero time plus miliseconds

// let d = new Date(0);
// let d = new Date(1609574531435);
// let d = new Date(86400000*2);
// console.log(d.toLocaleString());

// 👉 Date Method
// const curDate = new Date();

// How to get a the indivisual date :
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth());        //0-11 Jan to Dec
// console.log(curDate.getDate());

// How to set indivisual date :

// The setFullYear() method can optionally set month and day
// console.log(curDate.setFullYear(2022));
// console.log(curDate.setFullYear(2022,10,5));
// console.log(curDate.setMonth(9));       //0-11 Jan to Dec
// console.log(curDate.setDate(27));
// console.log(curDate.toLocaleString());

// 👉 Time Method

// const curTime = new Date();

// How to get the indivisual Time

// The getTime() method returns the number of miliseconds since January 1, 1970
// console.log(curTime.getTime());

// The getHours() method returns the hours of a date as a number (0-23)
// console.log(curTime.getHours());

// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());

// How to set the indivisual Time :

// console.log(curTime.setTime());
// console.log(curTime.setHours(5));
// console.log(curTime.setMinutes(5));
// console.log(curTime.setSeconds(5));
// console.log(curTime.setMilliseconds(5));

// Practice Time
// new Date().toLocaleTimeString(); //18:56:48 PM
// ---
// new Date().toLocaleDateString(); //11/16/2021
// ---
// new Date().toLocaleString(); //27/09/21, 18:57:48 PM

/****Section 9 👉 Math Object in JavaScript  ****/

// The JavaScript Math Object allows you to perform mathematical tasks on numbers.

// console.log(Math.PI); 🙋‍♂️

// Math.round() 🙋‍♂️
// Returns the value of x rounded to its nearest integer

// let num = 10.255;
// console.log(Math.round(num));

// Math.pow()🙋‍♂️
// Math.pow(x, y) returns the value of x to the power of y

// console.log(Math.pow(2,3));

// Math.sqrt()🙋‍♂️
// Math.sqrt(x) returns the sqare root of x

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(66));

// Math.abs()🙋‍♂️
// Math.abs(x) returns the absolute (positive) value of x

// console.log(Math.abs(-55));
// console.log(Math.abs(-55.5));
// console.log(Math.abs(-955));

// Math.ceil() 🙋‍♂️
// Math.ceil(x) returns the value of x rounded up to its nearest integers

// console.log(Math.ceil(4.4));
// console.log(Math.ceil(99.1));

// Math.min() 🙋‍♂️
// Math.min() can be used to find the lowest value in a list of argument

// console.log(Math.min(0,150,30,20,-8,-200));

// Math.max() 🙋‍♂️
// Math.max() can be used to find the highest value in a list of argument

// console.log(Math.max(0, 150, 30, 20, -8, -200));

// Math.random() 🙋‍♂️
// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)

// console.log(Math.floor(Math.random()*10)); //0 to 9

// Math.trunc() 🙋‍♂️
// The trunc() method returns the integer part of a number

// console.log(Math.trunc(4.6));
// console.log(Math.trunc(-99.1));

// Practice Time 🏁

// If the argument is positive number, Math.trunc() is equivalent to Math.floor(), otherwise Math.trunc() is equivalent to Math.ciel().

// Section 10 👉 Document Object Model in JavaScript

// WINDOWS VS DOCUMENT IN JAVASCRIPT************
// 1️⃣ Window is the main container or we can say the global object and any operations related to entire browser window can be part of window object.

// For ex 👉 the history or to find the url etc.

// 1️⃣ Whereas the DOM is the child of window Object

// 2️⃣ All the members like objects, methods or properties.
// If they are the part of window object then we do not refer the window object. Since window is the global object so you donot have to write down window.
// It will be figured out by the runtime.

// 2️⃣ Where in the DOM we need to refer the document if we wanr to use the document object,method or properties.

// 3️⃣ Windows has methods, properties and object. ex setTimeout() or setInterval() are the methods, where as Document is the object of the window and it also has a screen object with properties describing the physical display.

// 3️⃣ Document is just the object of the global object that is window, which deals with the document, the HTML elememts themselves.

// ****************DOM VS BOM ***************/

// 👉 The DOM is the Document Ojbject Model, which deals with the document, the HTML element themselves, e.g. document and all traversal you would do in it, events etc.

// For EX : 👨‍🏫
// Change the backgroud color to red
// Document.body.style.background = "red";

// 👉 The BOM is the Browser Object Model, which deals with browser components aside from the document, like history, locartion, navigator and screen (as well as some others that vary by browser) OR
// In simple meaning all the window operations which comes under BOM are performed using BOM.

// Lets see more practical on History Object

// Functions alert/confirm/prompt are also a part of BOM:
// They are directly not related to the document, but represent pure browser methods of communicating with the user.

// alert(location.href); //Shows current URL
// if(confirm("want to visit Facebook")){
// location.href = "https://www.facebook.com/"; // redirect the browser to another url
// }

// Section 3️⃣ : Navigate through DOM

// 1: document.documentElement
// returns the Element that is the root element of the document.
// 2: document.head
// 3: document.body
// 4: document.body.childnodes(include tab, enter and whiteSpace)
// list of the direct children only
// 5: document.children (without text nodes, only regular Elemets)
// 6: document.childnodes.length

// 👉 Practice Time
// How to check whether an element has child nodes or not?
// We will use hasChildNodes()

// 👉 Practice Time
// How to find the child in DOM tree
// firstChild vs firstElementChild
// lastChild vs lastElementChild
// const data = document.body.firstElementChild;
// undefined
// data
// data.firstElementChild
// data.firstElementChild.firstElementChild.style.color = "red"
// vs
// document.querySelector(".child-two").style.color ="yellow"

// 👉 How to find or access the siblings
// document.body.nextSibling
// document.body.nextElementSibling
// document.body.previousSibling
// document.body.previousElementSibling

// Section 4️⃣ : How to search the Elements and the Refernces
// We will see the new file

// ************************************************************

/** Section 11 👉Events in JavaScript */

// HTML events are "things" that happen to HTML elements.
// When JavaSript is used in used in HTML pages, JavaScript can "react" on these events.

// 👨‍🏫 HTML Events
// An oval shaped can be something the browser does, or something a user does.

// Here are some examples of HTML events:
// An HTML web page has finished loading
// An HTML inpuyt field was changed
// An HTML button was clicked
// Often, when events happen, you may want to do something.

// JavaScript lets you execute code when events are detected.

// HTML aloows event handler attributes, with JavaScript code, to be added to HTML elements.

// Section 1️⃣ 4 ways of writing Events in Javascript

// 1: using alert()
// 2: By calling a function (we already seen and most common way of writting)
// 3: using Inline events ( HTML onclick ="" property and element.onclick)
// 4: Using Event Listeners(addEventlistener and IE's attachEvents)

// Check the Events

// Section 2️⃣ : What is Event Object?
// Event object is the parent object of the event object for example
// MouseEvent, focusEvent, keyboardEvent etc

// Section 3️⃣ MouseEvent in JavaScript
// The MouseEvent Object
// Events that occur when the mouse interacts with the HTMl
// Document belogs to the MouseEvent object.

// Section 4️⃣
// Events that occur when user presses a key on the keyboard, belongs to the keyboardEvent object.
// https://www.w3schools.com/jsref/obj_keyboardevent.asp

// Section 5️⃣ InputEvents in JavaScript
// The onchange event occurs when the value of an element has been chnaged.

// For Radiobuttons and checkboxes, the onchange event occurs when the checked state has been changed.


















// ************************************************************

// 👉 JavaScript Timing Events

// ************************************************************


// The window object allows execution of code at specified time intervals.

// These time intervals are called timing evemts.

// The two key methods to use with JavaScript are :

// setTimeout(function, milliseconds);
// Execute a function , after waiting a specified number pf milliseconds.

// setInterval(function, milliseconds);
// Same as SetTimeOut(), but repeats the execution of the function continously.

// 1️⃣ SetTimeout()
// 2️⃣ clearTimeout()
// 3️⃣ setInterval()
// 4️⃣ clearInterval()


// ************************************************************

// 👉 Object Oriented JavaScript

// ************************************************************

// 1️⃣ What is Object Literal ?
// Object literal is simply a key : value pair data structure. Storing varibles and functions together in one container. We can refer this as an Objects.

// How to create an Object?

// 1st way

// let bioData = {
//     myName : "Lokesh Debnath",
//     myAge : 20,
//     getData : function(){
//         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//     }
// }
// bioData.getData()

// 2nd way no need to write functions as well after es6

// let bioData = {
//     myName : "Lokesh Debnath",
//     myAge : 20,
//     getData(){
//         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//     }
// }
// bioData.getData()

// 👉 What if we want object as a value an object

// let bioData = {
//     myName :{ 
//     realName :"Lokesh Debnath",
//     challenName :"LokeshTheRacer"},
//     myAge : 20,
//     getData (){
//         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//     }
// }
// console.log(bioData.myName.realName);

// 2️⃣ What is this object ?

// The defination of "this" object is that it contain the current context.

// The this object can have different values depending on where it is placed.

// For Example 1
// console.log(this);
// It refers to the current context and that is window global object

// For Example 2
// function myName(){
//     console.log(this);
// }

// Ex 3

// let myNames = "Lokesh";
// function myName(){
//     console.log(this.myNames);
// }
// myName();

// Ex 4

// const obj ={
//     myAge : 21,
//     myName(){
//         console.log(this);
//     }
// }
// obj.myName();

// Ex 5

// This object will not work with arrow function because arrow

// const obj = {
//     myAge : 21,
//     myName : () => {
//         console.log(this);
//     }
// }
//  obj.myName();

// Ex 6

// let bioData = {
//     myName : {
//         realName : "Lokesh Debnath",
//         challenName : "LokeshTheRacer"
//     },
    // Things to remember is that the myName is the key and the object is act like a value
//     myAge : 21,
//     getData (){
//         console.log(`My name is ${this.myName.realName} and my age is ${this.myAge}`);
//     }
// }

// bioData.getData()


// Call method is used to call the method of another object or with call(), an object can use mathod belonging to another object

// What is Event Buildin ?
// With Event builind, the event is first captured and handled by the innermost element and then propagated to outer element. 

// What is Event Capturing ?
// With Event Capturing, the event is first captured by the outermost element and propagated to the inner elements.
// Capturing is also called "trickling", whicj helps remenber the propagation order.

// 1️⃣ : Higher Order Function
// Function which takes another function as an argument is called HOF 
// wo function jo dusre function ko as an argument accept krta hai use HOF

// 3️⃣ : Callback Function
// Function which get passed as an argument to another function is called CBF
// A callback function is a function that is passed as an argument to another function, to "called back" at a later time.

// Jis bhi function ko hum kisi or function ke under as an arguments passed krte hai then usko hum Callback function bolte hai