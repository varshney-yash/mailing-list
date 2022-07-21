const { faker } = require('@faker-js/faker');
const mysql=require('mysql');

const connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	database:'join_me'
});

// console.log(faker.internet.email());

// console.log(faker.date.past().toString());

// MySQL Node Package

function generateAddress(){
  console.log(faker.address.streetAddress());
  console.log(faker.address.city());
  console.log(faker.address.state());
}

generateAddress();
