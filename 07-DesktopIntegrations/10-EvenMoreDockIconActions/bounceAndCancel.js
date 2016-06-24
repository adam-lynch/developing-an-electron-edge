var bounceAndCancel = function (callback) {
var bounceID = app.dock.bounce();

setTimeout(function () {
  app.dock.cancelBounce(bounceID);

  // if a callback was given
  if (typeof callback === 'function') {
    callback();
    }
  }, 1000);
};

bounceAndCancel(function () {
  bounceAndCancel(bounceAndCancel);
});