const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const browserSync = require('browser-sync').create();

gulp.task('compile-sass', function () {
  return gulp.src('public/styles/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/styles/css'))
    .pipe(browserSync.stream());
});

gulp.task('serve', gulp.series('compile-sass', function () {
  browserSync.init({
    server: {
      baseDir: './public/',
    },
  });

  gulp.watch(['public/styles/scss/*.scss', 'public/script/*.js'], gulp.series('compile-sass'));

  gulp.watch('*.html').on('change', browserSync.reload);
}));
