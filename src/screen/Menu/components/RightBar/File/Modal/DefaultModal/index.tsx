import React, { ReactNode } from 'react' 
import Header from '../../../../../../Editor/components/Header'
import createFile from '../../../../../../tools/createFile'
import extensionForLangName from '../../../../../../tools/extensionForLangName'
import {
    Container, ContainerOptions
} from './style'

interface DefaultModalProps {
    title: string;
    extension: string;
}

function DefaultModal ({ title, extension }: DefaultModalProps) {
    return (
        <Container>
            <Header title={ title } modal />

            <ContainerOptions>
                <table>
                    <tbody>
                        <tr>
                            <td>type</td>
                            <td>{ extensionForLangName(extension) }</td>
                        </tr>
                        <tr>
                            <td>name</td>
                            <td><input placeholder="file name" />.{extension}</td>
                        </tr>
                        <tr>
                            <td>destiny</td>
                            <td id="selectDirectoryContainer">
                                <label htmlFor="selectDirectory">selecionar uma pasta &#187;</label>
                                <input id='selectDirectory' directory="" webkitdirectory="" type="file" />
                            </td> 
                        </tr>
                    </tbody>
                </table>
            </ContainerOptions>
            <section>
                <input type="radio" />
                <span>&nbsp;init with hello world</span>
                <button onClick={() => {
                    const element = document.getElementsByTagName('input')

                    // file name
                    const fileName = element[0].value

                    // directory URL or Path
                    const path = () => !element[1].files ? '/' : element[1].files[0].path
                    const init = path().lastIndexOf('\\')
                    const exactPath = path().substring(0, init)

                    createFile({ filename: fileName, path: exactPath, extension: extension })
                }} >create</button>
            </section>
        </Container>
    )
}

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      // extends React's HTMLAttributes
      directory?: string;        // remember to make these attributes optional....
      webkitdirectory?: string;
    }
  } 

export default DefaultModal