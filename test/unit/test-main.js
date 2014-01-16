!function() {

  var tests = [];
  for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
      if (/Spec\.js$/.test(file)) {
        tests.push(file);
      }
    }
  }

  require.config({
    // Karma serves files from '/base'
    baseUrl: '/base/app/assets/js',

    paths: {
      angular : '../vendors/angular/angular',
      angularRoute: '../vendors/angular-route/angular-route',
      angularResource : '../vendors/angular-resource/angular-resource',
      angularMocks: '../vendors/angular-mocks/angular-mocks'
    },

    shim : {
      angular : {
        exports : 'angular'
      },
      angularRoute: ['angular'],
      angularResource: ['angular'],
      angularMocks: {
        deps:['angular'],
        exports:'angular.mock'
      }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
  });
}();
