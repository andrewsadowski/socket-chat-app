var moment = require('moment');

// var date = moment();

// // date.add(100, 'year').subtract(10, 'months');

// console.log(date.format('h:mm a'));

// // 10:35 am
// // 6:01


// // var date = new Date();
// // var months = ['Jan', 'Feb'];
// // console.log(date.getMonth());

// // // var currentTime = new Date();

// // // console.log(currentTime);

new Date().getTime();
var someTimestamp = moment().valueOf();
console.log(someTimestamp);


var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));