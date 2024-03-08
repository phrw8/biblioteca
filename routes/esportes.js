var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', ()=>{
    res.send('rota default de esportes')
  });
});


router.get('/futebol', function(req, res, next) {
    res.render('index',()=>{
        res.send('rota de futebol')
    });
  });


router.get('/surfe', function(req, res, next) {
    res.render('index', ()=>{
        res.send('surfe rota')
    });
  });


router.get('/volei', function(req, res, next) {
    res.render('index', ()=>{
        res.send('volei rota')
    });
  });

module.exports = router;
