const db = require('../../../config/db.js');
const { Keccak } = require('sha3');
var jwt = require('jsonwebtoken');


module.exports = function(app) {

  app.get('/top', function(req, res) {
    db.query("SELECT DISTINCT firstName, lastName, MAX(score) as score FROM heroku_1b3f8f408238da3.scores,heroku_1b3f8f408238da3.users where heroku_1b3f8f408238da3.scores.users_id = heroku_1b3f8f408238da3.users.id GROUP BY firstName ORDER BY MAX(score) DESC", (err,result)=>{
      if(err) {
        console.log(err)
      }
      res.send(result)
    });
  });

  app.get('/user', function(req, res) {
    let user = req.query.user;
    db.query("SELECT firstName, lastName, matchDate, matchTime, score FROM heroku_1b3f8f408238da3.scores,heroku_1b3f8f408238da3.users where heroku_1b3f8f408238da3.scores.users_id = heroku_1b3f8f408238da3.users.id and heroku_1b3f8f408238da3.users.userName = '" + user + "' ORDER BY matchDate DESC", (err,result)=>{
      if(err) {
        console.log(err)
      }
      res.send(result)
    });

  });

  app.get('/pastMatch', function(req, res) {
      let user = req.query.user;
      db.query("SELECT matchDate, matchTime, score FROM heroku_1b3f8f408238da3.scores where userName = '"+ user +"' ORDER BY matchDate DESC LIMIT 10", (err,result)=>{
        if(err) {
          console.log(err)
        }
        res.send(result)
      });

  });

  app.post('/newScore', function(req, res) {
    const username = req.body.userName
    const score = req.body.score
    const date = req.body.date
    const time = req.body.time

    var sql = "INSERT INTO heroku_1b3f8f408238da3.scores (userName, users_id, score, matchDate, matchTime) VALUES ('" + username  + "', (SELECT id from heroku_1b3f8f408238da3.users WHERE userName = '"+ username + "') ," + score + ",'" + date + "','" + time + "');"

    db.query(sql, (err,result)=>{
      if(err) {
        console.log(err)
      }
      res.send(result)
    });
  });

  app.post('/loginUser', function(req, res) {
      console.log("POST login OK!");
      //console.log(req.body);
      const username = req.body.userName;
      const attemptPass = req.body.password;
      //console.log(username);
      //console.log(attemptPass);
      const hash = new Keccak(256);
      db.query("SELECT password FROM heroku_1b3f8f408238da3.users where userName = '"+ username + "'", (err,result)=>{
        if(err) {
          console.log(err)
        }
        pass1 = result[0].password;
        console.log(pass1)
        for(i=65;i++; i<=90){
            console.log(i);
            hash.reset();
            temp = attemptPass + String.fromCharCode(i);
            hash.update(temp);
            temp2 = hash.digest('hex');
            hash.reset();
            console.log(i)
            if(temp2 === pass1){
                console.log("logged in user " + username);
                var token = jwt.sign({
                              verfiedUser: username
                            }, process.env.SECRET, { expiresIn: '1d' });

                res.send({result: "access granted!",
                          userName: username,
                          jwtoken: token
                          });
                return;
            }
            console.log("end of for loop")
        }
        console.log("incorrect password")
        res.send({reset: "access denied"});
      });

  });

  app.post('/signUpUser', function(req, res) {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const userName = req.body.userName
    const password = req.body.password

    var sql = "INSERT INTO heroku_1b3f8f408238da3.users (firstName, lastName, userName, password) VALUES ('" + firstName  + "','"+ lastName + "','" + userName + "','" + password + "');"

    db.query(sql, (err,result)=>{
      if(err) {
        console.log(err)
      }
      var token = jwt.sign({
                    verfiedUser: userName
                  }, process.env.SECRET, { expiresIn: '1d' });

      res.send({result: "access granted!",
                userName: userName,
                jwtoken: token
                });
    });
  });
}
