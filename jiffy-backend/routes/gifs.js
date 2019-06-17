var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET gifs listing. */
router.get('/', function(req, res, next) {
  console.log('----------')
  console.log(req.query);
  console.log('----------')
  axios.get("https://api.giphy.com/v1/gifs/random?q=&api_key=YFKm5MrOoMTYkX5qrLelkw4VFZfhw2Om&limit=1")
    .then((response) => {
      res.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
});

router.get('/:search', function (req, res, next) {
  console.log('----------')
  console.log(req.params);
  console.log('----------')
  axios.get("https://api.giphy.com/v1/gifs/random?q=&api_key=YFKm5MrOoMTYkX5qrLelkw4VFZfhw2Om&limit=1")
    .then((response) => {
      res.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
});

module.exports = router;
