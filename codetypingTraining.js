//The purpose of the file - to train blind typing, as well as in the process to repeat a set of different kata, algorithms, rules so many times to type without thinking 


const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
//1)
// function binarySearch(array, item) {
//     let start = 0
//     let end = array.length
//     let middle;
//     let found = false
//     let position = -1
//     while (found === false && start <= end) {        middle = Math.floor((start + end) / 2);
//         if (array[middle] === item) {
//             found = true
//             position = middle
//             return position;
//         }
//         if (item < array[middle]) {
//             end = middle - 1
//         } else {
//             start = middle + 1
//         }
//     }
//     return position;
// }

//2)
// function binarySearch(array, item){
//     let start = 0;
//     let end = array.length;
//     let middle;
//     let found = false; 
//     let position = -1;

//     while(found === false && start <= end){

//         middle = Math.floor((start + end) / 2);

//         if(array[middle] === item){
//             found = true;
//             position = middle;
//             return position;
//         }
//         if(item < array[middle]){
//             end = middle - 1
//         }else{
//             start = middle + 1
//         }
//     }
//     return position;    
// }

//3)
// function binarySearch(array, item){
//     let start    = 0,
//         end      = array.length,
//         middle   = 0,
//         found    = false,
//         position = -1; 
    
//     while(found === false && start <= end){
//         middle = Math.floor((start + end) / 2);

//         if(array[middle] === item){
//             found = true;
//             position = middle;
//             return position
//         }

//         if(item < array[middle]){
//             end = middle - 1
//         }else{
//             start = middle + 1
//         }
//     }

//     return position;
// }


//4)
// function binarySearch(array, item){
//     let start    = 0, 
//         end      = array.length,
//         middle   = 0,
//         isFound  = false;

//     while(!isFound && start <= end){

//         middle = Math.floor((start + end) / 2) 

//         if(array[middle] === item){
//             return middle;
//         }

//         if(item <  array[middle]){
//             end = middle - 1 
//         }else{
//             start = middle + 1
//         }
//     }

//     return -1
// }

//5)
// function binarySearch(arary, item){
//     let start    = 0,
//         end      = array.length,
//         middle   = 0,
//         isFound  = false;

//     while(!isFound && start <= end){
//         middle = Math.floor((start + end) / 2)

//         if(array[middle] === item){
//             return middle;
//         }

//         if(item > array[middle]){
//             start = middle + 1;
//         }else{
//             end   = middle - 1
//         }
//     }

//     return -1
// }

//6)
// function binarySearch(array, item){
//     let isFound = false,
//         end     = array.length,
//         middle  = 0,
//         start   = 0;

//     while(!isFound && start <= end){
//         middle = Math.floor((start + end) / 2)

//         if(array[middle] === item){
//             return middle;
//         }

//         if(item > array[middle]){
//             start = middle + 1
//         }else{
//             end = middle - 1
//         }
//     }

//     return -1
// }

//7)
// function binarySearch(array, item){
//     let start   = 0,
//         end     = array.length,
//         middle  = 0,
//         isFound = false;

//     while(!isFound && start <= end){
//         middle = Math.floor((start + end) / 2)
//         if(array[middle] === item){
//             isFound = true;
//             return middle
//         }

//         if(array[middle] > item){
//             end = array[middle - 1]
//         }else{
//             start = array[middle + 1]
//         }
//     }

//     return isFound
          
// }
//8)
// function binarySearch(array, item){
//     let start = 0,
//         end   = array.length,
//         middle = 0,
//         isFound = false;

//     while(!isFound && start <= end){
//         middle = Math.floor((start + end) / 2)

//         if(array[middle] === item){
//             isFound = true;
//             return middle
//         }

//         if(array[middle] > item){
//             end = middle - 1;
//         }else{
//             start = middle + 1;
//         }
//     }

//     return isFound
// }
//9)
// function binarySearch(array, item){
//     let start   = 0,
//         end     = array.length, 
//         middle  = 0,
//         isFound = false;


//     while(!isFound && start <= end){
//         middle = Math.floor((start + end) / 2)
        
//         if(array[middle] === item){
//             isFound = true;
//             return middle
//         }

//         if(array[middle] > item){
//             end = middle - 1;
//         }else{
//             start = middle + 1;
//         }
//     }

//     return isFound;
// }

//10)
// function binarySearch(array, item){
//     let start   = 0,
//         end     = array.length,
//         middle  = 0, 
//         isFound = false;
    
//     while(!isFound && start <= end){
//         middle = Math.floor((start + end) / 2)

//         if(array[middle] === item){
//             isFound = true;
//             return middle;
//         }

//         if(array[middle] > item){
//             end = middle - 1;
//         }else{
//             start = middle + 1;
//         }
//     }

//     return isFound;
// }

//11)
// function binarySearch(array, item){
//     let start     = 0,
//         end       = array.length,
//         middle    = 0,
//         isFound   = false;

//     while(!isFound && start <= end){
//         middle = Math.floor((start + end) / 2)


//         if(array[middle] === item){
//             isFound = true;
//             return middle;
//         }

//         if(array[middle] > item){
//             end = middle - 1;
//         }else{
//             start = middle + 1;
//         }
//     }

