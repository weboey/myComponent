const gulp = require('gulp');
const path = require('path');
const sass = require('gulp-sass');
const typescript = require('gulp-tsc');
const ts = require('gulp-typescript');
import * as child_process from "child_process";
import {resolve, dirname, join} from 'path';
import {existsSync} from 'fs';

import {execTask, sequenceTask, root} from './util/task_helpers';

const currentDir = process.cwd();
const rootDir = join(currentDir, '../..');

const tsProject = ts.createProject(join(rootDir, 'src/tsconfig.app.json'));
const npm = process.platform === "win32" ? "npm.cmd" : "npm";
/*33*/


gulp.task('default', sequenceTask('one', 'two'));

// gulp.task('one', execTask(npm, ['init', '-y']));
gulp.task('one', function() {
  console.log(root());
  console.log(path.resolve('../../'));
  // console.log(process.platform);
});
gulp.task('two', execTask(npm, ['run', 'start'], {
  cwd: root()
}));

