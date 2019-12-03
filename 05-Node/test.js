function concatenateCallback(base, plus, callback) {
  callback(base + plus);
}

function concatenatePromise(base, plus) {
  return new Promise((resolve, reject) => {
    resolve(base + plus);
  });
}

concatenateCallback("A", "B", result => {
  concatenateCallback(result, "C", result => {
    concatenateCallback(result, "D", result => {
      console.log("Callback: " + result);
    });
  });
});

concatenatePromise("A", "B")
  .then(result => {
    return concatenatePromise(result, "C");
  })
  .then(result => {
    return concatenatePromise(result, "D");
  })
  .then(result => {
    console.log("Promise: " + result);
  });

async function concatenateAsync() {
  let con = await concatenatePromise("A", "B");
  con = await concatenatePromise(con, "C");
  con = await concatenatePromise(con, "D");
  console.log("Async: " + con);
}
concatenateAsync();
