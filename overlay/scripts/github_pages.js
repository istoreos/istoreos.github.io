// force reload page on VUE routing
(function(w) {
  var pushState = w.history.pushState;
  if ("function" === typeof pushState) {
    var history = w.history;
    history.pushState = function(state, unused, url) {
      if (url) {
        console.log("reload", url);
        w.location.href = url;
        return;
      } else {
        return pushState.apply(history, [].slice.call(arguments, 0));
      }
    };
  }
})(window);
