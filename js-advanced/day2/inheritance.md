# Inheritance

There is no such thing as class inheritance in Javascript.

The same way there is no Classes and Blueprints.

However there is a way to imitate classical inheritance in Javascript.

### Classical Inheritance

Let's create a class:

```javascript
var Person = function(name) {
  this.alive = true;
  this.name = name;
}

Person.prototype.talk = function() {
  console.log('Talking!');
}

var bogdan = new Person('Bogdan');

bogdan.talk();
```

Now we want to create the class `Singer` that inherits from `Person`.

```javascript
var Singer = function(name) {
  Person.call(this, name);
}

var beck = new Singer('Beck');
```

This will use the constructor of `Person`, to create the `Singer`. However, we can't call `beck.talk()`. We just used the constructor, but we never linked `Person.prototype` to the `Singer.prototype`.

```javascript
var Singer = function(name) {
  Person.call(this, name);
}

Singer.prototype = Object.create(Person.prototype); // or `new Person()`

var beck = new Singer('Beck');
```

Using the constructor and linking the `prototype` we have exactly the same Class. Now we can add the specific methods and properties to our Child Class.

```javascript
var Singer = function(name) {
  Person.call(this, name);
  this.artisticName = 'Fancy ' + name;
}

Singer.prototype = Object.create(Person.prototype);

Singer.prototype.sing = function() {
  console.log('Singing!');
}

var beck = new Singer('Beck');
```

`Singer` has now a new property -`artisticName`- and a new method -`sing`-.

```javascript
//...
beck.sing(); // This will print 'Singing'
beck.artisticName; // 'Fancy Beck'
```

However, this will raise an error: `bogdan.sing()`. The `Person` instance can't use the methods on `Singer`.

There are other ways to do inheritance in Javascript. However, this is the most widely used.

It is very important to understand that order matters:

```javascript
Singer.prototype = Object.create(Person.prototype); // should go first

// child methods should go afterwards
Singer.prototype.sing = function() {
  console.log('Singing!');
}
```

**Pro Tip**

What would happen if you invert the order?

```javascript
Singer.prototype.sing = function() {
  console.log('Singing!');
}

Singer.prototype = Object.create(Person.prototype);
```
