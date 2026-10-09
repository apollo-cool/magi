const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("backend", {
    ask: (question: string) => ipcRenderer.invoke("ask", question)
})