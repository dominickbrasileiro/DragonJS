import React, { ReactNode } from 'react'

interface BoxMenuProps {
    children: ReactNode
}

function BoxMenu ({ children }: BoxMenuProps) {
    return (
        <>
            <div>
                { children }
            </div>
        </>   
    )
}

export default BoxMenu