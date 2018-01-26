const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));


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

require('./app/routes')(app, {});

var server = app.listen(port, () => {
  console.log('RestAPI live on port ' + port);  
});

  
  // listen for TERM signal .e.g. kill 
  process.on ('SIGTERM', app.shutdown);
  
  // listen for INT signal e.g. Ctrl-C
  process.on ('SIGINT', app.shutdown);  

