var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users',{
    users:[
      {name:'hi users',desc:'so far to get'},
      {name:'happiness',desc:'hands up'}
    ]
  })
});

module.exports = router;
