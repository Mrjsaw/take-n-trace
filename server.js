//import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// ... other require statements ...
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

// define the Express app
const app = express();

// enhance your app security with Helmet
app.use(helmet());

// use bodyParser to parse application/json content-type
app.use(bodyParser.json());

// enable all CORS requests
app.use(cors());

// log HTTP requests
app.use(morgan('combined'));

const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://dev-gz7srp4h.auth0.com/.well-known/jwks.json`
    }),
  
    audience: 'xRsU1OYDwtxuMaUFXK45ceQ2OdGpP20I',
    issuer: `https://dev-gz7srp4h.auth0.com/`,
    algorithms: ['RS256']
  });

// start the server
app.listen(8081, () => {
  console.log('listening on port 8081');
});