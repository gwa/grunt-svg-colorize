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

## The "svg_colorizer" task

### Overview
In your project's Gruntfile, add a section named `svg_colorizer` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  svg_colorizer: {
    options: {
      // Color used in base SVGs
      basecolor: '#444',
      // Colors to be used in created SVGs
      colors: ['333333', '999999', 'e5e5e5']
    },
    your_target: {
      'dest_dir': ['src/svg/**.svg']
    },
  },
});
```

A string value that is used to do something else with whatever else.

### Usage Examples

See `Gruntfile.js`.
