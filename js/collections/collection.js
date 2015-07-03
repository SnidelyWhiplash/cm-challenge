define(function (require) {
  var Backbone = require('backbone')
    , Model = require('models/model')
    ;

  // Extend from Backbone's Collection.
  var Collection = Backbone.Collection.extend({
    // Use our custom base model by default.
    model: Model
  });

  return Collection;
});