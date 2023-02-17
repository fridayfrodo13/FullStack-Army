// let names = ['Jhon', 'David', 'Jason', 'Doss', 'Riyan']
// let index = 0
// let name = names[index]

// setInterval(() => {
//   name = names[index++]
//   console.log(name, name.length)
//   if (index === names.length) {
//     index = 0
//   }
// }, 200)

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15, 16, 17, 30,
]

// numbers.forEach(function (_, _, arr) {
//   console.log(arr)
// })

// numbers.forEach(function (value) {
//   if (value % 2 === 1) {
//     console.log(value)
//   }
// })

let sum = 0
numbers.forEach(function (value) {
  sum += value
})
console.log(sum)
