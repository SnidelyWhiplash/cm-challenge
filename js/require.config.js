require.config({
  baseUrl: 'js/',

  paths: {
    // Third-party libs.
    jquery: '../libs/jquery',
    underscore: '../libs/underscore',
    backbone: '../libs/backbone',
    handlebars: '../libs/handlebars',

    // Loaders.
    text: '../libs/require.text',
    hbs: '../libs/require.hbs',

    // Shortcuts.
    templates: '../templates'
  }
});