module.exports = function(grunt) {
  grunt.initConfig({
    'gh-pages': {
      options: {
        base: 'public',
        message: 'Updating prototype',
        repo: 'git@github.com:muffinresearch/react-payments-ui-prototype.git'
      },
      src: ['**']
    },
  });
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.registerTask('publish', ['gh-pages']);
};

