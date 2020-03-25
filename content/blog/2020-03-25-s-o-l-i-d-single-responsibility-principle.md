---
title: "S.O.L.I.D: Single Responsibility Principle"
date: 2020-03-25T22:42:05.832Z
description: >-
  In programming, the Single Responsibility Principle states that every module
  or class should have responsibility for a single part of the functionality
  provided by the software.
---

# What is S.O.L.I.D by the way?

[As per Wiki](https://en.wikipedia.org/wiki/SOLID):

> In object-oriented computer programming, SOLID is a mnemonic acronym for five design principles intended to make software designs more understandable, flexible and maintainable.

**SOLID** is an acronym for 5 important design principles when doing OOP. It was first introduced by Robert C. Martin ([Uncle Bob](https://twitter.com/unclebobmartin?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor)), in his 2000 paper [Design Principles and Design Patterns](https://web.archive.org/web/20150906155800/http://www.objectmentor.com/resources/articles/Principles_and_Patterns.pdf).

**SOLID** stands for -

- **S** - Single Responsibility Principle
- **O** - [Open/Closed Principle](https://blog.abhishekprakash.com/2020-03-25-s-o-l-i-d-open-closed-principle/)
- **L** - Liskov's Substitution Principle
- **I** - Implementation Segregation Principle
- **D** - Dependency Inversion Principle

In this article, I will be covering **S - Single Responsibility Principle**. _Note - The examples will be in Java, but applies to any OOP language._

# S - Single Responsibility Principle (SRP)

> A class should have one, and only one reason to change.

In programming, the Single Responsibility Principle states that every module or class should have responsibility for a single part of the functionality provided by the software.

# Anti SRP Usage

An ~~action~~ _example_ speaks louder than voice

```java
package app.singleResponsibility;

public class Employee {
  private String name;
  private int perHourRate;

  public Employee(String name) {
    this.name = name;
  }

  public String getName() {
      return name;
  }

  public void setPerHourRate(int rate) {
    this.perHourRate = rate;
  }

  public int getPerDayRate() {
    return perHourRate * 8;
  }


  public String markAttendance() {
    return String.format("%s is present", name);
  }
}
```

And here goes the UML Diagram for the geeks -

![UML diagram of Employee class](https://dev-to-uploads.s3.amazonaws.com/i/q1l8otjyic58fof0662g.png)

So we have a very basic `Employee` class with two private attributes and a few public methods. At first glance, it looks fine, but it's actually breaking **SRP**.

`Employee` class not only deals with Employee details but it is also concerned with the implementation of the `markAttendence` method. It has two reasons to change now.

# SRP in Action

The previous example violates the SRP law of single responsibility. Let's dig a little further and try to correct the `Employee` class.

```java
// Employee.java
package app.singleResponsibility;

public class Employee {
  private String name;
  private int perHourRate;

  public Employee(String name) {
    this.name = name;
  }

  public String getName() {
      return name;
  }

  public void setPerHourRate(int rate) {
    this.perHourRate = rate;
  }

  public int getPerDayRate() {
    return perHourRate * 8;
  }
}
```

The updated UML diagram for `Employee` class -

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/vh1ab8ndno41wjxqbwfj.png)

We have removed the `markAttendance` method from the `Employee` class to make it compliant with SRP.

Let's go further and create the `AttendanceTracker` class to deal with attendance.

```java
// AttendanceTracker.java
package app.singleResponsibility;

public class AttendanceTracker {
  private Employee emp;

  public AttendanceTracker(Employee emp) {
    this.emp = emp;
  }

  public String markAttendance() {
    return String.format("%s is present", emp.getName());
  }
}
```

UML diagram for `AttendanceTracker` class

![UML diagram for AttendanceTracker class](https://dev-to-uploads.s3.amazonaws.com/i/6gusln1h4gamawphy8s2.png)

`AttendanceTracker` class takes an employee object as a dependency and marks the attendance of that employee.

Now both the classes adhere to the **Single Responsibility Principle** and it makes the maintenance and testing a breeze.

# TL;DR

The more responsibilities (reason to change) a class has, it's going to get harder to implement some new features and the maintenance will be a growing pain that will burn more time as the project grows, adding more complexity and making the classes responsibilities strongly coupled to each other.

So, always have small classes with a single responsibility.
