var gulp = require('gulp');

require('dreadcast-operative/release')(gulp);

gulp.task('default', ['release:ghpages:npm']);