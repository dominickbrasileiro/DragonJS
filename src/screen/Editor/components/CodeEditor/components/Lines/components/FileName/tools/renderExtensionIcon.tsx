import React from 'react'
import {
    SiJavascript,
    SiTypescript,
    SiCss3,
    SiHtml5
} from 'react-icons/si'

export default function renderExtensionIcon(extension: string) {
    return <>
        {
            extension === 'js' ? (
                <SiJavascript color="yellow" />
            ) : null
        }
        {
            extension === 'ts' ? (
                <SiTypescript color="royalblue" />
            ) : null
        }
        {
            extension === 'css' ? (
                <SiCss3 color="royalblue" />
            ) : null
        }
        {
            extension === 'html' ? (
                <SiHtml5 color="orange" />
            ) : null
        }
    </>
}