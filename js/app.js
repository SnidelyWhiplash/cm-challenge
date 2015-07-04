define(function (require) {
  var Backbone = require('backbone')
    , conf = require('config')
    , _ = require('underscore')
    ;

  var App = _.extend({}, Backbone.Events, {
    // Store conf on app.
    conf: conf,

    // Singleton state model.
    state: new Backbone.Model(),

    // Start event, just emit.
    start: function () {
      this.trigger('start');
    }
  });

  return App;
});