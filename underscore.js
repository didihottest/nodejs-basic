const underscore = require('underscore')

var numbers1 = [1, 2, 3, 4, 5, 6];
var numbers2 = [5, 6, 7, 8];
var numbers3 = [9, 10, 11, 12];
var arrNum = [numbers1, numbers2, numbers3]
var objNumber = { num1: 1, num2: 2, num3: 3 }

const resultNumber = underscore.map(numbers1, (num) => {
  return num * 3
})

// console.log(resultNumber);

const genap = (number) => {
  return number % 2 === 0
}

const findGenap = underscore.find(numbers1, genap)
console.log(findGenap);

const filterGenap = underscore.filter(numbers1, genap)
console.log(filterGenap);

let members = [
  { nama: 'Andi', usia: 20 },
  { nama: 'Budi', usia: 30 },
  { nama: 'Aris', usia: 25 },
]

let memberTertua = underscore.max(members, (object) => object.usia)
console.log(memberTertua);

let memberTermuda = underscore.min(members, (object) => object.usia)
console.log(memberTermuda);
