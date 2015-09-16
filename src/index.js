import { Iterable, fromJS } from 'immutable';
import { isFSA } from 'flux-standard-action';

export default function makeImmutable() {
  return next => action => {
    if (action.type === undefined) { return next(action); }

    const key = isFSA(action) ? 'payload' :
      action[Object.keys(action).map(k => {
        return k !== 'type';
      })][0];

    let payload = action[key];
    payload = Iterable.isIterable(payload) ? payload : fromJS(payload);

    const newAction = Object.assign({}, action, {
      [key]: payload,
    });

    return next(newAction);
  };
}
