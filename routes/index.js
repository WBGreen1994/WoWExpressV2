var express = require('express');
var router = express.Router();

router.get('/resources', function(req, res, next) {
  res.render('WoW_Resources', { current_path: 'resources' });
});
router.get('/addons', function(req, res, next) {
  res.render('WoW_Addons', { current_path: 'addons' });
});
router.get('/classes', function(req, res, next) {
  res.render('WoW_Classes', { current_path: 'classes' });
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('WoW_HomePage', { current_path: 'home' });
});
module.exports = router;
