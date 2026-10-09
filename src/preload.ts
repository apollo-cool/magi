import { contextBridge } from "electron";
import { create_models, delete_models, ask } from "./backend.js"

contextBridge.exposeInMainWorld("versions", {
    create_models,
    delete_models,
    ask
})