var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// watch files for changes and reload
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: 'build',
      tunnel: true
    }
  });

  gulp.watch(['*.html', 'static/css/**/*.css', 'app/**/*.js', 'app/**/*.html'], {cwd: 'build'}, reload);
});