//     return isFound;
// }

//12)
// function binarySearch(array, item){
//     let start     = 0,
//         end       = array.length,
//         middle    = 0,
//         isFound   = false;
    
//     while(!isFound && start <= end){
//         middle = Math.floor((start + end) / 2)

//         if(array[middle] === item){
//             isFound = true;
//             return middle;
//         }

//         if(array[middle] > item){
//             end = middle - 1;
//         }else{
//             start = middle + 1
//         }
//     } 
// }
//13)
// function binarySearch(array, item){
//     let start     = 0,
//         end       = array.length,
//         middle    = 0,
//         isFound   = false;

//     while(!isFound && start <= end){
//         middle = Math.floor((start + end) / 2)

//         if(array[middle] === item){
//             isFound = true;
//             return middle;
//         }

//         if(array[middle] > item){
//             end = middle - 1;
//         }else{
//             start = middle + 1
//         }
//     }
// }
//15)
// function binarySearch(array, item){
//     let start      = 0,
//         end        = array.length,
//         middle     = 0,
//         isFound    = false;
    
//     while(!isFound && start <= end){
//         middle = Math.floor((start + end) / 2)

//         if(array[middle] === item){
//             isFount = true;
//             return middle;
//         }

//         if(array[middle] > item){
//             end = middle - 1
//         }else{
//             start = middle + 1
//         }
//     }
// }
//16)
// function binarySearch(array, item){
//     let start    = 0,
//         end      = array.length,
//         middle   = 0,
//         isFound  = false;

//     while(!isFound && start <= end){
//         middle = Math.floor((start + end) / 2)

//         if(array[middle] === item){
//             isFound = true;
//             return middle;
//         }

//         if(array[middle] > item){
//             end = middle - 1
//         }else{
//             start = middle + 1
//         }
//     }
// }
//17)
function binarySearch(array, item){
    let start    = 0,
        end      = array.length,
        middle   = 0,
        isFound  = false;

    while(!isFound && start <= end){
        middle = Math.floor((start + end) / 2)

        if(array[middle] === item){
            isFound = true;
            return middle;
        }

        if(array[middle] > item){
            end = middle - 1;
        }else{
            start = middle + 1;
        }
    }
}

//1)
// function recursiveBinarySearch(array, item, start, end) {
//     let middle = Math.floor((start + end) / 2);    if (item === array[middle]) {
//         return middle
//     }
//     if (item < array[middle]) {
//         return recursiveBinarySearch(array, item, 0, middle - 1 )
//     } else {
//         return recursiveBinarySearch(array, item, middle + 1, end )
//     }
// }

//2)
// function recursiveBinarySearch(array, item, start, end) {
//     let middle = Math.floor((start + end) / 2)

//     if(item === array[middle]){
//         return middle
//     }

//     if(item < array[middle]){
//         return recursiveBinarySearch(array, item, 0, middle - 1)
//     }else{
//         return recursiveBinarySearch(array, item, middle + 1, end)
//     }
// }

//3)

// function recursiveBinarySearch(array, item, start, end){
//     let middle = Math.floor((start + end) / 2)

//     if(item === array[middle]){
//         return middle
//     }

//     if(item < array[middle]){
//         return recursiveBinarySearch(array, item, 0, middle - 1)
//     }else{
//         return recursiveBinarySearch(array, item, middle + 1, end)
//     }
// }

//4) 

// function recursiveBinarySearch(array, item, start, end){
//     let middle = Math.floor((start + end) / 2)

//     if(item === array[middle]){
//         return middle
//     }

//     if(item < array[middle]){
//         return recursiveBinarySearch(array, item, 0, middle - 1)
//     }else{
//         return recursiveBinarySearch(array, item, middle + 1, end)
//     }
// }

//5) 

// function recursiveBinarySearch(array, item, start, end){
//     let middle = Math.floor((start + end) / 2)

//     if(item === array[middle]){
//         return middle
//     }

//     if(item < array[middle]){
//         return recursiveBinarySearch(array, item, 0, middle - 1)
//     }else{
//         return recursiveBinarySearch(array, item, middle + 1, end)
//     }
// }

//6)
// function recursiveBinarySearch(array, item, start, end){
//     let middle = Math.floor((start + end) / 2)

//     if(item === array[middle]){
//         return middle
//     }

//     if(item < array[middle]){
//         return recursiveBinarySearch(array, item, 0, middle - 1)
//     }else{
//         return recursiveBinarySearch(array, item, middle + 1, end)
//     }
// }

//7)
// function recursiveBinarySearch(array, item, start, end){
//     let middle = Math.floor((start + end) / 2)

//     if(item === array[middle]){
//         return middle;
//     }

//     if(array[middle] < item){
//         return recursiveBinarySearch(array, item, middle + 1, end)
//     }else{
//         return recursiveBinarySearch(array, item, 0, middle - 1)
//     }
// }

//8)
// function recursiveBinarySearch(array, item, start, end){
//     let middle = Math.floor((start + end) / 2)

//     if(array[middle] === item){
//         return middle
//     }

