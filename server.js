const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running

app.listen(port, () => console.log(`Server running on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('form', (req, res) => {
  res.sendFile("index.html");
});

app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});