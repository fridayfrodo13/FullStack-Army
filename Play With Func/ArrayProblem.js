const arr = [1, 2, 3, null, 4, '', 5, 6]
let newArr = []
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'number') {
    newArr.push(arr[i])
  }
}
console.log(newArr)
