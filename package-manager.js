const moment = require('moment')
const colors = require('colors')
const chalk = require('chalk')
const slug = require('slug')
moment.locale('id')

const jam = moment().format('LT');
// console.log(jam);

const hariTanggalJam = moment().format('LLLL')
// console.log(hariTanggalJam)

const hari = moment().format('dddd')
// console.log(hari);

const tanggalBulanTahun = moment().format('DD MM YYYY hh:mm:ss')
// console.log(tanggalBulanTahun)

const sepuluhHariLalu = moment().subtract(10, 'days').calendar()
console.log(colors.red(sepuluhHariLalu));

const sepuluhBulanLalu = moment().subtract(10, 'months').calendar()
console.log(colors.blue(sepuluhBulanLalu));

const sepuluhMingguLalu = moment().subtract(10, 'weeks').calendar()
console.log(colors.bgGreen.black.underline(sepuluhMingguLalu));


const sepuluhHariKedepan = moment().add(10, 'days').format("DD MM YYYY")
console.log(colors.rainbow(sepuluhHariKedepan));


const jarakTanggal = moment("12-25-1995", "MM-DD-YYYY").add(7, 'days').calendar()
console.log(colors.trap(jarakTanggal));

const dariTanggalKeSekarang = moment("12-25-1995", "MM-DD-YYYY").fromNow()
console.log(dariTanggalKeSekarang.bgYellow.black);

console.log('text log'.bgBlue)

// chalk

console.log(chalk.red('red text'))
console.log(chalk.yellow('Red Text'));
console.log(chalk.keyword('orange')('Orange Text'));
console.log(chalk.rgb(255, 0, 0)('RGB 1'))
console.log(chalk.hex('#750550')('HEX 1'))

// pakai -
console.log(slug("Satgas Nemangkawi yang Buru KKB Papua Berakhir, Diganti Operasi Damai Cartenz",))
// pakai _
console.log(slug("Satgas Nemangkawi yang Buru KKB Papua Berakhir, Diganti Operasi Damai Cartenz", '_'))