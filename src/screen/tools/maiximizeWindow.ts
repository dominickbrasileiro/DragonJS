import { remote } from 'electron'

function maximizeWindow() {
   const window = remote.getCurrentWindow() 
    window.maximize()
}   

export default maximizeWindow