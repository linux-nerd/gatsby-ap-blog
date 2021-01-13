---
title: Configure React from Ground Up
date: 2020-04-12T11:27:43.817Z
description: Configure React from ground up using Webpack and Babel
featured_image:
  src: /img/configure-react.jpeg
  alt: Configure React from ground up using Webpack and Babel
  title: Configure React from ground up using Webpack and Babel
tags:
  - react
  - babel
  - webpack
  - javascript
---
# Introduction ꒰⑅•ᴗ•⑅꒱

The easiest and the most effective way to write react code is to spin up a dev environment via [create react app](https://github.com/facebook/create-react-app). I bet everyone who is into React development has used `create react app`. The best and the worst thing about **CRA** is `abstraction`. It abstracts away the details which are required for the setup. For someone new to react, its heaven as that person can solely focus on learning react. For a seasoned/senior developer, it makes more sense to know how the setup works. In this post, I will setup the dev environment to react from the ground up using [Webpack](https://webpack.js.org/) and [Babel](https://babeljs.io/).

# Why do we need Webpack and Babel? (◞‸ლ)

## Webpack

> At its core, webpack is a static module bundler for modern JavaScript applications.

We can structure our application into multiple files and in the end webpack bundles out app into a bundle, ready to be served.

## Babel

> Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backward-compatible version of JavaScript in current and older browsers or environments.

We can write ESNext code and JSX in our application and the transpiling will be taken care of by `babel`.

# What do we need for basic setup? (｀_´)ゞ

Our aim is to have a basic setup which -

* understand `jsx` and new javascript syntax (ESNext)
* load `CSS` and images via `import`
* is able to spin up a dev server and support hot reloading

In the rest of the post, we will try to achieve the above-mentioned points.

# Warmup ＼(●o○;)ノ

We will start with creating a directory `react-webpack`

```shell
mkdir react-webpack
cd react-webpack
```

Next, we will create `package.json`

```shell
yarn init -y
```

`-y` flag above skips the interactive session of [yarn](https://classic.yarnpkg.com/en/docs/cli/init/). Feel free to omit the `--yes` flag if you want more control over your creation of `package.json`.

*Note: I am using yarn as a package manager but you can use npm as well*

Once we have our `package.json` ready, we need to install `webpack-cli` and `webpack-dev-server`.

**Webpack CLI** provides a flexible set of commands for developers to increase speed when setting up a custom webpack project.

**Webpack Dev Server** serves a webpack app and updates the browser on changes.

```shell
yarn add -D webpack-cli webpack-dev-server
```

Now, it's time to install `babel` and it's plugins/presets.

```shell
yarn add -D @babel/core babel-loader @babel/preset-env @babel/preset-react
```

We also need webpack plugins and loaders for files, css, and styles.

```shell
yarn add -D css-loader file-loader style-loader html-webpack-plugin
```

Phew, too many dependencies! (◣_◢)

Let's see what all do - 

* **[@babel/core](https://www.npmjs.com/package/@babel/core)** - The core babel library
* **[@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)** - It is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). This both makes your life easier and JavaScript bundles smaller!
* **[@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react)** - Transform React JSX into regular JavaScript code
* **[babel-loader](https://github.com/babel/babel-loader)** - Babel loader for webpack. This package allows transpiling JavaScript files using Babel and webpack.
* **[css-loader](https://webpack.js.org/loaders/css-loader/)** - The css-loader interprets `@import` and `url()` like `import/require()` and will resolve them.
* **[file-loader](https://webpack.js.org/loaders/file-loader/#root)** - The file-loader resolves import/require() on a file into a url and emits the file into the output directory.
* **[style-loader](https://webpack.js.org/loaders/style-loader/#root)** - Inject CSS into the DOM.
* **[html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin/#root)** - The HtmlWebpackPlugin simplifies the creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation.

Finally, add `react` and `react-dom`

```shell
yarn add react react-dom
```

# Code Walk ᕕ( ᐛ )ᕗ

In the previous section, we have added the required dependencies. In this section, we will walk together writing some code. (^∇^)

## Add source code related to the application

Let's create a `src` directory under the root and add `index.js`, `index.html`, `App.js` and `App.css`

```shell
mkdir src
touch src/index.js src/index.html src/App.js src/App.css
```

Now, it's time to update the files. You can use the editor of your choice. I will first add some basic html to `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>My React App</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>

<!-- src/index.html -->
```

Time for our first component

```javascript
// src/App.js

import React from "react";
import "./App.css";
import reactImg from "./assets/react.svg";

const App = () => {
  return (
    <>
      <div>Welcome to React Webpack</div>
      <img src={reactImg} />
    </>
  )
};

export default App;
```

Throw in some minor styles

```css
/* src/App.css */

div {
  background-color: teal;
}

img {
  display: flex;
  height: 50px;
  width: 50px;
}
```

Finally wire them together in `index.js`, the entry point of this application

```javascript
// src/index.js

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App />, document.querySelector("#root"));
```

## Configure babel

The above code in the present state means nothing to the browser. We have to make it browser friendly and for that, we need to configure our babel. Let's create `.babelrc` file in the root and add below line to it.

```json
{ "presets": ["@babel/preset-env", "@babel/preset-react"] }
```

## Configure webpack

First create `webpack.config.js` in the root and add below code to it.

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: '[id].js',
    publicPath: ''
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]"
              },
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
}
```

Well, a lot is going on. Let's break and see what's happening.

* **entry** - Represents the entry point of the application. In our case, it's `src/index.js`
* **output** - Represents the outcome. In our case, the application is bundled in `bundle.js` and is stored in the `dist` directory.
* **resolve** - It resolves the list of extensions
* **module** - Out of the box, webpack only understands JavaScript and JSON files. **Loaders** allow webpack to process other types of files and convert them into valid [modules](https://webpack.js.org/concepts/modules) that can be consumed by your application and added to the dependency graph.
* **plugins** - While loaders are used to transform certain types of modules, plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.

## Run the app in dev mode

Almost there! Finally, add the below script to `script` section of `package.json`

```shell
script: {
  "start": "webpack-dev-server --open --hot --mode development"
}
```

And to run the application, open a terminal and hit 

```shell
yarn start
```

# Conclusion ᕦ༼ ͡° ͜ ͝° ༽ᕤ

In this post, we have successfully created our react workspace using webpack and babel. It can easily be extended as per the use case, like adding strict typings support ([Flow](https://flow.org/) or [TypeScript](https://www.typescriptlang.org/)), etc.

**Peace!**

**If you have any questions or feedback, please feel free to comment below.**