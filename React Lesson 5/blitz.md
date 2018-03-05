# Blitz Project

This is a 3 day project / assignment.

You have 3 days to get as far as you can.

By far we also mean Code Quality. Focus more on understanding and quality of the code than just achieving new features.

**Use instructors as much as you want**

Recommended to use [material-ui](http://www.material-ui.com/#/components/app-bar).

We also encourage you to use `redux-thunk` and / or your custom middleware ;)

### Getting Started

First implement the login. Do not even bother with registration at this point.

There is a long setup for it:

- Implement Redux. One reducer `currentUser` should be enough at this point.
- Setup `material-ui` at this point if you plan to use it.
- Setup React Router. Even if it's only for one path at this point.
- Use `redux-thunk`.

Review the [auth notes](auth.md) at this point.

Steps after setting up:

- Render a form with an input for the email and another one for the password in `/`.
- When the form is submitted, make a POST Request to `/login`. Send the email and password as body. You will need to `JSON.stringify` it.
  ```javascript
  const config = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(data),
  };
  ```
- Dispatch the action that will add the response data to the Redux Store
- At this point the user is already logged in

To test that everything is working, make a Request to `/api/feed` following the steps in the [auth notes](auth.md).

### Features

Implement as much as you can of the following features.

**Home**

Path: `/`

It should render a form to log in and a for to register register.

Use a [Tabs](http://www.material-ui.com/#/components/tabs) to switch from one

If you try to go here and you are already logged in it should redirect to the Feed

**Feed**

Path: `/feed`

Render all the `blitzs` from the users that the current user is following.

User should be able to create a blitz from here.

**User Details**

Path: `/users/:userId`

Render the user information of the user plus his/her blitzs.

Current user should be able to Follow or Unfollow with on click.

**Likes**

Every time that you show a Blitz, you should show whether the it is liked by the current user.

Also, the user should be able to like or unlike with one single button.

**Likes List**

Path: `/likes`

List of all the Blitzs that the User likes.

**Users**

Path: `/users`

Renders a list of Users. You should be able to Follow and Unfollow with a single click.

### API Documentation

If you finished your Blitz Project in the Backend weeks, use that one.

Otherwise you can use this API: `https://propulsion-blitz.herokuapp.com`.

The paths for this urls are:

Public Paths:

- POST: `/api/login`. Body should have an `email` and a `password`.
- POST: `/api/users`. Body should have an `email` and a `password`.

Paths where Auth is required:

- GET: `/api/feed`
- GET: `/api/users/:userId`
- POST: `/api/blitzs`. Body should have `content` property.
- POST: `/api/blitzs/:blitzId/like`. Toggles like.
- POST: `/api/users/:userId/follow`. Toggle follow.
- GET: `/api/users`.
- GET: `/api/me`. Get the user data. For when you only have the token.
