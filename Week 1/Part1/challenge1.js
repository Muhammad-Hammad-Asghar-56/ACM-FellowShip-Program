//      Task 1
let myBoolean=true

let meString='hello world'

let firstNumber=20

let SecondNumber=40
SecondNumber=80

let myArray=[myBoolean,firstNumber]


let myObject={
    'firstProperty':myArray,
    'sumProperty':firstNumber+SecondNumber
}

console.log(myObject)
console.log(myObject['sumProperty'])
console.log(myObject['firstProperty'][0])
