const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

//middleware
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false}));

//GET
app.get('/', function (req, res) {
    res.render('home.ejs', {weather: 'coming soon'});
});

app.post('/', function (req, res){
  console.log('Hitting Post Route')
  console.log(req.body.city);
  let weatherNow= "The weather in " + req.body.city + "is 70 C"
  let err= "There was an error, please try again."
  res.render('home.ejs', {weather: weatherNow, error: err});
  });
 
app.listen(3000, function(){
    console.log('Server is live on port: 3000');
});