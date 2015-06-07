Package.describe({
  name: 'czbaker:lightbox2',
  version: '2.7.1',
  // Brief, one-line summary of the package.
  summary: 'Provides the Lightbox2 JS library for Meteor.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/lokesh/lightbox2.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {

    // Requires jQuery as a dependency.
    api.use([
        'jquery'
    ], ['client']);

    // Meteor Version 1.1.0.2+
    api.versionsFrom('1.1.0.2');

    // JS Files
    api.addFiles('js/lightbox.min.js', 'client');

    // CSS Files
    api.addFiles('css/lightbox.css', 'client');

    // Images
    api.addFiles('img/close.png', 'client');
    api.addFiles('img/loading.gif', 'client');
    api.addFiles('img/next.png', 'client');
    api.addFiles('img/prev.png', 'client');

});

