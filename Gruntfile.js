/*
 * grunt-svg-colorize
 * https://github.com/gwa/grunt-svg-colorize
 *
 * Copyright (c) 2017 Timothy Groves
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    svg_colorizer: {
      default_options: {
        options: {
          basecolor: '#444',
          colors: ['333333', '999999', 'e5e5e5']
        },
        files: {
          'tmp': ['test/fixtures/svg/**.svg']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'svg_colorizer', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['test']);

};