//     if(array[middle] < item) { 
//         return recursiveBinarySearch(array, item, middle + 1, end)
//     }else{
//         return recursiveBinarySearch(array, item, 0, middle - 1)
//     }
// }

//9)
// function recursiveBinarySearch(array, item, start, end){
//     let middle = Math.floor((start + end) / 2)

//     if(array[middle] === item){
//         return middle;
//     }

//     if(array[middle] < item){
//         return recursiveBinarySearch(array, item, middle + 1, end);
//     }else{
//         return recursiveBinarySearch(array, item, 0, middle - 1)
//     }
// }

//10)
// function recursiveBinarySearch(array, item, start, end){
//     let middle = Math.floor((start + end) / 2)

//     if(array[middle] === item){
//         return middle;
//     }

//     if(array[middle] < item){
//         return recursiveBinarySearch(array, item, middle + 1, end)
//     }else{
//         return recursiveBinarySearch(array, item, 0, middle - 1)
//     }
// }

//11)
// function recursiveBinarySearch(array, item, start, end){
//     let middle = Math.floor((start + end) / 2)

//     if(array[middle] === item){
//         return middle
//     }

//     if(array[middle] < item){
//         return recursiveBinarySearch(array, item, middle + 1, end);
//     }else{
//         return recursiveBinarySearch(array, item, 0, middle - 1);
//     }
// }

//12)
// function recursiveBinarySearch(array, item, start, end){
//     let middle = Math.floor((start + end) / 2)

//     if(array[middle] === item){
//         return middle;
//     }

//     if(array[middle] < item){
//         return recursiveBinarySearch(array, item, middle + 1, end)
//     }else{
//         return recursiveBinarySearch(array, item, 0, middle - 1);
//     }
// }

//13)
// function recursiveBinarySearch(array, item, start, end){
//     let middle = Math.floor((start + end) / 2)

//     if(array[middle] === item){
//         return middle
//     }

//     if(array[middle] < item){
//         return recursiveBinarySearch(array, item, middle + 1, end)
//     }else{
//         return recursiveBinarySearch(array, item, 0, middle - 1)
//     }
// }
//14)
// function recursiveBinarySearch(array, item, start, end){
//     let middle = Math.floor((start + end) / 2)

//     if(array[middle] === item){
//         return middle
//     }

//     if(array[middle] < item){
//         return recursiveBinarySearch(array, item, middle + 1, end)
//     }else{
//         return recursiveBinarySearch(array, item, 0, middle - 1)
//     }

// }
//15)
function recursiveBinarySearch(array, item, start, end){
    let middle = Math.floor((start + end) / 2)

    if(array[middle] === item){
        return middle;
    }

    if(array[middle] < item){
        return recursiveBinarySearch(array, item, middle + 1, end)
    }else{
        return recursiveBinarySearch(array, item, 0, middle - 1)
    }
}

console.log('binarySearch(array, 6) ', binarySearch(array, 6))
console.log('recursiveBinarySearch(array, 6, 0, array.length) ', recursiveBinarySearch(array, 6, 0, array.length))

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------

const arrForSort = [0,3,2,5,6,8,1,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,6,2,35,6,3,32] 


//1)
// function selectionSort(array) {
//     for (let i = 0; i < array.length; i++) {
//         let indexMin = i
//         for (let j = i+1; j < array.length; j++) {
//             if (array[j] < array[indexMin]) {
//                 indexMin = j
//             }
//         }
//         let tmp = array[i]
//         array[i] = array[indexMin]
//         array[indexMin] = tmp
//     }
//     return array
// }

//2)
// function selectionSort(array) {
//     for(let i = 0; i < array.length; i++){
//         let indexMin = i;

//         for(let j = i+1; j < array.length; j++){
//             if(array[j] < array[indexMin]) {
//                 indexMin = j
//             }
//         }

//         let tmp = array[i]
//         array[i] = array[indexMin]
//         array[indexMin] = tmp
//     }
//     return array
// }

//3)
// function selectionSort(array){
//     for(let i = 0; i < array.length; i++){
//         let indexMin = i;

//         for(let j = i + 1; j < array.length; j++){
//             if(array[j] < array[indexMin]){
//                 indexMin = j;
//             }
//         }

//         let tmp = array[i]
//         array[i] = array[indexMin]
//         array[indexMin] = tmp
//     }

//     return array
// }

//4)

// function selectionSort(array){
//     for(let i = 0; i < array.length; i++){
//         let indexMin = i;

//         for(let j = i + 1; j < array.length; j++){
//             if(array[j] < array[indexMin]){
//                 indexMin = j;
//             }
//         }
//         let tmp = array[i];
//         array[i] = array[indexMin]
//         array[indexMin] = tmp
//     }

//     return array
// }

//5)
// function selectionSort(array){
//     for(let i = 0; i < array.length; i++){
//         let indexMin = i;

//         for(let j = i + 1; j < array.length; j++){
//             if(array[j] < array[indexMin]){
//                 indexMin = j;
//             }
//         }

//         let tmp = array[i];
//         array[i] = array[indexMin]
//         array[indexMin] = tmp
//     }

//     return array
// }

//6)
// function selectionSort(array){
//     for(let i = 0; i < array.length; i++){
//         let indexMin = i;

