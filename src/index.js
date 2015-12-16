/* 
* @Author: Mike Reich
* @Date:   2015-11-09 18:51:03
* @Last Modified 2015-12-15
*/

'use strict';

import Renderer from './Renderer'
import EjsRenderer from './EjsRenderer'

export default (app) => {
  new Renderer(app)
  new EjsRenderer(app)
}