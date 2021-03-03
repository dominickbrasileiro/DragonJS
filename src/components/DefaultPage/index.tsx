import React, { ReactNode } from 'react'
import Header from '../Header'

interface DefaultPageProps {
    children: ReactNode
}

function DefaultPage ({ children } : DefaultPageProps) {
    return (
        <>
            <Header/>
            { children }
        </>
    )
}

export default DefaultPage