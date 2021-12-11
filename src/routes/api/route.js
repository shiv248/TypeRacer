const db = require('../../../config/db.js');

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
      console.log("GET user OK!");

      //io.sockets.emit('update'); // how?
      res.json({result: "get user OK!"});

  });

  app.get('/pastMatch', function(req, res) {
      console.log("GET pastMatch OK!");
      let user = req.query.user;
      db.query("SELECT matchDate, matchTime, score FROM heroku_1b3f8f408238da3.scores where userName = '"+ user +"' ORDER BY matchTime DESC", (err,result)=>{
        if(err) {
          console.log(err)
        }
        res.send(result)
      });

  });

  app.post('/newScore', function(req, res) {
    console.log(req.body);
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

  app.post('/login', function(req, res) {
      console.log("POST login OK!");

      //io.sockets.emit('update'); // how?
      res.json({result: "POST login OK!"});

  });

  app.post('/signUp', function(req, res) {
      console.log("post signUp OK!");

      //io.sockets.emit('update'); // how?
      res.json({result: "post signUp OK!"});

  });
}
