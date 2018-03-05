# Eslint

### What's 'linting'?

Linting is the process of running a program that will analyze code for potential errors.

This means that you have a program to analyze your code.

That program is commonly known as a **Linter**

### Why a linter?

Currently a Linter is much more than a tool to catch errors. It is also a tool for proper coding style.

Proper coding style is a subjective term. Some accepted conventions are so widely used that are universal.

The most important for a team, is that everyone in the project sticks to the same coding style.

Rather than having a good Coding Style, is more important for all the developers to stick to One Coding Style. Or also called Style Guide.

This bring consistency to all the project and more readability for future developers.

**Conclusion**

- A linter helps catch errors
- A linter helps a development team to keep a consistent style across the project.

### Getting Started

We will be adding a linter to our Node project. The linter will be about Javascript programming language.

A very common tool to use as *linter* for JS is [Eslint](http://eslint.org).

Follow the [installation guide](http://eslint.org/docs/user-guide/getting-started):

- `$ npm install eslint --save-dev`
- Setup the configuration file: `$ ./node_modules/.bin/eslint --init`

  Choose the Airbnb styleguide. With No React.

- Run the command to lint a specific file or folder: `$ ./node_modules/.bin/eslint yourfile.js`

You might get some errors following this steps. If you do try installing globally the following packages.

```
$ npm install -g eslint eslint-config-airbnb-base eslint-plugin-import
```

If you have installed `eslint` globally you can then lint your files with the `eslint` command:

```
$ eslint src/
```

### Integration with your Text Editor

Most of the modern Text Editors offer the possibility to run the program continuously inside the Text Editor.

This means that you can see the errors while you type. This is very powerful, since you can catch errors and style discrepancies immediately.

For example, for Atom users you just need to install the following packages:
- linter
- linter-eslint

### Airbnb Styleguide

One of the most popular JS Styleguide is the one from Airbnb. They open source it and keep it up to date.

Moreover, they also have one of the best React Styleguide. That's why we are going to use this styleguide. Please, go ahead and take a look at their rules:

- [JS Styleguide](https://github.com/airbnb/javascript)
- [Inspect Airbnb rules](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base/rules)
