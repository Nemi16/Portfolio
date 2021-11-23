var express = require('express');
var router = express.Router();

/* GET project page. */
router.get('/project', function(req, res, next) {
  res.render('project', {
  });
});
router.get('/', function(req, res, next) {
  res.render('index',{title:'Welcome to the Project Tracker'});
});

module.exports = router;