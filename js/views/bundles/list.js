define(function (require) {
  var app = require('app')
    , Backbone = require('backbone')
    ;

  // List view for Bundles.
  var ListView = Backbone.View.extend({
    tagName: 'ul',
    className: 'bundles',

    initialize: function () {
      // Re-render on bundle change.
      this.listenTo(app.state, 'change:selectedBundle', this.render);

      Backbone.View.prototype.initialize.apply(this, arguments);
    },

    render: function () {
      var self = this
        , ItemView = require('views/bundles/item')
        ;

      // Empty first.
      this.$el.empty();

      // Loop through collection.
      this.collection.each(function (bundle) {
        var bundleView = new ItemView({
          model: bundle,
          selected: (bundle.get('name') === app.state.get('selectedBundle').get('name'))
        });

        // Append the item view.
        self.$el.append(bundleView.render().$el);
      });

      return this;
    }
  });

  return ListView;
});