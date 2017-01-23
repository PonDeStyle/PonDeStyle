'use strict';

// gulp load
var gulp = require('gulp');

// gulp modules
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps');

var browserSync = require('browser-sync');

// postcss load
var postcss = require('gulp-postcss');

// postcss plugins
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var atImport = require('postcss-import');
var calc = require('postcss-calc');
var customProperties = require('postcss-custom-properties');
var customMedia = require('postcss-custom-media');
var colorFunction = require('postcss-color-function');
var nesting = require('postcss-nesting');
var matches = require('postcss-selector-matches');
var reporter = require('postcss-reporter');
var stylelint = require('stylelint');
var stylefmt = require('stylefmt');

gulp.task('postcss', function () {
    var discardEmpty = require('postcss-discard-empty');
    var discardComments = require('postcss-discard-comments');

    var plugins = [
        atImport( { plugins: [stylelint] } ),
        customProperties,
        calc,
        nesting,
        customMedia,
        colorFunction,
        matches,
        autoprefixer({ browsers: [
            'last 2 Chrome versions',
            'last 2 Firefox versions',
            'last 2 Safari versions',
            'last 2 Edge versions',
            'Explorer >= 11',
            'last 2 iOS versions',
            'last 2 ChromeAndroid versions',
            'last 2 FirefoxAndroid versions'
        ] }),
        discardEmpty,
        discardComments,
        reporter({ clearMessages: true })
    ];

    return gulp.src('./src/styles/pondestyle.css')
        .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
        .pipe(sourcemaps.init())
        .pipe(postcss(plugins))
        .pipe(postcss([stylefmt]))
        .pipe(gulp.dest('./dist/'))
        .pipe(postcss([cssnano]))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('../maps', {
            sourceMappingURL: function(file) {
                return file.relative + '.map';
            }
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('browser-sync', function () {
    browserSync({
        browser: 'FirefoxDeveloperEdition',
        server: {
            baseDir: ['demo', 'dist', 'maps']
        }
    });
});

gulp.task('test', function () {
    var plugins = [
        atImport,
        stylelint,
        reporter({ throwError: true })
    ];

    return gulp.src('./src/styles/pondestyle.css')
        .pipe(postcss(plugins));
});

gulp.task('default', ['postcss', 'browser-sync'], function () {
    gulp.watch('./src/styles/**/*.css', ['postcss']);
});
