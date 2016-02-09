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

    app.get('renderer').use(this)
      .gather('renderer')
      .respond('render')
      .respond('renderFile')
  }

  /**
   * Provide a renderer for a particular type (file extension)
   * @param {string} type The type (e.g. 'html') this renderer should handle
   * @param {function} handler Function to receive (content, options) and return rendered content
   */
  renderer (type, handler) {
    if(typeof handler != "function") throw new Error("Renderer handler must be a callback")
    this._renderers[type] = handler;
  }

  /**
   * Request rendered content based on type
   * @param {string} type The type (e.g. 'html') of the content
   * @param {string} content The contents to render 
   * @param {object} opts Options for the renderer context
   * @return {Promise} The rendered content
   */
  render (type, content, opts) {
    if(!this._renderers[type]) throw new Error('No matching renderer found: '+ type);
    return this._renderers[type](content, opts);
  }

  /**
   * Provide a renderer for a particular type (file extension)
   * @param {string} filename Path to content to render
   * @param {object} opts Options for the renderer context
   * @return {Promise} The rendered content
   */
  renderFile (filename, opts) {
    return fs.readFileAsync(filename).then((content) => {
      content = content.toString()
      const type = path.extname(filename).replace(".", "");

      if(!this._renderers[type]) throw new Error('No matching renderer found: '+ type);
      
      return this._renderers[type](content, opts);
    })
  }

}

export default Renderer;
