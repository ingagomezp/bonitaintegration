// Limitar numero de consultas
const rateLimit = require('express-rate-limit');
const express = require('express');
const cors = require('cors');
const timeout = require('connect-timeout');
const { sequelize } = require('./database/connectionPostgresql');
const bodyParser = require('body-parser');
const xmlparser = require('express-xml-bodyparser');
const fs = require('fs');
const helmet = require('helmet');



console.log('Entorno: ' + process.env.NODE_ENV);

const PORT = process.env.PORT || 3000;

const https = require('https');
const http = require('http');
const app = express();


http.createServer(app).listen(PORT, () => {
  console.log(`Sin https - Server listening on port ${PORT}`);
});


app.use(timeout(300000));
// elimina header inseguros
app.use(helmet());

app.use(cors());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000 // limit each IP to 100 requests per windowMs
});

//  apply to all requests
app.use(limiter);

// request payload middleware
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '20mb' }));
app.use(
  bodyParser.urlencoded({
    limit: '20mb',
    extended: true,
    parameterLimit: 50000
  })
);

// ROUTES
app.use('/api/v1', require('./routes/bonita.Routes'));

app.get('/', async (req, res, next) => {
  try {
    // console.log('sequelize:', sequelize);
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  res.send('Out of here!');
});

// error handler middleware
app.use(function (err, req, res, next) {
  // console.error(err.stack); // se comenta ya que da informacion sobre el objeto que hace la verificación
  console.error('Error Handler Middleware: ', err);
  res.status(500).send({
    status: 500,
    message: err.message,
    body: {}
  });
});



