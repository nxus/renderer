# Nxus Renderer

[![Build Status](https://travis-ci.org/nxus/renderer.svg?branch=master)](https://travis-ci.org/nxus/renderer)

A rendering framework for Nxus applications.

## Installation

In your Nxus application:

    > npm install @nxus/renderer --save

## Usage

### Defining a renderer

    app.get('renderer').renderer(type, handler);

Where `type` is usually the filename extension and `handler` returns the rendered text when called with contents to render and an optional `opts` object.

### Rendering a string

    app.get('renderer').render(type, text).then((renderedText) => {});

You can pass an optional arugment `opts` for options to pass to the renderer.

### Rendering a file

    app.get('renderer').renderFile(type, filename).then((renderedText) => {});

You can pass an optional arugment `opts` for options to pass to the renderer.

## API

### render

[src/Renderer.js:43-46](https://github.com/nxus/renderer/blob/a30ac87dd7ac7b27a6c8bcf59b8e684e4ddf4f38/src/Renderer.js#L43-L46 "Source code on GitHub")

Request rendered content based on type

**Parameters**

-   `type` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The type (e.g. 'html') of the content
-   `content` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The contents to render
-   `opts` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Options for the renderer context

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** The rendered content

### renderer

[src/Renderer.js:31-34](https://github.com/nxus/renderer/blob/a30ac87dd7ac7b27a6c8bcf59b8e684e4ddf4f38/src/Renderer.js#L31-L34 "Source code on GitHub")

Provide a renderer for a particular type (file extension)

**Parameters**

-   `type` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The type (e.g. 'html') this renderer should handle
-   `handler` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Function to receive (content, options) and return rendered content

### renderFile

[src/Renderer.js:54-63](https://github.com/nxus/renderer/blob/a30ac87dd7ac7b27a6c8bcf59b8e684e4ddf4f38/src/Renderer.js#L54-L63 "Source code on GitHub")

Provide a renderer for a particular type (file extension)

**Parameters**

-   `filename` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Path to content to render
-   `opts` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Options for the renderer context

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** The rendered content
