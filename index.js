/* 
* @Author: Mike Reich
* @Date:   2015-11-09 18:51:03
* @Last Modified 2015-11-10
*/

'use strict';

var Renderer = require('./lib/Renderer')
var EjsRenderer = require('./lib/EjsRenderer')

module.exports = function(app, loaded) {
  new Renderer(app, loaded)
  new EjsRenderer(app, loaded)
}