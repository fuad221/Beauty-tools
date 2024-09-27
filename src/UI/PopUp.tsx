import React, { ReactNode } from 'react'
import Portal from './Portal'
import mc from './PopUp.module.css'

interface PopUpProps {
    onClose?: () => void,
    children: ReactNode
    open: boolean
}

const PopUp = ({ onClose, open, children }: PopUpProps) => {
    if (!open) return null

    return (
        <Portal>
            <div className={mc.backdrop} onClick={onClose}>
                <div className={mc.wrapper} onClick={e => e.stopPropagation()}>
                    <div className={mc.popUp}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}

export default PopUp


