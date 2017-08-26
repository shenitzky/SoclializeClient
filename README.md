##Socialize

##Description:

Our platform encourages interpersonal communication.
It achieved by using portable devices.
The application match between people according the location and 'factors' that selected for the match by the user.
With our technology people will have the platform to communicate and talk directly and not through the screen.

`Webpack` handles all file-related concerns:
* Transpiling from ES6 to ES5 with `Babel`
* Loading HTML files as modules
* Transpiling stylesheets and appending them to the DOM
* Loading all modules
* `*.spec.js` files as unit-test

`Gulp` is the orchestrator:
* Starting and calling Webpack

## File Structure

```
client
⋅⋅app/
⋅⋅⋅⋅app.js * app entry file
⋅⋅⋅⋅app.html * app template
⋅⋅⋅⋅common/ * functionality pertinent to several components propagate into this directory
⋅⋅⋅⋅components/ * where components live
⋅⋅⋅⋅⋅⋅components.js * components entry file
```

Thanks.