const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("backend", {
    check_ollama: () => ipcRenderer.invoke("check_ollama"),
    ask: (question: string) => ipcRenderer.invoke("ask", question),
    open_url: (url: string) => ipcRenderer.invoke("open_url", url),
    ollama_error: () => ipcRenderer.invoke("ollama_error")
})