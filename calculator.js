var express = require("express");
var bodyparser = require("body-parser");

var app = express();
app.use(bodyparser.urlencoded({extended:true}));


app.get("/",function(req,res){
res.sendFile(__dirname + "/index.html");
})


app.get("/bmicalculator",function(req,res){
res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/",function(req,res){
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);

  var result = n1+n2;

  res.send("the result of the calculation is result " + result);
})

app.post("/bmicalculator",function(req,res){

  var weight  = Number(req.body.num1);
  var height  = Number(req.body.num2);

  var bmi = weight/(height*height);

  res.send("BMI " + bmi);
})



app.listen(process.env.PORT||3000,function(){
  console.log("the server has started on port 3000");
})
