require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const request= require('request')
const apiKey= process.env.APIKEY;
console.log(process.env.APIKEY);


app.set('view engine', 'ejs');

//middleware
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false}));

//GET
app.get('/', function (req, res) {
    res.render('home.ejs', {weather: null, error: null});
});

app.post('/', function (req, res){


  let url= 'http://api.openweathermap.org/data/2.5/weather?q='+ req.body.city + '&units=imperial&APPID=weather?q' + apiKey;

request(url, function (error, response, body) {
  if(error){
    res.render('home.ejs', {weather: null, error: "Error, please try again"})
  } else {
    let weather=(JSON.parse(body));
    if(weather.main == undefined){
      res.render('home.ejs', {weather: null, error: "Error, please try again"})
     } else {
        let weatherNow= "The weather in " + req.body.city + " is" + weather.main.temp + " degrees";
        res.render('home.ejs', {weather: weatherNow, error: null } );
      }
    }
  });
});
app.listen(3000, function(){
    console.log('Server is live on port: 3000');
});