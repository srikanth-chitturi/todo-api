
var express = require('express');

var bodyParser = require('body-parser');

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

var todos = [];

var todoNextId = 1;

app.get('/',function  (req,res) {
	res.send('Todo API Root');
});

app.get('/todos',function(req,res){
	res.json(todos);
});

//get /todos/:id
app.get('/todos/:id',function(req,res){

	var id = parseInt(req.params.id,10);
	
	var matchedtoDo;
	
	todos.forEach(function(todo){
		if(todo.id === id){
			matchedtoDo = todo;
		}
	});

	if(matchedtoDo){
		res.json(matchedtoDo);
	}
	else{
		res.status(404).send();
	}
	
});


app.post('/todos',function(req,res){
	var body = req.body;
	body.id = todoNextId++;
	todos.push(body);
	res.json(body);
});

app.listen(PORT,function(){
	console.log('express listening on port :'+PORT);
});