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

    concat: {
      options: {
        seperator: ';',
      },
      dist: {
        src: ['./public/client/**/*.js'],
        dest: './public/dist/<%= pkg.name %>.js',
      },
    },

    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n',
      },
      build: {
        files: {
          './public/dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>'],
        },
      },
    },

    cssmin: {
      options: {
        keepSpecialComments: 0,
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n',
      },
      build: {
        files: {
          './public/dist/style.min.css': './public/client/style.css',
        },
      },
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
