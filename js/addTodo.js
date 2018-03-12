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

          var currentRow = Number(JSON.stringify(result[0].ROWCOUNT));
          var userTodo = prompt("What would you like to do?", "Destroy Kalamazoo");

          var insert = "insert into todo values (" + currentRow + ", " + userTodo + ", " + NOT_COMPLETE + ");";

          con.query(insert, function(err, result){
            if(err) throw err;
            console.log("Result: " + currentRow);
          });

        });

      });

}
