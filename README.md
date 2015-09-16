# redux-make-immutable
Redux middleware to coerce native javascript types into the equivalent Immutable.js types

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
