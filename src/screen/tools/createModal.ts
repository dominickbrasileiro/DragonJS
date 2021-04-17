import { remote } from "electron"

const BrowserWindow = remote.BrowserWindow


export default function createModal () {
    let modalWindow: Electron.BrowserWindow = new BrowserWindow({
        width: 600,
        height: 400,
        backgroundColor: '#191622',
        frame: true,
        webPreferences: {
            nodeIntegration: true
        },
        modal: true
    })

    modalWindow.loadURL('https://www.github.com/devjosecarlosteles')
    modalWindow.once('ready-to-show', () => {
        modalWindow?.show()
    })
}
