/* 
* @Author: Mike Reich
* @Date:   2015-11-10 06:43:53
* @Last Modified 2016-04-14
*/

'use strict';

import ejs from 'ejs';
import _ from 'underscore';
import moment from 'moment';
import path from 'path';

class EjsRenderer {
  
  constructor (app, loaded) {
    app.get('renderer').renderer('ejs', this._render);
    app.get('renderer').renderer('html', this._render);
  }

  _render (content, data) {
    var filename = data.filename || process.cwd();
    data._ = _
    data.moment = moment
    return ejs.render(content, data, {filename: filename});
  }
}

export default EjsRenderer
