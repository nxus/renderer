/* 
* @Author: Mike Reich
* @Date:   2015-11-10 06:43:53
* @Last Modified 2015-11-15
*/

'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _ejs = require('ejs');

var _ejs2 = _interopRequireDefault(_ejs);

var EjsRenderer = (function () {
  function EjsRenderer(app, loaded) {
    var _this = this;

    _classCallCheck(this, EjsRenderer);

    app.on('renderer.register', function (handler) {
      handler('ejs', _this._render);
    });
  }

  _createClass(EjsRenderer, [{
    key: '_render',
    value: function _render(content, data, callback) {
      var filename = data.filename || process.cwd();
      callback(null, _ejs2['default'].render(content, data, { filename: filename }));
    }
  }]);

  return EjsRenderer;
})();

exports['default'] = EjsRenderer;
module.exports = exports['default'];