/**
 * Created by jeremi on 05/11/2015.
 */
/* globals grunt */
module.exports = function (grunt) {
    grunt.initConfig({
       /* sass: {
            dist: {
                files: {
                    'css/lumx.css': 'scss/lumx.scss'
                }
            }
        },
        */

        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'css/lumx.css': 'scss/lumx.scss'
                }
            }
        },
        watch: {
            sass: {
                files: 'scss/**/*.scss',
                tasks: ["sass"],
                options: {
                    livereload: true
                }
            },
            html: {
                files: '**/*.html',
                options: {
                    livereload: true
                }
            },
            js: {
                files: ["app/**/*.js", "app.js", "main.js"],
                options: {
                    livereload: true
                }
            }
        },
        libsass: {
            myTarget: {
                src: 'scss/lumx.scss',
                dest: 'css/lumx.css'
            }
        }
    });

    //grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-sass');
    grunt.registerTask('compile', ['sass']);
    grunt.registerTask('dev', ['sass', 'watch']);
}