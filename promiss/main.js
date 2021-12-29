let value = 1;

const sleep = function (ms) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
};

sleep(1000)
  .then(function () {
    console.log(value++);
    return sleep(1000);
  })
  .then(function () {
    console.log(value++);
  });
