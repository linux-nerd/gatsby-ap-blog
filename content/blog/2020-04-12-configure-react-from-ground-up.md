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

# Let's begin ＼(●o○;)ノ

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


# Conclusion ᕦ༼ ͡° ͜ ͝° ༽ᕤ