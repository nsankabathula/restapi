module.exports = function(app, db) {

    //var notesDb = db.addCollection('notes', {unique: ['title'], indices:['title']});
    //notesDb.insert([{tilte:'title-1', description:'description-1'}, {tilte:'title-2', description:'description-2'}] );
    var notesDb = db.getCollection('notes');

    app.get('/notes', (req, res) => {
        // Fetch notes and send here.
        //console.log('DB:', notesDb);
        res.send(notesDb.chain().data());
      });
    
    app.get('/notes/:title', (req, res) => {
        // Fetch note and send here.
        const title = req.params.title;
        var note = notesDb.find({'title': {'$eq':title}});
        //console.log ('Searching for ', title, note);        
        res.send(note)
    });

    app.post('/notes', (req, res) => {
        // Create note here.
        let cnote = Object.assign({title:Date.now().toString(), description: 'Sample Description -' + Date.now().toString()}, req.body);
        if(notesDb.chain().find({'title': cnote.title}).count()>0){
            res.status(400).send('Bad POST Request');
        } 
        else {
            let x = notesDb.insert(cnote);
            res.send(x);
        }
        
    });

    app.put('/notes/:title', (req, res) => {
        // Update note here.s
        const title = req.params.title;        
        let unote = notesDb.findOne({'title': title});

        if(unote){
            unote = Object.assign(unote, req.body, {title:title})
            unote = notesDb.update(unote);
            res.send(unote);
        } 
        else {            
            res.status(400).send('Bad PUT Request');
        }
    });      

    app.delete('/notes/:id', (req, res) => {
        // Delete note here.
        res.send('DELETE')
    });      
};