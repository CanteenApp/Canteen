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

    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
        },
        src: ['specs/**/*.js'],
      },
    },

    nodemon: {
      dev: {
        script: 'index.js',
      },
    },

    shell: {
      mongo: {
        command: 'mongod',
        options: {
          async: true,
        },
      },

      prodServer: {
        command: 'git push heroku master',
        options: {
          stdout: true,
          stderr: true,
          failsOnError: true,
        },
      },
    },

    watch: {
      scripts: {
        files: [
          './public/client/**/*.js',
        ],
        tasks: [
          'concat',
          'uglify',
        ],
      },
      css: {
        files: 'public/*.css',
        tasks: ['cssmin'],
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

  // Launch local server, database, and watch for changes on client .js files
  grunt.registerTask('server-dev', function (target) {
    grunt.task.run(['shell:mongo']);

    var nodemon = grunt.util.spawn({
      cmd: 'grunt',
      grunt: true,
      args: 'nodemon',
    });
    nodemon.stdout.pipe(process.stdout);
    nodemon.stderr.pipe(process.stderr);
    grunt.task.run(['watch']);
  });
};
