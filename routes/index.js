var express = require('express');
var router = express.Router();

router.get('/classes', function(req, res, next) {
  res.render('WoW_Classes', { current_path: 'classes' });
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('WoW_HomePage', { current_path: 'home' });
});
module.exports = router;
