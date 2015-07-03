define(function (require) {
  var app = require('app')
    , Backbone = require('backbone')
    , _ = require('underscore')
    ;

  // Bundle item view.
  var ItemView = Backbone.View.extend({
    tagName: 'li',
    template: require('hbs!templates/bundles/item'),

    events: {
      'click': 'onClickItem'
    },

    initialize: function (options) {
      // Cache options.
      this.options = options;

      Backbone.View.prototype.initialize.apply(this, arguments);
    },

    render: function () {
      // Merge model props with `selected` flag.
      var props = _.extend({}, this.model.toJSON(), {
        selected: this.options.selected
      });

      // Render template.
      this.$el.html(this.template(props));

      return this;
    },

    onClickItem: function (e) {
      e.preventDefault();

      // Update state with selected bundle.
      app.state.set('selectedBundle', this.model);
    }
  });

  return ItemView;
});
