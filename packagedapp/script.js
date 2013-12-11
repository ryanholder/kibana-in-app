/**
 * Created by ryanholder on 11/12/2013.
 */
// Prevent registrations for unload/beforeunload and warn, chrome will throw exception.
(function() {
  var windowAddEventListener = Window.prototype.addEventListener;
  Window.prototype.addEventListener = function(type) {
    if (type === 'unload' || type === 'beforeunload') {
          try {
        throw new Error('Do not use Window.addEventListener for ' + type);
      } catch (e) {
        console.error(e.message, e);
      }
    } else
      return windowAddEventListener.apply(window, arguments);
  };
})();

//function appInit() {
    require(['app'], function () {})
//}

//window.addEventListener("DOMContentLoaded", appInit);