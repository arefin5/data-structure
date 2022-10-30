// 
let arr=[1,2,3,45,5]

arr.push(1)
arr.pop()

arr.shift(2)
arr.unshift(222)
console.log(arr)

// finding element fron an   arrey
let arr2=['a','b','c','d']
for (elm of arr2){
    if(elm==='c'){
        console.log(true)
    }
    // if(elm[0]==='a')console.log(elm)
}
// forEach,map ,filter ,reduce, big O(n)