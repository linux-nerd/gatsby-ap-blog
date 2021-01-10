---
title: 'S.O.L.I.D: Liskov''s Substitution Principle'
date: 2020-03-28T21:33:19.699Z
description: >-
  if S is a subtype of T, then objects of type T may be replaced with objects of
  type S (i.e. an object of type T may be substituted with any object of a
  subtype S) without altering any of the desirable properties of the program
featured_image:
  src: /img/solid-principles_-single-design-principle-881x441-550x275.png
  alt: Liskov's Substitution Principle
  title: Liskov's Substitution Principle
tags:
  - SOLID
  - OOP
  - LSP
  - OOD
  - Java
---
# What is S.O.L.I.D by the way?

[As per Wiki](https://en.wikipedia.org/wiki/SOLID):

> In object-oriented computer programming, SOLID is a mnemonic acronym for five design principles intended to make software designs more understandable, flexible and maintainable.

**SOLID** is an acronym for 5 important design principles when doing OOP. It was first introduced by Robert C. Martin ([Uncle Bob](https://twitter.com/unclebobmartin?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor)), in his 2000 paper [Design Principles and Design Patterns](https://web.archive.org/web/20150906155800/http://www.objectmentor.com/resources/articles/Principles_and_Patterns.pdf).

**SOLID** stands for -

* **S** - [Single Responsibility Principle](https://blog.abhishekprakash.com/2020-03-25-s-o-l-i-d-single-responsibility-principle/)
* **O** - [Open/Closed Principle](https://blog.abhishekprakash.com/2020-03-25-s-o-l-i-d-open-closed-principle/)
* **L** - Liskov's Substitution Principle
* **I** - Implementation Segregation Principle
* **D** - Dependency Inversion Principle

In this article, I will be covering **L - Liskov's Substitution Principle**. *Note - The examples will be in Java, but applies to any OOP language.*

**Peace! If you have any questions or feedback, please feel free to comment below.**