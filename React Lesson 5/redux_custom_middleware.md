# Redux Custom Middleware

We have already seen what middleware is and how to use one with `redux-thunk`.

However, the true potential comes from custom middleware.

Custom middleware are middleware created by you.

### Redux Thunk

Remember Redux Thunk.

```javascript
import { createStore, applyMiddleware } from 'redux'; // check we also require `applyMiddleware`
import thunk from 'redux-thunk'; // require the Middleware
import reducer from './reducers';

const store = createStore(
  reducer,
  applyMiddleware(thunk) // second parameter to `createStore`
);
```

We were passing `thunk` to `applyMiddleware` to add it as middleware of our Redux Store.

However we could have written `thunk` ourselves. Is not that hard.

From the `thunk` [code](https://github.com/gaearon/redux-thunk/blob/master/src/index.js):

```javascript
const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState, /*extraArgument*/);
  }

  return next(action);
};
```

Focus on the body for a moment:

```javascript
if (typeof action === 'function') {
  return action(dispatch, getState);
}

return next(action);
```

If `action` is a function, then call it. Remember that Actions are usually Objects.

However, with `redux-thunk` we were able to dispatch functions as Actions.

Remember also that those functions, were expecting `dispatch` and `getState`.

This line does all the magic: `action(dispatch, getState);`.

### Custom Middleware

What should be a middleware?

A function that returns a function, that returns a function. This last function is the middleware.

No kidding. This is what a middleware is.

```javascript
const thunk = ({ dispatch, getState }) => next => action => {
  // body of the middleware
}
```

Read the previous code until you are slightly comfortable with it.

### Middleware Parameters

The first function expects the `store` to be passed as argument. Usually the most useful properties there are `dispatch` and `getState`. Hence `({ dispatch, getState })`.

The second function will be passed `next`. This is a function that will allow the middleware to pass whatever you want to the next step in the middleware chain. Or the reducers if that is the case.

When `redux-thunk` finds an object that is NOT a function, it just passes it along.

```javascript
return next(action);
```

The parameter of the last function `action` is the actual Action that has been dispatched.

All this parameters:

- `store`, and therefore `dispatch` and `getState`.
- `next`
- `action`

Are available to the body of the Middleware if we want to use them.

Remember the body `redux-thunk`.

```javascript
if (typeof action === 'function') {
  return action(dispatch, getState);
}

return next(action);
```

### Simple Middleware Example

It will just log the type of the action being dispatched.

```javascript
const logging = ({ dispatch, getState }) => next => action => {
  console.log('in da logging middleware');
  console.log(action.type);

  return next(action);
};
```

Then, let's add it to the store.

```javascript
import { createStore, applyMiddleware } from 'redux'; // check we also require `applyMiddleware`
import thunk from 'redux-thunk'; // require the Middleware
import reducer from './reducers';
import logging from './logging';

const store = createStore(
  reducer,
  applyMiddleware(thunk, logging) // second parameter to `createStore`
);
```

*If you want, try to implement it on some of your projects*
