const express = require('express');
const router = express.Router();
const path = require('path');

router.use (function (req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/',function(req,res){
  res.sendFile(path.resolve('views/index.html'));
});

router.get('/getitem',function(req,res){
  res.sendFile(path.resolve('views/getitem.html'));
});

module.exports = router;
