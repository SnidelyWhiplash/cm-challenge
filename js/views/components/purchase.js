define(function (require) {
  var app = require('app')
    , Backbone = require('backbone')
    , _ = require('underscore')
    ;

  var PurchaseView = Backbone.View.extend({
    template: require('hbs!templates/components/purchase'),

    events: {
      'change :radio[name="method"]': 'onChangeMethod',
      'submit form': 'onSubmitForm'
    },

    initialize: function (options) {
      // Re-render on model change.
      this.listenTo(this.model, 'change', this.render);

      // Re-render on bundle change.
      this.listenTo(app.state, 'change:selectedBundle', this.render);

      Backbone.View.prototype.initialize.apply(this, arguments);
    },

    render: function () {
      // Build props.
      var props = _.extend({}, this.model.toJSON(), {
            price: app.state.get('selectedBundle').get('price'),
            methodIsCredit: (this.model.get('method') === 'credit')
          })
        ;

      // Render template.
      this.$el.html(this.template(props));

      return this;
    },

    onChangeMethod: function () {
      this.model.set('method', this.$(':radio:checked').val());
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
