import chai from 'chai';
import { Iterable, fromJS } from 'immutable';
import makeImmutable from '../src/index';

describe('immutable middleware', () => {
  let result;
  const TYPE = 'SOME_TYPE';
  const notIterable = {
    values: [1, 2, 3],
  };

  const iterable = fromJS(notIterable);

  const FSA = {
    type: TYPE,
    payload: notIterable,
  };

  const immutableFSA = {
    type: TYPE,
    payload: iterable,
  };

  const notFSA = {
    type: TYPE,
    values: notIterable.values,
  };

  const weirdAction = {
    payload: notIterable,
  };

  const doNext = (action) => action;

  it('should coerce native types', () => {
    result = makeImmutable()(doNext)(FSA);
    chai.expect(Iterable.isIterable(result.payload))
      .to.equal(true);
  });

  it('should ignore immutable types', () => {
    result = makeImmutable()(doNext)(immutableFSA);
    chai.expect(result.payload).to.equal(iterable);
  });

  it('should work with non-standard-actions', () => {
    result = makeImmutable()(doNext)(notFSA);
    chai.expect(Iterable.isIterable(result.values))
      .to.equal(true);
  });

  it('should forward weird actions', () => {
    result = makeImmutable()(doNext)(weirdAction);
    chai.expect(result).to.equal(weirdAction);
  });
});
