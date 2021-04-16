const {series} = require('gulp');
const browserSync = require('browser-sync');

function startServer(cb){
  browserSync.init({
    server: "./",
    files: [
      "./src/*.html",
      "static/css/*.css"
    ]
  });
}

exports.default = series(startServer);