//         for(let j = i + 1; j < array.length; j++){
//             if(array[j] < array[indexMin]){
//                 indexMin = j;
//             }
//         }

//         let tmp = array[i];
//         array[i] = array[indexMin];
//         array[indexMin] = tmp;
//     }

//     return array
// }

//7)
// function selectionSort(array){
//     for(let i = 0; i < array.length; i++){
//         let indexMin = i;

//         for(let j = i + 1; j < array.length; j++){
//             if(array[j] < array[indexMin]){
//                 indexMin = j;
//             }
//         }
//         let tmp = array[i];
//         array[i] = array[indexMin];
//         array[indexMin] = tmp;
//     }

//     return array;
// }

//8)
// function selectionSort(array){
//     for(let i = 0; i < array.length; i++){
//         let indexMin = i;
    
//         for(let j = i + 1; j < array.length; j++){
//             if(array[j] < array[indexMin]){
//                 indexMin = j
//             }
//         }

//         let tmp = array[i];
//         array[i] = array[indexMin];
//         array[indexMin] = tmp;
    
//     }

//     return array
// }
//9)
// function selectionSort(array){
//     for(let i = 0; i < array.length; i++){
//         let indexMin = i;

//         for(let j = i + 1; j < array.length; j++){
//             if(array[j] < array[indexMin]){
//                 indexMin = j;
//             }
//         }

//         let tmp = array[indexMin];
//         array[indexMin] = array[i];
//         array[i] = tmp;
//     }
//     return array;
// }

//10)
// function selectionSort(array){
//     for(let i = 0; i < array.length; i++){
//         let indexMin = i;

//         for(let j = i + 1; j < array.length; j++){
//             if(array[j] < array[indexMin]){
//                 indexMin = j
//             }
//         }

//         let tmp = array[indexMin];
//         array[indexMin] = array[i];
//         array[i] = tmp;
//     }

//     return array;
// }

//11)
// function selectionSort(array){
//     for(let i = 0; i < array.length; i++){
//         let indexMin = i;

//         for(let j = i + 1; j < array.length; j++){
//             if(array[j] < array[indexMin]){
//                 indexMin = j;
//             }
//         }

//         let tmp = array[indexMin];
//         array[indexMin] = array[i];
//         array[i] = tmp;
//     }

//     return array;
// }

//12)
// function selectionSort(array){
//     for(let i = 0; i < array.length; i++){
//         let indexMin = i;

//         for(let j = i + 1; j < array.length; j++){
//             if(array[j] < array[indexMin]){
//                 indexMin = j;
//             }
//         }
//         let tmp = array[indexMin];
//         array[indexMin] = array[i];
//         array[i] = tmp;
        
//     }

//     return array;
// }
//13)
// function selectionSort(array){
//     for(let i = 0; i < array.length; i++){
//         let indexMin = i;

//         for(let j = i + 1; j < array.length; j++){
//             if(array[j] < array[indexMin]){
//                 indexMin = j
//             }
//         }

//         let tmp = array[indexMin];
//         array[indexMin] = array[i];
//         array[i] = tmp;
//     }

//     return array;
// }
//14)
// function selectionSort(array){
//     for(let i = 0; i < array.length; i++){
//         let indexMin = i;

//         for(let j = i + 1; j < array.length; j++){
//             if(array[j] < array[indexMin]){
//                 indexMin = j;
//             }
//         }


//         let tmp = array[indexMin];
//         array[indexMin] = array[i];
//         array[i] = tmp;
//     }

//     return array;
// }
//15)
// function selectionSort(array){
//     for(let i = 0; i < array.length; i++){
//         let indexMin = i;

//         for(let j = i + 1; j < array.length; j++){
//             if(array[j] < array[indexMin]){
//                 indexMin = j;
//             }
//         }

//         let tmp = array[indexMin];
//         array[indexMin] = array[i];
//         array[i] = tmp;
//     }

//     return array;
// }
//16)
function selectionSort(array){
    for(let i = 0; i < array.length; i++){
        let indexMin = i;

        for(let j = i + 1; j < array.length; j++){
            if(array[j] < array[indexMin]){
                indexMin = j;
            }
        }


        let tmp = array[indexMin];
        array[indexMin] = array[i];
        array[i] = tmp;
    }

    return array
}

console.log('selectionSort(arrForSort) ', selectionSort(arrForSort))

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
const arrForSort2 = [0,3,2,5,6,8,1,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,6,2,35,6,3,32] 

//1)
// function bubbleSort(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if (array[j + 1] < array[j]) {
//                 let tmp = array[j]
//                 array[j] = array[j+1]
//                 array[j+1] = tmp
//             }
//         }
//     }
//     return array
// }

//2)
// function bubbleSort(array){
//     for(let i = 0; i < array.length; i++){
//         for(let j = 0; j < array.length; j++){
//             if(array[j+1] < array[j]){
//                 let tmp = array[j]
//                 array[j] = array[j + 1]
//                 array[j+1] = tmp
//             }
//         }
//     }
//     return array;
// }

//3)
// function bubbleSort(array){
//     for(let i = 0; i < array.length; i++){
//         for(let j = 0; j < array.length; j++){
//             if(array[j+1] < array[j]){
//                 let tmp = array[j];
//                 array[j] = array[j+1];
//                 array[j+1] = tmp
//             }
//         }
//     }
//     return array
// }

