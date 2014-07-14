module.exports = function(grunt) {
    grunt.initConfig({
        foo: {
            ping: {},
            pong: {}
        }
    });
    grunt.registerMultiTask('foo', function (p1, p2) {
        // must be ran with the format foo:{ping,pong}{0,1}
        console.log('target is: ' + this.target);
        console.log('first parameter is: ' + p1);
        console.log('second parameter is: ' + p2);
    });
};