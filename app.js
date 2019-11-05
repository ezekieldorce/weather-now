const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

//middleware
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false}));

//GET
app.get('/', function (req, res) {
  res.render('home.ejs');
})

app.post('/', function (req, res){
  console.log('Hitting Post Route')
  console.log(req.body.city);
  res.end();
});
 
app.listen(3000, function(){
    console.log('Server is live on port: 3000');
});