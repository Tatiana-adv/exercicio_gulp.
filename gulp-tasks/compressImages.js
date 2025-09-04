const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

function compressImages() {
    return gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
}

exports.compressImages = compressImages;
