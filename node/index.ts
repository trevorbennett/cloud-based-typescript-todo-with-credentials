var http = require('http');
var util = require('util');
var mysql = require('mysql');

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*'

    });
    res.end('Original String do not steal!');
    var todo = addTodo(req);
}).listen(8080);


var rowCount = "SELECT COUNT(*) AS ROWCOUNT FROM todo;";
var currentRow = 0;

function addTodo(todoPayload){

    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "BANANA",
      database: "marcus"
    });

    console.log("******"+console.log(util.inspect(todoPayload))+"******");
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
