import chai from 'chai';
import { fromJS } from 'immutable';
import makeImmutable from '../src/index';

describe('immutable middleware', () => {
  const notIterable = {
    name: 'not an immutable object',
  };

  const iterable = fromJS(notIterable);

  const FSA = {
    type: 'someType',
    payload: notIterable,
  };

  const notFSA = Object.assign({}, iterable, {
    type: 'someType',
  });

  const nextHandler = makeImmutable();
  it('Should coerce native types', () => {

  });
});
