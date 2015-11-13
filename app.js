var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Speaker5"
});

con.connect(function(err){
  if(err){
    console.log('Error connecting to Db: ' + err.stack);
    return;
  }
  console.log('Connection established');
});

con.end(function(err) {
});