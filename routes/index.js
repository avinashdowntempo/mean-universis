var express= require('express');
var router= express.Router();
 router.get('/',function(request,response){
 response.render('index.html');
 });
  router.get('/login',function(request,response){
 response.render('login.html');
 });
 module.exports= router;