# React + Redux Best Practices

Best Practices does not mean Hard Truths. Use with caution.

Every App is different.

This is only a non exhaustive list of React and Redux Best Practices.

- Presentational vs Container Components
- Move Component State as down as possible
- Make Component decouple from each other. This also means with CSS rules. For example: careful with `position: absolute` that is coupled with a parent with `position: relative`
- Use CSS Modules library to create unique class names
- Suggested folder structure:
  - Components/
    - Presentational Components.
  - Containers/
    - Container Components.
  - HOC/
    - High Order Components.
  - Routes/
    - This are the Containers used as Components in the Route: `<Route path="/about" component={ About } />`.
- In Redux state, use an Object to store all the resources. Not an array.
- Avoid duplicated data in Redux State.
