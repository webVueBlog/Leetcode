const promise = Promise.resolve().then(() => {
  return promise;
})
promise.catch(console.err)


// Uncaught (in promise) TypeError: Chaining cycle detected for promise #<Promise>
