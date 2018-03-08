var http = require('http');
const NOT_COMPLETE = '0';
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Original String do not steal!');
}).listen(8080);

var mysql = require('mysql');
console.log("JS has been hit");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "BANANA",
  database: "marcus"
});

var rowCount = "SELECT COUNT(*) AS ROWCOUNT FROM todo;";
var currentRow = 0;

window.addEventListener("click", addTodo);
window.onclick = function addTodo(todoText){

      con.connect(function(err) {
        if (err) throw err;

        con.query(rowCount, function(err, result){
          if(err) throw err;

          currentRow = Number(JSON.stringify(result[0].ROWCOUNT));

          var insert = "insert into todo values (" + currentRow + ", 'drink coffee', " + NOT_COMPLETE + ");";

          con.query(insert, function(err, result){
            if(err) throw err;
            console.log("Result: " + currentRow);
          });

        });

      });

}
