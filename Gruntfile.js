module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        force: 'true',
        jshintrc: '.jshintrc',
        ignores: [
          './public/dist/**/*.js',
          './public/client/img/**',
        ],
      },
      build: [
        'Gruntfile.js',
        './public/client/**/*.js',
        './server/**/*.js',
        './specs/**/*.js',
      ],
    },
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-shell');
};
