---
title: Testing my dummy blog
date: 2020-03-25T15:58:43.936Z
description: WTF
---
# What is S.O.L.I.D by the way?

[As per Wiki](https://en.wikipedia.org/wiki/SOLID):

> In object-oriented computer programming, SOLID is a mnemonic acronym for five design principles intended to make software designs more understandable, flexible and maintainable.

**SOLID** is an acronym for 5 important design principles when doing OOP. It was first introduced by Robert C. Martin ([Uncle Bob](https://twitter.com/unclebobmartin?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor)), in his 2000 paper [Design Principles and Design Patterns](https://web.archive.org/web/20150906155800/http://www.objectmentor.com/resources/articles/Principles_and_Patterns.pdf).

**SOLID** stands for -

* [**S** - Single Responsibility Principle](https://dev.to/linuxnerd/s-o-l-i-d-single-responsibility-principle-3m4g/)
* **O** - Open/Closed Principle
* **L** - Liskov's Substitution Principle
* **I** - Implementation Segregation Principle
* **D** - Dependency Inversion Principle

In this article, I will be covering **O - Open/Closed Principle**. *Note - The examples will be in Java, but applies to any OOP language.*

# O - Open/Closed Principle (OCP)

The Open/Closed Principle (OCP) is the SOLID principle which states

> Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.

In simple words, we should strive to write code that can be extended without the need for modification, when a change request is made by the customer or a product owner.

# Anti OCP usage

We will first look at an example that breaks the OCP principle.

```java

```

So, we have a `GeneralInvestment` class and an `InvestmentManager` class. The sole purpose of `InvestmentManager` is to calculate return of type `GeneralInvestment`.

Going further we have a feature request to calculate return on `AdvancedInvestment`. Let's add some code to accomplish that.

```java

```

Now, we have `AdvancedInvestment` in place. Let's update our `InvestmentManager` class to handle new case.

```java

```

This works! But, it violates the OCP since `InvestmentManager` class is

* Closed for extension
* Open for modification

# OCP in action

Let's try and implement the above-mentioned scenario without breaking OCP.

**Step 1:** Create an interface

```java

```

**Step 2:** Update `GeneralInvestment` and `AdvancedInvestment` classes by implementing `Investment` interface

```java

```

**Step 3:** FInally update the `InvestmentManager` class

```java

```

Here is the UML diagram to reduce verbosity: ![UML diagram for ocp principle](https://dev-to-uploads.s3.amazonaws.com/i/mzo65d3j9d3u0bj1iyvc.png)

Here we go! Going further if we have a new requirement to add different types of Investment we can create a new class, implement the `Investment` interface and we are done. No need to modify any existing code.

# TL;DR

Always keep in mind to make your code open for extension and closed for modification. This will make the maintenance of code so easy.

The example in this post has used a compositional design pattern (Strategy Pattern) to achieve OCP, but it can also be achieved through the use of inheritance.

**Peace! If you have any questions or feedback, please feel free to comment below.**