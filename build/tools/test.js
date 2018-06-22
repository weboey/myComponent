var path = require('path');
var currentDir = process.cwd();
var rootDir = path.join(currentDir, '../..');
var child_process = require('child_process');
console.log(currentDir);
console.log(__dirname);
console.log(rootDir);

const npm = process.platform === "win32" ? "npm.cmd" : "npm";
child_process.spawn(npm, ['run', 'start'], {
  cwd: path.resolve('../../')
});
