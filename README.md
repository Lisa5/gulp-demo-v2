# gulp-demo-v2

## gulp 学习

### gulp 一共有5种方法

* gulp.task()——新建任务
* gulp.src()——获取文件源地址
* gulp.dest()——文件输出地址
* gulp.run()——运行任务
* gulp.watch()——监听文件修改

#### gulp.dest()
* cwd: 指定写入路径的基准目录，默认是当前目录
* mode: 指定写入文件的权限，默认是0777
gulp.dest('build', {
  cwd: './app',
  mode: '0644'
});

#### 

### 使用
* 执行gulp时，首先找寻gulpfile.js文件，再找寻default任务
* gulp充分使用了“管道”思想，就是一个数据流（stream）。src方法读入文件产生数据流，dest方法将数据流写入文件，中间是一些中间步骤，每一步都对数据流进行一些处理。