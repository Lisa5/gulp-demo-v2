# Gulp

Gulp就是为了规范前端开发流程，实现前后端分离、模块化开发、版本控制、文件合并与压缩、mock数据等功能的一个前端自动化构建工具。说的形象点，“Gulp就像是一个产品的流水线，整个产品从无到有，都要受流水线的控制，在流水线上我们可以对产品进行管理。”

Gulp是通过task对整个开发过程进行构建。

# webpack

Webpack的核心思想是资源模块化管理和打包。
它可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。还可以将按需加载的模块进行代码分隔，等到实际需要的时候再异步加载。通过 loader的转换，任何形式的资源都可以视作模块，比如 CommonJs 模块、AMD 模块、ES6 模块、CSS、图片、JSON、Coffeescript、LESS 等。

# gulp和Webpack功能实现对比

## 基本概念
Gulp侧重于前端开发的整个过程的控制管理（像是流水线），我们可以通过给gulp配置不通的task（通过Gulp中的gulp.task()方法配置，比如启动server、sass/less预编译、文件的合并压缩等等）来让gulp实现不同的功能，从而构建整个前端开发流程。

Webpack有人也称之为模块打包机，由此也可以看出Webpack更侧重于模块打包，当然我们可以把开发中的所有资源（图片、js文件、css文件等）都可以看成模块，最初Webpack本身就是为前端JS代码打包而设计的，后来被扩展到其他资源的打包处理。Webpack是通过loader（加载器）和plugins（插件）对资源进行处理的。

Webpack中对资源文件的处理是通过入口文件产生的依赖形成的，不会像Gulp那样，配置好路径后，该路径下所有规定的文件都会受影响。

## 启动服务
### gulp使用gulp-webserver

```
var webserver = require('gulp-webserver');

gulp.task('webserver', () => {
  gulp.src(app.srcPath)
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
})
```
启动
```
gulp.task('default', ['webserver']);
```

### webpack使用webpack-dev-server
启动
```
node_modules/.bin/webpack-dev-server
```
or
```
"scripts": {
  "start:dev": "webpack-dev-server"
}
```
