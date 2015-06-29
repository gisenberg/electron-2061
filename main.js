var app = require("app");
var BrowserWindow = require("browser-window");

try {
  var git = require("git-utils");
} catch(err) {
  console.error(err);
  console.error(err.stack);
  process.exit();
}

require("crash-reporter").start();

app.on("window-all-closed", function() {
    if(process.platform == "darwin")
        return;

    app.quit();
});

var mainWindow = null;

app.on("ready", function() {
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadUrl("file://" + __dirname + "/index.html");

    mainWindow.on("closed", function() {
        mainWindow = null;
    });
});
