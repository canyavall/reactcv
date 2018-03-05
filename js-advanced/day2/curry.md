# Currying

Currying is widely used in Functional Programming -more on that later-.

### Partial application

Before learning what currying is, we need to understand Partial Application.

Sometimes we don't have access to all the parameters that a function needs. Just to a few of them. Using Partial Application we can 'configure' the function for later use.

The previous example on High Order Function was a partial application:

```Javascript
var createMultiplier = function(num) {
  return function(num2) {
    return num * num2;
  }
}

var multiplyByFive = createMultiplier(5);

multiplyByFive(4); // 20;
```

vs without partial application

```Javascript
var multiplier = function(num, num2) {
  return num * num2;
}

multiplier(5, 4);
```

In this case we want to multiply two numbers. However, we might not have them both at the same time. That's why we create a partial application of the `multiplier`.

`multiplyByFive` is a partial application of `multiplier`. It already has the number 5, it is waiting for the next number to return the multiplication.

### Currying

Currying is similar to partial application. However, we don't know how the parameters will be split.

Function currying is when you call a function with fewer arguments than it wants and that function returns another function to accept the rest of the arguments.

When all the parameters are passed, the function will return the result.

Non curried example:

```javascript
var multiplyFour = function (num1, num2, num3, num4) {
  return num1 * num2 * num3 * num4;
}

multiplyFour(3, 5, 6, 2);
```

Curried example

```Javascript
var curry = require('curry'); // assume that `curry` comes from a library

var curriedMultiplier = curry(multiplyFour); // `curry` expects a function as parameter
// it returns the curried version of that function

var partialMult = curriedMultiplier(3, 5);
partialMult(6, 2);
```

or

```javascript
var curry = require('curry');
var curriedMultiplier = curry(multiplyFour);

var partialMult = curriedMultiplier(3);
var anotherPartial = partialMult(5, 6)
partialMult(2);
```

The curried version of the function keeps returning a function, until it has all the parameters the function expects and then returns the result.

### Arity

The **Arity** of a function is the number of parameters that the function expects.

In Javascript, in order to get the arity of a function you can use the `length` property.

```Javascript
var multiplyFour = function (num1, num2, num3, num4) {
  return num1 * num2 * num3 * num4;
}

multiplyFour.length; // 4
```
