const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3010;

const connection = mysql.createConnection({
  host: 'dt5.ehb.be',
  user: '1920SP2TAKENTRACE',
  password: 'INGn3hY5L',
  database: '1920SP2TAKENTRACE'
})

//connection.connect();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();

});

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

//console.log that your server is up and running
app.listen(port, () => console.log(`Take 'n Trace web server running on port ${port}`));

//create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

/* ----------------
* Packages
* ----------------- */

//GET all packages
app.post('/getPackages', (req, res) => {
  connection.query(
      'SELECT * FROM Packages',
      function(err, results) {
          if(err) {
              res.send(err);
          }
          else {
              console.log(results);
              res.send(results);
          }
      }
  );
});

//GET all package information by ID
app.post('/getPackageById', (req, res) => {
  connection.query(
      'SELECT * FROM Packages WHERE id = ?',
      [req.body.packageid],
      function(err, results) {
          if(err) {
              res.send(err);
          }
          else {
              console.log(results);
              res.send(results);
          }
      }
  );
});

//GET all package information by tracking number
app.post('/getPackageByTrackingNumber', (req, res) => {
  connection.query(
      'SELECT status FROM Packages WHERE trackingnumber = ?',
      [req.body.trackingnumber],
      function(err, results) {
          if(err) {
              res.send(err);
          }
          else {
              console.log(results);
              res.send(results);
          }
      }
  );
});

//Create package
app.post('/createPackage', (req, res) => {
  connection.query(
      'INSERT INTO `Packages` (id, trackingnumber, description, length, height, width, weight, origin, destination, status, type, date, email) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [req.body.trackingnumber, req.body.description, req.body.length, req.body.height, req.body.width, req.body.weight, req.body.origin, req.body.destination, req.body.status, req.body.type, req.body.date, req.body.email],
      function(err, results, fields) {
          if(err){
              res.send(err);
          }
          else{
            console.log(results);
            res.send(results);
          }
      }
  );
});

//Update package
app.post('/updatePackage', (req, res) => {
  connection.query(
      'UPDATE Packages SET id = ?, trackingnumber = ?, description = ?, length = ?, height = ?, width = ?, weight = ?, origin = ?, destination = ?, status = ?, type = ?, date = ?, email = ?)',
      [req.body.trackingnumber, req.body.description, req.body.length, req.body.height, req.body.width, req.body.weight, req.body.origin, req.body.destination, req.body.status, req.body.type, req.body.date, req.body.email],
      function(err, results, fields) {
          if(err){
              res.send(err);
          }
          else{
            console.log(results);
            res.send(results);
          }
      }
  );
});


/* ----------------
* Couriers
* ----------------- */

//GET all couriers
app.post('/getCouriers', (req, res) => {
  connection.query(
      'SELECT * FROM Couriers',
      function(err, results) {
          if(err) {
              res.send(err);
          }
          else {
              console.log(results);
              res.send(results);
          }
      }
  );
});

//GET all courier information by ID
app.post('/getCourierById', (req, res) => {
  connection.query(
      'SELECT * FROM Couriers WHERE id = ?',
      [req.body.courierid],
      function(err, results) {
          if(err) {
              res.send(err);
          }
          else {
              //TODO: GET all data from reports table
              console.log(results);
              res.send(results);
          }
      }
  );
});


/* ----------------
* Invoices
* ----------------- */

//GET all invoices
app.post('/getInvoices', (req, res) => {
  connection.query(
      'SELECT * FROM Invoices',
      function(err, results) {
          if(err) {
              res.send(err);
          }
          else {
              console.log(results);
              res.send(results);
          }
      }
  );
});