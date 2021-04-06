const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
 
exports.default = () => (
    gulp.src('WebsiteImages/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);