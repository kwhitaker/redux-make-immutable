'use strict';

exports.__esModule = true;
exports['default'] = makeImmutable;

var _immutable = require('immutable');

function makeImmutable() {
  return function (next) {
    return function (action) {
      var result = undefined;
      if (!_immutable.Iterable.isIterable(action.payload)) {
        var newAction = Object.assign({}, action, {
          payload: _immutable.fromJS(action.payload)
        });
        result = next(newAction);
      } else {
        result = next(action);
      }

      return result;
    };
  };
}

module.exports = exports['default'];