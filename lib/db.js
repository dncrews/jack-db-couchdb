var util = require('util')
  , nano = require('nano')
  , config = require('./config');

var host = config.host || util.format('http://%s:%s', config.url, config.port);

module.exports = nano(host);
