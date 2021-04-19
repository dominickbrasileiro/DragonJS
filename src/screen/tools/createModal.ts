import { remote } from "electron"

const BrowserWindow = remote.BrowserWindow

interface createModalProps {
    path: string;
    sizeX: number; // width
    sizeY: number; // height
}

const top = remote.getCurrentWindow()

export default function createModal ({ path, sizeX, sizeY }: createModalProps) {
    let modalWindow: Electron.BrowserWindow = new BrowserWindow({
        width: sizeX,
        height: sizeY,
        backgroundColor: '#151515',
        frame: false,
        webPreferences: {
            nodeIntegration: true
        },
        modal: true,
        parent: top,
        resizable: false
    })

    modalWindow.loadURL(`http://localhost:4000${path}`)
    modalWindow.once('ready-to-show', () => {
        modalWindow?.show()
    })
}
