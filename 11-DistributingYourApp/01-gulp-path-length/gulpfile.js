const gulp = require('gulp');
const pathLength = require('gulp-path-length');

gulp.task('default', () => {
    gulp.src('./example/path/to/directory/**', {read: false})
    .pipe(pathLength({
        rewrite: {
            match: './example/path/to/directory/',
            replacement: 'C:\\Users\\a-long-username-here\\AppData\\Blah\\Blah\\Blah'
        }
    }));
});