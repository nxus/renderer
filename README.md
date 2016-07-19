# nxus-renderer

## 

[![Build Status](https://travis-ci.org/nxus/renderer.svg?branch=master)](https://travis-ci.org/nxus/renderer)

A rendering framework for Nxus applications.

### Installation

In your Nxus application:

    > npm install nxus-renderer --save

### Usage

#### Defining a renderer

    app.get('renderer').renderer(type, handler);

Where `type` is usually the filename extension and `handler` returns the rendered text when called with contents to render and an optional `opts` object.

#### Rendering a string

    app.get('renderer').render(type, text).then((renderedText) => {console.log(renderedText)});

You can pass an optional arugment `opts` for options to pass to the renderer.

    app.get('renderer').render(type, text, {title: 'My Title'}).then((renderedText) => {console.log(renderedText)});

#### Rendering a file

    app.get('renderer').renderFile(type, filename).then((renderedText) => {});

You can pass an optional arugment `opts` for options to pass to the renderer.

## API

* * *

## Renderer

Renderer renders different files and content using common rendering engines, like EJS and MarkDown.

### render

Request rendered content based on type

**Parameters**

-   `type` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The type (e.g. 'html') of the content
-   `content` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The contents to render
-   `opts` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)=(default {})** Options for the renderer context

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** The rendered content

### renderer

Provide a renderer for a particular type (file extension)

**Parameters**

-   `type` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The type (e.g. 'html') this renderer should handle
-   `handler` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Function to receive (content, options) and return rendered content

### renderFile

Provide a renderer for a particular type (file extension)

**Parameters**

-   `filename` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Path to content to render
-   `opts` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)=(default {})** Options for the renderer context

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** The rendered content
