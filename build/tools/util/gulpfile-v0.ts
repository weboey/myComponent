const gulp = require('gulp');
const sass = require('gulp-sass');
const typescript = require('gulp-tsc');
const ts = require('gulp-typescript');

import {resolve, dirname, join} from 'path';
import {existsSync} from 'fs';

import {sequenceTask} from './util/task_helpers';

const currentDir = process.cwd();
const gulpFileDir = 'gulp-file.js';
const rootDir = join(currentDir, '../..');

const tsProject = ts.createProject(join(rootDir, 'src/tsconfig.app.json'));

/*33*/
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const buffer = require('vinyl-buffer');

gulp.task('default', sequenceTask('one', 'two'));

gulp.task('one', function(cb) {
  console.log('one is done111');
  setTimeout(() => {
    console.log('one is done222');
    cb();
  }, 5000);
});
gulp.task('two', function() {
  console.log('two is done');
});

// Lint JavaScript
gulp.task('lint', () => {
    gulp.src(join(rootDir, 'src/main.ts')) // 没有通配符出现的情况
      .pipe(gulp.dest(join(rootDir, 'dist'))); // 最后生成的文件路径为 dist/avalon.js
  }
);

gulp.task('compile-sass', function () {
  console.log(join(rootDir, 'src/**/*.scss'));
  gulp.src(join(rootDir, 'src/**/*.scss'))
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
});
gulp.task('compile-ts', function () {
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest('dist'));
    // .pipe(uglify());
});
