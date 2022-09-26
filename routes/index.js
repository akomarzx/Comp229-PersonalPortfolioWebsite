var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Homepage' });
});

router.get('/about-me' , (req, res) => {
  res.locals.title = 'About Me'
  res.status(200).render('aboutMeView');
})

module.exports = router;
