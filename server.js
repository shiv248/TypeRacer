const express = require('express')
const helmet = require('helmet')
const path = require("path")
const chalk = require("chalk")
//const routes = require("./src/routes");

const app = express()

console.log(chalk.bold.green(`Starting Express Server`))
const port = process.env.PORT || 7312;
//add securty to our application`
app.use(helmet())

if(process.env.NODE_ENV !== 'production'){
  const morgan = require('morgan')
  //superficial logging
  app.use(morgan("tiny"))
}

//Render React Application
app.use(express.static(path.join(__dirname, "/client/build/")));

//wildcard request, if request doesnt fit any predifened ones goes to landing page
app.get('*', (request, response) =>{
    response.sendFile(path.join(__dirname, "/client/build/index.html"));
});

//server listening for any reqests on port
app.listen(port, () =>
    console.log(chalk.bold.white(`Server listening on port `) + chalk.bold.magenta(port))
  );
