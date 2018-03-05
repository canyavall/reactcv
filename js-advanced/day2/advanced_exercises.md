# Advanced Exercises

Before trying to tackle an exercise think carefully on what you are being asked.

If there are no examples provided. Create your own before implementing the solution.

### Expanded Math Object

Create an expansion of the Math Object and add a method that returns
a random integer between 0 and the Max number passed as parameter

You should be able to call all the same methods on `myMath` as in `Math`.

Apart from those methods, `myMath` has a new method `randomInt` that returns a random integer.

`randomInt` expects a number as first parameter. It will return a random integer between 0 and that number -included-.

If a second parameter is passed, it will be considered as the minimum. It should return a random integer between the second parameter and the first one.

```javascript
console.log(myMath.randomInt(5)); // 3 for example
console.log(myMath.randomInt(10)); // 10 for example
console.log(myMath.random()); // some random number between 0 and 1
console.log(myMath.round(0.5));
console.log(myMath.randomInt(10, -4)); // -3 for example
```

---

### Add `reverse` method to `String` object

Add the `reverse` method to the String prototype

```JavaScript
console.log('hello'.reverse());
```

---

### `myEach`

Define a `myEach` function that simulates the `forEach` method on `Array`.

`myEach` should be a function that expects an array and a function.

DO NOT USE `forEach` in the implementation.

---

### `myMap`

Define a `myMap` function that simulates the `map` method on `Array`.

Similar implementation than `myEach`. You can use your own `myEach`.

DO NOT USE `map`, but you can use your own `myEach`.

---

### `myFilter`

Define a myFilter function that simulates the `filter` method on `Array`.

Similar implementation than `myEach`. You can use your own `myEach`.

DO NOT USE `filter`, but you can use your own `myEach`.

---

### `merge`

`merge` takes two or more objects and returns one objects with all the properties of the objects passed.

If some property is in more than one object, the object passed first should have priority.

Example:

```javascript
merge({ a: 3, b: 2 }, { a: 2, c: 4 }); // { a: 3, b: 2, c: 4 }
merge({ a: 3, b: 2 }, { a: 2, c: 4 }, { e: 8, c: 5}); // { a: 3, b: 2, c: 4, e: 8 }
```

---

### `invert`

`invert` takes an object as a parameter.

It returns a new object with the values of the passed object as properties, and the keys as values of those properties.

Example:

```javascript
invert({ a: 3, b: 2 }); // { 3: 'a', 2: 'b' }
```
