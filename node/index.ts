var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/post', function(req, res) {

    var todo = addTodo(req.body);
    res.send('Hello World!');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

var rowCount = "SELECT COUNT(*) AS ROWCOUNT FROM todo;";
var currentRow = 0;

function addTodo(todoPayload){

    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "BANANA",
      database: "marcus"
    });

    console.log("******"+console.log(todoPayload)+"******");
      con.connect(function(err) {

        con.query(rowCount, function(err, result){

          currentRow = Number(JSON.stringify(result[0].ROWCOUNT));

          var insert = "insert into todo values (" + currentRow + ", '" + todoPayload.todoInput + "', " + todoPayload.completed + ");";

          con.query(insert, function(err, result){
            if(err)
            console.log("Result: " + currentRow);
          });

        });
      });
}
