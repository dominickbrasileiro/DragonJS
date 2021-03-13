const menuArray = ['file', 'editor'] // elementos do menu [file, editor, playground, terminal, configuration, help]
const openAndCloseMenu = (whichClick: string) => {
    for(let i = 0; i < menuArray.length; i++) {
        const e = document.getElementById(menuArray[i]) // musca os elemetos do menu  através do array menuArray
        !e ? null : e.removeAttribute('hidden')
        if(whichClick != menuArray[i]) {   
            !e ? null : e.hidden = true
        }
    }
}

export default openAndCloseMenu