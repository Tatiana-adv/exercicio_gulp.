const gulp = require('gulp');
const uglify = require('gulp-uglify');

function compressJs() {
    return gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
}

exports.compressJs = compressJs;
