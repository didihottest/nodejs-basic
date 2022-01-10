// node js vs browser
// 1 node js berjalan di server atau local machine kita
// 2 console.log nya keluar di terminal bukan di browser
// 3 di node js ada varibel global console.log(global) sedangkan di browser ada document
// 4 node js punya modul bawaan, sedangkan browser tidak
// 5 menggunakan require untuk import modul 

// import modulImport from './utils/modulyang di import' 

const os = require('os');
const path = require('path')
const { add, multiply, substract, divide } = require('./math')

const cpuInfo = os.cpus()
// console.log(cpuInfo);

const osType = os.type()
// console.log(osType)

const osVersion = os.version()
// console.log(osVersion);

const osHomedir = os.homedir()
// console.log(osHomedir)

// console.log(__dirname)
// console.log(__filename)

// console.log(path.dirname(__filename))
// console.log(path.basename('./nodejs_vs_browser.txt'))
// console.log(path.extname(__filename))
// console.log(path.parse(__filename))

// cari panggil 1
// console.log(math.add(9, 3))
// console.log(math.divide(9, 3))
// console.log(math.multiply(9, 3))
// console.log(math.substract(9, 3))

// cara 2
console.log(add(9, 3))
console.log(divide(9, 3))
console.log(multiply(9, 3))
console.log(substract(9, 3))