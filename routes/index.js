var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res)=> {
 res.render('home'); 
})

router.get('/football', (req, res)=> {
  let manu = "Manchester United "
  let chelsea = "Chelsea"
  let arsenal = "Arsenal"
  res.render('bongda',{manu:manu,chelsea:chelsea, arsenal: arsenal});

});

router.get('/interest', (req, res)=> {
  var interest = ["movies", "reading books", "listening to music", "playing games"];
  res.render('interest',{interest: interest})
})


module.exports = router;
