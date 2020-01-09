function promiseCombiner(...promises) {
  if (promises.lengtht === 0) {
    throw new Error('At least one argument is required!');
  };

  let hasOneResolved = false;

  const promiseMap = (promise) => {
    return promise
      .then((result) => {
        hasOneResolved = true;
        return result;
      })
      .catch(() => 0);
    };

  const promisesCombined = Promies.all(promises.map(promiseMap))
    .then(values => hasOneResolved ? 
      values.reduce((sum, cur) => e + sum) :
      Promise.reject(0));

  return promisesCombined;
};
