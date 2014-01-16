require.config({
  paths : {
    angular : '../vendors/angular/angular',
    angularRoute: '../vendors/angular-route/angular-route',
    angularResource : '../vendors/angular-resource/angular-resource'
  },

  shim : {
    angular : {
      exports : 'angular'
    },
    angularRoute: ['angular'],
    angularResource: ['angular']
  },
  deps: [
    './bootstrap'
  ]
});
