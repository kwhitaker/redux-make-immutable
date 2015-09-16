import chai from 'chai';
import { fromJS } from 'immutable';
import makeImmutable from '../src/index';

describe('immutable middleware', () => {
  const notIterable = {
    id: 1,
    name: 'not an immutable object',
  };

  const iterable = fromJS(notIterable);
  const nextHandler = makeImmutable();
  it('Should coerce native types', () => {

  });
});
