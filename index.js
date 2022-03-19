const express = require("express"); 
const dataFromFunctionJS = require('./functions');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();
const outsideSubtitle = "podtytuł";


app.set('view engine', 'hbs')
app.use('/assets',express.static(path.join(__dirname, './assets')));
app.use('/js',express.static(path.join(__dirname, './js')))

app.get('/', function (req, res) {
  res.render('index',{
    pageTitle: "Zajęcia AFM",
    subTitle: outsideSubtitle,
    example: dataFromFunctionJS.sayHello()                 
  });
  })

  app.get('/', function (req, res) {
    res.render('about',{
      pageTitle: "Zajęcia AFM",
      subTitle: outsideSubtitle,
      example: dataFromFunctionJS.sayHello()                 
    });
    })
// tutaj ustawia sie endpoint czyli przekierowanie w url

app.listen(port, (err) => {
  if (err){ return console.log(`Wystąpił błąd ${err.message}`);}
  return console.log(`serwer działa na porcie ${port}`);
})