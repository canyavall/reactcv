# Current Front End Development

Until now, we haven't been using `node` and the browser together. We were running our programs either, in the browser or either in the terminal.

For example, if we were importing with `require` we were not running that in the browser. In the browser we were requiring the libraries with `<script>` tag.

### Why use `node`

Why should we want to use `node` for our javascript development? There are three main aspects.

First of all, with `node` and `npm` we have easy access to a lot of libraries. It is easier to manage libraries with `npm` that ourselves downloading the files and adding them in our project with `<script>` tags.

Second, for performance issues. Each `<script>` tag in the html is a new requests. If we could send everything in one request it would be much faster for the page to load.

Third, when writing in `node` we can write using javascript features that are still not available in the browsers. Or without caring whether they are supported or not. Using compilers, we can write in the new ES6 and the compiler will convert that to a Javascript version that all the browsers understand.

### How are they used together

The idea is very simple. They are not used together at the same time. We first use `node` to create the javascript file that will be sent to the client.

So far, when working for the browser, whatever we wrote was required in the browser and sent just like that.

When working with `node` for front end development the process changes.

- We write our javascript code.
- The Javascript code is compiled and bundled together into a new file -usually only one-.
- That new file will be the one required in the HTML and required by the browser.

### Conclusion

It is not that we use `node` in the browser. That does not make sense. Each browser has its own runtime environment.

`node` is used during development to create the javascript file that will be sent to the browser.
