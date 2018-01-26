module.exports = function(app, db) {

    app.get('/notes', (req, res) => {
        // Fetch notes and send here.
        res.send('GET')
      });
    
    app.get('/notes/:id', (req, res) => {
        // Fetch note and send here.
        res.send('GET:id')
    });

    app.post('/notes', (req, res) => {
        // Create note here.
        res.send('POST')
    });

    app.put('/notes/:id', (req, res) => {
        // Update note here.
        res.send('PUT')
    });      

    app.delete('/notes/:id', (req, res) => {
        // Delete note here.
        res.send('DELETE')
    });      
};