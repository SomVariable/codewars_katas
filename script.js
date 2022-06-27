// _______
//|4 kyu |
//|_______|
//Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures
//and same corresponding length of nested arrays as the first array.

// Array.prototype.sameStructureAs = function (other) {
//     let isStructureSame = true
    
//     if(other.length !== this.length){
//         return false
//     }

//     other.forEach((element, index) => {
//         if(Array.isArray(element) && typeof element === typeof this[index]){
//             let isSame = this[index].sameStructureAs(element)
//             if(!isSame){
//                 isStructureSame = false
//             }
//         }
//         if(!Array.isArray(element) && Array.isArray(this[index])){
//             isStructureSame = false
//         }
//     })
//     return isStructureSame
// };

// let arr = [1,1,1];
// let arr2 = [1,1,[1,[1,2]]];
// console.log(arr.sameStructureAs([2,2,1]))
// console.log(arr.sameStructureAs([2,2,[1,1]]))

// console.log(arr2.sameStructureAs([2,2,1]))
// console.log(arr2.sameStructureAs([2,2,[1,1]]))
// console.log(arr2.sameStructureAs([2,2,[1,[1,2]]]))

// console.log('---------------')
// console.log([ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] ));          
// console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] ));  

//  console.log( 'should return false ')
// console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] ));  
// console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] ));  

// console.log( 'should return true')
// console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] )); 

// // console.log( 'should return false')
// console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] ));   


// // console.log('test we faild shuld be true')
// console.log([1,'[',']'].sameStructureAs(['[',']',1]))

//--------------------------------------------------------------------------------------------------------------
// _______
//|4 kyu |
//|_______|
//Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.
//Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.
//some tests will include very large numbers. test data only employs positive integers.

// const nextSmaller = n => {
//     let min = minify(n);
//     while (--n >= min) if (minify(n) === min) return n;
//     return -1;
// };
  
// const minify = n => {
//     const strToArr = [...`${n}`];
//     const srtedArr = strToArr.sort();
//     const arrToStr = srtedArr.join``
//     console.log('arrToStr ', arrToStr)
//     const repleced = arrToStr.replace(/^(0+)([1-9])/, '$2$1')
//     console.log('repleced', repleced)
//     return repleced
// };

//   console.log(nextSmaller(1243))


//-----------------------------------------------------------------------------------------------------------------------------
// _______
//|7 kyu |
//|_______|
//This is a kyu series that you can only solve using recursion.
//##1 - Factorial
//In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,
//5! = 5 * 4 * 3 * 2 * 1 = 120.
//The value of 0! is 1.
//#Your task
//You have to create the function factorial that receives n and returns n!. You have to use recursion

// const factorial = n => n <= 1 ? 1 : n * factorial(n-1);

// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(2));
  
// console.log(factorial(4))
// console.log(factorial(5))
// console.log(factorial(6))
// console.log(factorial(7))
// console.log(factorial(8))
// console.log(factorial(9))
// console.log(factorial(10))
// console.log(factorial(11))
// console.log(factorial(12))
// console.log(factorial(13))
// console.log(factorial(14))
// console.log(factorial(15))

//-----------------------------------------------------------------------------------------------
// _______
//|7 kyu |
//|_______|
//A non-empty array a of length n is called an array of all possibilities if it contains all numbers between [0,a.length-1].
//Write a method named isAllPossibilities that accepts an integer array and returns true if the array is an array of all possibilities, else false.


// function isAllPossibilities(x){
//     const sortedX = x.sort((a, b) => a - b);
//     const isNonNegative = sortedX[0] >= 0;
    
//     for(let i = 0; i < x.length; i ++){
//       if(sortedX[i] !== i){
//         return false
//       }
//     }
    
//     return sortedX[x.length - 1] === x.length - 1 && isNonNegative
//   }

// //   console.log(isAllPossibilities([0,1,2,3]))
// //   console.log(isAllPossibilities([1,2,3,4]))

