module.exports = function (grunt) {
    grunt.initConfig({
        autoprefixer: {
            dist: {
                files: {
                    'content/css/aim.css': 'content/css/mlj-aim.css'
                }
            }
        },
        watch: {
            styles: {
                files: ['content/css/mlj-aim.css'],
                tasks: ['autoprefixer']
            }
        }
    });
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
};