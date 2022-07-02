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


//=================================================================================================================
// _______
//|5 kyu  |
//|_______|

// Write a function which partitions a list of items based on a given predicate.

// After the partition function is run, the list should be of the form [ F, F, F, T, T, T ] where the Fs (resp. Ts) are items for which the predicate function returned false (resp. true).

// NOTE: the partitioning should be stable; in other words: the ordering of the Fs (resp. Ts) should be preserved relative to each other.

// For convenience and utility, the partition function should return the boundary index. In other words: the index of the first T value in items.

// function partitionOn(pred, items) { 
//     const F = items.filter((item) => !pred(item) ); 
//     const T = items.filter(pred); 
//     items.length = 0; 
    
//     items.push(...F, ...T)

//     return F.length;

// }


// _______
//|5 kyu  |
//|_______|
// In this kata we mix some tasty fruit juice. We can add some components with certain amounts. Sometimes we pour out a bit of our juice. Then we want to find out, which concentrations our fruit juice has.

// Example:

// You take an empty jar for your juice
// Whenever the jar is empty, the concentrations are always 0
// Now you add 200 units of apple juice
// And then you add 200 units of banana juice
// Now the concentration of apple juice is 0.5 (50%)
// Then you pour out 200 units
// The concentration of apple juice is still 50%
// Then you add 200 units of apple juice again
// Now the concentration of apple juice is 0.75, while the concentration of banana juice is only 0.25 (300 units apple juice + 100 units banana juice)
// Complete the functions in order to provide this functionality. The test code for the example above can be found in the test fixture.


// const findConcetration = (fruit, amount) =>  (fruit / amount).toFixed(2) - 0

// function Jar() {
//     this.state = {
//       fruits: {},
//       amount: 0
//     }
//   }
  
//   Jar.prototype.add = function(amount, type) {
//     if(!this.state.fruits[type]) this.state.fruits[type] = 0
//     this.state.fruits[type] += amount
//     this.state.amount += amount
//   };
  
//   Jar.prototype.pourOut = function(amount) {
//     const newAmount = this.state.amount - amount
//     for(let fruit in this.state.fruits){
//         this.state.fruits[fruit] = newAmount * findConcetration(this.state.fruits[fruit], this.state.amount)
//     }
//     this.state.amount = newAmount
//   };
  
//   Jar.prototype.getTotalAmount = function() {
//     return this.state.amount
//   };
  
//   Jar.prototype.getConcentration = function(type) {
//     return this.state.fruits[type]? findConcetration(this.state.fruits[type], this.state.amount) : 0
//   }

//   let jar = new Jar();
//     console.log('jar.add 200 apple ', jar.state)
//     jar.add(200, 'apple');
//     console.log('state ', jar.state)
//     console.log('jar.getTotalAmount ',jar.getTotalAmount());
//     console.log('jar.getConcentration ',jar.getConcentration('apple'));
    
//     jar.add(200, 'banana');
//     console.log('jar.add 200 banana ', jar.state)
//     console.log('state ', jar.state)
//     console.log('jar.getTotalAmount ',jar.getTotalAmount());
//     console.log('jar.getConcentration ',jar.getConcentration('apple'));
//     console.log('jar.getConcentration ',jar.getConcentration('banana'));
  
//     jar.pourOut(200);
//     console.log('jar.pourOut 200 banana ', jar.state)
//     console.log('state ', jar.state)
//     console.log('jar.getTotalAmount ',jar.getTotalAmount());
//     console.log('jar.getConcentration ',jar.getConcentration('apple'));
//     console.log('jar.getConcentration ',jar.getConcentration('banana'));
  
//     jar.add(200, 'apple');
//     console.log('jar.add 200 apple ', jar.state)
//     console.log('state ', jar.state)
//     console.log('jar.getTotalAmount ',jar.getTotalAmount());
//     console.log('jar.getConcentration ',jar.getConcentration('apple'));
//     console.log('jar.getConcentration ',jar.getConcentration('banana'));

//   console.log('-----------------------------------------------------------------------------------------')

