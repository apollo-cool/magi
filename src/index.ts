import { app, BrowserWindow, ipcMain, shell } from "electron";
import path from "node:path";
import { create_models, delete_models, ask, check_ollama } from "./backend.js";

const isOllamaRunning = await check_ollama();

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(import.meta.dirname, "preload.cjs"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  if (!isOllamaRunning) {
    win.loadFile("dist/pages/error.html");
  } else {
    win.loadFile("dist/index.html");
  }

};

app.whenReady().then(async () => {
  ipcMain.handle("ask", (event, question) => {
    return ask(question);
  });

  ipcMain.handle("check_ollama", () => {
    return check_ollama();
  });
  ipcMain.handle("open_url", (event, url: string) => {
    shell.openExternal(url);
  });

  if (isOllamaRunning) {
    await create_models();
  }

  createWindow();
});

app.on("window-all-closed", async () => {
  if (isOllamaRunning) {
    await delete_models();
  }

  app.exit();
});
