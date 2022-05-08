const express = require('express');
const bodyParser = require('body-parser');

// Create express app

const app = express();

// Setup the server port

const port = process.env.PORT || 3000;

//Parse request data content type application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({extended: false}));

// Parse request data content type application/json

app.use(bodyParser.json());


// Define root route

app.get('/', (req, res) =>{
    res.send('Hello World');
});

//import employee routes

const employeeRoutes = require('./src/routes/employees.route');

// Create employee routes

app.use('/api/v1/employee', employeeRoutes);

// Listen to the port

app.listen(port, () => {
    console.log(`Express server is running at port ${port}`);
});
