# redux-make-immutable
Redux middleware to coerce native javascript types into the equivalent Immutable.js types.  Works with both [Flux Standard Actions](https://github.com/acdlite/flux-standard-action) non-standard actions.

If an action is submitted without a `type` key, it will be forwarded.

### Install
`npm install -S redux-make-immutable`

### Usage

```javascript
import makeImmutable from 'redux-make-immutable';

... applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
      makeImmutable
    );
```
