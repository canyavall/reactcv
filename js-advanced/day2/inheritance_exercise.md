# Inheritance Exercise

### People!

We know that every person is different. We are going to implement a silly approximation of that.

Create the `Person` class. The person class has:
- `firstName`, `lastName` and `isAlive` attributes
- `greet` method that will print `Hello this is Laurent Meyer`.

Then we will create different type of person:

**Writer**

Apart from the `Person` attributes
- It will also have a `pseudonym`. Which will be the first and last name written backwards.
- `signBook` should print a message with the `pseudonym`

**Developer**

Apart from the `Person` attributes
- `codename`. Which will be passed in the initialization.
  ```javascript
  var manel = new Developer('Manel', 'Pavon', 'Ping Pong King');
  ```
- `impress`. Will be a method that will print 5 lines of 0s and 1s and sign it with the `codename`.

**Singer**

Apart from the `Person` attributes
- `artisticName`. Which will be the name with `Fancy` in front of the first and last name.
- `melody`. Will be a string passed in the initialization.
- `sing` should print the `melody` 3 times.

**Junior Developer**

Apart from the `Developer` attributes
- `isStruggling` should be `true`;
- `complain` should print the `codeName` with capital letters.
- `workHard` should print 10 times: `<codeName> + is working hard`
