import { remote } from 'electron'
import React, { ReactNode } from 'react' 
import Header from '../../../../../../../Editor/components/Header'
import {
    Container, ContainerOptions
} from './style'

interface DefaultModalProps {
    title: string;
    children: ReactNode;
}

function DefaultModal ({ title, children }: DefaultModalProps) {
    return (
        <Container>
            <Header title={ title } modal />
            { children }

            <ContainerOptions>
                <table>
                    <tbody>
                        <tr>
                            <td>type</td>
                            <td>javascript</td>
                        </tr>
                        <tr>
                            <td>name</td>
                            <td><input placeholder="file name" />.js</td>
                        </tr>
                        <tr>
                            <td>destiny</td>
                            <td id="selectDirectoryContainer">
                                <label htmlFor="selectDirectory">selecionar um arquivo &#187;</label>
                                <input id='selectDirectory' directory="" webkitdirectory="" type="file" />
                            </td> 
                        </tr>
                    </tbody>
                </table>
            </ContainerOptions>
            <section>
                <input type="radio" />
                <span>init wich hello world</span>
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