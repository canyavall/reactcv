# JS Advanced - Assignment

Today there are a few small projects to perform.

### ES6 Pong

Refactor your Pong game from JS Fundamentals Assignment.

The new Pong should use Webpack and ES6 classes.

No need to add any new functionality.

Keep the separation of files. Use `import` and `export` when necessary.

### Classes and Inheritance Exercise

Create the `Pet`, `Mammal`, `Dog` and `Cat` classes so that you can run the following:

```javascript
var firstPet = new Pet('Buk');
firstPet.yellName();

var firstMammal = new Mammal('Fante');
firstMammal.yellName();
firstMammal.walk();

var doggy = new Dog('Hornby', 'Laurent');
doggy.yellName();
doggy.walk();
doggy.bark();

var markov = new Cat('Markov', 'Bogdan');
markov.yellName();
markov.walk();
markov.spoon();
```

Output should be:

```
BUK!!!
FANTE!!!
Fante is going for a walk
HORNBY!!!
Hornby is going for a walk
Laurent, woof woof!!!
MARKOV!!!
Markov is going for a walk
Bogdan GET OUT!
```

### Convert to ES5

Convert the following ES6 code to the previous ES5:

```javascript
({ routes }) => ({ routes })
```

### Advanced Exercises

Implement and add tests for the following list of functions:

- [every](https://lodash.com/docs/4.17.4#every)
- [some](https://lodash.com/docs/4.17.4#some)
- [defaults](https://lodash.com/docs/4.17.4#defaults)

### Bonus

- [union](https://lodash.com/docs/4.17.4#union)
- [omit](https://lodash.com/docs/4.17.4#omit)
- [pickBy](https://lodash.com/docs/4.17.4#pickBy)
- [Translate to ES5](https://twitter.com/_ericelliott/status/853811545578520577)
