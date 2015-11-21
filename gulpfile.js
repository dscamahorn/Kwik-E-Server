var gulp = require('gulp'),
  connect = require('gulp-connect');

var projectPath = ['./www/*.+(js|html|css)', './www/**/*.+(js|html|css)', './www/**/**/*.+(js|html|css)'];

gulp.task('connect', function() {
  connect.server({
    livereload: true,
    root: 'www'
  });
});

gulp.task('reload', function() {
  gulp.src(projectPath)
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch([projectPath], ['reload']);
});

gulp.task('default', ['connect', 'watch']);
