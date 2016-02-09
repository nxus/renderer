# renderer
A rendering framework for Nxus applications.

## Installation

In your Nxus application:

```
> npm install @nxus/renderer --save
```

## Usage

### Defining a renderer

```
app.get('renderer').renderer(type, handler);
```

Where `type` is usually the filename extension and `handler` returns the rendered text when called with contents to render and an optional `opts` object.

### Rendering a string

```
app.get('renderer').render(type, text).then((renderedText) => {});
```

You can pass an optional arugment `opts` for options to pass to the renderer.

### Rendering a file

```
app.get('renderer').renderFile(type, filename).then((renderedText) => {});
```

You can pass an optional arugment `opts` for options to pass to the renderer.
