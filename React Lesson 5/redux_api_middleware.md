# API Redux Middleware

This is a pretty advanced exercise.

### AJAX like Actions

Create a Redux Middleware that takes care of doing all the requests to the API.

It should have an AJAX like interface.

Let's take a look at an example. This is could be the `fetchFeed` Action:

```javascript
{
  type: 'API',
  url: '/api/feed',
  method: 'GET',
  success: addBlitzs,
}
```

Where `addBlitzs` is the Action Creator.

The `success` callback should be an Action Creator that will be called with the response of the Request.
