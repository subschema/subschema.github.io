
## Dependencies
Subschema compiles things into itself, if you want to use the source inside your project, and not the subschema dist files, you will need a few more deps.
* subschema-core
* subschema-dev-support

## Webpack
You will probably need to do some webpack munging.
Here is an example that does this.
If you include a webpack.subschema.js in the root of your project you can change how it compiles.

```js
module.exports = function(webpack, opts){
    //webpack is the current webpack config.
    //opts are some handy opts to see what mode its in.
    
    return webpack;
}


```

