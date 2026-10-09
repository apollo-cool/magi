const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("backend", {
    isOllamaRunning: () => ipcRenderer.invoke("isOllamaRunning"),
    ask: (question: string) => ipcRenderer.invoke("ask", question),
    open_url: (url: string) => ipcRenderer.invoke("open_url", url)
})