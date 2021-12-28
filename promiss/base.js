const promise = new Promise(function (resolve, reject) {
  // reject , resolve
  //resolve('123');
  //reject('312');
});

promise
  .then(function (resolve) {
    console.log(resolve);
  })
  .catch(function (reject) {
    console.log(reject);
  })
  .finally(function (value) {
    console.log(value);
  });

// promise all

const promise1 = new Promise(function (resolve) {
  setTimeout(() => {
    resolve([1]);
  }, 3000);
});

const promise2 = new Promise(function (resolve) {
  setTimeout(() => {
    resolve([2, 3]);
  }, 4000);
});

Promise.all([promise1, promise2]).then(function ([promise1, promise2]) {
  console.log(promise1.concat(promise2));
});
