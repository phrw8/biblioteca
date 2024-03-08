var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', ()=>{
    res.send('rota default')
  });
});


router.get('/exercicios', function(req, res, next) {
    res.render('index',()=>{
        res.send('exercicios')
    });
  });


router.get('/provas', function(req, res, next) {
    res.render('index', ()=>{
        res.send('provas')
    });
  });


router.get('/notas', function(req, res, next) {
    res.render('index', ()=>{
        res.send('notas')
    });
  });

module.exports = router;
