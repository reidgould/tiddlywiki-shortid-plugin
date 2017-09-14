/*\
title: $:/plugins/reidgould/shortid/shortid-macro.js
type: application/javascript
module-type: macro
Macro to return a short, URL friendly, unique id.
\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Information about this macro
*/

exports.name = "shortid";

exports.params = [
  "prefix"
];

/*
Run the macro
*/
exports.run = function(prefix) {
  let id = $tw.utils.shortid.generate();
  return prefix ? prefix + id : id;
};

})();
