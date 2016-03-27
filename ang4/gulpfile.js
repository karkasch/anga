
var gulp = require('gulp');

var tsFiles = [
    "./wwwroot/main.ts",
    "./node_modules/angular2/typings/browser.d.ts"
];

gulp.task("ts", function () {
    var typescript = require('gulp-typescript');
    var tscConfig = require('./tsconfig.json');

    var tsResult = gulp
        .src(tsFiles, { base: "." })
        .pipe(typescript(tscConfig.compilerOptions));

    return tsResult.js.pipe(gulp.dest("."));
});

gulp.task("test", function () {
    console.log(this);
})

gulp.task('default', ["ts"]);