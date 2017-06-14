const gulp = require('gulp');
const tmodjs = require('gulp-tmod');
const less = require('gulp-less');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const del = require('del');
const runSequence = require('gulp-run-sequence');

// Run a static file source server
gulp.task('server', () => {
    return browserSync.init({
        server: './',
        port: 3000
    });
});

// Build html file with tmod
// gulp.task('tmod', () => {
//     return gulp.src('./src/tpl/**/*.html')
//         .pipe(tmodjs({
//             templateBase: './src/tpl'
//         }))
//         .pipe(gulp.dest('./src/tpl/build'));
// });

// Build less
gulp.task('less', () => {
    return gulp.src('./src/style/**/*.less')
        .pipe(less())
        .pipe(concat('aio.css'))
        .pipe(gulp.dest('dest'));
});

gulp.task('clean', () => {
    return del('dest/**');
});

gulp.task('default', () => {

    // Run task series
    runSequence('clean', ['less'], 'server', () => {
        console.log('Start running...');
    });
    gulp.watch('./src/style/**/*.less', ['less']);
    // gulp.watch('./src/tpl/**/*.html', ['tmod']);
    gulp.watch('./src/**').on('change', reload);
});