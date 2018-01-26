const noteRoutes = require('./note_routes');
const adminRoutes = require('./admin_routes');

module.exports = function(app, db) {
  noteRoutes(app, db);
  adminRoutes(app, db);
  // Other route groups could go here, in the future
};