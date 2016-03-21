/**
 * Created by Buttercup & S'more on 3/17/2016.
 */
module.exports = function(grunt){

   // configure main project setting //
    grunt.initConfig({

      pkg: grunt.file.readJSON('package.json'),

      // Name of plugin (plugin name without the 'grunt-contrib)//
      cssmin: {
          combine: {
              files: {
                  'html/css/main.css': ['html/css/main.css']
              }
          }

      }

    });

    //load the plugin
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['cssmin']);

};