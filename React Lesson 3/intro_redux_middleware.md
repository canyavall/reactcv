# Intro to Redux Middleware

Remember the GIF explaining Redux:

![Redux](https://camo.githubusercontent.com/5aba89b6daab934631adffc1f301d17bb273268b/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f3336343831322f696d616765732f323438343535322f415243482d5265647578322d7265616c2e676966)

We need to change it slightly:

![Redux with middleware](https://camo.githubusercontent.com/9de527b9432cc9244dc600875b46b43311918b59/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f3336343831322f696d616765732f323438343739302f415243482d5265647578322d657874656e6465642d7265616c2d6465636c657261746976652e676966)

As you can see, there is one more concept there: **Middlewares**

### What is a middleware

From [Redux Docs](http://redux.js.org/docs/advanced/Middleware.html):

```
It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer
```

Put it in a nutshell, it's a function that will be called with the Action before the Action gets to the Reducer.

In this function, you can either let the Action to move on, you can stop it to move on, or you can change it and them send it to the next one.

### Middleware Chain

The middleware is like a chain.

There is beginning and an end. Each middleware in the chain can either can pass it along to the next one, or stop it there.

We won't go into detail at the moment.

### Redux Thunk

`redux-thunk` is one of the most useful Redux Middleware.

Check their [Github Page](https://github.com/gaearon/redux-thunk).

Remember how Action needs to be an Object, with a `type` property?

With Thunk, the Actions can be functions. This function, will be caught by the middleware and it will be called.

The key here is that `redux-thunk` will call this function. And it will call it passing it two useful parameters. The `dispatch` and `getState`.

`dispatch` allow to dispatch other actions from inside the function.
`getState` allow us access to the Redux State in case we need it.

### Simple Example

We have this action creator:

```javascript
function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}
```

We might have a button to only increment it, when the number is odd, not when it's even.

We could implement this logic in the Component. But then if we want to use that logic somewhere else we would have to copy it.

We can use a function as an Action instead.

Now, we will have an Action Creator that instead of returning an object, it will return a function.

```javascript
function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}
```

The function returned is the Action. This Action will be caught by `redux-thunk` middleware and it will call it passing it two parameters. Since we want to use them both, we add them to the function signature.

Take some time to understand what is going on in this Action Creator called `incrementIfOdd`. It is not obvious at first glance, unless you are used to Redux Middleware. Which you are not at this point.

### How to setup Redux Thunk

First of all install the `npm` package.

```
npm install --save redux-thunk
```

Then apply the middleware.

Wherever you create your store: maybe `src/store/index.js`.

```javascript
import { createStore, applyMiddleware } from 'redux'; // check we also require `applyMiddleware`
import thunk from 'redux-thunk'; // require the Middleware
import reducer from './reducers';

const store = createStore(
  reducer,
  applyMiddleware(thunk) // second parameter to `createStore`
);
```

To the `createStore` we need to pass it a second parameter. The return value of invoking `applyMiddleware` with the `thunk` middleware.

### Useful Redux Thunk Example

The previous example was a simple one. But not something you might think of doing in a real life application.

One of the most common use cases for using `redux-thunk` or Redux Middleware is to make a request to the server to get data.

So far, you have been using `fetch` in the component, and then dispatching the action with the response:

*If you were able to add the Ron Swanson Quote to Redux**

`components/Header/index.js`:

```javascript
fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
  .then(res => res.json())
  .then(quotes => {
    const action = addQuote(quotes[0]);
    this.dispatch(action);
  });
```

However, the idea is to move the `fetch` to an Action. The means that in the Component we would have something like:

`components/Header/index.js`:

```javascript
const action = getQuote();
this.props.dispatch(action);
```

`getQuote` is an Action Creator that returns a function. This function will be called by the middleware passing it the `dispatch` and the `getState`.

We won't need the `getState`, so we won't add it to the signature.

Wherever we have our actions: `src/store/actions/quotes.js` for example.

```javascript
const getQuote = () => { // Action Creator
  return (dispatch) => { // returns a function, which is the Action
    fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(res => res.json())
      .then(quotes => {
        const action = addQuote(quotes[0]);
        dispatch(action);
      });
  }
}
```

As you can see, we just copy pasted the code that was in the Component and moved it to an Action.

At this moment, the Component has no idea where the quote comes from. It could be and API, the web storage, the state, ... It doesn't matter.

### More Info

For more information, check [Redux Docs](http://redux.js.org/docs/advanced/Middleware.html) on the middleware. They are amazing.
