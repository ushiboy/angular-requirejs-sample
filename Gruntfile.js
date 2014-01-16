/*global module:false*/
module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    connect : {
      server : {
        options: {
          port: 8888,
          hostname: '*',
          keepalive : true,
          base : './app'
        }
      }
    },
    karma : {
      unit : {
        configFile: 'test/unit/karma.conf.js'
      }
    },
    requirejs : {
      options : {
        baseUrl : 'app/assets/js',
        mainConfigFile : 'app/assets/js/main.js',
        paths : {
          requirejs : '../vendors/requirejs/require'
        },
        include : ['requirejs'],
        optimize : 'none'
      },
      app : {
        options : {
          out : 'app/assets/js/phonecat.js',
          name : 'app'
        }
      }
    }
  });

  // Default task.
  grunt.registerTask('default', [
    'connect:server'
  ]);
  grunt.registerTask('test', [
    'karma:unit'
  ]);
  grunt.registerTask('build', [
    'requirejs'
  ]);
};
