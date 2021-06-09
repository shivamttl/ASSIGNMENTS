//q1
// const http = require('http');
// var server=http.createServer(function(req,res){
// res.end("Success, I'm listening from port: 3000")
// });
// server.listen(3000);
//
//q2
// const fs = require('fs');
// fs.readFile("readme.txt","utf8",function(error,data){
//     console.log(data);
// });
// Q3

// const fs = require('fs');
// const directory = '../NODEJS/';
// fs.readdir(directory, (err, files) => {
//     files.forEach(file => {
//         console.log(file);
//     });
// });

// OR 

// var fs= require('fs');
// let directory ='../NODEJS/';
// let files = fs.readdirSync(directory);
// console.log(files);

// Q4

// var fs = require('fs');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// rl.question('Write text to be saved ', (answer) => {
//   fs.writeFile('write.txt', answer, function(err){
//     if(err){
//         console.log(err);
//     }
//     console.log('The file was saved!');
// })
//    rl.close();
// });

//q5

// const fs = require("fs");
// var file = fs.readFileSync("readME.txt", "utf8");
// var arr = file.split('\n');
// var count = 0;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i].includes("hello")) {
//         count += 1;
//     }
// }
// console.log("found: "+count);

// 6

// const calculator = require("./calculator");
// let a = 3, b = 7;
// console.log(`The sum of ${a} & ${b} is: ${calculator.sum(a, b)}`);
// console.log(`The multiplication of ${a} & ${b} is: ${calculator.mul(a, b)}`);


// 2nd & 3rd part

// var addition = require('./operations/addition.js');
// var substraction = require('./operations/substraction.js');
// var multiplication = require('./operations/multiplication.js');
// var division = require('./operations/division.js');
// const moment = require('moment');
// a = 3, b = 7;
// console.log(`Today is: ${moment().format('LLLL')}`);
// console.log(`The addition of ${a} and ${b} is: ${addition.add(a, b)}`);
// console.log(`The subtraction of ${a} and ${b} is: ${substraction.sub(a, b)}`);
// console.log(`The multiplication of ${a} and ${b} is: ${multiplication.mul(a, b)}`);
// console.log(`The division of ${a} and ${b} is: ${division.div(a, b)}`);

// 7.

// var strftime = require('strftime'); 
// console.log(strftime('%H:%M:%S'));

// 8.

// const fs = require('fs')
// var count=0;
// var file = fs.readFileSync("num.txt", "utf8");
// var arr = file.split(' ');
// arr = arr.map(x => parseInt(x));
// console.log(`Numbers: ${arr}`);
// for (var i = 0; i < arr.length; i++) {
//          count += arr[i];
// }
// console.log(count);


// 9.

// var fs = require('fs')
// var concat = require('concat-stream')
// fs.readFile('readme.txt', 'utf8', function(err, data) {  
//     if (err) throw err;
//     console.log('The values of the file as an array:');
//     var data = data.split(' ');
//     console.log(data);
// });

// 10. same as 4th

//11.
// var fs = require('fs');
// console.log('Reading the file ');
// fs.readFile('readme.txt', 'utf8', function(err, data) {  
//     if (err) throw err;
//     console.log(data);
// });

// 12.

// let today = new Date();
// console.log(today);

// 13.

// const arguements = process.argv.slice(2);
// const data = arguements.reduce((acc,val) => acc + (val));

// console.log('hello '+data);