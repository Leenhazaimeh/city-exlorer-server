const express = require('express') // require the express package
const app = express() // initialize your express app instance
const weatherData = require('./assets/data.json');
const axios = require('axios');
require('dotenv').config();

const PORT = process.env.PORT;

const cors = require('cors'); // enable the communication between the frontend and the backend

app.use(cors())
// a server endpoint 



app.get('/weather', (req, res) => {

 const responseData = weatherData.data.map(obj=> new Weather(obj));
 res.json(responseData);
});


// Model
class Weather {
    constructor(weatherData) {
        this.description = weatherData.weather.description;
        this.date = weatherData.valid_date;

    }
}
 
app.listen(PORT,()  => {
  console.log(`Server started on ${PORT}`);
    }); // kick start the express server to work




    // http://localhost:3001/weather?lon=151&lat=-33.87