# ES6

### ECMAScript

Javascript is a programming language.

However, we have learned that this programming language is run in different environments. Each of them can support different features of the language.

The standardized language is set by the [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript) specification.

[ECMAScript](http://www.ecma-international.org/memento/TC39.htm) belongs to ECMA.

[ECMA](http://www.ecma-international.org/memento/history.htm) is an association created by different Computer Manufacturer to help standarize some techniques such as programming.

### ES6

ES6 or [ECMAScript 2015](http://www.ecma-international.org/ecma-262/6.0/) is the specification created in June 2015. It added plenty of new features to the language.

For a complete list of all the new features check this [page](http://es6-features.org/#Constants).

### Main ES6 Features

This is a list with some examples for each features.

For an explanation of the main features check this [article](https://webapplog.com/es6/)

**Variable declaration**

Use `let` or `const` for variable declaration:

```Javascript
const name = 'Fante';
let age = '120';
```

More on `let`, `const` and `var` in this great [article](https://rainsoft.io/variables-lifecycle-and-why-let-is-not-hoisted/#5letvariableslifecycle)

**Default parameters**

Functions with default parameters.

```Javascript
function multiply(num1, num2 = 3) {
  return num1 * num2;
}

multiply(4, 6); // => 24
multiply(4); // => 12
```

**Template literals**

New string construction. Allows for interpolation of JS expressions in strings.

```Javascript
const name = 'Fante';
const age = '120';

const greeting = `Hello my name is ${name} and I am ${age} years old`;
```

It also supports multi lines:

```Javascript
const greeting = `
  - Name: ${name}
  - Age: ${age}
  - Double age: ${age * 2}
`;
```

**Destructuring Assignment**

Deconstruct an array or an object.

```Javascript
const writer = {
  name: 'Fante',
  age: 120
};

let { name, age } = writer;

const anotherWriter = {
  name: 'Bukowski',
  age: 69
}

const writers = [writer, anotherWriter];

const [ fante, buk ] = writers;
```

**Object Property Shorthand**

```javascript
const name = 'Fante';
const age = 120;

const writer = { name, age };
```

**Object Computer Property Names**

```Javascript
const propertyName = 'doubleAge';
const age = 20;

const writer = {
  [propertyName]: age * 2,
  age
};
```

**Object method properties**

```javascript
const writer = {
  name: 'Fante',
  write() {
    console.log(`${this.name} is writing`);
  }
}

writer.write();
```

**Arrow functions**

A new way to define functions.

```javascript
const doSomething = () => {
  console.log('Doing something');
}

const multiply = (num1, num2 = 3) => num1 * num2;
```

**Spread operator**

*Concatenating arrays*

```javascript
const nums1 = [2, 4];
const nums2 = [5, 10];

const totalNums = [ ...nums1, ...nums2 ];
```

*Merging objects*

```javascript
const name = {
  name: 'Hornby',
};

const printing = {
  write() {
    console.log(`${this.name} is writing`);
  }
}

const writer = { ...name, ...printing };
```

*In a function parameter*

```javascript
const writer = {
  name: 'Fante',
  signFans(...fans) {
    fans.forEach(fan => console.log(`To my friend ${fan}, from ${this.name}`))
  }
}

writer.signFans('Bogdan', 'Laurent', 'Manel');
writer.signFans('Yusef', 'Llorenç');
```

**Classes in ES6**

New syntax for working with Classes in ES6

```javascript
class Writer {
  constructor(name, age) { // class constructor
    this.name = name;
    this.age = age;
  }

  write() { // class method
    console.log(`${this.name} is writing`);
  }
}

const fante = new Writer('Fante', 120);
fante.write();
```

**Modules in ES6**

New way of importing and exporting.

Importing:

```javascript
import someVar from './someVar'; // custom module
import { name } from './name';

import moment from 'moment'; // npm package
```

Exporting:

```javascript
const someVariable = 'Hello';

export default someVariable;
```

```javascript
const name = 'Fante';

export name;
```
