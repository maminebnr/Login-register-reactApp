var express = require('express');
var router = express.Router();

var users = [
  {
      email:'med@gmail.com',password:'123456'
  }]

/* GET home page. */
router.get('/', function (req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send("welcome back ");
});

router.post('/login', function (req, res) {
   let result =users.find(user => user.email == req.body.email );
   if(result){
     if(result.password == req.body.password){
        res.status(200).send({
          message:"succesuful login "
        })
     }
     else {
      res.status(200).send({
        message:"password incorrect "
      })
     }
   }else {
    res.status(200).send({
      message:"user not found "
    })
   }
});

module.exports = router;
