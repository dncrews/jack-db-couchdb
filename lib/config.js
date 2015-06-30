var configLib = require('config');

var config = {};

if (configLib.has('db.couch')) config = configLib.get('db.couch');

module.exports = {
  url: config.url,
  port: config.port,
  host: config.host,
};
