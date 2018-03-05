# React Router

`react-router` is an npm package to add Routing to your React App.

This will be a simple Getting Started with React Router. For more details and functionality check the [Docs](https://reacttraining.com/react-router/web/guides/quick-start)

### What is Routing?

React Router keeps your UI in sync with the URL.

It allows your Single Page Application to have different Pages.

For example, one page with the List of Movies and one page for the details or one movie. Each with a different URL.

### React Router Setup

Install npm package.

```
npm install --save react-router-dom
```

`react-router-dom` is a package from the family of `react-router` that we use for navigation in the browser.

Until now, you had only 1 single most parent Component: `App`.

However, with React Router, you will have a different most parent Component, depending on the page you are in.

If you are using `react-redux`, you will have your router inside the `Provider` Component:

Code example:

```javascript
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//...

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/feed" component={ Feed } />
        <Route exact path="/users" component={ Users } />
        <Route exact path="/users/:userId" component={ User } />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
```

`Router` or `BrowserRouter` is the Parent Component. The child of `Router` needs to be only one Component. In this case `Switch`.

`Switch` is optional. It renders the first child `Route` or `Redirect` that matches the location.

If you don't use `Switch` more than one Component might be rendered in the same page. That might be what you intend. Just be aware of it.

`Route` Components have 3 main props: `exact`, `path` and `component`.

- The `path` is to know when the `Route` needs to be rendered.
- `exact` means that the `path` needs to be exact. Otherwise `/` matches all the paths, since `/` is part of `/feed`, `/users`, ...
- `component` is the Component that will be rendered. You can also use `render` or `children` prop and pass a function that returns JSX.

### Props added to Component

When a Component is rendered by the `Route` Component. Such as `Home` or `Feed` in our previous example. `Route` adds some useful props.

- `match`: [Docs](https://reacttraining.com/react-router/web/api/match)
- `location`: [Docs](https://reacttraining.com/react-router/web/api/location)
- `history`: [Docs](https://reacttraining.com/react-router/web/api/history)

If you want to have access to any of this prop in a Component that is not rendered by `Route` you need to use [withRouter](https://reacttraining.com/react-router/web/api/withRouter).

### Link

In order to add a link from one place to another, we won't be using anchor tags: `<a>`.

Instead, you'll be using `Link`. It's a Component that you can import from `react-router`.

```javascript
import { Link } from 'react-router-dom';

// ...
<Link to="/">Home</Link>
<Link to="/about">About</Link>
// ...
```

`to` is the prop used in `Link` to tell to where the `Link` should redirect the user.

### Route Params

Just like with any Router, the path can be dynamic.

For example: `/questions/:id`.

This path matches: `/questions/2`, `/questions/10` -even `/questions/some-question`, although it might not make sense.

Since we will use the same Component, just changing which Question info to show, we need to have access to the specific `2` or `10`.

The parameter is in the `match` prop from above: `this.props.match`. In one specific key `params`.

`params` will be an object where the properties will have the name set in the `path` of the route.

Better understood with an example:

```javascript
<Route to="/questions/:questionId" component={ Question } />
```

Then in the component:

```javascript
this.props.match.params.questionId
```

`this.props` is the props of the component.
`this.props.match` is the `match` prop passed when rendered by `Route`.
`this.props.match.params` is the object with the url params.
`this.props.router.params.questionId` will be the actual value in the path url.

If the url is `/questions/10`, `this.props.match.params.questionId` is `10`.

### More Features

React Router has more features than these.

For more info check the [Docs](https://reacttraining.com/react-router/web/guides/quick-start).
