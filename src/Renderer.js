/* 
* @Author: Mike Reich
* @Date:   2015-11-09 18:55:29
* @Last Modified 2015-11-10
*/

'use strict';

import fs from 'fs';
import path from 'path';

class Renderer {
  
  constructor(app) {
    this._renderers = {};

    app.on('load').then( () => {
      app.get('renderer').gather('register').each(this._registerRenderer.bind(this));
    })

    app.get('renderer').on('render', this._render.bind(this));
    app.get('renderer').on('renderFile', this._renderFile.bind(this));
  }

  _registerRenderer (type, handler) {
    if(typeof handler != "function") throw new Error("Renderer handler must be a callback")
    this._renderers[type] = handler;
  }

  _render (type, content, opts, callback) {
    if(!this._renderers[type]) return callback(new Error('No matching renderer found'), content)
    this._renderers[type](content, opts, callback);
  }

  _renderFile (filename, opts, callback) {
    fs.readFile(filename, (err, content) => {
      content = content.toString()
      const type = path.extname(filename).replace(".", "");

      if(!this._renderers[type]) return callback(new Error('No matching renderer found'), content)
      
      this._renderers[type](content, opts, callback);
    })
  }

}

export default Renderer;
