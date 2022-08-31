//OLD-KATAS

//-----------------------------------------------------------------------------------------------------------------
// _______
//|5 kyu  |
//|_______|
// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
// In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.

// function score( dice ) {
//     let points = 0;
//     const dices = { 1:0, 2:0, 3:0, 4:0, 5:0, 6:0 };
//     dice.forEach(el => dices[el]++);
  
//     Object.keys(dices).forEach(key => {
//       if (dices[key] >= 3) {
//         points += key * (key == 1 ? 1000 : 100);
//         if (key == 1) points += (dices[key] - 3) * 100;
//         if (key == 5) points += (dices[key] - 3) * 50;
//       } else {
//         if (key == 1) points += dices[key] * 100;
//         if (key == 5) points += dices[key] * 50;
//       }
//     })
  
//     return points;
//   }

//-----------------------------------------------------------------------------------------------------------------
// _______
//|5 kyu  |
//|_______|
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');
// function pigIt(str){
//     let arr = str.split(" ").map(word => {
//         let _word = word.split("")
//         if(_word[0].match(/\w/)){
//             console.log('+')
//            _word.push(_word.shift());
//            _word.push('ay') 
//         }
//         return _word.join("")
//     })
    
//     return arr.join(' ')
// }

//-----------------------------------------------------------------------------------------------------------------
// _______
//|6 kyu  |
//|_______|
// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcisstic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:

// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.
// function narcissistic(value) {
//     let sum = 0;
//     let arr = (value + '').split("");
//     arr.forEach(el => {sum += (Math.pow(el, arr.length))})
//     return sum === value? true: false
//   }

//-----------------------------------------------------------------------------------------------------
// _______
//|6 kyu  |
//|_______|
// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// function sortArray(arr) {
//     const odds = arr.filter(x => x%2).sort((a, b) => a - b);      
//     return arr.map(x => x%2 ? odds.shift() : x);
//   }


//-----------------------------------------------------------------------------------------------------
// _______
//|4 kyu  |
//|_______|

// Sudoku Background
// Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
// (More info at: http://en.wikipedia.org/wiki/Sudoku)

// Sudoku Solution Validator
// Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

// The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

// function validSolution(board){
//     let isValid = true;
//     let collections = []; 
//     const testvaliditiy = (arr) => {
//     let set = new Set(arr);
//     if (arr.includes(0) || [...set].length !== 9) {
//       return false;
//     } else {
//       return true;
//     }
//   }
//     board.forEach(row => {
//         let isUnexpectidNum = false
//         row.forEach(cell => {if(cell == 0) isUnexpectidNum = true})
//         isUnexpectidNum?isValid = false: collections.push(new Set(row))
//     })
//     collections.forEach(collection => {
//         if(collection.size < 9) isValid = false
//     })

//     //3x3 testing
//   console.log("Cube 3x3 testing ...")
//   let row = 0;
//   let column = 0;
//   while (row < 9 && column < 9) {
//     let cube = []
//     for (i = row; i < row + 3; i++) {
//       for (j = column; j < column + 3; j++) {
//         cube.push(board[i][j])
//       }
//     }
//     row += 3
//     isValid = testvaliditiy(cube)
//     if (!isValid) break;
//     if (row == 9 && column != 9) {
//       column += 3
//       row = 0;
//     }
//   }

//     return isValid
// }


//-----------------------------------------------------------------------------------------------------
// _______
//|5 kyu  |
//|_______|
// We want to create a function that will add numbers together when called in succession.

// add(1)(2); // == 3
// We also want to be able to continue to add numbers to our chain.

// add(1)(2)(3); // == 6
// add(1)(2)(3)(4); //  == 10
// add(1)(2)(3)(4)(5); // == 15
// and so on.

// A single call should be equal to the number passed in.

// add(1); // == 1
// We should be able to store the returned values and reuse them.

// var addTwo = add(2);
// addTwo; // == 2
// addTwo + 5; // == 7
// addTwo(3); // == 5
// addTwo(3)(5); // == 10
// function add(n){
//     let sum = n;
//     function resultFn(y){
//         sum += y;
//         return resultFn;
//     }
    
//     resultFn.valueOf = function(){
//             return sum;
//         };
//     return resultFn;
// }

//-----------------------------------------------------------------------------------------------------
// _______
//|5 kyu  |
//|_______|
// Create a Vector object that supports addition, subtraction, dot products, and norms. So, for example:

// var a = new Vector([1, 2, 3]);
// var b = new Vector([3, 4, 5]);
// var c = new Vector([5, 6, 7, 8]);

// a.add(b);      // should return a new Vector([4, 6, 8])
// a.subtract(b); // should return a new Vector([-2, -2, -2])
// a.dot(b);      // should return 1*3 + 2*4 + 3*5 = 26
// a.norm();      // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
// a.add(c);      // throws an error
// If you try to add, subtract, or dot two vectors with different lengths, you must throw an error!

// Also provide:

