var moment = require('moment');

var date = moment();
date.add(100, 'year').subtract(9, 'months');
console.log(date.format('MMM Do, YYYY'));


console.log(date.format('h:mm a'));

var createdAt = 1234;
var myDate = moment(createdAt);
console.log(myDate.format('MMM Do, YYYY'));