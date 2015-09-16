# redux-make-immutable
Redux middleware to coerce native javascript types into the equivalent Immutable.js types

### Install
`npm I -s redux-make-immutable`

### Usage
```
import makeImmutable from 'redux-make-immutable'
... applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
      makeImmutable
    );
```
