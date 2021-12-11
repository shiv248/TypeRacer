const db = require('../../../config/db.js');

module.exports = function(app,io) {

  app.get('/top', function(req, res) {
    db.query("SELECT * FROM " + process.env.DB + ".scores", (err,result)=>{
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

      //io.sockets.emit('update'); // how?
      res.json({result: "get pastMatch OK!"});

  });

  app.post('/newScore', function(req, res) {
    const username = req.body.userName
    const score = req.body.score

    var sql = "INSERT INTO heroku_1b3f8f408238da3.scores (userName, users_id, score) VALUES (' " + username  + " ', (SELECT id from heroku_1b3f8f408238da3.users WHERE userName = '"+ username + "') ," + score + ");"

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
