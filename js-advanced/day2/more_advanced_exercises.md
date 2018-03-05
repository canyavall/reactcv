# More Advanced Exercises

Before trying to tackle an exercise think carefully on what you are being asked.

If there are no examples provided. Create your own before implementing the solution.

### `myBind`

Define a `myBind` function that simulates the `bind` method on `Function`.

Remember that `bind` creates a new function, that when called, calls the
passed function with the keyword `this` set to the object passed when binding.

*DO NOT WORRY ABOUT PARAMETERS FOR NOW*

```javascript
var obj = {
  name: 'Markov'
}
function printName() {
  console.log('Thy name is: ' + this.name);
}
printName();
var boundPrint = myBind(printName, obj);
boundPrint();
```

---

### Improve `myBind`

Improve your `myBind` to accept parameters just like `bind` does
https://developer.mozilla.org/ca/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

First when binding the function. Also when calling the function returned by `bind`.

```javascript
var obj = {
  name: 'Markov'
}
//
function greetingsTo(name) {
  console.log('Hello ' + name + ', my name is: ' + this.name);
}
greetingsTo('Fante');
var boundGreeting = myBind(greetingsTo, obj);
boundGreeting('Fante');

function greetingsToAll(name, name2) {
  console.log('Hello ' + name + ' and ' + name2 + ', my name is: ' + this.name);
}
greetingsToAll('Fante', 'Hornby');
var boundToAll = myBind(greetingsToAll, obj);
boundToAll('Fante', 'Hornby');

var boundAndFirst = myBind(greetingsToAll, obj, 'Fante');
boundAndFirst('Hornby');
```

---

### Currying Calculator

Define a function that returns a currying calculator.

The currying calculator will keep returning a function until 5 parameters are passed in total.

Then it returns the sum of all 5 params.

```javascript
var curryCalc = createCurryCalc();
var partial = curryCalc(2, 3, 4);
console.log(partial(1, 3));

var curryCalc2 = createCurryCalc();
var partial2 = curryCalc2(2);
partial2 = partial2(4, 5)
console.log(partial2(1, 3));
```

---

### `curry`

Define your `curry` function implementation.

`curry` expects a function, any function, and returns a curried version of it

**Tip: Remember what is the 'arity' of a function**

---

### `myNew`

Define `myNew` function that simulates the `new` keyword.

You already saw an implementation of this in the notes. However, that implementation does not handle parameters.

Add the possibility to pass parameters to your `myNew`. As many as the constructor needs.
