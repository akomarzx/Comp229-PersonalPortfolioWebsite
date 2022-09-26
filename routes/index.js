var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Homepage' });
});

router.get('/about-me' , (req, res) => {
  res.locals.title = 'About Me'
  res.send('Hello world')
})

module.exports = router;
