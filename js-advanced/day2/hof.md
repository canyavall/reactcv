# High Order Functions

The term can seem intimidating but in the Javascript world this means a function that uses other functions.

This other function can be expected as parameters or because they are created in the function and then returned.

You have already used high order functions. `forEach`, `map` and `bind` are all examples of high order functions.

`forEach` and `map` expect a function as parameter -also referred as callback-. Whereas `bind` creates another function.

High Order function are useful to abstract certain actions, to configure functions or to keep private data using closures.

Let's see an example:

```Javascript
var createMultiplier = function(num) {
  return function(num2) {
    return num * num2;
  }
}

var multiplyByFive = createMultiplier(5);

multiplyByFive(4); // 20;
```
