const menuArray = ['file', 'editor'] // elementos do menu [file, editor, playground, terminal, configuration, help]
const openAndCloseMenu = (whichClick: string) => {
    for(let i = 0; i < menuArray.length; i++) {
        const elementID = document.getElementById(menuArray[i]) // busca os elemetos(ID) do menu através do array menuArray
        !elementID ? null : elementID.removeAttribute('hidden')
        if(whichClick != menuArray[i]) {   
            !elementID ? null : elementID.hidden = true
        }
    }
}

export default openAndCloseMenu