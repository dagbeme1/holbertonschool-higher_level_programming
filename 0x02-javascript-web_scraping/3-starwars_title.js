#!/usr/bin/node
const id = process.argv[2];
const url = 'http://swapi.co/api/films/' + id;
const request = require('request');

request(url, function (err, response, body) {
  if (err) {
    console.log(err);
  } else if (response.statusCode === 200) {
    body = JSON.parse(body);
    console.log(body.title);
  } else {
    console.log('Erorr Code:' + response.statusCode);
  }
});
// script that prints the title of a Star Wars movie where the episode number matches a given integer.
// Import request module which is used to make HTTP requests
// Store second arg 'movie ID' into movieID variable
// Check if movieID was provided, if not, print error message
// Store URL w/ movie ID in url variable
// Create request of star wars API to grab movie title
