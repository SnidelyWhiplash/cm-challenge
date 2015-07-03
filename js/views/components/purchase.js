define(function (require) {
  var app = require('app')
    , Backbone = require('backbone')
    ;

  var PurchaseView = Backbone.View.extend({
    template: require('hbs!templates/components/purchase'),

    events: {
      'change :radio': 'render',
      'submit form': 'onSubmitForm'
    },

    initialize: function (options) {
      // Re-render on bundle change.
      this.listenTo(app.state, 'change:selectedBundle', this.render);

      Backbone.View.prototype.initialize.apply(this, arguments);
    },

    render: function () {
      // Build props.
      var method = (this.$(':radio:checked').val() || 'cc')
        , props = {
            price: app.state.get('selectedBundle').get('price'),
            method: method,
            methodIsCC: (method === 'cc')
          }
        ;

      // Render template.
      this.$el.html(this.template(props));

      return this;
    },

    onSubmitForm: function (e) {
      e.preventDefault();

      // Just alert with some bundle info on submit.
      var selectedBundle = app.state.get('selectedBundle');
      alert('Purchasing ' + selectedBundle.get('title') + ' for $' + selectedBundle.get('price'));
    }
  });

  return PurchaseView;
});
