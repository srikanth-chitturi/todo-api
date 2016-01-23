
var express = require('express');

var app = express();

var PORT = process.env.PORT || 3000;

var todos = [
	{
		id:1,
		description:'Meet mom for lunch',
		completed:false
	},
	{
		id:2,
		description:'Go to market',
		completed:false
	},
	{
		id:3,
		description:'Deposit money in the bank',
		completed:true
	}
];

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


app.listen(PORT,function(){
	console.log('express listening on port :'+PORT);
});