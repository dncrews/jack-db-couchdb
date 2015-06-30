/**
 * /plugins/db/couchdb/user.js
 *
 * User CouchDB methods
 */

var Promise = Promise || require('bluebird');

var db = require('./db').use('solar_user');

exports.find = function(id, cb) {
  return new Promise(function(resolve, reject) {
    db.get(id, function(err, body) {
      if (err) {
        if (cb) cb(err);
        return reject(err);
      }

      if (cb) cb(null, body);
      return resolve(body);
    });
  });
};

exports.create = save;
exports.update = save;

function save(user, cb) {
  return new Promise(function(resolve, reject) {
    db.insert(user, user.employeeID, response('user update', cb, resolve, reject));
  });
}


function response(caller, cb, resolve, reject) {

  return function(err, body) {
    if (err) {
      if (cb) cb(err);
      return reject(err);
    }

    if (cb) cb(null, body);
    return resolve(body);
  };

}