//   console.log('jar.add 200 apple ', jar.state)
//     jar.add(200, 'apple');
//     console.log('state ', jar.state)
//     console.log('jar.getTotalAmount ',jar.getTotalAmount());
//     console.log('jar.getConcentration ',jar.getConcentration('apple'));
    
//     jar.add(200, 'banana');
//     console.log('jar.add 200 banana ', jar.state)
//     console.log('state ', jar.state)
//     console.log('jar.getTotalAmount ',jar.getTotalAmount());
//     console.log('jar.getConcentration ',jar.getConcentration('apple'));
//     console.log('jar.getConcentration ',jar.getConcentration('banana'));
  
//     jar.pourOut(200);
//     console.log('jar.pourOut 200 banana ', jar.state)
//     console.log('state ', jar.state)
//     console.log('jar.getTotalAmount ',jar.getTotalAmount());
//     console.log('jar.getConcentration ',jar.getConcentration('apple'));
//     console.log('jar.getConcentration ',jar.getConcentration('banana'));
  
//     jar.add(200, 'apple');
//     console.log('jar.add 200 apple ', jar.state)
//     console.log('state ', jar.state)
//     console.log('jar.getTotalAmount ',jar.getTotalAmount());
//     console.log('jar.getConcentration ',jar.getConcentration('apple'));
//     console.log('jar.getConcentration ',jar.getConcentration('banana'));

//     console.log('-----------------------------------------------------------------------------')

//----------------------------------------------------------------------------------------------------



// Write a class Block that creates a block (Duh..)
// ##Requirements
// The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.
// Define these methods:
// _______
//|5 kyu  |
//|_______|

// function Block (arr){
//     this.state = {
//         som: 0,
//         width: arr[0],
//         length: arr[1], 
//         height: arr[2]
//     };
//   }
  
//   Block.prototype.getWidth = function() {
//     return this.state.width
//     }
  
//   Block.prototype.getLength = function() { 
//     return this.state.length
//   }
  
//   Block.prototype.getHeight = function() { 
//     return this.state.height
//   }
  
//   Block.prototype.getVolume = function() { 
//     return this.state.width * this.state.height * this.state.length
//   }
  
//   Block.prototype.getSurfaceArea = function() { 
//     return 2*(this.state.width * this.state.height + this.state.width * this.state.length + this.state.height * this.state.length)
//   }
  
// const newB = new Block([2,4,6])

// console.log(newB.getWidth())
// console.log(newB.getLength())
// console.log(newB.getHeight())
// console.log(newB.getVolume())
// console.log(newB.getSurfaceArea())

//---------------------------------------------------------------------------------------
// _______
//|8 kyu  |
//|_______|
//Write a function which calculates the average of the numbers in a given list.

// const find_average = (array) => array.length? array.reduce((sum, int) => sum += int) / array.length: 0

//---------------------------------------------------------------------------------------
// _______
//|8 kyu  |
//|_______|
// The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.
// 39.99 becomes $39.99
// The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).
// Examples:
// 3 needs to become $3.00
// 3.1 needs to become $3.10
// Good luck! Your team knows they can count on you!

//const formatMoney = amount => `$${amount.toFixed(2)}`;


//------------------------------------------------------------------------------------------
// _______
//|8 kyu  |
//|_______|
// Your task is to find the first element of an array that is not consecutive.
// By not consecutive we mean not exactly 1 larger than the previous element of the array.
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
// If the whole array is consecutive then return null2.
// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
// If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges
// 1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )
// 2
// Swift, Ruby and Crystal: nil
// Haskell: Nothing
// Python, Rust, Scala: None
// Julia: nothing
// Nim: none(int)

// const firstNonConsecutive = (arr) => {
//     let result = null
//     arr.forEach((num, index) => {
//       if(arr[index + 1] - num > 1){
//         result = arr[index + 1]
//       }
//     })
//     return result
//   }

//------------------------------------------------------------------------------------------
// _______
//|7 kyu  |
//|_______|
// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.
// Your task is to return the number of JavaScript developers coming from Europe.

// const countDevelopers = (list) =>
//   list.filter(
//     (developer) =>
//       developer.language === "JavaScript" && developer.continent === "Europe"
//   ).length;

