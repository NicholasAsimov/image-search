'use strict';

require('dotenv').config();
const express = require('express');
const request = require('request');
const MongoClient = require('mongodb').MongoClient;

// Set your api keys in .env file
const CSE_ID = process.env.CSE_ID;
const API_KEY = process.env.API_KEY;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/api/imagesearch/:term', (req, res) => {
  const offset = 10 * (req.query.offset || 1);

  MongoClient.connect(MONGO_URI, (err, db) => {
    if (err) throw err;

    // Adding latest search term to the database
    const latest = db.collection('latest');

    latest.insert({
      term: req.params.term,
      when: new Date()
    }, () => {
      db.close();
    });
  });

  // Getting JSON from Google Custom Search Engine
  const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CSE_ID}` +
  `&searchType=image&fields=items(link,snippet,image(contextLink,thumbnailLink))` +
  `&start=${offset}&q=${req.params.term}`;

  request({
    url,
    json: true
  }, (err, response, body) => {
    if (!err && response.statusCode === 200) {
      res.json(body.items.map(item => (
        {
          url: item.link,
          snippet: item.snippet,
          thumbnail: item.image.thumbnailLink,
          context: item.image.contextLink
        }
      )));
    } else {
      res.json({
        error: "Couldn't retrieve images."
      });
    }
  });
});

app.get('/api/latest/imagesearch/', (req, res) => {
  MongoClient.connect(MONGO_URI, (err, db) => {
    if (err) throw err;

    db.collection('latest').find({}, { _id: false }).toArray((err, results) => {
      res.json(results);
      db.close();
    });
  });
});

app.listen(app.get('port'), () => {
  console.log(`Server is listening on port ${app.get('port')}...`);
});