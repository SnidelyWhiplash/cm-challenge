define(function (require) {
  // App config.
  return {
    // Default bundle.
    defaultBundle: 'most_popular',

    // Bundles.
    bundles: [
      {
        name: 'individual',
        title: 'Individual',
        price: 20
      },
      {
        name: 'professional',
        title: 'Professional',
        price: 50
      },
      {
        name: 'most_popular',
        title: 'Most Popular',
        price: 100,
        bonus: 10
      },
      {
        name: 'best_value',
        title: 'Best Value',
        price: 200,
        bonus: 22
      },
      {
        name: 'big_bonus',
        title: 'Big Bonus',
        price: 500,
        bonus: 60
      }
    ],

    // Payment method (would come from API in real world).
    payment: {
      method: 'credit',
      numbers: [
        '****',
        '****',
        '****',
        '6464'
      ],
      exp: '07/15',
      cvv: 'xxx'
    }
  };
});