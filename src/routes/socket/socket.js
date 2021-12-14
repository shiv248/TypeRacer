const chalk = require("chalk")
const port = process.env.PORT || 5050;
//const formatMessage = require('./utils/messages');
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
} = require('./utils/users');


module.exports = function(io) {

    io.on("connection", (socket) => {
      console.log("New client connected");
      socket.on('joinRoom', ([username, room]) => {
        const user = userJoin(socket.id, username, room);
        console.log(user);
        socket.join(user.room);
      });

      socket.on('chatMessage', msg => {
        const user = getCurrentUser(socket.id);
        console.log(user,msg)
        socket.to(user.room).emit('message', [user.username, msg]);
      });

      socket.on('disconnect', () => {
        const user = userLeave(socket.id);
        console.log("Client has Disconnected")
      });
    });

    console.log(chalk.bold.white(`Socket Server listening on port `) + chalk.bold.magenta(port))
}
