const {app, BrowserWindow} = require('electron')   
const path = require('path')
   
const server = require('./server/server.js');
   
function createWindow () {   
	// Create the browser window.     
	win = new BrowserWindow({width: 800, height: 600, resizable: false}) 
	   
	//We dont want the menu to display
	win.setMenu(null);
	
	//We want dev tools
	win.webContents.openDevTools();
	
	// and load the index.html of the app.     
	win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`)
}      


app.on('ready', createWindow)