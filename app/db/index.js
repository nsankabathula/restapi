const loki = require('lokijs');

module.exports =
function () {
    var db = new loki('./database.json',
    {
        autoload:true,      
        autosave: true, 
        autosaveInterval: 4000,
        serializationMethod:'pretty',
        verbose:true
    }
);
databaseInitialize (db);
return db;
}

function databaseInitialize(db) {    
    if (!db.getCollection("notes")) {
        var notesDb = db.addCollection('notes', {unique: ['title'], indices:['title','description']});
        notesDb.insert([{title:'title-1', description:'description-1'}, {title:'title-2', description:'description-2'}] );
        }
}


