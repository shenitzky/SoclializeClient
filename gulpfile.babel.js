'use strict';

import gulp     from 'gulp';
import webpack  from 'webpack';
import path     from 'path';
import sync     from 'run-sequence';
import rename   from 'gulp-rename';
import template from 'gulp-template';
import fs       from 'fs';
import yargs    from 'yargs';
import lodash   from 'lodash';
import gutil    from 'gulp-util';
import serve    from 'browser-sync';
import del      from 'del';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import colorsSupported      from 'supports-color';
import historyApiFallback   from 'connect-history-api-fallback';
import proxyMiddleware from 'http-proxy-middleware'
import _ from 'lodash'


let root = 'client';

let backends = {
    app: {
        'dev': 'https://localhost:9443',
        'production': 'http://socialize20170306063515.azurewebsites.net/api/socializApi'
    }
};

//let apiHost = 'http://socialize20170306063515.azurewebsites.net/api/socializApi';
//let apiHost =_.get(backends);


// helper method for resolving paths
let resolveToApp = (glob = '') => {
  return path.join(root, 'app', glob); // app/{glob}
};

let resolveToComponents = (glob = '') => {
  return path.join(root, 'app/components', glob); // app/components/{glob}
};

// map of all paths
let paths = {
  js: resolveToComponents('**/*!(.spec.js).js'), // exclude spec files
  scss: resolveToApp('**/*.scss'), // stylesheets
  html: [
    resolveToApp('**/*.html'),
    path.join(root, 'index.html')
  ],
  entry: [
    'babel-polyfill',
    path.join(__dirname, root, 'app/app.js')
  ],
  output: root,
  blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**'),
  dest: path.join(__dirname, 'dist')
};

// use webpack.config.js to build modules
gulp.task('webpack', ['clean'], (cb) => {
  const config = require('./webpack.dist.config');
  config.entry.app = paths.entry;

  webpack(config, (err, stats) => {
    if(err)  {
      throw new gutil.PluginError("webpack", err);
    }

    gutil.log("[webpack]", stats.toString({
      colors: colorsSupported,
      chunks: false,
      errorDetails: true
    }));

    cb();
  });
});

gulp.task('serve', () => {
  // let proxy = proxyMiddleware('/api/*',{
  //   target: apiHost,
  //   changeOrigin: true
  // });
  const config = require('./webpack.dev.config');
  config.entry.app = [
    // this modules required to make HRM working
    // it responsible for all this webpack magic
    'webpack-hot-middleware/client?reload=true',
    // application entry point
  ].concat(paths.entry);

  var compiler = webpack(config);

  serve({
    port: process.env.PORT || 3000,
    open: false,
    server: {baseDir: root},
    middleware: [
      historyApiFallback(),
      webpackDevMiddleware(compiler, {
        stats: {
          colors: colorsSupported,
          chunks: false,
          modules: false
        },
        publicPath: config.output.publicPath
      }),
      webpackHotMiddleware(compiler)
    ]
    //middleware: [proxy],
    //notify:false
  });
});


















gulp.task("webpack:server", function (callback) {
    //util.log(`using proxy ${apiHost}`)
    // modify some webpack config options
    var myConfig = Object.create(webpackConfig);
    myConfig.devtool = "source-map";
    myConfig.debug = false;
    myConfig.entry = pickWebpackEntry(myConfig);

    // Start a webpack-dev-server
    new WebpackDevServer(webpack(myConfig), {
        publicPath: null,
        noInfo:true,
        contentBase: 'build/',
        historyApiFallback: true,
        https: true,
        stats: {
            colors: true
        },
        proxy: {
            '/api/\*': {
                target: apiHost,
                changeOrigin: true,
                secure: false,
                bypass: function (req, res, proxyOptions) {
                    util.log(`${new Date()} forwarding call ${req.url} to ${proxyOptions.target}`);
                }
            }
        }
    }).listen(3000, "localhost", function (err) {
        if (err) throw new util.PluginError("webpack-dev-server", err);
        util.log("[webpack-dev-server]", "https://localhost.hibob.com:3000/webpack-dev-server/");
    });
});




















gulp.task('watch', ['serve']);

gulp.task('component', () => {
  const cap = (val) => {
    return val.charAt(0).toUpperCase() + val.slice(1);
  };
  const name = yargs.argv.name;
  const parentPath = yargs.argv.parent || '';
  const destPath = path.join(resolveToComponents(), parentPath, name);

  return gulp.src(paths.blankTemplates)
    .pipe(template({
      name: name,
      upCaseName: cap(name)
    }))
    .pipe(rename((path) => {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destPath));
});

gulp.task('clean', (cb) => {
  del([paths.dest]).then(function (paths) {
    gutil.log("[clean]", paths);
    cb();
  })
});

gulp.task('default', ['watch']);
