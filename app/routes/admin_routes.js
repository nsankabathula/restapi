module.exports = function(app, db) {

    app.get('/server', (req, res) => {
        // Fetch notes and send here.
        res.send('GET SERVER status');
      });
                
    app.delete('/server', (req, res) => {
        // Delete note here.
        console.log('APP: ', app);
        
        res.send('SHUTDOWN - ' + Date.now().toLocaleString());
        app.shutdown();
        
    });      
};