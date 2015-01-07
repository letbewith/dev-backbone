module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    meta:{},
    concat: {
      jquery:{
        src:[
          "src/jquery/jquery-1.10.2.js"
        ],
        dest:"src/Build/lib-jquery.js"
      },
      backbone:{
        src:[
          "node_modules/backbone/node_modules/underscore/underscore.js",
          "node_modules/backbone/backbone.js"],
        dest:"src/Build/lib-backbone.js"
      },
      build: {
        src: [
          "src/build/lib-jquery.js",
          "src/build/lib-backbone.js"
        ],
        dest: "dist/backbone.js"
      }
    },
    uglify: {
            build: {
                src: 'dist/backbone.js',
                dest: 'dist/backbone.min.js'
            }
        }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.registerTask("default", ["concat", 'uglify']);
// run 默认任务

};

