/* 
* @Author: Mike Reich
* @Date:   2015-11-10 06:43:53
* @Last Modified 2015-11-15
*/

'use strict';

import ejs from 'ejs';

class EjsRenderer {
  
  constructor (app, loaded) {
    app.get('renderer').send('register').with('ejs', this._render);
    app.get('renderer').send('register').with('html', this._render);
  }

  _render (content, data, callback) {
    var filename = data.filename || process.cwd();
    return ejs.render(content, data, {filename: filename});
  }
}

export default EjsRenderer
