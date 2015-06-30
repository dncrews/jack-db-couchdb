# olympus-db-couchdb
This Olympus Plugin is used to add create `olympus.db.couchdb`.

```js
olympus.loadPlugins([
  require('olympus-db-couchdb')()
]);
```


## Configuration
You can either pass in your configuration:

```js
var olympus = require('olympus');
var couch = require('olympus-db-couchdb');

olympus.use(couch({
  url: '1.1.1.1', // Some IP
  port: '1234' // Some PORT
}));
```

Or you can use `node-config` and set the config variables in your config/ files:

```js
module.exports = {
  db: {
    couch: {
      url: '1.1.1.1', // Some IP
      port: '1234' // Some PORT
    },
  }
};
```


### Options
You can either set the `host` parameter:
```js
couch({
  host: 'https://full:path@to.domain:port'
})
```

or you can use the `url` and `port` options:

```js
couch({
  url: '1.1.1.1', // Some IP
  port: '1234' // Some PORT
});
```

This uses the format: `host = http://{config.url}:{config.port}`
