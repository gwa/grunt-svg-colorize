# grunt-svg-colorizer

> Creates colorized versions of single color SVGs.


## Getting Started

This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-svg-colorizer --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-svg-colorizer');
```


## svg_colorizer task

*Run this task with the `grunt svg_colorizer` command.*

## Options


### delimiter

Type: `String`
Default: `-`

The delimiter to be used when adding a suffix to a filename


### silent

Type: `Boolean`
Default: `false`

Silences success messages during file processing


### subfolders

Type: `Boolean`
Default: `true`

Places all generated files within a subfolder, where each subfolder is named after its source file.


### basecolor

Type: `String`
Default: `#000000`

The original color used within the SVGs


### colors

Type: `Array` or `Object` or `String`
Default: `{}`

The color(s) the SVGs should be converted to. If an `Array` is given, each value within the array should be a valid hex color; the generated files will be suffixed with the hex code as given. If an `Object` is used, the object's keys should be a color name and its values should be valid hex color; the generated files will be suffixed with the color name. If a `String` is given, the string should be a valid hex code, and the generated files will be suffixed with the hex code as given.


### Examples

In your project's `Gruntfile.js`, add a section named `svg_colorizer` to the data object passed into `grunt.initConfig()`.


**Colorizing SVGs using an `Array` of colors:***

```js
grunt.initConfig({
  svg_colorizer: {
    target: {
      options: {
        basecolor: '#000000',
        colors: [
          '#0000FF', 
          '#00FF00', 
          '#FF0000'
        ]
      },
      files: {
        dest: ['src/**.svg'] // Outputs as `dest/<svg-basename>/<svg-basename>-#0000FF.svg`...
      }
    }
  }
});
```


**Colorizing SVGs using an `Object` of colors:***

```js
grunt.initConfig({
  svg_colorizer: {
    target: {
      options: {
        basecolor: '#000000',
        colors: {
          blue: '#0000FF', 
          green: '#00FF00', 
          red: '#FF0000'
        }
      },
      files: {
        dest: ['src/**.svg'] // Outputs as `dest/<svg-basename>/<svg-basename>-blue.svg`...
      }
    }
  }
});
```


**Colorizing SVGs using a `String` color:***

```js
grunt.initConfig({
  svg_colorizer: {
    target: {
      options: {
        basecolor: '#000000',
        colors: '#0000FF'
      },
      files: {
        dest: ['src/**.svg'] // Outputs as `dest/<svg-basename>/<svg-basename>-#0000FF.svg`
      }
    }
  }
});
```


**Colorizing SVGs in multiple directories:**

```js
grunt.initConfig({
  svg_colorizer: {
    target: {
      options: {
        basecolor: '#000000',
        colors: [
          '#0000FF', 
          '#00FF00', 
          '#FF0000'
        ]
      },
      files: [{
        expand: true,
        cwd: 'src',
        src: ['**/*.svg'],
        dest: 'dest' // Outputs as `dest/<svg-dirname>/<svg-basename>/<svg-basename>-#0000FF.svg`...
      }]
    }
  }
});
```