const express = require('express');
const mysql=require('mysql');
const app = express();
const bodyParser = require("body-parser");


const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));


var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	database:'join_me'
});


// test
// app.listen(3000, function(){
// 	console.log('Server running on 3000');
// });

// route
app.get("/", function(req,results){ // function is the callback
	var q="SELECT COUNT(*) AS count FROM users";
	connection.query(q,function(error,res){
		if (error) throw error;
		var count = res[0].count;
		// console.log(results);
		// res.send("You're one of " + count + " unique users registered in my database");
		results.render("home",{data: count});
	});
});

app.post("/register", function(req,ressults){
	req.body.email
});

app.listen(port, function(){
	console.log('App is listening on port 3000');
});

