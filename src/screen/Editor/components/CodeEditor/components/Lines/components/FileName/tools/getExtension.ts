export default function getExtension(file: string) {
    const index = file.indexOf('.')
    const extension = []
    for(let i = index + 1; i < file.length; i++) {
        extension.push(file[i])
    }
    return extension.join('')
}