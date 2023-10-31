function op1 (fn) {
    return fn()
}
function op2 (fn) {
    return fn
}
function greeting() {
    return 'Hello'
}

function goodbye() {
    return 'Bye Bye'
}

const result1 = op1(greeting)
console.log(typeof result1) // String
console.log(result1) // 'Hello'
const result2 = op1(greeting) 
console.log(typeof result2) // String
console.log(result2) // 'Bye Bye'
const result3 = op1(greeting)
console.log(typeof result3) // function
console.log(result3) // greeting function
const result4 = op1(greeting)
console.log(typeof result4) // function
console.log(result4) // goodbye function

// ------------------------ //

// function scope & nested fuction
let a=1 // global scope
function x(m) {
    let a = 555 // shadowing // function scope
    let b = 2
    function y(n) {
        let c = 3
        console.log(`a: ${a}, m: ${m}, b:${b}, n: ${n}, c:${c}`)
        function z(o) {
            let d = 4
            console.log(`a: ${a}, m: ${m}, b:${b}, n: ${n}, c:${c}, o: ${o}, d:${d}`)
        }
    }
    console.log(`a: ${a}, m: ${m}, b:${b}`) // a:1 , m:100 , b:2
    return y
}
console.log(`a:${a}`) // a:1
x(100)
y() // cannot access
z() // cannot access
const yfn = x(100)
yfn(888) // a: 555 , 




// ------------------ //
function counter() {
    let count = 1
    function increment() {
        return ++count
    }
    function decrement() {
        return --count
    }
    function getCount() {
        return count
    }
    return getCount
}
const fn = counter()

console.log(typeof fn) // function
console.log(fn) // function
console.log(fn()) // 1





