var rp = require('request-promise');



const promiseSerial = funcs =>
  funcs.reduce((promise, func) =>
    promise.then(result => func().then(Array.prototype.concat.bind(result))),
    Promise.resolve([]))

var urls = ['http://google.com', 'http://bing.com','http://yahoo.com'];

var urlfuncs = urls.map(url => () => rp(url));



// execute Promises in serial
promiseSerial(urlfuncs)
  .then(console.log)
  .catch(console.error)