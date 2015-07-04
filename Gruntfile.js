module.exports = function (grunt) {
  grunt.initConfig({
    // Compile LESS and optimize CSS.
    less: {
      all: {
        files: {
          './css/style.css': './less/style.less'
        },
        options: {
          compress: true,
          sourceMap: true,
          sourceMapFilename: './css/style.css.map',
          sourceMapURL: './style.css.map'
        }
      }
    }
  });

  // Load tasks.
  grunt.loadNpmTasks('grunt-contrib-less');

  // Register tasks.
  grunt.registerTask('default', ['less']);
};
