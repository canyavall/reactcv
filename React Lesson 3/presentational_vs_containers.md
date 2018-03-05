# Presentational vs Container Components

[Read this Article](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.inndhsa74). 5 minutes

### Key Insights

- Differentiate between Components: Presentational vs Containers
- Presentational:
  - How things look
  - Have no dependencies on the rest of the app, such as Flux actions or stores
  - Receive data and callbacks exclusively via props
  - Rarely have their own state
  - Are written as functional components
- Containers:
  - How things work.
  - Do NOT have any DOM markup
  - Provide the data and behavior to presentational
  - Used with `connect`

### Folder Structure

You should have two different folders:

- `src/components` for presentational components
- `src/containers` for container components
