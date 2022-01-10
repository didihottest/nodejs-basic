const lodash = require('lodash')

// console.log(lodash.camelCase("BINAR TEST"))
// console.log(lodash.upperFirst("upperfirst"))
// console.log(lodash.upperCase("uppercase"))
// console.log(lodash.lowerFirst("Lowerfirst"))
// console.log(lodash.lowerCase("BINAR TEST"))

// validasi tipe data

const lokasi = "Jakarta"
let angka = 80
let angka2 = 90


// console.log(lodash.isString(lokasi))

if (lodash.isString(angka)) {
  angka = Number(angka)
}

if (lodash.isNumber(angka)) {
  angka = angka * angka
} else {
  angka = Number(angka)
  angka = angka * angka
}

// console.log(lodash.multiply(2, 2))
// console.log(lodash.add(4, 6))
// console.log(lodash.ceil(99.33))
// console.log(lodash.floor(99.33))

let array = [1, 1, 2, 2, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10]
let names = ['juan', 2, 'harman', 5]

console.log(lodash.isArray(array))
console.log(lodash.uniq(array))
console.log(lodash.max(array))
console.log(lodash.min(array))
console.log(lodash.sum(array))
console.log(lodash.reverse(names))