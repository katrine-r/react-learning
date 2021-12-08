import React from 'react'

const Button = ({children}) => {
console.log(children)
    return (
        <button>
            {children}
        </button>
    )
}

export default Button
