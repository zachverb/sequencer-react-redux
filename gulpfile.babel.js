import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config.js';
import devConfig from './dev.config.js';

gulp.task('webpack', (cb) => {
  webpack(webpackConfig, (err, stats) => {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString());
    cb();
  });
});

gulp.task('webpack-dev-server', function(cb) {
  var mergeConfig = Object.assign({}, webpackConfig, devConfig);
  var compiler = webpack(mergeConfig);

  new WebpackDevServer(compiler, {
    publicPath: '/build/',
    hot: true,
    stats: true,
    colors: true
  }).listen(8080, 'localhost', (err) => {
    if (err) throw new gutil.PluginError('webpack-dev-server', err);
    gutil.log('[webpack-dev-server]', 'localhost:8080/webpack-dev-server/index.html');
    cb();
  });
});

