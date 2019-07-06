# gulp-demo-v2

## gulp 学习

### gulp 一共有5种方法

* gulp.task()——新建任务
* gulp.src()——获取文件源地址
* gulp.dest()——文件输出地址
* gulp.run()——运行任务
* gulp.watch()——监听文件修改

#### gulp.task()——新建任务
```
/**
* uglify: js压缩，删除空格、注释
*/
gulp.task('jstask', function() {
  // **匹配static/js的0个或多个子文件夹
  var jstask = gulp.src('app/static/js/**/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/static/js'));
  return jstask;
});
```

#### gulp.src()——获取文件源地址
```
gulp.src('app/static/js/**/*.js');
```

#### gulp.dest()——文件输出地址
##### 参数：
* cwd: 指定写入路径的基准目录，默认是当前目录
* mode: 指定写入文件的权限，默认是0777

```
gulp.dest('dist/static/js', {
  cwd: './app',
  mode: '0644'
});
```


#### gulp.run()——运行任务
>表示要执行的任务。可能会使用单个参数的形式传递多个任务。ps:任务是尽可能多的并行执行，并且可能不会按照指定的顺序执行。

```
gulp.run('jstask', function(err){
  console.log('所有任务完成，或者触发错误而终止');
});
```

#### gulp.watch()——监听文件修改
>用于指定需要监视的文件。一旦这些文件发生变动，就运行指定任务。
>可以指定需要执行的任务，或者使用回调函数

```
gulp.task('watch', function() {
  // gulp.watch('app/static/js/**/*.js', ['jstask']);
  gulp.watch('app/static/js/**/*.js', (event) => {
    console.log('Event type:' + event.type);
    console.log('Event path:' + event.path);
    gulp.run('jstask', (err) => {
      console.log('run jstask:', err);
    });
  });
});
```

### 使用
* 执行gulp时，首先找寻gulpfile.js文件，再找寻default任务
* gulp充分使用了“管道”思想，就是一个数据流（stream）。src方法读入文件产生数据流，dest方法将数据流写入文件，中间是一些中间步骤，每一步都对数据流进行一些处理。