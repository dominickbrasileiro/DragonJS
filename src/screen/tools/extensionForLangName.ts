export default function extensionForLangName(extension: string) {
    const extensions = [
        ['js', 'javascript'], 
        ['ts', 'typescript'],
        ['jsx', 'react'],
        ['tsx', 'react-typescript'],
        ['json', 'JSON'],
        ['html', 'HTML'],
        ['css', 'CSS']
    ]

    let language

    for(let i = 0; i < extensions.length; i++) {
        if(extension === extensions[i][0]) return language = extensions[i][1]
    }

    return language
}