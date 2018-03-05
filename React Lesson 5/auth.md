# Frontend Auth

The idea of Authentication is to only allow the access to some resources to some specific users.

Not every request can be accepted. Also, you might use the same `path` to give a different response based on the user.

### Authentication and Authorization

Authentication is about verifying who you are.

Authorization is about giving access depending on who you are.

Depending on your role in an organization you might have access to some resources but not to others. Roles can be, visitors, admins, writers, ...

### Front end Auth

There are 2 main steps in Auth. Login and the Session.

**Login**

Sending your data usually email and password to backend in order to verify them.

**Session**

After logging in, in every subsequent request, sending *somehow* who you are.

### JSON Web Token or JWT

In this bootcamp we are going to use [JWT](https://jwt.io/) as a Auth Standard.

JWT for the front end is pretty simple.

After logging in, you will receive as part of the user a `token`.

From then on, to keep the Session open, you will add that token in the Header of your requests.

Specifically you will use the header `Authorization` with the value `Bearer <token>`.

### Implementation with React and Redux

We have been using React and Redux as our main Front-end tools.

Login is an HTTP Request, usually a POST sending the email -or username- and password.

In the response you will have the token.

What you should do with the response is store it in the Redux Store. For example, have a `currentUser` reducer and store it there.

Then, in the following requests, check the `currentUser` state. If you have one, get the token and add it to your Header for the following request.

Here is an example using `redux-thunk`.

```javascript
export const fetchFeed = () => (dispatch, getState) => {
  const currentUser = getState().currentUser;
  const myHeaders = new Headers({
    Authorization: `Bearer ${currentUser.token}` // this is the recommended header if you are using JWT
  });
  const config = {
    method: 'GET',
    headers: myHeaders,
  };

  fetch(`${devUrl}/api/feed`, config)
  // ...
}
```

All the requests after logging in, should check the `currentUser` state and add the Header. This is what a **Session** is.

### Keeping Session

What happens when we refresh the page? The Redux State is reset and we would need to log in again.

How can we avoid that?

**Local Storage**

One common way is to save the token in the [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

In the localStorage we can store strings that will be there after refreshing the page.

The is a different localStorage for each website. Which means, that you can't access what other pages save there. Nor can other pages have access to what you save.

The localStorage is a key-value store.

Storing something:

```javascript
localStorage.setItem('myCat', 'Tom');
```

Retrieving something:

```javascript
localStorage.getItem('myCat'); // 'Tom'
```

If there is nothing in the key -`myCat`- you will get `undefined`.

**Keeping Session**

Store the user information with the token:

```javascript
localStorage.setItem('user', JSON.stringify(user));
```

Then, you can try to retrieve the user object always that you initialize your app.

```javascript
store.dispatch(fetchLocalUser()); // fetchLocalUser is an Action Creator
```

```javascript
export const fetchLocalUser = () => (dispatch) => {
  const userStr = localStorage.getItem('user');
  if (userStr) {
    const user = JSON.parse(userStr);
    dispatch(setUser(user)); // dispatching an action to save it to Redux Store
  }
}
```

### Logout

Logout just means to reset the `currentUser` state to an empty object and clear the localStorage.

### Conclusions

1. Log in and get the token.
2. Store the token in Redux.
3. For every Request, check Redux State and add the Header if it applies.

For persisting Sessions

1. Store the User Object in *localStorage*.
2. Retrieve it at the initialization of the App.
3. Dispatch an action to Store it in Redux.
