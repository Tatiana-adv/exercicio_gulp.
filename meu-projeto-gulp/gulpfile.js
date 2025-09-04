const gulp = require('gulp');
const { compileSass } = require('./gulp-tasks/compileSass');
const { compressImages } = require('./gulp-tasks/compressImages');
const { compressJs } = require('./gulp-tasks/compressJs');

function watchFiles() {
    gulp.watch('src/sass/**/*.scss', compileSass);
    gulp.watch('src/js/**/*.js', compressJs);
    gulp.watch('src/img/*', compressImages);
}

exports.build = gulp.parallel(compileSass, compressImages, compressJs);
exports.watch = watchFiles;
exports.default = gulp.series(exports.build, exports.watch);
