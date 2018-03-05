# Flux Architecture

### Intro

From the official Facebook [Docs](https://facebook.github.io/flux/docs/in-depth-overview.html)

```
Flux is the application architecture that Facebook uses for building client-side web applications. It complements React's composable view components by utilizing a unidirectional data flow. It's more of a pattern rather than a formal framework, and you can start using Flux immediately without a lot of new code.
```

There are a few important concepts here:
- It's an architecture
- It's a pattern, rather than a framework
- Unidirectional data flow
- It's used for front end development

Some important concepts:
- It is NOT a library
- It is NOT React, NOR inside the library React

### Flow of data

![unidirectional flow of data](https://facebook.github.io/flux/img/flux-simple-f8-diagram-1300w.png)

The main idea behind flux is that there is only one was the data flows.

From the Store to the views.

The Views can't change the Store directly.

The Store is changed through Actions, which are Dispatched. When an action is dispatched, the store will change.

Then, an event of 'change' gets triggered, and the View asks for the new data.

### Trigger changes from the View

![view actions](https://facebook.github.io/flux/img/flux-simple-f8-diagram-with-client-action-1300w.png)

From the Views you can change the Store. However, not directly as we said.

In order to change the Store, the View can also Dispatch an action. Which will change the Store.

Then, again, an event of 'change' gets triggered, and the View asks for the new data.
