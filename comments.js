// Create web server application

// Create express application
var express = require('express');
var app = express();

// Create database connection
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'comments'
});

// Connect to database
connection.connect();

// Create database table
connection.query('CREATE TABLE IF NOT EXISTS comments (id int(11) NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, comment text NOT NULL, PRIMARY KEY (id)) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1', function(err, result) {
  if (err) throw err;
  console.log("Database created");
});

// Create route for comments
app.get('/comments', function(req, res) {
  // Connect to database
  connection.query('SELECT * FROM comments ORDER BY id DESC', function(err, result) {
    if (err) throw err;
    // Send records as a response
    res.send(result);
  });
});

// Create route for comments
app.post('/comments', function(req, res) {
  // Connect to database
  connection.query('INSERT INTO comments SET ?', req.query, function(err, result) {
    if (err) throw err;
    // Send records as a response
    res.send('Record inserted');
  });
});

// Create route for comments
app.put('/comments', function(req, res) {
  // Connect to database
  connection.query('UPDATE comments SET ? WHERE ?', [req.query, {id: req.query.id}], function(err, result) {
    if (err) throw err;
    // Send records as a response
    res.send('Record updated');
  });
});

// Create route for comments
app.delete('/comments', function(req, res) {
  // Connect to database
  connection.query('DELETE FROM comments WHERE ?', {id: req.query.id}, function(err, result) {
    if (err) throw err;
    // Send records as a response
    res.send('Record deleted');
  });
});

// Start web server
app.listen(3000, function() {
  console.log('Server running at http://localhost:3000');
});