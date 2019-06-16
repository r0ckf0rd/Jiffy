var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET users listing. */
router.get('/', function(req, res, next) {
  axios.get("https://api.giphy.com/v1/gifs/random?q=&api_key=YFKm5MrOoMTYkX5qrLelkw4VFZfhw2Om&limit=1")
    .then((response) => {
      console.log(response);
      res.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
});

module.exports = router;
