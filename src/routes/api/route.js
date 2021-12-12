const db = require('../../../config/db.js');
const { Keccak } = require('sha3');

module.exports = function(app,io) {

  app.get('/top', function(req, res) {
    db.query("SELECT firstName, lastName, score FROM heroku_1b3f8f408238da3.scores,heroku_1b3f8f408238da3.users where heroku_1b3f8f408238da3.scores.users_id = heroku_1b3f8f408238da3.users.id ORDER BY score DESC", (err,result)=>{
      if(err) {
        console.log(err)
      }
      res.send(result)
    });
  });

  app.get('/user', function(req, res) {
      //io.sockets.emit('update'); // how?
      res.json({result: "get user OK!"});

  });

  app.get('/pastMatch', function(req, res) {
      let user = req.query.user;
      db.query("SELECT matchDate, matchTime, score FROM heroku_1b3f8f408238da3.scores where userName = '"+ user +"' ORDER BY matchTime DESC", (err,result)=>{
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
      console.log(req.body);
      const username = req.body.userName;
      const attemptPass = req.body.password;
      console.log(username);
      console.log(attemptPass);
      const hash = new Keccak(256);
      db.query("SELECT password FROM heroku_1b3f8f408238da3.users where userName = '"+ username + "'", (err,result)=>{
        if(err) {
          console.log(err)
        }
        console.log(result);
        pass1 = result[0].password;
        for(i=65;i++; i<=90){
            hash.reset();
            temp = attemptPass + String.fromCharCode(i);
            hash.update(temp);
            temp2 = hash.digest('hex');
            hash.reset();
            if(temp2 === pass1){
                console.log("logged in user " + username);
                res.send({result: "access granted!"});
                return;
            }
        }
        res.send({reset: "access denied"});
      });
      //io.sockets.emit('update'); // how?

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
      res.send(result)
    });
  });
}
