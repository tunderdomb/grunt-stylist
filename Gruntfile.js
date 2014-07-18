module.exports = function ( grunt ){

  grunt.initConfig({
    stylist: {
      extract: {
        options: {
          classes: true,
          ids: true,
          data: true
        },
        expand: true,
        cwd: "test/view/",
        src: "**/*.dust",
        dest: "test/style/",
        ext: ".css"
      }
    }
  })

  grunt.loadTasks("tasks")

  grunt.registerTask("default", "", function(  ){
    console.log("Grunt~~")
    grunt.task.run("stylist")
  })
};