//4)
// function bubbleSort(array){
//     for(let i = 0; i < array.length; i++){
//         for(let j = 0; j < array.length; j++){
//             if(array[j + 1] < array[j]){
//                 const tmp = array[j + 1]
//                 array[j + 1] = array[j]
//                 array[j] = tmp;
//             }
//         }
//     }

//     return array
// }

//5)
// function bubbleSort(array){
//     for(let i = 0; i < array.length; i++){
//         for(let j = 0; j < array.length; j++){
//             if(array[j + 1] < array[j]){
//                 const tmp = array[j + 1]
//                 array[j + 1] = array[j]
//                 array[j] = tmp;
//             }
//         }
//     }

//     return array
// }
//6)
// function bubbleSort(array){
//     for(let i = 0; i < array.length; i++){
//         for(let j = 0; j < array.length; j++){
//             if(array[j + 1] < array[j]){
//                 const tmp = array[j + 1];
//                 array[j + 1] = array[j];
//                 array[j] = tmp;
//             }
//         }
//     }

//     return array;
// }
//7)
// function bubbleSort(array){
//     for(let i = 0; i < array.length; i++){
//         for(let j = 0; j < array.length; j++){
//             if(array[j+1] < array[j]){
//                 const tmp = array[j + 1];
//                 array[j + 1] = array[j];
//                 array[j] = tmp;
//             }
//         }
//     }

//     return array;
// }
//8)
// function bubbleSort(array){
//     for(let i = 0; i < array.length; i++){
//         for(let j = 0; j < array.length; j++){
//             if(array[j + 1] < array[j]){
//                 const tmp = array[j + 1];
//                 array[j + 1] = array[j];
//                 array[j] = tmp;
//             }
//         }
//     }

//     return array;
// }
//9)
// function bubbleSort(array){
//     for(let i = 0; i < array.length; i++){
//         for(let j = 0; j < array.length; j++){
//             if(array[j + 1] < array[j]){
//                 const tmp = array[j + 1];
//                 array[j + 1] = array[j];
//                 array[j] = tmp;
//             }
//         }
//     }

//     return array
// }
//10)
// function bubbleSort(array){
//     for(let i = 0; i < array.length; i++){
//         for(let j = 0; j < array.length; j++){
//             if(array[j + 1] < array[j]){
//                 const tmp = array[j + 1];
//                 array[j + 1] = array[j];
//                 array[j] = tmp;
//             }
//         }
//     }

//     return array;
// }

//11)
function bubbleSort(array){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(array[j + 1] < array[j]){
                const tmp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = tmp;
            }
        }
    }

    return array;
}

console.log('bubbleSort(arrForSort2) ', bubbleSort(arrForSort2)) 


//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
const arrForSort3 = [0,3,2,5,6,8,1,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,6,2,35,6,3,32] 


//1) 
// function quickSort(array) {
//     if (array.length <= 1) {
//         return array
//     }
//     let pivotIndex = Math.floor(array.length / 2);
//     let pivot = array[pivotIndex]
//     let less = []
//     let greater = []
//     for (let i = 0; i < array.length; i++) {
//         if(i === pivotIndex)
//             continue
//         if (array[i] < pivot) {
//             less.push(array[i])
//         } else {
//             greater.push(array[i])
//         }
//     }
//     return [...quickSort(less), pivot, ...quickSort(greater)]
// }

//2)

// function quickSort(array){
//     if(array.length <= 1){
//         return array
//     }

    // let pivotIndex = Math.floor(array.length / 2);
    // let pivot = array[pivotIndex]
    // let less = [];
    // let greater = []
//     for(let i = 0; i < array.length; i++){
//         if(i === pivotIndex){
//             continue
//         }
//         if(array[i] < pivot){
//             less.push(array[i])
//         }else{
//             greater.push(array[i])
//         }
//     }
//     return [...quickSort(less), pivot, ...quickSort(greater)]
// }

//3)
// function quickSort(array){
//     if(array.length <= 1){
//         return array
//     }

//     let pivotIndex = Math.floor((array.length / 2))
//     let pivot = array[pivotIndex]
//     let greater = [];
//     let less = [];
//     for(let i = 0; i < array.length; i++){
//         if(i === pivotIndex){ 
//             continue
//         }
//         if(array[i] < pivot){
//             less.push(array[i])
//         }else{
//             greater.push(array[i])
//         }
//     }

//     return [...quickSort(less), pivot, ...quickSort(greater)]
// }

//4)

// function quickSort(array){
//     if(array.length <= 1){
//         return array          
//     }                      

//     let pivotIndex = Math.floor(array.length / 2)
//     let pivot = array[pivotIndex]
//     let greater = []
//     let less = []

//     for(let i = 0; i < array.length; i++){
//         if(i === pivotIndex){
//             continue
//         }

//         if(array[i] < pivot){
//             less.push(array[i])
//         }else{
//             greater.push(array[i])
//         }
//     }

//     return [...quickSort(less), pivot, ...quickSort(greater)]
// }

//5)

