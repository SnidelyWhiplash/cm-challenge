define(function (require) {
  var app = require('app')
    , Bundles = require('collections/bundles')
    , BundleListView = require('views/bundles/list')
    , PurchaseView = require('views/components/purchase')
    , Payment = require('models/payment')
    ;

  // Respond to app start.
  app.on('start', function () {
    var bundles = new Bundles(app.conf.bundles)
      , defaultBundle = bundles.findWhere({name: app.conf.defaultBundle})
      ;

    // Set default bundle.
    app.state.set('selectedBundle', defaultBundle);

    // Show the bundles collection view.
    var bundleListView = new BundleListView({
      collection: bundles
    });
    $('.bundles').html(bundleListView.render().$el);

    // Show the purchase view.
    var purchaseView = new PurchaseView({
      model: new Payment(app.conf.payment)
    });
    $('.purchase').html(purchaseView.render().$el);
  });

  return app;
});