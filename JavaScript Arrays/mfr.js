// Map(), Filter(), Reduce() in JavaScript
// Map() - The map() method creates a new array with the results of calling a provided function on every element in the calling array.
// Filter() - The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// Reduce() - The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

let arr = [1, 13, 5 ,7, 11];
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }

let newArr = arr.map((e, index, array)=>{
    return e**2
})

console.log(newArr)
const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(greaterThanSeven))

let arr2 = [1,2,3,4,5,6]

const red = (a, b)=>{
    return a+b
}

console.log(arr2.reduce(red))