// a toString method, so that using the vectors from above, a.toString() === '(1,2,3)' (in Python, this is a __str__ method, so that str(a) == '(1,2,3)')
// an equals method, to check that two vectors that have the same components are equal

// class Vector{
//     constructor(components){
//         this.components = components
//     }

//     checkLength(components){
//         if(components.length !== this.components.length) {
//             throw "Error: Not the same size vector."
//         }else{
//             return true
//         }  
//     }

//     add(components){
//         let _components = typeof components === typeof new Object? components.components: components
//         if(this.checkLength(_components)) return  new Vector(this.components.map(number => number + _components[this.components.indexOf(number)]))
        
//     }  
//     subtract(components){
//         let _components = typeof components === typeof new Object? components.components: components
//         if(this.checkLength(_components)){
//             return new Vector(this.components.map(number => number - _components[this.components.indexOf(number)]))
//         }
//     } 
//     dot(components){
//         let _components = typeof components === typeof new Object? components.components: components
//         if(this.checkLength(_components)){
//             return this.components
//             .map(number => number * _components[this.components.indexOf(number)])
//             .reduce((sum, current) => sum + current)
//         }
//     } 
//     norm(){
//         return Math.sqrt(this.components.map(number => Math.pow(number, 2)).reduce((sum, current) => sum + current));
//     } 
    
//     equals(components){
//         let _components = typeof components === typeof new Object? components.components: components
//         if(this.components.length != _components.length) return false;
//         for(let i = 0; i < this.components.length; i++){
//             return (this.components[i] != _components[i])?false:true
//         }
//     }
  
//     toString() {
//           return `(${this.components.toString()})`;
//       }
// }


// _______
//|4 kyu  |
//|_______|
// Create a class called Warrior which calculates and keeps track of their level and skills, and ranks them as the warrior they've proven to be.

// Business Rules:

// A warrior starts at level 1 and can progress all the way to 100.
// A warrior starts at rank "Pushover" and can progress all the way to "Greatest".
// The only acceptable range of rank values is "Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest".
// Warriors will compete in battles. Battles will always accept an enemy level to match against your own.
// With each battle successfully finished, your warrior's experience is updated based on the enemy's level.
// The experience earned from the battle is relative to what the warrior's current level is compared to the level of the enemy.
// A warrior's experience starts from 100. Each time the warrior's experience increases by another 100, the warrior's level rises to the next level.
// A warrior's experience is cumulative, and does not reset with each rise of level. The only exception is when the warrior reaches level 100, with which the experience stops at 10000
// At every 10 levels, your warrior will reach a new rank tier. (ex. levels 1-9 falls within "Pushover" tier, levels 80-89 fall within "Champion" tier, etc.)
// A warrior cannot progress beyond level 100 and rank "Greatest".
// Battle Progress Rules & Calculations:

// If an enemy level does not fall in the range of 1 to 100, the battle cannot happen and should return "Invalid level".
// Completing a battle against an enemy with the same level as your warrior will be worth 10 experience points.
// Completing a battle against an enemy who is one level lower than your warrior will be worth 5 experience points.
// Completing a battle against an enemy who is two levels lower or more than your warrior will give 0 experience points.
// Completing a battle against an enemy who is one level higher or more than your warrior will accelarate your experience gaining. The greater the difference between levels, the more experinece your warrior will gain. The formula is 20 * diff * diff where diff equals the difference in levels between the enemy and your warrior.
// However, if your warrior is at least one rank lower than your enemy, and at least 5 levels lower, your warrior cannot fight against an enemy that strong and must instead return "You've been defeated".
// Every successful battle will also return one of three responses: "Easy fight", "A good fight", "An intense fight". Return "Easy fight" if your warrior is 2 or more levels higher than your enemy's level. Return "A good fight" if your warrior is either 1 level higher or equal to your enemy's level. Return "An intense fight" if your warrior's level is lower than the enemy's level.
// Logic Examples:

// If a warrior level 1 fights an enemy level 1, they will receive 10 experience points.
// If a warrior level 1 fights an enemy level 3, they will receive 80 experience points.
// If a warrior level 5 fights an enemy level 4, they will receive 5 experience points.
// If a warrior level 3 fights an enemy level 9, they will receive 720 experience points, resulting in the warrior rising up by at least 7 levels.
// If a warrior level 8 fights an enemy level 13, they will receive 0 experience points and return "You've been defeated". (Remember, difference in rank & enemy level being 5 levels higher or more must be established for this.)
// If a warrior level 6 fights an enemy level 2, they will receive 0 experience points.
// Training Rules & Calculations:

// In addition to earning experience point from battles, warriors can also gain experience points from training.
// Training will accept an array of three elements (except in java where you'll get 3 separated arguments): the description, the experience points your warrior earns, and the minimum level requirement.
// If the warrior's level meets the minimum level requirement, the warrior will receive the experience points from it and store the description of the training. It should end up returning that description as well.
// If the warrior's level does not meet the minimum level requirement, the warrior doesn not receive the experience points and description and instead returns "Not strong enough", without any archiving of the result.
// Code Examples:

