/**
 * /db-couchdb/lib/session.js
 *
 * Session CouchDB methods
 */

var Promise = Promise || require('bluebird');

var db = require('./db').use('solar_session');


exports.get = function(token, cb) {
  return new Promise(function(resolve, reject) {
    db.get(token, response('session find', cb, resolve, reject));
  });
};

exports.create = function(id, expires, cb) {
  var session = {
    uid: id,
    expires: expires
  };

  return new Promise(function(resolve, reject) {
    db.insert(session, response('session create', cb, resolve, reject));
  });
};

exports.delete = function(session, cb) {
  return new Promise(function(resolve, reject) {
    db.destroy(session._id, session._rev, response('session delete', cb, resolve, reject));
  });
};

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
