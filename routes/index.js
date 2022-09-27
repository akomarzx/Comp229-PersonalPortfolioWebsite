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

router.get('/projects' , (req, res) => {
  res.locals.title = 'Projects'
  res.status(200).render('projects');
})

router.get('/services' , (req, res) => {
  res.locals.title = 'Services'
  res.status(200).render('services');
})

router.get('/contact-me' , (req, res) => {
  res.locals.title = 'Contact Me'
  res.status(200).render('contactme');
})
module.exports = router;
