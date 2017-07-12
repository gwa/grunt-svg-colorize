/*
 * grunt-svg-colorize
 * https://github.com/gwa/grunt-svg-colorize
 *
 * Copyright (c) 2017 Timothy Groves
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('svg_colorizer', 'colorize single color SVGs.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      basecolor: '#000',
      colors: []
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        }

        return true;
      }).map(function(filepath) {
        // Read file source.
        var src = grunt.file.read(filepath);

        options.colors.forEach(function(color) {
          var colorized_src = colorize(src, options.basecolor, color),
            filename = filepath.substring(filepath.lastIndexOf('/') + 1),
            newpath = f.dest + '/' + getNewFileName(filename, color);

          grunt.file.write(newpath, colorized_src);
          grunt.log.writeln('File "' + newpath + '" created.');
        });
      });

      // Write the destination file.
      //grunt.file.write(f.dest, src);

      // Print a success message.
    });
  });

};

function getNewFileName(filename, color) {
  return filename.replace('.svg', '-' + color + '.svg');
}

function colorize(svg, basecolor, hexcolor) {
  return svg.replace(new RegExp(basecolor, 'g'), '#' + hexcolor);
}
