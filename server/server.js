const express = require('express');
const port = process.env.PORT || 5000;
const path = require('path')

const app = express(); //our app or instance of express

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})

app.use(express.json()); //accept data in json format
app.use(express.urlencoded()); //decode the data sent through html form
//app.use(express.static('public')); //serve our public folder as a static folder

//Express.js requires body-parser middleware to parse form data.
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));


//API Routes
app.get('/form', (req, res) => {

    res.sendFile(path.join(__dirname, '../', 'contact.html'))

})

app.post('/formPost', (req, res) => {
  console.log(req.body); //the data we get is in the body of request
  res.sendFile(path.join(__dirname, '../', 'thanks.html'));
})

//type node app.js in terminal to run server
