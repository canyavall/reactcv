# Functional Programming

First of all is necessary to understand that Functional Programming is a paradigm.

It is a method of software development.

Object Oriented Programming is another paradigm based on objects.

The main difference is that in Functional Programming there is no shared state nor mutable data.

### Concepts of Functional Programming

**Side effects**

This is collateral damage that a function does.

```Javascript
var results = [];
function multiply(num1, num2) {
  var result = num1 * num2;
  results.push(result);
  return result;
}
```

Pushing the result into the `results` array is a collateral damage.

**Pure functions**

Pure functions are those that they always do the same output for the same input without side effects.

```javascript
function multiply(num1, num2) {
  return num1 * num2;
}
```

**Function Composition**

Process of combining two or more functions in order to produce a new function.

`f(g(x))`

**Shared State**

Shared state is any variable, object, or memory space that exists in a shared scope, or as the property of an object being passed between scopes

Object Oriented Programming you have objects passed to other objects that they call all change. This would be *shared state*.

**Immutability**

An immutable object is an object that can’t be modified after it’s created.

A mutable object is that, which can be modified.

We have been working a lot with mutable objects while working with OOP.

Instead of mutating an object, you create a new one based on the previous object with whatever change you wanted.

This can lead to poor memory performance. However, there are plenty of tricks to make functional programming very efficient.

**High Order Functions**

**Currying**

### Usage

In Javascript you usually don't use just one paradigm in your application. But rather a mix of both.

This is why it is important to be familiar with these concepts since they will come later in the course, during interviews and during the professional life as a developer.

### Further reading

For further reading review the four parts of [Gentle Introduction to Functional Javascript](http://jrsinclair.com/articles/2016/gentle-introduction-to-functional-javascript-intro/)
