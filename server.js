var express = require('express'),
   path = require('path'),
   mongo = require('mongoose'),
   bodyParser = require('body-parser');

// Connecting with mongo db
var db = mongo.connect("mongodb://localhost:27017/tmdata", function (err, response){
	if (err){console.log(err);}
	else { console.log('Connected to db' + db, '+', response);}
});

// Setting up port with express js
var app = express()
app.use(bodyParser());
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({
   extended: true
}));

app.use (function(req, res, next){
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

var Schema = mongo.Schema;

mongo.model('jobs', new Schema({ jobtitle: String, company: String, state: String, closedate: String }, { collection : 'jobs' }));

var model = mongo.model('jobs');




app.get("/api/getUser", function(req,res){
	model.find({}, function(err,data){
		if(err){
			res.send(err);
		}
		else {
			res.send(data);
		}
	});
})

app.listen(8080, function(){
	
	console.log('App listening on port 8080')
})


