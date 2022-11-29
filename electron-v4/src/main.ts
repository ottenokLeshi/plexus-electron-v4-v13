import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'path'

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 1250,
    height: 800,
    webPreferences: {
      enableRemoteModule: true,
      contextIsolation: false,
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  ipcMain.on('set-title', (event: any, title: any) => {
    const webContents = event.sender
    const win = BrowserWindow.fromWebContents(webContents)
    win.setTitle(title)
  })

  mainWindow.loadFile(path.join(__dirname, '/page/index.html'))
}

app.commandLine.appendSwitch('allow-insecure-localhost', 'true')


app.whenReady().then(() => {
  createWindow()

  console.log('Application started')

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})