import { Iterable, fromJS } from 'immutable';

const makeImmutable = store => next => action => {
  let result;
  if (!Iterable.isIterable(action.payload)) {
    let newAction = Object.assign({}, action,
      {
        payload: fromJS(action.payload)
      }
    );
    result = next(newAction);
  } else {
    result = next(action);
  }

  return result;
};

export default makeImmutable;
