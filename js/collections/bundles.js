define(function (require) {
  var Collection = require('collections/collection')
    , Bundle = require('models/bundle')
    ;

  // Extend from base Collection.
  var Bundles = Collection.extend({
    model: Bundle
  });

  return Bundles;
});