// var bruce_lee = new Warrior();
// bruce_lee.level();        // => 1
// bruce_lee.experience();   // => 100
// bruce_lee.rank();         // => "Pushover"
// bruce_lee.achievements(); // => []
// bruce_lee.training(["Defeated Chuck Norris", 9000, 1]); // => "Defeated Chuck Norris"
// bruce_lee.experience();   // => 9100
// bruce_lee.level();        // => 91
// bruce_lee.rank();         // => "Master"
// bruce_lee.battle(90);     // => "A good fight"
// bruce_lee.experience();   // => 9105
// bruce_lee.achievements(); // => ["Defeated Chuck Norris"]

// const ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];

// class Warrior {
//   constructor () {
//     this._level =  1;
//     this._experience= 100,
//     this._rank= 0,
//     this._achievements= []
//   }
//   level() {
//     return this._level;
//   }
//   setLevel(newLevel) {
//     console.log(this._experience)
//     if(newLevel <= 100) this._level = newLevel;
//   }

//    experience() {
//     return this._experience;
//   }
//     setExperience(Additionalexperience) {
//     if(this._experience < ranks.length * 1000) {
//         let newExp = this._experience + Additionalexperience
//         if(newExp <= 10000){
//           this._experience += Additionalexperience
//           this.setLevel(Math.floor(this._experience/100));
//           this.setRank(Math.floor(this._level/10))
//         }else{
//           this._experience = 10000
//           this.setLevel(Math.floor(this._experience/100));
//           this.setRank(Math.floor(this._level/10))
//         }
//     }
//   }

//   rank() {
//     return ranks[this._rank];
//   }
//   setRank(newRank) {
//     if(this._rank <= ranks.length-2) this._rank = newRank;
//   }

//   achievements() {
//     return this._achievements;
//   }

//     training(arr) {
//         if(this._level >= arr[2]){
//             let newAchievement = arr[0];
//             this.setExperience (arr[1]) 
//             this._achievements.push(newAchievement)
//             return newAchievement
//         } else{
//             return 'Not strong enough'
//         }
//     }

//     battle(level){
//         if(level < 1 || level > 100) return "Invalid level"
//         let subtract = level - this._level;
//         let opponentRank = Math.floor(level/10)
        
//         if(subtract === 0){
//             this.setExperience( 10)
//             return "A good fight"
//         }else if(subtract+1 < 0){
//             this.setExperience( 0)
//             return "Easy fight"
//         }else if(subtract+1 === 0){
//             this.setExperience( 5)
//             return "A good fight"
//         }else if(subtract >= 5 && opponentRank > this._rank){
//               return "You've been defeated"
//         }else if(subtract > 0){
//             this.setExperience( (20 * subtract * subtract));
//             return "An intense fight"
//         }
//         return subtract
//     }
// }


//NEWEST
// _______
//|4 kyu  |
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



//------------------------------------------------------------------------------------------
// _______
//|7 kyu  |
//|_______|
// Pyramids are amazing! Both in architectural and mathematical sense. If you have a computer, you can mess with pyramids even if you are not in Egypt at the time. For example, let's consider the following problem. Imagine that you have a pyramid built of numbers, like this one here:

//    /3/
//   \7\ 4 
//  2 \4\ 6 
// 8 5 \9\ 3
// Here comes the task...
// Let's say that the 'slide down' is the maximum sum of consecutive numbers from the top to the bottom of the pyramid. As you can see, the longest 'slide down' is 3 + 7 + 4 + 9 = 23

// Your task is to write a function that takes a pyramid representation as argument and returns its' largest 'slide down'. For example:

// * With the input `[[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]`
// * Your function should return `23`.

// function longestSlideDown (pyramid) {
//     let max = pyramid;
 
//      for (let y = pyramid.length-2; y >= 0; y--) {
//          for (let x = 0; x < pyramid[y].length; x++) {
//              max[y][x] = pyramid[y][x] + Math.max(...pyramid[y + 1].slice(x, x + 2));
//          }
//      }
 
//      return max[0][0];
//  }

//------------------------------------------------------------------------------------------
// _______
//|8 kyu  |
//|_______|
// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

//const setAlarm = (employed, vacation) => employed === true && vacation === false


//------------------------------------------------------------------------------------------
// _______
//|4 kyu  |
//|_______|
// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// * For seconds = 62, your function should return 
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

// function formatDuration (seconds) {
//   var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
//       res = [];

//   if (seconds === 0) return 'now';
  
//   for (var key in time) {
//     if (seconds >= time[key]) {
//       var val = Math.floor(seconds/time[key]);
//       res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
//       seconds = seconds % time[key];
//     }
//   }
 
//   return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
// }


  
// console.log(formatDuration(1));
// console.log(formatDuration(62));
// console.log(formatDuration(120));
// console.log(formatDuration(3600));
// console.log(formatDuration(3662));

// function stripunit(num){
//     return num / (num * 0 + 1);
// };

// function rem(num){
//     return (stripunit(num) / 16) * 1;
// };

// console.log(rem(96))





