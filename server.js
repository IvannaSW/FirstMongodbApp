/*const express = require('express');
const bodyParser= require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient
var db

app.set('view engine', 'ejs')

MongoClient.connect('mongodb://IvannaSW:ivano4ka1234@ds127928.mlab.com:27928/first_mongodb', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {quotes: result})
  })
})

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
}) */

const express = require('express');
const bodyParser= require('body-parser')
const pug = require('pug');
const app = express();
const MongoClient = require('mongodb').MongoClient
var db



app.set('views', './views');
app.set('view engine', 'pug');

MongoClient.connect('mongodb://IvannaSW:ivano4ka1234@ds127928.mlab.com:27928/first_mongodb', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  db.collection('data').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('studentlist(1)', {data: result})
  })
})

app.post('/data', (req, res) => {
  db.collection('data').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})


