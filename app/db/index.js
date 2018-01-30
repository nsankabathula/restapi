const loki = require('lokijs');

module.exports =
function () {
    var db = new loki('./data/database.json',
    {
        autoload:true,      
        autosave: true, 
        autosaveInterval: 4000,
        serializationMethod:'pretty',
        verbose:true        
    });
    
    if (!db.getCollection("notes")) {
        console.warn('Adding NOTES ..');
        var notesDb = db.addCollection('notes', {unique: ['title'], indices:['title','description']});
        notesDb.insert([{title:'title-1', description:'description-1'}, {title:'title-2', description:'description-2'}] );
    }

    console.info('db', db);
    return db;
}



