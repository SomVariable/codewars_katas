// _______
//|4 kata |
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
//|4 kata |
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
//|7 kata |
//|_______|
//This is a kata series that you can only solve using recursion.
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
//|7 kata |
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
//We will consider a, e, i, o, u as vowels for this Kata (but not y).
//The input string will only consist of lower case letters and/or spaces.


//-----------------------------------------------------------------------------------------------
// _______
//|7 kata |
//|_______|

// const getCount = (str) => (str.match(/a|e|i|o|u/gi) || []).length;
//   console.log(getCount("sfsf"))