// console.log('1 ', isAllPossibilities( [ 0, 2, 4, 4, 19 ]))
// console.log('2 ', isAllPossibilities( [ 0, 1, 2, 3 ]))
// console.log('3 ', isAllPossibilities( [ 1, 2, 3, 4, 6, 10 ]))
// console.log('4 ', isAllPossibilities( [ 1, 1, 1, 1, 3, 8 ]))
// console.log('5 ', isAllPossibilities( [ 0, 1, 2, 3 ]))
// console.log('6 ', isAllPossibilities( [ 1, 2, 3, 4 ]))
// console.log('7 ', isAllPossibilities( [ -1, 0, 2, 3 ]))
// console.log('8 ', isAllPossibilities( [ 0, 2, 3 ]))
// console.log('9 ', isAllPossibilities( [ 0 ]))
// console.log('10 ', isAllPossibilities( []))
// console.log('11 ', isAllPossibilities( [ 0, 0, 2, 3 ]))


//Return the number (count) of vowels in the given string.
//We will consider a, e, i, o, u as vowels for this kyu (but not y).
//The input string will only consist of lower case letters and/or spaces.


//-----------------------------------------------------------------------------------------------
// _______
//|7 kyu |
//|_______|

// const getCount = (str) => (str.match(/a|e|i|o|u/gi) || []).length;
//   console.log(getCount("sfsf"))

//--------------------------------------------------------------------------------------------
// _______
//|6 kyu |
//|_______|
//The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
//What if the string is empty? Then the result should be empty object literal, {}.

// function count (string) {  
//     let obj= {}; 
  
//     string.split('').forEach(elem=>obj[elem] ? obj[elem]++: obj[elem] = 1  ); 
  
//     return obj; 
//    } 

//-----------------------------------------------------------------------------------------------------
// _______
//|6 kyu |
//|_______|
//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
//For example (Input --> Output):

//39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
//999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
//4 --> 0 (because 4 is already a one-digit number)

// function persistence(num) {
//     const numToStr = String(num)

//     return numToStr.length === 1?0:1 + persistence(numToStr
//                                                           .split('')
//                                                           .reduce((reducer, number) => reducer * number), 1)
//   }


// console.log(persistence(39));
// console.log(persistence(4));
// console.log(persistence(25));
// console.log(persistence(999));


//------------------------------------------------------------------------------------------------------------------

//Write a function which makes a list of strings representing all of the ways you can balance n pairs of parentheses
// _______
//|4 kyu |
//|_______|

// function balancedParens(n) {
//     const result = []
//     const generateParenthesis = (n, open, close, s, ans) => {
//         if(open == n && close == n){
//             console.log(s)
//             result.push(s);
//             return;
//         } 
  
//         if(open < n)
//         {
//             console.log('first it four times')
//             generateParenthesis(n, open + 1, close, s + "(", ans);
//         }
  
//         if(close < open)
//         {
//             console.log('then it four times')
//             generateParenthesis(n, open, close + 1, s + ")", ans);
//         }    
//     }
//     generateParenthesis(n, 0, 0, "", result);
//     return result;
// }


// console.log( balancedParens(0).sort() );
// console.log( balancedParens(1).sort() );
// console.log( balancedParens(2).sort() );
// console.log( balancedParens(3).sort() );
//console.log( balancedParens(4).sort() );

//----------------------------------------------------------------------------------------------------------------------
// _______
//|5 kyu |
//|_______|
//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
//* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
//* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
//* url = "https://www.cnet.com"                -> domain name = cnet"

// const domainName = (url) => url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]

//---------------------------------------------------------------------------------------------------------------
// _______
//|5 kyu  |
//|_______|
//This time we want to write calculations using functions and get the results. Let's have a look at some examples:

//seven(times(five())); // must return 35
//four(plus(nine())); // must return 13
//eight(minus(three())); // must return 5
//six(dividedBy(two())); // must return 3
//Requirements:

