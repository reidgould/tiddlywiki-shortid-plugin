
var shortid_package = require('shortid');

var shortid = function() { };

/*
Get a short a short, URL friendly, unique id.
*/
Object.defineProperty(shortid, 'generate', {
  configurable: false,
  enumerable: false,
  // Data descriptor has writable and value. Accessor descriptor has get and set.
  writable: false,
  value: shortid_package.generate
})

exports.shortid = shortid;
