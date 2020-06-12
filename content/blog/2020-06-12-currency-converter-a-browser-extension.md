---
title: 'Currency Converter: A Browser Extension'
date: 2020-06-12T21:20:00.093Z
description: 'Currency Converter: A Browser Extension'
---
![Browser Extension](/img/browser_extensions.jpg "Browser Extension")

# Motivation

Few weeks back I tried to create a browser extension as a lab's day project. The idea was to ease the development experience, like filling up a long form for testing purpose or add/remove features without changing the user. Although I was not able to complete it in two day's time, but I gained some insight which may help folks who are new to it.

# Why Browser Extension

My sole purpose was to ease the developer/tester experience by providing an extra interface to tweak the behaviour of the application, but there are a lot of interesting things that can be done with browser extensions. But before coming to benefits, let's see what are browser extensions.

## What are Browser Extension

An extension adds features and functions to a browser. It’s created using familiar web-based technologies—HTML, CSS, and JavaScript and has its own set of APIs. This means it can leverage all the existing APIs and has access to all new Extension APIs. A great power boost.

## Benefits

We can get creative and achieve following.

* Enhance or complement a website
* Add theme to all websites a user visits
* Add/Remove content from web page (AdBlocker)
* Add tools and new browsing features
* Games
* Development Tools

# Browser Extension Architecture

Here's what we will achieve

![Web extension popup architecture diagram](/img/web-ext-popup.png "Web extension popup architecture diagram")

`manifest.json` is the heart of our extension. It contains basic metadata such as its name, version and the permissions it requires. It also provides pointers to other files in the extension. In our addon, the manifest file points to a browser action.

The `browser action` consists of icons and JavaScript, HTML and CSS files.

The `Popup` or our addon makes a call to the currency exchange endpoint and retrieves the information related to current rate.

# Let's dive in

Here is a glimpse of what we are going to build

![Currency Converter](/img/screenshot-2020-06-12-at-22.13.34.png "Currency Converter")