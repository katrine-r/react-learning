import React from 'react'
import './styles.css'

const Modal = (props) => {
    return (
        <div className={props.isActive 
            ? 'modal-wrapper active' : 'modal-wrapper'}
            onClick={() => props.setIsActive(false)}
        >
            <div className='modal-block'
                onClick={ev => ev.stopPropagation()}
            >
                {props.children}
            </div>
        </div>
    )
}

export default Modal

