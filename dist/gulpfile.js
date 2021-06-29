// const os = require('os');
// const message = require('./my_module');
// const fs = require('fs');

// let userInfo = os.userInfo();
// let userName = os.userInfo().username;
// let homeDir = os.homedir();

// console.log(userInfo);
// console.log('Имя текущего пользователя ' + userName);
// console.log('Домашний каталог текощего пользователя ' + homeDir);
// console.log(message.myMessage);
// console.log(message.createMessage());

// СОЗДАНИЕ ПОТОКА

// let myReadStream = fs.createReadStream('./post.txt');

// myReadStream.on('data', function(chunk) {
  //   console.log(`Размер прочитанной части данных: ${chunk.length} байт`);
  //   console.log(`Общий размер прочитанных данных, в текущий момент времени: ${myReadStream.bytesRead} байт`);
  // let data = chunk;
  // console.log(data.toString().replace(/\s+/g, ''));
  // console.log(chunk.toString());
  // console.log(typeof myReadStream);
// });
// myReadStream.on('end', function() {
  //   console.log('THE END');
  
  //
  // let myReadStream = new fs.ReadStream('./post.txt');
  
  // myReadStream.on('readable', function() {
    //   let data = myReadStream.read();
    //   console.log(data.toString());
    // });
    //
    
    // });
    
//  VINIL

// const Vinyl = require('vinyl');

// let file = new Vinyl({
//   contents: fs.createReadStream('./my_module.js')
// });
// console.log(file);
// console.log(file.cwd);
// console.log(file.contents);

//
// const file = new Vinyl({
//   cwd: '/',
//   base: '/Node_test/',
//   path: '/Node_test/app.js',
//   contents: new Buffer.from('let x = 123')
// });

// console.log(file.cwd);
// console.log(file.base);
// console.log(file.relative);
// console.log(file.path);
// console.log(file.contents.toString());
// console.log(Vinyl.isVinyl(file));
// console.log(file.isBuffer());
//

const gulp = require('gulp');

gulp.task('test', function() {
  gulp.src('./*.js')
    .on('data', function(ourObjVinyl) {
      console.log('data callback');
      console.log(ourObjVinyl);
      console.log(ourObjVinyl.inspect());
    })
    .pipe(gulp.dest('dist/'));
});

gulp.task("start", gulp.series('test'));