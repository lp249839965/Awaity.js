import concurrent from './__internal__/concurrent';
import SubError from './__internal__/SubError';

export default function any(iterable) {
  var winner = void 0;

  return Promise.resolve(iterable).then(concurrent({
    breakOnError: false,
    onResolved: function onResolved(value) {
      winner = value;
    },

    onCompleted: function onCompleted(done, throws) {
      return function (count, values, errors) {
        if (winner) {
          done(winner);
        } else if (errors.length === values.length) {
          throws(new SubError(errors));
        }
      };
    }
  }));
}