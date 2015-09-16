import { Iterable, fromJS } from 'immutable';

export default function makeImmutable() {
  return next => action => {
    let result;
    if (!Iterable.isIterable(action.payload)) {
      const newAction = Object.assign({}, action,
        {
          payload: fromJS(action.payload),
        }
      );
      result = next(newAction);
    } else {
      result = next(action);
    }

    return result;
  };
}
