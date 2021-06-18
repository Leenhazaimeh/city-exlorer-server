const express = require('express') // require the express package
const app = express() // initialize your express app instance
const data = require('./assets/data.json');
require ('dotenv').config();
const PORT = process.env.PORT;

const cors= require('cors');
app.use(cors())
// a server endpoint 
app.get('/', // our endpoint name
 function (req, res) { // callback function of what we should do with our request
  res.send('Hello World') // our endpoint function response
})

app.get('/about-me',
 (req,res)=>{
    res.send('my name is leen')

});
 

app.get('/wether-data',
 (req,res)=>{
    res.json(data)

});
 
app.listen(PORT,()  => {
  console.log(`Server started on ${PORT}`);
    }); // kick start the express server to work