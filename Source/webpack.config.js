
let path = require('path')
let pkgDir_module = require('pkg-dir')
let pkgDir = pkgDir_module.sync(__dirname)

let webpack = require('webpack')

module.exports = {
  entry: {
    app: [ path.join(pkgDir, 'shortid-entry.js') ]
  },
  resolve: {
    // Removed entries from extensions: ['.vue', '.json', ]
    // vue-loader fails without js in extensions.
    extensions: ['.js'],
    // Removed entries from mainFields: ['browser', 'module', ]
    // Prevent bundling es6 modules from node_modules when trying to require as commonjs.
    // If we need a specific es6 module from a dependency, use enhanced-resolve directly in source (webpack uses it internally)
    // TODO: the tests for babel-loader instances will not match a file in node_modules. If require-ing an actual es6 module, set up a mechanism to transpile it.
    // and specify mainFields to resolve a path to a package's "module" entry point.
    mainFields: ['main'],
    // Directories to be searched when resolving modules.
    modules: ['node_modules'],
    // An alias can be used in the path in a require/import statement instead of using relative paths.
    // A trailing $ can be added to a key to signify that the full require string must match the key exactly.
    alias: {
      '@': path.join(pkgDir, 'src')
    }
  },
  output: {
    publicPath: "",
    path: path.join(pkgDir, 'editions', 'shortid-plugin', 'plugins', 'shortid', 'tiddlers'),
    filename:      '$--plugins-reidgould-shortid-shortid-util.js',
    chunkFilename: '[name].js',
    libraryTarget: "commonjs",
  },
  devtool: false,
  target: 'web',
  node: {
  // Set 'false' to not polyfill node builtins on other targets.
  // https://webpack.js.org/configuration/node/
  // ####################
  // global is approved. 488 Bytes. no dependencies. On a browser, simply assigns "glolbal" the value of "window". https://github.com/webpack/webpack/blob/master/buildin/global.js
  global:          true,
  __filename:      false,
  __dirname:       false,
  // The Buffer class is a global within Node.js, making it unlikely that one would need to ever use require('buffer').Buffer.
  Buffer:          false,
  setImmediate:    false, // Timer function specific to node.js event loop.
  // ####################
  // https://github.com/webpack/node-libs-browser
  assert:          false,
  buffer:          false,
  child_process:   false,
  cluster:         false,
  console:         false,
  constants:       false,
  crypto:          false,
  dgram:           false,
  dns:             false,
  domain:          false,
  // events is approved. 8.13 KB. no dependencies.
  events:          true,
  fs:              false,
  http:            false,
  https:           false,
  module:          false,
  net:             false,
  os:              false,
  // path is approved. 6.04 KB. no dependencies.
  path:            true,
  process:         false,
  punycode:        false,
  querystring:     false,
  readline:        false,
  repl:            false,
  stream:          false,
  string_decoder:  false,
  sys:             false,
  timers:          false,
  tls:             false,
  tty:             false,
  url:             false,
  util:            false,
  vm:              false,
  zlib:            false
  },
  module: {},
  plugins: [
    new webpack.DefinePlugin({
      'process.env': "production"
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    }),
    new webpack.BannerPlugin({
      banner: '\/*\\\r\ntitle: $:\/plugins\/reidgould\/shortid\/shortid-util.js\r\ntype: application\/javascript\r\nmodule-type: utils\r\nBundle of the shortid package for tiddlywiki.\r\n\\*\/\r\n',
      raw: true,
      entryOnly: true
    }),
  ]
}
