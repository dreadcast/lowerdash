var Bluebird = require('bluebird'),
    babel = require('babel'),
    fs = require('fs-extra'),
    browserify = require('browserify'),
    babelify = require("babelify"),
    uglify = require('uglify-js'),
    transpile = Bluebird.promisify(babel.transformFile),
    outputFile = Bluebird.promisify(fs.outputFile),
    fileconcat = Bluebird.promisify(require('fileconcat'));


    browserify('./src/index.js', { debug: true })
        .transform(babelify.configure({
          sourceMaps: false
        }))
        .bundle()
        .on('error', function (err) {
            console.log('Error: ' + err.message);
        })
        .pipe(fs.createWriteStream('./dist/lowerdash.js'));

// transpile('./src/index.js')
//     .then(function(result){
//         var b = browserify();
//         b.add('./dist/lowerdash.js');
//
//         return b.pipe(result.code).bundle().pipe(process.stdout);
//     })
//     .then(function(code){
//         return outputFile('./dist/lowerdash.js', code);
//     })
// fileconcat([
//     './src/**/index.js'
// ], dest, {
//     unique: true,
//     mkdirp: true,
//     mode: '444',
//     beforeEach: function(context){
//         // return "\n//======= " + context.src + " ==========\n";
//     },
//     afterEach: function(context){
//         //
//     }
// })
//     .then(result => {});
