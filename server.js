const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 3010;

const connection = mysql.createPool({
    connectionLimit: 10,
    host: 'dt5.ehb.be',
    user: '1920SP2TAKENTRACE',
    password: 'INGn3hY5L',
    database: '1920SP2TAKENTRACE'
})

//connection.connect();

app.use(function (req, res, next) {
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

//Help page with all API calls
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/help.html'));
});

//create a GET route
app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

/* ----------------
* Packages
* ----------------- */

//GET all packages
app.get('/getPackages', (req, res) => {
    connection.query(
        'SELECT * FROM Packages',
        function (err, results) {
            if (err) {
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
        function (err, results) {
            if (err) {
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
        'SELECT * FROM Packages WHERE trackingnumber = ?',
        [req.body.trackingnumber],
        function (err, results) {
            if (err) {
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
        'INSERT INTO `Packages` (id, trackingnumber, description, length, height, width, weight, originName, originStreet, originNumber, originZip, originCity, originCountry, destinationName, destinationStreet, destinationNumber, destinationZip, destinationCity, destinationCountry, status, type, date, email) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?)',
        [req.body.trackingnumber, req.body.description, req.body.length, req.body.height, req.body.width, req.body.weight, req.body.originName, req.body.originStreet, req.body.originNumber, req.body.originZip, req.body.originCity, req.body.originCountry, req.body.destinationName, req.body.destinationStreet, req.body.destinationNumber, req.body.destinationZip, req.body.destinationCity, req.body.destinationCountry, "Processing", req.body.type, new Date(), req.body.email],
        function (err, results, fields) {
            if (err) {
                res.send(err);
            }
            else {
                console.log(results);
                res.send(results);
            }
        }
    );
});

//Change status to DELIVERY
app.put('/changeStatusToDeliveryByTn', (req, res) => {
    connection.query(
        'UPDATE Packages SET status = "Delivery" WHERE trackingnumber = ?',
        [req.body.trackingnumber],
        function (err, results, fields) {
            if (err) {
                res.send(err);
            }
            else {
                console.log(results);
                res.send(results);
            }
        }
    );
});

//Change status to DELIVERY
app.put('/changeStatusToDeliveredByTn', (req, res) => {
    connection.query(
        'UPDATE Packages SET status = "Delivered" WHERE trackingnumber = ?',
        [req.body.trackingnumber],
        function (err, results, fields) {
            if (err) {
                res.send(err);
            }
            else {
                console.log(results);
                res.send(results);
            }
        }
    );
});

//Change status to PICKUP
app.put('/changeStatusToPickUpByTn', (req, res) => {
    connection.query(
        'UPDATE Packages SET status = "PickUp" WHERE trackingnumber = ?',
        [req.body.trackingnumber],
        function (err, results, fields) {
            if (err) {
                res.send(err);
            }
            else {
                console.log(results);
                res.send(results);
            }
        }
    );
});

//Insert into reports tabels
app.post('/createReport', (req, res) => {
    connection.query(
        'INSERT INTO `Reports` (courierID, trackingnumber, status, date) VALUES (?, ?, ?, ?)',
        [req.body.courierid, req.body.trackingnumber, req.body.status, new Date()],
        function (err, results, fields) {
            if (err) {
                res.send(err);
            }
            else {
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
app.get('/getCouriers', (req, res) => {
    connection.query(
        'SELECT * FROM Couriers',
        function (err, results) {
            if (err) {
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
        function (err, results) {
            if (err) {
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

//GET courier reports
app.post('/getCourierReports', (req, res) => {
    connection.query(
        'SELECT * FROM Reports WHERE courierID = ?',
        [req.body.courierid],
        function (err, results) {
            if (err) {
                res.send(err);
            }
            else {
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
app.get('/getInvoices', (req, res) => {
    connection.query(
        'SELECT * FROM Invoices',
        function (err, results) {
            if (err) {
                res.send(err);
            }
            else {
                console.log(results);
                res.send(results);
            }
        }
    );
});


/* ----------------
* Statistics
* ----------------- */

//GET total express packages
app.get('/getCountExpress', (req, res) => {
    connection.query(
        'SELECT count(type) AS count FROM Packages WHERE type = "EXPRESS"',
        function (err, results) {
            if (err) {
                res.send(err);
            }
            else {
                console.log(results);
                res.send(results);
            }
        }
    );
});

//GET total economy packages
app.get('/getCountEconomy', (req, res) => {
    connection.query(
        'SELECT count(type) AS count FROM Packages WHERE type = "ECONOMY"',
        function (err, results) {
            if (err) {
                res.send(err);
            }
            else {
                console.log(results);
                res.send(results);
            }
        }
    );
});

//GET total international packages
app.get('/getCountInternational', (req, res) => {
    connection.query(
        'SELECT count(type) AS count FROM Packages WHERE type = "INTERNATIONAL"',
        function (err, results) {
            if (err) {
                res.send(err);
            }
            else {
                console.log(results);
                res.send(results);
            }
        }
    );
});