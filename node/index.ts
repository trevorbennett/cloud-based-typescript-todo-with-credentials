var http = require('http');
const NOT_COMPLETE = '0';
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Original String do not steal!');
}).listen(8080);

var mysql = require('mysql');


var rowCount = "SELECT COUNT(*) AS ROWCOUNT FROM todo;";
var currentRow = 0;

function addTodo(){



    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "BANANA",
      database: "marcus"
    });


    console.log("function has been hit");
      con.connect(function(err) {
        if (err) throw err;

        con.query(rowCount, function(err, result){
          if(err) throw err;

          currentRow = Number(JSON.stringify(result[0].ROWCOUNT));
          var userTodo = prompt("What would you like to do?", "Destroy Kalamazoo");

          var insert = "insert into todo values (" + currentRow + ", " + userTodo + ", " + NOT_COMPLETE + ");";

          con.query(insert, function(err, result){
            if(err) throw err;
            console.log("Result: " + currentRow);
          });

        });

      });

}
