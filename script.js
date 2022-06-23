//kata 4
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


function nextSmaller(n) {
    let cash = String(n).split('');
    const minValue = n - cash.slice(1, cash.length).join('');

    for(let i = n-1; i >= minValue; i--){
        let newNumArray = i.toString().split('');
        let counter = 0;
        for (let j=0; j<newNumArray.length; j++) {
        if (cash.indexOf(newNumArray[j]) < 0)
            break;
        counter++
        cash.splice(cash.indexOf(newNumArray[j]), 1)
        if (counter === cash.length) {
            return i;
        }
        }
        cash = n.toString().split("");
    }
    return -1;
  }

  console.log(nextSmaller(1243))