//There must be a function for each number from 0 ("zero") to 9 ("nine")
//There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
//Each calculation consist of exactly one operation and two numbers
//The most outer function represents the left operand, the most inner function represents the right operand
//Division should be integer division. For example, this should return 2, not 2.666666...:


// const zero = (func) =>   func ? func(0) : 0;
// const one = (func) =>    func ? func(1) : 1;
// const two = (func) =>    func ? func(2) : 2;
// const three = (func) =>  func ? func(3) : 3;
// const four = (func) =>   func ? func(4) : 4;
// const five = (func) =>   func ? func(5) : 5;
// const six = (func) =>    func ? func(6) : 6;
// const seven = (func) =>  func ? func(7) : 7;
// const eight = (func) =>  func ? func(8) : 8;
// const nine = (func) =>   func ? func(9) : 9;

// const plus= ( b ) => ( a ) => a + b; 
// const minus= ( b ) => ( a ) => a - b; 
// const times= ( b ) =>  ( a ) => a * b; 
// const dividedBy= ( b ) => ( a ) => Math.floor(a / b) ;


//---------------------------------------------------------------------------------------------------
// _______
//|5 kyu  |
//|_______|

// In testing, a spy function is one that keeps track of various metadata regarding its invocations. Some examples of properties that a spy might track include:

// Whether it was invoked
// How many times it was invoked
// What arguments it was called with
// What contexts it was called in
// What values it returned
// Whether it threw an error
// For this kata, implement a spyOn function which takes any function func as a parameter and returns a spy for func. 
//The returned spy must be callable in the same manner as the original func, and include the following additional properties/methods:

// .callCount() — returns the number of times spy has been called
// .wasCalledWith(val) – returns true if spy was ever called with val, else returns false.
// .returned(val) — returns true if spy ever returned val, else returns false
// Below is a specific example of how spyOn might work in the wild.


// function spyOn (func) {
//     const state = {
//       called: 0,
//       calledValue: new Set(),
//       returnedValue: new Set()
//     }
    
//     const spy = (...args) => {
//       const funcCall = func.apply(this, args)
//       state.returnedValue.add(funcCall)
//       state.called += 1;
      
//       args.forEach((num, index) => state.calledValue.add(args[index]))
      
//       return funcCall
//     }
    
//     spy.callCount = () => state.called
  
//     spy.returned = (num) => state.returnedValue.has(num)
  
//     spy.wasCalledWith = (num) => state.calledValue.has(num)
    
//     return spy
    
//   }
//   function returns1 () { return 1; }

// var spy = spyOn(returns1);

// console.log(spy.callCount());
// console.log(spy.returned(1));
// console.log(spy.wasCalledWith('hello'));  
// spy('hello', 'hi', 'howdy');
// spy('goodbye', 'bye', 'see ya');

// console.log(spy.callCount());
// console.log(spy.returned(1));
// console.log(spy.wasCalledWith('hi'));
// console.log(spy.wasCalledWith('bye'));

// ---------------------------------------------------------------------------------------------------------------------------------
// _______
//|7 kyu  |
//|_______|
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

//const solution = (str1, str2) => str1.substring(str1.length - str2.length) === str2


// ---------------------------------------------------------------------------------------------------------------------------------
// _______
//|6 kyu  |
//|_______|

// Welcome.
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.
// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

// function alphabetPosition(text) { 
//     let a = ''; 
    
//     let obj={ 
//           a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8,i:9, j:10, k:11, l:12, 
//           m:13, n:14, o:15, p:16, q:17, r:18, s:19, t:20, u:21, v:22,  
//           w:23, x:24, y:25, z:26 
//       }; 
    
//     for (let i = 0; i < text.length; i++) { 
//       for (let key in obj) { 
//       if(key === text[i].toLowerCase()){ 
//           a += obj[key] + ' ' ; 
//       } 
//     }  
//   } 
    
//     return a.trim(); 
//   }