// function quickSort(array){
//     if(array.length <= 1){
//         return array
//     }

//     const pivotIndex = Math.floor(array.length / 2),
//           pivot     = array[pivotIndex],
//           greater    = [],
//           less       = []

//     for(let i = 0; i < array.length; i++){
//         if(i === pivotIndex) continue
//         if(array[i] < pivot){
//             less.push(array[i])
//         }else{
//             greater.push(array[i])
//         }
//     }

//     return [...quickSort(less), pivot, ...quickSort(greater)]
// }

//6)

// function quickSort(array){
//     if(array.length <= 1){
//         return array      
//     }                     

//     let pivotIndex = Math.floor(array.length / 2),
//           pivot      = array[pivotIndex],
//           greater    = [],
//           less       = []

          
//     for(let i = 0; i < array.length; i++){
//         if(i === pivotIndex) continue
//         if(array[i] < pivot){
//             less.push(array[i])
//         }else{
//             greater.push(array[i])
//         }
//     }

//     return [...quickSort(less), pivot, ...quickSort(greater)]
// }

//7)
// function quickSort(array){
//     if(array.length <= 1){
//         return array
//     }

//     let pivotIndex = Math.floor(array.length / 2),
//         pivot      = array[pivotIndex],
//         greater    = [],
//         less       = [];


//     for(let i = 0; i < array.length; i++){
//         if(i === pivotIndex) continue
//         if(array[i] < pivot){
//             less.push(array[i])
//         }else{
//             greater.push(array[i])
//         }
//     }

//     return [...quickSort(less), pivot, ...quickSort(greater)]
// }
//8)
// function quickSort(array){
//     if(array.length <= 1){
//         return array
//     }

//     let pivotIndex = Math.floor(array.length / 2),
//         pivot      = array[pivotIndex],
//         greater    = [],
//         less       = [];


//     for(let i = 0; i < array.length; i++){
//         if(i === pivotIndex) continue
//         if(array[i] < pivot){
//             less.push(array[i])
//         }else{
//             greater.push(array[i])
//         }
//     }

//     return [...quickSort(less), pivot, ...quickSort(greater)]
// }
//9)
// function quickSort(array){
//     if(array.length <= 1){
//         return array;
//     }

//     let pivotIndex = Math.floor(array.length / 2),
//         pivot      = array[pivotIndex],
//         greater    = [],
//         less       = [];

//     for(let i = 0; i < array.length; i++){
//         if(i === pivotIndex) continue;

//         if(array[i] < pivot){
//             less.push(array[i])
//         }else{
//             greater.push(array[i])
//         }
//     }

//     return [...quickSort(less), pivot, ...quickSort(greater)]
// }
//10)
// function quickSort(array){
//     if(array.length <= 1){
//         return array;
//     }

//     let pivotIndex = Math.floor(array.length / 2),
//         pivot      = array[pivotIndex],
//         greater    = [],
//         less       = [];

//     for(let i = 0; i < array.length; i++){
//         if(i === pivotIndex) continue;

//         if(array[i] < pivot){
//             less.push(array[i])
//         }else{
//             greater.push(array[i])
//         }
//     }

//     return [...quickSort(less), pivot, ...quickSort(greater)]
// }

