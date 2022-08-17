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
function binarySearch(arary, item){
    let start    = 0,
        end      = array.length,
        middle   = 0,
        isFound  = false;

    while(!isFound && start <= end){
        middle = Math.floor((start + end) / 2)

        if(array[middle] === item){
            return middle;
        }

        if(item > array[middle]){
            start = middle + 1;
        }else{
            end   = middle - 1
        }
    }

    return -1
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

function recursiveBinarySearch(array, item, start, end){
    let middle = Math.floor((start + end) / 2)

    if(item === array[middle]){
        return middle
    }

    if(item < array[middle]){
        return recursiveBinarySearch(array, item, 0, middle - 1)
    }else{
        return recursiveBinarySearch(array, item, middle + 1, end)
    }
}

console.log(binarySearch(array, 6))
console.log(recursiveBinarySearch(array, 6, 0, array.length))

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

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i
        for (let j = i+1; j < array.length; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j
            }
        }
        let tmp = array[i]
        array[i] = array[indexMin]
        array[indexMin] = tmp
    }
    return array
}

console.log(selectionSort(arrForSort))

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

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j + 1] < array[j]) {
                let tmp = array[j]
                array[j] = array[j+1]
                array[j+1] = tmp
            }
        }
    }
    return array
}

console.log(bubbleSort(arrForSort)) 


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

function quickSort(array) {
    if (array.length <= 1) {
        return array
    }
    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex]
    let less = []
    let greater = []
    for (let i = 0; i < array.length; i++) {
        if(i === pivotIndex)
            continue
        if (array[i] < pivot) {
            less.push(array[i])
        } else {
            greater.push(array[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort(arrForSort))

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

const graph = {}
graph.a = ['b', 'c']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']

function breadthSearch(graph, start, end) {
    let queue = []
    queue.push(start)
    while (queue.length > 0) {
        const current = queue.shift()
        if (!graph[current]) {
            graph[current] = []
        }
        if (graph[current].includes(end)) {
            return true
        } else {
            queue = [...queue, ...graph[current]]
        }
    }
    return false
}

console.log(breadthSearch(graph, 'a', 'e'))

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

const _graph = {}
_graph.a = {b: 2, c: 1}
_graph.b = {f: 7}
_graph.c = {d: 5, e: 2}
_graph.d = {f: 2}
_graph.e = {f: 1}
_graph.f = {g: 1}
_graph.g = {}

function shortPath(graph, start, end) {
    const costs = {}
    const processed = []
    let neighbors = {}
    Object.keys(graph).forEach(node => {
        if (node !== start) {
            let value = graph[start][node]
            costs[node] = value || 100000000
        }
    })
    let node = findNodeLowestCost(costs, processed)
    while (node) {
        const cost = costs[node]
        neighbors = graph[node]
        Object.keys(neighbors).forEach(neighbor => {
            let newCost = cost + neighbors[neighbor]
            if (newCost < costs[neighbor]) {
                costs[neighbor] = newCost
            }
        })
        processed.push(node)
        node = findNodeLowestCost(costs, processed)
    }
    return costs
}


function findNodeLowestCost(costs, processed) {
    let lowestCost = 100000000
    let lowestNode;
    Object.keys(costs).forEach(node => {
        let cost = costs[node]
        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost
            lowestNode = node
        }
    })
    return lowestNode
}

console.log(shortPath(_graph, 'a', 'g'));

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

function cashFunction(fn) {
    const cash = {}
    return function (n) {
        if (cash[n]) {
            console.log('Взято из кеша', cash[n])
            return cash[n]
        }
        let result = fn(n)
        console.log('Посчитала функция = ', result)
        cash[n] = result
        return result;
    };
}

function factorial(n) {
    let result = 1
    while (n != 1) {
        result *= n
        n -= 1
    }
    return result
}

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

class LinkedList {
    constructor() {
        this.size = 0
        this.root = null
    }

    add(value) {
        if (this.size === 0) {
            this.root = new Node(value);
            this.size += 1;
            return true;
        }
        let node = this.root
        while (node.next) {
            node = node.next
        }
        let newNode = new Node(value)
        node.next = newNode
        this.size += 1
    }

    getSize() {
        return this.size
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
