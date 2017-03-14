var express=require('express');
var app=express();

app.get('/', function(req, res){
res.send('this is output from node js');
});

app.listen(process.env.PORT || 2030, function(){
  console.log('server is running...!');
});