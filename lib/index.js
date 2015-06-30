
var Plugin = require('olympus-plugin');

var force = new Plugin({
  name: 'db/couchdb',
  basePath: __dirname,
});

module.exports = force.export;
