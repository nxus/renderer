/* 
* @Author: Mike Reich
* @Date:   2015-11-09 18:55:29
* @Last Modified 2015-11-10
*/

'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var Renderer = (function () {
  function Renderer(app, loaded) {
    var _this = this;

    _classCallCheck(this, Renderer);

    this._renderers = {};

    app.on('app.load', function () {
      app.emit('renderer.register', _this._registerRenderer.bind(_this));
    });

    app.on('renderer.render', this._render.bind(this));
    app.on('renderer.renderFile', this._renderFile.bind(this));
  }

  _createClass(Renderer, [{
    key: '_registerRenderer',
    value: function _registerRenderer(type, handler) {
      if (typeof handler != "function") throw new Error("Renderer handler must be a callback");
      this._renderers[type] = handler;
    }
  }, {
    key: '_render',
    value: function _render(type, content, opts, callback) {
      if (!this._renderers[type]) return callback(new Error('No matching renderer found'), content);
      this._renderers[type](content, opts, callback);
    }
  }, {
    key: '_renderFile',
    value: function _renderFile(filename, opts, callback) {
      var _this2 = this;

      _fs2['default'].readFile(filename, function (err, content) {
        content = content.toString();
        var type = _path2['default'].extname(filename).replace(".", "");

        if (!_this2._renderers[type]) return callback(new Error('No matching renderer found'), content);

        _this2._renderers[type](content, opts, callback);
      });
    }
  }]);

  return Renderer;
})();

exports['default'] = Renderer;
module.exports = exports['default'];