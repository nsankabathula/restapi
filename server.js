const express        = require('express');
const bodyParser     = require('body-parser');
const loki = require('lokijs');
const app            = express();

const database = require('./app/db');

const port = 8000;




app['shutdown'] = function() {
    console.log("Received kill signal, shutting down gracefully.");
    server.close(function() {
      console.log("Closed out remaining connections.");
      process.exit()
    });
    
     // if after 
     setTimeout(function() {
         console.error("Could not close connections in time, forcefully shutting down");
         process.exit()
    }, 10*1000);
  };

var appDb = database();

app.use(bodyParser.urlencoded({ extended: true }));
require('./app/routes')(app, appDb);

var server = app.listen(port, () => {
  console.log('RestAPI live on port ' + port);  
});

  
  // listen for TERM signal .e.g. kill 
  process.on ('SIGTERM', app.shutdown);
  
  // listen for INT signal e.g. Ctrl-C
  process.on ('SIGINT', app.shutdown);  

