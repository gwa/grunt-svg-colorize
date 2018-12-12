'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.svg_colorize = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(3);

    var actual = grunt.file.read('tmp/cog-333333.svg');
    var expected = grunt.file.read('test/expected/cog-333333.svg');
    test.equal(actual, expected, 'Creates a #333333 cog.');

    var actual = grunt.file.read('tmp/cog-999999.svg');
    var expected = grunt.file.read('test/expected/cog-999999.svg');
    test.equal(actual, expected, 'Creates a #999999 cog.');

    var actual = grunt.file.read('tmp/cog-e5e5e5.svg');
    var expected = grunt.file.read('test/expected/cog-e5e5e5.svg');
    test.equal(actual, expected, 'Creates a #e5e5e5 cog.');

    test.done();
  },
};
