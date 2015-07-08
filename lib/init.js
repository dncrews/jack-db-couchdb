var jack = require('jack-stack');

module.exports = function() {
  if (!jack.db) jack.db = {};

  jack.useBefore('config', 'couchdb', function() {
    jack.db.couch = {
      db: require('./db'),
      session: require('./session'),
      user: require('./user')
    };
  });

};
