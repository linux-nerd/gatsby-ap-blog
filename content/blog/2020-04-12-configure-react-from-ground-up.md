---
title: Configure React from ground up
date: 2020-04-12T11:27:43.817Z
description: Configure React from ground up using Webpack and Babel
---
# Introduction ꒰⑅•ᴗ•⑅꒱

The easiest and the most effective way to write react code is to spin up a dev environment via [create react app](https://github.com/facebook/create-react-app). I bet everyone who is into React development has used `create react app`. The best and the worst thing about **CRA** is `abstraction`. It abstracts away the details which is required for the setup. For some one new to react, its heaven as that person can solely focus on learning react. For a seasoned/senior developer, it makes more sense to know how the setup works. In this post, I will setup the dev environment for react from ground up using [Webpack](https://webpack.js.org/) and [Babel](https://babeljs.io/).

# Why do we need Webpack and Babel? (◞‸ლ)

# What do we need for basic setup? (｀_´)ゞ

Our aim is to have a basic setup which -

* understand `jsx` and new javascript syntax (ESNext)
* load css and images via `import`
* is able to spin up a dev server and support hot reloading

In the rest of the post we will try to achieve the above mentioned points.

# Let's begin the warmup ＼(●o○;)ノ

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
We also needs babel loaders for files, css and styles.

```shell
yarn add -D css-loader file-loader style-loader
```
Phew, too many dependencies! (◣_◢)

Let's see what all does - 
* **@babel/core**
* **@babel/preset-env**
* **@babel/preset-react**
* **babel-loader**
* **css-loader**
* **file-loader**
* **style-loader**

Finally add `react` and `react-dom`

```shell
yarn add react react-dom
```

# Code Walk ᕕ( ᐛ )ᕗ

# Conclusion ᕦ༼ ͡° ͜ ͝° ༽ᕤ