//11)
function quickSort(array){
    if(array.length <= 1){
        return array;
    }

    let pivotIndex = Math.floor(array.length / 2),
        pivot      = array[pivotIndex],
        greater    = [],
        less       = [];

    for(let i = 0; i < array.length; i++){
        if(i === pivotIndex) continue;

        if(array[i] < pivot){
            less.push(array[i])
        }else{
            greater.push(array[i])
        }
    }

    return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log('quickSort(arrForSort3) ', quickSort(arrForSort3))

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------

//1)
const graph = {}
graph.a = ['b', 'c']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']

//1)
// function breadthSearch(graph, start, end) {
//     let queue = []
//     queue.push(start)
//     while (queue.length > 0) {
//         const current = queue.shift()
//         if (!graph[current]) {
//             graph[current] = []
//         }
//         if (graph[current].includes(end)) {
//             return true
//         } else {
//             queue = [...queue, ...graph[current]]
//         }
//     }
//     return false
// }

//2)
// function breadthSearch(graph, start, end) {
//     let = queue = []
//     queue.push(start)
//     while(queue.length > 0){
//         const current = queue.shift()
//         if(!graph[current]){
//             graph[current] = []
//         }

//         if(graph[current].includes(end)){
//             return true
//         }else{
//             queue = [...queue, ...graph[current]]
//         }
//     }

//     return false;
// }
//3)
// function breadthSearch(graph, start, end) { 
//     let queue = [];
//     queue.push(start)

//     while(queue.length > 0){
//         const current = queue.shift();

//         if(!graph[current]){
//             graph[current] = []
//         }

//         if(graph[current].includes(end)){
//             return true;
//         }else{
//             queue = [...queue, ...graph[current]]
//         }
//     }

//     return false
// }
//4)
// function breadthSearch(graph, start, end){
//     let queue = [];

//     queue.push(start)

//     while(queue.length > 0){
//         const current = queue.shift();

//         if(!graph[current]){
//             graph[current] = []
//         }

//         if(graph[current].includes(end)){
//             return true;
//         }else{
//             queue = [...queue, ...graph[current]]
//         }
//     }

//     return false
// }
 
//5)
// function breadthSearch(graph, start, end){
//     let queue = [];

//     queue.push(start)

//     while(queue.length > 0){
//         const current = queue.shift();
//         if(!graph[current]){
//             graph[current] = []
//         }

//         if(graph[current].includes(end)){
//             return true;
//         }else{
//             queue = [...queue, ...graph[current]]
//         }
//     }

//     return false;
// }

//6)
// function breadthSearch(graph, start, end){
//     let queue = [];

//     queue.push(start)

//     while(queue.length > 0){
//         const current = queue.shift();
//         if(!graph[current]){
//             graph[current] = []
//         }

//         if(graph[current].includes(end)){
//             return true;
//         }else{
//             queue = [...queue, ...graph[current]]
//         }
//     }

//     return false;
// }

//7)
// function breadthSearch(graph, start, end){
//     let queue = [];

//     queue.push(start)

//     while(queue.length > 0){
//         const current = queue.shift();
//         if(!graph[current]){
//             graph[current] = []
//         }

//         if(graph[current].includes(end)){
//             return true;
//         }else{
//             queue = [...queue, ...graph[current]]
//         }
//     }

//     return false;
// }

//8)
// function breadthSearch(graph, start, end){
//     let queue = [];

//     queue.push(start)

//     while(queue.length > 0){
//         const current = queue.shift();

//         if(!graph[current]){
//             graph[current] =[]
//         }

//         if(graph[current].includes(end)){
//             return true;
//         }else{
//             queue = [...queue, ...graph[current]]
//         }
//     }

//     return false;
// }
//9)
// function breadthSearch(graph, start, end){
//     let queue = [];

//     queue.push(start)

//     while(queue.length > 0){
//         const current = queue.shift();

//         if(!graph[current]){
//             graph[current] = []
//         }

//         if(graph[current].includes(end)){
//             return true;
//         }else{
//             queue = [...queue, ...graph[current]]
//         }
//     }

//     return false;
// }
//10
function breadthSearch(graph, start, end){
    let queue = [];

    queue.push(start)

    while(queue.length > 0){
        const current = queue.shift();

        if(!graph[current]){
            grapt[current] = []
        }

        if(graph[current].includes(end)){
            return true;
        }else{
            queue = [...queue, ...graph[current]]
        }
    }

    return false;
}


console.log(`breadthSearch(graph, 'a', 'e') `, breadthSearch(graph, 'a', 'e'))

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------

const tree = [
    {
        v: 5,
        c: [
            {
                v:10,
                c: [
                    {
                        v:11,
                    }
                ]
            },
            {
                v:7,
                c: [
                    {
                        v:5,
                        c: [
                            {
                                v:1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        v: 5,
        c: [
            {
                v:10
            },
            {
                v:15
            }
        ]
    }
]

const recursive = (tree) => {
    let sum = 0;
    tree.forEach(node => {
        sum += node.v
        if(!node.c) {
            return node.v
        }
        sum += recursive(node.c)
    })
    return sum
}

const iteration = (tree) => {
    if (!tree.length) {
        return 0
    }
    let sum = 0
    let stack = []
    tree.forEach(node => stack.push(node));
    while (stack.length) {
        const node = stack.pop()
        sum += node.v
        if (node.c) {
            node.c.forEach(child => stack.push(child))
        }
    }
    return sum
}

console.log(iteration(tree))
console.log(recursive(tree))

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//1)
// function cashFunction(fn) {
//     const cash = {}
//     return function (n) {
//         if (cash[n]) {
//             console.log('Взято из кеша', cash[n])
//             return cash[n]
//         }
//         let result = fn(n)
//         console.log('Посчитала функция = ', result)
//         cash[n] = result
//         return result;
//     };
// }

//2)
// function cashFunction(fn) {
//     const cash = {};

//     return function(n) {
//         if(cash[n]){
//             console.log('Взято из кеша', cash[n])
//             return cash[n]
//         }

//         let result = fn(n)
//         console.log('Посчитала функция = ', result)
//         cash[n] = result;
//         return result;
//     }
// }

//3)

// function cashFunction(fn){
//     const cash = {}

//     return function (n){
//         if(cash[n]){
//             console.log('From cash', cash[n])
//             return cash[n]
//         }

//         let result = fn(n)
//         console.log('calc fn = ', result)
//         cash[n] = result;
//         return result
//     }
// }

//4)

// function cashFunction(fn){
//     const cash = {}

//     return function(n){
//         if(cash[n]){
//             console.log('from cash', cash[n])
//             return cash[n]
//         }

//         let result = fn(n)
//         console.log('calc fn = ', result)
//         cash[n] = result;
//         return result
//     }
// }

//5)
// function cashFunction(fn){
//     const cash = {}

//     return function(n){
//         if(cash[n]){
//             console.log('from cash', cash[n])
//             return cash[n]
//         }

//         let result = fn(n)
//         console.log('calc fn = ', result)
//         cash[n] = result;
//         return result
//     }
// }

//6)
// function cashFunction(fn){
//     const cash = {};

//     return function(n){
//         if(cash[n]){
//             console.log('from cash', cash[n])
//             return cash[n]
//         }

//         let result = fn(n)
//         console.log('calc fn = ', result)
//         cash[n] = result;
//         return result;
//     }
// }
//7)
// function cashFunction(fn){
//     const cash = {}

//     return function(n){
//         if(cash[n]){
//             console.log('from cash', cash[n])
//             return cash[n]
//         }

//         let result = fn(n)
//         console.log('calc fn = ', result)
//         cash[n] = result;
//         return result;
//     }
// }

//8)
// function cashFunction(fn){
//     const cash = {}

//     return function(n){
//         if(cash[n]){
//             console.log('from cash', cash[n])
//             return cash[n]
//         }

//         let result = fn(n);
//         console.log('calc fn = ', result)
//         cash[n] = result;
//         return result;
//     }
// }

//9)
// function cashFunction(fn){
//     const cash = {}

//     return function(n){
//         if(cash[n]){
//             console.log('from cash', cash[n])
//             return cash[n];
//         }

//         let result = fn(n);
//         console.log('calc fn = ', result)
//         cash[n] = result;
//         return result
//     }
// }
//10)
// function cashFunction(fn){
//     const cash = {}

//     return function(n){
//         if(cash[n]){
//             console.log('from cash', cash[n])
//             return cash[n]
//         }

//         let result = fn(n);
//         console.log('calc fn = ', result)
//         cash[n] = result;
//         return result;
//     }
// }
//11)
// function cashFunction(fn){
//     const cash = {};

//     return function(n){
        // if(cash[n]){
        //     console.log('from cash', cash[n])
        //     return cash[n]
        // }

    //     let result = fn(n);
    //     console.log('calc fn = ', result)
    //     cash[n] = result;
    //     return result;
    // }
// }
//12)
function cashFunction(fn){
    const cash = {}

    return function(n){
        if(cash[n]){
            console.log('from cash', cash[n])
            return cash[n]
        }

        let result = fn(n);
        console.log('calc fn = ', result)
        cash[n] = result;
        return result;
    }
}

//1)
// function factorial(n) {
//     let result = 1
//     while (n != 1) {
//         result *= n
//         n -= 1
//     }
//     return result
// }

//2)
// function factorial(n){
//     let result = 1;
//     while(n != 1){
//         result *= n;
//         n -= 1
//     }
//     return result
// }
//3)
//const factorial = (n) => n <= 1? 1: factorial(n - 1) * n
//4)
//const factorial = (n) => n <= 1? 1 : factorial(n - 1) * n;
//5)
//const factorial = (n) => n <= 1? 1: factorial(n - 1) * n;
//6)
//const factorial = (n) => n <= 1? 1: factorial(n -1 ) * n
//7)
//const factorial = (n) => n <= 1? 1 : factorial(n - 1) * n
//8)
//const factorial = (n) => n <= 1? 1: factorial(n - 1) * n;
//9)
const factorial = (n) => n <= 1? 1: factorial(n - 1) * n;
const cashFactorial = cashFunction(factorial)

cashFactorial(5)
cashFactorial(4)
cashFactorial(3)
cashFactorial(4)
cashFactorial(5)
cashFactorial(1)

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//1)
// class LinkedList {
//     constructor() {
//         this.size = 0
//         this.root = null
//     }

    // add(value) {
    //     if (this.size === 0) {
    //         this.root = new Node(value);
    //         this.size += 1;
    //         return true;
    //     }
    //     let node = this.root
    //     while (node.next) {
    //         node = node.next
    //     }
    //     let newNode = new Node(value)
    //     node.next = newNode
    //     this.size += 1
    // }

//     getSize() {
//         return this.size
//     }

//     print() {
//         let result = []
//         let node = this.root
//         while (node) {
//             result.push(node.value)
//             node = node.next
//         }
//         console.log(result);;
//     }
// }
//2)
// class LinkedList{
//     constructor(){
//         this.size = 0;
//         this.root = null;
//     }

//     add(value) {
//         if (this.size === 0) {
//             this.root = new Node(value);
//             this.size += 1;
//             return true;
//         }
//         let node = this.root
//         while (node.next) {
//             node = node.next
//         }
//         let newNode = new Node(value)
//         node.next = newNode
//         this.size += 1
//     }

//     print() {
//         let result = []
//         let node = this.root
//         while (node) {
//             result.push(node.value)
//             node = node.next
//         }
//         console.log(result);;
//     }
// }
//3)
class LinkedList{
    constructor(){
        this.size = 0;
        this.root = null;
    }

    add(value){
        if(this.size === 0){
            this.root = new Node(value);
            this.size += 1;
            return true;
        }
        let node = this.root;
        while(node.next){
            node = node.next
        }
        let newNode = new Node(value)
        node.next = newNode
        this.size += 1
    }

    print() {
        let result = []
        let node = this.root
        while (node) {
            result.push(node.value)
            node = node.next
        }
        console.log(result);;
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

const list = new LinkedList()
list.add(5)
list.add(3)
list.add(2)
list.add(5)
list.add(7)

list.print()

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------


                                                                    
