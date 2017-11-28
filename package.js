Package.describe({
  name: 'slayerokk:adminlte-paceloader',
  version: '0.0.1',
  summary: 'Show paceloader berween pages reloads',
  git: 'https://github.com/slayerokk/meteor-adminlte-pace.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.5.1');
  api.addFiles([
        'pace.css',
        'pace.js'
    ], 'client');
});
