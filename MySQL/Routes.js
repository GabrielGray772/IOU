// Connects with MySQL database

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'ioudatabase.cckn61csuwed.eu-west-2.rds.amazonaws.com', // Pulled from MySQL
  user     : 'admin',     // Pulled from MySQL
  password : 'IOU12341',  // Pulled from MySQL
  database : 'I-O-U_group_database' // I-O-U on mySQL server
});

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});



