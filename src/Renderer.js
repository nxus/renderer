/* 
* @Author: Mike Reich
* @Date:   2015-11-09 18:55:29
* @Last Modified 2015-12-15
*/

'use strict';

import Promise from 'bluebird';
import fs from 'fs';
import path from 'path';

Promise.promisifyAll(fs);

class Renderer {
  
  constructor(app) {
    this._renderers = {};

    app.get('renderer').gather('renderer', this._registerRenderer.bind(this));
    app.get('renderer').respond('render', this._render.bind(this));
    app.get('renderer').respond('renderFile', this._renderFile.bind(this));
  }

  _registerRenderer (type, handler) {
    if(typeof handler != "function") throw new Error("Renderer handler must be a callback")
    this._renderers[type] = handler;
  }

  _render (type, content, opts) {
    if(!this._renderers[type]) throw new Error('No matching renderer found: '+ type);
    return this._renderers[type](content, opts);
  }

  _renderFile (filename, opts) {
    return fs.readFileAsync(filename).then((content) => {
      content = content.toString()
      const type = path.extname(filename).replace(".", "");

      if(!this._renderers[type]) throw new Error('No matching renderer found: '+ type);
      
      return this._renderers[type](content, opts);
    })
  }

}

export default Renderer;
