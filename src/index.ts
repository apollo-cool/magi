import { app, BrowserWindow, ipcMain } from 'electron'
import path from "node:path";
import { create_models, delete_models, ask } from './backend.js';

console.log(import.meta.dirname);

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600, 
    webPreferences: {
      preload: path.join(import.meta.dirname, 'preload.cjs'),
      contextIsolation: true,
      nodeIntegration: false
    }
})

  win.loadFile('index.html')
}

app.whenReady().then( async () => {
  ipcMain.handle("ask", (event, question) => {
    return ask(question);
  })
  await create_models();
  createWindow()
})

app.on("window-all-closed", async () => {
  await delete_models();
  app.exit();
});