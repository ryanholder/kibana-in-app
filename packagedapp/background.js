var appWindow;

/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/trunk/apps/app.runtime.html
 * @see http://developer.chrome.com/trunk/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function() {
    runApp();
});

/**
 * Listens for the app restarting then re-creates the window.
 *
 * @see http://developer.chrome.com/trunk/apps/app.runtime.html
 */
chrome.app.runtime.onRestarted.addListener(function() {
    runApp();
});

/**
 * Creates the window for the application.
 *
 * @see http://developer.chrome.com/trunk/apps/app.window.html
 */
function runApp() {
    if (appWindow && !appWindow.contentWindow.closed) {
        appWindow.focus();
        return;
    }

    var options = {
        id: 'kibanaApp',
        bounds: {
            'width': 1024,
            'height': 768
        }
    };

    chrome.app.window.create(
        'index.html',
        options,
        function(win) {
            appWindow = win;
    });
}