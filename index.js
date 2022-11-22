// utility
function printValue(value){
    console.info(value)
}

// 1.0 FUNCTION DECLARATION
//TODO: create a basic function that adds two random values
function add() {
    const num1 = 4
    const num2 = 20
    printValue(num1 + num2)
}
add()

//TODO: create a function that takes in two values and adds them
function addNums(n1, n2) {
    printValue(n1 + n2)
}
addNums(5, 108)
addNums(13, 18)

//TODO: create a function that takes in two values, adds them and returns the value of the addition
function addNumbers(n1, n2) {
    const sum = n1 + n2
    return sum
}
const summation = addNumbers(45, 37)
console.log(summation)

// 1.0 FUNCTION EXPRESSION
//TODO: create a basic function that adds two random values
const addExp = function () {
    printValue(310 + 50)
}
addExp()

//TODO: create a function that takes in two values and adds them
const addExp2 = function(n1, n2) {
    printValue(n1 + n2)
}
addExp2(5, 5)

//TODO: create a function that takes in two values, adds them and returns the value of the addition
const addExp3 = function(n1, n2) {
    const sum2 = n1 + n2
    return sum2
}
const summation2 = addExp3(55, 10)
printValue(summation2)

// 1.0 ARROW FUNCTION
//TODO: create a basic function that adds two random values
const addAnonymous = () => {
    printValue(60 + 90)
}
addAnonymous()

const sayHello = () => printValue("Hello")
sayHello()
//TODO: create a function that takes in two values and adds them
const addAnonymous2 = (n1, n2) => {
    printValue(n1 + n2)
}
addAnonymous2(12, 10)

//TODO: create a function that takes in two values, adds them and returns the value of the addition
const addAnonymous3 = (n1, n2) => {
    const sum4 = n1 + n2
    return sum4
}
const summation4 = addAnonymous3(10, 10)
printValue(summation4)

