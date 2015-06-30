
module.exports = function(olympus) {
  if (!olympus.db) olympus.db = {};

  olympus.db.couch = {
    db: require('./db'),
    session: require('./session'),
    user: require('./user')
  };
};
