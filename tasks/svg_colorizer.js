/*
 * grunt-svg-colorizer
 * https://github.com/laurenhamel/grunt-svg-colorizer
 *
 * Copyright (c) 2017 Timothy Groves
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('svg_colorizer', 'colorize single color SVGs.', function() {
    
    // Initialize dependencies.
    const type = require('get-type');
    const path = require('path');
    
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      delimiter: '-',
      basecolor: '#000000',
      colors: {},
      silent: false,
      subfolders: true
    });
    
    // Initialize utility methods.
    const utils = {
      
      hexed: /^\#/,
      
      colorize: ( svg, hex ) => svg.replace(new RegExp(`#${options.basecolor.replace(utils.hexed, '')}`, 'g'), `#${hex.replace(utils.hexed, '')}`),
      
      path: ( basename, color ) => options.subfolders ? `${basename}/${utils.filename(basename, color)}` : utils.filename(basename, color),
      
      filename: ( basename, color ) => `${basename}${options.delimiter}${color}.svg`,
      
      convert( file, src, svg, color, hex ) {
        
        // Get the colorized version of the file.
        const colorized = utils.colorize(svg, hex);

        // Build the file's basename.
        const basename = path.basename(src, '.svg');

        // Generate the new file path.
        const dest = utils.path(basename, color);

        // Save the file.
        utils.save(file, dest, colorized);
        
      },
      
      save ( file, src, data ) {
        
        // Get the destination path.
        const dest = (path.extname(file.dest) ? path.dirname(file.dest) : file.dest).replace(/\/$/, '');
        
        // Save the file.
        grunt.file.write(`${dest}/${src}`, data);
        
        // Log a success message.
        if( !options.silent ) grunt.log.writeln(`File '${src}' created.`);
        
      }
      
    };

    // Iterate over all specified file groups.
    this.files.forEach((file) => {
      
      // Concatenate specified files.
      file.src.filter((src) => {
        
        // Warn about invalid source files, and then ignore them.
        if ( !grunt.file.exists(src) ) {
          
          grunt.log.warn(`Source file '${src}' not found.`);
          
          return false;
          
        }

        // Otherwise, use valid source files.
        return true;
      
      })
      
      // Process each group of files.
      .map((src) => {
      
        // Read the source file.
        const svg = grunt.file.read(src);
        
        // Handle color arrays.
        if( type.isArray(options.colors) ) {
          
          // Convert the SVG to the each color.
          options.colors.forEach((color) => utils.convert(file, src, svg, color, color));
          
        }
        
        // Handle color objects.
        else if( type.isObject(options.colors) ) {
          
          // Convert the SVG to each color.
          for( let color in options.colors ) { utils.convert(file, src, svg, color, options.colors[color]); }
          
        }
        
        // Handle color strings.
        else if( type.isString(options.colors) ) {
          
          // Convert the SVG to the given color.
          utils.convert(file, src, svg, options.colors, options.colors);
          
        }
        
      });

    });
    
  });

};
