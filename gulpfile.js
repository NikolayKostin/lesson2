var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var googlecdn = require('gulp-google-cdn');
 
gulp.task('default', function () {
    return gulp.src('index.html')
        .pipe(googlecdn(require('./bower.json')))
        .pipe(gulp.dest('dist'));
});


gulp.task('clean', function (done) {
    return gulp.src('./dist/css', {read: false})
        .pipe(clean());
done();
});

gulp.task('scss', gulp.series('clean', function (done) {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
done();
}));



gulp.task('scss:watch', function () {
  gulp.watch('./scss/**/*.scss', gulp.series('clean','scss'));
});