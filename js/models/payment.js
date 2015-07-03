define(function (require) {
  var Model = require('models/model');

  // Extend from base Model.
  var Payment = Model.extend({
    defaults: {
      method: 'credit'
    }
  });

  return Payment;
});