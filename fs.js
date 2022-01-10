const fs = require('fs')

// fs.writeFile('writeFile.txt', "halo kita lagi belajar node js", (err) => {
//   if (err) console.log(err)
// })

// fs.readFile('writeFile.txt', (err, data) => {
//   if (err) console.log(err)
//   // console.log(data.toString())
// })


fs.readFile('writeFile.txt', 'utf-8', (err, data) => {
  if (err) console.log(err)
  console.log(data)
})

//contoh asychronous
// console.log("Helloooooo....")
// fs.appendFile('writeFile.txt', "\nTambahan Kedua", (error) => {
//   if (error) console.log(error)
// })

// fs.rename('rename.txt', 'ganti.txt', (err) => {
//   if (err) throw err;
//   console.log('Rename complete!');
// })
// process.on('uncaughtException', err => {
//   process.exit(1)
// })


// fs.unlink('hapus.txt', (err) => {
//   if (err) console.log(err)
//   else console.log("deleted sucessfully")
// })

// fs.mkdir('folderbaru', (err) => {
//   if (err) console.log(err);
// })

// fs.rmdir('folderbaru', (err) => {
//   if (err) console.log(err);
// })


// fs.stat("writeFile.txt", (error, data) => {
//   if (error) {
//     console.log(error);
//   }
//   else {
//     console.log(data)
//   }
// });

fs.readFile('users.json', 'utf-8', (err, data) => {
  if (err) console.log(err);
  let dataParsed = JSON.parse(data)
  console.log(dataParsed.username);
  console.log(dataParsed.password);
})