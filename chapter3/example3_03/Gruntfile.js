module.exports = function(grunt) {
    // Define the default task
    grunt.registerTask('build', function () {
        console.log('building....')
    });

    grunt.registerTask('test', function () {
        console.log('testing....')
    });

    grunt.registerTask('upload', function () {
        console.log('uploading....')
    });

    grunt.registerTask('deploy', ['build', 'test', 'upload'])
};