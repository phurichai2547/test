// practice 1
const studentScores = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 68 },
    { name: 'David', score: 55 },
    { name: 'Eve', score: 78 }
]
// return student who has name equals to david with in casesensitive and score more than 80
const findDavid = studentScores
    .filter((students) => students.name.toLowerCase() === 'david')
    .find((students) => students.score > 80)
console.log(findDavid)

studentScores.find(stu => stu.name.toLowerCase() === 'david' && stu.score > 80)
// return david everyone 

const foundIndex = studentScores.findIndex(
    (student) => student.name.toLowerCase() === 'eve'
)
console.log(foundIndex)

// practice 2 every & some
// return boolean to check whether fruits collection startwiths vowel characters -> [a,e,i,o,u]
const fruits = ['apple', 'mango', 'orange', 'pineapple']

console.log(fruits.every(fruit => {
    console.log(fruit[0]);
    return ['a', 'e', 'i', 'o', 'u'].includes(fruit[0].toLowerCase())
}));

// practice 3 reduce
const fruit = ['apple', 'mango', 'orange', 'pineapple']
// concat with the first character of all fruit
// 'amop'
fruit.reduce((firstChars, fruit) => firstChars.concat(fruit[0]),
    ''
)
console.log(result)
const str = 'apple'
console.log(str.charAt(0))
console.log(str[0])

const nums = [1, 2, 3, 4, 5]  // 1*2*3*4*5
const mulResult = nums.reduce((mul, num) => mul * num)
console.log(mulResult)

// return selling's total prices
const sellProducts = [
    { id: 1, price: 100, sell: 5 },
    { id: 2, price: 50, sell: 2 },
    { id: 3, price: 25, sell: 10 }
]
const result = sellProducts.reduce(   // 1
    (total, product) => total + product.price * product.sell,
    0
)
console.log(result)


const ans4 = sellProducts.reduce((t, { price, sell }) => t + price * sell, 0);
console.log(ans4)

// practice 4 splice
const fruity = ['apple', 'mango', 'orange', 'pineapple', 'banana', 'grape']
// splice with remove
// return an array containing the deleted elements
const removeElements = fruits.splice(1, 2) // ['apple','pineapple','banana','grape']
console.log(removeElements) // ['apple','pineapple','banana','grape']
// splice with add
const deletedElements = fruity.splice(2, 0, 'mango', 'rambutant')
console.log(deletedElements) // []
console.log(fruity) // ['apple', 'mango', 'orange', 'pineapple' , 'banana' , 'grape']
// splice with replace
const deletedFruity = fruity.splice(2, 1, 'mangoteen')
console.log(deletedFruity) // [''mango]


// practice 5 includes
const animals = ['ant', 'dogs', 'cats', 'bird']
const message = 'Practices make perfect'
// string includes - includes substring (case sensitive)
console.log(message.includes('ice')) // true
console.log(message.includes('make')) // true
// array includes - includes string in array elements (case sensitive)
console.log(animals.includes('ats')) // false
console.log(animals.includes('cats')) // true


// practice 6 reverse



// practice 7 sort
const animals = ['ant', 'dogs', 'cats', 'Bird', 'Birds']
const nums = [5, 1, 10, 1000, 2, 3, 50]
const numsza = nums.sort((a, b) => a - b)
console.log(numsza)
// return sorted array by fullname (acsending order)


// practice 8 animals
const animal = ['ant', 'dogs', 'cats','Bird','Birds']
animals.sort()
console.log(animals)
const num = [5,1,10,1000,2,3,50]
num.sort()
console.log(nums) // [1,10,1000,2,3,5,50]

const persons = [
    {id:1 , fullname: 'Susan Jo'},
    {id:3 , fullname: 'John Lee'},
    {id:2 , fullname: 'ann Smith'}
]
// return sorted array by fullname (ascending order and ignore case)
//[ {id: 2, fullname: 'ann smith'}, {id:3 , fullname: 'John Lee'} , {id:1, fullname: 'Susan Jo'},]

// HOMEWORK
// return sorted array by fullname (ascending order and ignore case)

persons.sort((a,b) => {
    return a.fullname.localeCompare(b.fullname)
})

// persons.sort ((a,b) => {
//   if (a.fullname > b.fullname) return -1
//   else return 0
//  })

// localeCompare is same like toCompare in JAVA
console.log(persons)






