module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            options: {
                hostname: '127.0.0.1'
            },
            dev: {
                options: {
                    open: true,
                    port: 3435
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib');


    grunt.registerTask('server', [
        'connect:dev::keepalive'
    ]);

};