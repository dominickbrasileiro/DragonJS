// using shelljs for create file

import shell from 'shelljs'

interface createFileProps {
    filename: string;
    path: string;
    extension: string;
}

export default function createFile({ filename, path, extension }: createFileProps) {
    shell.touch(`${path}/${filename}.${ extension }`)
}