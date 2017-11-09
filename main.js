const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;

const path = require("path");
const url = require("url");

let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		icon: __dirname + "/audiostreamer_logo.gif"
	});

	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, "index.html"),
		protocol: "file:",
		slashes: true
	}));

	mainWindow.on("closed", function() {
		mainWindow = null;
	});
}

app.on("ready", createWindow);

app.on("window-all-closed", function() {
	if(process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
	if(mainWindow === null) createWindow();
});

ipcMain.on("loadPage", (event, arg) => {
	let asd = 123;
	mainWindow.loadURL(arg);
});
