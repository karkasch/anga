
var gulp = require('gulp');

var tsFiles = [
    "./wwwroot/**/*.ts",
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

gulp.task("watch", function () {
    return gulp.watch(tsFiles, ["ts"]);
})

gulp.task('default', ["ts"]);