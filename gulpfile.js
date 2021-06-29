const gulp = require('gulp');

gulp.task('test', function(cb) {
  gulp.src('./my_module.js')
    .on('data', function(ourObjVinyl) {
      console.log(ourObjVinyl.path);
      console.log(typeof(ourObjVinyl));
      console.log(ourObjVinyl.inspect());
    })
    .pipe(gulp.dest('dist/'));
    cb();
});

// gulp.task('test');